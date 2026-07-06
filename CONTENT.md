# Translation Context

## Purpose

This document provides contextual information for translating the application's user interface.

It is **not** the source of translatable strings. Instead, it explains the meaning, usage, and intent of dialogs, messages, and button labels so that translations remain accurate and consistent across all supported languages.

## Translation Sources

The actual source texts are located in the following files:

- Dialogs and content messages: `src/content/dialogs/dialogs.ru.ts`
- Button labels: `src/content/buttons/buttons.ru.ts`
- Smoking cessation reasons: `src/content/motivizer/motivizer.ru.ts`
- Motivational messages: `src/content/youcan/youcan.ru.ts`

Always use these files as the translation source. Never translate from any other locale, including English translations of the same content.

This document exists only to provide context for the translations.

# Domain Terminology

- **Smoking break** — an instance of smoking a cigarette. Use this term consistently instead of alternatives such as "smoke" or "cigarette break".
- **Interval** — the time between two smoking breaks.
- **Stage 1** — the initial measurement phase used to determine the user's baseline smoking interval.
- **Stage 2** — the active reduction phase that begins after Stage 1.
- **Progress** — the user's current advancement through the smoking reduction program.

# Translation Consistency

- Always translate the same concept using the same wording.
- Do not replace "Smoking break" with alternatives such as "Smoking event", "Cigarette break", or "Smoking session", even if they sound natural in the target language.
- Preserve placeholders (for example `{{delta_time}}`) exactly.
- Preserve commands such as `/start` exactly.
- Preserve button names exactly as they appear in the source strings unless the button label itself is being translated.

## Post-Translation Checklist for AI Agents

After completing a translation to any language, you **must** perform the following two checks:

### 1. Flag Check in `Content.START_NEW`

Open every locale's dialogs file (e.g. `dialogs.ru.ts`, `dialogs.en.ts`, and any other existing locale files) and locate the `Content.START_NEW` entry.

The flag line lists all supported languages using emoji flags (e.g. `🇷🇺 🇬🇧 🇪🇸 🇩🇪`). If the newly added language is not represented by its flag emoji in **every** locale's `Content.START_NEW`, add it.

Update all locale files — not just the new one.

### 2. `DialogKey.lang` Button Check in `src/content/index.ts`

Open `src/content/index.ts` and find the `DialogKey.lang` branch inside `selectButtonsByKey`.

It must contain one `buttonFor` entry per supported language. If a button for the newly added language is missing, add it following the same pattern as the existing entries.

Use buttons with the `Lang_` prefix (e.g. `BTN.Lang_ES`, `BTN.Lang_DE`).

Buttons must be arranged in rows of 2 elements each.

The last row must always be the pair of RU and EN locales.

### 3. Callback Handler in `src/commands/index.ts`

Open `src/commands/index.ts` and find the `callbacks` section that handles language button presses.

It must contain a `case` entry for each supported language's `BTN.Lang_` button. If the newly added language is missing, add it following the same pattern as the existing entries.

### 4. I18n `locales` Registration in `src/content/index.ts`

Open `src/content/index.ts` and find the `I18n` constructor call.

The `locales` property must list every supported language. If the newly added language is missing from the array, add it.

### 5. I18n Catalog Registration in `src/content/index.ts`

Open `src/content/index.ts` and find the section where `i18n.getCatalog()` is used to populate locale catalogs.

Each supported language must have a corresponding catalog entry that includes its dialogs, buttons, motivizer, and youcan content. If the newly added language is missing, add a catalog entry following the same pattern as the existing ones.

---

## General Translation Rules

- This document provides context only. The actual source strings are stored separately.
- Preserve every placeholder exactly as written (for example `{{delta_time}}` or `{{error}}`).
- Preserve bot commands exactly (for example `/start` and `/stats`).
- Preserve emoji unless the source string explicitly changes them.
- Keep terminology consistent throughout the project.
- Messages should encourage the user without creating guilt or shame.
- When the application adapts to the user's progress (for example by lowering difficulty), present it as supportive rather than as a punishment.
- Do not translate developer-only messages (`Content.DEV*`).

## Formatting and Style Rules

When translating content messages, preserve the original formatting and presentation.

### Formatting

- Keep the same paragraph structure as the source.
- Preserve all formatting placeholders exactly:
  - `${NL}` — line break
  - `${N2}` — double line break
  - `${ND}` — section break
  - `${B}` — bold
  - `${I}` — italic
- Do not remove, rename, or reorder formatting placeholders.
- Preserve emphasis. If the source uses `${B}` or `${I}`, the translated text should emphasize the corresponding translated word or phrase.

### Placeholders

- Preserve every placeholder exactly as written (for example `{{delta_time}}`, `{{error}}`).

### Formatting Placeholders

Formatting placeholders are literal text tokens.

They are **not** JavaScript template strings and **must not** be escaped, modified, or interpreted.

Correct examples:

```text
${NL}
${N2}
${ND}
${B}
${I}
```

Incorrect examples:

```text
\${NL}
\\${NL}
\${B}
```

Always copy formatting placeholders exactly as they appear in the source.

### Literal Tokens

The following tokens are literal parts of the source text and must be copied verbatim:

- `${NL}`
- `${N2}`
- `${ND}`
- `${B}`
- `${I}`
- `{{...}}`
- `/start`
- `/stats`

