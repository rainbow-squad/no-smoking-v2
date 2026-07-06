import { B, NL } from "../dialogs/constants";

const motivations: string[] = [
  `
    Motivationsnachrichten erscheinen bei jeder langen Pause
    und sollen uns daran erinnern, warum wir das tun.
  `,
  `
    Wahrscheinlich hat jeder Raucher ein Lieblingskleidungsstück, das durch eine Zigarette ruiniert wurde.
    Jemand hat seine Jacke verbrannt, jemand sein Lieblingskleid, bei jemandem
    wurde die weiße Decke im Auto gelb. Und das alles wegen einer dummen Gewohnheit!
  `,
  `
    Weißt du, seit wann Menschen „für Geld" rauchen? Seit Anfang des 16. Jahrhunderts!
    Ja, schon damals begannen die Menschen, Tabak zu verkaufen. Es ist ein unglaublich profitables
    Geschäft, das auf Kosten der Gesundheit der Menschen gemacht wird.
  `,
  `
    Die Hauptzielgruppe der Tabakindustrie sind Menschen zwischen 15 und 25 Jahren.
    Denn wenn jemand in diesem Alter anfängt zu rauchen, hört er wahrscheinlich nicht mehr auf.
    Tabak wird auf allen Jugendveranstaltungen beworben, popularisiert
    durch verschiedene Lügengeschichten. Zum Beispiel, dass es noch besser ist, nach Alkohol zu rauchen.
    Es wird nur besser sein, weil der Tabak den Körper nach dem Alkohol trifft.
    Deshalb, auch wenn du nicht in dieser Altersgruppe bist, denk daran:
    Alles Gute, was über Tabak erzählt wird, ist Werbung.
  `,
  `
    Raucher nerven andere Menschen. Hast du dir je überlegt, wie ein Raucher in den Augen eines Nichtrauchers aussieht?
    Es sieht ungefähr so aus: „Ein erwachsener, intelligenter Mensch steht aus irgendeinem Grund stündlich von seinem Arbeitsplatz auf,
    geht nach draußen und steckt sich fünf Minuten lang einen Bleistift in den Mund und bläst Rauch aus." Klingt seltsam, oder?
    Aber so sehen uns andere.
  `,
  `
    Ein Tropfen Nikotin tötet ein Pferd — das ist eine Tatsache. Wenn wir rauchen, inhalieren wir Nikotin.
    Für uns ist es nicht so gefährlich. Denk jedoch daran, dass es drei Dinge angreift:
    das Herz, das Kreislaufsystem und den Schutz vor Tumoren. Heute, wo die Medizin
    jeden Tag teurer wird, hat es keinen Sinn, sich der Gefahr solch schrecklicher Krankheiten auszusetzen.
  `,
  `
    Nützlich kann das Training sein, das Rauchen abzulehnen.
    Geh mit Arbeitskollegen oder Freunden rauchen wie gewohnt.
    Und wenn alle anzünden — zündest du nicht an.
    Wenn man dich fragt, warum du nicht rauchst, sag "ich will nicht".
    Das wird die Kollegen amüsieren — mehr nicht.
    Für dich wird es jedoch ein weiterer kleiner Sieg über die Gewohnheit sein.
  `,
  `
    Raucher können selten Beziehungen mit Nichtrauchern haben. Der Geruch von Zigaretten stößt ab.
    Darüber hinaus gibt es viel weniger Raucher als Nichtraucher. Stell dir einfach vor,
    wie viele Menschen dich allein wegen dieser dummen Gewohnheit abgelehnt haben!
  `,
  `
    Über 4000 chemische Substanzen werden freigesetzt, wenn du eine Zigarette anzündest.
    Kein Wunder, dass Rauchen eine der Hauptursachen für frühzeitigen Tod ist.
    Denk einfach über die Bedeutung der Worte "frühzeitiger Tod" nach.
    Du hast so viele Pläne fürs Leben, Freunde, Familie, Ziele. Du tust alles, um das Leben interessant zu machen.
    Dann plötzlich, "peng" — und du bist tot. Obwohl du lange und glücklich hättest leben können. Und hast dafür noch bezahlt.
  `,
  `
    Witz. Die Lehrerin sagte, wer raucht, wird nicht mehr wachsen,
    und erschoss zur Bestätigung ihrer Worte den Siebtkässler Sidorov.
  `,
  `
    Dass Menschen, die mit dem Rauchen aufhören, zunehmen, ist ein Mythos. Auch wenn du zur Fülligkeit neigst — Mythos.
    In 99% der Fälle nehmen Menschen zu, weil sie liegend essen oder Süßigkeiten und Mehlprodukte
    in abnormalen Mengen konsumieren. Pass auf, was du isst. Aber dass Zähne durch Rauchen leiden — das ist eine Tatsache.
  `,
  `
    Alle Nikotinersatzmittel sind Lüge. Alle Pflaster, Tabletten, Vapes sind nur eine andere Art von Zigaretten.
    Oh, du wirst überrascht sein, wie erfinderisch die Tabakindustrie ist! Sie werden dir Zigaretten in Flaschen verkaufen,
    Zigaretten als Lufterfrischer fürs Auto, Parfüm mit Tabakduft. Sie werden sagen, dass du "so aufhörst zu rauchen".
    Diese Industrie verdient wahnsinnig viel Geld. Sie tun alles — nur damit du nicht aussteigst!
  `,
  `
    Auf der ganzen Welt gibt es viele Einrichtungen, in denen nicht geraucht wird. Und Raucher gehen "nach draußen", um zu rauchen.
    Oder sogar in spezielle "Raucherzimmer". Hast du dir nie überlegt, dass das von außen aussieht wie
    "ein Aquarium für Abhängige, die stinken"? Das ist nicht einmal Diskriminierung.
    Menschen ohne diese Gewohnheit sind einfach nicht immer bereit, das zu ertragen.
  `,
  `
    Deine Familie, Freunde, geliebten Menschen, die nicht rauchen — sie lieben dich so wie du bist, unabhängig von deinen Gewohnheiten.
    Und selbst wenn dein Atem nach dem Rauchen riecht — sie verstehen das.
    Warum sie also vergiften? Das ist einfach sinnlos. Deshalb versuchst du, mit dem Rauchen aufzuhören.
  `,
  `
    Humor. Jemanden auf der Straße um eine Zigarette zu bitten — das ist normal.
    Aber wenn jemand Schokolade isst und du um ein Stück bittest — schauen sie dich an wie einen Verrückten.
  `,
  `
    Raucher haben durch die Gewohnheit beschädigte Rezeptoren. Raucher können den Geschmack von Essen nicht richtig wahrnehmen.
    Raucher können den Duft von Parfüm nicht richtig wahrnehmen. Manchmal kann sogar der Geruch von Benzin auf dem Asphalt einen
    unglaublichen Strom von Erinnerungen auslösen. Aber den hast du nicht, solange du noch rauchst. Hör auf. Sinnlose Gewohnheit.
  `,
  `
    Was kostet deine Packung Zigaretten? Das ist dein Geld! Deins und nur deins.
    Du könntest es für alles ausgeben. Aber du gibst es der Tabakindustrie.
    Versteh das: Du gibst es nicht so, wie du im Sommer eine Wassermelone kaufst.
    Du gibst es, weil du eine Gewohnheit hast, an die sie dich gewöhnt haben.
    Aber das ist doch absurd.
  `,
  `
    Jeder, der mit dem Rauchen aufhört, hat seinen eigenen Hauptgrund. Erinnere dich immer daran.
    Das wird dir helfen. So ist es viel einfacher, mit dem Rauchen aufzuhören. Der Hauptgrund, warum du aufhörst zu rauchen.
  `,
  `
    Das mag ein primitiver Grund sein, mit dem Rauchen aufzuhören,
    aber das Gehirn eines Nichtrauchers funktioniert 3-mal besser als wenn er raucht.
    Du kannst 3-mal intelligenter und schneller sein!
    Du musst nur aufhören, für etwas zu bezahlen, das du nicht brauchst.
  `,
  `
    Wenn du mit jemandem zusammenlebst oder mit Rauchern arbeitest, ist das überhaupt kein Problem.
    Du kannst genauso wie früher mit ihnen rauchen gehen. Aber wenn es noch nicht Zeit zum Rauchen ist, rauch nicht.
    Zieh nicht einmal einen Zug. Was hat das für einen Sinn? Rauch einfach nicht. Du hast deinen eigenen Zeitplan.
  `,
  `
    Übrigens hat die Tabakindustrie vor Kurzem herausgefunden, wie sie Jugendliche anlocken kann.
    Rauchen war bei Teenagern nicht in Mode, also erfanden sie Vapes:
    eine unglaubliche Erfindung, mit der man süßlichen Dampf ausstoßen kann.
    Es stellte sich heraus, dass diese Geschichte noch schlimmer endete als mit Zigaretten: Diabetes.
    Glaubst du, dass jemand die Menschen entschädigt hat, die an Diabetes erkrankten?
    Die gesamte Tabakindustrie ist darauf ausgelegt, Geld auf Kosten der Gesundheit anderer zu verdienen.
  `,
  `
    Nichtraucher haben bessere Haut. Warum? Weil sie keine ständige Vergiftung durch chemische Substanzen haben.
    Und dafür muss man nicht unbedingt ein junges Mädchen sein. Eine gesunde Hautfarbe bei einem reifen Mann ist viel attraktiver
    als die graue Haut eines alternden, ewig müden Arbeiters.
  `,
  `
    Wenn du aufhörst zu rauchen, werden deine Kleidung nicht mehr nach Tabak riechen, deine Haare werden nicht mehr
    nach Tabak riechen, deine Hände werden nicht mehr nach Tabak riechen.
  `,
  `
    Beobachte mal eine Gruppe rauchender Menschen. Stehend neben dem Mülleimer oder im Raucherzimmer.
    Völlig normale Menschen stoßen Rauch aus, verschwenden ihr Geld und ihre Gesundheit, um nach Tabak zu stinken.
    Bald wirst du aufhören zu rauchen und nicht mehr dazugehören. Schon bald.
  `,
  `
    Das klingt seltsam. Aber jetzt ist es viel einfacher, mit dem Rauchen aufzuhören als später. Ein von Wissenschaftlern festgestellter psychologischer Fakt.
    Eine Person, die die Entscheidung getroffen hat, mit dem Rauchen aufzuhören, kann es tun. Wenn sie von diesem
    Weg abkommt, wird es danach schwerer. Psychologisch. Die Person beginnt zu denken: "Das ist doch nicht so viel
    Geld" und "Ich rauche schon lange und mir passiert nichts" und so weiter. Du hast bereits entschieden, dass du aufhörst zu rauchen.
    Jetzt ist der beste Zeitpunkt dafür. Hör nicht auf!
  `,
  `
    Du wirst ein Vorbild für andere sein. Wenn du aufhörst, hört auch dein Mann oder deine Frau auf, hören deine Freunde auf.
    Du wirst genauso viel Zeit miteinander verbringen wie früher, genauso plaudern wie früher.
    Alles wird wie früher sein. Nur keine Zigarette in der Hand. Und wozu braucht man die überhaupt.
  `,
  `
    Humor. Vasili Petrovich aus Kaluga nahm beim Jagdausflug versehentlich die Zigaretten
    seines Sohnes mit, und bis zum Mittag hatte er auf einer Waldlichtung drei Giraffen erlegt.
  `,
  `
    Rauchen schadet dem Gedächtnis. Wenn du nicht rauchst, kannst du abends bei einer Tasse Tee oder Kaffee
    an liebe Momente denken. Du erinnerst dich an Kindheitserlebnisse im Detail, an den Abschluss und die Spaziergänge mit deinem Hund.
    Du wirst mehr Zeit für dich haben und weniger für die Routine. Das Denken wird positiver. Rauchen belastet.
  `,
  `
    Ein Nichtraucher ist energiegeladener, frischer. Er ist aktiver im Leben, hat ein intensiveres Liebesleben,
    vielfältigere und aktivere Pläne. Ein Nichtraucher erledigt mehrere Dinge gleichzeitig mit Leichtigkeit.
  `,
  `
    Fang an, dir zu sagen, dass Rauchen eine Gewohnheit ist. Der Unterschied zwischen einer Gewohnheit und einer Sucht ist ganz einfach.
    Du bist es gewohnt, es so zu machen. Aber wenn du es plötzlich nicht tust, ändert sich nichts. Überhaupt nichts.
  `,
  `
    Wenn du unter Kopfschmerzen leidest, besonders bei Wetteränderungen, kann das vom Rauchen kommen.
    Ja, Zigaretten verengen die Blutgefäße, dazu kommt der über die Jahre angesammelte Cholesterin, plus der Luftdruck
    — das ist fast 100% Kopfschmerzen. Und wozu brauchst du das?
  `,
  `
    Deine Zigaretten sind alle und du hast nicht geraucht. Nach einer Weile wirst du nervös
    und gereizt — seltsam, oder? Für einen Menschen, der die volle Kontrolle über sein Leben hat, von etwas abhängig zu sein,
    das in jedem Kiosk wie Kaugummi verkauft wird. Seltsam und ärgerlich.
  `,
  `
    Viele sagen: Ich rauche, weil ich "chronischen Stress" habe.
    Stress ist ein völlig eigenes Thema, meine Damen und Herren. Wenn du Stress hast, egal wovon. Von der Arbeit oder zu Hause.
    Du hast nichts Neues erfunden. Menschen kämpfen damit seit der gesamten Geschichte der Menschheit.
    Und deshalb gibt es völlig angemessene Ansätze, um das zu beheben, was dir Stress bereitet.
    Falls das für dich relevant ist, recherchiere das Thema im Internet.
    Du wirst überrascht sein, wie viel besser du dein Leben ohne großen Aufwand machen kannst.
  `,
  `
    Übrigens. Eine absolut funktionierende Methode. Sie heißt "Der letzte Flug".
    Die Person, die mit dem Rauchen aufhört, bittet jemanden, sie zu fotografieren, wenn sie die leere Packung wegwirft.
    Mit der Zigarette in der Hand und der Packung, die in den Mülleimer fliegt.
    Es muss nicht einmal der Moment der "allerletzten Packung" sein. Du kannst dieses Foto sogar jetzt machen.
    Wenn die Person endgültig aufhört zu rauchen, wird dieses Foto ausgedruckt und gerahmt ins Regal gestellt.
    Das ist, wie stark du über deine Gewohnheiten bist. Dein Sieg.
  `,
  `
    Weltstatistik: Alle sechs Sekunden stirbt auf der Welt ein Mensch an Krankheiten, die durch Tabakkonsum verursacht werden,
    pro Jahr sind es 3,5 Millionen Menschen. Brauchst du das?
  `,
  `
    Warum gilt die Lebensqualität von Rauchern als geringer?
    Weil Raucher Nichtraucher von sich abstoßen, Raucher trinken oft auch Alkohol.
    Unter Nichtrauchern gibt es viele Erfolgreiche, und unter Rauchern viele Versager, die auch noch trinken.
    Und logischerweise hängt die Lebensqualität teilweise von den Freunden ab.
  `,
  `
    Es gibt eine obligatorische Regel. Sie heißt "Begleiter des Rauchens".
    Wenn du rauchst, wenn du trinkst — hör auf zu trinken. Ganz.
    Wenn du die Gewohnheit hast, beim Kaffee zu rauchen — hör auf, Kaffee zu trinken und fang an, Tee zu trinken.
    Verzichte auf die Assoziationen mit dem Rauchen, auf die du leicht verzichten kannst.
    Du wirst deinen Lieblingskaffee wie früher trinken, wenn du mit dem Rauchen aufgehört hast.
    Und du wirst dich an alles mit einem Lächeln erinnern.
  `,
  `
    Trauriger Humor. Wenn du nicht an die Existenz hartnäckiger Menschen glaubst,
    hast du noch nie einen Raucher gesehen, der versucht, ein kaputtes Feuerzeug anzuzünden.
  `,
  `
    Interessante Tatsache. Wasser kann beim Aufhören mit dem Rauchen helfen. Warum?
    Wir bestehen aus Wasser und unser Körper braucht 2 Liter Wasser pro Tag. Aber nicht alle trinken so viel wie nötig.
    Dazu stören wir noch unsere Ernährungsgewohnheiten und essen nicht.
    Und so kommt es, dass wir geraucht haben und die Toxine "lange" in unserem Körper stecken bleiben,
    weil wir nicht einmal den Mund danach gespült haben. Im Mund bleibt dieser Zigarettengeschmack ständig, Zeit vergeht
    und die Geschmacksrezeptoren sagen uns "willst du nicht rauchen gehen". Also: Wenn wir zwischendurch
    ein paar Schlucke Wasser trinken, verschwinden die Toxine aus dem Mund und wir haben viel weniger Lust zu rauchen.
  `,
  `
    Zigaretten sind kein "Entspannen". Du "ruhst dich nicht bei einer Zigarette aus". Du kannst dich auch ohne Zigarette ausruhen.
    Du kannst dich auf jede Art ausruhen. Jetzt ruhst du dich einfach aus und bläst aus irgendeinem Grund noch Rauch.
  `,
  `
    Manchmal ist es wirklich schwer, sich zu beherrschen und nicht noch einmal rauchen zu gehen.
    Man will es wirklich sehr. Was tun? Das Rezept ist einfach. Geh zum Fenster, öffne es und atme tief ein.
    Genieße es. Wenn einmal nicht reicht, mach es noch ein paar Mal. Rauchen ist eine dumme Gewohnheit —
    du kannst rauchen, wann du willst. Wenn du willst, kannst du überhaupt nicht rauchen.
  `,
  `
    Stell dir vor, es gibt echte Statistiken von Menschen über 60, die mit dem Rauchen aufgehört haben.
    Laut diesen Statistiken war die Lebenserwartung von Menschen, die aufgehört haben zu rauchen,
    IMMER höher als die derjenigen, die weiter rauchten. Hier sieht man deutlich, wie schädlich Rauchen ist.
  `,
  `
    Du rauchst nicht, rauchst nicht, dann wirst du plötzlich nervös, gereizt, deine Hände zittern,
    du machst dir einen Kaffee, gehst nach draußen, zündest das Feuerzeug an und ziehst an der Zigarette. Genuss, oder?!
    Genuss? Du wurdest einfach aus heiterem Himmel nervös, gingst nach draußen und fingst an zu rauchen. Klingt nicht so romantisch.
    Und von außen sehen Nichtraucher das so.
  `,
  `
    Möchtest du nicht versuchen, eine Fremdsprache zu lernen? Multitasking ist die Stärke eines Nichtrauchers.
    Wenn du also die Möglichkeit und Freizeit hast, kannst du jetzt sofort anfangen.
  `,
  `
    Husten ohne Grund. Bei Rauchern ist das normal. Nervt, oder?
  `,
  `
    Wenn Zigaretten nur aus Tabak bestünden, würden alle leicht aufhören zu rauchen.
    Das verstehen die Besitzer der Tabakkonzerne. Deshalb gewöhnen sie Raucher an verschiedene Zusatzstoffe.
    Da ist alles Mögliche drin. Sowohl im Tabak als auch in den Filtern.
    Übrigens erlöschen Zigaretten deshalb zum Beispiel nicht von selbst.
  `,
  `
    Ist dir das schon passiert? Du sitzt abends, ruhst dich aus. Dann denkst du: Soll ich rauchen?
    Du greifst in die Jackentasche oder die Tasche und stellst fest, dass die Zigaretten alle sind.
    Was tun: Du stehst auf, ziehst dich an und gehst zum Kiosk für Zigaretten.
    Stell dir vor, wie seltsam das ist. Statt deiner verdienten Ruhe ziehst du dich an
    und gehst einen Weg, den du auswendig kennst.
  `,
  `
    Hast du schon mal gehört, dass es gefälschte Zigaretten gibt? Sicher.
    Aber dass Menschen durch gefälschte Zigaretten vergiftet wurden, ist nicht so bekannt. Und es passiert.
    Wie das abläuft: Eine Person raucht minderwertige Zigaretten, wird vergiftet, ihr wird schwindelig, ihr geht es schlecht.
    Was macht sie? Sie denkt, sie ist krank, und meldet sich krank.
    Und man kann sich sehr stark vergiften. Und dafür auch noch Geld bezahlen.
  `,
  `
    Psychologen glauben, dass Kaugummi das Rauchen stark motiviert.
    Rauchende Menschen, die Kaugummi kauen, gewöhnen sich daran, Nikotin mit dem Speichel zu schlucken, und dann, sobald der Kaugummi
    im Mund ist, entsteht sofort die Assoziation mit der Zigarette. Wenn du also Kaugummi kaust und planst,
    mit dem Rauchen aufzuhören, ist es besser, vorübergehend aufzuhören zu kauen.
  `,
  `
    - Fertig, ich höre auf zu rauchen!
    - Ausgezeichnet, das macht 124 $ pro Monat Steuer. Das ist zur Kompensation des Schadens, den du jetzt
    den Tabakfirmen zufügst.
    Und 4210 $ Entschädigung für die Klinik, die dich jetzt nicht mehr behandeln muss.
  `,
  `
    Hast du bemerkt, dass Prominente fast nie rauchen? Und das nicht, weil sie es sich nicht leisten können.
    Es ist einfach dumm, Sklave einer nutzlosen Gewohnheit zu sein.
  `,
  `
    Um weniger zu rauchen, schränke dich ein. Entferne deine zusätzlichen Feuerzeuge — behalte nur eines.
    Hör auf, Zigaretten kartonweise zu kaufen, und trage nur eine Packung bei dir.
    Mach das Rauchen für dich weniger zugänglich.
  `,
  `
    Mit dem Rauchen aufzuhören bedeutet keine Einschränkungen — du kannst dich frei in der Gesellschaft bewegen,
    ohne die Notwendigkeit, zur Seite zu gehen oder nach draußen zu gehen, um zu rauchen.
  `,
  `
    Denk immer daran: Alle Methoden, die versprechen, dir beim Aufhören zu helfen, sind Betrug. Tatsächlich hast du jetzt
    die einzige funktionierende Methode gewählt — Rauchbeschränkung mit Erinnerungen. Keine Tabletten, Pflaster
    oder Trainings werden funktionieren — das ist eine weitere Methode, Geld aus Menschen herauszuziehen.
  `,
  `
    Ehrlich gesagt, wenn man über die Schäden des Rauchens liest, bekommt man Lust zu rauchen. Deshalb sagen wir es einfach als Tatsache:
    Rauchen ist eine unglaublich schädliche und verderbliche Tätigkeit, die dir nichts Gutes bringt.
  `,
  `
    Es gibt keine sicheren Zigaretten, keine sicheren Vapes, Wasserpfeife rauchen ist nicht gesund.
    Pass auf, dass das "Sicherste" nicht das "Tödlichste" ist.
    Warum also dein Leben riskieren?
  `,
  `
    Moderne Zigarettenfilter halten natürlich Teer zurück und machen das Rauchen sicherer.
    Aber "sicherer" bedeutet überhaupt nicht, dass du eines Morgens aufwachst
    und keine schreckliche Krankheit im Zusammenhang mit dem Rauchen entdeckst. Also hör auf zu rauchen.
  `,
  `
    Humor. Der eigentliche Schaden des Rauchens ist, wenn du rauchen gehst und die Mitbewohner deine Nudeln aufgegessen haben.
  `,
  `
    Wenn man anfängt, Rauchen als nutzlose Tätigkeit zu betrachten, ist es viel einfacher, diese Gewohnheit zu kontrollieren.
    Je mehr eine Person über die Gewohnheit als Gewohnheit nachdenkt, desto schneller hört sie auf zu rauchen.
  `,
  `
    Schnupftabak ist eine häufige Ursache für Mundschleimhautkrebs — ja, sogar diese Art von Krebs gibt es.
    Oft kauen und schnupfen Menschen Tabak "um wach zu werden". Das ist auch gefährlich.
  `,
  `
    Rein statistisch gesehen würden 90% der Raucher aufhören, wenn sie könnten. Tatsächlich mussten sie sich damit befassen,
    wie du es getan hast. Frag deine Freunde, ob sie mit dem Rauchen aufhören wollen. Auch wenn sie ablehnen,
    wenn du ganz aufgehört hast zu rauchen, wirst du ein Vorbild für sie sein.
  `,
  `
    Jedes Jahr hört eine riesige Anzahl von Menschen auf zu rauchen. Aber etwa die Hälfte von ihnen hört erst auf,
    wenn sie bereits echte Gesundheitsprobleme haben. Dabei hätte es gar nicht so weit kommen müssen.
  `,
  `
    Mit Hilfe dieses Bots hören Menschen durchschnittlich in drei Monaten auf zu rauchen. Wenn du eine Zeit von mehr als zwei Stunden
    zwischen Rauchpausen erreicht hast, kannst du anfangen, darüber nachzudenken. Du solltest einen Zeitraum finden,
    in dem du drei oder mehr freie Tage hast. Du musst die ersten fünf Tage überwinden — danach wird es leichter.
  `,
  `
    In Filmen gibt es ständig versteckte Werbung für Zigaretten. Wenn der Hauptdarsteller "genüsslich" zieht — mmmm,
    wie sehr man rauchen möchte. Zigarettenwerbung. Denk daran.
  `,
  `
    Humor. - Was für eine schöne gelbe Katze Sie haben! - Danke, aber eigentlich ist sie weiß — wir rauchen nur in der Wohnung.
  `,
  `
    Was bedeutet "Ich kann nicht mit dem Rauchen aufhören"?! Klingt seltsam, oder?
  `,
  `
    Oft hört man so etwas: Ich rauche, weil es mir gefällt.
    Mir gefällt der "Geruch" von Zigaretten und das Einatmen von Tabakrauch.
    Wir erinnern dich daran: Du hörst auf zu rauchen, weil es schädlich, sinnlos ist und andere nervt, nicht dich.
    Ja, Tabakrauch ist oft ziemlich angenehm. Aber du bist sein Sklave geworden.
    Und wenn du diese Gewohnheit nicht mehr kontrollieren kannst, ist es Zeit, damit aufzuhören.
  `,
  `
    Mitten in einem schweren Tag setzt du dich, zündest eine Zigarette an, und die Zigarette versetzt dich in die Welt der "ruhigen Gedanken" über das Leben.
    Du ruhst dich aus. Scheint alles okay? Jetzt sage ich dir, dass du dafür überhaupt keine Zigarette brauchst.
    Das ist einfach ein Teil deiner Gewohnheit, die sich in dich eingefressen hat und von der es jetzt sehr schwer sein wird, sich zu befreien.
    Kämpfe! Das ist ein echter Kampf! Du bist stärker.
  `,
  `
    Sicher, als du anfingst zu rauchen, sagtest du: "Will ich — rauch ich, will ich nicht — rauch ich nicht".
    Nichts hat sich geändert.
  `,
  `
    Einer der guten Tricks beim Aufhören mit dem Rauchen ist, wenn du aufhörst zu zählen, wie viele Zigaretten
    noch in der Packung sind. Das ist schwer, aber du kämpfst gegen eine Gewohnheit. Und jedes Mal, wenn sie alle sind,
    gehst du in den Laden oder Kiosk und denkst daran, wie sehr die Gewohnheit dich beherrscht.
  `,
  `
    Es gibt eine sehr populäre Phrase: "Manche Menschen rauchen ihr ganzes Leben und nichts passiert". Das stimmt schon.
    Aber erstens leiden sie trotzdem darunter — das Gehirn funktioniert schlechter, die Motorik schlechter usw.
    Und zweitens, wo ist die Garantie, dass diese Regel für dich gilt? Öffne einfach mal die Liste
    der Krankheiten, deren Risiko durch Rauchen steigt. Da ist einiges ziemlich Erschreckendes.
  `,
  `
    Kippen auf dem Rasen, Kippen an Bushaltestellen, Kippen auf Balkonen, Kippen im Auto des Freundes und in der Garage.
    Nervt, oder?
  `,
  `
    Zigaretten sind ein so profitables Geschäft, dass viele Länder der Dritten Welt sie schmuggeln.
    Du kannst dir die Mengen nicht vorstellen — es sind Dutzende von Milliarden Zigaretten.
    Das Geschäft mit dem Tod war schon immer das profitabelste.
  `,
  `
    Der Satz "Ab diesem Moment kein einziger Zug mehr" ist sehr stark. Sag ihn, wenn du die endgültige Entscheidung triffst.
    Das ist wie ein Vertrag mit dir selbst.
  `,
  `
    Du hast alle Motivationsnachrichten bis zum Ende gelesen. Jetzt werden sie sich wiederholen. Wir möchten dich jedoch bitten:
    Hör nicht auf. Es hat keinen Sinn, dass du rauchst. Indem du Zigaretten kaufst, füllst du nur die Taschen anderer.
  `,
].map(v => `> 🏋️ ${B}Motivation${B}:\\${NL} ${v}`);

