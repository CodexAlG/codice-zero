
// Mock versioned agent data for BetaDiffViewer demonstration
// This data represents different beta versions of agents with stat and skill changes

export const versionedAgents = {
    // Los datos han sido limpiados. La estructura se mantiene para uso futuro.
    // Ejemplo de estructura esperada:
    // agentId: {
    //     id: number,
    //     name: "string",
    //     versions: {
    //         "vX.Y.Z": {
    //             versionLabel: "vX.Y.Z",
    //             baseStats: { hp: { min, max }, atk: { min, max }, def: { min, max }, impact, crit, critDmg, anomalyRate, anomalyMastery, penRatio, energyRegen },
    //             coreStats: { statName: "string", valuePerNode: number },
    //             coreSkillScalingColors: ["string"],
    //             coreSkillScaling: [["string"]],
    //             potential: { name: "string", description: "string" },
    //             skills: [
    //                 { type: "string", name: "string", description: "string", tags: ["string"] }
    //             ]
    //         }
    //     }
    // }
    50: {
        id: 50,
        name: "Nangong Yu",
        versions: {
            "v2.7.1": {
                versionLabel: "v2.7.1",
                baseStats: {
                    hp: { min: 673, max: 8373 },
                    atk: { min: 107, max: 746 },
                    def: { min: 50, max: 622 },
                    impact: 120,
                    crit: "5%",
                    critDmg: "50%",
                    anomalyRate: "90",
                    anomalyMastery: "93",
                    penRatio: "0%",
                    energyRegen: "1.2"
                },
                coreStats: {
                    statName: "Tasa de Anomalía",
                    valuePerNode: 12
                },
                coreSkillScaling: [
                    ["50", "25%", "15%", "9%"],
                    ["58", "29%", "17.5%", "10%"],
                    ["66", "33%", "20%", "11%"],
                    ["74", "37%", "22.5%", "12%"],
                    ["82", "41%", "25%", "13%"],
                    ["90", "45%", "27.5%", "14%"],
                    ["100", "50%", "30%", "15%"]
                ],
                skills: [
                    { type: "Ataque Básico", name: "Ataque Básico", description: "Presiona [Icono Ataque]: Realiza hasta tres golpes consecutivos hacia adelanta, infligiendo Daño Etéreo", tags: ["Etereo", "Ataque Básico"] },
                    { type: "Ataque Básico", name: "Ataque Cargado", description: "Mantener presionado [Icono Ataque] para cargar; al soltar el botòn en el momento adecuado, se puede lanzar un Ataque Cargado Preciso, el cual aumenta el valor de Aturdimiento infligido por este movimiento en un 20%; Nangong Yu puede lanzar hasta tres etapas de Ataque Cargado, la segunda y tercera etapa requieren consumir 50 puntos de (valor de Baile) cada una; al conectar despuès de (Contraataque de Evasiòn), (Ataque de Asistencia), (Asistencia Ràpida) y (Técnica Especial EX), se puede completar el Ataque Cargado Preciso màs facilmente; durante la carga de la primera etapa, el nivel de resistencia a la interrupiòn aumenta y el daño recibido se reduce en un 60%; durante la segunda y tercera etapa del Ataque Cargado, se posee efecto de invencibilidad; la fase de embestida de la primera etapa del Ataque Cargado puede bloquear ataques enemigos, si el bloqueo es exitoso, este Ataque Cargado tambièn se considerarà como un Ataque Cargado Preciso; todos los Ataques Cargados poseen efecto de invencibilidad durante su ejecuciòn.", tags: ["Etereo", "Ataque Básico"] },
                    { type: "Evasión", name: "Evasión", description: "Pulsar [Icono Dodges]: Realiza una evasiòn ràpida; posee efecto de invencibilidad durante la ejecuciòn del movimiento", tags: ["Etereo", "Evasión"] },
                    { type: "Evasión", name: "Ataque de Carrera", description: "Al evadir, pulsar [Icono Ataque]: Realiza un ataque ràpido hacia adelante, infligiendo Daño Etéreo", tags: ["Etereo", "Evasión"] },
                    { type: "Evasión", name: "Contraataque de Evasión", description: "Tras activar una (Evasiòn Perfecta), pulsar [Icono Ataque]: Salta hacia adelante y realiza un ataque de barrido al aterrizar, infligiendo Daño Etéreo; possee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Evasión"] },
                    { type: "Técnica Especial", name: "Técnica Especial", description: "Pulsar [Icono Especial]: Blandir el martillo para lanzar un ataque, infligiendo Daño Etéreo.", tags: ["Etereo", "Técnica Especial"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX", description: "Cuando la energìa es suficiente, pulsar [Icono Especial EX]: Blandir el martillo para lanzar un ataque, infligiendo una gran cantidad de Daño Etéreo; este movimiento no interrumpirà el conteo de combo del (Ataque Basico: Ataque Cargado); posee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Técnica Especial"] },
                    { type: "Asistencia", name: "Asistencia Rápida", description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist]: Salta hacia adelante y realiza ataques consecutivos al objetivo, infligiendo Daño Etéreo; posee efecto de invenciblidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Asistencia"] },
                    { type: "Asistencia", name: "Asistencia Defensiva", description: "Cuando el personaje en el campo està a punto de ser atacado, pulsar [Icono Assist]: Realiza un parry al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Asistencia"] },
                    { type: "Asistencia", name: "Ataque de Asistencia", description: "Tras activar (Asistencia Definitiva), pulsar [Icono Ataque]: Realiza ataques continuos contra el objetivo, infligiendo una gran cantidad de Daño Etéreo; posee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Asistencia"] },
                    { type: "Pasiva Central", name: "Pasiva Central", description: "La Maestrìa de Anomalìa de Nangong Yu aumenta en {VALOR_1} puntos; cuando la Tasa de Anomalìa de Nangong Yu es superior a 100 puntos, cada 1 punto que exceda la Tasa de Anomalìa inicial aumentarà su propio impacto en 0.8; cuando un enemigo se encuentra en estado de Aturdimiento, cada vez que entra en un estado de Anomalìa, recibe un ataque de (Abloom) o un ataque de (Desorden), acumularà 1 capa de (Marca); un mismo enemigo puede ser acumulado hasta un màximo de 5 capas de (Marcas) se acumulan hasta el nùmero màximo de capas o cuando un enemigo que posee (Marcas) se recupera del estado de Aturdimiento, todas las (Marcas) seràn eliminadas; cuando las (Marcas) son eliminadas, se activarà un efecto especial de (Desorden) llamado (Desorden de Polaridad), infligiendo al enemigo un {VALOR_2} del daño del efecto de (Desorden) original, por cada 1 capa de (Marca) que tenga el enemigo, el daño de este (Desorden de Polaridad) infligirà un 10% adicional del daño del efecto de (Desorden) original, el (Desorden de Polaridad) no eliminarà el efecto de Anomalìa de Atributo en el que se encuentra el objetivo; durante un mismo periodo de Aturdimiento, si las (Marcas) ya han sido elimindas, el enemigo no podrà volver a recibir (Marcas), cuando el (Ataque Basico: Ataque Cargado) o la (Técnica Especial EX) de Nangong Yu golpean a un enemigo, aumentan su propia Eficiencia de Acumulaciòn de Anomalìa en un {VALOR_3}, la Eficiencia de Aturdimiento en un {VALOR_4}, y aumentan el daño infligido por todo el equipo en un 30%, con una duraciòn de 20 segundos, al activarse de nuevo se reinicia la duraciòn. Cuando el (Ataque Basico: Ataque Cargado) de Nangong Yu golpea a un enemigo, el enemigo obtiene el efecto (Aturdir), los enemigos bajo este efecto ven aumentada su duraciòn de Aturdimiento en 3 segundos tras entrar en estado de Aturdimiento, el efecto (Aturdir) se activa como màximo una vez por objetivo antes de recuperarse del estado de Aturdimiento, el efecto de aumento de duraciòn de Aturdimiento no se puede acumular con efectos del mismo tipo, cuando termina el Aturdmiento del enemigo con efecto (Aturdir), el efecto (Aturdir) tèrmina; cuando cualquier personaje del equipo hace que un enemigo entre en estado de Aturdimiento, el multiplicador de daño de Aturdmiento del enemigo aumenta un 30%; al estar en estado de combate, Nangong Yu recupera 4 puntos de (Valor de Baile) por segundo, cuando cualquier personaje del equipo hace que un enemigo entre en estado de Anomalìa, recuperarà adicionalmente 20 puntos de (Valor de Baile) para Nangong Yu, este efecto se activa como màximo una vez cada 8 segundos, Nangong Yu puede poseer un màximo de 100 puntos de (Valor de Baile)", tags: ["Etereo", "Pasiva Central"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional", description: "Se activa cuando existe un personaje de (Anomalìa) o un personaje de la misma facciòn que ella en el equipo: La Eficiencia de Acumulaciòn de Anomalìa causada por el ataque de cualquier personaje del equipo al golpear un enemigo en estado de Aturdimiento aumenta en un 20%, la Eficiencia de Acumulaciòn de Anomalìa de Aturdimiento aumenta adicionalmente en un 40%, cuando el Agente en uso golpea con un ataque pesado de (Tecnica en Cadena) a un enemigo que se encuentra bajo un estado de Anomalìa de Atributyo, activarà el efecto especial de (Desorden) llamado (Desorden de Polaridad), infligiendo al objetivo un 40% del daño del efecto de (Desorden) original, el (Desorden de Polaridad) no eliminarpa el estado de Anomalìa de Atributo en el que se encuentra el objetivo, el enemigo puede activar este efecto como màximo una vez durante el perido de Aturdmiento.", tags: ["Etereo", "Habilidad Adicional"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena", description: "Al activar una (Ataque en Cadena), seleccionar al personaje correspondiente para lanzar: Realiz mùltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Etéreo; posee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etéreo", "Técnica Definitiva"] },
                    { type: "Técnica Definitiva", name: "Definitiva", description: "Cuando el nivel de decibelios llega a (Màximo), pulsar [Icono Definitiva]: Realiza mùltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Etéreo; al lanzar el movimiento, Nangong Yu despliega el (Velo Etereo: Repeticiòn Delirante), durante la duraciòn del (Velo Etereo: Repeticiòn Delirante), el Ataque de todos los personajes del equipo aumenta adicionalmente en 50 puntos, con una duraciòn de 30 segundos; si Nangong Yu vuelve a desplegar el (Velo Etereo: Repeticiòn Delirante), se cerrarà el (Velo Etereo: Repeticiòn Delirante) existente; posee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Técnica Definitiva"] },
                    { type: "Mindscape 1", name: "Mindscape 1", description: "Cuando (Técnica Especial EX) o (Ataque Basico: Ataque Cargado) golpean a un enemigo, reducen la Resistencia a Todos los Atributos del enemigo en un 15%, con una duraciòn de 40 segundos, al activarse de nuevo se reinicia la duraciòn, al entrar al campo de batalla, el (Valor de Baile) de Nangong Yu se recupera hasta el valor màximo, en el Cavidad Cero este efecto se activa como màximo una vez cada 180 segundos.", tags: ["Etereo", "Mindscape 1"] },
                    { type: "Mindscape 2", name: "Mindscape 2", description: "Cada capa de (Marca) hace que el daño adicional infligido por el (Desorden de Polaridad) aumente hasta un 15% del efecto de (Desorden) original; el aumento del multiplicador de daño de vulnerabilidad por aturdimiento proporcionado por la (Pasiva) aumenta adicionalmente en un 20%", tags: ["Etereo", "Mindscape 2"] },
                    { type: "Mindscape 3", name: "Mindscape 3", description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2", tags: ["Etereo", "Mindscape 3"] },
                    { type: "Mindscape 4", name: "Mindscape 4", description: "La Maestrìa de Anomalìa aumenta en 40; al activar un Ataque Cargado Preciso, la Eficiencia de Acumulaciòn de Anomalìa del (Ataque Basico: Ataque Cargado) aumenta en un 35%.", tags: ["Etereo", "Mindscape 4"] },
                    { type: "Mindscape 5", name: "Mindscape 5", description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2", tags: ["Etereo", "Mindscape 5"] },
                    { type: "Mindscape 6", name: "Mindscape 6", description: "Cuando el enemigo no se encuentra en estado de Aturdmiento, al entrar en un estado de Anomalìa o ser golpeado por un ataque pesado de (Técnica Especial EX), acumularà 1 capa de (Marca: Modificada), al ser golpeado por un ataque pesado de (Técnica Definitiva) acumularà 2 capas de (Marca: Modificada); (Marca: Modificada) se puede acumular hasta un màximo de 5 capas, cuando las capas de (Marca: Modificada) acumuladas en el enemigo alcanzan el limite superior, se activara una vez el (Desorden de Polaridad) y se eliminaràn todas las (Marca: Modificada), infligiendo al objetivo un 40% del dañño del efecto de (Desorden) original, por cada 1 capa de (Marca: Modificada) que tenga el enemigo, el multiplicador de daño de este (Desorden de Polaridad) aumentarà adicionalmente en un 8%, el (Desorden de Polaridad) no eliminarà el estado de Anomalìa de Atributo en el que se encuentra el objetivo; para un mismo enemigo, despuès de activar (Desorden de Polaridad) a travès de (Marca: Modificada), no se podràn volver a acumular (Marca: Modificada) hasta que se recupere del estado de Aturdmiento; (Marca: Modificada) y (Marca) no se pueden superponer entre si.", tags: ["Etereo", "Mindscape 6"] }
                ]
            },
            "v2.7.2": {
                versionLabel: "v2.7.2",
                coreSkillScalingColors: [
                    "text-[#00ff00]", // Ninguno (Verde)
                    "text-[#d946ef]", // Etéreo (Pink/Magenta)
                    "text-[#3b82f6]", // Eléctrico (Blue)
                    "text-[#ef4444]", // Fuego (Red)
                    "text-[#eab308]", // Físico (Yellow)
                    "text-[#22d3ee]",  // Hielo (Cyan)
                    "text-[#00ff00]",  // Ninguno (Verde)
                    "text-[#00ff00]"  // Ninguno (Verde)
                ],
                coreSkillScaling: [
                    ["60", "720%", "360%", "900%", "63%", "90%", "15%", "11%"],
                    ["70", "720%", "360%", "900%", "63%", "90%", "17.5%", "12.5%"],
                    ["80", "720%", "360%", "900%", "63%", "90%", "20%", "14%"],
                    ["90", "720%", "360%", "900%", "63%", "90%", "22.5%", "15.5%"],
                    ["100", "720%", "360%", "900%", "63%", "90%", "25%", "17%"],
                    ["110", "720%", "360%", "900%", "63%", "90%", "27.5%", "18.5%"],
                    ["120", "720%", "360%", "900%", "63%", "90%", "30%", "20%"]
                ],
                skills: [
                    { type: "Ataque Básico", name: "Ataque Básico: Paso de Baile Meteórico", description: "Presiona [Icono Ataque]: Realiza hasta tres golpes consecutivos hacia adelanta, infligiendo Daño Etéreo", tags: ["Etereo", "Ataque Básico"] },
                    { type: "Ataque Básico", name: "Ataque Cargado: Lindo Choque Volador de Mina Terrestre", description: "Mantener pulsado [Icono Ataque] para cargar, al soltar el botón en el momento adecuado, se puede lanzar un Ataque Cargado Preciso, el cual aumenta el valor de Aturdimiento infligido por este movimiento en un 20%; Nangong Yu puede lanzar hasta tres etapas de Ataque Cargado, la segunda y tercera etapa de Ataque Cargado requieren consumir 50 puntos de (Contratiempo) cada una; al conectar después de (Contraataque de Evasión), (Ataque de Asistencia), (Asistencia Rápida), (Ataque en Cadena), (Técnica Definitiva) y (Técnica Especial EX), se puede completar el Ataque Cargado Preciso más fácilmente; tras la activación de (Ataque en Cadena), (Técnica Definitiva) y (Técnica Especial EX), si el (Contratiempo) es suficiente, se puede conectar directamente a la segunda etapa del ataque, y no interrumpirá el conteo de combo de (Ataque Cargado: Lindo Choque Volador de Mina Terrestre); durante la carga de la primera etapa del ataque el nivel de resistencia a la interrupción aumenta, y el daño recibido se reduce en un 60%; durante la segunda y tercera etapa del ataque se posee un efecto de invencibilidad; la fase de embestida de la primera etapa del ataque puede bloquear ataques enemigos, si el bloqueo es exitoso este ataque también se considerará como un ataque preciso; todos los ataques poseen efecto de invencibilidad durante su ejecución." },
                    { type: "Evasión", name: "Evasión: Bailarina Nata", description: "Pulsar [Icono Dodges]: Realiza una evasiòn ràpida; posee efecto de invencibilidad durante la ejecuciòn del movimiento", tags: ["Etereo", "Evasión"] },
                    { type: "Evasión", name: "Ataque de Carrera: Meteoro Giratorio", description: "Al evadir, pulsar [Icono Ataque]: Realiza un ataque ràpido hacia adelante, infligiendo Daño Etéreo", tags: ["Etereo", "Evasión"] },
                    { type: "Evasión", name: "Contraataque de Evasión: Vals Meteórico", description: "Tras activar una (Evasiòn Perfecta), pulsar [Icono Ataque]: Salta hacia adelante y realiza un ataque de barrido al aterrizar, infligiendo Daño Etéreo; possee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Evasión"] },
                    { type: "Técnica Especial", name: "Técnica Especial: Afecto un Poco Pesado", description: "Pulsar [Icono Especial]: Blandir el martillo para lanzar un ataque, infligiendo Daño Etéreo.", tags: ["Etereo", "Técnica Especial"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Afecto Bastante Pesado", description: "Cuando la energía es suficiente, pulsar [Icono Especial EX] para activar: Blandir un martillo para lanzar un ataque, infligiendo Daño Etéreo; este movimiento no interrumpirá el conteo de combo de (Ataque Cargado: Lindo Choque Volador de Mina Terrestre); posee efecto de invencibilidad durante la ejecución del movimiento." },
                    { type: "Asistencia", name: "Asistencia Rápida: Técnica de Rescate", description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist]: Salta hacia adelante y realiza ataques consecutivos al objetivo, infligiendo Daño Etéreo; posee efecto de invenciblidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Asistencia"] },
                    { type: "Asistencia", name: "Asistencia Defensiva: Paso de Baile Perfecto", description: "Cuando el personaje en el campo està a punto de ser atacado, pulsar [Icono Assist]: Realiza un parry al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Asistencia"] },
                    { type: "Asistencia", name: "Ataque de Asistencia: Actuación Improvisada", description: "Tras activar (Asistencia Definitiva), pulsar [Icono Ataque]: Realiza ataques continuos contra el objetivo, infligiendo una gran cantidad de Daño Etéreo; posee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Asistencia"] },
                    { type: "Pasiva Central", name: "Pasiva Central: Ídolo Genio", description: "La Maestría de Anomalia de Nangong Yu aumenta en {VALOR_1} puntos; cuando la Tasa de Anomalia de Nangong Yu es superior a 110 puntos, cada 1 punto que exceda la Tasa de Anomalia inicial aumentará su propio impacto en 1; cuando un enemigo se encuentra en estado de Aturdimiento, cada vez que entra en un estado de Anomalia, recibe un ataque de (Abloom) o un ataque de (Desorden), acumulará 1 capa de (Vibrato); un mismo enemigo puede acumular hasta un máximo de 4 capas de (Vibrato); cuando el enemigo se encuentra bajo un estado de Anomalia de Atributo, si el (Vibrato) se acumula hasta el número máximo de capas o cuando un enemigo que posee (Vibrato) se recupera del estado de Aturdimiento, todos los (Vibratos) serán eliminados; cuando el (Vibrato) es eliminado, si el enemigo se encuentra  en un estado de Anomalia, Nangong Yu infligirá un ataque de (Abloom) al objetivo; calculando adicionalmente un daño de Anomalía una vez, la proporción relativa al daño de Anomalía de Atributo original es {VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5}/{VALOR_6}, por cada capa de (Vibrato) que tenga el enemigo, el daño de este (Abloom) aumenta adicionalmente un 25%, durante el mismo periodo de Aturdimiento, si el (Vibrato) ya ha sido eliminado, el enemigo no podrá volver a recibir (Vibrato): cuando el (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) o la (Técnica Especial EX) de Nangong Yu golpean a un enemigo, aumentan su propia Eficiencia de Acumulación de Anomalia en un {VALOR_7}, la Eficiencia de Aturdimiento en un {VALOR_8}, y aumentan el daño infligido por todo el equipo en un 15%, con una duración de 20 segundos. al activarse de nuevo se reinicia la duración. Al estar en estado de combate, Nangong Yu recupera 3.5 puntos de (Contratiempo) por segundo, cuando cualquier personaje del equipo hace que un enemigo entre en estado de Anomalìa, recuperarà adicionalmente 15 puntos de (Contratiempo) para Nangong Yu, este efecto se activa como màximo una vez cada 6 segundos, Nangong Yu puede poseer un màximo de 100 puntos de (Contratiempo)", tags: ["Etereo", "Pasiva Central"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional: Capitana Ángel", description: "Se activa cuando existe un personaje de (Anomalía) o un personaje de la misma facción que ella en el equipo: La Eficiencia de Acumulación de Anomalía causada por el ataque de cualquier personaje del equipo al golpear a un enemigo en estado de Aturdimiento aumenta en un 20%, la Eficiencia de Acumulación de Anomalía causada por ataques de (Atque en Cadena) al golpear a un enemigo en estado de Aturdimiento aumenta adicionalmente en un 40%; cuando cualquier personaje del equipo hace que un enemigo entre en estado de Aturdimiento, Nangong Yu obtiene 2 capas del efecto (Fiebre del Baile), poseyendo un máximo de 2 capas, con una duración de 15 segundos, al activarse de nuevo se reinicia la duración, al poseer (Fiebre de Baile), cuando el golpe pesado de la (Técnica Especial EX), el (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) o la (Asistencia Rápida) de Nangong Yu golpea a un enemigo en estado de Anomalía de Atributo y Aturdimiento, consumirá 1 capa de (Fiebre de Baile)) para activar un efecto especial de (Desorden) llamado (Desorden de Polaridad) en el objetivo, infligiendo al objetivo un 25% del daño del efecto de (Desorden) original, el (Desorden de Polaridad) no eliminará el estado de Anomalía de Atributo en el que se encuentra el objetivo, si dicho movimiento no logra activar (Desorden de Polaridad) entonces no consumirá (Fiebre de Baile); cuando Nangong Yu posee (Fiebre de Baile)), la próxima vez que cambie a la vanguardia lanzará directamente la primera etapa de (Ataque Cargado: Lindo Choque Volador de Mina Terrestre), este ataque cargado se considera un ataque cargado preciso; cuando Nangong Yu y Aria están juntas en el equipo, al golpear el golpe pesado del (Ataque Básico: Tono Absoluto) de Aria a un enemigo en estado de Anomalía de Atributo y Aturdimiento, Nangong Yu también consumirá 1 capa de (Fiebre de Baile)) para activar (Desorden de Polaridad) en el enemigo; cuando la tercera etapa de ataque del (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) de Nangong Yu golpea a un enemigo, el enemigo obtiene el efecto (Aturdir), los enemigos bajo este efecto ven aumentada su duración de Aturdimiento en 3 segundos tras entrar en estado de Aturdimiento, el multiplicador de daño de vulnerabilidad por aturdimiento aumenta un 30%, antes de recuperarse del estado de Aturdimiento el efecto (Aturdir) se activa como máximo una vez por objetivo, el efecto de aumento de duración de Aturdimiento no se puede acumular con efectos del mismo tipo, cuando termina el Aturdimiento del enemigo con efecto (Aturdir), el efecto (Aturdir) termina." },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena: Gravedd de Cometa", description: "Al activar una (Ataque en Cadena), seleccionar al personaje correspondiente para lanzar: Realiz mùltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Etéreo; posee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etéreo", "Técnica Definitiva"] },
                    { type: "Técnica Definitiva", name: "Técnica Definitiva: Cúmulo Estelar Errante", description: "Cuando el nivel de decibelios llega a (Màximo), pulsar [Icono Definitiva]: Realiza mùltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Etéreo; al lanzar el movimiento, Nangong Yu despliega el (Velo Etereo: Repeticiòn Delirante), durante la duraciòn del (Velo Etereo: Repeticiòn Delirante), el Ataque de todos los personajes del equipo aumenta adicionalmente en 50 puntos, con una duraciòn de 30 segundos; si Nangong Yu vuelve a desplegar el (Velo Etereo: Repeticiòn Delirante), se cerrarà el (Velo Etereo: Repeticiòn Delirante) existente; posee efecto de invencibilidad durante la ejecuciòn del movimiento.", tags: ["Etereo", "Técnica Definitiva"] },
                    { type: "Mindscape 1", name: "Foco Perezoso", description: "Cuando (Técnica Especial EX) o (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) golpean a un enemigo, reducen la Resistencia a Todos los Atributos del enemigo en un 15%, con una duraciòn de 40 segundos, al activarse de nuevo se reinicia la duraciòn, al entrar al campo de batalla, el (Fiebre del Baile) de Nangong Yu se recupera hasta el valor màximo, en el Cavidad Cero este efecto se activa como màximo una vez cada 180 segundos.", tags: ["Etereo", "Mindscape 1"] },
                    { type: "Mindscape 2", name: "Lágrimas Indoloras", description: "Cada capa de (Vibrato) hace que el aumento adicional del daño de (Abloom) en la (Pasiva Central: Ídolo Genio) pase a ser del 35%; el multiplicador de daño de vulnerabilidad por aturdimiento proporcionado por la (Habilidad Adicional: Capitana Ángel) aumenta adicionalmente en un 20%, el límite de posesión de (Fiebre de Baile)) se incrementa a 3 capas." },
                    { type: "Mindscape 3", name: "Fichas en la Balanza", description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2", tags: ["Etereo", "Mindscape 3"] },
                    { type: "Mindscape 4", name: "Paso de Baile de Cómplice", description: "La Maestrìa de Anomalìa aumenta en 40; al activar un Ataque Cargado Preciso, la Eficiencia de Acumulaciòn de Anomalìa del (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) aumenta en un 35%.", tags: ["Etereo", "Mindscape 4"] },
                    { type: "Mindscape 5", name: "Centro del Escenario", description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2", tags: ["Etereo", "Mindscape 5"] },
                    { type: "Mindscape 6", name: "Delirio de Ángel", description: "Cuando el enemigo no se encuentra en estado de Aturdimiento, cada vez que cae en un estado de Anomalía por el ataque de un Agente, cada vez que recibe un ataque de (Abloom) o (Desorden), y al ser golpeado por el golpe pesado de la (Técnica Especial EX: Afecto Bastante Pesado) o del (Ataque Cargado: Lindo Choque Volador de Mina Terrestre), acumulará 1 capa de (Vibrato: Modificado), al ser golpeado por el golpe pesado de la (Técnica Definitiva: Cúmulo Estelar Errante) acumulará 2 capas de (Vibrato: Modificado); (Vibrato: Modificado) se puede acumular hasta un máximo de 4 capas, cuando el enemigo entra en estado de Aturdimiento, (Vibrato: Modificado) será eliminado por completo, cuando (Vibrato: Modificado) es eliminado, Nangong Yu infligirá un ataque de (Abloom) al objetivo: calculando adicionalmente un daño de Anomalía de Atributo una vez, la proporción relativa al daño de Anomalía de Atributo original es 800%/400%/1000%/70%/100%, por cada 1 capa de (Vibrato: Modificado) que tenga el enemigo, el daño de esta (Abloom) aumenta adicionalmente en un 25%; (Vibrato: Modificado) y (Vibrato) no se pueden superponer entre sí.", tags: ["Etereo", "Mindscape 6"] },
                ]
            }
        },
    },
    51: {
        id: 51,
        name: "Cissia",
        versions: {
            "v2.7.1": {
                versionLabel: "v2.7.1",
                baseStats: {
                    hp: { min: 617, max: 7673 },
                    atk: { min: 135, max: 938 },
                    def: { min: 49, max: 606 },
                    impact: 93,
                    crit: "5%",
                    critDmg: "50%",
                    anomalyRate: "94",
                    anomalyMastery: "93",
                    penRatio: "0%",
                    energyRegen: "1.2"
                },
                coreStats: {
                    statName: "energia",
                    valuePerNode: 0.12
                },
                coreSkillScaling: [
                    ["3%", "0.52%", "12.88%", "222%"],
                    ["3.5%", "0.6%", "14.9%", "240%"],
                    ["4%", "0.68%", "16.92%", "258%"],
                    ["4.5%", "0.76%", "18.94%", "276%"],
                    ["5%", "0.84%", "20.96%", "294%"],
                    ["5.5%", "0.92%", "22.98%", "312%"],
                    ["6%", "1%", "25%", "330%"]
                ],
                skills: [
                    { type: "Ataque Básico", name: "Ataque Básico", description: "Pulsar [Icono Ataque]: Realiza hasta cuatro golpes consecutivos hacia adelante, infligiendo Daño Eléctrico; cuando el cuarto golpe golpea a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; después de que el cuarto golpe golpee al enemigo, obtiene 1 punto de (Veneno), al golpear a un enemigo que se encuentra en estado de Aturdimiento, obtiene adicionalmente 1 punto de (Veneno).", tags: ["Electrico"] },
                    { type: "Ataque Básico", name: "Ataque Cargado", description: "Se puede activar manteniendo pulsado [Icono Ataque] cuando se posee al menos 1 punto de (Veneno) o 1 capa de (Agilidad de Serpiente): Cissia salta en el aire y fija el objetivo; luego cae al suelo infligiendo Daño Eléctrico a los enemigos en el área; durante el periodo de fijación, mantener pulsado [Icono Ataque] puede extender el tiempo de fijación, y arrastrando el stick se puede controlar libremente el punto de caída; al activar el movimiento consume hasta 6 capas de (Agilidad de Serpiente), cada capa aumenta el multiplicador de daño de este movimiento; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; tras golpear al enemigo, si ella es el personaje en uso, consumirpa rapidamente todo el (Veneno) y activará (Estallido de Veneno de Serpiente); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Ataque Básico", name: "Estallido de Veneno de Serpiente", description: "Inflinge Daño Eléctrico a todos los enemigos que poseen la (Marca de Veneno de Serpiente); cada vez que se activa, aumenta la Probabilidad Crítica propia en un 8%, con una duración de 15 segundos, acumulable hasta 3 capas, al activarse de nuevo se reinicia la duración; al activarse, obtiene 1 capa del efecto (Agilidad de Serpiente), hasta un máximo de 9 capas.", tags: ["Electrico"] },
                    { type: "Evasión", name: "Evasión", description: "Pulsar [Icono Dodges]: Realiza una evasión rápida; posee efecto de invencibilidad durante la ejecuión del movimiento.", tags: ["Electrico"] },
                    { type: "Evasión", name: "Ataque de Carrera", description: "Al evadir, pulsar [Icono Ataque]: Realiza un ataque rápido hacia adelante, infligiendo Daño Eléctrico.", tags: ["Electrico"] },
                    { type: "Evasión", name: "Contraataque de Evasión", description: "Tras activar una (Evasión Perfecta), pulsar [Icono Ataque]: Salta hacia adelante y realiza un ataque de barrio al aterrizar, infligiendo Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Técnica Especial", name: "Técnica Especial", description: "Pulsar [Icono Especial]: Lanza una mordedura de serpiente a larga distancia hacia adelante, infligiendo Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; el nivel de resistencia a la interrupción aumenta durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX", description: "Cuando la energía es suficiente, pulsar o mantener pulsado [Icono Especial EX]: Lanza múltiples mordeduras de serpientes a larga distancia hacia adelante, infligiendo Daño Eléctrico; al mantener pulsado, consumirá energía adicionalmente, cada 20 puntos activan un golpe adicional, infligiendo Daño Eléctrico, hasta consumir un máximo de 60 puntos de energía adicionales; tras mantener pulsado, obtiene 3 puntos de (Veneno), al mantener pulsado por cada 20 puntos de energía adicionales consumidos, obtiene 1 punto de (Veneno); al golpear a un enemigo, aplica el efecto de (Marca de Veneno de Serpiente) al enemigo con una duración de 60 segundos; tras lanzar el movimiento, puede conectar directamente con el cuarto golpe del (Ataque Básico); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Asistencia", name: "Asistencia Rápida", description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist]: Salta hacia adelante y realiza un ataque de barrido al aterrizar, infligiendo Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Asistencia", name: "Asistencia Defensiva", description: "Cuando el personaje en el campo está a punto de ser atacado, pulsar [Icono Assist]: Realiza un parry al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Asistencia", name: "Ataque de Asistencia", description: "Tras activar (Asistencia Definitiva), pulsar [Icono Ataque]: Realiza ataques continuos contra el objetivo, infligiendo una gran cantidad de Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Pasiva Central", name: "Pasiva Central", description: "Al entrar al campo de batalla, obtiene 3 puntos de (Veneno), en el modo de Cavidad Cero este efecto se activa como máximo una vez cada 180 segundos. Al poseer (Veneno), en estado de combate se consume 1 punto de (Veneno) cada 5 segundos, activando una vez (Estallido de Veneno de Serpiente), causando Daño Eléctrico; hace que el Daño Eléctrico y Daño Físico infligido por todos los personajes del equipo a enemigos con (Marca de Veneno de Serpiente) ignore un {VALOR_1} de la defensa del enemigo, si la Recuperación de Energía inicial automática es mayor a 1.4, por cada 0.12 que exceda, ignorará adicionalmente un {VALOR_2} de la defensa del enemigo, hasta ignorar un maximo de {VALOR_3} de la defensa del enemigo, dura hasta 8 segundos despues de que se agote el (Veneno). El multiplicador de daño de (Estallido de Veneno de Serpiente) aumenta un {VALOR_4}; Cuando hay al menos 1 personaje de Atributo Eléctrico adicional en el equipo, el valor de aturdimiento causado por (Estallido de Veneno de Serpiente) aumenta un 50%; al obtener (Veneno), por cada 1 punto de (Veneno) que se desborde, se activa una vez (Estallido de Veneno de Serpiente).", tags: ["Electrico"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional", description: "Se activa cuando existe otro personaje de (Atributo Físico) o un personaje con el mismo Atributo que ella en el equipo: Al poseer (Veneno), aumenta el Daño Crítico de todos los personajes del equipo en un 30%, y aumenta adicionalmente el propio en un 20%, dura hasta 8 segundos después de que se agote el (Veneno).", tags: ["Electrico"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena", description: "Al activar un (Ataque en Cadena), selecionar al personaje correspondiente para lanzar: Realiza múltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Eléctrico; tras lanar el movimiento, obtiene 3 puntos de (Veneno); al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Técnica Definitiva", name: "Técnica Definitiva", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva]: Realiza un ataque de aplastamiento hacia adelante, infligiendo una gran cantidad de Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; tras lanzar el movimiento, obtiene 3 puntos de (Veneno); tras lanzar el movimiento, despliega (Velo Etereo: Ojo de Serpiente), con una duración de 12 segundos, durante este periodo el Daño Crítico de todo el equipo aumenta un 8 %; Antes de volver a desplegar (Velo Etereo: Ojo de Serpiente), se cerrará el (Velo Etereo: Ojo de Serpiente) existente; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Mindscape 1", name: "Mindscape 1", description: "Al entrar al campo de batalla, los puntos de (Veneno) obtenidos aumentan a 6; el efecto de ignorar defensa enemiga en la (Pasiva Central) aumentan al 150% del original; al golpear a un enemigo con (Técnica Especial EX), (Ataque en Cadena) o (Técnica Definitiva), o al consumir 6 capas de (Agilidad de Serpiente) al activar (Ataque Cargado), se activará (Asistencia Rapida).", tags: ["Electrico"] },
                    { type: "Mindscape 2", name: "Mindscape 2", description: "El daño infligido por (Estallido de Veneno de Serpiente), (Técnica Especial EX), (Ataque Cargado) y (Técnica Definitiva) ignora un 15% de la Resistencia al Daño Eléctrico del objetivo; cada vez que se activan 2 veces (Estallido de Veneno de Serpiente) a través de la (Pasiva Central), se recuperan 100 puntos de valor de Decibelios.", tags: ["Electrico"] },
                    { type: "Mindscape 3", name: "Mindscape 3", description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2", tags: ["Electrico"] },
                    { type: "Mindscape 4", name: "Mindscape 4", description: "Al activar (Técnica Especial EX), (Ataque en Cadena) o (Técnica Definitiva), obtiene 1 capa de (Colmillo Venenoso), acumulable hasta un máximo de 3 capas; al activar (Ataque Cargado), consume todos los (Colmillos Venenosos), por cada 1 capa consumida activa adicionalmente 1 vez (Estallido de Veneno de Serpiente) que no consume (Veneno).", tags: ["Electrico"] },
                    { type: "Mindscape 5", name: "Mindscape 5", description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2", tags: ["Electrico"] },
                    { type: "Mindscape 6", name: "Mindscape 6", description: "Al golpear a un enemigo en estado de Aturdmiento con (Ataque en Cadena) o (Técnica Definitiva), obtiene adicionalmente 3 puntos de (Veneno); cuando el cuarto golpe del (Ataque Básico) golpea a un enemigo, en estado de aturdimiento, obtiene adicionalmente 1 punto de (Veneno); el daño infligido por (Ataque Cargado) aumenta un 30%.", tags: ["Electrico"] }
                ]
            },
            "v2.7.2": {
                versionLabel: "2.7.2",
                coreSkillScaling: [
                    ["3%", "0.52%", "12.88%", "242%"],
                    ["3.5%", "0.6%", "14.9%", "260%"],
                    ["4%", "0.68%", "16.92%", "278%"],
                    ["4.5%", "0.76%", "18.94%", "296%"],
                    ["5%", "0.84%", "20.96%", "314%"],
                    ["5.5%", "0.92%", "22.98%", "332%"],
                    ["6%", "1%", "25%", "350%"]
                ],
                skills: [
                    { type: "Ataque Básico", name: "Ataque Básico: Escupir Veneno", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cuatro ataques consecutivos hacia adelante infligiendo Daño Eléctrico; cuando el cuarto golpe del ataque golpea a un enemigo, obtiene 2 puntos de (Toxina), al golpear a un enemigo en estado de Aturdimiento, obtiene adicionalmente 1 punto de (Toxina)." },
                    { type: "Ataque Básico", name: "Ataque Cargado: Beso de Serpiente", description: "Al poseer (Sombra de Serpiente) mantener pulsado [Icono Ataque] para activar: Cissia salta en el aire y fija el objetivo, luego cae al suelo infligiendo Daño Eléctrico a los enemigos en el área; al activar el movimiento consume 1 capa de (Sombra de Serpiente); tras golpear al enemigo, consume rápidamente todas las (Toxinas) y activa (Hueso Corrosivo); al activar el movimiento, activará (Asistencia Rápida); posee efecto de invencibilidad durante la ejecución del movimiento." },
                    { type: "Ataque Básico", name: "Hueso Corrosivo", description: "Inflige Daño Eléctrico a los enemigos cercanos, cada vez que se activa, aumenta su propia Prababilidad Critica en un 6%, con una duración de 15 segundos, acumulable hasta un máxmimo de 3 capas, al activarse de nuevo se reinicia la duración; por cada 6 veces que se activa, obtiene 1 capa del efecto (Sombra de Serptiene), pudiendo obtener hasta un máxmimo de 2 capas; al entrar al campo de batalla, obtiene 1 capa del efecto (Sombra de Serpiente)." },
                    { type: "Evasión", name: "Evasión: Serpentear", description: "Pulsar [Icono Dodges]: Realiza una evasión rápida; posee efecto de invencibilidad durante la ejecuión del movimiento.", tags: ["Electrico"] },
                    { type: "Evasión", name: "Ataque de Carrera: Marca de Mordedura", description: "Al evadir, pulsar [Icono Ataque]: Realiza un ataque rápido hacia adelante, infligiendo Daño Eléctrico.", tags: ["Electrico"] },
                    { type: "Evasión", name: "Contraataque de Evasión: Devolver el Mordisco", description: "Tras activar una (Evasión Perfecta), pulsar [Icono Ataque]: Salta hacia adelante y realiza un ataque de barrio al aterrizar, infligiendo Daño Eléctrico; al golpear a un enemigo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Técnica Especial", name: "Técnica Especial: Dientes de Mono", description: "Pulsar [Icono Especial]: Lanza una mordedura de serpiente a larga distancia hacia adelante, infligiendo Daño Eléctrico; al golpear a un enemigo el nivel de resistencia a la interrupción aumenta durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Colmillo Venenoso", description: "Cuando la energía es suficiente, pulsar o mantener pulsado [Icono Especial EX]: Lanza múltiples mordeduras de serpientes a larga distancia hacia adelante, infligiendo Daño Eléctrico; al activar el movimiento, recupera 6 puntos de energía; al mantener pulsado, consumirá energía adicionalmente, cada 20 puntos activan un golpe adicional, infligiendo Daño Eléctrico, hasta consumir un máximo de 60 puntos de energía adicionales; tras mantener pulsado, obtiene 3 puntos de (Toxina), al mantener pulsado por cada 20 puntos de energía adicionales consumidos, obtiene 1 punto de (Toxina); al golpear a un enemigo; tras lanzar el movimiento, puede conectar directamente con el cuarto golpe del (Ataque Básico: Escupir Veneno); al golpear al enemigo con el movimiento, activará (Asistencia Rápida); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Asistencia", name: "Asistencia Rápida: Dispostivo de Alarma", description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist]: Salta hacia adelante y realiza un ataque de barrido al aterrizar, infligiendo Daño Eléctrico; al golpear a un enemigo, posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Asistencia", name: "Asistencia Defensiva: Comida de Prisión", description: "Cuando el personaje en el campo está a punto de ser atacado, pulsar [Icono Assist]: Realiza un parry al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Asistencia", name: "Ataque de Asistencia: Amistad de Cómplice", description: "Tras activar (Asistencia Definitiva), pulsar [Icono Ataque]: Realiza ataques continuos contra el objetivo, infligiendo una gran cantidad de Daño Eléctrico; al golpear a un enemigo, posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Pasiva Central", name: "Pasiva Central: Brebaje Letal", description: "Al entrar al campo de batalla, obtiene 3 puntos de (Toxina), en el modo de Cavidad Cero este efecto se activa como máximo una vez cada 180 segundos. Al poseer (Toxina), en estado de combate se consume 1 punto de (Toxina) cada 5 segundos, activando una vez (Hueso Corrosivo), causando Daño Eléctrico; hace que el Daño Eléctrico infligido por todos los personajes del equipo ignore un {VALOR_1} de la defensa del enemigo, si la Recuperación de Energía inicial automática es mayor a 1.4, por cada 0.12 que exceda, ignorará adicionalmente un {VALOR_2} de la defensa del enemigo, hasta ignorar un maximo de {VALOR_3} de la defensa del enemigo, dura hasta 30 segundos despues de que se agote el (Toxina). (Hueso Corrosivo) añade adicionalmente un Daño Electríco del {VALOR_4} del Ataque de Cissia; Cuando hay 1 o 2 personaje de Atributo Eléctrico en el equipo, el valor de aturdimiento causado por (Hueso Corrosivo) aumenta un 40%/60%; al obtener (Toxina), por cada 1 punto de (Toxina) que se desborde, se activa una vez (Hueso Corrosivo).", tags: ["Electrico"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional: Fermentación de Toxina", description: "Se activa cuando existe otro personaje (Aturdidor) o un personaje con el mismo Atributo que ella en el equipo: Al poseer (Toxina), aumenta el Daño Crítico de todos los personajes del equipo en un 30%, y aumenta adicionalmente el propio en un 20%, dura hasta 30 segundos después de que se agote el (Toxina).", tags: ["Electrico"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena: Crimen en Banda", description: "Al activar un (Ataque en Cadena), selecionar al personaje correspondiente para lanzar: Realiza múltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Eléctrico; tras lanar el movimiento, obtiene 3 puntos de (Toxina); al golpear a un enemigo; al golpear al enemigo con el movimiento, activará (Asistencia Rápida); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Técnica Definitiva", name: "Técnica Definitiva: Miedo Reptante", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva]: Realiza un ataque de aplastamiento hacia adelante, infligiendo una gran cantidad de Daño Eléctrico;tras lanzar el movimiento, obtiene 3 puntos de (Toxina); tras lanzar el movimiento, despliega (Velo Etereo: Ojo de Serpiente), con una duración de 30 segundos, durante este periodo la Probabilidad Crítica de todo el equipo aumenta un 8 %; Antes de volver a desplegar (Velo Etereo: Ojo de Serpiente), se cerrará el (Velo Etereo: Ojo de Serpiente) existente; al golpear al enemigo con el movimiento, activara (Asistencia Rápida); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Electrico"] },
                    { type: "Mindscape 1", name: "Viajero y Presa", description: "Al entrar al campo de batalla, los puntos de (Toxina) obtenidos aumentan a 6; el efecto de ignorar defensa enemiga en la (Pasiva Central) aumenta al 140% del original; el daño infligido por (Hueso Corrosivo) ignora un 20% de la Resistencia al Daño Eléctrico del objetivo.", tags: ["Electrico"] },
                    { type: "Mindscape 2", name: "Hambre y Mentiras", description: "Cuando la (Ataque en Cadena) o la (Técnica Definitiva) golpean a un enemigo en estado de Aturdimiento, obtiene adicionalmente 3 puntos de (Toxina); el daño infligido por (Ataque Cargado: Beso de Serpiente) aumenta un 35%.", tags: ["Electrico"] },
                    { type: "Mindscape 3", name: "Cadenas y Nido Cálido", description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2", tags: ["Electrico"] },
                    { type: "Mindscape 4", name: "Despertar del Villano", description: "Al activar (Técnica Especial EX), (Ataque en Cadena) o (Técnica Definitiva), obtiene 1 capa de (Colmillo Venenoso), acumulable hasta un máximo de 3 capas; al activar (Ataque Cargado: Beso de Serpiente), consume todos los (Colmillos Venenosos), por cada 1 capa consumida activa adicionalmente 1 vez (Hueso Corrosivo) que no consume (Toxina).", tags: ["Electrico"] },
                    { type: "Mindscape 5", name: "Perjurio y Colmillos", description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2", tags: ["Electrico"] },
                    { type: "Mindscape 6", name: "Casa y Calle Sexta", description: "...", tags: ["Electrico"] }


                ],
                hotfixes: [
                    {
                        id: 1,
                        revision: "14050658",
                        date: "2026-03-04",
                        skills: [
                            { type: "Ataque Básico", name: "Ataque Cargado: Beso de Serpiente", description: "Al poseer (Sombra de Serpiente) mantener pulsado [Icono Ataque] para activar: Cissia salta en el aire y fija el objetivo, luego cae al suelo infligiendo Daño Eléctrico a los enemigos en el área; durante el periodo de fijación, mantener pulsado [Icono Ataque] o arrastrar el stick permite extender el tiempo de fijación, y controlar libremente el punto de caída; al activar el movimiento consume 1 capa de (Sombra de Serpiente); tras golpear al enemigo, consume rápidamente todas las (Toxinas) y activa (Hueso Corrosivo); al activar el movimiento, activará (Asistencia Rápida); posee efecto de invencibilidad durante la ejecución del movimiento." },
                            { type: "Mindscape 6", name: "Casa y Calle Sexta", description: "Cada vez que se activa (Hueso Corrosivo), obtiene 1 capa de (Marca de Hueso Corrosivo); cuando cualquier personaje activa (Ataque Básico), (Ataque de Carrera) o (Contraataque de Evasión) y golpea a un enemigo, consume 1 capa de (Marca de Hueso Corrosivo), activando 1 vez un (Hueso Corrosivo) especial, este (Hueso Corrosivo) no puede acumular ni obtener (Sombra de Serpiente), cada personaje puede consumir como máximo 1 capa de (Marca de Hueso Corrosivo) en un intervalo de 0.5 segundos.", tags: ["Electrico"] }
                        ]
                    }
                ]
            }
        }
    }
}



/**
 * Get all available agents for the diff viewer
 * @returns {Array} Array of agent objects with id and name
 */
export function getAvailableAgents() {
    return Object.values(versionedAgents).map(agent => ({
        id: agent.id,
        name: agent.name
    }));
}

/**
 * Get available versions for a specific agent
 * @param {number} agentId - The agent ID
 * @returns {Array} Array of version labels
 */
export function getAgentVersions(agentId) {
    const agent = versionedAgents[agentId];
    if (!agent || !agent.versions) return [];
    return Object.keys(agent.versions);
}

/**
 * Get specific version data for an agent
 * @param {number} agentId - The agent ID
 * @param {string} versionLabel - The version label (e.g., "Beta 1", "V1")
 * @returns {Object|null} The version data or null if not found
 */
export function getAgentVersionData(agentId, versionLabel) {
    const agent = versionedAgents[agentId];
    if (!agent || !agent.versions || !agent.versions[versionLabel]) return null;
    return agent.versions[versionLabel];
}

/**
 * Get skills for an agent, normalizing structure
 * @param {number} agentId 
 * @returns {Array} Array of skill objects
 */
// Helper for fuzzy matching (kept for potential future use, but not primary)
function calculateSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();
    if (s1 === s2) return 1.0;

    // Simple token overlap
    const tokens1 = new Set(s1.split(/\s+/));
    const tokens2 = new Set(s2.split(/\s+/));
    const intersection = new Set([...tokens1].filter(x => tokens2.has(x)));
    const union = new Set([...tokens1, ...tokens2]);

    return intersection.size / union.size;
}

/**
 * Get skills for an agent, normalizing structure with index-based matching
 * Uses type + index within that type to match skills across versions
 * @param {number} agentId 
 * @returns {Array} Array of skill objects
 */
export function getAgentSkills(agentId) {
    const agent = versionedAgents[agentId];
    if (!agent) return [];

    // Type A: Skills already in top-level array (legacy format)
    if (agent.skills && Array.isArray(agent.skills)) {
        return agent.skills;
    }

    // Type B: Skills nested inside versions
    if (!agent.versions) return [];

    const allVersions = Object.keys(agent.versions).sort();
    const skillMap = new Map(); // key -> skillObj

    allVersions.forEach(version => {
        const vData = agent.versions[version];

        // Get the latest skills for this version (original + hotfix merged)
        const latestSkills = getLatestSkillsForVersion(vData);
        if (!latestSkills || !Array.isArray(latestSkills)) return;

        latestSkills.forEach(skill => {
            const type = skill.type || "Unknown";
            const name = skill.name || "Unknown";

            const key = `${type}::${name}`;

            if (!skillMap.has(key)) {
                skillMap.set(key, {
                    id: key,
                    type: type,
                    versions: {}
                });
            }

            skillMap.get(key).versions[version] = skill;
        });
    });

    return Array.from(skillMap.values());
}

/**
 * Merge hotfix skills into the original version skills
 * Returns the latest version of each skill (last hotfix wins)
 * @param {Object} versionData - The version data object
 * @returns {Array} Merged skills array
 */
function getLatestSkillsForVersion(versionData) {
    if (!versionData || !versionData.skills) return [];

    // If no hotfixes, return original skills
    if (!versionData.hotfixes || versionData.hotfixes.length === 0) {
        return versionData.skills;
    }

    // Start with original skills
    const skillsByType = new Map();
    versionData.skills.forEach(skill => {
        const key = `${skill.type}::${skill.name}`;
        skillsByType.set(key, { ...skill });
    });

    // Apply hotfixes in order (last hotfix wins)
    versionData.hotfixes.forEach(hotfix => {
        if (!hotfix.skills) return;
        hotfix.skills.forEach(hfSkill => {
            // Find the original skill by type to replace it
            // A hotfix skill replaces the skill with matching type
            const existingKeys = [...skillsByType.keys()].filter(k => k.startsWith(`${hfSkill.type}::`));
            if (existingKeys.length > 0) {
                // Remove old skill(s) of same type and add the hotfix version
                existingKeys.forEach(k => skillsByType.delete(k));
            }
            const key = `${hfSkill.type}::${hfSkill.name}`;
            skillsByType.set(key, { ...hfSkill });
        });
    });

    return Array.from(skillsByType.values());
}

/**
 * Get all hotfixes for a specific agent version
 * @param {number} agentId
 * @param {string} versionLabel
 * @returns {Array} Array of hotfix objects
 */
export function getAgentHotfixes(agentId, versionLabel) {
    const agent = versionedAgents[agentId];
    if (!agent || !agent.versions || !agent.versions[versionLabel]) return [];
    return agent.versions[versionLabel].hotfixes || [];
}

/**
 * Get a specific hotfix data
 * @param {number} agentId
 * @param {string} versionLabel
 * @param {number} hotfixId
 * @returns {Object|null} The hotfix data
 */
export function getAgentHotfixData(agentId, versionLabel, hotfixId) {
    const hotfixes = getAgentHotfixes(agentId, versionLabel);
    return hotfixes.find(hf => hf.id === hotfixId) || null;
}

/**
 * Get the version data with latest hotfix skills merged in
 * Used by the main diff view to always show the most current data
 * @param {number} agentId
 * @param {string} versionLabel
 * @returns {Object|null} Version data with merged skills
 */
export function getAgentLatestVersionData(agentId, versionLabel) {
    const versionData = getAgentVersionData(agentId, versionLabel);
    if (!versionData) return null;

    return {
        ...versionData,
        skills: getLatestSkillsForVersion(versionData)
    };
}