Never escape these tokens with backslashes.
Never insert additional backslashes.
Never wrap them in quotes.
Never translate or modify them.

### Emoji

- Preserve all emoji exactly as they appear in the source.
- Do not replace, remove, or add emoji.
- Preserve the original emoji order and placement whenever possible.

# Content Messages

This section provides contextual information for translating common content messages. The source strings already exist in the translation file.

---

## Content.MESSAGE

### Context

Used only to verify that the bot has successfully received a user's message.

This message is intended for debugging and has no business meaning.

### Translation Notes

- Keep the wording neutral and technical.
- Do not try to make it user-friendly.

---

## Content.ERROR

### Context

Generic error message used when an unexpected error occurs.

The `{{error}}` placeholder contains technical information about the error.

### Translation Notes

- Preserve the `{{error}}` placeholder exactly.
- Do not translate or modify the placeholder.
- Keep the surrounding text concise and technical.

---

## Content.USER_UNKNOWN

### Context

Displayed when the user has not yet been identified by the application.

The message instructs the user to authorize themselves using the `/start` button displayed below the message.

### Translation Notes

- Preserve `/start` exactly as written.
- Use a polite, instructional tone.

---

## Content.START_NEW

### Context

Welcome message shown when a user interacts with the bot for the first time.

The application does not yet recognize the user and no account exists.

### Translation Notes

- Use a welcoming, friendly tone.
- Do not imply that the user has already registered or authenticated.

---

## Content.START_EXISTING

### Context

Displayed when a returning user starts the bot after a long period of inactivity.

The application still has the user's previous progress and asks whether to continue from where they left off or restart the program.

The `{{min_delta}}` placeholder represents the user's initial minimum interval between smoking breaks.

The `{{delta_time}}` placeholder represents the interval the user had successfully reached before becoming inactive.

### Translation Notes

- The message should clearly present the choice between continuing existing progress and restarting.
- Preserve the `{{min_delta}}` and `{{delta_time}}` placeholders exactly.
- Use a welcoming and encouraging tone.

---

## Content.START_EXISTING_STAGE_1

### Context

Displayed after the user chooses to reset their progress completely and start the program from the beginning (Stage 1).

### Translation Notes

- Confirm that the reset has been accepted.
- Make it clear that the program will start from the beginning.
- Use a supportive and reassuring tone.

---

## Content.START_VALID_USER

### Context

Displayed when an already active user sends the `/start` command.

This is normally unexpected and usually happens accidentally or because the user is trying to recover the conversation.

The message informs the user that their program is already active and displays their current progress.

The `{{delta_time}}` placeholder contains the user's current interval between smoking breaks.

The `{{time_to_get_smoke}}` placeholder contains the scheduled time of the next smoking break.

### Translation Notes

- Preserve the `{{delta_time}}` and `{{time_to_get_smoke}}` placeholders exactly.
- Reassure the user that their progress is safe.
- The tone should be friendly and informative.

---

## Content.START_RESET_IGNORE

### Context

Displayed when the user decides to keep their existing progress instead of resetting it.

The message confirms that no changes were made, reminds the user that they can restart later by sending `/start` again, and encourages them to continue recording every smoking break.

The `{{delta_time}}` placeholder contains the user's current interval between smoking breaks.

### Translation Notes

- Preserve the `{{delta_time}}` placeholder exactly.
- The reminder about recording smoking breaks should sound encouraging rather than demanding.
- The tone should be supportive.

---

## Content.START_RESET_TO_STAGE_1

### Context

Displayed after the user chooses to reset all progress and return to the beginning of Stage 1.

Stage 1 is the initial measurement phase of the program.

### Translation Notes

- Clearly communicate that all progress has been reset.
- Indicate that the user is starting from the beginning of the program.
- Use a positive and encouraging tone.

---

## Content.START_RESET_TO_STAGE_2

### Context

Displayed after the user chooses to reset their progress to the beginning of Stage 2 instead of starting over completely.

Stage 2 begins after the initial measurement phase.

The `{{delta_time}}` placeholder contains the starting interval for Stage 2, which is equal to the user's minimum interval (`min_delta`).

### Translation Notes

- Preserve the `{{delta_time}}` placeholder exactly.
- Make it clear that the user is resuming from the beginning of Stage 2 rather than restarting the entire program.
- Use a supportive and encouraging tone.

---

## Content.LANG

### Context

Displayed when the user is asked to choose the application language.

The message must always include both the localized text and an English version to help users recover if they accidentally selected the wrong language.

### Translation Notes

- The message should be short and immediately understandable.
- The English version should always remain present regardless of the selected language.
- The purpose is to help users recover from an incorrect language selection.

---

## Content.LANG_APPLIED

### Context

Confirmation message displayed after the user selects a language.

The message confirms which language has been applied to the application.

### Translation Notes

- The tone should be positive and confirming.
- The selected language name should sound natural in the target language.

---

## Content.STAGE_1

### Context

Introduces Stage 1 of the program.

Stage 1 is the measurement phase. The user needs to record 20 smoking intervals so the application can calculate their average smoking interval. This average becomes the baseline for the rest of the program.

The message also reminds the user to press the "I'm smoking" button every time they smoke.

### Translation Notes

- Explain the purpose of Stage 1 clearly.
- Keep the tone encouraging.
- The reminder about pressing the "I'm smoking" button should sound supportive rather than strict.

