import { B, NL } from "../dialogs/constants";

const motivations: string[] = [
  `
    Los mensajes de motivación aparecen en cada pausa larga
    y están pensados para recordarnos por qué hacemos esto.
  `,
  `
    Probablemente todo fumador tiene una prenda favorita arruinada por un cigarrillo.
    Alguien quemó su chaqueta, alguien su vestido favorito, a alguien
    el techo blanco del coche se le puso amarillo. ¡Y todo por un hábito estúpido!
  `,
  `
    ¿Sabes desde cuándo la gente fuma "por dinero"? ¡Desde principios del siglo XVI!
    Sí, ya entonces empezaron a vender tabaco a la gente. Es un negocio increíblemente
    rentable que se hace a costa de la salud de las personas.
  `,
  `
    El público objetivo principal de la industria tabacalera son las personas de 15 a 25 años.
    Porque si una persona empieza a fumar a esa edad, lo más probable es que no lo deje.
    El tabaco se publicita en todas las fiestas juveniles, se populariza
    contando diversas historias falsas. Por ejemplo, que si fumas después del alcohol
    será aún mejor. Será mejor solo porque el tabaco golpea al organismo
    después del alcohol. Por eso, aunque no estés en ese rango de edad, recuerda:
    todo lo bueno que cuentan sobre el tabaco es publicidad.
  `,
  `
    A la gente le molestan los fumadores. ¿Te has preguntado cómo se ve un fumador a los ojos de un no fumador?
    Se ve algo así como "un adulto inteligente que por alguna razón cada hora se levanta de su puesto de trabajo,
    sale a la calle y se pone un lápiz en la boca durante 5 minutos echando humo". Suena raro, ¿verdad?
    Pero así es como nos ven.
  `,
  `
    Una gota de nicotina mata a un caballo — es un hecho. Cuando fumamos, inhalamos nicotina.
    Para nosotros no es tan mortal. Sin embargo, recuerda que las tres cosas que afecta son:
    el corazón, el sistema circulatorio y la protección contra tumores. Hoy, cuando la medicina se encarece
    cada día, no tiene sentido exponerse al peligro de enfermedades tan terribles.
  `,
  `
    Puede ser útil practicar el rechazo al tabaco.
    Sal con tus compañeros de trabajo o amigos a fumar, como siempre.
    Y luego, cuando todos enciendan, tú no lo hagas.
    Si te preguntan por qué no fumas, di "no me apetece".
    Esto divertirá a tus compañeros, nada más.
    Pero para ti será otra pequeña victoria sobre el hábito.
  `,
  `
    Los fumadores rara vez pueden salir con no fumadores. El olor a cigarrillos repele.
    Además, hay muchos menos fumadores que no fumadores. Simplemente imagina
    cuántas personas te han dejado fuera solo por este estúpido hábito.
  `,
  `
    Más de 4000 sustancias químicas se liberan cuando enciendes un cigarrillo.
    No es sorprendente que fumar sea una de las principales causas de muerte prematura.
    Simplemente piensa en el significado de las palabras "muerte prematura".
    Tienes tantos planes para la vida, amigos, familia, metas. Haces todo para que la vida sea interesante.
    Luego, de repente, "pum" — y estás muerto. Aunque podrías haber vivido mucho y feliz. Y encima pagaste por ello.
  `,
  `
    Chiste. La profesora dijo que quien fuma no crecerá más,
    y para demostrarlo, le disparó al alumno de séptimo Sidorov.
  `,
  `
    Que la gente que deja de fumar engorda es un mito. Incluso si tienes tendencia a engordar, es un mito.
    En el 99% de los casos la gente engorda porque come tumbada o empieza a consumir dulces y harinas
    en cantidades anormales. Vigila lo que comes. Pero que los dientes se estropean por fumar, eso sí es un hecho.
  `,
  `
    Todos los sustitutos de la nicotina son mentira. Todos los parches, pastillas, vapeadores son solo otra variedad de cigarrillos.
    Oh, te sorprenderás de lo inventiva que es la industria tabacalera. Te venderán cigarrillos en botellas,
    cigarrillos en forma de ambientador para coches, perfumes con olor a tabaco. Dirán que "así dejas de fumar".
    Esta industria genera dinero a raudales. Harán lo que sea con tal de que no te bajes.
  `,
  `
    En todo el mundo hay muchos establecimientos donde no se fuma. Y los fumadores salen "a la calle" para fumar.
    O incluso a "salas para fumadores" especiales. ¿Nunca te has preguntado que desde fuera parece
    "un acuario para adictos que huelen mal"? Es decir, ni siquiera es discriminación.
    Simplemente la gente sin este hábito no siempre está dispuesta a aguantarlo.
  `,
  `
    Tu familia, amigos, seres queridos que no fuman te quieren tal como eres, independientemente de tus hábitos.
    E incluso si te huele mal el aliento después de fumar, lo entienden.
    Entonces, ¿por qué envenenarlos? Simplemente no tiene sentido. Por eso estás intentando dejar de fumar.
  `,
  `
    Humor. Pedirle un cigarrillo a un fumador en la calle es normal.
    Pero si alguien está comiendo chocolate y le pides un trozo, te miran como a un loco.
  `,
  `
    Los fumadores tienen los receptores dañados por el hábito. Los fumadores no pueden sentir bien el sabor de la comida.
    Los fumadores no pueden sentir bien el aroma de los perfumes. A veces incluso el olor a gasolina en el asfalto puede despertar
    un flujo increíble de recuerdos. Pero no lo tienes mientras sigues fumando. Déjalo. Hábito inútil.
  `,
  `
    ¿Cuánto cuesta tu paquete de cigarrillos? ¡Es tu dinero! Tuyo y solo tuyo.
    Podrías gastarlo en lo que quisieras. Pero se lo das a la industria tabacalera.
    Entiende el asunto: no se lo das como cuando compras una sandía en verano.
    Se lo das porque tienes un hábito al que ellos te engancharon.
    Pero eso es absurdo.
  `,
  `
    Cada persona que deja de fumar tiene su razón principal. Recuérdala siempre.
    Eso te ayudará. Así es mucho más fácil dejar de fumar. La razón principal por la que dejas de fumar.
  `,
  `
    Puede sonar primitivo como razón para dejar de fumar,
    pero el cerebro de una persona que no fuma funciona 3 veces mejor que cuando fuma.
    ¡Puedes ser 3 veces más inteligente y rápido!
    Solo necesitas dejar de pagar por algo que no necesitas.
  `,
  `
    Si vives con alguien o trabajas con fumadores, eso no significa que sea un problema.
    Puedes seguir saliendo con ellos a fumar como antes. Pero si no es hora de fumar, no fumes.
    Ni siquiera des una calada. ¿Qué sentido tiene? Simplemente no fumes y ya. Tú tienes tu propio horario.
  `,
  `
    Por cierto, hace muy poco, la industria tabacalera inventó cómo atraer a los jóvenes.
    Fumar no estaba de moda entre los adolescentes, así que inventaron los vapeadores:
    un invento increíble con el que puedes echar un humito dulzón.
    Resultó que esta historia terminó aún peor que con los cigarrillos: diabetes.
    ¿Crees que alguien compensó a las personas que enfermaron de diabetes?
    Toda la industria tabacalera está hecha para ganar dinero con la salud ajena.
  `,
  `
    Los no fumadores tienen mejor piel. ¿Por qué? Porque no tienen un envenenamiento constante con sustancias químicas.
    Y para esto no hace falta ser una chica joven. Un color de piel saludable en un hombre maduro es mucho más atractivo
    que la piel gris de un trabajador envejecido y eternamente cansado.
  `,
  `
    Si dejas de fumar, tu ropa ya no olerá a tabaco, tu pelo ya no olerá
    a tabaco, tus manos ya no olerán a tabaco.
  `,
  `
    Observa alguna vez a un grupo de personas fumando. De pie junto a la basura o en la sala de fumadores.
    Personas completamente normales echando humo, gastando su dinero y salud para oler a tabaco.
    Pronto dejarás de fumar y no estarás entre ellos. Muy pronto.
  `,
  `
    Esto sonará extraño. Pero ahora es mucho más fácil dejar de fumar que después. Es un hecho psicológico establecido por científicos.
    Una persona que ha tomado la decisión de dejar de fumar puede dejarlo. Si se sale de este
    camino, después le resulta más difícil. Psicológicamente. La persona empieza a pensar "no es tanto
    dinero" y "llevo mucho fumando y no pasa nada" y demás. Tú ya has decidido que dejarás de fumar.
    Ahora es el mejor momento para ello. ¡No te detengas!
  `,
  `
    Servirás de ejemplo para otros. Si tú lo dejas, tu marido o mujer también lo dejará, tus amigos lo dejarán.
    Pasarás el mismo tiempo juntos que antes, charlaréis como antes.
    Todo será como antes. Solo que no habrá un cigarrillo en la mano. ¿Y para qué lo necesitas?
  `,
  `
    Humor. Vasili Petrovich de Kaluga, al ir de caza, cogió por error los cigarrillos
    de su hijo, y para el mediodía, en un claro del bosque, había cazado tres jirafas.
  `,
  `
    Fumar estropea la memoria. Si no fumas, podrás recordar momentos queridos por la noche
    con una taza de té o café. Recordarás eventos de la infancia en detalle, el día de graduación y los paseos con tu perro.
    Tendrás más tiempo para ti y menos para la rutina. El pensamiento se vuelve más positivo. Fumar agobia.
  `,
  `
    Una persona que no fuma es más enérgica, más fresca. Es más activa en la vida, tiene relaciones más intensas,
    planes más variados y activos. Una persona que no fuma hace varias cosas a la vez con facilidad.
  `,
  `
    Empieza a recordarte que fumar es un hábito. La diferencia entre un hábito y una adicción es muy simple.
    Estás acostumbrado a hacerlo así. Pero si de repente no lo haces, pues nada cambia. En absoluto.
  `,
  `
    Si sufres de dolores de cabeza, especialmente con los cambios de clima, puede ser por fumar.
    Sí, los cigarrillos estrechan los vasos sanguíneos, súmale el colesterol acumulado con los años, más la presión atmosférica,
    y es casi 100% dolor de cabeza. ¿Y para qué necesitas eso?
  `,
  `
    Se te acabaron los cigarrillos y no fumaste. Pasa un rato y te pones nervioso
    e irritable. Extraño, ¿verdad? Para una persona que tiene control total sobre su vida, depender
    de algo que venden en cada quiosco como chicle. Extraño y frustrante.
  `,
  `
    Muchos dicen: fumo porque tengo "estrés crónico".
    El estrés es un tema completamente aparte, estimados. Si tienes estrés, sea por lo que sea. Por el trabajo o por casa.
    No has inventado nada nuevo. La gente lucha con esto desde toda la historia de la humanidad.
    Y por eso existen enfoques completamente adecuados para arreglar lo que te causa estrés.
    Si esto es relevante para ti, investiga el tema en internet.
    Te sorprenderás de cuánto puedes mejorar tu vida sin mucho esfuerzo.
  `,
  `
    Por cierto. Un método que funciona perfectamente. Se llama "El Último Vuelo".
    La persona que deja de fumar le pide a alguien que le haga una foto cuando tira el paquete vacío.
    Con el cigarrillo en la mano y el paquete volando a la basura.
    Ni siquiera tiene que ser el momento del "último paquete". Puedes hacerte esa foto ahora mismo.
    Cuando la persona finalmente deja de fumar, esa foto se imprime y se pone en un marco en la estantería.
    Es lo fuerte que eres sobre tus hábitos. Tu victoria.
  `,
  `
    Estadística mundial: cada seis segundos muere una persona en el mundo por enfermedades causadas por el consumo de tabaco,
    al año son 3,5 millones de personas. ¿Lo necesitas?
  `,
  `
    Por qué se considera que los fumadores tienen menor calidad de vida.
    Porque los fumadores alejan a los no fumadores, los fumadores a menudo beben.
    Entre los no fumadores hay bastantes personas exitosas, y entre los fumadores hay muchos fracasados que además beben.
    Y, lógicamente, de los amigos depende en parte la calidad de vida.
  `,
  `
    Hay una regla obligatoria. Se llama "Compañeros del Tabaco".
    Si fumas cuando bebes alcohol, deja de beber. Completamente.
    Si tienes el hábito de fumar cuando tomas café, deja el café y empieza a tomar té.
    Renuncia a las asociaciones con fumar de las que es fácil deshacerse.
    Volverás a tomar tu café favorito como antes cuando dejes de fumar.
    Y lo recordarás todo con una sonrisa.
  `,
  `
    Humor triste. Si no crees en la existencia de personas persistentes,
    es que nunca has visto a un fumador intentando encender un mechero roto.
  `,
  `
    Dato interesante. El agua puede ayudar a dejar de fumar. ¿Por qué?
    Estamos hechos de agua y nuestro organismo necesita 2 litros de agua al día. Pero no todos beben lo necesario.
    Además, alteramos el régimen alimenticio y no comemos.
    Y resulta que fumamos, y las toxinas se quedan en nuestro organismo "mucho tiempo",
    porque ni siquiera nos enjuagamos la boca después. En la boca queda ese sabor a cigarrillos constantemente, pasa el tiempo
    y los receptores gustativos nos dicen "oye, ¿no quieres ir a fumar?". Pues bien. Si simplemente en los intervalos
    damos un par de tragos de agua, las toxinas se irán de la boca y tendremos muchas menos ganas de fumar.
  `,
  `
    Los cigarrillos no son "relax". No "descansas con un cigarrillo". Puedes descansar sin cigarrillo.
    Puedes descansar como quieras. Simplemente ahora descansas y además echas humo sin razón.
  `,
  `
    A veces es realmente difícil contenerse y no ir a fumar una vez más.
    De verdad, muchas ganas. ¿Qué hacer? La receta es simple. Ve a la ventana, ábrela y respira profundamente.
    Disfruta. Si una vez no es suficiente, hazlo varias veces. Fumar es un hábito tonto:
    puedes fumar cuando quieras. Si quieres, puedes no fumar en absoluto.
  `,
  `
    Imagínate, hay estadísticas reales de personas mayores de 60 años que dejaron de fumar.
    Pues bien, según ellas, incluso en este grupo de edad, la esperanza de vida de quienes dejaron de fumar
    SIEMPRE fue mayor que la de quienes siguieron fumando. Aquí se ve claramente lo dañino que es fumar.
  `,
  `
    No fumas, no fumas, luego algo te pone nervioso, te irritas, te tiemblan las manos,
    te haces un café, sales a la calle, enciendes el mechero y le das una calada al cigarrillo. ¿Placer, verdad?
    ¿Placer? Simplemente te pusiste nervioso de la nada, saliste a la calle y te pusiste a echar humo. No suena tan romántico.
    Y desde fuera, los no fumadores lo ven así.
  `,
  `
    ¿No quieres intentar aprender un idioma extranjero? La multitarea es el fuerte de una persona que no fuma.
    Por eso, si tienes la oportunidad y tiempo libre, puedes empezar ahora mismo.
  `,
  `
    Tos sin motivo. Para los fumadores es algo habitual. Molesto, ¿verdad?
  `,
  `
    Si los cigarrillos estuvieran hechos solo de tabaco, todos dejarían de fumar fácilmente.
    Los dueños de las corporaciones tabacaleras lo entienden. Por eso acostumbran a los fumadores a diversos aditivos.
    Hay de todo ahí. Tanto en el tabaco como en los filtros.
    Por cierto, por eso los cigarrillos no se apagan solos, por ejemplo.
  `,
  `
    ¿Te ha pasado esto? Estás sentado por la noche, descansando. Luego piensas: ¿y si fumo?
    Buscas en el bolsillo de la chaqueta o en el bolso y descubres que se te acabaron los cigarrillos.
    Qué hacer: te levantas, te vistes y vas al quiosco a por cigarrillos.
    Imagina lo extraño que es. En vez de tu merecido descanso, te vistes
    y vas por un camino que ya conoces de memoria.
  `,
  `
    ¿Alguna vez has oído que existen cigarrillos falsificados? Seguro que sí.
    Pero que la gente se intoxica con cigarrillos falsos no es tan conocido. Y pasa.
    Cómo ocurre: una persona fuma cigarrillos de mala calidad, se intoxica, le da vueltas la cabeza, se siente mal.
    ¿Qué hace? Piensa que se enfermó, se da de baja.
    Y puedes intoxicarte muy gravemente. Y encima pagar por ello.
  `,
  `
    Los psicólogos creen que el chicle motiva mucho a fumar.
    Los fumadores que mascan chicle se acostumbran a tragar nicotina con la saliva y luego, en cuanto el chicle está
    en la boca, surge inmediatamente la asociación con el cigarrillo. Por eso, si mascas chicle y planeas
    dejar de fumar, mejor deja de mascar por ahora. Temporalmente.
  `,
  `
    - ¡Ya está, dejo de fumar!
    - Perfecto, son 124 $ al mes de impuesto. Es para compensar las pérdidas que ahora
    causarás a las tabacaleras.
    Y 4210 $ de compensación a la clínica que ya no tendrá que tratarte.
  `,
  `
    ¿Te has fijado que las celebridades casi nunca fuman? Y no es porque no puedan permitírselo.
    Simplemente es estúpido ser esclavo de un hábito inútil.
  `,
  `
    Para fumar menos, límitate. Quita tus mecheros extra, deja solo uno.
    Deja de comprar cigarrillos por cartones y lleva solo un paquete.
    Haz que fumar sea menos accesible para ti.
  `,
  `
    Dejar de fumar significa no tener limitaciones: puedes estar libremente en sociedad
    sin necesidad de apartarte o salir a la calle para fumar.
  `,
  `
    Recuerda siempre: todos los métodos que prometen hacerte dejar de fumar son un engaño. En realidad, ahora
    has elegido el único método que funciona: limitar el tabaco con recordatorios. Ninguna pastilla, parche
    ni curso funcionará, es otra forma más de sacarte el dinero.
  `,
  `
    Siendo honestos, cuando lees sobre los daños de fumar, dan ganas de encender uno. Así que digamos simplemente, como un hecho:
    fumar es una actividad increíblemente dañina y perjudicial que no te aporta nada bueno.
  `,
  `
    No existen cigarrillos seguros, no existen vapeadores seguros, fumar cachimba no es saludable.
    Cuidado con que "lo más seguro" no resulte ser "lo más mortífero".
    Entonces, ¿por qué arriesgar tu vida?
  `,
  `
    Los filtros modernos de cigarrillos, por supuesto, retienen alquitranes y hacen que fumar sea más seguro.
    Pero "más seguro" no significa en absoluto que, al levantarte una mañana,
    no descubras alguna enfermedad terrible relacionada con fumar. Así que deja de fumar.
  `,
  `
    Humor. El verdadero daño de fumar es cuando sales a fumar y tus compañeros de piso se comen tus ravioles.
  `,
  `
    Cuando empiezas a pensar en fumar como una actividad inútil, controlar este hábito es mucho más fácil.
    Cuanto más piensa una persona en el hábito como un hábito, más rápido deja de fumar.
  `,
  `
    El tabaco de mascar es una causa frecuente de cáncer de la mucosa bucal. Sí, incluso ese tipo de cáncer existe.
    A menudo la gente masca y huele tabaco "para despertarse". Eso también es peligroso.
  `,
  `
    Según las estadísticas puras, el 90% de los fumadores dejarían de fumar si pudieran. En realidad, necesitaban preocuparse,
    como te has preocupado tú. Pregúntales a tus amigos si quieren dejar de fumar. Aunque digan que no,
    cuando tú dejes de fumar del todo, les servirás de ejemplo.
  `,
  `
    Cada año un número enorme de personas deja de fumar. Pero alrededor de la mitad lo deja solo cuando
    ya tiene problemas reales de salud. Y eso podría haberse evitado.
  `,
  `
    Con la ayuda de este bot, la gente deja de fumar en un promedio de tres meses. Si has llegado a más de dos horas
    entre descansos para fumar, puedes empezar a pensar en ello. Deberías buscar un período
    en el que tengas tres o más días libres. Necesitas superar los primeros cinco días, después se vuelve más fácil.
  `,
  `
    En las películas hay publicidad encubierta de cigarrillos constantemente. Cuando el protagonista da una calada "sabrosa", mmmm,
    qué ganas de fumar. Publicidad de cigarrillos. Recuérdalo.
  `,
  `
    Humor. - ¡Qué gato amarillo tan bonito tiene! - Gracias, pero en realidad es blanco, es que fumamos en el piso.
  `,
  `
    ¿Qué significa "no puedo dejar de fumar"? Suena extraño, ¿verdad?
  `,
  `
    A menudo se oye esto: fumo porque me gusta.
    Me gusta el "olor" de los cigarrillos y aspirar el humo del tabaco.
    Te recordamos que dejas de fumar porque es dañino, sin sentido y molesta a los demás, no a ti.
    Sí, el humo del tabaco a menudo es bastante agradable. Pero te has convertido en su esclavo.
    Y si ya no tienes control sobre este hábito, es hora de acabar con él.
  `,
  `
    En medio de un día duro te sientas, enciendes un cigarrillo, y el cigarrillo te transporta al mundo de "reflexiones tranquilas" sobre la vida.
    Descansas. ¿Parece todo bien? Ahora te diré que para eso no necesitas un cigarrillo en absoluto.
    Es simplemente parte de tu hábito que se ha arraigado en ti y del que ahora será muy difícil deshacerse.
    ¡Lucha! ¡Es una verdadera batalla! Tú eres más fuerte.
  `,
  `
    Seguramente, cuando empezaste a fumar, decías "quiero fumo, quiero no fumo".
    Nada ha cambiado.
  `,
  `
    Uno de los buenos trucos para dejar de fumar es dejar de contar cuántos cigarrillos te quedan
    en el paquete. Es difícil, pero estás luchando contra un hábito. Y cada vez que se te acaben,
    irás a la tienda o al quiosco y pensarás en cuánto te domina el hábito.
  `,
  `
    Hay una frase muy popular: "algunas personas fuman toda la vida y no les pasa nada". Bueno, sí.
    Pero, primero, de todas formas sufren por fumar: el cerebro funciona peor, la motricidad peor, etc.
    Y segundo, ¿dónde está la garantía de que a ti te funcionará esa regla? Simplemente abre algún día la lista
    de enfermedades cuyo riesgo aumenta con el tabaco. Hay cosas bastante aterradoras.
  `,
  `
    Colillas en la hierba, colillas en las paradas de autobús, colillas en los balcones, colillas en el coche del amigo y en el garaje.
    Molesto, ¿verdad?
  `,
  `
    Los cigarrillos son un negocio tan rentable que muchos países del tercer mundo se dedican a su contrabando.
    Ni te imaginas los volúmenes: son decenas de miles de millones de cigarrillos.
    Simplemente el negocio de la muerte siempre ha sido el más rentable.
  `,
  `
    La frase "Desde este momento, ni una calada más" es muy poderosa. Díla cuando tomes la decisión definitiva.
    Es como un contrato contigo mismo.
  `,
  `
    Has llegado al final de todos los mensajes motivacionales. Ahora se repetirán. Sin embargo, queremos pedirte:
    no te detengas. No tiene ningún sentido que fumes. Comprando cigarrillos solo llenas los bolsillos de otros.
  `,
].map(v => `> 🏋️ ${B}Motivación${B}:\\${NL} ${v}`);

