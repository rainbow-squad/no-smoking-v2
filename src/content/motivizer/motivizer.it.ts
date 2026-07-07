import { B, NL } from "../dialogs/constants";

const motivations: string[] = [
  `
    I messaggi motivazionali appaiono durante ogni lunga pausa
    e sono pensati per ricordarci perché lo stiamo facendo.
  `,
  `
    Probabilmente ogni fumatore ha un oggetto preferito rovinato da una sigaretta.
    Qualcuno ha bruciato la giacca, qualcun altro il vestito preferito,
    o il soffitto bianco dell'auto è diventato giallo. Tutto a causa di questa stupida abitudine!
  `,
  `
    Sai da quanto tempo le persone fumano "per soldi"? Dal XVI secolo!
    Già allora si vendeva tabacco alla gente. È un business incredibilmente redditizio
    costruito sulla salute delle persone.
  `,
  `
    Il principale pubblico target dell'industria del tabacco sono le persone dai 15 ai 25 anni.
    Perché se una persona inizia a fumare in questa fascia d'età, probabilmente non smetterà.
    Il tabacco viene pubblicizzato ovunque negli eventi giovanili, popolarizzato con vari miti.
    Ad esempio, che fumare dopo aver bevuto alcol sia "ancora più figo".
    Lo è solo perché il tabacco colpisce il corpo più duramente dopo l'alcol.
    Quindi, anche se non sei in questa fascia d'età, ricorda:
    tutto ciò che viene detto di positivo sul tabacco è solo pubblicità.
  `,
  `
    Le persone sono spesso irritate dai fumatori. Hai mai pensato a come appare un fumatore agli occhi di un non fumatore?
    È come questo: "Una persona adulta e intelligente si alza dalla scrivania ogni ora, va fuori,
    si mette una matita in bocca per cinque minuti e soffia fumo."
    Suona strano, vero? Ma è esattamente così che ci vedono.
  `,
  `
    Una goccia di nicotina uccide un cavallo — questo è un fatto. Quando fumiamo, inaliamo nicotina.
    Per noi non è così letale, ma ricorda: colpisce tre aree chiave:
    il cuore, il sistema circolatorio e le difese dell'organismo contro i tumori.
    Oggi, con le cure mediche sempre più costose,
    è insensato esporsi al rischio di malattie così gravi.
  `,
  `
    Un esercizio utile può essere praticare il non fumare.
    Esci a fumare con i colleghi o gli amici come al solito.
    Ma quando tutti accendono, tu no.
    Se qualcuno ti chiede perché non fumi, di' semplicemente "non ne ho voglia".
    Potrebbe divertire i colleghi, niente di più.
    Per te, però, sarà un'altra piccola vittoria sull'abitudine.
  `,
  `
    I fumatori raramente vanno d'accordo con i non fumatori. L'odore di sigarette è sgradevole.
    Inoltre, i fumatori sono molto meno numerosi dei non fumatori.
    Immagina quante persone ti hanno escluso dalla loro vita
    solo a causa di questa stupida abitudine!
  `,
  `
    Oltre 4.000 sostanze chimiche vengono rilasciate quando accendi una sigaretta.
    Non sorprende che il fumo sia una delle principali cause di morte prematura.
    Pensa al significato delle parole "morte prematura".
    Hai così tanti piani nella vita — amici, famiglia, obiettivi. Fai di tutto per rendere la vita interessante.
    E poi, all'improvviso, "bam" — sei andato.
    Anche se avresti potuto vivere a lungo e felicemente. E per di più hai pagato per questo.
  `,
  `
    Barzelletta: Perché i fumatori portano sempre un accendino?
    Perché le loro probabilità di essere colpiti da un fulmine sono più alte di quelle di smettere di fumare!
  `,
  `
    L'idea che chi smette di fumare ingrassi è un mito.
    Anche se sei predisposto all'aumento di peso — è comunque un mito.
    Nel 99% dei casi le persone ingrassano perché mangiano sdraiati
    o iniziano a consumare dolci e pasticcini in quantità eccessive.
    Fai attenzione a cosa mangi.
    Il fatto che il fumo danneggi i denti, invece, non è un mito.
  `,
  `
    Tutti i sostituti della nicotina sono una bugia.
    Cerotti, pillole, vaporizzatori — sono solo un altro tipo di sigaretta.
    Rimarresti stupito da quanto sia inventiva l'industria del tabacco!
    Ti venderanno sigarette in bottiglie, sigarette come deodoranti per auto, profumi con odore di tabacco.
    E ti diranno: "Così smetti di fumare."
    Questa industria guadagna cifre folli. Faranno di tutto pur di tenerti agganciato!
  `,
  `
    Nel mondo ci sono innumerevoli locali non fumatori.
    I fumatori escono "fuori" per fumare o vanno in apposite "sale fumatori".
    Hai mai pensato a come appare dall'esterno?
    Come un "acquario per dipendenti che puzzano".
    Non è nemmeno discriminazione — è solo che le persone senza questa abitudine
    non sono sempre disposte a sopportarla.
  `,
  `
    La tua famiglia, i tuoi amici, le persone care che non fumano — ti amano per quello che sei, indipendentemente dalle abitudini.
    Anche se il tuo alito sa di fumo dopo una sigaretta, lo accettano con comprensione.
    Allora perché esporli al danno? È semplicemente inutile.
    È per questo che stai cercando di smettere di fumare.
  `,
  `
    Barzelletta:
    Perché i fumatori non si perdono mai?
    Perché seguono sempre i cartelli "vietato fumare"!
  `,
  `
    Le papille gustative dei fumatori sono danneggiate dall'abitudine.
    Non riescono a gustare appieno il cibo.
    Non riescono a percepire appieno il profumo dei profumi.
    A volte persino l'odore della benzina sull'asfalto può evocare
    un'incredibile ondata di ricordi — ma non finché fumi ancora.
    Smetti. È un'abitudine inutile.
  `,
  `
    Quanto costa il tuo pacchetto di sigarette? Sono i tuoi soldi! Tuoi e solo tuoi.
    Potresti spenderli per qualsiasi cosa, invece li dai all'industria del tabacco.
    Il punto è che non li stai spendendo come faresti per un'anguria d'estate.
    Li stai dando via a causa di un'abitudine a cui ti hanno fatto dipendere.
    Ma non è assurdo?
  `,
  `
    Ognuno che smette di fumare ha la propria ragione più importante.
    Ricordala sempre.
    Ti aiuterà. Smettere diventa molto più facile quando ti concentri
    sul motivo principale per cui lo stai facendo.
  `,
  `
    Potrebbe sembrare una ragione semplice per smettere di fumare,
    ma il cervello di un non fumatore funziona tre volte meglio rispetto a quando fuma.
    Puoi essere tre volte più intelligente e veloce!
    Devi solo smettere di pagare per qualcosa di cui non hai bisogno.
  `,
  `
    Se vivi o lavori con persone che fumano, non deve essere un problema.
    Puoi comunque uscire con loro come al solito.
    Ma se non è il tuo momento di fumare — non farlo.
    Non fare nemmeno un tiro. Che senso ha?
    Segui il tuo programma, e basta.
  `,
  `
    A proposito, non molto tempo fa l'industria del tabacco ha trovato un modo per attirare i giovani.
    Fumare non era considerato cool tra gli adolescenti, così hanno inventato le sigarette elettroniche —
    un incredibile "miracolo" che permette di soffiare vapore dolciastro.
    Si è rivelato ancora peggio delle sigarette, portando a casi di diabete.
    Pensi che qualcuno abbia risarcito le persone che si sono ammalate di diabete?
    L'intera industria del tabacco è progettata per fare soldi sulla salute altrui.
  `,
  `
    I non fumatori hanno una pelle migliore. Perché? Perché non sono costantemente avvelenati da sostanze chimiche.
    E non devi essere una giovane donna per apprezzarlo.
    La carnagione sana di un uomo maturo è molto più attraente
    della pelle grigia di un fumatore invecchiato e perennemente stanco.
  `,
  `
    Se smetti di fumare, i tuoi vestiti non odoreranno più di tabacco,
    i tuoi capelli non odoreranno più di tabacco,
    e le tue mani non odoreranno più di tabacco.
  `,
  `
    Prenditi un momento per osservare un gruppo di persone che fumano.
    In piedi vicino a un cestino o in una sala fumatori.
    Persone perfettamente normali che soffiano fumo, spendono i loro soldi e la loro salute,
    solo per finire a puzzare di fumo.
    Presto smetterai di fumare e non sarai tra loro. Molto presto.
  `,
  `
    Potrebbe sembrare strano, ma è molto più facile smettere di fumare ora che dopo.
    È un fatto psicologico scientificamente provato.
    Una persona che decide di smettere di fumare può farcela.
    Ma se si allontana da questo percorso, smettere diventa più difficile — psicologicamente.
    Inizia a pensare "non sono poi così tanti soldi" o "fumo da anni e sto bene", e così via.
    Hai già deciso di smettere di fumare.
    Ora è il momento migliore per farlo. Non fermarti!
  `,
  `
    Sarai un esempio per gli altri. Se smetti tu, potrebbe smettere anche il tuo partner, e così i tuoi amici.
    Passerete comunque lo stesso tempo insieme come prima, parlando come sempre.
    Tutto sarà uguale — tranne che non ci sarà una sigaretta in mano.
  `,
  `
    Barzelletta su come colleghiamo il fumo alle attività quotidiane.
    Un uomo annunciò con orgoglio di aver smesso di fumare dopo 20 anni.
    Il suo amico chiese come ci fosse riuscito.
    "Semplice," disse. "Ora fumo solo quando bevo il caffè."
    "E allora?"
    "Sono passato al tè."
  `,
  `
    Il fumo danneggia la memoria. Se smetti di fumare, potrai ricordare momenti preziosi la sera
    davanti a una tazza di tè o caffè.
    Ricorderai eventi dell'infanzia nei dettagli, la tua laurea, o le passeggiate con il tuo cane amato.
    Avrai più tempo per te stesso e meno per la routine.
    La tua mentalità diventerà più positiva. Il fumo ti appesantisce.
  `,
  `
    Un non fumatore è più energico e fresco.
    È più attivo nella vita, ha una vita sessuale più vivace,
    e piani più diversificati e dinamici.
    Un non fumatore riesce facilmente a fare più cose contemporaneamente.
  `,
  `
    Inizia a ricordarti che fumare è solo un'abitudine.
    La differenza tra un'abitudine e una dipendenza è molto semplice.
    Sei abituato a farlo. Ma se all'improvviso non lo fai — non cambia nulla.
    Assolutamente nulla.
  `,
  `
    Se soffri di mal di testa, specialmente con i cambiamenti meteorologici, il fumo potrebbe essere la causa.
    Sì, le sigarette restringono i vasi sanguigni. Aggiungi il colesterolo accumulato negli anni,
    più la pressione atmosferica — ed è quasi un mal di testa garantito.
    Perché vorresti questo?
  `,
  `
    Hai finito le sigarette e non hai fumato.
    Dopo poco tempo inizi a sentirti nervoso e irritabile — strano, vero?
    Per qualcuno che dovrebbe avere il pieno controllo della propria vita,
    dipendere da qualcosa venduto in ogni chiosco come una gomma da masticare.
    È strano e frustrante.
  `,
  `
    Molte persone dicono "fumo perché ho stress cronico".
    Lo stress è una questione completamente separata, amico mio.
    Se sei stressato — che sia per il lavoro o per casa — non stai inventando nulla di nuovo.
    Le persone ci hanno a che fare per tutta la storia dell'umanità.
    Ecco perché esistono approcci perfettamente ragionevoli per affrontare ciò che ti causa stress.
    Se questo ti riguarda, prenditi del tempo per ricercare l'argomento online.
    Rimarrai stupito di quanto puoi migliorare la tua vita con pochissimo sforzo.
  `,
  `
    A proposito, ecco una grande idea chiamata "L'Ultimo Volo".
    Una persona che smette di fumare chiede a qualcuno di fotografarla mentre butta un pacchetto vuoto nel cestino,
    con una sigaretta in mano e il pacchetto a mezz'aria.
    Non deve nemmeno essere il tuo "ultimo pacchetto in assoluto". Puoi fare questa foto anche adesso.
    Quando finalmente smetti di fumare per sempre, stampa la foto, incorniciala e mettila su uno scaffale.
    È il simbolo di quanto sei forte sulle tue abitudini. La tua vittoria.
  `,
  `
    Statistiche globali: ogni sei secondi, qualcuno nel mondo muore per malattie causate dal consumo di tabacco —
    sono 3,5 milioni di persone all'anno.
    Vuoi farne parte?
  `,
  `
    Perché si dice che i fumatori abbiano una qualità della vita inferiore?
    Perché i fumatori spesso allontanano i non fumatori. I fumatori bevono spesso anche alcol.
    Tra i non fumatori ci sono molte persone di successo, ma tra i fumatori
    trovi molti che faticano nella vita e bevono eccessivamente.
    Ed è logico — i tuoi amici determinano in parte la qualità della tua vita.
  `,
  `
    C'è una regola essenziale chiamata "Compagni di Fumo".
    Se hai l'abitudine di fumare mentre bevi alcol — smetti di bere del tutto.
    Se fumi quando bevi caffè — passa al tè.
    Rompi le associazioni con il fumo che è facile abbandonare.
    Potrai tornare a goderti il tuo caffè preferito come al solito una volta smesso di fumare.
    E guarderai indietro a tutto questo con un sorriso.
  `,
  `
    Barzelletta.
    Un fumatore guardò il suo pacchetto di sigarette e disse: "Mi stai uccidendo".
    Le sigarette risposero: "Sei stato tu a comprarmi".
  `,
  `
    Fatto interessante: l'acqua può aiutarti a smettere di fumare. Perché?
    Il nostro corpo è composto principalmente d'acqua e abbiamo bisogno di circa 2 litri al giorno. Ma non tutti ne bevono abbastanza.
    Inoltre, spesso saltiamo i pasti e alteriamo le nostre abitudini alimentari.
    Ecco cosa succede: fumi, e le tossine rimangono nel corpo "a lungo",
    soprattutto perché non ti sciacqui nemmeno la bocca dopo aver fumato. Il sapore delle sigarette
    rimane in bocca, e col tempo le papille gustative iniziano a dire "e se fumassi un'altra?"
    Ora, se semplicemente bevi qualche sorso d'acqua nel mezzo, le tossine verranno eliminate,
    e avrai molto meno voglia di fumare.
  `,
  `
    Le sigarette non sono "relax". Non stai "riposando con una sigaretta".
    Puoi rilassarti senza una sigaretta.
    Puoi rilassarti come vuoi. In questo momento stai riposando,
    ma per qualche motivo stai anche soffiando fumo.
  `,
  `
    A volte sembra quasi impossibile resistere all'impulso di fumare un'altra sigaretta.
    Ne hai davvero, davvero voglia. Cosa fare? La soluzione è semplice.
    Vai alla finestra, aprila e fai un respiro profondo.
    Goditi il momento. Se uno non basta, fanne altri.
    Fumare è una stupida abitudine — puoi fumare quando vuoi.
    E se vuoi, puoi scegliere di non fumare affatto.
  `,
  `
    Immagina: esistono dati reali su persone over 60 che hanno smesso di fumare.
    Secondo le statistiche, anche in questa fascia d'età, la durata della vita di chi ha smesso di fumare
    è SEMPRE stata maggiore di chi ha continuato a fumare come prima.
    Questo mostra chiaramente quanto il fumo sia dannoso.
  `,
  `
    Non fumare, non fumare, poi all'improvviso ti innervosisci, diventi irritabile, le mani iniziano a tremare.
    Ti prepari un caffè, esci, accendi una sigaretta e tiri una boccata. Bello, vero?
    Lo è davvero? Ti sei innervosito dal nulla, sei uscito e hai iniziato a fumare.
    Non suona così romantico, vero?
    È esattamente così che lo vedono i non fumatori.
  `,
  `
    Vorresti provare a imparare una lingua straniera?
    Il multitasking è un punto di forza dei non fumatori.
    Quindi, se hai l'opportunità e del tempo libero,
    puoi iniziare proprio adesso.
  `,
  `
    Una tosse casuale dal nulla — per i fumatori è un'occorrenza comune. Fastidioso, vero?
  `,
  `
    Se le sigarette fossero fatte solo di tabacco, tutti smetterebbero di fumare facilmente.
    I proprietari delle aziende tabacchiere lo sanno.
    Ecco perché rendono i fumatori dipendenti da vari additivi.
    Ce n'è di tutti i tipi — sia nel tabacco che nei filtri.
    A proposito, è per questo che le sigarette non si spengono, ad esempio.
  `,
  `
    Ti è mai capitato? Sei seduto la sera, ti stai rilassando.
    Poi pensi "forse fumo una sigaretta".
    Metti la mano in tasca o nella borsa e ti accorgi che le sigarette sono finite.
    Cosa fai? Ti alzi, ti vesti e vai al chiosco più vicino per le sigarette.
    Immagina quanto sia strano. Invece di goderti il tuo meritato riposo,
    ti stai vestendo e percorrendo un tragitto che conosci fin troppo bene.
  `,
  `
    Hai mai sentito parlare di sigarette contraffatte? Probabilmente sì.
    Ma i casi di persone avvelenate da sigarette false non sono così noti. Eppure accadono.
    Ecco come va: qualcuno fuma sigarette di bassa qualità, viene avvelenato, si sente stordito e male.
    Cosa fa? Pensa di essere malato e si mette in malattia.
    Ma l'avvelenamento può essere molto peggiore. E per di più hai pagato per questo.
  `,
  `
    Gli psicologi ritengono che masticare gomme rinforzi fortemente l'abitudine al fumo.
    I fumatori che masticano gomme si abituano a inghiottire nicotina con la saliva,
    e non appena la gomma è in bocca, scatta immediatamente l'associazione con le sigarette.
    Quindi, se mastichi gomme e hai intenzione di smettere di fumare, è meglio smettere di masticare — per ora. Temporaneamente.
  `,
  `
    Barzelletta. Un uomo accese la sua sigaretta e disse: "Devo davvero smettere di fumare."
    Il suo amico chiese: "Perché non lo fai?"
    Lui tirò una lunga boccata e rispose: "Perché smettere è l'unica cosa che faccio peggio del fumare."
  `,
  `
    Hai notato che le celebrità quasi non fumano mai?
    E certamente non perché non possano permetterselo.
    È semplicemente stupido essere schiavi di un'abitudine inutile.
  `,
  `
    Per fumare meno, imponiti dei limiti. Togli gli accendini extra — tienine solo uno.
    Smetti di comprare sigarette a cartoni e porta con te solo un pacchetto alla volta.
    Rendi il fumo meno accessibile per te stesso.
  `,
  `
    Smettere di fumare significa libertà dai limiti — puoi stare liberamente in compagnia
    senza dover andare da parte o uscire per fumare.
  `,
  `
    Ricorda sempre — qualsiasi metodo che promette di farti smettere di fumare è una truffa.
    La verità è che hai già scelto l'unico metodo che funziona — limitare il fumo con i promemoria.
    Nessuna pillola, cerotto o sessione di training ti aiuterà.
    Sono solo un altro modo per prendere i tuoi soldi.
  `,
  `
    Onestamente, quando leggi dei danni del fumo, viene voglia di accendere una sigaretta.
    Quindi diciamolo semplicemente come un fatto — il fumo è un'abitudine incredibilmente dannosa e distruttiva
    che non ti porta assolutamente nessun beneficio.
  `,
  `
    Non esistono sigarette sicure, non esistono vaporizzatori sicuri, e fumare il narghilè non fa bene.
    A volte ciò che viene pubblicizzato come "il più sicuro" può rivelarsi "il più letale".
    Allora perché rischiare la tua vita?
  `,
  `
    I moderni filtri per sigarette trattengono certamente il catrame e rendono il fumo un po' più sicuro.
    Ma "un po' più sicuro" non significa che un mattino non ti sveglierai
    con una grave malattia causata dal fumo.
    Quindi, smetti di fumare.
  `,
  `
    Barzelletta. Un uomo smise di fumare dopo 20 anni.
    Gli ospedali si riunirono e dissero: "Abbiamo appena perso il nostro miglior cliente!"
  `,
  `
    Quando inizi a pensare al fumo come a un'attività inutile, diventa molto più facile superare l'abitudine.
    Più una persona pensa al fumo come a una semplice abitudine, più in fretta smette.
  `,
  `
    Il tabacco da fiuto è una causa comune di cancro alla mucosa orale — sì, esiste anche quel tipo di cancro.
    Molte persone masticano o annusano tabacco "per svegliarsi", ma è pericoloso anche questo.
  `,
  `
    Secondo le statistiche pure, il 90% dei fumatori smetterebbe se potesse.
    La verità è che devono solo prendere l'iniziativa, come hai fatto tu.
    Chiedi ai tuoi amici se vogliono smettere di fumare. Anche se dicono no,
    quando smetterai completamente, sarai un esempio per loro.
  `,
  `
    Ogni anno un numero enorme di persone smette di fumare.
    Ma circa la metà di loro smette solo dopo aver già avuto seri problemi di salute.
    Eppure non doveva arrivare a questo.
  `,
  `
    Con l'aiuto di questo bot, le persone smettono di fumare in media in tre mesi.
    Se hai raggiunto un intervallo di più di due ore tra le pause fumo,
    è il momento di iniziare a pensarci.
    Scegli un periodo in cui avrai tre o più giorni liberi.
    Devi solo superare i primi cinque giorni — dopo diventa più facile.
  `,
  `
    I film spesso contengono pubblicità nascosta di sigarette.
    Quando il protagonista tira una boccata soddisfatta — mmm,
    fa venire davvero voglia di fumare.
    È pubblicità di sigarette. Ricordatelo sempre!
  `,
  `
    Barzelletta. Un fumatore guardò i suoi denti ingialliti allo specchio e disse:
    "Beh, almeno ora si abbinano al mio maglione preferito."
  `,
  `
    Cosa vuol dire "non riesco a smettere di fumare"?! Suona strano, vero?
  `,
  `
    Si sente spesso dire: "Fumo perché mi piace.
    Mi piace l'odore delle sigarette e la sensazione di inalare il fumo di tabacco."
    Ricordiamoti — stai smettendo di fumare perché è dannoso, inutile
    e fastidioso per gli altri, non per te.
    Sì, il fumo di tabacco può essere in qualche modo piacevole,
    ma ne sei diventato schiavo.
    E se non sei più in controllo di questa abitudine, è ora di metterci fine.
  `,
  `
    Nel mezzo di una giornata difficile ti siedi, accendi una sigaretta,
    e ti porta in un mondo di "riflessioni tranquille" sulla vita.
    Ti stai rilassando. Sembra tutto ok, vero?
    Ora ti dico — non hai bisogno di una sigaretta per questo.
    È solo parte di un'abitudine che si è radicata in te,
    e ora è difficile lasciarla andare.
    Combatti! Questa è una vera battaglia! Sei più forte.
  `,
  `
    Di sicuro, quando hai iniziato a fumare, dicevi "fumo se voglio — non fumo se non voglio".
    Non è cambiato nulla.
  `,
  `
    Hai scorso tutti i messaggi motivazionali fino alla fine.
    Ora ricominceranno dall'inizio.
    Tuttavia, vogliamo chiederti — non fermarti.
    Non ha senso fumare. Comprando sigarette stai solo riempiendo le tasche di qualcun altro.
  `,
].map(v => `> 🏋️ ${B}Motivazione${B}:\\${NL} ${v}`);