---

## Content.FIRST_STEP

### Context

Displayed after the user records their very first smoking interval during Stage 1.

This is the user's first successful measurement.

The message congratulates the user and reminds them to continue pressing the "I'm smoking" button every time they smoke.

### Translation Notes

- Use a positive, congratulatory tone.
- Reinforce the importance of recording every smoking break.
- The reminder should feel motivating.

---

## Content.STAGE_1_FORGOT_TO_CLICK

### Context

Displayed when the user indicates that they forgot to press the "I'm smoking" button during Stage 1.

The missed interval is not restored. Instead, a new measurement starts from the current moment.

The message reassures the user that forgetting occasionally is not a problem and encourages them to continue.

### Translation Notes

- Reassure the user that this situation is normal.
- Avoid wording that sounds like a warning or punishment.
- Keep the tone supportive and motivating.

---

## Content.STAGE_1_IGNORE_MIN

### Context

Displayed when the user presses the "I'm smoking" button too soon after the previous recorded smoking break.

This usually happens when the user accidentally presses the button multiple times.

Intervals shorter than the minimum allowed value are ignored to maintain accurate measurements.

The `{{min_stage_1}}` placeholder contains the minimum interval (in minutes) that can be recorded.

The `{{stage_1_left}}` placeholder contains the number of remaining intervals needed to complete Stage 1.

### Translation Notes

- Preserve the `{{min_stage_1}}` and `{{stage_1_left}}` placeholders exactly.
- Explain that the interval was intentionally ignored.
- Avoid making the user feel they made a serious mistake.

---

## Content.STAGE_1_IGNORE_MAX

### Context

Displayed when the recorded interval is longer than the maximum allowed duration for Stage 1 measurements.

Very long intervals are excluded because they reduce the accuracy of the baseline calculation.

The message reminds the user to remember pressing the "I'm smoking" button every time they smoke.

The `{{max_stage_1}}` placeholder contains the maximum interval accepted during Stage 1.

The `{{stage_1_left}}` placeholder contains the number of remaining intervals needed to complete Stage 1.

### Translation Notes

- Preserve the `{{max_stage_1}}` and `{{stage_1_left}}` placeholders exactly.
- Explain that unusually long intervals are intentionally excluded from the calculation.
- The reminder should be encouraging rather than critical.

---

## Content.STAGE_1_PROCESSING

### Context

Displayed after the user presses the "I'm smoking" button during Stage 1 and the recorded interval has been successfully accepted.

The message confirms that the measurement has been recorded and informs the user how many intervals remain before Stage 1 is completed.

The `{{stage_1_left}}` placeholder contains the number of remaining intervals required to finish Stage 1.

### Translation Notes

- Preserve the `{{stage_1_left}}` placeholder exactly.
- The message should reassure the user that their progress has been recorded.
- Keep the tone positive and motivating.

---

## Content.STAGE_1_YOU_CAN_RESET

### Context

Displayed as a reminder during Stage 1.

The purpose of Stage 1 is to measure the user's natural smoking habits. Users should not intentionally change their behavior while measurements are being collected.

If the user believes that the collected measurements are inaccurate or unrepresentative, they can restart Stage 1 at any time by sending the `/start` command.

### Translation Notes

- Preserve `/start` exactly as written.
- Encourage the user to behave naturally during the measurement phase.
- Avoid wording that could make the user feel they have failed.
- The possibility of restarting should sound reassuring rather than alarming.

---

## Content.STAGE_1_END

### Context

Displayed when the user successfully completes Stage 1.

The application has collected all required measurements, calculated the user's average smoking interval, and is now transitioning the user to Stage 2.

The `{{delta_time}}` placeholder contains the calculated average smoking interval.

### Translation Notes

- Preserve the `{{delta_time}}` placeholder exactly.
- Congratulate the user on completing Stage 1.
- Clearly communicate that Stage 2 is the next step.
- Use an encouraging tone that reinforces the user's progress.

## Content.SETTINGS

### Context

Displayed immediately after the user completes Stage 1.

Before entering Stage 2, the user must complete the initial application setup. This includes configuring their local time and reading the explanation of how the program works.

### Translation Notes

- Clearly communicate that setup is the next required step.
- The message should feel like a natural continuation of the onboarding process.
- Use an encouraging tone.

---

## Content.TIMEZONE_INTRO

### Context

Introduces the timezone configuration step.

The application requires the user's timezone in order to display all scheduled smoking times using the user's local time.

### Translation Notes

- Keep the explanation brief.
- Explain why the timezone is needed without unnecessary technical details.

---

## Content.TIMEZONE

### Context

Provides a more detailed explanation of why selecting the correct timezone is important.

If the user does not know their timezone, they are advised to search for "timezone" in Google.

### Translation Notes

- Explain the importance of selecting the correct timezone.
- Preserve the word "timezone" exactly, as users may search for this term.
- The tone should be helpful and reassuring.

---

## Content.TIMEZONE_SELECTED

### Context

Displayed after the application successfully recognizes the provided timezone.

The message asks the user to confirm that both the detected timezone and the displayed local time are correct.

The `{{timezone}}` placeholder contains the detected timezone.

The `{{local_time}}` placeholder contains the current local time according to the selected timezone.

### Translation Notes

- Preserve the `{{timezone}}` and `{{local_time}}` placeholders exactly.
- Make it clear that the user is confirming the detected information.

