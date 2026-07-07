import { Content } from "../../constants";
import { MultilineContent } from "../types";
import { NL, N2, ND, B, I } from "./constants";

const donate_link = process.env.DONATE_LINK;
const tg_group_link = process.env.TG_GROUP_LINK;

export const dialogsDe: MultilineContent = {
  [Content.MESSAGE]: "Nachricht erhalten",
  [Content.ERROR]: "🍄 Etwas ist schiefgelaufen. {{error}}",
  [Content.USER_UNKNOWN]: `
    🤖 ${B}Die Funktionalität ist nur für autorisierte Nutzer verfügbar${B}${ND}
    Bitte melde dich an, indem du den Button unten drückst.
  `,
  [Content.START_NEW]: `
    Hallo! 🙂${N2}
    Bereichern sich Tabakkonzerne auf Kosten deiner Gesundheit?${NL}
    Suchst du einen Weg, mit dem Rauchen aufzuhören?${N2}
    ${B}Gute Entscheidung!${B}${N2}
    Gemeinsam schaffen wir das 🤙${ND}
    Supported languages${NL}
    Click here ➤ /lang ${NL}
    🇷🇺 🇬🇧 🇪🇸 🇩🇪 🇮🇹 🇹🇷 🇨🇳 🇸🇦
  `,
  [Content.START_EXISTING]: `
    Hallo! ✌️${N2}
    Wir sehen, dass du bereits einige Fortschritte in unserer App gemacht hast.${NL}
    Dein Konto wurde wieder aktiviert!${N2}
    Du hast jetzt drei Möglichkeiten:${N2}
    1. ${B}Konto vollständig zurücksetzen.${B}${NL}
    Das bringt dich zurück zu Stufe 1.${NL}
    Zeit zwischen Rauchpausen: ZURÜCKGESETZT.${N2}
    2. ${B}Fortschritt löschen.${B}${NL}
    Du startest ab Stufe 2, aber die Anfangszeit wird zurückgesetzt.${NL}
    Intervall zwischen Rauchpausen: ${I}{{min_delta}}${I}.${N2}
    3. ${B}So lassen wie es ist.${B}${NL}
    Du machst genau dort weiter, wo du aufgehört hast.${NL}
    ${B}Nicht empfohlen${B}.${NL}
    Zeit zwischen Rauchpausen: ${I}{{delta_time}}${I}.
  `,
  [Content.START_EXISTING_STAGE_1]: `
    Hallo! ✌️${N2}
    Dein Konto wurde wieder aktiviert,${NL}
    und alle Daten wurden aktualisiert.${N2}
    Du musst Stufe 1 erneut abschließen ⤵️
  `,
  [Content.START_VALID_USER]: `
    👁 Aktivierungsversuch${N2}
    Ein erneuter Versuch, das Konto zu aktivieren, wurde erkannt.${NL}
    Das passiert normalerweise durch einen technischen Fehler.${ND}
    Zur Sicherheit hier dein aktueller Status:${N2}
    ⏱️ Zeit zwischen Rauchpausen: ${B}{{delta_time}}${B}.${NL}
    ⏰ Nächste Pause: ${B}{{time_to_get_smoke}}${B}
  `,
  [Content.START_RESET_IGNORE]: `
    Du hast gewählt, ${B}"alles so zu lassen wie es ist"${B}.${NL}
    Das ist vollkommen deine Entscheidung.${NL}
    Du kannst den gesamten Fortschritt jederzeit zurücksetzen, indem du /start eingibst.${NL}
    ⚔️ ${B}Stufe 2${B} aktiviert ⚔️${N2}
    Das Startintervall zwischen Rauchpausen${NL}
    ist auf ${B}{{delta_time}}${B} gesetzt.${N2}
    Die Zeit deiner nächsten Rauchpause wird berechnet, wenn du das nächste Mal den Button ${B}"Ich rauche gerade"${B} drückst.
  `,
  [Content.START_RESET_TO_STAGE_1]: `
    Dein Fortschritt ${B}wurde vollständig zurückgesetzt${B}.${N2}
    Das ist die beste Entscheidung 👑${ND}
    Du musst Stufe 1 erneut abschließen ⤵️
  `,
  [Content.START_RESET_TO_STAGE_2]: `
    Du hast gewählt, ${B}"Auf Stufe 2 zurücksetzen"${B}.${NL}
    Der aktuelle Stufenfortschritt wurde zurückgesetzt.${ND}
    ⚔️ ${B}Stufe 2${B} aktiviert ⚔️${N2}
    Das Startintervall zwischen Rauchpausen${NL}
    ist auf ${B}{{delta_time}}${B} gesetzt.${N2}
    Die Zeit deiner nächsten Rauchpause wird berechnet, wenn du das nächste Mal den Button ${B}"Ich rauche gerade"${B} drückst.
  `,
  [Content.LANG]: "Please choose a language to use:",
  [Content.LANG_APPLIED]: "🇩🇪 Die deutsche Sprache wurde eingestellt.",
  [Content.STAGE_1]: `
    ${B}Stufe 1${B}${N2}
    Zuerst müssen wir verstehen, wie oft du rauchst.${NL} 
    Diese Zeit wird unser Ausgangspunkt für zukünftige Berechnungen sein.${N2}
    Dazu messen wir das Intervall zwischen deinen Rauchpausen 20 Mal. Das ist nur eine Packung.${N2}
    Zu lange oder zu kurze Intervalle zählen nicht,
    also mach dir keine Sorgen, wenn du schlafen gehst oder einfach vergisst, den Button zu drücken.${N2}
    ${B}Gut, fangen wir an!${B}${ND}
    Wenn du das nächste Mal rauchen möchtest, drück den Button ${B}"Ich rauche gerade"${B}.
  `,
  [Content.FIRST_STEP]: `
    Deine Zeit wurde erfasst!${N2}
    Herzlichen Glückwunsch! Du hast den ersten Schritt gemacht! 👍${N2}
    Das Wichtigste ist, weiterzumachen und daran zu denken, den Button jedes Mal zu drücken, wenn du rauchst.${ND}
    ✅️ noch {{stage_1_left}} Mal
  `,
  [Content.STAGE_1_FORGOT_TO_CLICK]: `
    Vergessen zu drücken? Kein Problem! 🙃${N2}
    Wenn du den Bot gerade erst benutzt, passiert das häufig.${N2}
    ${B}Das Wichtigste${B} ist, die Gewohnheit aufzubauen und ${B}das Angefangene zu beenden${B}.
  `,
  [Content.STAGE_1_IGNORE_MIN]: `
    Du drückst den Button zu häufig.${N2}
    Falls das nicht deine Schuld war — wir verstehen das —
    ${I}gewöhne dich daran, den Bot SOFORT zu schließen${I} nachdem du die Nachrichten gelesen hast.${N2}
    Das Mindestintervall, das gezählt wird, ist {{min_stage_1}}.${ND}
    💢 noch {{stage_1_left}} Mal
  `,
  [Content.STAGE_1_IGNORE_MAX]: `
    Das Mindestintervall, das erfasst wird, beträgt {{max_stage_1}} Minuten.${N2}
    Wir zählen so lange Intervalle nicht, um genaue Berechnungen der Rauchzeiten sicherzustellen.${N2}
    Vergiss nicht, beim nächsten Mal den Button ${B}"Ich rauche gerade"${B} zu drücken.${ND}
    💫 noch {{stage_1_left}} Mal
  `,
  [Content.STAGE_1_PROCESSING]: `
    Deine Zeit wurde erfasst!${ND}
    ✅️ noch {{stage_1_left}} Mal
  `,
  [Content.STAGE_1_YOU_CAN_RESET]: `
    💡 Für diese Phase ist es sehr wichtig, keinen Rauchmoment auszulassen,
    da dein Startintervall darauf basierend berechnet wird.${N2}
    Falls du den Überblick verlierst, ist es besser, von vorne anzufangen, indem du /start drückst.
  `,
  [Content.STAGE_1_END]: `
    ${B}Stufe 1 abgeschlossen! 🎉${B}${N2}
    Herzlichen Glückwunsch!${N2}
    Dank deiner Ausdauer haben wir die durchschnittliche Zeit berechnet, mit der wir starten können.${N2}
    Sie beträgt ${B}{{delta_time}}${B}.${ND}
    Weiter zu Stufe 2 ⤵️
  `,
  [Content.NEXT_SMOKING_TIME]: `
    Nächste Rauchpause nach {{time_to_get_smoke}} ⏰️
  `,
  [Content.STAGE_2_INITIAL]: `
    ${B}Alles bereit!${B}${N2}
    🕒 Dein aktuelles Intervall zwischen Rauchpausen: ${B}{{delta_time}}${B}${N2}
    Jetzt werden wir versuchen, einen Rauchplan einzuhalten.${NL}
    Jeden Tag verschieben wir ihn je nach gewähltem Schwierigkeitsgrad um einige Minuten.${N2}
    Falls du den Zeitplan nicht einhältst, kein Problem.${NL} 
    Vergiss nur nicht, den Button ${B}"Ich rauche gerade"${B} zu drücken.${NL}
    Wir berücksichtigen das, aber es stoppt deinen Fortschritt nicht.${N2}
    Los geht's!
  `,
  [Content.STAGE_2_HINT]: `
    ⚠️ ${B}Wichtig zu wissen!${B}${N2}
    Das Verlangen zu rauchen dauert ${I}nicht länger als 5 Minuten${I}❗️${NL}
    Wenn du also plötzlich rauchen möchtest, aber die Zeit noch nicht gekommen ist —
    beschäftige dich einfach mit etwas, und in 5 Minuten
    wirst du vergessen haben, dass du rauchen wolltest.${NL}
    Genau so funktioniert es!
  `,
  [Content.STAGE_2]: `
    Zeit erfasst ✅️
  `,
  [Content.STAGE_2_SUCCESS]: `
    Zeit erfasst. Gut gemacht! 👍
  `,
  [Content.STAGE_2_IGNORE_MIN]: `
    Du drückst den Button zu häufig ⏳${NL}
    Das Mindestintervall, das wir zählen, ist ${B}{{min_interval}}${B}.${N2}
    ${I}Bei modernen Smartphones kann das ohne Verschulden des Nutzers passieren.
    Wir verstehen, dass das sehr ärgerlich sein kann.${NL}
    Um das zu vermeiden — schließe den Chat, sobald du die Zeit siehst.${I}
  `,
  [Content.STAGE_2_PROPS_MISSING]: `
    💢 Fehler: Einstellungen nicht gefunden.${N2}
    Um auf diesen Befehl zuzugreifen, muss dein Profil vollständig konfiguriert sein.${ND}
    Wenn du glaubst, dass das ein Fehler ist, kontaktiere den Entwickler in [unserer Gruppe](${tg_group_link})
  `,
  [Content.PENALTY]: `
    Die App enthält ein motivierendes Strafsystem.${N2}
    Wenn du den Zeitplan nicht einhältst, reduzieren wir den Schwierigkeitsgrad leicht.${N2}
    Die Strafe wird nach der nächsten langen Pause angewendet.${ND}
    🚭 Aktuelle Strafpunkte: ${B}{{penalty}}${B}
  `,
  [Content.PENALTY_3]: `
    🤯 Die meisten Menschen halten den Rauchplan leicht ein.${NL}
    Wir haben jedoch bemerkt, dass sich deine Strafpunkte anhäufen.${NL}
    Du musst dich stabilisieren.${N2}
    Genau dafür wurde ${B}der Trainingsmodus${B} entwickelt!${N2}
    Wir empfehlen dir dringend, ${I}in diesen zu wechseln und deine Stabilität wiederzugewinnen.${I}
  `,
  [Content.IDLE_NO_CIGARETTES]: `
    🌀 ${B}Heute neu starten${B}${N2}
    Aus irgendeinem Grund hast du deine Rauchpausen beim letzten Mal nicht erfasst.${NL}
    Die Tatsache, dass du dein Ziel, mit dem Rauchen aufzuhören, nicht aufgegeben hast, zeigt deine Entschlossenheit.${N2}
    ${B}Bitte mach weiter!${B} 🚀
  `,
  [Content.TIME_FOR_A_SMOKE]: "🔥 Zeit für eine Rauchpause! 🔥",
  [Content.ON_IDLE_START]: `💤💤💤 ${B}Lange Pause${B}${N2}`,
  [Content.ON_IDLE_TIME_CONFIRMATION]: `⏰️ Lass uns die Uhren abgleichen. Ist es ${B}{{local_time}}${B} bei dir?`,
  [Content.ON_IDLE_STATS_1]: `Gestern hast du ${B}{{cigarettes}}${B} Mal geraucht${NL}`,
  [Content.ON_IDLE_STATS_2]: `
    Das Intervall zwischen deinen Rauchpausen wurde neu berechnet:${NL}
    Vorheriges Intervall: {{prev_delta}}${NL}
    \\- Strafpunkte: {{penalty}} \\[{{penalty_mins}}\\]${NL} 
    \\+ Schritt {{step}}${NL}
    \\= Angepasstes Intervall ${I}{{new_delta}}${I}
  `,
  [Content.WINSTRIKE]: `
    ⚡️ Du hältst dich bereits seit {{winstrike}} durch! Ausgezeichnet!
  `,
  [Content.WINSTRIKE_BASE]: `
    📚 Um den Trainingsmodus zu verlassen, schließe mehrere Tage ohne Strafe ab. {{day}} / {{of_days}}
  `,
  [Content.WINSTRIKE_MEDIUM]: `
    ⚔️ Schließe mehrere Tage ${I}hintereinander${I} ohne Strafe ab, um in den Schnellmodus zu wechseln!${N2}
    📆 Aktueller Fortschritt: ${B}{{day}} / {{of_days}}${B}
  `,
  [Content.WINSTRIKE_BASE_FAILED]: `
    ⭐️ Du bist auf dem ${B}Trainings${B}-Schwierigkeitsgrad.${N2}
    ✨${I}Strafpunkte werden nicht gezählt.${I}✨${N2}
    Versuche trotzdem, ohne Strafen durchzukommen 😉
  `,
  [Content.WINSTRIKE_BASE_SUCCESS]: `
    🥁 Wir sehen, dass du den Dreh raus hast und bereit bist, den Schwierigkeitsgrad zu ändern!
  `,
  [Content.DIFFICULTY]: `
    📈 ${B}Wähle deinen Schwierigkeitsgrad${B}${N2}
    - ${B}{{ difficulty_easy }}${B}:${NL}
     +0,5 Minuten pro Tag${NL}
    Hilft dir, dich an das Intervallsystem des Bots zu gewöhnen.${N2}
    - ${B}{{ difficulty_medium }}${B}:${NL}
    +2 Minuten pro Tag. Ist ${I}optimal${I} für die Nutzung.${NL}
    Wenn du ein moderates Tempo halten möchtest, ist das deine Wahl.${N2}
    - ${B}{{ difficulty_hard }}${B}:${NL}
    +5 Minuten pro Tag${NL}
    Nur wenn du ${I}bereit bist, hart zu arbeiten${I}, um mit dem Rauchen aufzuhören.${NL}
    1 Fehler und du fällst auf das Normal-Level zurück.${N2}
    Dein aktueller Schwierigkeitsgrad 🏂 ${B}{{difficulty}}${B}.
  `,
  [Content.DIFFICULTY_EASY]: "Training",
  [Content.DIFFICULTY_MEDIUM]: "Normal",
  [Content.DIFFICULTY_HARD]: "Schnell",
  [Content.DIFFICULTY_SELECTED]: `
    Du hast den Schwierigkeitsgrad ${B}"{{difficulty}}"${B} ausgewählt.
  `,
  [Content.DIFFICULTY_DESCRIPTION]: `
    📌 Bitte lies diese Nachricht${N2}
    Dir wurde der Trainings-Schwierigkeitsgrad zugewiesen.${ND}
    ${B}Warum ist es wichtig, mit dem "Trainings"-Level zu beginnen?${B}${N2}
    In dieser Phase ist ${B}das Hauptziel, gewohnte Rauchmuster zu durchbrechen${B}.
    Zum Beispiel, wenn du beim Kaffee rauchst, während du an der Bushaltestelle wartest,
    in der Pause mit Kollegen, und so weiter.${N2}
    Das ist der schwierigste Teil. Unsere Statistiken zeigen:${NL}
    - In ${B}den ersten 3 Tagen${B} halten 95% der Nutzer den Zeitplan nicht ein.${NL}
    - In ${B}den ersten 5 Tagen${B} tun es 100% der Nutzer.${N2}
    ${I}Das Trainings-Level wurde speziell entwickelt, um diese Herausforderung zu bewältigen.${I}${ND}
    📃 ${B}Wie funktioniert es?${B}${N2}
    ${B}1. Drück den Button "Ich rauche gerade", auch wenn du den Zeitplan nicht einhältst.${B}${NL}
    Das hilft dir, deine Gewohnheiten zu erkennen und zu analysieren, wann und wo du am ehesten abweichst.${N2}
    ${B}2. In dieser Phase werden keine Strafen verhängt.${B}${NL}
    Stattdessen konzentrierst du dich darauf, deine Gewohnheiten zu kontrollieren und dein Verhalten zu verstehen.${N2}
    ${B}3. Gewöhne dich an das System.${B}${NL}
    Jeden Tag wirst du merken, dass du disziplinierter wirst und den Zeitplan besser einhältst.${ND}
    ${B}Was kommt als nächstes?${B}${N2}
    Wenn du das Gefühl hast, dass du Verstöße reduziert oder eliminiert hast, ${B}kannst du auf einen fortgeschritteneren Schwierigkeitsgrad wechseln${B}.
    Strafen werden dann angewendet, aber sie werden dich nicht stören, weil du bereits vorbereitet bist.${ND}
    ⬆️ ⬆️ ⬆️ ⬆️ ⬆️${NL}
    Die Einrichtung deines Kontos wird${NL} 
    🔜 ${B}automatisch in 1 Minute abgeschlossen${B}.${NL}
    Diese Pause soll sicherstellen, dass du die obige Nachricht gelesen hast.
  `,
  [Content.DIFFICULTY_HARD_DECREASED]: `
    Du bist aus dem Zeitplan gefallen!${N2}
    Dein Schwierigkeitsgrad wurde${NL}
    ${B}auf Normal reduziert${B} 🔻${N2}
    🚭 Der Strafpunkt wurde nicht angewendet.${NL} 
    ${I}Kopf hoch — du schaffst das!${I}
  `,
  [Content.DIFFICULTY_HARD_AUTO]: `
    ✨ Der Schwierigkeitsgrad wurde auf ${B}Schnell${B} geändert 🚀 ✨
  `,
  [Content.TIMEZONE]: `
    🌐 ${B}Zeitzone einstellen${B}${N2}
    Um deine Zeitzone einzustellen, folge diesen Schritten:${N2}
    1. Gehe zu ${B}Google${B} und tippe "timezone" ein.${NL}
    2. Direkt unter der Suchleiste siehst du deine Zeitzone in Klammern.${NL}
    3. Kopiere sie ohne die Klammern und ${B}schicke sie uns${B}.${ND}
    [Hier klicken, um zu Google zu gehen](https://www.google.com/search?q=my+timezone)
  `,
  [Content.TIMEZONE_INTRO]: `
    Um die Zeit korrekt anzuzeigen, müssen wir deine Zeitzone bestimmen.
  `,
  [Content.TIMEZONE_SELECTED]: `
    🕰️ Zeitzone ausgewählt: ${B}{{timezone}}${B}${N2}
    ${B}Das ist wichtig${B}❗${NL}
    Bitte überprüfe deine aktuelle Uhrzeit.${NL}
    Unser System erkennt, dass es bei dir gerade ${B}{{local_time}}${B} ist.${N2}
    Ein paar Minuten spielen natürlich keine Rolle,${NL}
    aber wenn die Zeit um eine halbe Stunde oder mehr abweicht,${NL}
    musst du deine Zeitzone anpassen.${ND}
    Ist deine aktuelle Uhrzeit ${B}{{local_time}}${B}?
  `,
  [Content.TIMEZONE_INVALID]: `
    💢 ${B}Fehler: Ungültige Zeitzone${B}${N2}
    Ein korrektes Beispiel für eine Zeitzone ist: GMT+2${NL}
    Bitte versuche es erneut.
  `,
  [Content.LOCAL_TIME_NEW]: `
    🌐 ${B}Zeitzone einrichten${B}${N2}
    Bitte schau auf die Uhr deines Telefons oder Computers
    und gib die Zeit im 24h-Format ein.${N2}
    Beispiele:${NL}
    {{time_sample}}, 0:21, 19:00, 01:14
  `,
  [Content.LOCAL_TIME]: `
    👉 Deine aktuelle Uhrzeit sollte ${B}{{local_time}}${B} sein ⏳${N2}  
    Bitte bestätige oder passe sie mit den Buttons an.
  `,
  [Content.SETTINGS]: `
    ${B}Stufe 2. Konfiguration.${B}${NL}
    Es ist Zeit, deine Einstellungen anzupassen, z. B. Zeitzone, Sprache und Schwierigkeitsgrad.
  `,
  [Content.SETTINGS_DONE]: `
    ${B}Kontoeinrichtung abgeschlossen!${B} 🎉${NL}
    Fang an, den Bot zu nutzen ⤵️ 
  `,
  [Content.SETTINGS_UPDATED]: `
    ${B}Deine Einstellungen wurden aktualisiert${B} ✔${N2}
    🕒 Dein aktuelles Intervall zwischen Rauchpausen: ${B}{{delta_time}}${B}
  `,
  [Content.SETTINGS_UPDATED_ON_IDLE]: `
    ✅ Fertig!${N2}
    Jedes Mal, wenn du rauchst, drück einfach «Ich rauche gerade».
  `,
  [Content.BOT_IGNORE]: `
    🕵️ ${B}Wir haben dich verloren!${B}${N2}
    Es sind ${I}2 Tage${I} seit deiner letzten Interaktion mit dem Bot vergangen.${N2}
    ${B}Planst du weiterzumachen oder nicht?${B}${ND}
    ❌ Wenn du ${B}nicht planst${B}, den Bot weiter zu nutzen — wähle einen Grund:${N2}
    - ${I}Hast du aufgehört zu rauchen?${I} — Dann herzlichen Glückwunsch! 🎊${N2}
    - ${I}Du hast dich entschieden, doch nicht aufzuhören${I} — Schade, aber das ist deine Entscheidung.${ND}
    ✅ Wenn du ${B}weitermachen planst${B}, gibt es mehrere Möglichkeiten:${N2}
    1. ${B}{{from_scratch_message}}${B} — wenn dein aktuelles Intervall etwa zwei Stunden oder weniger beträgt.${NL}
    Das setzt deinen Fortschritt zurück, damit du ${I}von vorne beginnen${I} kannst.${N2}
    2. ${B}{{no_penalty_message}}${B} — wir machen einfach dort weiter, wo du aufgehört hast (manchmal relevant, wenn die Pause nicht zu lang war).${NL}
    Dein Timer wird auf ${B}{{ no_penalty_time }}${B} gesetzt.${N2} 
    3. ${B}{{set_own_interval}}${B} — nützlich für erfahrene Nutzer, die nicht von vorne beginnen möchten.${NL}
    Lege das Intervall fest, das du für richtig hältst, im Format ${B}3:17${B} (einfach eintippen)
  `,
  [Content.BOT_IGNORE_JUST_GO_ON]: `
    ${B}Einfach weitermachen!${B} Super! 👍${ND}
    Wir verstehen, dass das Leben heutzutage wirklich schnell und hektisch ist.${N2}
    Genau deshalb solltest du das Ziel, mit dem Rauchen aufzuhören, nicht aufgeben.${NL}
    Du musst nur das Angefangene beenden.
  `,
  [Content.BOT_IGNORE_SET_OWN_INTERVAL]: `
    Du hast gewählt, "${B}dein eigenes Intervall festzulegen${B}".${N2}
    Das ist die beste Option für erfahrene Nutzer.${N2}
    Bitte gib das Intervall, das du benötigst, im 24h-Format ein.${ND}
    Beispiele:${NL}
    2:30, 3:15, 5:55
  `,
  [Content.BOT_IGNORE_FAILED]: `
    Du hast entschieden, ${B}nicht mit dem Rauchen aufzuhören${B} 🤯${ND}
    Wir hoffen aufrichtig, dass du deine Meinung später änderst.${N2}
    Der Bot wird dir keine Nachrichten mehr schicken.${N2}
    Um den Bot wieder zu aktivieren, drück /start.
  `,
  [Content.BOT_IGNORE_SUCCESS]: `
    🎈 Du hast ${B}mit dem Rauchen aufgehört${B}! 🎉${ND}
    Das bedeutet, es hat sich alles gelohnt 👍${N2}
    Wir möchten dir ein paar Empfehlungen mitgeben:${N2}
    - Denk daran, die erste Woche ist die schwerste${NL}
    - Trink Wasser — das macht es leichter${NL}
    - Lerne eine neue Technik: Wenn dich etwas stresst, atme tief durch.
    Das ist eine großartige Alternative zum Rauchverlangen.${N2}
    Rauchen ist eine Falle.${NL} Es ist nur ein Weg, dir dein Geld wegzunehmen.${N2}
    ${B}Wir sind unglaublich stolz auf deine Leistung!${B}${ND}
    Dieser Bot ist vollständig nicht-kommerziell. Ich plane nicht, damit Geld zu verdienen.
    Wenn du mir jedoch als Dankschön einen Kaffee spendieren möchtest, wäre ich sehr geschmeichelt.
    Besuche dazu den Link unten und klicke auf den Button "Donate €3".${NL}
    Link: [${donate_link}](${donate_link})${NL}
    Danke! 👍${ND}
    Ich hoffe, du wirst das nicht brauchen,${NL}
    aber falls du jemals wieder anfangen solltest zu rauchen, drück /start.
  `,
  [Content.CUSTOM_INTERVAL_SUCCESS]: `
    Dein gewähltes Intervall wurde erfolgreich gesetzt.${N2}
    Der Schwierigkeitsgrad wurde auf NORMAL gesenkt, um dir die Anpassung zu erleichtern.${N2}
    Nutze den Bot weiter wie bisher.
  `,
  [Content.CUSTOM_INTERVAL_ERROR]: `
    Das Intervall konnte nicht gesetzt werden. Bitte versuche es in einem anderen Format.
  `,
  [Content.STATS]: `
    📋 ${B}Deine Statistiken${B}:${NL}
    - Dein aktueller Schwierigkeitsgrad 🏂 ${B}{{difficulty}}${B}${NL}
    - Du hast den Bot am {{start_date}} begonnen zu nutzen${NL}
    - Tage seitdem: {{days_from_start}}${NL}
    - Insgesamt gerauchte Zigaretten: {{cigarettes}}${NL}
    - Insgesamt angewendete Strafpunkte: {{penalty_all}}${NL}
    - Startintervall {{delta_min}}${NL}
    - Aktuelles Intervall {{delta_time}}${NL}
  `,
  [Content.HOW]: `
    ${B}Wie du den Bot-Ersteller unterstützen kannst:${B}${N2}
    ${B}Du kannst finanzielle Unterstützung leisten${B} durch eine freiwillige Spende.${NL}
    Es ist wichtig zu verstehen, dass der Bot vollständig nicht-kommerziell ist.${NL}
    Das bedeutet, egal wie viel du spendest, ich werde die Bot-Funktionalität nicht ändern oder Werbung einfügen.${NL}
    Der Standardspendenbetrag ist €3, aber du kannst gerne mehr geben, wenn du möchtest.${NL}
    Link: [${donate_link}](${donate_link})${N2}
    ${B}Du kannst bei Übersetzungen in andere Sprachen helfen.${B}${NL}
    Wenn du interessiert bist, schreib eine E-Mail an {{admin_email}}, und ich werde mein Bestes tun, innerhalb einer Woche zu antworten.${N2}
    ${B}Du kannst dem Bot helfen, indem du deinen Freunden davon erzählst.${B}${NL}
    Natürlich ist Popularität nicht das Ziel dieses Projekts.${NL}
    Aber seien wir ehrlich: Wenn niemand davon weiß, ist alles umsonst.${N2}
    ${I}Egal wie du dich entscheidest zu helfen, danke!${I}${NL}
    ${I}Es bedeutet mir sehr viel, dass dir die Zukunft dieses Projekts am Herzen liegt${I} 💓
  `,
  [Content.MAXIMUM_REACHED]: `
    ${B}⚜️ Du hast das Maximum erreicht! ⚜️${B}${N2}
    Unglaublich aber wahr — du hast alle möglichen Grenzen überschritten!${N2}
    ${I}Leider unterstützt unsere App keine so großen Intervalle, daher werden keine weiteren Anpassungen vorgenommen.${I}${ND}
    ${B}Falls du noch nicht mit dem Rauchen aufgehört hast:${B}${N2}
    Es ist Zeit, das Rauchen hinter dir zu lassen. Dein Intervall ist bereits riesig und es hat keinen Sinn, weiterzumachen.${N2}
    Schau dir unsere Empfehlungen an, die dir helfen, endgültig aufzuhören. Klicke einfach auf den Button unten 💙${ND}
    Wir wünschen dir auf jeden Fall viel Erfolg! 💪
  `,
  [Content.JOIN_OUR_CHAT]: `
    Wir haben ${B}einen gemütlichen Chat für unsere Nutzer${B} erstellt${N2}
    ein Ort, um neue Leute kennenzulernen,${NL}
    Ideen auszutauschen und sich inspirieren zu lassen 💫${N2}
    Komm dazu 👉 [Link](${tg_group_link})
  `,
  // dev
  [Content.DEV]: `⚒️ ${B}Development Mode is ON${B} ⚒️`,
  [Content.DEV_OFF]: "Dev Mode is Off ⛔️",
  [Content.DEV_USER_DELETED]: "🔮 User Deleted /start",
  [Content.DEV_TO_STAGE_1]: "🔮 Your user was reset to Stage 1",
  [Content.DEV_FILL_STAGE_1]: "🔮 Stage 1 was filled, {{stepsAdded}} steps added",
  [Content.DEV_LAST_TIME_MINUS_HOUR]: "🔮 Last time set to 1 hour ago",
  [Content.DEV_STAGE_1_MORE_THAN_MAX]: "🔮 Last time set to more than max value",
  [Content.DEV_TO_IDLE]: "🔮 User switched to Idle mode",
  [Content.DEV_NEXT]: `
    🔮 Next smoke break will happen in 1 minute${N2}
    Waiting for timer... 🧭
  `,
  [Content.DEV_MOTIVIZER]: "🔮 Motivizer Updated",
  [Content.DEV_IGNORE]: `
    🔮 The application lost the user${N2}
    Waiting for timer... 🧭
  `,
  [Content.DEV_LANG]: "🕉️ Select language:",
};