const challenges = [
  `
    Si fumas nada más despertarte, intenta no hacerlo mañana.
    Primero hazte un té o café. O desayuna. En resumen, no lo hagas inmediatamente.
    Es un hábito y no debería gobernar tu día.
  `,
  `
    Si fumas nada más despertarte, intenta no hacerlo mañana.
    Primero hazte un té o café. O desayuna. En resumen, no lo hagas inmediatamente.
    Es un hábito y no debería gobernar tu día.
  `,
  `
    Si fumas en las paradas cuando esperas el transporte, no fumes antes del transporte.
    Si fumas antes de subirte al coche, no fumes antes de subirte al coche. ¡Eres más fuerte que tu hábito!
  `,
  `
    Cuando compres el siguiente paquete de cigarrillos, no enciendas uno inmediatamente.
    Intenta posponerlo todo lo que puedas. Te sorprenderás de lo fácil que es.
    Es simplemente un hábito estúpido que ya no tiene poder sobre ti.
  `,
  `
    Si fumas en el trabajo o en clase, sáltate uno o dos descansos para fumar.
    Tus compañeros te llamarán, di que no. Di que estás ocupado con el trabajo y fumarás después. Nadie se ofenderá.
    Y tú entrenarás lo fuerte que eres frente al hábito.
  `,
  `
    Si fumas antes de dormir, no fumes hoy.
    Es decir, no es necesario que lo hagas. Calcula cuándo planeas acostarte y una hora antes deja de fumar.
    Puedes planificarlo, es muy fácil, créeme.
  `,
  `
    Si tienes una amiga o amigo que dejó de fumar, pregúntale cómo lo hizo.
    Si no tienes, pregúntale a una persona que no fuma por qué no fuma.
  `,
].map(v => `> 🎯 ${B}Reto del día${B}:\\${NL} ${v}`);