---

## Content.TIMEZONE_INVALID

### Context

Displayed when the application cannot recognize or parse the timezone provided by the user.

The user should try entering the timezone again.

### Translation Notes

- Explain that the provided timezone could not be recognized.
- Encourage the user to try again.
- Avoid technical wording.

---

## Content.LOCAL_TIME_NEW

### Context

Alternative method of determining the user's timezone.

Instead of entering a timezone identifier, the user is asked to enter their current local time using the 24-hour format.

### Translation Notes

- Clearly request the current local time.
- Mention that the 24-hour format should be used.

---

## Content.LOCAL_TIME

### Context

Displayed after the user enters their local time.

The application shows the interpreted time and asks the user to confirm that it is correct.

The `{{local_time}}` placeholder contains the time stored by the application.

### Translation Notes

- Preserve the `{{local_time}}` placeholder exactly.
- Make the confirmation request clear and simple.

---

## Content.DIFFICULTY_DESCRIPTION

### Context

Introduces the difficulty selection before Stage 2.

This is the main explanation of how the program works.

The user gradually reduces smoking by pressing the "I'm smoking" button whenever they smoke. Different difficulty levels control how aggressively the program increases the interval between smoking breaks.

### Translation Notes

- This is one of the main onboarding messages.
- Clearly explain how the program works.
- Encourage the user without sounding overly strict.
- Make the explanation easy to understand.

---

## Content.DIFFICULTY_EASY

### Context

Label for the easiest difficulty level.

Although this is the easiest mode, it should be presented as the recommended learning mode rather than a weak option.

The displayed text consists of a single word: **"Training"**.

### Translation Notes

- Translate using a single word.
- Choose wording that sounds positive and encourages beginners.
- Avoid wording that suggests the mode is inferior.

---

## Content.DIFFICULTY_MEDIUM

### Context

Label for the standard difficulty level.

Instead of emphasizing difficulty, the displayed text consists of the single word **"Normal"**.

### Translation Notes

- Translate using a single word.
- The label should represent the standard or recommended experience.

---

## Content.DIFFICULTY_HARD

### Context

Label for the highest difficulty level.

Although internally this is the hardest mode, users see it as **"Fast"** because the emphasis is on achieving results more quickly.

The displayed text consists of a single word.

### Translation Notes

- Translate using a single word.
- Emphasize speed rather than difficulty.
- Avoid wording that sounds intimidating.

---

## Content.DIFFICULTY_SELECTED

### Context

Displayed after the user manually changes the difficulty level.

The `{{difficulty}}` placeholder contains the selected difficulty name.

### Translation Notes

- Preserve the `{{difficulty}}` placeholder exactly.
- Confirm the user's selection in a positive tone.

---

## Content.DIFFICULTY_HARD_DECREASED

### Context

Displayed when the application automatically lowers the difficulty from the highest level to the normal level.

This happens because the user has accumulated too many penalties.

The message should reassure the user that penalties will no longer be applied after the difficulty reduction.

### Translation Notes

- Avoid making the user feel they have failed.
- Present the automatic adjustment as supportive.
- Reassure the user that the program is adapting to help them succeed.

---

## Content.DIFFICULTY_HARD_AUTO

### Context

Displayed when the application automatically increases the user's difficulty from the normal level to the highest level.

This occurs because the user is consistently performing well.

### Translation Notes

- This is a congratulatory message.
- Emphasize the user's progress and achievement.
- The automatic increase should feel like a reward rather than a forced change.

---

## Content.SETTINGS_DONE

### Context

Displayed after the initial setup has been completed successfully.

### Translation Notes

- Keep the message short.
- Congratulate the user briefly.
- Signal that the application is ready to use.

---

## Content.SETTINGS_UPDATED

### Context

Displayed after the user changes one or more settings, such as their timezone.

### Translation Notes

- Keep the message short.
- Simply confirm that the settings have been updated successfully.

---

## Content.SETTINGS_UPDATED_ON_IDLE

### Context

Displayed when the user's settings have been automatically refreshed after a long period of inactivity.

This typically happens because some settings were cleared while the user was inactive.

### Translation Notes

- Keep the message short.
- Simply inform the user that the settings have been updated.
- Do not imply that the user did anything wrong.

---

## Content.STAGE_2_INITIAL

### Context

Displayed when the user enters Stage 2 after completing the initial setup.

This message congratulates the user on completing Stage 1 and introduces Stage 2, where the application begins helping the user gradually increase the interval between smoking breaks.

The message also reminds the user to press the "I'm smoking" button every time they smoke.

The `{{delta_time}}` placeholder contains the average smoking interval calculated during Stage 1.

### Translation Notes

- Preserve the `{{delta_time}}` placeholder exactly.
- Congratulate the user on reaching Stage 2.
- Reinforce that recording every smoking break remains important.
- Keep the tone encouraging and motivational.

---

## Content.NEXT_SMOKING_TIME

### Context

Primary informational message displayed throughout Stage 2.

It tells the user when their next smoking break is scheduled.

The `{{time_to_get_smoke}}` placeholder contains the user's local time.

### Translation Notes

- Preserve the `{{time_to_get_smoke}}` placeholder exactly.
- Keep the message very short.
- The meaning should be equivalent to "Your next smoking break is after {{time_to_get_smoke}}."

---

## Content.STAGE_2_HINT

