import { Content } from "../../constants";
import { MultilineContent } from "../types";
import { NL, N2, ND, B, I } from "./constants";

const donate_link = process.env.DONATE_LINK;
const tg_group_link = process.env.TG_GROUP_LINK;

export const dialogsIt: MultilineContent = {
  [Content.MESSAGE]: "Messaggio ricevuto",
  [Content.ERROR]: "🍄 Qualcosa è andato storto. {{error}}",
  [Content.USER_UNKNOWN]: `
    🤖 ${B}La funzionalità è disponibile solo per gli utenti autorizzati${B}${ND}
    Per favore, accedi premendo il pulsante qui sotto.
  `,
  [Content.START_NEW]: `
    Ciao! 🙂${N2}
    Le aziende del tabacco si arricchiscono a spese della tua salute?${NL}
    Stai cercando un modo per smettere di fumare?${N2}
    ${B}Ottima decisione!${B}${N2}
    Insieme ce la faremo 🤙${ND}
    Supported languages${NL}
    Click here ➤ /lang ${NL}
    🇷🇺 🇬🇧 🇪🇸 🇩🇪 🇮🇹 🇹🇷 🇨🇳 🇸🇦
  `,
  [Content.START_EXISTING]: `
    Ciao! ✌️${N2}
    Vediamo che hai già fatto qualche progresso nella nostra app.${NL}
    Il tuo account è stato riattivato!${N2}
    Hai tre opzioni:${N2}
    1. ${B}Reimposta completamente l'account.${B}${NL}
    Questo ti riporterà alla Fase 1.${NL}
    Tempo tra le pause: REIMPOSTATO.${N2}
    2. ${B}Cancella i progressi.${B}${NL}
    Inizierai dalla Fase 2, ma il tempo iniziale verrà reimpostato.${NL}
    Intervallo tra le pause: ${I}{{min_delta}}${I}.${N2}
    3. ${B}Lascia com'è.${B}${NL}
    Continuerai esattamente da dove ti eri fermato.${NL}
    ${B}Non consigliato${B}.${NL}
    Tempo tra le pause: ${I}{{delta_time}}${I}.
  `,
  [Content.START_EXISTING_STAGE_1]: `
    Ciao! ✌️${N2}
    Il tuo account è stato riattivato,${NL}
    e tutti i dati sono stati aggiornati.${N2}
    Devi completare di nuovo la Fase 1 ⤵️
  `,
  [Content.START_VALID_USER]: `
    👁 Tentativo di attivazione${N2}
    È stato rilevato un tentativo ripetuto di attivare l'account.${NL}
    Di solito accade a causa di un errore tecnico.${ND}
    Per sicurezza, ecco il tuo stato attuale:${N2}
    ⏱️ Tempo tra le pause: ${B}{{delta_time}}${B}.${NL}
    ⏰ Prossima pausa: ${B}{{time_to_get_smoke}}${B}
  `,
  [Content.START_RESET_IGNORE]: `
    Hai scelto di ${B}"lasciare tutto com'è"${B}.${NL}
    È completamente una tua decisione.${NL}
    Puoi reimpostare tutti i progressi in qualsiasi momento scrivendo /start.${NL}
    ⚔️ ${B}Fase 2${B} attivata ⚔️${N2}
    L'intervallo iniziale tra le pause${NL}
    è impostato su ${B}{{delta_time}}${B}.${N2}
    Il tempo della tua prossima pausa verrà calcolato la prossima volta che premi il pulsante ${B}"Sto fumando"${B}.
  `,
  [Content.START_RESET_TO_STAGE_1]: `
    I tuoi progressi ${B}sono stati completamente reimpostati${B}.${N2}
    È la decisione migliore 👑${ND}
    Devi completare di nuovo la Fase 1 ⤵️
  `,
  [Content.START_RESET_TO_STAGE_2]: `
    Hai scelto di ${B}"Reimpostare alla Fase 2"${B}.${NL}
    I progressi della fase corrente sono stati azzerati.${ND}
    ⚔️ ${B}Fase 2${B} attivata ⚔️${N2}
    L'intervallo iniziale tra le pause${NL}
    è impostato su ${B}{{delta_time}}${B}.${N2}
    Il tempo della tua prossima pausa verrà calcolato la prossima volta che premi il pulsante ${B}"Sto fumando"${B}.
  `,
  [Content.LANG]: "Please choose a language to use:",
  [Content.LANG_APPLIED]: "🇮🇹 È stata impostata la lingua italiana.",
  [Content.STAGE_1]: `
    ${B}Fase 1${B}${N2}
    Prima di tutto dobbiamo capire quanto spesso fumi.${NL}
    Questo tempo sarà il nostro punto di partenza per i calcoli futuri.${N2}
    Per farlo, misuriamo l'intervallo tra le tue pause 20 volte. È solo un pacchetto.${N2}
    Gli intervalli troppo lunghi o troppo corti non verranno contati,
    quindi non preoccuparti se vai a dormire o dimentichi semplicemente di premere il pulsante.${N2}
    ${B}Bene, iniziamo!${B}${ND}
    La prossima volta che vuoi fumare, premi il pulsante ${B}"Sto fumando"${B}.
  `,
  [Content.FIRST_STEP]: `
    Il tuo tempo è stato registrato!${N2}
    Congratulazioni! Hai fatto il primo passo! 👍${N2}
    La cosa importante è continuare e ricordarsi di premere il pulsante ogni volta che fumi.${ND}
    ✅️ rimangono {{stage_1_left}} volte
  `,
  [Content.STAGE_1_FORGOT_TO_CLICK]: `
    Hai dimenticato di premere? Nessun problema! 🙃${N2}
    Quando si inizia a usare il bot, capita spesso.${N2}
    ${B}La cosa principale${B} è creare l'abitudine e ${B}portare a termine ciò che hai iniziato${B}.
  `,
  [Content.STAGE_1_IGNORE_MIN]: `
    Stai premendo il pulsante troppo spesso.${N2}
    Se non è colpa tua — lo capiamo —
    ${I}abituati a chiudere il bot IMMEDIATAMENTE${I} dopo aver letto i messaggi.${N2}
    L'intervallo minimo da contare è {{min_stage_1}}.${ND}
    💢 rimangono {{stage_1_left}} volte
  `,
  [Content.STAGE_1_IGNORE_MAX]: `
    L'intervallo minimo da registrare è {{max_stage_1}} minuti.${N2}
    Non contiamo intervalli così lunghi per garantire calcoli accurati dei tempi di fumo.${N2}
    Non dimenticare di premere il pulsante ${B}"Sto fumando"${B} la prossima volta.${ND}
    💫 rimangono {{stage_1_left}} volte
  `,
  [Content.STAGE_1_PROCESSING]: `
    Il tuo tempo è stato registrato!${ND}
    ✅️ rimangono {{stage_1_left}} volte
  `,
  [Content.STAGE_1_YOU_CAN_RESET]: `
    💡 Per questa fase è molto importante non perdere nessun momento di fumo,
    poiché il tuo intervallo iniziale verrà calcolato in base ad essi.${N2}
    Se perdi il filo, è meglio ricominciare premendo /start.
  `,
  [Content.STAGE_1_END]: `
    ${B}Fase 1 completata! 🎉${B}${N2}
    Congratulazioni!${N2}
    Grazie alla tua determinazione, abbiamo calcolato il tempo medio da cui possiamo iniziare.${N2}
    È ${B}{{delta_time}}${B}.${ND}
    Passiamo alla Fase 2 ⤵️
  `,
  [Content.NEXT_SMOKING_TIME]: `
    Prossima pausa dopo le {{time_to_get_smoke}} ⏰️
  `,
  [Content.STAGE_2_INITIAL]: `
    ${B}Tutto pronto!${B}${N2}
    🕒 Il tuo intervallo attuale tra le pause: ${B}{{delta_time}}${B}${N2}
    Ora cercheremo di rispettare un programma di fumo.${NL}
    Ogni giorno lo sposteremo di qualche minuto in base al livello di difficoltà scelto.${N2}
    Se non rispetti il programma, nessun problema.${NL}
    Non dimenticare solo di premere il pulsante ${B}"Sto fumando"${B}.${NL}
    Lo terremo in considerazione, ma non fermerà i tuoi progressi.${N2}
    Iniziamo!
  `,
  [Content.STAGE_2_HINT]: `
    ⚠️ ${B}Importante ricordare!${B}${N2}
    Il desiderio di fumare dura ${I}non più di 5 minuti${I}❗️${NL}
    Quindi se all'improvviso hai voglia di fumare ma non è ancora il momento —
    occupati semplicemente con qualcosa, e in 5 minuti
    avrai dimenticato di voler fumare.${NL}
    Funziona esattamente così!
  `,
  [Content.STAGE_2]: `
    Tempo registrato ✅️
  `,
  [Content.STAGE_2_SUCCESS]: `
    Tempo registrato. Ben fatto! 👍
  `,
  [Content.STAGE_2_IGNORE_MIN]: `
    Stai premendo il pulsante troppo spesso ⏳${NL}
    L'intervallo minimo che contiamo è ${B}{{min_interval}}${B}.${N2}
    ${I}Sui telefoni moderni, questo può accadere senza colpa dell'utente.
    Capiamo che può essere molto fastidioso.${NL}
    Per evitarlo — chiudi la chat non appena vedi l'orario.${I}
  `,
  [Content.STAGE_2_PROPS_MISSING]: `
    💢 Errore: Impostazioni non trovate.${N2}
    Per accedere a questo comando, il tuo profilo deve essere completamente configurato.${ND}
    Se pensi che sia un errore, contatta lo sviluppatore nel [nostro gruppo](${tg_group_link})
  `,
  [Content.PENALTY]: `
    L'app include un sistema di penalità motivazionale.${N2}
    Se non rispetti il programma, ridurremo leggermente la difficoltà.${N2}
    La penalità verrà applicata dopo la prossima lunga pausa.${ND}
    🚭 Punti penalità attuali: ${B}{{penalty}}${B}
  `,
  [Content.PENALTY_3]: `
    🤯 La maggior parte delle persone rispetta facilmente il programma di fumo.${NL}
    Tuttavia, abbiamo notato che i tuoi punti penalità si stanno accumulando.${NL}
    Devi stabilizzarti.${N2}
    È proprio per questo che è stata creata ${B}la modalità allenamento${B}!${N2}
    Ti consigliamo vivamente di ${I}passare ad essa e ritrovare la stabilità.${I}
  `,
  [Content.IDLE_NO_CIGARETTES]: `
    🌀 ${B}Nuovo giorno avviato di nuovo${B}${N2}
    Per qualche motivo non hai registrato le tue pause l'ultima volta.${NL}
    Tuttavia, il fatto che tu non abbia rinunciato al tuo obiettivo di smettere di fumare dimostra la tua determinazione.${N2}
    ${B}Per favore, continua!${B} 🚀
  `,
  [Content.IDLE_NO_CIGARETTES_PRO]: `
    🪬 ${B}LUNGA PAUSA${B} 🪬${N2}
    Hai raggiunto un intervallo in cui non riusciamo a capire da soli se stavi dormendo o avevi semplicemente una pausa lunga.${N2}
    Abbiamo bisogno del tuo aiuto!${N2}
    - ${B}Inizia un nuovo giorno${B} — se stavi dormendo.${NL}
    - ${B}Continua${B} — se è solo una pausa lunga.${NL}
  `,
  [Content.TIME_FOR_A_SMOKE]: "🔥 È ora di una pausa! 🔥",
  [Content.ON_IDLE_START]: `💤💤💤 ${B}Lunga pausa${B}${N2}`,
  [Content.ON_IDLE_TIME_CONFIRMATION]: `⏰️ Sincronizziamo gli orologi. Sono le ${B}{{local_time}}${B} da te?`,
  [Content.ON_IDLE_STATS_1]: `Ieri hai fumato ${B}{{cigarettes}}${B} volte${NL}`,
  [Content.ON_IDLE_STATS_2]: `
    L'intervallo tra le tue pause è stato ricalcolato:${NL}
    Intervallo precedente: {{prev_delta}}${NL}
    \\- Punti penalità: {{penalty}} \\[{{penalty_mins}}\\]${NL}
    \\+ Passo {{step}}${NL}
    \\= Intervallo aggiornato ${I}{{new_delta}}${I}
  `,
  [Content.WINSTRIKE]: `
    ⚡️ Stai resistendo già da {{winstrike}}! Ottimo!
  `,
  [Content.WINSTRIKE_BASE]: `
    📚 Per uscire dalla modalità allenamento, completa diversi giorni senza penalità. {{day}} / {{of_days}}
  `,
  [Content.WINSTRIKE_MEDIUM]: `
    ⚔️ Completa diversi giorni ${I}di fila${I} senza penalità per passare alla modalità veloce!${N2}
    📆 Progresso attuale: ${B}{{day}} / {{of_days}}${B}
  `,
  [Content.WINSTRIKE_BASE_FAILED]: `
    ⭐️ Sei al livello di difficoltà ${B}allenamento${B}.${N2}
    ✨${I}I punti penalità non vengono contati.${I}✨${N2}
    Cerca comunque di andare avanti senza penalità 😉
  `,
  [Content.WINSTRIKE_BASE_SUCCESS]: `
    🥁 Vediamo che hai preso la mano e sei pronto a cambiare la difficoltà!
  `,
  [Content.DIFFICULTY]: `
    📈 ${B}Scegli il tuo livello di difficoltà${B}${N2}
    - ${B}{{ difficulty_easy }}${B}:${NL}
     +0,5 minuti al giorno${NL}
    Ti aiuta ad abituarti al sistema di intervalli del bot.${N2}
    - ${B}{{ difficulty_medium }}${B}:${NL}
    +2 minuti al giorno. È ${I}ottimale${I} per l'uso.${NL}
    Se vuoi mantenere un ritmo moderato, questa è la tua scelta.${N2}
    - ${B}{{ difficulty_hard }}${B}:${NL}
    +5 minuti al giorno${NL}
    Solo se sei ${I}pronto a impegnarti seriamente${I} per smettere di fumare.${NL}
    1 errore e tornerai al livello Normale.${N2}
    Il tuo livello di difficoltà attuale 🏂 ${B}{{difficulty}}${B}.
  `,
  [Content.DIFFICULTY_EASY]: "Allenamento",
  [Content.DIFFICULTY_MEDIUM]: "Normale",
  [Content.DIFFICULTY_HARD]: "Veloce",
  [Content.DIFFICULTY_SELECTED]: `
    Hai selezionato il livello di difficoltà ${B}"{{difficulty}}"${B}.
  `,
  [Content.DIFFICULTY_DESCRIPTION]: `
    📌 Per favore leggi questo messaggio${N2}
    Ti è stato assegnato il livello di difficoltà Allenamento.${ND}
    ${B}Perché è importante iniziare con il livello "Allenamento"?${B}${N2}
    In questa fase, ${B}l'obiettivo principale è rompere i modelli abituali di fumo${B}.
    Ad esempio, quando fumi con il caffè, mentre aspetti l'autobus alla fermata,
    durante una pausa con i colleghi, e così via.${N2}
    Questa è la parte più difficile. Le nostre statistiche mostrano:${NL}
    - Nei ${B}primi 3 giorni${B}, il 95% degli utenti non rispetta il programma.${NL}
    - Nei ${B}primi 5 giorni${B}, il 100% degli utenti lo fa.${N2}
    ${I}Il livello Allenamento è stato progettato appositamente per affrontare questa sfida.${I}${ND}
    📃 ${B}Come funziona?${B}${N2}
    ${B}1. Premi il pulsante "Sto fumando", anche se non rispetti il programma.${B}${NL}
    Questo ti aiuta a prendere consapevolezza delle tue abitudini e ad analizzare quando e dove è più probabile che tu ceda.${N2}
    ${B}2. In questa fase non vengono applicate penalità.${B}${NL}
    Invece, ti concentrerai sull'imparare a controllare le tue abitudini e capire il tuo comportamento.${N2}
    ${B}3. Abituati al sistema.${B}${NL}
    Ogni giorno noterai che diventi più disciplinato e rispetti meglio il programma.${ND}
    ${B}Cosa c'è dopo?${B}${N2}
    Quando senti di aver ridotto o eliminato le infrazioni, ${B}puoi passare a un livello di difficoltà più avanzato${B}.
    Le penalità verranno applicate, ma non ti disturberanno perché sarai già preparato.${ND}
    ⬆️ ⬆️ ⬆️ ⬆️ ⬆️${NL}
    La configurazione del tuo account verrà${NL}
    🔜 ${B}completata automaticamente in 1 minuto${B}.${NL}
    Questa pausa serve per assicurarsi che tu abbia letto il messaggio sopra.
  `,
  [Content.DIFFICULTY_HARD_DECREASED]: `
    Sei uscito dal programma!${N2}
    Il tuo livello di difficoltà è stato${NL}
    ${B}ridotto a Normale${B} 🔻${N2}
    🚭 Il punto penalità non è stato applicato.${NL}
    ${I}Tieni duro — ce la fai!${I}
  `,
  [Content.DIFFICULTY_HARD_AUTO]: `
    ✨ Il livello di difficoltà è stato cambiato a ${B}Veloce${B} 🚀 ✨
  `,
  [Content.TIMEZONE]: `
    🌐 ${B}Impostazione del fuso orario${B}${N2}
    Per impostare il tuo fuso orario, segui questi passaggi:${N2}
    1. Vai su ${B}Google${B} e digita "timezone".${NL}
    2. Subito sotto la barra di ricerca vedrai il tuo fuso orario tra parentesi.${NL}
    3. Copialo senza le parentesi e ${B}invialo a noi${B}.${ND}
    [Clicca qui per andare su Google](https://www.google.com/search?q=my+timezone)
  `,
  [Content.TIMEZONE_INTRO]: `
    Per visualizzare l'orario correttamente, dobbiamo determinare il tuo fuso orario.
  `,
  [Content.TIMEZONE_SELECTED]: `
    🕰️ Fuso orario selezionato: ${B}{{timezone}}${B}${N2}
    ${B}Questo è importante${B}❗${NL}
    Per favore controlla l'orario attuale.${NL}
    Il nostro sistema rileva che da te sono le ${B}{{local_time}}${B}.${N2}
    Naturalmente, qualche minuto non ha importanza,${NL}
    ma se l'orario è sfasato di mezz'ora o più,${NL}
    dovrai regolare il tuo fuso orario.${ND}
    Il tuo orario attuale è ${B}{{local_time}}${B}?
  `,
  [Content.TIMEZONE_INVALID]: `
    💢 ${B}Errore: Fuso orario non valido${B}${N2}
    Un esempio corretto di fuso orario è: GMT+2${NL}
    Per favore riprova.
  `,
  [Content.LOCAL_TIME_NEW]: `
    🌐 ${B}Configurazione del fuso orario${B}${N2}
    Per favore guarda l'orologio del tuo telefono o computer
    e inserisci l'orario in formato 24h.${N2}
    Esempi:${NL}
    {{time_sample}}, 0:21, 19:00, 01:14
  `,
  [Content.LOCAL_TIME]: `
    👉 Il tuo orario attuale dovrebbe essere ${B}{{local_time}}${B} ⏳${N2}
    Per favore conferma o regola usando i pulsanti.
  `,
  [Content.SETTINGS]: `
    ${B}Fase 2. Configurazione.${B}${NL}
    È il momento di regolare le impostazioni, come fuso orario, lingua e livello di difficoltà.
  `,
  [Content.SETTINGS_DONE]: `
    ${B}Configurazione account completata!${B} 🎉${NL}
    Inizia a usare il bot ⤵️
  `,
  [Content.SETTINGS_UPDATED]: `
    ${B}Le tue impostazioni sono state aggiornate${B} ✔${N2}
    🕒 Il tuo intervallo attuale tra le pause: ${B}{{delta_time}}${B}
  `,
  [Content.SETTINGS_UPDATED_ON_IDLE]: `
    ✅ Fatto!${N2}
    Ogni volta che fumi, premi semplicemente «Sto fumando».
  `,
  [Content.BOT_IGNORE]: `
    🕵️ ${B}Ti abbiamo perso!${B}${N2}
    Sono passati ${I}2 giorni${I} dalla tua ultima interazione con il bot.${N2}
    ${B}Hai intenzione di continuare o no?${B}${ND}
    ❌ Se ${B}non hai intenzione${B} di continuare a usare il bot — scegli un motivo:${N2}
    - ${I}Hai smesso di fumare?${I} — Allora congratulazioni! 🎊${N2}
    - ${I}Hai deciso di non smettere dopo tutto${I} — È un peccato, ma è una tua scelta.${ND}
    ✅ Se ${B}hai intenzione di continuare${B}, ci sono diverse opzioni:${N2}
    1. ${B}{{from_scratch_message}}${B} — se il tuo intervallo attuale è di circa due ore o meno.${NL}
    Questo azzererà i tuoi progressi così puoi ${I}ricominciare da capo${I}.${N2}
    2. ${B}{{no_penalty_message}}${B} — continueremo semplicemente da dove ti eri fermato (a volte utile se la pausa non è stata troppo lunga).${NL}
    Il tuo timer verrà impostato su ${B}{{ no_penalty_time }}${B}${N2}
    3. ${B}{{set_own_interval}}${B} — utile per gli utenti esperti che non vogliono azzerare da zero.${NL}
    Imposta l'intervallo che ritieni giusto, nel formato ${B}3:17${B} (digitalo)
  `,
  [Content.BOT_IGNORE_JUST_GO_ON]: `
    ${B}Continuiamo semplicemente!${B} Ottimo! 👍${ND}
    Capiamo che la vita è davvero frenetica e impegnata al giorno d'oggi.${N2}
    È proprio per questo che non dovresti rinunciare all'obiettivo di smettere di fumare.${NL}
    Devi solo finire ciò che hai iniziato.
  `,
  [Content.BOT_IGNORE_SET_OWN_INTERVAL]: `
    Hai scelto di "${B}impostare il tuo intervallo${B}".${N2}
    Questa è la migliore opzione per gli utenti esperti.${N2}
    Per favore inserisci l'intervallo di cui hai bisogno in formato 24h.${ND}
    Esempi:${NL}
    2:30, 3:15, 5:55
  `,
  [Content.BOT_IGNORE_FAILED]: `
    Hai deciso di ${B}non smettere di fumare${B} 🤯${ND}
    Speriamo sinceramente che tu cambi idea in seguito.${N2}
    Il bot non ti invierà più messaggi.${N2}
    Per riattivare il bot, premi /start.
  `,
  [Content.BOT_IGNORE_SUCCESS]: `
    🎈 Hai ${B}smesso di fumare${B}! 🎉${ND}
    Significa che ne è valsa la pena 👍${N2}
    Vorremmo condividere alcune raccomandazioni con te:${N2}
    - Ricorda, la prima settimana è la più difficile${NL}
    - Bevi acqua — aiuta${NL}
    - Impara una nuova tecnica: quando qualcosa ti stressa, fai un respiro profondo.
    È un'ottima alternativa all'impulso di fumare.${N2}
    Fumare è una trappola.${NL} È solo un modo per prenderti i soldi.${N2}
    ${B}Siamo incredibilmente orgogliosi del tuo risultato!${B}${ND}
    Questo bot è completamente non commerciale. Non ho intenzione di guadagnarci nulla.
    Tuttavia, se vuoi offrirmi un caffè come ringraziamento, ne sarei molto onorato.
    Per farlo, visita il link qui sotto e clicca sul pulsante "Donate €3".${NL}
    Link: [${donate_link}](${donate_link})${NL}
    Grazie! 👍${ND}
    Spero che non ne avrai bisogno,${NL}
    ma se mai dovessi ricominciare a fumare, premi /start.
  `,
  [Content.CUSTOM_INTERVAL_SUCCESS]: `
    Il tuo intervallo scelto è stato impostato con successo.${N2}
    Il livello di difficoltà è stato abbassato a NORMALE per aiutarti ad adattarti.${N2}
    Continua a usare il bot come prima.
  `,
  [Content.CUSTOM_INTERVAL_ERROR]: `
    Impossibile impostare l'intervallo. Per favore prova a inserirlo in un formato diverso.
  `,
  [Content.STATS]: `
    📋 ${B}Le tue statistiche${B}:${NL}
    - Il tuo livello di difficoltà attuale 🏂 ${B}{{difficulty}}${B}${NL}
    - Hai iniziato a usare il bot il {{start_date}}${NL}
    - Giorni da allora: {{days_from_start}}${NL}
    - Sigarette fumate in totale: {{cigarettes}}${NL}
    - Punti penalità totali applicati: {{penalty_all}}${NL}
    - Intervallo iniziale {{delta_min}}${NL}
    - Intervallo attuale {{delta_time}}${NL}
  `,
  [Content.HOW]: `
    ${B}Come puoi supportare il creatore del bot:${B}${N2}
    ${B}Puoi fornire supporto finanziario${B} tramite una donazione volontaria.${NL}
    È importante capire che il bot è completamente non commerciale.${NL}
    Questo significa che indipendentemente da quanto donato, non modificherò le funzionalità del bot né inserirò pubblicità.${NL}
    L'importo predefinito della donazione è €3, ma sentiti libero di dare di più se vuoi.${NL}
    Link: [${donate_link}](${donate_link})${N2}
    ${B}Puoi aiutare con le traduzioni in altre lingue.${B}${NL}
    Se sei interessato, invia un'email a {{admin_email}}, e farò del mio meglio per rispondere entro una settimana.${N2}
    ${B}Puoi aiutare il bot diffondendo la voce tra i tuoi amici.${B}${NL}
    Naturalmente, la popolarità non è l'obiettivo di questo progetto.${NL}
    Ma, ammettiamolo, se nessuno lo conosce, è tutto inutile.${N2}
    ${I}Comunque tu scelga di aiutare, grazie!${I}${NL}
    ${I}Significa molto per me che ti importi del futuro di questo progetto${I} 💓
  `,
  [Content.MAXIMUM_REACHED]: `
    ${B}⚜️ Hai raggiunto il massimo! ⚜️${B}${N2}
    Incredibile ma vero — hai superato tutti i limiti possibili!${N2}
    ${I}Purtroppo, la nostra app non supporta intervalli così grandi, quindi non verranno apportate ulteriori modifiche.${I}${ND}
    ${B}Se non hai ancora smesso di fumare:${B}${N2}
    È il momento di lasciarsi il fumo alle spalle. Il tuo intervallo è già enorme e non ha senso continuare.${N2}
    Dai un'occhiata alle nostre raccomandazioni per aiutarti a smettere definitivamente. Clicca semplicemente il pulsante qui sotto 💙${ND}
    Ti auguriamo successo in ogni caso! 💪
  `,
  [Content.JOIN_OUR_CHAT]: `
    Abbiamo creato ${B}una chat accogliente per i nostri utenti${B}${N2}
    un posto per incontrare nuove persone,${NL}
    condividere idee e ispirarsi 💫${N2}
    Unisciti a noi 👉 [link](${tg_group_link})
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
