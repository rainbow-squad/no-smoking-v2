# AGENTS.md

## Project Overview

This project is a Telegram bot that helps people quit smoking.

The core idea is that users gradually increase the time between smoking breaks. Instead of quitting immediately, they consciously control the interval between cigarettes. As the interval becomes longer over time, the user eventually reaches the point where they stop smoking altogether.

## Technology Stack

- Runtime: Node.js
- Database: MongoDB
- MongoDB library: Monk
- Telegram framework: `node-telegram-bot-api` version `^0.67.0`

### Important

The project intentionally uses `node-telegram-bot-api` `^0.67.0`. Do **not** upgrade the library or use APIs introduced in newer versions unless explicitly requested.

## Project Structure

The application source code is located in the `src` directory.

### Sending messages

The primary method for sending messages to users is:

- `sendToUser` in `src/telegram-bot.ts`

Whenever possible, use this method instead of interacting with the Telegram API directly.

### Smoking interval checks

The application checks whether it is time for a user's next smoking break every minute.

This logic is implemented in:

- `startMinutelySmokingTimeTest`

## Coding Guidelines

Follow these rules consistently throughout the project.

### `if` statements

Always use braces for the body of an `if` statement, even when it contains only a single statement.

Good:

```js
if (condition) {
    doSomething();
}
```

Bad:

```js
if (condition)
    doSomething();
```

### Avoid unnecessary `else`

When an `if` branch can exit early (for example with `return`, `continue`, or `throw`), prefer an early exit and omit the `else` block.

Good:

```js
if (!user) {
    return;
}

processUser(user);
```

Bad:

```js
if (!user) {
    return;
} else {
    processUser(user);
}
```

This style should be preferred whenever it improves readability.

## Localization

The bot supports multiple languages using the `i18n` library.

### Source language

Russian is the source language for all translations.

**Never modify existing Russian translations automatically.** Any changes to Russian texts should only be made when explicitly requested.

### Other languages

Translations for all other languages should remain structurally consistent with the Russian source.

When adding or updating translations:

- Preserve the same translation keys.
- Preserve placeholders and interpolation variables.
- Preserve pluralization rules and translation structure.
- Ensure every non-Russian locale contains the same set of translation keys as the Russian locale.

The Russian translation is the canonical source of truth.