### Context

Displayed once per day during Stage 2.

This is one of the application's main motivational messages.

It explains that the urge to smoke usually lasts no longer than five minutes, and that distracting oneself during those five minutes often makes the craving disappear.

### Translation Notes

- Keep the tone supportive and encouraging.
- Focus on motivation rather than discipline.
- Avoid sounding medical or overly scientific.

---

## Content.STAGE_2_PROPS_MISSING

### Context

Displayed when the user attempts to perform a Stage 2 action but required configuration data is missing.

This situation should never normally occur and most likely indicates an internal application error.

The message should explain the problem and ask the user to contact support through `{{tg_group_link}}`.

### Translation Notes

- Preserve the `{{tg_group_link}}` placeholder exactly.
- Explain that this is an unexpected technical issue.
- Avoid blaming the user.
- Encourage contacting support.

---

## Content.STAGE_2

### Context

Displayed when the user records their first smoking break of the current day.

The application confirms that today's starting time has been recorded.

### Translation Notes

- Keep the message short.
- Confirm that the smoking break has been recorded successfully.

---

## Content.STAGE_2_SUCCESS

### Context

Displayed when the user records a smoking break after waiting until the scheduled smoking time or later.

The user successfully completed the required interval.

### Translation Notes

- Congratulate the user.
- Reinforce that they successfully waited long enough.
- Keep the tone motivating.

---

## Content.STAGE_2_IGNORE_MIN

### Context

Displayed when the user records another smoking break too soon after the previous one.

This usually happens because the button was pressed accidentally or because of temporary network issues.

Intervals shorter than the minimum allowed value are ignored.

The `{{min_interval}}` placeholder contains the minimum accepted interval.

### Translation Notes

- Preserve the `{{min_interval}}` placeholder exactly.
- Explain that the duplicate record was intentionally ignored.
- Reassure the user that this is not a problem.

---

## Content.PENALTY

### Context

Displayed when the user smokes before reaching the scheduled smoking time.

The application records a penalty for ending the interval early.

The `{{penalty}}` placeholder contains the total number of penalties received today.

### Translation Notes

- Preserve the `{{penalty}}` placeholder exactly.
- Explain that the smoking break was recorded successfully even though it occurred early.
- Avoid wording that feels punitive or judgmental.

---

## Content.PENALTY_3

### Context

Displayed after the user accumulates three penalties in a single day.

This indicates that the current difficulty level is likely too demanding.

The application suggests switching to the easiest difficulty level to make the program more manageable.

### Translation Notes

- Present the suggestion as supportive rather than corrective.
- Reassure the user that lowering the difficulty is a normal part of the process.
- Avoid making the user feel they have failed.

---

## Content.IDLE_NO_CIGARETTES

### Context

Displayed when the interval between two recorded smoking breaks is unusually long, making it appear that a new day has started.

Instead of continuing the previous day, the application automatically starts a new day.

### Translation Notes

- Explain that a new day has been started automatically.
- Keep the tone neutral and reassuring.

---

## Content.TIME_FOR_A_SMOKE

### Context

Displayed when the scheduled smoking time has been reached.

The user has successfully waited long enough and may now smoke.

### Translation Notes

- Keep the message very short.
- The tone should feel rewarding rather than encouraging smoking.

---

## Content.ON_IDLE_START

### Context

Displayed after a very long interval between smoking breaks, typically because the user was sleeping.

The application starts a new day.

### Translation Notes

- Keep the message short.
- Clearly indicate that a new day has begun.

---

## Content.ON_IDLE_TIME_CONFIRMATION

### Context

Displayed at the beginning of each new day.

The application asks the user to verify that their local time is still correct.

This allows users to update their timezone if they have travelled or changed timezones.

### Translation Notes

- Ask for confirmation in a natural way.
- Make it clear that the user can update their local time if necessary.

---

## Content.ON_IDLE_STATS_1

### Context

Displayed at the beginning of a new day.

The message summarizes how many cigarettes the user smoked during the previous day.

The `{{cigarettes}}` placeholder contains that number.

### Translation Notes

- Preserve the `{{cigarettes}}` placeholder exactly.
- Present the information neutrally without judging the user.

---

## Content.ON_IDLE_STATS_2

### Context

Displayed at the beginning of a new day.

The application summarizes the user's progress and calculates today's new smoking interval.

The `{{prev_delta}}` placeholder contains yesterday's smoking interval.

The `{{new_delta}}` placeholder contains today's smoking interval.

The `{{step}}` placeholder contains the interval increase determined by the selected difficulty.

The `{{penalty}}` placeholder contains yesterday's number of penalties.

The `{{penalty_mins}}` placeholder contains the total penalty adjustment in minutes.

### Translation Notes

- Preserve all placeholders exactly.
- Explain the updated interval clearly.
- Present penalties as part of the calculation rather than as punishment.

---

## Content.WINSTRIKE

### Context

Displayed when the user completes several consecutive days without receiving any penalties.

The `{{winstrike}}` placeholder contains the current streak.

### Translation Notes

- Preserve the `{{winstrike}}` placeholder exactly.
- Keep the tone celebratory and motivating.

---

## Content.WINSTRIKE_BASE

### Context

Displayed while the user is using the Training difficulty.

Advancing to the next difficulty requires completing a certain number of penalty-free days. These days do not have to be consecutive.