const challenges = [
  `
    Se fumi appena ti svegli, prova a non farlo domani.
    Inizia preparando un tè o un caffè. O fai colazione prima.
    Il punto è — non farlo subito.
    È solo un'abitudine, e non dovrebbe dettare la tua giornata.
  `,
  `
    Se fumi appena ti svegli, prova a non farlo domani.
    Inizia preparando prima un tè o un caffè. O fai colazione invece.
    Il punto è — non farne la prima cosa che fai.
    È solo un'abitudine, e non dovrebbe controllare la tua giornata.
  `,
  `
    Se fumi alle fermate dell'autobus mentre aspetti i mezzi, non farlo prima che arrivino.
    Se fumi prima di salire in macchina, non farlo questa volta.
    Sei più forte della tua abitudine!
  `,
  `
    Quando compri il prossimo pacchetto di sigarette, non accenderne subito una.
    Prova a rimandarlo il più a lungo possibile. Rimarrai sorpreso da quanto sia facile.
    È solo una stupida abitudine che non ti controlla più.
  `,
  `
    Se fumi al lavoro o a scuola, salta una o due pause fumo.
    Quando i colleghi ti invitano, rifiuta. Di' solo che sei occupato e fumerai dopo.
    Nessuno se la prenderà con te.
    E avrai la possibilità di praticare quanto sei più forte della tua abitudine.
  `,
  `
    Se fumi prima di andare a letto, non farlo stasera.
    Non devi farlo per forza.
    Decidi quando pensi di andare a letto e smetti di fumare un'ora prima.
    Puoi pianificarlo — è molto semplice, fidati.
  `,
  `
    Se hai un amico che ha smesso di fumare, chiedigli come ci è riuscito.
    Se non ne hai, chiedi a un non fumatore perché non fuma.
  `,
].map(v => `> 🎯 ${B}Sfida del Giorno${B}:\\${NL} ${v}`);

