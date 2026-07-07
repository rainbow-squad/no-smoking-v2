import { Content } from "../../constants";
import { MultilineContent } from "../types";
import { NL, N2, ND, B, I } from "./constants";

const donate_link = process.env.DONATE_LINK;
const tg_group_link = process.env.TG_GROUP_LINK;

export const dialogsEs: MultilineContent = {
  [Content.MESSAGE]: "Mensaje recibido",
  [Content.ERROR]: "🍄 Algo salió mal. {{error}}",
  [Content.USER_UNKNOWN]: `
    🤖 ${B}La funcionalidad solo está disponible para usuarios autorizados${B}${ND}
    Por favor, inicia sesión pulsando el botón de abajo.
  `,
  [Content.START_NEW]: `
    ¡Hola! 🙂${N2}
    ¿Las corporaciones tabacaleras se benefician de tu salud?${NL}
    ¿Buscas una forma de dejar de fumar?${N2}
    ${B}¡Buena decisión!${B}${N2}
    Juntos podemos lograrlo 🤙${ND}
    Supported languages${NL}
    Click here ➤ /lang ${NL}
    🇷🇺 🇬🇧 🇪🇸 🇩🇪 🇮🇹 🇹🇷 🇨🇳
  `,
  [Content.START_EXISTING]: `
    ¡Hola! ✌️${N2}
    Vemos que ya has hecho algo de progreso en nuestra app.${NL}
    ¡Tu cuenta ha sido reactivada!${N2}
    Ahora tienes tres opciones:${N2}
    1. ${B}Restablecer tu cuenta por completo.${B}${NL}
    Esto te llevará de vuelta a la etapa 1.${NL}
    Tiempo entre descansos: RESTABLECIDO.${N2}
    2. ${B}Borrar tu progreso.${B}${NL}
    Comenzarás desde la Etapa 2, pero el tiempo inicial se restablecerá.${NL}
    Intervalo entre descansos para fumar: ${I}{{min_delta}}${I}.${N2}
    3. ${B}Dejarlo como está.${B}${NL}
    Continuarás justo donde lo dejaste.${NL}
    ${B}No recomendado${B}.${NL}
    Tiempo entre descansos: ${I}{{delta_time}}${I}.
  `,
  [Content.START_EXISTING_STAGE_1]: `
    ¡Hola! ✌️${N2}
    Tu cuenta ha sido reactivada,${NL}
    y todos los datos han sido actualizados.${N2}
    Necesitas completar la Etapa 1 de nuevo ⤵️
  `,
  [Content.START_VALID_USER]: `
    👁 Intento de activación${N2}
    Se ha detectado un intento repetido de activar la cuenta.${NL}
    Esto suele ocurrir por un fallo técnico.${ND}
    Por si acaso, aquí está tu estado actual:${N2}
    ⏱️ Tiempo entre descansos para fumar: ${B}{{delta_time}}${B}.${NL}
    ⏰ Próximo descanso: ${B}{{time_to_get_smoke}}${B}
  `,
  [Content.START_RESET_IGNORE]: `
    Has elegido ${B}"dejarlo como está"${B}${NL}
    Es tu decisión.${NL}
    Puedes restablecer todo el progreso en cualquier momento escribiendo /start.${NL}
    ⚔️ ${B}Etapa 2${B} Activada ⚔️${N2}
    El intervalo inicial entre descansos para fumar${NL}
    está establecido en ${B}{{delta_time}}${B}.${N2}
    El tiempo de tu próximo descanso se calculará la próxima vez que pulses el botón ${B}"Estoy fumando"${B}.
  `,
  [Content.START_RESET_TO_STAGE_1]: `
    Tu progreso ${B}ha sido completamente restablecido${B}${N2}
    Es la mejor decisión 👑${ND}
    Necesitas completar la Etapa 1 de nuevo ⤵️
  `,
  [Content.START_RESET_TO_STAGE_2]: `
    Has elegido ${B}"Restablecer a la Etapa 2"${B}.${NL}
    El progreso actual de la etapa ha sido reiniciado.${ND}
    ⚔️ ${B}Etapa 2${B} Activada ⚔️${N2}
    El intervalo inicial entre descansos para fumar${NL}
    está establecido en ${B}{{delta_time}}${B}.${N2}
    El tiempo de tu próximo descanso se calculará la próxima vez que pulses el botón ${B}"Estoy fumando"${B}.
  `,
  [Content.LANG]: "Please choose a language to use:",
  [Content.LANG_APPLIED]: "🇪🇸 Se ha establecido el idioma español.",
  [Content.STAGE_1]: `
    ${B}Etapa 1${B}${N2}
    Primero, necesitamos entender con qué frecuencia fumas.${NL} 
    Este tiempo será nuestro punto de partida para los cálculos futuros.${N2}
    Para ello, vamos a medir el intervalo entre tus descansos para fumar 20 veces. Es solo un paquete.${N2}
    Los intervalos demasiado largos o cortos no contarán,
    así que no te preocupes si te vas a dormir o simplemente olvidas pulsar el botón.${N2}
    ${B}¡Bien, empecemos!${B}${ND}
    La próxima vez que quieras fumar, pulsa el botón ${B}"Estoy fumando"${B}.
  `,
  [Content.FIRST_STEP]: `
    ¡Tu tiempo ha sido registrado!${N2}
    ¡Felicidades! ¡Has dado el primer paso! 👍${N2}
    Lo importante es seguir adelante y recordar pulsar el botón cada vez que fumes.${ND}
    ✅️ quedan {{stage_1_left}} veces
  `,
  [Content.STAGE_1_FORGOT_TO_CLICK]: `
    ¿Olvidaste pulsar? ¡No pasa nada! 🙃${N2}
    Cuando empiezas a usar el bot, esto ocurre con frecuencia.${N2}
    ${B}Lo principal${B} es crear el hábito y ${B}terminar lo que empezaste${B}.
  `,
  [Content.STAGE_1_IGNORE_MIN]: `
    Estás pulsando el botón con demasiada frecuencia.${N2}
    Si esto no fue culpa tuya — lo entendemos —
    ${I}acostúmbrate a cerrar el bot INMEDIATAMENTE${I} después de leer los mensajes.${N2}
    El intervalo mínimo para ser contado es {{min_stage_1}}.${ND}
    💢 quedan {{stage_1_left}} veces
  `,
  [Content.STAGE_1_IGNORE_MAX]: `
    El intervalo mínimo para ser registrado es {{max_stage_1}} minutos.${N2}
    No contaremos intervalos tan largos para asegurar cálculos precisos de los tiempos para fumar.${N2}
    No olvides pulsar el botón ${B}"Estoy fumando"${B} la próxima vez.${ND}
    💫 quedan {{stage_1_left}} veces
  `,
  [Content.STAGE_1_PROCESSING]: `
    ¡Tu tiempo ha sido registrado!${ND}
    ✅️ quedan {{stage_1_left}} veces
  `,
  [Content.STAGE_1_YOU_CAN_RESET]: `
    💡 Para esta fase, es muy importante no saltarse ningún momento de fumar,
    ya que tu intervalo inicial se calculará basándose en ellos.${N2}
    Si pierdes el hilo, es mejor empezar de nuevo pulsando /start.
  `,
  [Content.STAGE_1_END]: `
    ${B}¡Etapa 1 Completada! 🎉${B}${N2}
    ¡Felicidades!${N2}
    Gracias a tu determinación, hemos calculado el tiempo promedio para empezar.${N2}
    Es ${B}{{delta_time}}${B}.${ND}
    Pasemos a la Etapa 2 ⤵️
  `,
  [Content.NEXT_SMOKING_TIME]: `
    Próximo descanso para fumar después de las {{time_to_get_smoke}} ⏰️
  `,
  [Content.STAGE_2_INITIAL]: `
    ${B}¡Todo listo!${B}${N2}
    🕒 Tu intervalo actual entre descansos para fumar: ${B}{{delta_time}}${B}${N2}
    Ahora intentaremos seguir un horario de fumar.${NL}
    Cada día lo ajustaremos unos minutos según el nivel de dificultad elegido.${N2}
    Si no cumples el horario, no pasa nada.${NL} 
    Solo no olvides pulsar el botón ${B}"Estoy fumando"${B}.${NL}
    Lo tendremos en cuenta, pero no detendrá tu progreso.${N2}
    ¡Empecemos!
  `,
  [Content.STAGE_2_HINT]: `
    ⚠️ ${B}¡Importante recordar!${B}${N2}
    Las ganas de fumar duran ${I}no más de 5 minutos${I}❗️${NL}
    Así que si de repente te dan ganas de fumar pero aún no es la hora —
    simplemente ocupa tu mente con algo, y en 5 minutos
    olvidarás que querías fumar.${NL}
    ¡Así es exactamente como funciona!
  `,
  [Content.STAGE_2]: `
    Tiempo registrado ✅️
  `,
  [Content.STAGE_2_SUCCESS]: `
    Tiempo registrado. ¡Bien hecho! 👍
  `,
  [Content.STAGE_2_IGNORE_MIN]: `
    Estás pulsando el botón con demasiada frecuencia ⏳${NL}
    El intervalo mínimo que contaremos es ${B}{{min_interval}}${B}.${N2}
    ${I}En los teléfonos modernos, esto puede ocurrir sin culpa del usuario.
    Entendemos que puede ser muy molesto.${NL}
    Para evitarlo — cierra el chat en cuanto veas la hora.${I}
  `,
  [Content.STAGE_2_PROPS_MISSING]: `
    💢 Error: Configuración no encontrada.${N2}
    Para acceder a este comando, tu perfil debe estar completamente configurado.${ND}
    Si crees que esto es un error, contacta al desarrollador en [nuestro grupo](${tg_group_link})
  `,
  [Content.PENALTY]: `
    La app incluye un Sistema de Penalización Motivacional.${N2}
    Si no sigues el horario, reduciremos ligeramente la dificultad.${N2}
    La penalización se aplicará después de la próxima pausa larga.${ND}
    🚭 Puntos de penalización actuales: ${B}{{penalty}}${B}
  `,
  [Content.PENALTY_3]: `
    🤯 La mayoría de la gente sigue el horario de fumar fácilmente.${NL}
    Sin embargo, hemos notado que tus puntos de penalización se están acumulando.${NL}
    Necesitas estabilizarte.${N2}
    ¡Para eso fue creado ${B}el modo de entrenamiento${B}!${N2}
    Te recomendamos encarecidamente ${I}cambiar a él y recuperar tu estabilidad.${I}
  `,
  [Content.IDLE_NO_CIGARETTES]: `
    🌀 ${B}Empezando de nuevo hoy${B}${N2}
    Por alguna razón, no registraste tus descansos para fumar la última vez.${NL}
    Sin embargo, el hecho de que no hayas abandonado tu objetivo de dejar de fumar demuestra tu determinación.${N2}
    ${B}¡Por favor, sigue adelante!${B} 🚀
  `,
  [Content.TIME_FOR_A_SMOKE]: "🔥 ¡Es hora de un descanso para fumar! 🔥",
  [Content.ON_IDLE_START]: `💤💤💤 ${B}Pausa Larga${B}${N2}`,
  [Content.ON_IDLE_TIME_CONFIRMATION]: `⏰️ Sincronicemos relojes. ¿Son las ${B}{{local_time}}${B} para ti?`,
  [Content.ON_IDLE_STATS_1]: `Ayer fumaste ${B}{{cigarettes}}${B} veces${NL}`,
  [Content.ON_IDLE_STATS_2]: `
    El intervalo entre tus descansos para fumar ha sido recalculado:${NL}
    Intervalo anterior: {{prev_delta}}${NL}
    \\- Puntos de penalización: {{penalty}} \\[{{penalty_mins}}\\]${NL} 
    \\+ Paso {{step}}${NL}
    \\= Intervalo ajustado ${I}{{new_delta}}${I}
  `,
  [Content.WINSTRIKE]: `
    ⚡️ ¡Llevas {{winstrike}} sin fallar! ¡Excelente!
  `,
  [Content.WINSTRIKE_BASE]: `
    📚 Para salir del modo de entrenamiento, completa varios días sin penalización. {{day}} / {{of_days}}
  `,
  [Content.WINSTRIKE_MEDIUM]: `
    ⚔️ ¡Completa varios días ${I}seguidos${I} sin penalización para entrar en el Modo Rápido!${N2}
    📆 Progreso actual: ${B}{{day}} / {{of_days}}${B}
  `,
  [Content.WINSTRIKE_BASE_FAILED]: `
    ⭐️ Estás en el nivel de dificultad ${B}entrenamiento${B}${N2}
    ✨${I}Los puntos de penalización no se cuentan.${I}✨${N2}
    Intenta aguantar sin penalizaciones 😉
  `,
  [Content.WINSTRIKE_BASE_SUCCESS]: `
    🥁 ¡Vemos que ya le has cogido el truco y estás listo para cambiar la dificultad!
  `,
  [Content.DIFFICULTY]: `
    📈 ${B}Elige tu nivel de dificultad${B}${N2}
    - ${B}{{ difficulty_easy }}${B}:${NL}
     +0.5 minutos por día${NL}
    Te ayuda a acostumbrarte al sistema de intervalos del bot.${N2}
    - ${B}{{ difficulty_medium }}${B}:${NL}
    +2 minutos por día. Es ${I}óptimo${I} para el uso.${NL}
    Si quieres mantener un ritmo moderado, esta es tu opción.${N2}
    - ${B}{{ difficulty_hard }}${B}:${NL}
    +5 minutos por día${NL}
    Solo si estás ${I}listo para esforzarte${I} en dejar de fumar.${NL}
    1 error y volverás al nivel Normal.${N2}
    Tu nivel de dificultad actual 🏂 ${B}{{difficulty}}${B}.
  `,
  [Content.DIFFICULTY_EASY]: "Entrenamiento",
  [Content.DIFFICULTY_MEDIUM]: "Normal",
  [Content.DIFFICULTY_HARD]: "Rápido",
  [Content.DIFFICULTY_SELECTED]: `
    Has seleccionado el nivel de dificultad ${B}"{{difficulty}}"${B}.
  `,
  [Content.DIFFICULTY_DESCRIPTION]: `
    📌 Por favor, lee este mensaje${N2}
    Se te ha asignado el nivel de dificultad de Entrenamiento.${ND}
    ${B}¿Por qué es importante empezar con el nivel "Entrenamiento"?${B}${N2}
    En esta etapa, ${B}el objetivo principal es romper los patrones habituales de fumar${B}.
    Por ejemplo, cuando fumas con el café, mientras esperas el autobús en la parada,
    durante un descanso con compañeros de trabajo, etc.${N2}
    Esta es la parte más difícil. Nuestras estadísticas muestran:${NL}
    - En ${B}los primeros 3 días${B}, el 95% de los usuarios rompen el horario.${NL}
    - En ${B}los primeros 5 días${B}, el 100% de los usuarios lo hacen.${N2}
    ${I}El nivel de Entrenamiento fue diseñado específicamente para abordar este desafío.${I}${ND}
    📃 ${B}¿Cómo funciona?${B}${N2}
    ${B}1. Pulsa el botón "Estoy fumando", incluso si rompes el horario.${B}${NL}
    Esto te ayuda a ser consciente de tus hábitos y analizar cuándo y dónde es más probable que falles.${N2}
    ${B}2. No se aplican penalizaciones en esta etapa.${B}${NL}
    En su lugar, te centrarás en aprender a controlar tus hábitos y entender tu comportamiento.${N2}
    ${B}3. Acostúmbrate al sistema.${B}${NL}
    Cada día notarás que te vuelves más disciplinado y sigues mejor el horario.${ND}
    ${B}¿Qué sigue?${B}${N2}
    Cuando sientas que has reducido o eliminado las infracciones, ${B}puedes cambiar a un nivel de dificultad más avanzado${B}.
    Las penalizaciones se aplicarán entonces, pero no te molestarán porque ya estarás preparado.${ND}
    ⬆️ ⬆️ ⬆️ ⬆️ ⬆️${NL}
    La configuración de tu cuenta se completará${NL} 
    🔜 ${B}automáticamente en 1 minuto${B}.${NL}
    Esta pausa es para asegurarnos de que hayas leído el mensaje anterior.
  `,
  [Content.DIFFICULTY_HARD_DECREASED]: `
    ¡Te has salido del horario!${N2}
    Tu nivel de dificultad ha sido${NL}
    ${B}reducido a Normal${B} 🔻${N2}
    🚭 El punto de penalización no ha sido aplicado.${NL} 
    ${I}¡Ánimo, tú puedes!${I}
  `,
  [Content.DIFFICULTY_HARD_AUTO]: `
    ✨ El nivel de dificultad ha sido cambiado a ${B}Rápido${B} 🚀 ✨
  `,
  [Content.TIMEZONE]: `
    🌐 ${B}Configuración de zona horaria${B}${N2}
    Para configurar tu zona horaria, sigue estos pasos:${N2}
    1. Ve a ${B}Google${B} y escribe "timezone"${NL}
    2. Justo debajo de la barra de búsqueda, verás tu zona horaria entre paréntesis.${NL}
    3. Cópiala sin los paréntesis y ${B}envíanosla${B}.${ND}
    [Haz clic aquí para ir a Google](https://www.google.com/search?q=my+timezone)
  `,
  [Content.TIMEZONE_INTRO]: `
    Para mostrar la hora correctamente, necesitamos determinar tu zona horaria.
  `,
  [Content.TIMEZONE_SELECTED]: `
    🕰️ Zona horaria seleccionada: ${B}{{timezone}}${B}${N2}
    ${B}Esto es importante${B}❗${NL}
    Por favor, verifica tu hora actual.${NL}
    Nuestro sistema detecta que ahora son las ${B}{{local_time}}${B} para ti.${N2}
    Por supuesto, unos minutos no importan,${NL}
    pero si la hora está desfasada media hora o más,${NL}
    necesitarás ajustar tu zona horaria.${ND}
    ¿Tu hora actual es ${B}{{local_time}}${B}?
  `,
  [Content.TIMEZONE_INVALID]: `
    💢 ${B}Error: Zona horaria no válida${B}${N2}
    Un ejemplo correcto de zona horaria es: GMT+2${NL}
    Por favor, inténtalo de nuevo.
  `,
  [Content.LOCAL_TIME_NEW]: `
    🌐 ${B}Configuración de zona horaria${B}${N2}
    Por favor, mira la hora en tu teléfono u ordenador
    e intróducela en formato 24h.${N2}
    Ejemplos:${NL}
    {{time_sample}}, 0:21, 19:00, 01:14
  `,
  [Content.LOCAL_TIME]: `
    👉 Tu hora actual debería ser ${B}{{local_time}}${B} ⏳${N2}  
    Por favor, confirma o ajusta usando los botones.
  `,
  [Content.SETTINGS]: `
    ${B}Etapa 2. Configuración.${B}${NL}
    Es hora de ajustar tus opciones, como zona horaria, idioma y nivel de dificultad.
  `,
  [Content.SETTINGS_DONE]: `
    ${B}¡Configuración de cuenta completada!${B} 🎉${NL}
    Empieza a usar el bot ⤵️ 
  `,
  [Content.SETTINGS_UPDATED]: `
    ${B}Tu configuración ha sido actualizada${B} ✔${N2}
    🕒 Tu intervalo actual entre descansos para fumar: ${B}{{delta_time}}${B}
  `,
  [Content.SETTINGS_UPDATED_ON_IDLE]: `
    ✅ ¡Listo!${N2}
    Cada vez que fumes, simplemente pulsa «Estoy fumando».
  `,
  [Content.BOT_IGNORE]: `
    🕵️ ${B}¡Te hemos perdido!${B}${N2}
    Han pasado ${I}2 días${I} desde tu última interacción con el bot.${N2}
    ${B}¿Planeas continuar o no?${B}${ND}
    ❌ Si ${B}no planeas${B} seguir usando el bot — elige una razón:${N2}
    - ${I}¿Dejaste de fumar?${I} — ¡Entonces felicidades! 🎊${N2}
    - ${I}Decidiste no dejarlo después de todo${I} — Es una lástima, pero es tu decisión.${ND}
    ✅ Si ${B}planeas continuar${B}, hay varias opciones:${N2}
    1. ${B}{{from_scratch_message}}${B} — si tu intervalo actual es de unas dos horas o menos.${NL}
    Esto restablecerá tu progreso para que puedas ${I}empezar de cero${I}.${N2}
    2. ${B}{{no_penalty_message}}${B} — simplemente continuaremos donde lo dejaste (a veces relevante si la pausa no fue muy larga).${NL}
    Tu temporizador se establecerá en ${B}{{ no_penalty_time }}${B}${N2} 
    3. ${B}{{set_own_interval}}${B} — útil para usuarios experimentados que no quieren restablecer desde cero.${NL}
    Establece el intervalo que creas adecuado, en formato ${B}3:17${B} (simplemente escríbelo)
  `,
  [Content.BOT_IGNORE_JUST_GO_ON]: `
    ${B}¡Simplemente continuemos!${B} ¡Genial! 👍${ND}
    Entendemos que la vida es realmente rápida y ajetreada hoy en día.${N2}
    Por eso mismo no deberías abandonar el objetivo de dejar de fumar.${NL}
    Solo necesitas terminar lo que empezaste.
  `,
  [Content.BOT_IGNORE_SET_OWN_INTERVAL]: `
    Has elegido "${B}establecer tu propio intervalo${B}".${N2}
    Esta es la mejor opción para usuarios experimentados.${N2}
    Por favor, introduce el intervalo que necesitas en formato 24h.${ND}
    Ejemplos:${NL}
    2:30, 3:15, 5:55
  `,
  [Content.BOT_IGNORE_FAILED]: `
    Has decidido ${B}no dejar de fumar${B} 🤯${ND}
    Esperamos sinceramente que cambies de opinión más adelante.${N2}
    El bot ya no te enviará mensajes.${N2}
    Para activar el bot de nuevo, pulsa /start.
  `,
  [Content.BOT_IGNORE_SUCCESS]: `
    🎈 ¡Has ${B}dejado de fumar${B}! 🎉${ND}
    Eso significa que todo valió la pena 👍${N2}
    Nos gustaría compartir algunas recomendaciones contigo:${N2}
    - Recuerda, la primera semana es la más difícil${NL}
    - Bebe agua, facilita las cosas${NL}
    - Aprende una nueva técnica: cuando algo te estrese, respira profundamente.
    Es una gran alternativa a las ganas de fumar.${N2}
    Fumar es una trampa.${NL} Es solo una forma de quitarte el dinero.${N2}
    ${B}¡Estamos increíblemente orgullosos de tu logro!${B}${ND}
    Este bot es completamente no comercial. No planeo obtener ningún beneficio de él.
    Sin embargo, si quieres invitarme a un café como agradecimiento, me sentiría muy halagado.
    Para hacerlo, visita el enlace de abajo y haz clic en el botón "Donate €3".${NL}
    Enlace: [${donate_link}](${donate_link})${NL}
    ¡Gracias! 👍${ND}
    Espero que no lo necesites,${NL}
    pero si alguna vez vuelves a fumar, pulsa /start.
  `,
  [Content.CUSTOM_INTERVAL_SUCCESS]: `
    Tu intervalo elegido ha sido establecido con éxito.${N2}
    El nivel de dificultad ha sido reducido a NORMAL para ayudarte a adaptarte.${N2}
    Continúa usando el bot como antes.
  `,
  [Content.CUSTOM_INTERVAL_ERROR]: `
    No se pudo establecer el intervalo. Por favor, inténtalo en un formato diferente.
  `,
  [Content.STATS]: `
    📋 ${B}Tus estadísticas${B}:${NL}
    - Tu nivel de dificultad actual 🏂 ${B}{{difficulty}}${B}${NL}
    - Empezaste a usar el bot el {{start_date}}${NL}
    - Días desde entonces: {{days_from_start}}${NL}
    - Total de cigarrillos fumados: {{cigarettes}}${NL}
    - Total de puntos de penalización aplicados: {{penalty_all}}${NL}
    - Intervalo inicial {{delta_min}}${NL}
    - Intervalo actual {{delta_time}}${NL}
  `,
  [Content.HOW]: `
    ${B}Cómo puedes apoyar al creador del bot:${B}${N2}
    ${B}Puedes proporcionar apoyo financiero${B} a través de una donación voluntaria.${NL}
    Es importante entender que el bot es completamente no comercial.${NL}
    Esto significa que sin importar cuánto dones, no alteraré la funcionalidad del bot ni incluiré anuncios.${NL}
    La cantidad de donación predeterminada es de €3, pero siéntete libre de dar más si lo deseas.${NL}
    Enlace: [${donate_link}](${donate_link})${N2}
    ${B}Puedes ayudar con traducciones a otros idiomas.${B}${NL}
    Si estás interesado, envía un correo a {{admin_email}}, y haré lo posible por responder en una semana.${N2}
    ${B}Puedes ayudar al bot contándoles a tus amigos.${B}${NL}
    Por supuesto, la popularidad no es el objetivo de este proyecto.${NL}
    Pero, seamos honestos, si nadie lo conoce, todo es en vano.${N2}
    ${I}Sin importar cómo elijas ayudar, ¡gracias!${I}${NL}
    ${I}Significa mucho para mí que te importe el futuro de este proyecto${I} 💓
  `,
  [Content.MAXIMUM_REACHED]: `
    ${B}⚜️ ¡Has alcanzado el límite! ⚜️${B}${N2}
    Increíble pero cierto: ¡has superado todos los límites posibles!${N2}
    ${I}Desafortunadamente, nuestra app no soporta intervalos tan grandes, por lo que no se harán más ajustes.${I}${ND}
    ${B}Si aún no has dejado de fumar:${B}${N2}
    Es hora de dejar el tabaco atrás. Tu intervalo ya es enorme y no tiene sentido continuar más.${N2}
    Consulta nuestras recomendaciones para ayudarte a dejarlo definitivamente. Simplemente pulsa el botón de abajo 💙${ND}
    ¡Te deseamos éxito pase lo que pase! 💪
  `,
  [Content.JOIN_OUR_CHAT]: `
    Hemos creado ${B}un chat acogedor para nuestros usuarios${B}${N2}
    un lugar para conocer gente nueva,${NL}
    compartir ideas e inspirarse 💫${N2}
    Únete 👉 [enlace](${tg_group_link})
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