The `{{day}}` placeholder contains the number of completed qualifying days.

The `{{of_days}}` placeholder contains the total number of days required.

### Translation Notes

- Preserve both placeholders exactly.
- Clearly communicate progress toward unlocking the next difficulty.

---

## Content.WINSTRIKE_MEDIUM

### Context

Displayed while the user is using the Normal difficulty.

Unlike the Training difficulty, qualifying days must be consecutive.

The `{{day}}` placeholder contains the current consecutive streak.

The `{{of_days}}` placeholder contains the required streak length.

### Translation Notes

- Preserve both placeholders exactly.
- Make it clear that the days must be consecutive.

---

## Content.WINSTRIKE_BASE_FAILED

### Context

Displayed when the user misses the required interval while using the Training difficulty.

Training difficulty does not apply penalties for smoking too early.

### Translation Notes

- Reassure the user that no penalty has been applied.
- Reinforce that the Training difficulty is intended for learning.
- Keep the tone supportive.

---

## Content.WINSTRIKE_BASE_SUCCESS

### Context

Displayed when the user successfully completes the required number of penalty-free days on the Training difficulty.

The application congratulates the user and recommends moving to the next difficulty level.

### Translation Notes

- Congratulate the user on their achievement.
- Encourage progression to the next difficulty.
- Keep the tone positive and motivating.

---

## Content.BOT_IGNORE

### Context

Displayed after the user has been inactive for two days.

The application assumes that the user may no longer be following the program and asks what happened.

Possible reasons include:
- the user decided not to quit smoking;
- the user relapsed;
- the user simply stopped using the bot.

If the user relapsed, the application offers several recovery options:
- continue from the current progress;
- restart the program from the beginning;
- manually set a new smoking interval.

The manual interval option is primarily intended for users whose smoking interval has become very long (typically longer than 2 hours and 30 minutes).

### Translation Notes

- The tone should be supportive and non-judgmental.
- Avoid language that could make the user feel guilty.
- Emphasize that continuing the program is always possible.

---

## Content.BOT_IGNORE_JUST_GO_ON

### Context

Displayed when the user chooses to continue from their current progress.

The application confirms the decision and reminds the user to continue recording every smoking break using the "I'm smoking" button.

### Translation Notes

- Confirm the decision positively.
- Encourage the user to continue without implying they made a mistake.

---

## Content.BOT_IGNORE_SET_OWN_INTERVAL

### Context

Displayed when the user chooses to manually specify a new smoking interval.

The application asks the user to enter the desired interval and provides several examples of valid input.

### Translation Notes

- Clearly request the interval.
- Make the examples easy to understand.
- The tone should be instructional and friendly.

---

## Content.BOT_IGNORE_FAILED

### Context

Displayed when the user indicates that they no longer intend to quit smoking.

The application briefly acknowledges the decision without applying pressure.

The user is reminded that they can return to the program at any time by sending the `/start` command.

### Translation Notes

- Preserve `/start` exactly as written.
- Avoid sounding disappointed or judgmental.
- Respect the user's decision while leaving the door open for returning later.

---

## Content.BOT_IGNORE_SUCCESS

### Context

Displayed when the user indicates that they have successfully quit smoking.

The application congratulates the user, thanks them for using the program, offers an optional donation link, and reminds them that they can restart the bot at any time using `/start`.

### Translation Notes

- Preserve `/start` exactly as written.
- This is one of the most positive messages in the application.
- Congratulate the user sincerely.
- Mention the donation as an optional way to support the project, without sounding pushy.

---

## Content.CUSTOM_INTERVAL_SUCCESS

### Context

Displayed after the user enters a custom smoking interval and the application successfully applies it.

The user is informed that the new interval has been saved and can continue using the application normally.

### Translation Notes

- Confirm the successful update.
- Encourage the user to continue the program.
- Keep the tone positive and reassuring.

---

## Content.CUSTOM_INTERVAL_ERROR

### Context

Displayed when the application cannot understand or apply the custom smoking interval entered by the user.

The user is asked to enter the interval again.

### Translation Notes

- Explain that the interval could not be processed.
- Encourage the user to try again.
- Avoid technical language or error details.

---

## Content.STATS

### Context

Displayed when the user requests their statistics by sending the `/stats` command.

The message summarizes the user's overall progress since joining the program.

The `{{difficulty}}` placeholder contains the current difficulty level.

The `{{start_date}}` placeholder contains the date when the user started using the bot.

The `{{days_from_start}}` placeholder contains the number of days since the user joined.

The `{{cigarettes}}` placeholder contains the total number of recorded cigarettes.

The `{{penalty_all}}` placeholder contains the total number of penalties accumulated.

The `{{delta_min}}` placeholder contains the user's initial smoking interval measured during Stage 1.

The `{{delta_time}}` placeholder contains the user's current smoking interval.

### Translation Notes

- Preserve all placeholders exactly.
- Present the statistics as a positive summary of the user's journey.
- Keep the tone informative and encouraging.

---

## Content.HOW

### Context

Displayed when the user wants to learn how to support the project.

The message explains how users can help the author, includes a donation link, and provides the administrator's email address.

The `{{admin_email}}` placeholder contains the administrator's email address.

### Translation Notes

- Preserve the `{{admin_email}}` placeholder exactly.
- Present donations as entirely optional.
- The tone should be appreciative rather than promotional.

---

