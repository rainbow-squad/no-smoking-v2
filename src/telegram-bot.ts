import TelegramBot from "node-telegram-bot-api";
import logger from "./logger";
import { User, UsersRepo } from "./db";
import { ContentProps, getContent, getButtons } from "./content";
import { Content, DialogKey } from "./constants";
import { InlineKeyboard } from "./content/types";

const MESSAGE_DELAY_MS = 400;

type QueueItem = () => Promise<void>;

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Custom telegram bot class extend normal send message logic
 * @extends TelegramBot
 * @param token - bot token
 */
class TgBot extends TelegramBot {
  private queue: QueueItem[] = [];
  private isProcessing = false;

  private async processQueue(): Promise<void> {
    if (this.isProcessing) {
      return;
    }
    this.isProcessing = true;
    while (this.queue.length > 0) {
      const item = this.queue.shift()!;
      try {
        await item();
      } catch (err: unknown) {
        const retryAfter = (err as { response?: { body?: { parameters?: { retry_after?: number } } } })
          ?.response?.body?.parameters?.retry_after;
        if (retryAfter) {
          logger.warn(`Rate limited by Telegram, retrying after ${retryAfter}s`);
          this.queue.unshift(item);
          await sleep(retryAfter * 1000);
          continue;
        }
        logger.error("Failed to send message", err);
      }
      await sleep(MESSAGE_DELAY_MS);
    }
    this.isProcessing = false;
  }

  public enqueue(item: QueueItem): void {
    this.queue.push(item);
    this.processQueue();
  }

  constructor(token: string) {
    const polling = {
      autoStart: true,
      params: {
        timeout: 30
      },
    };
    const options = { polling,  onlyFirstMatch: true };
    super(token, options);
    this.setupErrorHandling();
    this.setupShutdownHandlers();
  }

  private setupShutdownHandlers(): void {
    process.on("SIGINT", () => this.handleShutdown("SIGINT"));
    process.on("SIGTERM", () => this.handleShutdown("SIGTERM"));
  }

  private setupErrorHandling(): void {
    this.on("polling_error", (error: Error) => {
      logger.error("Polling error:", error);
    });
  }

  private handleShutdown(signal: string): void {
    logger.info(`Received ${signal}, shutting down gracefully...`);
    this.stopPolling();
    UsersRepo.closeConnection();
    process.exit(0);
  }

  public sendToUser(
    user: User,
    contentKey: Content,
    contentProps: ContentProps = {},
    dialogKey?: DialogKey | InlineKeyboard
  ): void {
    const content = getContent(user.lang, contentKey, contentProps);
    const options: TelegramBot.SendMessageOptions = { parse_mode: "Markdown" };
    if (dialogKey && !Array.isArray(dialogKey)) {
      const buttons = getButtons(user.lang, dialogKey);
      options.reply_markup = buttons.reply_markup;
    }
    if (dialogKey && Array.isArray(dialogKey)) {
      options.reply_markup = { inline_keyboard: dialogKey };
    }
    if (!content) {
      logger.error(`Content for U-${user.chatId} not found, key: "${contentKey}"`, { contentKey, contentProps });
      this.enqueue(() => this.sendMessage(user.chatId, "Something went wrong. Please try again later.").then());
      return;
    }
    this.enqueue(() => this.sendMessage(user.chatId, content, options).then());
  };
}

export default TgBot;