const hints = [
  `
    La Sfida del Giorno è una sfida con cui puoi competere.
    Ogni volta che completi la Sfida del Giorno, sei un passo più vicino al tuo obiettivo.
    Quindi, cerca di completarle tutte.
  `,
  `
    Puoi cambiare il tuo fuso orario in qualsiasi momento digitando /time nella chat.
  `,
  `
    Il bot non memorizza alcuna informazione sugli utenti.
    Non chiedere nemmeno.
  `,
  `
    Puoi controllare i tuoi progressi digitando /stats nella chat.
  `,
  `
    Il bot è completamente non commerciale. Non è prevista alcuna pubblicità né ricerca di profitto.
  `,
  `
    Puoi cambiare la lingua in qualsiasi momento digitando /lang nella chat.
  `,
  `
    Pensaci — forse puoi consigliare il bot a uno dei tuoi amici.
    Smettere di fumare insieme è molto più divertente.
  `,
  `
    Puoi reimpostare i tuoi progressi? Sì, puoi.
    Nel 99% dei casi non servirà a nulla, ma se vuoi rischiare — digita /start nella chat.
  `,
  `
    Se conosci una lingua straniera diversa da quelle in cui il bot è già tradotto,
    puoi aiutarci con la traduzione.
    O forse vuoi semplicemente supportare il creatore del bot.
    In tal caso, digita /how nella chat.
  `,
].map(v => `> 💡 ${B}Consigli Utili${B}:\\${NL} ${v}`);

export const motivizerIt: string[] = (() => {
  const mixHintsAndChallenges: string[] = [];
  while (challenges.length && hints.length) {
    if (hints.length) {
      const hint = hints.shift()!;
      mixHintsAndChallenges.push(hint);
    }
    if (challenges.length) {
      const challenge = challenges.shift()!;
      mixHintsAndChallenges.push(challenge);
    }
  }
  const period = Math.floor(motivations.length / mixHintsAndChallenges.length);
  const result: string[] = [];
  motivations.forEach((v, i) => {
    result.push(v);
    if (i % period == 0) {
      const hintOrChallenge = mixHintsAndChallenges.shift();
      if (hintOrChallenge) {
        result.push(hintOrChallenge);
      }
    }
  });
  return result;
})();