## Content.MAXIMUM_REACHED

### Context

Displayed when the user's smoking interval has reached the maximum value supported by the application.

From this point onward, the application no longer increases the interval between smoking breaks.

### Translation Notes

- Congratulate the user on reaching the maximum milestone.
- Clearly explain that no further interval increases will occur.
- Frame this as an achievement.

---

## Content.JOIN_OUR_CHAT

### Context

Invitation message encouraging the user to join the application's community chat.

The community allows users to communicate, ask questions, share experiences, and receive updates about the project.

### Translation Notes

- Keep the invitation friendly and welcoming.
- Encourage participation without sounding promotional.

---

## Content.DEV*

### Context

Developer-only messages used for debugging, diagnostics, testing, or internal maintenance.

This includes all translation keys whose names begin with `Content.DEV`, such as `Content.DEV_OFF`.

### Translation Notes

- These messages are not intended for end users.
- Do not translate these messages.
- Preserve the original source text exactly.

---

# Button Labels

This section provides contextual information for translating button labels.

Developer buttons (`BTN.DEV*`) and language selection buttons (`BTN.LANG*`) must **not** be translated.

---

## BTN.CallStart

### Context

Displayed when the user needs to start or restart the onboarding process.

Instead of asking the user to type `/start` manually, the application displays this button.

### Translation Notes

- Preserve `/start` exactly as written.
- The button should simply execute the `/start` command.

---

## BTN.Beginning

### Context

Displayed after the user selects a language and is ready to begin Stage 1.

Pressing the button starts the program.

### Translation Notes

- Keep the label short and welcoming.
- The wording should invite the user to begin.

---

## BTN.Im_Smoking

### Context

Legacy button previously used to record that the user is currently smoking.

This button is kept only for backward compatibility and is no longer used in normal application flow.

### Translation Notes

- Preserve the "(Legacy)" indication if present.
- This button should not be used for new translations.

---

## BTN.Im_Smoking_1
## BTN.Im_Smoking_2
## BTN.Im_Smoking_3

### Context

Primary action button used throughout the application.

The user presses this button every time they start a smoking break.

Multiple keys exist only to support idempotent processing. They all represent exactly the same action.

### Translation Notes

- All three buttons should have identical translations.
- Keep the label short.
- Preserve the cigarette emoji.

---

## BTN.Forgot_To_Use_Smoking_Button

### Context

Displayed during Stage 1.

Allows the user to indicate that they forgot to press the "I'm smoking" button earlier.

Pressing this button starts a new measurement from the current time.

### Translation Notes

- Keep the wording short.
- The tone should be neutral rather than apologetic.

---

## BTN.Reset_Stage_1

### Context

Displayed after a long period of inactivity.

Allows the user to completely restart the program from Stage 1.

### Translation Notes

- The wording should sound positive.
- Clearly indicate a full reset.

---

## BTN.Reset_Stage_2

### Context

Displayed after a long period of inactivity.

Allows the user to restart from the beginning of Stage 2 instead of losing all progress.

### Translation Notes

- Clearly indicate that only Stage 2 is being restarted.
- Preserve the Stage 2 terminology.

---

## BTN.Reset_Ignore

### Context

Displayed after a long period of inactivity.

The user chooses to keep their current progress unchanged.

### Translation Notes

- Express the idea of continuing without making changes.
- Keep the wording concise.

---

## BTN.Level_Easy

### Context

Changes the program to the easiest difficulty level.

This difficulty is presented as the recommended learning mode.

### Translation Notes

- Reflect the Training difficulty terminology.
- Avoid wording that implies weakness or low quality.

---

## BTN.Level_Easy_Ignore

### Context

Displayed when the user is already using the easiest difficulty.

No difficulty change is required.

### Translation Notes

- Indicate continuing with the current settings.
- Keep the wording short.

---

## BTN.Level_Medium

### Context

Changes the program to the Normal difficulty.

### Translation Notes

- Reflect the Normal difficulty terminology.

---

## BTN.Level_Hard

### Context

Changes the program to the highest difficulty.

Although internally this is the hardest mode, users see it as the Fast mode.

### Translation Notes

- Reflect the Fast difficulty terminology.
- Avoid emphasizing difficulty.

---

## BTN.Level_Keep_As_It_Is

### Context

Displayed when the application suggests changing the difficulty but the user chooses to keep the current one.

### Translation Notes

- Clearly indicate that nothing will change.
- Keep the wording concise.

---

## BTN.Level_Change

### Context

Displayed when the application recommends increasing the difficulty.

The user agrees with the recommendation.

### Translation Notes

- Express accepting the suggested increase.
- Keep the wording positive.

---

## BTN.Ignore_Success

### Context

Displayed after a long period of inactivity.

The user indicates that they have already quit smoking.

### Translation Notes

- Keep the wording short.
- This is a positive declaration by the user.

---

## BTN.Ignore_Failed

### Context

Displayed after a long period of inactivity.

The user indicates that they do not intend to continue trying to quit smoking.

### Translation Notes

- Keep the wording neutral.
- Avoid emotionally charged language.

---

## BTN.Ignore_Full_Reset

### Context

Displayed after a long period of inactivity.

The user chooses to restart the program completely.

### Translation Notes

- Clearly indicate restarting from the very beginning.

---

## BTN.Ignore_Just_Go_On

### Context

Displayed after a long period of inactivity.