const challenges = [
  `
    Wenn du rauchst, sobald du aufwachst, versuche es morgen nicht zu tun.
    Mach dir zuerst einen Tee oder Kaffee. Oder frühstücke. Kurz gesagt — tu es nicht sofort.
    Es ist eine Gewohnheit und sie sollte nicht deinen Tag bestimmen.
  `,
  `
    Wenn du rauchst, sobald du aufwachst, versuche es morgen nicht zu tun.
    Mach dir zuerst einen Tee oder Kaffee. Oder frühstücke. Kurz gesagt — tu es nicht sofort.
    Es ist eine Gewohnheit und sie sollte nicht deinen Tag bestimmen.
  `,
  `
    Wenn du an Haltestellen rauchst, während du auf den Bus wartest — rauch nicht vor dem Bus.
    Wenn du rauchst, bevor du ins Auto steigst — rauch nicht, bevor du ins Auto steigst. Du bist stärker als deine Gewohnheit!
  `,
  `
    Wenn du die nächste Packung Zigaretten kaufst, zünde nicht sofort eine an.
    Versuche, es so lange wie möglich aufzuschieben. Du wirst überrascht sein, wie einfach das ist.
    Es ist einfach eine dumme Gewohnheit, die keine Macht mehr über dich hat.
  `,
  `
    Wenn du bei der Arbeit oder in der Schule rauchst — überspringe eine oder zwei Rauchpausen.
    Kollegen werden dich rufen — lehne ab. Sag, du bist mit der Arbeit beschäftigt und rauchst später. Niemand wird beleidigt sein.
    Und du trainierst, wie stark du gegenüber der Gewohnheit bist.
  `,
  `
    Wenn du vor dem Schlafen rauchst — rauch heute nicht.
    Das heißt, du musst es überhaupt nicht tun. Überlege, wann du schlafen gehen willst, und eine Stunde vorher hörst du auf zu rauchen.
    Du kannst das planen — es ist sehr einfach — glaub mir.
  `,
  `
    Wenn du eine Freundin oder einen Freund hast, der mit dem Rauchen aufgehört hat — frag ihn, wie er das gemacht hat.
    Falls nicht — frag einen Nichtraucher, warum er nicht raucht.
  `,
].map(v => `> 🎯 ${B}Tagesherausforderung${B}:\\\\${NL} ${v}`);