const hints = [
  `
    El reto del día es un desafío con el que puedes competir.
    Cada vez que completas el Reto del Día te acercas un paso más a tu meta.
    Por eso, intenta completarlos todos.
  `,
  `
    Puedes cambiar tu zona horaria en cualquier momento escribiendo /time en el chat
  `,
  `
    El bot no almacena ninguna información sobre los usuarios. Así que ni preguntes.
  `,
  `
    Puedes evaluar tu progreso escribiendo /stats
  `,
  `
    El bot es completamente no comercial. No se contempla ningún tipo de publicidad ni búsqueda de beneficio.
  `,
  `
    Puedes cambiar el idioma en cualquier momento escribiendo /lang
  `,
  `
    Piensa si puedes recomendar el bot a algún amigo. Dejar de fumar juntos es mucho más divertido.
  `,
  `
    ¿Se puede restablecer el progreso? Sí. En el 99% de los casos no servirá de nada, pero si quieres arriesgarte, escribe /start
  `,
  `
    Si dominas algún idioma extranjero, aparte de los que ya tiene el bot,
    puedes ayudarnos con la traducción.
    Quizás simplemente quieras apoyar al autor del bot.
    Si es así, escribe /how
  `,
].map(v => `> 💡 ${B}Información útil${B}:\\${NL} ${v}`);

export const motivizerEs: string[] = (() => {
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