The user chooses to continue from their current progress.

### Translation Notes

- Keep the wording encouraging.
- Clearly indicate continuing rather than restarting.

---

## BTN.Ignore_Set_Own_Interval

### Context

Displayed after a long period of inactivity.

The user chooses to manually specify a new smoking interval before continuing.

### Translation Notes

- The wording should indicate entering a custom interval.
- Keep the label short.

---

## BTN.Local_Time_Correct

### Context

Displayed when the application asks the user to confirm their detected local time.

The user confirms that the displayed time is correct.

### Translation Notes

- Keep the wording very short.
- This is a confirmation button.

---

## BTN.Local_Time_Wrong

### Context

Displayed when the application asks the user to confirm their detected local time.

The user chooses to correct it.

### Translation Notes

- Express editing or changing the time.
- Keep the wording concise.

---

## BTN.Local_Time_Plus_1

### Context

Adjusts the configured local time forward by one hour.

### Translation Notes

- Preserve the numeric value.

---

## BTN.Local_Time_Minus_1

### Context

Adjusts the configured local time backward by one hour.

### Translation Notes

- Preserve the numeric value.

---

## BTN.Local_Time_Plus_30

### Context

Adjusts the configured local time forward by thirty minutes.

### Translation Notes

- Preserve the numeric value.

---

## BTN.Local_Time_Minus_30

### Context

Adjusts the configured local time backward by thirty minutes.

### Translation Notes

- Preserve the numeric value.

---

## BTN.Local_Time_AmPm

### Context

Switches the local time display to the 12-hour (AM/PM) format.

### Translation Notes

- Preserve the "AM/PM" notation.

---

## BTN.Local_Time_24h

### Context

Switches the local time display to the 24-hour format.

### Translation Notes

- Preserve the "24h" notation where appropriate for the target language.

---

## BTN.Local_Time_Confirmed

### Context

Displayed after the user finishes adjusting their local time.

Confirms that the displayed time is now correct.

### Translation Notes

- Keep the wording short.
- Express successful confirmation.

---

## BTN.Recommendations

### Context

Opens recommendations and practical advice for quitting smoking.

### Translation Notes

- The wording should clearly indicate helpful tips or recommendations.
- Keep the label concise.

---

## BTN.LANG*

### Context

Language selection buttons.

### Translation Notes

- Do not translate.

---

## BTN.DEV*

### Context

Developer-only buttons.

### Translation Notes

- Do not translate.

---

# Translation Context for Text Collections

Unlike dialogs and buttons, the following files contain plain arrays of text and do not use translation keys.

---

## Smoking Cessation Reasons

### Source

`src/content/motivizer/motivizer.ru.ts`

### Context

This file contains a collection of short reasons explaining why quitting smoking is beneficial.

The application displays these messages to encourage users throughout their journey.

### Translation Notes

- Each array element should be translated independently.
- Preserve the original meaning rather than translating literally.
- Keep the messages concise and motivational.
- Preserve all formatting placeholders, placeholders, and emoji according to the general translation rules.

---

## Motivational Messages

### Source

`src/content/youcan/youcan.ru.ts`

### Context

This file contains short motivational messages shown to encourage users to continue the program.

These messages should increase confidence and motivation without creating pressure or guilt.

### Translation Notes

- Each array element should be translated independently.
- Use a positive, encouraging tone.
- Avoid wording that sounds judgmental or overly emotional.
- Preserve all formatting placeholders, placeholders, and emoji according to the general translation rules.

---

# Adding a New Language

When introducing a new language, perform all of the following steps.

## 1. Register the Language

Add the language abbreviation to the `Lang` enum in:

`src/constants.ts`

Use the same language code format as Telegram (for example `en`, `ru`, `de`, `fr`, `es`, `it`).

---

## 2. Add Language Selection Buttons

Extend the `BTN` enum with a new language button.

Then add the corresponding button to **every existing button translation file**, including:

- `src/content/buttons/buttons.ru.ts`
- `src/content/buttons/buttons.en.ts`
- and every other language file.

The button should display the language code followed by the appropriate flag emoji.

Example:

```text
[BTN.Lang_EN]: "EN 🇬🇧"
```

---

## 3. Create Translation Files

Create translation files for the new language in all content directories:

- `src/content/dialogs`
- `src/content/buttons`
- `src/content/motivizer`
- `src/content/youcan`

Each new file should contain translations corresponding to the Russian source.

---

## 4. Update Index Files

After creating the new translation files, update the `index.ts` file inside each of the following directories:

- `src/content/dialogs`
- `src/content/buttons`
- `src/content/motivizer`
- `src/content/youcan`

Export the newly created translation files so they become available to the application.

---

## 5. Preserve Translation Rules

All translations must follow the rules described in this document, including:

- terminology consistency;
- formatting placeholders;
- variable placeholders;
- emoji preservation;
- consistent button labels;
- consistent tone and style.

---

## 6. Batch Processing Rule

When translating or adding a new language, process content in small batches.

- Do not translate the entire project in one pass.
- Process no more than 5 translation entries at a time.
- After translating each batch, save the modified file.
- Only after saving the current batch, continue with the next batch.
- For keyed objects, one entry means one translation key.
- For arrays, one entry means one array item.
- Preserve the original order of entries.
- Do not skip entries.
- After finishing a file, verify that every source entry has a corresponding translated entry.