const hints = [
  `
    Die Tagesherausforderung ist eine Bedingung, mit der du wetteifern kannst.
    Jedes Mal, wenn du die Tagesherausforderung erfüllst, kommst du deinem Ziel einen Schritt näher.
    Versuche daher, sie alle zu erfüllen.
  `,
  `
    Du kannst deine Zeitzone jederzeit ändern, indem du /time in den Chat schreibst.
  `,
  `
    Der Bot speichert keine Informationen über Nutzer. Also frag gar nicht erst.
  `,
  `
    Du kannst deinen Fortschritt bewerten, indem du /stats schreibst.
  `,
  `
    Der Bot ist vollständig nicht-kommerziell. Hier ist keinerlei Werbung oder Gewinnsuche vorgesehen.
  `,
  `
    Du kannst die Sprache jederzeit ändern, indem du /lang schreibst.
  `,
  `
    Überlege, ob du den Bot jemandem aus deinem Freundeskreis empfehlen kannst. Gemeinsam aufzuhören macht viel mehr Spaß.
  `,
  `
    Kann man den Fortschritt zurücksetzen? Ja. In 99% der Fälle bringt das nichts, aber wenn du das Risiko eingehen willst — schreib /start.
  `,
  `
    Wenn du eine Fremdsprache beherrschst, außer denen, in die der Bot bereits übersetzt wurde —
    kannst du uns bei der Übersetzung helfen.
    Vielleicht möchtest du einfach den Bot-Autor unterstützen.
    Falls ja — schreib /how.
  `,
].map(v => `> 💡 ${B}Nützliche Information${B}:\\\\${NL} ${v}`);

export const motivizerDe: string[] = (() => {
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
