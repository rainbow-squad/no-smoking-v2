import TgBot from "../telegram-bot";
import { User, UsersRepo } from "../db";
import { Content, DialogKey } from "../constants";
import { getIdleVariants } from "../helpers/idle";
import { minsToTimeString } from "../lib_helpers/humanize-duration";
import { isDayToSendChatLinkCheck } from "../lib_helpers/luxon";

/**
 * Helper to make messages to send delayed
 * Only to use in smokingTimeTest
 * @private
 */
export const _sendDelayedToSmokers = (bot: TgBot, users: User[], isDayOfChatLinkSending?: boolean) => {
  users.forEach((user) => {
    if (isDayOfChatLinkSending && user.cigarettesInDay === 5) {
      bot.sendToUser(user, Content.JOIN_OUR_CHAT);
    }
    bot.sendToUser(user, Content.TIME_FOR_A_SMOKE);
  });
};

/**
 * Helper to make messages to send delayed
 * Only to use in smokingTimeTest
 * @private
 */
export const _sendDelayedToInactiveUsers = (bot: TgBot, users: User[]) => {
  users.forEach((user) => {
    const buttonsForIdle = getIdleVariants(user.lang);
    const no_penalty_time = minsToTimeString(user.deltaTime, user.lang);
    bot.sendToUser(user, Content.BOT_IGNORE, { ...buttonsForIdle, no_penalty_time }, DialogKey.ignore);
  });
};

/**
 * Method to notify all users about smoking time
 * @param bot - TelegramBot instance
 */
export const smokingTimeTest = async (bot: TgBot) => {
  const usersToSmoke = await UsersRepo.getAllSmokersToSmoke();
  const isDayOfChatLinkSending = isDayToSendChatLinkCheck();
  _sendDelayedToSmokers(bot, usersToSmoke, isDayOfChatLinkSending);
  const usersIgnoringBot = await UsersRepo.getAllIgnoringBot();
  _sendDelayedToInactiveUsers(bot, usersIgnoringBot);
};