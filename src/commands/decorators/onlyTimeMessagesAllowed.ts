import { Actions } from "../actions";
import { Message } from "node-telegram-bot-api";
import { hourMinutesRegexp } from "../../constants";

export function onlyTimeMessagesAllowed(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = async function(this: Actions, msg: Message, ...args: unknown[]) {
    const text = msg.text || "";
    if (!text || text.startsWith("/") || !hourMinutesRegexp.test(text)) {
      return Promise.resolve();
    }
    return originalMethod.apply(this, [msg, ...args]);
  };
  return descriptor;
}
