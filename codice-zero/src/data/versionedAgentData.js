
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
    //             ],
    //             hotfixes: [
    //                 {
    //                     id: number,           // ID secuencial (1, 2, 3...) — se usa en la URL
    //                     revision: "string",    // Número de revisión del juego (ej: "14050658")
    //                     date: "YYYY-MM-DD",
    //                     skills: [
    //                         { type: "string", name: "string", description: "string", tags: ["string"] }
    //                         // Solo las habilidades que cambiaron en este hotfix
    //                     ]
    //                 }
    //             ]
    //         }
    //     }
    // }
    52: {
        id: 52,
        name: "Promeia",
        versions: {
            "v2.8.0": {
                versionLabel: "2.8.0",
                baseStats: {
                    hp: { min: 626, max: 7788 },
                    atk: { min: 126, max: 797 },
                    def: { min: 49, max: 612 },
                    impact: 86,
                    crit: "5%",
                    critDmg: "50%",
                    anomalyRate: "112",
                    anomalyMastery: "114",
                    penRatio: "0%",
                    energyRegen: "1.2"
                },
                coreStats: {
                    statName: "Tasa de Anomalía",
                    valuePerNode: 12
                },
                coreSkillScaling: [
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""]
                ],
                skills: [
                    { type: "Ataque Básico", name: "Ataque Básico: Sesgo", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cinco ataques consecutivos hacia adelante, infligiendo Daño Hielo; tras aterrizar el quinto ataque, pulsar [Icono Especial] permite conectar con la (Técnica Especial EX: Estilo de Ejecución - Veredicto); el cuarto ataque arroja la capa y luego entra en estado de (Perdón de Grilletes).", tags: ["Hielo"] },
                    { type: "Ataque Básico", name: "Ataque Cargado: Cuchilla Giratoria", description: "Mantener pulsado [Icono Ataque] para activar: Promeia salta hacia arriba lanzando un ataque, y arroja su capa junto al enemigo entrando en estado de (Perdón de Grilletes), infligiendo Daño Hielo.", tags: ["Hielo"] },
                    { type: "Ataque Básico", name: "Perdón de Grilletes", description: "Promeia arrojará su capa al ejecutar ciertos movimientos, cortando continuamente a los enemigos, infligiendo Daño Hielo; mientras la capa está arrojada, Promeia puede caminar lentamente; durante este periodo pulsar [Icono Ataque] permite conectar directamente con el quinto golpe del (Ataque Básico: Sesgo); durante este periodo si recibe un ataque puede activar automáticamente una (Evasión Perfecta), el efecto de evasión se activa como máximo una vez cada 20 segundos.", tags: ["Hielo"] },
                    { type: "Evasión", name: "Evasión: Paso de Nieve", description: "Pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Evasión", name: "Ataque de Carrera: Saqueo de Vida", description: "Al evadir, pulsar [Icono Ataque] para activar: Realiza un ataque rápido hacia adelante, infligiendo Daño Hielo.", tags: ["Hielo"] },
                    { type: "Evasión", name: "Contraataque de Evasión: Salto de Murciélago", description: "Tras activar (Evasión Perfecta), pulsar [Icono Ataque] para activar: Realiza ataques continuos contra el objetivo, infligiendo Daño Hielo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Asistencia", name: "Asistencia Rápida: Ataque Plegado", description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Lanza ataques continuos contra el objetivo, infligiendo Daño Hielo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Asistencia", name: "Asistencia Defensiva: Prohibición", description: "Cuando el personaje en el campo está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Asistencia", name: "Ataque de Asistencia: Intercepción", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza ataques continuos contra el objetivo, infligiendo Daño Hielo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Especial", name: "Técnica Especial: Estilo de Ejecución - Destello Helado", description: "Pulsar [Icono Especial] para activar: Lanza un ataque de dardos, infligiendo Daño Hielo.", tags: ["Hielo"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Sendero de Escarcha Degollador", description: "Cuando la energía es suficiente, pulsar [Icono Especial] para activar: Lanza un ataque de dardos y arroja la capa junto al enemigo entrando en estado de (Perdón de Grilletes), infligiendo Daño Hielo; si recibe un ataque enemigo poco después de iniciar el movimiento, conectará automáticamente con la (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta); si el movimiento golpea a un enemigo en estado de Aturdimiento, también conectará automáticamente con la (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta); al activar el movimiento, obtiene un punto de (Castigo de Escarcha); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Sombra Oculta", description: "Se activa automáticamente si recibe un ataque poco después de lanzar (Técnica Especial EX: Estilo de Ejecución - Sendero de Escarcha Degollador): Activa por un corto tiempo la (Visión Extrema), y se mueve rápidamente detrás del enemigo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo", description: "Al poseer (Castigo de Escarcha), en estado de (Perdón de Grilletes) pulsar [Icono Ataque] o en estado de (Perdón de Grilletes) pulsar [Icono Dodges] para activar: Salta hacia el enemigo, recuperando la capa mientras realiza un ataque descendente, infligiendo Daño Hielo; tras aterrizar, pulsar [Icono Especial] permite conectar con (Técnica Especial EX: Estilo de Ejecución - Veredicto); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada", description: "Tras activar (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta), pulsar [Icono Ataque] o [Icono Dodges] para activar: Lanza rápidamente múltiples ataques, luego salta hacia el enemigo recuperando la capa mientras realiza un ataque descendente más potente, infligiendo Daño Hielo; tras aterrizar, pulsar [Icono Especial] permite conectar con (Técnica Especial EX: Estilo de Ejecución - Veredicto); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Veredicto", description: "Tras el último golpe del (Ataque Básico: Sesgo), de la (Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo) o de la (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada), si el valor de (Erosión de Frío) es suficiente, pulsar [Icono Especial] para activar: Realiza una rápida esquiva hacia atrás al mismo tiempo que asesta un golpe final más poderoso, infligiendo Daño Hielo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena: Liquidación Invertida", description: "Al activar una (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Lanza dardos, colgando boca abajo sobre el enemigo realizando múltiples ataques, seguido de un golpe final, infligiendo una gran cantidad de Daño Hielo; cuando el golpe pesado golpea a un enemigo en estado de Anomalía de Atributo Hielo, estado de Anomalía de Atributo Etéreo, estado de Anomalía de Atributo Eléctrico, estado de Anomalía de Atributo Fuego o estado de Anomalía de Atributo Físico, activa 1 vez el efecto (Abloom), calculando una vez el 110% del daño de Anomalía de Atributo correspondiente; cuando el golpe pesado golpea a un enemigo en estado de Anomalía de Atributo Viento, activa un efecto especial de (Turbulencia de Hielo Roto), infligiendo un 6.5% del daño de Anomalía de Atributo Hielo original de (Turbulencia de Hielo Roto), el origen del daño es Promeia, y el daño causado por este efecto de (Turbulencia de Hielo Roto) se considera simultáneamente daño de (Abloom); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Definitiva", name: "Técnica Definitiva: Castigo Perforahuesos", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Realiza múltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Hielo; cuando el golpe pesado golpea a un enemigo en estado de Anomalía de Atributo Hielo, estado de Anomalía de Atributo Etéreo, estado de Anomalía de Atributo Eléctrico, estado de Anomalía de Atributo Fuego o estado de Anomalía de Atributo Físico, activa 1 vez el efecto (Abloom), calculando una vez el 780% del daño de Anomalía de Atributo correspondiente; cuando el golpe pesado golpea a un enemigo en estado de Anomalía de Atributo Viento, activa un efecto especial de (Turbulencia de Hielo Roto), infligiendo un 46.6% del daño de Anomalía de Atributo Hielo original de (Turbulencia de Hielo Roto), el origen del daño es Promeia, y el daño causado por este efecto de (Turbulencia de Hielo Roto) se considera simultáneamente daño de (Abloom); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Pasiva Central", name: "Pasiva Central: Fuego Robado", description: "Si la Tasa de Anomalía inicial de Promeia es mayor a 160 puntos, cada 1 punto que exceda el Tasa de Anomalía inicial aumentará la Maestría de Anomalía en 1.6 puntos; Promeia recupera 2 puntos de (Erosión de Frío) por segundo, al golpear a los enemigos con diferentes ataques, recupera una cierta cantidad de (Erosión de Frío), cuando un personaje del equipo activa el efecto (Congelación), el efecto (Desorden), el efecto (Turbulencia) o se activa la (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta), recupera adicionalmente 5/5/5/5 puntos de (Erosión de Frío), pudiendo acumular hasta un máximo de 100 puntos de (Erosión de Frío); al liberar el golpe final de la (Técnica Especial EX: Estilo de Ejecución - Veredicto) y golpear a un enemigo en estado de Anomalía de Atributo, consume 50 puntos de (Erosión de Frío), y dependiendo del estado de Anomalía de Atributo del enemigo, activa diferentes efectos: al golpear a un enemigo en estado de Anomalía de Atributo Hielo, estado de Anomalía de Atributo Etéreo, estado de Anomalía de Atributo Eléctrico, estado de Anomalía de Atributo Fuego o estado de Anomalía de Atributo Físico, activa 1 vez el efecto (Abloom), calculando de forma fija el 240% del daño de Anomalía de Atributo correspondiente; si esta (Técnica Especial EX: Estilo de Ejecución - Veredicto) fue activada después de la (Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo), activa adicionalmente 1 vez el efecto (Abloom), calculando de forma fija el 240% del daño de Anomalía de Atributo correspondiente; si esta (Técnica Especial EX: Estilo de Ejecución - Veredicto) fue activada después de la (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada), activa adicionalmente 2 veces el efecto (Abloom), calculando de forma fija respectivamente el 240% / 75% del daño de Anomalía de Atributo correspondiente; al golpear a un enemigo en estado de Anomalía de Atributo Viento, activa un efecto especial de (Turbulencia de Hielo Roto), infligiendo un 18% del daño de Anomalía de Atributo Hielo original de (Turbulencia de Hielo Roto), el origen del daño es Promeia, y el daño causado por este efecto de (Turbulencia de Hielo Roto) se considera simultáneamente daño de (Abloom), la (Turbulencia de Hielo Roto) especial no recupera (Erosión de Frío); si esta (Técnica Especial EX: Estilo de Ejecución - Veredicto) fue activada después de la (Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo) / (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada), el efecto de (Turbulencia de Hielo Roto) aumenta al 36% / 41.5% del daño de Anomalía de Atributo Hielo original de (Turbulencia de Hielo Roto).", tags: ["Hielo"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional: Beber Hielo", description: "Se activa cuando existe otro personaje de (Anomalía) o personaje de (Soporte) en el equipo: Al activar la (Técnica Especial EX), la Eficiencia de Acumulación de Atributo Hielo de Promeia aumenta en un 40%, con una duración de 30 segundos, al activarse de nuevo se reinicia la duración; cuando los ataques de Promeia golpean a un enemigo, el enemigo obtiene el estado de (Perforahuesos), la velocidad de recuperación de aturdimiento de los enemigos en estado de (Perforahuesos) se reduce en un 20%, con una duración de 30 segundos, al activarse de nuevo se reinicia la duración.", tags: ["Hielo"] }
                ]
            },
            "v2.8.1": {
                versionLabel: "v2.8.1",
                coreSkillScaling: [

                ],
                skills: [
                    { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Sendero de Escarcha Degollador", description: "Cuando la energía es suficiente, pulsar [Icono Especial] para activar: Lanza un ataque de dardos y arroja la capa junto al enemigo entrando en estado de (Perdón de Grilletes), infligiendo Daño Hielo; si recibe un ataque enemigo poco después de iniciar el movimiento, conectará automáticamente con la (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta); al activar el movimiento, Promeia obtiene el efecto (Regla de Hierro); posee efecto de invencibilidad durante la ejecución del movimiento", tags: ["Hielo"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo", description: "Al poseer el efecto (Regla de Hierro), en estado de (Perdón de Grilletes) pulsar [Icono Ataque] o pulsar [Icono Dodges] para activar: Salta hacia el enemigo, recuperando la capa mientras realiza un ataque descendente, infligiendo Daño Hielo; tras aterrizar, si posee (Castigo de Escarcha), pulsar o mantener pulsado [Icono Especial] permite conectar con la (Técnica Especial EX: Estilo de Ejecución - Veredicto); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada", description: "Tras activar (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta), pulsar [Icono Ataque] o [Icono Dodges] para activar: Lanza rápidamente múltiples ataques, luego salta hacia el enemigo recuperando la capa mientras realiza un ataque descendente más potente, infligiendo Daño Hielo; tras aterrizar, si posee (Castigo de Escarcha), pulsar o mantener pulsado [Icono Especial] permite conectar con la (Técnica Especial EX: Estilo de Ejecución - Veredicto); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Veredicto", description: "Tras el último golpe del (Ataque Básico: Sesgo), de la (Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo) o de la (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada), si el (Castigo de Escarcha) es suficiente, pulsar o mantener pulsado [Icono Especial] para activar: Realiza una rápida esquiva hacia atrás al mismo tiempo que asesta un golpe final más poderoso, infligiendo Daño Hielo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena: Liquidación Invertida", description: "Al activar una (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Lanza dardos, colgando boca abajo sobre el enemigo realizando múltiples ataques, seguido de un golpe final, infligiendo una gran cantidad de Daño Hielo; tras lanzar el movimiento, se puede conectar directamente con el cuarto golpe del (Ataque Básico: Sesgo); posee efecto de invencibilidad durante la ejecución del movimiento", tags: ["Hielo"] },
                    { type: "Técnica Definitiva", name: "Técnica Definitiva: Castigo Perforahuesos", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Realiza múltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Hielo; cuando el golpe pesado golpea a un enemigo en estado de Anomalía de Atributo Hielo, estado de Anomalía de Atributo Etéreo, estado de Anomalía de Atributo Eléctrico, estado de Anomalía de Atributo Fuego, estado de Anomalía de Atributo Físico o estado de Anomalía de Atributo Viento, activa 1 vez el efecto (Desorden), calculando de forma fija una vez el 780% del multiplicador de daño de Anomalía de Atributo correspondiente; tras lanzar el movimiento, se puede conectar directamente con el cuarto golpe del (Ataque Básico: Sesgo); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Pasiva Central", name: "Pasiva Central: Fuego Robado", description: "Si la Tasa de Anomalía inicial de Promeia es mayor a 120 puntos, cada 1 punto que exceda la Tasa de Anomalía inicial aumentará la Maestría de Anomalía en 1.8 puntos; al golpear a los enemigos con diferentes ataques, Promeia recupera una cierta cantidad de (Erosión de Frío), cuando un personaje del equipo activa el efecto (Congelación), el efecto (Turbulencia), o se activa la (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta), recupera adicionalmente 5/5/5 puntos de (Erosión de Frío), pudiendo acumular hasta un máximo de 100 puntos de (Erosión de Frío); cuando el efecto (Desorden) activado por un compañero de equipo golpea a un enemigo, Promeia recupera adicionalmente 10 puntos de (Erosión de Frío), se activa como máximo una vez cada 5 segundos; al aterrizar el quinto golpe del (Ataque Básico: Sesgo), la (Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo) o la (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada), si la (Erosión de Frío) es mayor o igual a 50 puntos, consumirá 50 puntos de (Erosión de Frío), convirtiéndolos en 1 punto de (Castigo de Escarcha), pudiendo obtener hasta un máximo de 2 puntos de (Castigo de Escarcha); cuando el golpe final de la (Técnica Especial EX: Estilo de Ejecución - Veredicto) o el golpe final de la (Ataque en Cadena: Liquidación Invertida) lanzado mientras posee (Castigo de Escarcha) golpea a un enemigo en estado de Anomalía de Atributo Hielo, estado de Anomalía de Atributo Etéreo, estado de Anomalía de Atributo Eléctrico, estado de Anomalía de Atributo Fuego, estado de Anomalía de Atributo Físico o estado de Anomalía de Atributo Viento, consume 1 punto de (Castigo de Escarcha) para activar 1 vez el efecto (Desorden), calculando de forma fija el 240% del daño de Anomalía de Atributo correspondiente; cuando el efecto (Desorden) activado por Promeia golpea a un enemigo, recupera adicionalmente 50 puntos de decibelios, se activa como máximo una vez cada 2 segundos; cuando el efecto (Desorden) activado por un compañero de equipo golpea a un enemigo, Promeia recupera adicionalmente 50 puntos de decibelios, se activa como máximo una vez cada 5 segundos; al activar la (Técnica Definitiva: Castigo Perforahuesos), Promeia obtiene los siguientes dos efectos: Tras activar (Técnica Especial EX: Estilo de Ejecución - Veredicto), (Ataque en Cadena: Liquidación Invertida) o (Técnica Definitiva: Castigo Perforahuesos), pulsar o mantener pulsado [Icono Especial] permite conectar directamente con la (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada); Al agotar el (Castigo de Escarcha), puede recuperar adicionalmente {EXCEL:13} puntos de (Castigo de Escarcha); Ambos efectos se pueden activar una vez cada uno tras lanzar la (Técnica Definitiva: Castigo Perforahuesos).", tags: ["Hielo"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional: Beber Hielo", description: "Se activa cuando existe otro personaje de (Anomalía) o personaje de (Soporte) en el equipo: Al activar la (Técnica Especial EX), la Eficiencia de Acumulación de Atributo Hielo de Promeia aumenta en un 40%, con una duración de 30 segundos, al activarse de nuevo se reinicia la duración; cuando la (Técnica Especial EX) de Promeia golpea a un enemigo, el enemigo obtiene el estado de (Presunción de Culpabilidad), cuando todo el equipo inflige daño de Anomalía de Atributo a un enemigo en estado de (Presunción de Culpabilidad) ignora una cierta cantidad de defensa, al causar el efecto de (Desorden) ignora adicionalmente una cierta cantidad de defensa; por cada punto de la Tasa de Anomalía inicial de Promeia que supere los 100 puntos, hará que el daño de Anomalía de Atributo ignore un 0.2% de defensa, y el efecto de (Desorden) ignore adicionalmente un 0.2% de defensa, el estado de (Presunción de Culpabilidad) dura 30 segundos, al activarse de nuevo se reinicia la duración.", tags: ["Hielo"] }
                ],
                hotfixes: [
                    {
                        id: 1,
                        revision: "14585784",
                        date: "2026-03-28",
                        skills: [
                            { type: "Pasiva Central", name: "Pasiva Central: Fuego Robado", description: "Si la Tasa de Anomalía inicial de Promeia es mayor a 120 puntos, cada 1 punto que exceda la Tasa de Anomalía inicial aumentará la Maestría de Anomalía en 1.8 puntos; al golpear a los enemigos con diferentes ataques, Promeia recupera una cierta cantidad de (Erosión de Frío), cuando un personaje del equipo activa el efecto (Congelación), el efecto (Turbulencia), o se activa la (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta), recupera adicionalmente 5/5/5 puntos de (Erosión de Frío), pudiendo acumular hasta un máximo de 100 puntos de (Erosión de Frío); cuando el efecto (Desorden) activado por un compañero de equipo golpea a un enemigo, Promeia recupera adicionalmente 10 puntos de (Erosión de Frío), se activa como máximo una vez cada 5 segundos; al aterrizar el quinto golpe del (Ataque Básico: Sesgo), la (Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo) o la (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada), si la (Erosión de Frío) es mayor o igual a 50 puntos, consumirá 50 puntos de (Erosión de Frío), convirtiéndolos en 1 punto de (Castigo de Escarcha), pudiendo obtener hasta un máximo de 2 puntos de (Castigo de Escarcha); cuando el golpe final de la (Técnica Especial EX: Estilo de Ejecución - Veredicto) o el golpe final de la (Ataque en Cadena: Liquidación Invertida) lanzado mientras posee (Castigo de Escarcha) golpea a un enemigo en estado de Anomalía de Atributo Hielo, estado de Anomalía de Atributo Etéreo, estado de Anomalía de Atributo Eléctrico, estado de Anomalía de Atributo Fuego, estado de Anomalía de Atributo Físico o estado de Anomalía de Atributo Viento, consume 1 punto de (Castigo de Escarcha) para activar 1 vez el efecto (Desorden), calculando de forma fija el 240% del daño de Anomalía de Atributo correspondiente; cuando el efecto (Desorden) activado por Promeia golpea a un enemigo, recupera adicionalmente 50 puntos de decibelios, se activa como máximo una vez cada 2 segundos; cuando el efecto (Desorden) activado por un compañero de equipo golpea a un enemigo, Promeia recupera adicionalmente 50 puntos de decibelios, se activa como máximo una vez cada 5 segundos; al activar la (Técnica Definitiva: Castigo Perforahuesos), Promeia obtiene los siguientes dos efectos: Tras activar (Técnica Especial EX: Estilo de Ejecución - Veredicto), (Ataque en Cadena: Liquidación Invertida) o (Técnica Definitiva: Castigo Perforahuesos), pulsar o mantener pulsado [Icono Especial] permite conectar directamente con la (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada); Al agotar el (Castigo de Escarcha), puede recuperar adicionalmente 1 punto de (Castigo de Escarcha); Ambos efectos se pueden activar una vez cada uno tras lanzar la (Técnica Definitiva: Castigo Perforahuesos).", tags: ["Hielo"] },

                        ]
                    }
                ]
            }
        }
    },
    53: {
        id: 53,
        name: "Starlight - Billy",
        versions: {
            "v2.8.1": {
                verisonLabel: "v2.8.1",
                baseStats: {
                    hp: { min: 683, max: 8497 },
                    atk: { min: 124, max: 784 },
                    def: { min: 36, max: 445 },
                    impact: 95,
                    crit: "5%",
                    critDmg: "50%",
                    anomalyRate: "90",
                    anomalyMastery: "89",
                    penRatio: "0%",
                    energyRegen: "1.2"
                },
                coreStats: {
                    statName: "crit rate",
                    valuePerNode: 4.8
                },
                coreSkillScaling: [
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""],
                    ["", "", "", ""]
                ],
                skills: [
                    { type: "Ataque Básico", name: "Ataque Básico: Ataque de Luz Estelar", description: "Estando en (Forma Libre), pulsar [Icono Ataque] para activar: Realiza hasta cuatro ataques hacia adelante, infligiendo Daño Físico; Cuando el movimiento golpea a un enemigo, recupera su propia Vida; Al activar el cuarto ataque, si antes de aterrizar se pulsa [Icono Especial], se puede activar rápidamente el (Ataque Básico: Embestida de Motocicleta) y entrar en (Estado de Motocicleta)." },
                    { type: "Ataque Básico", name: "Ataque Básico: Embestida de Motocicleta", description: "Estando en (Estado de Motocicleta), pulsar [Icono Ataque] para activar: Levanta la parte delantera de la motocicleta para acercarse rápidamente y atravesar a los enemigos, infligiendo Daño Físico; Cuando el movimiento golpea a un enemigo, obtiene (Valor Térmico); Al terminar el movimiento, pulsar [Icono Ataque] permite dar la vuelta rápidamente a la motocicleta." },
                    { type: "Ataque Básico", name: "Ataque Básico: Latigazo de Motocicleta", description: "Estando en (Estado de Motocicleta), al dar la vuelta rápidamente a la motocicleta, pulsar [Icono Ataque] para activar: Cuando el movimiento golpea a un enemigo, obtiene (Valor Térmico); Da un latigazo inmediatamente, utilizando la llama de la cola para atacar al enemigo, infligiendo Daño Físico." },
                    { type: "Ataque Básico", name: "Ataque Cargado: Espectáculo de Acrobacias", description: "Estando en (Estado de Motocicleta), mantener pulsado [Icono Ataque] para activar: El ataque se divide en tres etapas, infligiendo Daño Físico; Tras entrar en la tercera etapa, mantener pulsado [Icono Ataque] continuará el ataque por 2 segundos, si durante el movimiento se suelta [Icono Ataque] terminará el ataque, y si recibe un golpe en el instante en que termina, puede activar una (Evasión Perfecta). Tras activar una (Evasión Perfecta), realiza un giro Thomas; en esta situación, mantener pulsado [Icono Ataque] activará rápidamente la tercera etapa del (Ataque Básico: Espectáculo de Acrobacias), conservando el tiempo restante de la tercera etapa antes de recibir el golpe; cuando se agote el tiempo restante de la tercera etapa, se activará automáticamente el (Contraataque de Evasión: Levantamiento de Motocicleta) como finalizador, al golpear a un enemigo con este movimiento, obtiene (Valor Térmico)." },
                    { type: "Evasión", name: "Evasión: Deslizamiento", description: "Estando en (Forma Libre), pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; Posee efecto de invencibilidad durante la ejecución del movimiento." },
                    { type: "Evasión", name: "Evasión: Derrape", description: "Estando en (Estado de Motocicleta), pulsar [Icono Dodges] para activar: Puede activar (Evasión Perfecta); mantener pulsado continuará el derrape, posteriormente no podrá activar (Evasión Perfecta); Posee efecto de invencibilidad durante la ejecución del movimiento." },
                    { type: "Evasión", name: "Ataque de Carrera: Corte inverso de Luz Estelar", description: "Estando en (Estado Libre) y al evadir, pulsar [Icono Ataque] para activar: Realiza un corte rápido hacia adelante, infligiendo Daño Físico; Cuando el movimiento golpea a un enemigo, recupera su propia Vida." },
                    { type: "Evasión", name: "Contraataque de Evasión: Cañón de Mano", description: "Estando en (Estado Libre), tras activar una (Evasión Perfecta), pulsar [Icono Ataque] para activar: Dispara un cañón de mano hacia adelante, infligiendo Daño Físico; Cuando el movimiento golpea a un enemigo, recupera su propia Vida; Pulsar [Icono Ataque] antes de que termine el movimiento permite conectar con el cuarto golpe del (Ataque Básico); Posee efecto de invencibilidad durante la ejecución del movimiento." },
                    { type: "Evasión", name: "Contraataque de Evasión: Levantamiento de Motocicleta", description: "Estando en (Estado de Motocicleta), cuando se activa una (Evasión Perfecta) mediante (Evasión: Derrape) o (Técnica Especial: Subir al Vehículo), pulsar [Icono Ataque] para activar: Usa la motocicleta para lanzar al enemigo por los aires, infligiendo Daño Físico; Cuando el movimiento golpea a un enemigo, obtiene (Valor Térmico); Posee efecto de invencibilidad durante la ejecución del movimiento." },
                    { type: "Técnica Especial", name: "Técnica Especial: Subir al Vehículo", description: "Estando en (Estado Libre), pulsar [Icono Especial] para activar: Al activar el movimiento, entra en (Estado de Motocicleta), si recibe un golpe durante la ejecución del movimiento activará una (Evasión Perfecta), al activar la (Evasión Perfecta) recuperará Vida equivalente al 10% de su Vida Máxima; en este momento, pulsar [Icono Ataque] activa el (Contraataque de Evasión: Levantamiento de Motocicleta)." },
                    { type: "Técnica Especial", name: "Técnica Especial: Bajar del Vehículo", description: "Estando en (Estado de Motocicleta), pulsar [Icono Especial] para activar: Al activar el movimiento, entra en (Estado Libre), si recibe un golpe durante la ejecución del movimiento activará una (Evasión Perfecta), al activar la (Evasión Perfecta) recuperará una cantidad de Vida equivalente a un porcentaje de su Vida perdida, recuperando como máximo el 20% de la Vida; en este momento, pulsar [Icono Ataque] activa el (Contraataque de Evasión: Cañón de Mano)." },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Aplastamiento de Motocicleta", description: "Estando en (Estado Libre), pulsar [Icono Especial] para activar: Al activar el movimiento, entra en (Estado de Motocicleta), si recibe un golpe durante la ejecución del movimiento activará una (Evasión Perfecta), al activar la (Evasión Perfecta) recuperará Vida equivalente al 10% de su Vida Máxima; en este momento, pulsar [Icono Ataque] activa el (Contraataque de Evasión: Levantamiento de Motocicleta)." },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Patada Voladora de Caballero", description: "Estando en (Estado de Motocicleta), pulsar [Icono Especial] para activar: Al activar el movimiento, entra en (Estado Libre), si recibe un golpe durante la ejecución del movimiento activará una (Evasión Perfecta), al activar la (Evasión Perfecta) recuperará una cantidad de Vida equivalente a un porcentaje de su Vida perdida, recuperando como máximo el 20% de la Vida; en este momento, pulsar [Icono Ataque] activa el (Contraataque de Evasión: Cañón de Mano)." },
                    { type: "Asistencia", name: "Asistencia Rápida: Cañón de Mano", description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Dispara un cañón de mano hacia adelante, infligiendo Daño Físico; Pulsar [Icono Ataque] antes de que termine el movimiento permite conectar con el cuarto golpe del (Ataque Básico); Cuando el movimiento golpea a un enemigo, recupera su propia Vida; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Asistencia", name: "Habilidad de Entrada: Perforación de Motocicleta", description: "Cuando un miembro del equipo o él mismo activa una (Técnica Definitiva) o hace que el enemigo entre en estado de Aturdimiento, pulsar [Icono Assist] para cambiar de la retaguardia a la vanguardia y activar: Entra en (Forma de Motocicleta), conduciendo la motocicleta hacia el campo de batalla y atravesando a los enemigos, infligiendo Daño Físico; Este movimiento se considera una (Asistencia Rápida), esta Habilidad de Entrada se activa como máximo una vez cada 3 segundos; Cuando el movimiento golpea a un enemigo, obtiene (Valor Térmico); Al terminar el movimiento, si la Vida actual es inferior al 10% de la Vida Máxima, entra automáticamente en (Forma Libre); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Asistencia", name: "Asistencia Defensiva: Escudo de Vehículo", description: "Cuando el personaje en el campo está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Asistencia", name: "Ataque de Asistencia: Patada a Vehículo", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza un ataque de patada a vehículo sobre el objetivo, infligiendo una gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena: Cuchilla Rápida", description: "Al activar un (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Realiza un ataque de múltiples golpes hacia adelante, infligiendo una gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Técnica Definitiva", name: "Técnica Definitiva: Cañón Térmico de Luz Estelar", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Al activar el movimiento entra en (Estado de Motocicleta), lanza una carga de motocicleta hacia adelante, y tras finalizar la carga desata un rayo láser, infligiendo una gran cantidad de Daño Físico; Al terminar el movimiento entra en (Estado Libre), si después de desatar el rayo láser, la Vida actual no es inferior al 10% de la Vida Máxima, mantener pulsado [Icono Ataque] o [Icono Dodges] permite no entrar en (Estado Libre); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
                    { type: "Pasiva Central", name: "Pasica Central: Determinación de Caballero", description: "Starlight Billy aumentará adicionalmente su Fuerza Pura según su Vida Máxima, cada 1 punto de Vida Máxima aumentará 12 puntos de Fuerza Pura. El daño causado por los movimientos de Starlight Billy que infligen (Daño de Atributo Físico) es todo daño de Fuerza Pura, ignorando la defensa del enemigo, y utiliza la Fuerza Pura como multiplicador de daño del movimiento; cuando Starlight Billy entra al campo de batalla recupera inmediatamente 120 de energía de destello, en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos. Cuando Starlight Billy recibe daño letal, es inmune a ese daño y obtiene un escudo equivalente al 10% de su Vida Máxima, con una duración de 30 segundos, el daño recibido en un solo golpe no excederá el valor del escudo. Mientras Starlight Billy se encuentra en (Estado de Motocicleta) consumirá Vida continuamente, su Daño Crítico aumenta un 100%, el daño recibido se reduce un 40%, y su nivel de resistencia a la interrupción aumenta. En (Estado de Motocicleta), cuando la Vida de Starlight Billy cae por debajo del 1% de su Vida Máxima, Starlight Billy entrará en (Estado Libre). En (Estado de Motocicleta), cuando los movimientos causan daño recuperará (Valor Térmico), el límite máximo de (Valor Térmico) es de 100 puntos; cuando el (Valor Térmico) está lleno, la siguiente (Técnica Especial EX) se actualiza a (Técnica Especial EX: Patada Voladora de Caballero), al activar la (Técnica Especial EX: Patada Voladora de Caballero), consume todo el (Valor Térmico). Mientras Starlight Billy se encuentra en (Forma Libre), cuando algunos de sus movimientos causan daño recuperará su propia Vida, cuando la Vida actual de Starlight Billy no sea inferior al 10%, puede activar la (Técnica Especial: Subir al Vehículo) para entrar en (Forma de Motocicleta). Al activar la (Técnica Especial EX: Aplastamiento de Motocicleta) o al activar la (Técnica Especial: Cambiar a Forma Libre) / (Técnica Especial: Cambiar a Forma de Motocicleta) y desencadenar una (Evasión Perfecta), recuperará su propia Vida. Al activar el (Ataque Básico: Embestida de Motocicleta), (Ataque Básico: Derrape de Motocicleta) y (Contraataque de Evasión: Levantamiento de Motocicleta) obtendrá un escudo equivalente al 10% de su Vida Máxima, se puede activar 2 veces cada 4 segundos, el escudo es acumulable, dura 3 segundos, al activarse de nuevo se reinicia la duración." },
                    { type: "Habilidad Adicional", name: "", description: "Se activa cuando existe un personaje de (Aturdimiento), de (Defensa) o de (Soporte) en el equipo: Tras activar el (Ataque Básico: Cuarta Etapa), (Contraataque de Evasión: Cañón de Mano), (Ataque en Cadena: ) y (Técnica Definitiva: ) puede obtener una capa de (Mejora de Daño buff), con una duración de 20 segundos, acumulable hasta un máximo de 2 capas, cada capa de (Mejora de Daño buff) hará que el daño causado por la (Ataque en Cadena), (Técnica Definitiva), (Técnica Especial EX: Patada Voladora de Caballero), (Técnica Especial EX: Aplastamiento de Motocicleta) y el (Contraataque de Evasión: Levantamiento de Motocicleta) aumente un 20%." }
                ],
                hotfixes: [
                    {
                        id: 1,
                        revision: "14585784",
                        date: "2026-03-28",
                        coreSkillScaling: [
                            ["40%"],
                            ["47%"],
                            ["53%"],
                            ["60%"],
                            ["67%"],
                            ["73%"],
                            ["80%"]
                        ],
                        skills: [
                            { type: "Pasiva Central", name: "Pasiva Central: Determinación de Caballero", description: "Starlight - Billy aumentará adicionalmente su Fuerza Pura según su Vida Máxima, cada 1 punto de Vida Máxima aumentará 12 puntos de Fuerza Pura. El daño causado por los movimientos de Starlight - Billy que infligen Daño Físico es todo daño de Fuerza Pura, ignorando la defensa del enemigo, y utiliza la Fuerza Pura como multiplicador de daño del movimiento; cuando Starlight - Billy entra al campo de batalla recupera inmediatamente 3 puntos de energía de destello, en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos. Cuando Starlight - Billy recibe daño letal, es inmune a ese daño y obtiene un escudo equivalente al 10% de su Vida Máxima, con una duración de 30 segundos, el daño recibido en un solo golpe no excederá el valor del escudo. Mientras Starlight - Billy se encuentra en (Estado de Motocicleta) consumirá Vida continuamente, su Daño Crítico aumenta un {VALOR_1}, el daño recibido se reduce un 40%, y su nivel de resistencia a la interrupción aumenta. En (Estado de Motocicleta), cuando la Vida de Starlight - Billy cae por debajo del 1% de su Vida Máxima, Starlight - Billy entrará en (Estado Libre). En (Estado de Motocicleta), cuando los movimientos causan daño recuperará (Valor Térmico), el límite máximo de (Valor Térmico) es de 100 puntos; cuando el (Valor Térmico) está lleno, la siguiente (Técnica Especial EX) se actualiza a (Técnica Especial EX: Patada Voladora de Caballero), al activar la (Técnica Especial EX: Patada Voladora de Caballero), consume todo el (Valor Térmico). Mientras Starlight - Billy se encuentra en (Forma Libre), cuando algunos de sus movimientos causan daño recuperará su propia Vida, cuando la Vida actual de Starlight - Billy no sea inferior al 10%, puede activar la (Técnica Especial: Subir al Vehículo) para entrar en (Forma de Motocicleta). Al activar la (Técnica Especial EX: Aplastamiento de Motocicleta) o al activar la (Técnica Especial: Cambiar a Forma Libre) / (Técnica Especial: Cambiar a Forma de Motocicleta) y desencadenar una (Evasión Perfecta), recuperará su propia Vida. Al activar el (Ataque Básico: Embestida de Motocicleta), (Ataque Básico: Latigazo de Motocicleta) y (Contraataque de Evasión: Levantamiento de Motocicleta) obtendrá un escudo equivalente al 3% de su Vida Máxima, cada 3.5 segundos se puede activar 10 veces, el escudo es acumulable, dura 30 segundos, al activarse de nuevo se reinicia la duración.  " },
                            { type: "Habilidad Adicional", name: "", description: "Se activa cuando existe un personaje de (Aturdimiento), de (Defensa) o de (Soporte) en el equipo: Tras activar el (Ataque Básico: Cuarta Etapa), (Contraataque de Evasión: Cañón de Mano), (Ataque en Cadena: ) y (Técnica Definitiva: ) puede obtener una capa de (Mejora de Daño buff), con una duración de 20 segundos, acumulable hasta un máximo de 2 capas, cada capa de (Mejora de Daño buff) hará que el daño causado por la (Ataque en Cadena), (Técnica Definitiva), (Técnica Especial EX: Patada Voladora de Caballero), (Técnica Especial EX: Aplastamiento de Motocicleta) y el (Contraataque de Evasión: Levantamiento de Motocicleta) aumente un 15%." }

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

    // Start with a copy of original skills array (preserves order!)
    const result = versionData.skills.map(s => ({ ...s }));

    // Apply hotfixes in order (last hotfix wins)
    versionData.hotfixes.forEach(hotfix => {
        if (!hotfix.skills) return;
        hotfix.skills.forEach(hfSkill => {
            // Find matching skill by name (exact match)
            const idx = result.findIndex(s => s.name === hfSkill.name);
            if (idx !== -1) {
                // Replace in-place — keeps original position/order
                result[idx] = { ...hfSkill };
            }
            // If name not found, skill might be new — don't add to avoid duplication
        });
    });

    return result;
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

