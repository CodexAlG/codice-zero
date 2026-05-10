
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
    54: {
        id: 54,
        name: "Velina",
        versions: {
            "v3.0.1": {
                versionLabel: "3.0.1",
                elementColor: "#38bdf8",
                baseStats: {
                    hp: { min: 626, max: 7788 },
                    atk: { min: 126, max: 872 },
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
                    statName: "maestría de anomalía",
                    valuePerNode: 18
                },
                coreSkillScaling: [
                    ["0%"],
                    ["0%"],
                    ["0%"],
                    ["0%"],
                    ["0%"],
                    ["0%"],
                    ["0%"]
                ],
                skills: [
                    { type: "Ataque Básico", name: "Ataque Básico: Danza de Abanico", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cinco ataques hacia adelante, infligiendo (Daño Viento); tras lanzar el cuarto golpe del (Ataque Básico), si los (Puntos de Asistencia) son suficientes, mantener pulsado [Icono Ataque] permite consumir 2 (Puntos de Asistencia) para activar (Ataque de Asistencia).", tags: ["Viento"] },
                    { type: "Ataque Básico", name: "Ataque Básico: Danza de Abanico - Ojo de la Tormenta", description: "Cuando la (Energía de Viento) es mayor o igual a 90 puntos, mantener pulsado [Icono Ataque] para activar, también se puede activar manteniendo pulsado [Icono Ataque] tras (Ataque de Asistencia) y (Técnica Especial EX): Velina invoca un (Gran Campo de Viento) que ataca continuamente a los enemigos, y activa la (Asistencia Rápida) del personaje anterior; el (Gran Campo de Viento) dura 5 segundos, infligiendo (Daño Viento) a los enemigos circundantes una vez cada 0.5 segundos.", tags: ["Viento"] },
                    { type: "Evasión", name: "Evasión: Brisa Cepillante", description: "Pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                    { type: "Evasión", name: "Ataque de Carrera: Pisando el Viento", description: "Al evadir, pulsar [Icono Ataque] para activar: Realiza un ataque rápido hacia adelante, infligiendo (Daño Viento).", tags: ["Viento"] },
                    { type: "Evasión", name: "Contraataque de Evasión: Nube Quebrada", description: "Tras activar (Evasión Perfecta), pulsar [Icono Ataque] para activar: Lanza ataques continuos al objetivo, infligiendo (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                    { type: "Asistencia", name: "Asistencia Rápida: Plan de Emergencia", description: "Cuando el personaje actualmente en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Lanza ataques continuos al objetivo, infligiendo (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                    { type: "Asistencia", name: "Asistencia Defensiva: Intervención Discrecional", description: "Cuando el personaje de vanguardia está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de (Aturdimiento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                    { type: "Asistencia", name: "Ataque de Asistencia: Tácticas de Negociación", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza ataques continuos al objetivo, infligiendo (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                    { type: "Técnica Especial", name: "Técnica Especial: Cizalladura del Viento - Turbulencia", description: "Pulsar [Icono Especial] para activar: Abanica una ráfaga de viento hacia adelante, infligiendo (Daño Viento).", tags: ["Viento"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Cizalladura del Viento - Aclaramiento", description: "Cuando la energía es suficiente, pulsar [Icono Especial EX] para activar: Primero esquiva hacia atrás, luego abanica una enorme bala de viento para atacar a los enemigos, infligiendo (Daño Viento); durante la esquiva hacia atrás posee hitbox de evasión, si esquiva con éxito un ataque enemigo, activará (Visión Extrema); tras lanzar este movimiento, pulsar [Icono Ataque] permite conectar con el quinto golpe del (Ataque Básico), si los (Puntos de Asistencia) son suficientes, pulsar [Icono Ataque] permite consumir 2 (Puntos de Asistencia) para activar (Ataque de Asistencia); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Cizalladura del Viento - Triple Aliento Extinguido", description: "Cuando la energía es suficiente, mantener pulsado [Icono Especial EX] tras conectar con (Técnica Especial EX: Cizalladura del Viento - Aclaramiento), (Ataque de Asistencia), (Contraataque de Evasión) o (Asistencia Rápida) para activar: Agita continuamente el abanico, infligiendo (Daño Viento) a los enemigos; tras lanzar este movimiento, pulsar [Icono Ataque] permite conectar con el quinto golpe del (Ataque Básico); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena: Danza Giratoria Espléndida", description: "Al activar (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Se transforma en un huracán, realizando ataques de múltiples golpes a los enemigos, seguido de un golpe final, infligiendo una gran cantidad de (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                    { type: "Técnica Definitiva", name: "Técnica Definitiva: Escuchando el Aullido", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Realiza ataques de múltiples golpes hacia adelante, infligiendo una gran cantidad de (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                    { type: "Pasiva Central", name: "Pasiva Central: Ángel y Bruja", description: "Cuando la regeneración automática de energía inicial de Velina es mayor a 1, por cada 0.01 que exceda, la (Tasa de Anomalía) aumenta 0.7 puntos, y el daño infligido aumenta un 0.3%; Cuando Velina entra al campo de batalla, obtiene 45 puntos de (Energía de Viento), en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos, Velina al activar cualquier (Técnica Especial EX) obtendrá 45 puntos de (Energía de Viento), el límite de (Energía de Viento) es de 135 puntos; Cuando el (Gran Campo de Viento) invocado por Velina golpea a un enemigo en estado de (Impregnación), activará el efecto (Teñido), transformándose en un (Gran Campo de Viento) del atributo correspondiente, y causará daño del atributo correspondiente; Cuando el ataque del (Gran Campo de Viento) golpea a un enemigo, reducirá la resistencia a la acumulación de anomalía de atributo viento y la resistencia a la acumulación de anomalía del atributo correspondiente tras el (Teñido) del enemigo en un 10%, con una duración de 40 segundos, al activarse repetidamente reinicia el tiempo de duración; Cuando Velina activa (Turbulencia), invocará un (Pequeño Campo de Viento), infligiendo (Daño Viento), cuando el (Pequeño Campo de Viento) y el (Gran Campo de Viento) explotan y golpean a un enemigo en estado de anomalía de atributo viento, ambos causarán al objetivo 1 vez un daño de (Abloom): calcula adicionalmente una vez el daño de anomalía de atributo, calculando de forma fija el 210% y el 300% del multiplicador de daño de anomalía de atributo viento respectivamente; Cuando Velina activa (Turbulencia), obtendrá 1 (Punto de Mejora), este efecto se activa como máximo una vez cada 3 segundos, cuando Velina posee 2 (Puntos de Mejora), la próxima vez que Velina active (Turbulencia), el multiplicador de daño de esa (Turbulencia) aumentará un 450%, y ya no invocará un (Pequeño Campo de Viento) sino que invocará un (Gran Campo de Viento).", tags: ["Viento"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional: Etiqueta de la Fiesta de Té", description: "Se activa cuando existen 2 personajes de (Anomalía) o personajes del mismo atributo en el equipo: El daño de (Corrosión) y (Turbulencia) infligido por Velina aumenta un 15%, al activar (Técnica Definitiva), obtiene 2 (Puntos de Mejora); en (Pasiva Núcleo: Ángel y Bruja), el efecto de reducción de resistencia a la acumulación de anomalía de atributo causado por el (Gran Campo de Viento) aumenta un 10% adicional.", tags: ["Viento"] },
                    { type: "Mindscape 1", name: "Ideal Inmaculado", description: "Al entrar al campo de batalla, Velina obtiene inmediatamente 30 puntos de energía, en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos; Cuando Velina activa (Turbulencia) y (Corrosión), ignora un 15% de resistencia al daño de todos los atributos del objetivo." },
                    { type: "Mindscape 2", name: "Plan de Saturación", description: "Cuando Velina activa (Corrosión), también puede obtener 1 (Punto de Mejora), este efecto se activa como máximo una vez cada 5 segundos; tras ser (Teñido) el (Gran Campo de Viento), este puede acumular valor continuo de anomalía del atributo correspondiente, y el valor de acumulación de anomalía de atributo acumulado por este ataque no participa en el cálculo de daño de anomalía." },
                    { type: "Mindscape 3", name: "Conquista Ceremonial", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2." },
                    { type: "Mindscape 4", name: "La Fiesta de Té es el Juicio", description: "El ataque de Velina aumenta un 10%; al activar (Visión Extrema) mediante (Técnica Especial EX: Cizalladura del Viento - Aclaramiento), recupera 1 (Punto de Asistencia)." },
                    { type: "Mindscape 5", name: "Bruja Anunciadora de Muerte", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2." },
                    { type: "Mindscape 6", name: "Ángel Principal", description: "Cuando el golpe pesado de (Ataque de Asistencia: Tácticas de Negociación) golpea a un enemigo en estado de anomalía de atributo viento, causará al objetivo 1 vez un daño de (Abloom): calcula adicionalmente una vez el daño de anomalía de atributo, calculando de forma fija el 60% del multiplicador de daño de anomalía de atributo viento; Cuando el ataque de Velina golpea a un enemigo en estado de anomalía de atributo viento, el valor de acumulación de anomalía causado aumenta un 20%; Cuando Velina vuelve a aplicar (Corrosión) a un enemigo en estado de (Corrosión), aumentará el daño de esta (Corrosión) basándose en el tiempo de duración restante de la (Corrosión) anterior, por cada 1 segundo de duración restante el daño aumentará un 2%." }
                ],
                hotfixes: [
                    {
                        id: 1,
                        revision: "15370273",
                        date: "2026-04-30",
                        skills: [
                            { type: "Ataque Básico", name: "Ataque Básico: Danza de Abanico", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cinco ataques hacia adelante, infligiendo (Daño Viento); tras lanzar el cuarto golpe del (Ataque Básico), si los (Puntos de Asistencia) son suficientes, mantener pulsado [Icono Ataque] permite consumir 2 (Puntos de Asistencia) para activar (Ataque de Asistencia).", tags: ["Viento"] },
                            { type: "Ataque Básico", name: "Ataque Básico: Danza de Abanico - Ojo de la Tormenta", description: "Cuando la (Energía de Viento) es mayor o igual a 90 puntos, mantener pulsado [Icono Ataque] para activar, también se puede activar manteniendo pulsado [Icono Ataque] tras (Ataque de Asistencia) y (Técnica Especial EX): Velina invoca un (Gran Campo de Viento) que ataca continuamente a los enemigos, y activa la (Asistencia Rápida) del personaje anterior; el (Gran Campo de Viento) dura 5 segundos, infligiendo (Daño Viento) a los enemigos circundantes una vez cada 0.5 segundos.", tags: ["Viento"] },
                            { type: "Evasión", name: "Evasión: Brisa Cepillante", description: "Pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Evasión", name: "Ataque de Carrera: Pisando el Viento", description: "Al evadir, pulsar [Icono Ataque] para activar: Realiza un ataque rápido hacia adelante, infligiendo (Daño Viento).", tags: ["Viento"] },
                            { type: "Evasión", name: "Contraataque de Evasión: Nube Quebrada", description: "Tras activar (Evasión Perfecta), pulsar [Icono Ataque] para activar: Lanza ataques continuos al objetivo, infligiendo (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Asistencia", name: "Asistencia Rápida: Plan de Emergencia", description: "Cuando el personaje actualmente en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Lanza ataques continuos al objetivo, infligiendo (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Asistencia", name: "Asistencia Defensiva: Intervención Discrecional", description: "Cuando el personaje de vanguardia está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de (Aturdimiento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Asistencia", name: "Ataque de Asistencia: Tácticas de Negociación", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza ataques continuos al objetivo, infligiendo (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Técnica Especial", name: "Técnica Especial: Cizalladura del Viento - Turbulencia", description: "Pulsar [Icono Especial] para activar: Abanica una ráfaga de viento hacia adelante, infligiendo (Daño Viento).", tags: ["Viento"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Cizalladura del Viento - Aclaramiento", description: "Cuando la energía es suficiente, pulsar [Icono Especial EX] para activar: Primero esquiva hacia atrás, luego abanica una enorme bala de viento para atacar a los enemigos, infligiendo (Daño Viento); durante la esquiva hacia atrás posee hitbox de evasión, si esquiva con éxito un ataque enemigo, activará (Visión Extrema); tras lanzar este movimiento, pulsar [Icono Ataque] permite conectar con el quinto golpe del (Ataque Básico), si los (Puntos de Asistencia) son suficientes, pulsar [Icono Ataque] permite consumir 2 (Puntos de Asistencia) para activar (Ataque de Asistencia); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Cizalladura del Viento - Triple Aliento Extinguido", description: "Cuando la energía es suficiente, mantener pulsado [Icono Especial EX] tras conectar con (Técnica Especial EX: Cizalladura del Viento - Aclaramiento), (Ataque de Asistencia), (Contraataque de Evasión) o (Asistencia Rápida) para activar: Agita continuamente el abanico, infligiendo (Daño Viento) a los enemigos; tras lanzar este movimiento, pulsar [Icono Ataque] permite conectar con el quinto golpe del (Ataque Básico); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Técnica Definitiva", name: "Ataque en Cadena: Danza Giratoria Espléndida", description: "Al activar (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Se transforma en un huracán, realizando ataques de múltiples golpes a los enemigos, seguido de un golpe final, infligiendo una gran cantidad de (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Técnica Definitiva", name: "Técnica Definitiva: Escuchando el Aullido", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Realiza ataques de múltiples golpes hacia adelante, infligiendo una gran cantidad de (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Pasiva Central", name: "Pasiva Central: Ángel y Bruja", description: "Cuando la regeneración automática de energía inicial de Velina es mayor a 1, por cada 0.01 que exceda, la (Tasa de Anomalía) aumenta 0.6 puntos, y el daño infligido aumenta un 0.3%; Cuando Velina entra al campo de batalla, obtiene 45 puntos de Energía de Viento, en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos, Velina al activar cualquier (Técnica Especial EX) obtendrá 45 puntos de Energía de Viento, el límite de Energía de Viento es de 135 puntos; Cuando el (Gran Campo de Viento) invocado por Velina golpea a un enemigo en estado de (Impregnación), activará el efecto (Teñido), transformándose en un (Gran Campo de Viento) del atributo correspondiente, y causará daño del atributo correspondiente; Cuando el ataque del (Gran Campo de Viento) golpea a un enemigo, reducirá la (Res Acumulación de Anomalía Viento) y la (Res Acumulación de Anomalía) del atributo correspondiente tras el (Teñido) del enemigo en un 8%, con una duración de 40 segundos, al activarse repetidamente reinicia el tiempo de duración; Cuando Velina activa (Turbulencia), invocará un (Pequeño Campo de Viento), infligiendo Daño Viento, cuando el (Pequeño Campo de Viento) y el (Gran Campo de Viento) explotan y golpean a un enemigo en estado de (Anomalía) de atributo viento, ambos causarán al objetivo 1 vez un daño de (Abloom): calcula adicionalmente una vez el (Daño de Anomalía) de atributo viento, calculando de forma fija el 230% y el 365% del (Multiplicador de Daño de Anomalía Viento) respectivamente; Cuando Velina activa (Turbulencia), obtendrá 1 (Punto de Mejora), este efecto se activa como máximo una vez cada 3 segundos, cuando Velina posee 2 (Puntos de Mejora), la próxima vez que Velina active (Turbulencia), el (Multiplicador de Daño) de esa (Turbulencia) aumentará un 300%, y ya no invocará un (Pequeño Campo de Viento) sino que invocará un (Gran Campo de Viento).", tags: ["Viento"] },
                            { type: "Habilidad Adicional", name: "Habilidad Adicional: Etiqueta de la Fiesta de Té", description: "Se activa cuando existen 2 personajes de (Anomalía) o personajes del mismo atributo en el equipo: El daño de Corrosión y (Turbulencia) infligido por Velina aumenta un 15%, al activar (Técnica Definitiva), obtiene 2 (Puntos de Mejora); en (Pasiva Núcleo: Ángel y Bruja), el efecto de reducción de (Res Acumulación de Anomalía) causado por el (Gran Campo de Viento) aumenta un 8% adicional.", tags: ["Viento"] },
                            { type: "Mindscape 1", name: "Ideal Inmaculado", description: "Al entrar al campo de batalla, Velina obtiene inmediatamente 30 puntos de energía, en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos; Cuando Velina activa (Turbulencia) y (Corrosión), ignora un 15% de resistencia al daño de todos los atributos del objetivo." },
                            { type: "Mindscape 2", name: "Plan de Saturación", description: "Cuando Velina activa (Corrosión), también puede obtener 1 (Punto de Mejora), este efecto se activa como máximo una vez cada 5 segundos; tras ser (Teñido) el (Gran Campo de Viento), este puede acumular valor continuo de anomalía del atributo correspondiente, y el valor de acumulación de anomalía de atributo acumulado por este ataque no participa en el cálculo de daño de anomalía." },
                            { type: "Mindscape 3", name: "Conquista Ceremonial", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2." },
                            { type: "Mindscape 4", name: "La Fiesta de Té es el Juicio", description: "El ataque de Velina aumenta un 10%; al activar (Visión Extrema) mediante (Técnica Especial EX: Cizalladura del Viento - Aclaramiento), recupera 1 (Punto de Asistencia)." },
                            { type: "Mindscape 5", name: "Bruja Anunciadora de Muerte", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2." },
                            { type: "Mindscape 6", name: "Ángel Principal", description: "Cuando el golpe pesado de (Ataque de Asistencia: Tácticas de Negociación) golpea a un enemigo en estado de anomalía de atributo viento, causará al objetivo 1 vez un daño de (Abloom): calcula adicionalmente una vez el daño de anomalía de atributo, calculando de forma fija el 60% del multiplicador de daño de anomalía de atributo viento; Cuando el ataque de Velina golpea a un enemigo en estado de anomalía de atributo viento, el valor de acumulación de anomalía causado aumenta un 20%; Cuando Velina vuelve a aplicar (Corrosión) a un enemigo en estado de (Corrosión), aumentará el daño de esta (Corrosión) basándose en el tiempo de duración restante de la (Corrosión) anterior, por cada 1 segundo de duración restante el daño aumentará un 2%." }
                        ]
                    }
                ]
            },
            "v3.0.2": {
                versionLabel: "3.0.2",
                elementColor: "#38bdf8",
                baseStats: {
                    hp: { min: 626, max: 7788 },
                    atk: { min: 126, max: 872 },
                    def: { min: 49, max: 612 },
                    impact: 86,
                    crit: "5%",
                    critDmg: "50%",
                    anomalyRate: "120",
                    anomalyMastery: "111",
                    penRatio: "0%",
                    energyRegen: "1.2"
                },
                coreStats: {
                    statName: "maestría de anomalía",
                    valuePerNode: 18
                },
                coreSkillScaling: [
                    ["0%"],
                    ["0%"],
                    ["0%"],
                    ["0%"],
                    ["0%"],
                    ["0%"],
                    ["0%"]
                ],
                skills: [
                            { type: "Ataque Básico", name: "Ataque Básico: Danza de Abanico", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cinco ataques hacia adelante, infligiendo Daño Viento; Durante la ejecución del quinto golpe del ataque, el nivel de resistencia a la interrupción de Velina aumenta, y el daño recibido se reduce un 40%.", tags: ["Viento"] },
                            { type: "Evasión", name: "Evasión: Brisa Cepillante", description: "Pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Evasión", name: "Ataque de Carrera: Pisando el Viento", description: "Al evadir, pulsar [Icono Ataque] para activar: Realiza un ataque rápido hacia adelante, infligiendo (Daño Viento).", tags: ["Viento"] },
                            { type: "Evasión", name: "Contraataque de Evasión: Nube Quebrada", description: "Tras activar (Evasión Perfecta), pulsar [Icono Ataque] para activar: Lanza ataques continuos al objetivo, infligiendo (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Asistencia", name: "Asistencia Rápida: Plan de Emergencia", description: "Cuando el personaje actualmente en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Lanza ataques continuos al objetivo, infligiendo (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Asistencia", name: "Asistencia Defensiva: Intervención Discrecional", description: "Cuando el personaje de vanguardia está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de (Aturdimiento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Asistencia", name: "Ataque de Asistencia: Tácticas de Negociación", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza ataques continuos al objetivo, infligiendo (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Técnica Especial", name: "Técnica Especial: Cizalladura del Viento - Turbulencia", description: "Pulsar [Icono Especial] para activar: Abanica una ráfaga de viento hacia adelante, infligiendo Daño Viento."},
                            { type: "Técnica Especial", name: "Técnica Especial EX: Cizalladura del Viento - Aclaramiento", description: "Cuando la energía es suficiente, pulsar [Icono Especial EX] para activar: Primero esquiva hacia atrás, luego abanica una enorme bala de viento para atacar a los enemigos, infligiendo Daño Viento; Durante la esquiva hacia atrás posee hitbox de evasión, si esquiva con éxito un ataque enemigo, activará (Visión Extrema); Tras lanzar este movimiento, pulsar [Icono Ataque] permite conectar con el quinto golpe del (Ataque Básico); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Cizalladura del Viento - Triple Aliento Extinguido", description: "Cuando la energía es suficiente, pulsar [Icono Especial EX] para activar: Primero esquiva hacia atrás, luego abanica una enorme bala de viento para atacar a los enemigos, infligiendo (Daño Viento); durante la esquiva hacia atrás posee hitbox de evasión, si esquiva con éxito un ataque enemigo, activará (Visión Extrema); tras lanzar este movimiento, pulsar [Icono Ataque] permite conectar con el quinto golpe del (Ataque Básico), si los (Puntos de Asistencia) son suficientes, pulsar [Icono Ataque] permite consumir 2 (Puntos de Asistencia) para activar (Ataque de Asistencia); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Cizalladura del Viento - Ojo de la Tormenta", description: "Cuando la (Flor de Viento) es mayor o igual a 90 puntos, mantener pulsado [Icono Ataque] o [Icono Especial] para activar: Velina invoca un (Ciclón Amplio) que ataca continuamente a los enemigos, y activa la (Asistencia Rápida) del personaje anterior; El (Ciclón Amplio) dura 5 segundos, infligiendo Daño Viento a los enemigos circundantes una vez cada 0.5 segundos.", tags: ["Viento"] },
                            { type: "Técnica Definitiva", name: "Ataque en Cadena: Danza Giratoria Espléndida", description: "Al activar (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Se transforma en un huracán, realizando ataques de múltiples golpes a los enemigos, seguido de un golpe final, infligiendo una gran cantidad de (Daño Viento); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Técnica Definitiva", name: "Técnica Definitiva: Escuchando el Aullido", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Realiza ataques de múltiples golpes hacia adelante, infligiendo una gran cantidad de Daño Viento; Tras lanzar este movimiento, activará la (Asistencia Rápida) del personaje anterior; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Viento"] },
                            { type: "Pasiva Central", name: "Pasiva Central: Mangas de Flor de Viento", description: "Cuando la regeneración automática de energía inicial de Velina es mayor a 1.2, por cada 0.01 que exceda, el daño infligido aumenta un 0.22%, la Tasa de Anomalía aumenta 0.5 puntos, la Tasa de Anomalía aumenta como máximo 84 puntos; Cuando Velina entra al campo de batalla, obtiene 45 puntos de (Flor de Viento), en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos, Velina al activar (Técnica Especial EX: Cizalladura del Viento - Aclaramiento) o (Técnica Especial EX: Cizalladura del Viento - Triple Aliento Extinguido) obtendrá 45 puntos de (Flor de Viento), el límite de (Flor de Viento) es de 135 puntos; Cuando el (Ciclón Amplio) invocado por Velina golpea a un enemigo en estado de (Impregnación), activará el efecto (Teñido), transformándose en un (Ciclón Amplio) del atributo correspondiente, y causará daño del atributo correspondiente; Cuando el ataque del (Ciclón Amplio) golpea a un enemigo, reducirá la resistencia a la acumulación de anomalía de atributo viento y la resistencia a la acumulación de anomalía del atributo correspondiente tras el (Teñido) del enemigo en un 8%, con una duración de 35 segundos, al activarse repetidamente reinicia el tiempo de duración; Cuando Velina activa (Turbulencia), invocará un (Micro Ciclón), infligiendo Daño Viento, cuando el (Micro Ciclón) y el (Ciclón Amplio) explotan y golpean a un enemigo en estado de anomalía de atributo viento al disiparse, ambos causarán al objetivo 1 vez un daño de (Abloom): calcula adicionalmente una vez el daño de anomalía de atributo, calculando de forma fija el 160% y el 280% del multiplicador de daño de anomalía de atributo viento respectivamente; Cuando Velina activa (Turbulencia), obtendrá 1 punto de (Erosión Eólica), este efecto se activa como máximo una vez cada 3 segundos, cuando Velina posee 2 puntos de (Erosión Eólica), la próxima vez que Velina active (Turbulencia), consumirá 2 puntos de (Erosión Eólica) haciendo que el multiplicador de daño de esta (Turbulencia) aumente un 300%, y ya no invocará un (Micro Ciclón) sino que invocará un (Ciclón Amplio), activar (Turbulencia) de esta manera no otorgará (Erosión Eólica); Cuando existe un (Ciclón Amplio) en el campo, si cualquier personaje del equipo elimina a un enemigo, puede prolongar la duración del (Ciclón Amplio) en 5 segundos, este efecto solo se puede activar una vez para el mismo (Ciclón Amplio), al mismo tiempo solo puede existir un (Ciclón Amplio).", tags: ["Viento"] },
                            { type: "Habilidad Adicional", name: "Habilidad Adicional: Etiqueta de la Fiesta de Té", description: "Se activa cuando existen 2 personajes de (Anomalía) o personajes del mismo atributo en el equipo: El daño de (Corrosión) y (Turbulencia) infligido por Velina aumenta un 12%, al activar (Técnica Definitiva), obtiene 2 puntos de (Erosión Eólica); En (Pasiva Núcleo: Mangas de Flor de Viento), el efecto de reducción de resistencia a la acumulación de anomalía de atributo causado por el (Ciclón Amplio) aumenta un 8% adicional, el valor de Aturdimiento causado aumenta un 30%, y el valor de acumulación de anomalía de atributo aumenta un 15%.", tags: ["Viento"] },
                            { type: "Mindscape 1", name: "Ideal Inmaculado", description: "En (Habilidad Adicional: Etiqueta de la Fiesta de Té), el valor de Aturdimiento adicional causado por el (Ciclón Amplio) aumenta al 20%; cuando Velina activa (Turbulencia) y (Corrosión), ignora un 18% de resistencia al daño de todos los atributos del objetivo." },
                            { type: "Mindscape 2", name: "Plan de Saturación", description: "Cuando Velina activa (Corrosión), también puede obtener 1 punto de (Erosión Eólica), este efecto se activa como máximo una vez cada 5 segundos; tras ser (Teñido) el (Ciclón Amplio), este puede acumular valor continuo de anomalía del atributo correspondiente, y el valor de acumulación de anomalía de atributo acumulado por este ataque no participa en el cálculo de daño de anomalía." },
                            { type: "Mindscape 3", name: "Conquista Ceremonial", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2." },
                            { type: "Mindscape 4", name: "La Fiesta de Té es el Juicio", description: "El ataque de Velina aumenta un 10%; al activar (Visión Extrema) mediante (Técnica Especial EX: Cizalladura del Viento - Aclaramiento), recupera 1 (Punto de Asistencia)." },
                            { type: "Mindscape 5", name: "Bruja Anunciadora de Muerte", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2." },
                            { type: "Mindscape 6", name: "Ángel Principal", description: "Tras el cuarto golpe de (Ataque Básico: Danza de Abanico), (Contraataque de Evasión), (Asistencia Rápida), (Técnica Especial EX), mantener pulsado [Icono Ataque] puede consumir 2 (Puntos de Asistencia) para conectar con (Ataque de Asistencia: Tácticas de Negociación); cuando el golpe pesado de (Ataque de Asistencia: Tácticas de Negociación) golpea a un enemigo en estado de anomalía de atributo viento, causará al objetivo 1 vez un daño de (Abloom): calcula adicionalmente una vez el daño de anomalía de atributo, calculando de forma fija el 120% del multiplicador de daño de anomalía de atributo viento; Cuando el ataque de Velina golpea a un enemigo en estado de anomalía de atributo viento, el valor de acumulación de anomalía causado aumenta un 20%; Cuando Velina vuelve a aplicar (Corrosión) a un enemigo en estado de (Corrosión), aumentará el daño de esta (Corrosión) basándose en el tiempo de duración restante de la (Corrosión) anterior, por cada 1 segundo de duración restante el daño aumentará un 2%, aumentando como máximo un 36%." }
                ]
        }
    }
    },
    55: {
        id: 55,
        name: "Norma",
        versions: {
            "v3.0.1": {
                versionLabel: "3.0.1",
                elementColor: "#ef4444",
                baseStats: {
                    hp: { min: 627, max: 7799 },
                    atk: { min: 110, max: 762 },
                    def: { min: 47, max: 582 },
                    impact: 112,
                    crit: "5%",
                    critDmg: "50%",
                    anomalyRate: "99",
                    anomalyMastery: "98",
                    penRatio: "0%",
                    energyRegen: "1.2"
                },
                coreStats: {
                    statName: "impacto",
                    valuePerNode: 6
                },
                coreSkillScaling: [
                    ["0.9%", "81%", "0.6%", "54%", "40%"],
                    ["0.9%", "81%", "0.6%", "54%", "40%"],
                    ["0.9%", "81%", "0.6%", "54%", "40%"],
                    ["0.9%", "81%", "0.6%", "54%", "40%"],
                    ["0.9%", "81%", "0.6%", "54%", "40%"],
                    ["0.9%", "81%", "0.6%", "54%", "40%"],
                    ["0.9%", "81%", "0.6%", "54%", "40%"]
                ],
                skills: [
                    { type: "Ataque Básico", name: "Ataque Básico: Seguro de Ingeniería", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cuatro ataques hacia adelante, infligiendo (Daño Fuego).", tags: ["Fuego"] },
                    { type: "Ataque Básico", name: "Ataque Básico: Truco de Sombrero", description: "Cuando Norma es el personaje actualmente en uso y se encuentra en estado de combate, obtiene un 230% de (Recursos Personales) por segundo; cuando tiene el (Sombrero) en la cabeza, mantener pulsado [Icono Ataque] para activar: tras disparar el cañón lanza el (Sombrero), haciendo que el (Sombrero) realice una ronda de disparos en el aire, infligiendo (Daño Fuego); cuando el movimiento golpea a un enemigo, activará la (Asistencia Rápida) del personaje anterior; una vez que el (Sombrero) es lanzado, acumulará y almacenará temporalmente (Recursos Personales) a la misma velocidad en lugar de Norma, durante este periodo no es necesario que Norma esté en el campo; cuando Norma vuelve a recoger el (Sombrero), obtendrá inmediatamente los (Recursos Personales) almacenados temporalmente, el sombrero puede almacenar temporalmente como máximo un 50% de (Recursos Personales); cuando los (Recursos Personales) almacenados temporalmente en el (Sombrero) alcanzan el límite, o cuando los (Recursos Personales) tras Norma recoger el sombrero pueden alcanzar el límite, el (Sombrero) acelerará inmediatamente y correrá hacia Norma; durante la ejecución del movimiento el nivel de resistencia a la interrupción aumenta.", tags: ["Fuego"] },
                    { type: "Evasión", name: "Evasión: Especificación de Desarrollo", description: "Pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                    { type: "Evasión", name: "Ataque de Carrera: Carrera de Fecha Límite", description: "Al evadir, pulsar [Icono Ataque] para activar: Gira y abre fuego a los alrededores, infligiendo (Daño Fuego).", tags: ["Fuego"] },
                    { type: "Evasión", name: "Contraataque de Evasión: Prueba de Cumplimiento", description: "Tras activar (Evasión Perfecta), pulsar [Icono Ataque] para activar: Hace que el taladro realice una perforación continua, infligiendo (Daño Fuego); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                    { type: "Asistencia", name: "Asistencia Rápida: Cobertura Retumbante", description: "Cuando el personaje actualmente en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Hace que el taladro realice una perforación continua, infligiendo (Daño Fuego); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                    { type: "Asistencia", name: "Asistencia Defensiva: Barrera Técnica", description: "Cuando el personaje de vanguardia está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee un rendimiento de parada excelente, al recibir ataques de alta intensidad se reduce el consumo de (Puntos de Asistencia); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                    { type: "Asistencia", name: "Ataque de Asistencia: Supresión Técnica", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza un ataque continuo al objetivo, infligiendo (Daño Fuego); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                    { type: "Técnica Especial", name: "Técnica Especial: Fusión a Alta Temperatura", description: "Pulsar [Icono Especial] para activar: Dispara el cañón, infligiendo (Daño Fuego).", tags: ["Fuego"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Cortina de Balas Uh-huh", description: "Cuando la energía es suficiente, pulsar [Icono Especial EX] para activar: Conduce la torreta para disparar continuamente y lanza diferentes tipos de misiles según el estado del enemigo: cuando el objetivo principal no está en estado de Aturdimiento, lanza proyectiles perforantes, infligiendo (Daño Fuego) y acumulando más (Valor de Aturdimiento); cuando el objetivo principal está en estado de Aturdimiento, lanza proyectiles de alto explosivo, infligiendo mayor (Daño Fuego); tras lanzar el movimiento, Norma obtiene un 20% de (Recursos Personales), y entra en estado de (Descarga de Fuego), con una duración de 40 segundos, durante (Descarga de Fuego), Norma colocará dos torretas de ataque automático para unirse al combate; mantener pulsado puede consumir energía continuamente y prolongar el tiempo de disparo hasta 2 segundos, por cada 1 punto de Sp consumido en exceso, Norma obtiene un 0.5% adicional de (Recursos Personales), y hace que la duración de (Descarga de Fuego) aumente adicionalmente 1 segundo; cuando el movimiento golpea a un enemigo, activará la (Asistencia Rápida) del personaje anterior; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Práctica de Tiro", description: "En combate, la torreta atacará automáticamente a los enemigos, infligiendo (Daño Fuego).", tags: ["Fuego"] },
                    { type: "Técnica Especial", name: "Técnica Especial EX: Experimento de Fuego", description: "Cuando cualquier personaje del equipo hace que el enemigo entre en estado de Aturdimiento, o cuando Norma consume (Recursos Personales) para activar (Ataque en Cadena), la torreta desplegará la cápsula de misiles, con una duración de 9 segundos; durante este periodo, el intervalo de ataque automático de la torreta se reduce, al atacar automáticamente lanzará adicionalmente diferentes tipos de misiles según el estado del enemigo: cuando el objetivo principal no está en estado de Aturdimiento, lanza proyectiles perforantes, infligiendo (Daño Fuego) y acumulando más (Valor de Aturdimiento); cuando el objetivo principal está en estado de Aturdimiento, lanza proyectiles de alto explosivo, infligiendo mayor (Daño Fuego).", tags: ["Fuego"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena: Perforación de Impacto", description: "Al activar (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Ordena a una gran cantidad de taladros realizar ataques de múltiples golpes al enemigo, infligiendo una gran cantidad de (Daño Fuego); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                    { type: "Técnica Definitiva", name: "Técnica Definitiva: Doctrina de Fuego Superior", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Invoca un misil grande para bombardear a los enemigos frente a ella, infligiendo una gran cantidad de (Daño Fuego); al activar el movimiento, obtiene inmediatamente un 80% de (Recursos Personales); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                    { type: "Pasiva Central", name: "Pasiva Núcleo: Orientación de Precisión", description: "Por cada 1% de Probabilidad Crítica que posea Norma, el Daño Crítico aumenta en un {VALOR_1}, aumentando adicionalmente como máximo un {VALOR_2}; Por cada 1% de Probabilidad Crítica que posea Norma, cuando los ataques de (Técnica Especial EX), (Ataque de Asistencia), (Técnica Definitiva) golpean a un enemigo, el valor de Aturdimiento causado aumenta en un {VALOR_3}, aumentando adicionalmente como máximo un {VALOR_4}; Al entrar al campo de batalla, Norma obtiene inmediatamente un 50% de (Recursos Personales), en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos; Después de que los (Recursos Personales) sean mayores o iguales al 80%, cuando se active la siguiente (Asistencia Rápida), consumirá un 80% de (Recursos Personales) y será reemplazada por un (Ataque en Cadena), al activar (Ataque en Cadena) de esta forma, recuperará adicionalmente 350 puntos de decibelios para el agente correspondiente.", tags: ["Fuego"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional: Ventaja de Enjambre", description: "Se activa cuando existe un personaje de (Atacante) o personaje de (Ruptura) en el equipo: cuando los ataques de Norma y sus creaciones golpean a un enemigo, aplican 1 capa de (Vulnerabilidad) al enemigo, acumulable hasta un máximo de 10 capas, cada capa de (Vulnerabilidad) puede aumentar el multiplicador de daño recibido por aturdimiento del objetivo en un 3%; los enemigos que posean cualquier número de capas de (Vulnerabilidad) tras entrar en estado de Aturdimiento, el tiempo de duración de su Aturdimiento aumenta en 3 segundos; durante (Descarga de Fuego), el ataque de Norma aumenta en 33.0, este efecto aumenta con el nivel del personaje, aumentando en 13 por cada nivel, hasta un máximo de 800; durante (Descarga de Fuego), el daño infligido por los agentes de todo el equipo aumenta en un {VALOR_5}.", tags: ["Fuego"] },
                    { type: "Mindscape 1", name: "Presbicia Radical", description: "En la (Técnica Especial EX: Experimento de Fuego), la duración de la torreta desplegando la cápsula de misiles aumenta a 12 segundos; cuando los proyectiles perforantes o proyectiles de alto explosivo de cualquier (Técnica Especial EX) golpean a un enemigo, hace que la resistencia a todos los atributos del daño del enemigo se reduzca en un 15%, con una duración de 15 segundos.", tags: ["Fuego"] },
                    { type: "Mindscape 2", name: "Axioma de Unificación de Todas las Cosas", description: "En (Habilidad Adicional: Ventaja de Enjambre), el multiplicador de daño recibido por aturdimiento proporcionado por cada capa de (Vulnerabilidad) aumenta al 6%; al activar (Ataque Básico: Truco de Sombrero), Norma recupera 25 puntos de energía, se activa como máximo una vez cada 20 segundos.", tags: ["Fuego"] },
                    { type: "Mindscape 3", name: "Paradoja de Villano Nato", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2.", tags: ["Fuego"] },
                    { type: "Mindscape 4", name: "Doctrina de Bangboo Superior", description: "Cuando Norma consume (Recursos Personales) para activar (Ataque en Cadena): Hace que los decibelios recuperados por el agente correspondiente aumenten en 50 puntos; y Norma recupera la misma cantidad de decibelios.", tags: ["Fuego"] },
                    { type: "Mindscape 5", name: "Gran Explosión Uh-huh", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2.", tags: ["Fuego"] },
                    { type: "Mindscape 6", name: "Primera Causa Genial", description: "Tras activar (Técnica Definitiva), Norma invocará continuamente misiles para bombardear a enemigos aleatorios en el campo, con una duración de 12 segundos, cada misil tiene un intervalo de 0.75 segundos, e inflige (Daño Fuego) a los enemigos dentro del rango equivalente al 280% del ataque de Norma, este daño será considerado como daño de (Técnica Definitiva), al activarse repetidamente reinicia el tiempo de duración.", tags: ["Fuego"] }
                ],
                hotfixes: [
                    {
                        id: 1,
                        revision: "15370273",
                        date: "2026-04-30",
                        coreSkillScaling: [
                            ["0.9%", "81%", "0.6%", "54%", "40%"],
                            ["0.9%", "81%", "0.6%", "54%", "40%"],
                            ["0.9%", "81%", "0.6%", "54%", "40%"],
                            ["0.9%", "81%", "0.6%", "54%", "40%"],
                            ["0.9%", "81%", "0.6%", "54%", "40%"],
                            ["0.9%", "81%", "0.6%", "54%", "40%"],
                            ["0.9%", "81%", "0.6%", "54%", "40%"]
                        ],
                        skills: [
                            { type: "Ataque Básico", name: "Ataque Básico: Seguro de Ingeniería", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cuatro ataques hacia adelante, infligiendo Daño Fuego.", tags: ["Fuego"] },
                            { type: "Ataque Básico", name: "Ataque Básico: Truco de Sombrero", description: "Cuando Norma es el personaje actualmente en uso y se encuentra en estado de combate, obtiene un 2.3% de (Recursos Personales) por segundo; cuando tiene el (Sombrero) en la cabeza, mantener pulsado [Icono Ataque] para activar: tras disparar el cañón lanza el (Sombrero), haciendo que el (Sombrero) realice una ronda de disparos en el aire, infligiendo Daño Fuego; cuando el movimiento golpea a un enemigo, activará la (Asistencia Rápida) del personaje anterior; una vez que el (Sombrero) es lanzado, acumulará y almacenará temporalmente (Recursos Personales) a la misma velocidad en lugar de Norma, durante este periodo no es necesario que Norma esté en el campo; cuando Norma vuelve a recoger el (Sombrero), obtendrá inmediatamente los (Recursos Personales) almacenados temporalmente, el sombrero puede almacenar temporalmente como máximo un 50% de (Recursos Personales); cuando los (Recursos Personales) almacenados temporalmente en el (Sombrero) alcanzan el límite, o cuando los (Recursos Personales) tras Norma recoger el sombrero pueden alcanzar el límite, el (Sombrero) acelerará inmediatamente y correrá hacia Norma; durante la ejecución del movimiento el nivel de resistencia a la interrupción aumenta.", tags: ["Fuego"] },
                            { type: "Evasión", name: "Evasión: Especificación de Desarrollo", description: "Pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Evasión", name: "Ataque de Carrera: Carrera de Fecha Límite", description: "Al evadir, pulsar [Icono Ataque] para activar: Gira y abre fuego a los alrededores, infligiendo Daño Fuego.", tags: ["Fuego"] },
                            { type: "Evasión", name: "Contraataque de Evasión: Prueba de Cumplimiento", description: "Tras activar (Evasión Perfecta), pulsar [Icono Ataque] para activar: Hace que el taladro realice una perforación continua, infligiendo Daño Fuego; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Asistencia", name: "Asistencia Rápida: Cobertura Retumbante", description: "Cuando el personaje actualmente en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Hace que el taladro realice una perforación continua, infligiendo Daño Fuego; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Asistencia", name: "Asistencia Defensiva: Barrera Técnica", description: "Cuando el personaje de vanguardia está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de (Aturdimiento); posee un rendimiento de parada excelente, al recibir ataques de alta intensidad se reduce el consumo de (Puntos de Asistencia); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Asistencia", name: "Ataque de Asistencia: Supresión Técnica", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza un ataque continuo al objetivo, infligiendo Daño Fuego; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Técnica Especial", name: "Técnica Especial: Fusión a Alta Temperatura", description: "Pulsar [Icono Especial] para activar: Dispara el cañón, infligiendo Daño Fuego.", tags: ["Fuego"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Cortina de Balas Uh-huh", description: "Cuando la energía es suficiente, pulsar [Icono Especial EX] para activar: Conduce la torreta para disparar continuamente y lanza diferentes tipos de misiles según el estado del enemigo: cuando el objetivo principal no está en estado de (Aturdimiento), lanza proyectiles perforantes, infligiendo Daño Fuego y acumulando más (Valor de Aturdimiento); cuando el objetivo principal está en estado de (Aturdimiento), lanza proyectiles de alto explosivo, infligiendo mayor Daño Fuego; tras lanzar el movimiento, Norma obtiene un 20% de (Recursos Personales), y entra en estado de (Descarga de Fuego), con una duración de 40 segundos, durante (Descarga de Fuego), Norma colocará dos torretas de ataque automático para unirse al combate; mantener pulsado puede consumir energía continuamente y prolongar el tiempo de disparo hasta 2 segundos, por cada 1 punto de Sp consumido en exceso, Norma obtiene un 0.5% adicional de (Recursos Personales), y hace que la duración de (Descarga de Fuego) aumente adicionalmente 1 segundo; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Práctica de Tiro", description: "En combate, la torreta atacará automáticamente a los enemigos, infligiendo Daño Fuego.", tags: ["Fuego"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Experimento de Fuego", description: "Cuando cualquier personaje del equipo hace que el enemigo entre en estado de (Aturdimiento), o cuando Norma consume (Recursos Personales) para activar (Ataque en Cadena), la torreta desplegará la cápsula de misiles, con una duración de 9 segundos; durante este periodo, el intervalo de ataque automático de la torreta se reduce, al atacar automáticamente lanzará adicionalmente diferentes tipos de misiles según el estado del enemigo: cuando el objetivo principal no está en estado de (Aturdimiento), lanza proyectiles perforantes, infligiendo Daño Fuego y acumulando más (Valor de Aturdimiento); cuando el objetivo principal está en estado de (Aturdimiento), lanza proyectiles de alto explosivo, infligiendo mayor Daño Fuego.", tags: ["Fuego"] },
                            { type: "Técnica Definitiva", name: "Ataque en Cadena: Perforación de Impacto", description: "Al activar (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Ordena a una gran cantidad de taladros realizar ataques de múltiples golpes al enemigo, infligiendo una gran cantidad de Daño Fuego; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Técnica Definitiva", name: "Técnica Definitiva: Doctrina de Fuego Superior", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Invoca un misil grande para bombardear a los enemigos frente a ella, infligiendo una gran cantidad de Daño Fuego; al activar el movimiento, obtiene inmediatamente un 80% de (Recursos Personales); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Pasiva Central", name: "Pasiva Núcleo: Orientación de Precisión", description: "Por cada 1% de Probabilidad Crítica que posea Norma, el (Daño Crítico) aumenta en un {VALOR_1}, aumentando adicionalmente como máximo un {VALOR_2}; Por cada 1% de Probabilidad Crítica que posea Norma, cuando los ataques de (Técnica Especial EX), (Ataque de Asistencia), (Técnica Definitiva) golpean a un enemigo, el valor de (Aturdimiento) causado aumenta en un {VALOR_3}, aumentando adicionalmente como máximo un {VALOR_4}; Al entrar al campo de batalla, Norma obtiene inmediatamente un 50% de (Recursos Personales), en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos; Después de que los (Recursos Personales) sean mayores o iguales al 80%, cuando se active la siguiente (Asistencia Rápida), consumirá un 80% de (Recursos Personales) y será reemplazada por un (Ataque en Cadena), al activar (Ataque en Cadena) de esta forma, recuperará adicionalmente 350 puntos de decibelios para el agente correspondiente.", tags: ["Fuego"] },
                            { type: "Habilidad Adicional", name: "Habilidad Adicional: Ventaja de Enjambre", description: "Se activa cuando existe un personaje de (Atacante) o personaje de (Ruptura) en el equipo: cuando los ataques de Norma y sus creaciones golpean a un enemigo, aplican 1 capa de (Vulnerabilidad) al enemigo, acumulable hasta un máximo de 10 capas, cada capa de (Vulnerabilidad) puede aumentar el multiplicador de daño recibido por aturdimiento del objetivo en un 3%; los enemigos que posean cualquier número de capas de (Vulnerabilidad) tras entrar en estado de (Aturdimiento), el tiempo de duración de su (Aturdimiento) aumenta en 3 segundos; durante (Descarga de Fuego), el ataque de Norma aumenta en 33.0, este efecto aumenta con el nivel del personaje, aumentando en 13 por cada nivel, hasta un máximo de 800; durante (Descarga de Fuego), el daño infligido por los agentes de todo el equipo aumenta en un {VALOR_5}.", tags: ["Fuego"] },
                            { type: "Mindscape 1", name: "Presbicia Radical", description: "En la (Técnica Especial EX: Experimento de Fuego), la duración de la torreta desplegando la cápsula de misiles aumenta a 12 segundos; cuando los proyectiles perforantes o proyectiles de alto explosivo de cualquier (Técnica Especial EX) golpean a un enemigo, hace que la resistencia a todos los atributos del daño del enemigo se reduzca en un 15%, con una duración de 15 segundos.", tags: ["Fuego"] },
                            { type: "Mindscape 2", name: "Axioma de Unificación de Todas las Cosas", description: "En (Habilidad Adicional: Ventaja de Enjambre), el multiplicador de daño recibido por aturdimiento proporcionado por cada capa de (Vulnerabilidad) aumenta al 6%; al activar (Ataque Básico: Truco de Sombrero), Norma recupera 25 puntos de energía, se activa como máximo una vez cada 20 segundos.", tags: ["Fuego"] },
                            { type: "Mindscape 3", name: "Paradoja de Villano Nato", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2.", tags: ["Fuego"] },
                            { type: "Mindscape 4", name: "Doctrina de Bangboo Superior", description: "Cuando Norma consume (Recursos Personales) para activar (Ataque en Cadena): Hace que los decibelios recuperados por el agente correspondiente aumenten en 50 puntos; y Norma recupera la misma cantidad de decibelios.", tags: ["Fuego"] },
                            { type: "Mindscape 5", name: "Gran Explosión Uh-huh", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2.", tags: ["Fuego"] },
                            { type: "Mindscape 6", name: "Primera Causa Genial", description: "Tras activar (Técnica Definitiva), Norma invocará continuamente misiles para bombardear a enemigos aleatorios en el campo, con una duración de 12 segundos, cada misil tiene un intervalo de 0.75 segundos, e inflige Daño Fuego a los enemigos dentro del rango equivalente al 280% del ataque de Norma, este daño será considerado como daño de (Técnica Definitiva), al activarse repetidamente reinicia el tiempo de duración.", tags: ["Fuego"] }
                        ]
                    }
                ]
            },
            "v3.0.2": {
                versionLabel: "3.0.2",
                elementColor: "#ef4444",
                coreSkillScaling: [
                            ["0.5%", "45%", "0.35%", "32%", "30%"],
                            ["0.58%", "53%", "0.41%", "37%", "30%"],
                            ["0.67%", "60%", "0.47%", "42%", "30%"],
                            ["0.75%", "68%", "0.53%", "47%", "30%"],
                            ["0.83%", "75%", "0.58%", "53%", "30%"],
                            ["0.92%", "83%", "0.64%", "58%", "30%"],
                            ["1%", "90%", "0.7%", "63%", "30%"]
                        ],
                        skills: [
                            { type: "Ataque Básico", name: "Ataque Básico: Seguro de Ingeniería", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cuatro ataques hacia adelante, infligiendo Daño Fuego.", tags: ["Fuego"] },
                            { type: "Ataque Básico", name: "Ataque Básico: Truco de Sombrero", description: "Cuando Norma es el personaje actualmente en uso y se encuentra en estado de combate, obtiene un 2% de (Recursos Personales) por segundo; cuando tiene el (Sombrero) en la cabeza, mantener pulsado [Icono Ataque] para activar: tras disparar el cañón lanza el (Sombrero), haciendo que el (Sombrero) realice una ronda de disparos en el aire, infligiendo (Daño Fuego) y almacenando temporalmente (Recursos Personales); cuando el movimiento golpea a un enemigo, activará la (Asistencia Rápida) del personaje anterior; una vez que el (Sombrero) es lanzado, acumulará y almacenará temporalmente (Recursos Personales) a la misma velocidad en lugar de Norma, durante este periodo no es necesario que Norma esté en el campo; cuando Norma vuelve a recoger el (Sombrero), obtendrá inmediatamente los (Recursos Personales) almacenados temporalmente; mantener pulsado [Icono Ataque] hace que el (Sombrero) acelere y corra hacia Norma; cuando los (Recursos Personales) almacenados temporalmente tras Norma recoger el (Sombrero) alcanzan el 80%, el (Sombrero) acelerará automáticamente y correrá hacia Norma; durante la ejecución del movimiento el nivel de resistencia a la interrupción aumenta.", tags: ["Fuego"] },
                            { type: "Evasión", name: "Evasión: Especificación de Desarrollo", description: "Pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Evasión", name: "Ataque de Carrera: Carrera de Fecha Límite", description: "Al evadir, pulsar [Icono Ataque] para activar: Gira y abre fuego a los alrededores, infligiendo Daño Fuego.", tags: ["Fuego"] },
                            { type: "Evasión", name: "Contraataque de Evasión: Prueba de Cumplimiento", description: "Tras activar (Evasión Perfecta), pulsar [Icono Ataque] para activar: Hace que el taladro realice una perforación continua, infligiendo Daño Fuego; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Asistencia", name: "Asistencia Rápida: Cobertura Retumbante", description: "Cuando el personaje actualmente en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Hace que el taladro realice una perforación continua, infligiendo Daño Fuego; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Asistencia", name: "Asistencia Defensiva: Barrera Técnica", description: "Cuando el personaje de vanguardia está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de (Aturdimiento); posee un rendimiento de parada excelente, al recibir ataques de alta intensidad se reduce el consumo de (Puntos de Asistencia); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Asistencia", name: "Ataque de Asistencia: Supresión Técnica", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza un ataque continuo al objetivo, infligiendo Daño Fuego; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Técnica Especial", name: "Técnica Especial: Fusión a Alta Temperatura", description: "Pulsar [Icono Especial] para activar: Dispara el cañón, infligiendo Daño Fuego.", tags: ["Fuego"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Cortina de Balas Uh-huh", description: "Cuando la energía es suficiente, pulsar [Icono Especial EX] para activar: Conduce la torreta para disparar continuamente y lanza diferentes tipos de misiles según el estado del enemigo: cuando el objetivo principal no está en estado de (Aturdimiento), lanza proyectiles perforantes, infligiendo Daño Fuego y acumulando más (Valor de Aturdimiento); cuando el objetivo principal está en estado de (Aturdimiento), lanza proyectiles de alto explosivo, infligiendo mayor Daño Fuego; tras lanzar el movimiento, Norma obtiene un 20% de (Recursos Personales), y entra en estado de (Descarga de Fuego), con una duración de 40 segundos, durante (Descarga de Fuego), Norma colocará dos torretas de ataque automático para unirse al combate; mantener pulsado puede consumir energía continuamente y prolongar el tiempo de disparo hasta 2 segundos, por cada 1 punto de Sp consumido en exceso, Norma obtiene un 0.5% adicional de (Recursos Personales), y hace que la duración de (Descarga de Fuego) aumente adicionalmente 1 segundo; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Práctica de Tiro", description: "En combate, la torreta atacará automáticamente a los enemigos, infligiendo Daño Fuego.", tags: ["Fuego"] },
                            { type: "Técnica Especial", name: "Técnica Especial EX: Experimento de Fuego", description: "Cuando cualquier personaje del equipo hace que el enemigo entre en estado de Aturdimiento, o cuando Norma consume (Recursos Personales) para activar (Ataque en Cadena), la torreta desplegará la cápsula de misiles, con una duración de 8 segundos; durante este periodo, el intervalo de ataque automático de la torreta se reduce, al atacar automáticamente lanzará adicionalmente diferentes tipos de misiles según el estado del enemigo: cuando el objetivo principal no está en estado de Aturdimiento, lanza proyectiles perforantes, infligiendo (Daño Fuego) y acumulando más (Valor de Aturdimiento); cuando el objetivo principal está en estado de Aturdimiento, lanza proyectiles de alto explosivo, infligiendo mayor (Daño Fuego).", tags: ["Fuego"] },
                            { type: "Técnica Definitiva", name: "Ataque en Cadena: Perforación de Impacto", description: "Al activar (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Ordena a una gran cantidad de taladros realizar ataques de múltiples golpes al enemigo, infligiendo una gran cantidad de Daño Fuego; Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Técnica Definitiva", name: "Técnica Definitiva: Doctrina de Fuego Superior", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Invoca un misil grande para bombardear a los enemigos frente a ella, infligiendo una gran cantidad de Daño Fuego; al activar el movimiento, obtiene inmediatamente un 80% de (Recursos Personales); Posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Fuego"] },
                            { type: "Pasiva Central", name: "Pasiva Núcleo: Orientación de Precisión", description: "Por cada 1% de Probabilidad Crítica que posea Norma, el Daño Crítico aumenta en un {VALOR_1}, aumentando adicionalmente como máximo un {VALOR_2}; Por cada 1% de Probabilidad Crítica que posea Norma, cuando los ataques de (Técnica Especial EX), (Ataque de Asistencia), (Técnica Definitiva) golpean a un enemigo, el valor de Aturdimiento causado aumenta en un {VALOR_3}, aumentando adicionalmente como máximo un {VALOR_4}; Al entrar al campo de batalla, Norma obtiene inmediatamente un 50% de (Recursos Personales), en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos; Después de que los (Recursos Personales) sean mayores o iguales al 80%, cuando se active la siguiente (Asistencia Rápida), consumirá un 80% de (Recursos Personales) y será reemplazada por un (Ataque en Cadena); Norma aumentará adicionalmente su poder de ataque según su propia Fuerza Bruta, por cada 1 punto de Fuerza Bruta el ataque aumenta en 1.25 puntos, aumentando como máximo 1200 puntos de ataque.", tags: ["Fuego"] },
                            { type: "Habilidad Adicional", name: "Habilidad Adicional: Ventaja de Enjambre", description: "Se activa cuando existe un personaje de (Atacante) o personaje de (Ruptura) en el equipo: cuando los ataques de Norma y sus creaciones golpean a un enemigo, aplican 1 capa de (Vulnerabilidad) al enemigo, cada capa de (Vulnerabilidad) puede aumentar el multiplicador de daño recibido por aturdimiento del objetivo en un 3%, acumulable hasta un máximo de 10 capas, cada 0.5 segundos se acumula como máximo 1 capa; los enemigos que posean cualquier número de capas de (Vulnerabilidad) tras entrar en estado de Aturdimiento, el tiempo de duración de su Aturdimiento aumenta en 3 segundos, el efecto de aumento de duración del aturdimiento no es acumulable con efectos similares, cuando el enemigo que posee el efecto de (Vulnerabilidad) termina su estado de aturdimiento, el efecto de (Vulnerabilidad) termina; durante (Descarga de Fuego), el ataque de Norma aumenta en 35 puntos, este efecto aumenta con el nivel del personaje, aumentando en 15 puntos por cada nivel, hasta un máximo de 920; durante (Descarga de Fuego), el daño infligido por los agentes de todo el equipo aumenta en un {VALOR_5}.", tags: ["Fuego"] },
                            { type: "Mindscape 1", name: "Presbicia Radical", description: "En la (Técnica Especial EX: Experimento de Fuego), la duración de la torreta desplegando la cápsula de misiles aumenta a 12 segundos; cuando los proyectiles perforantes o proyectiles de alto explosivo de cualquier (Técnica Especial EX) golpean a un enemigo, hace que la resistencia a todos los atributos del daño del enemigo se reduzca en un 15%, con una duración de 15 segundos.", tags: ["Fuego"] },
                            { type: "Mindscape 2", name: "Axioma de Unificación de Todas las Cosas", description: "En (Habilidad Adicional: Ventaja de Enjambre), el multiplicador de daño recibido por aturdimiento proporcionado por cada capa de (Vulnerabilidad) aumenta al 6%; cuando Norma se encuentra en estado de combate y activa (Ataque Básico: Truco de Sombrero), recupera 25 puntos de energía, se activa como máximo una vez cada 20 segundos.", tags: ["Fuego"] },
                            { type: "Mindscape 3", name: "Paradoja de Villano Nato", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2.", tags: ["Fuego"] },
                            { type: "Mindscape 4", name: "Doctrina de Bangboo Superior", description: "Cuando Norma consume (Recursos Personales) para activar (Ataque en Cadena): hace que Norma y el agente correspondiente recuperen 50 puntos de decibelios.", tags: ["Fuego"] },
                            { type: "Mindscape 5", name: "Gran Explosión Uh-huh", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2.", tags: ["Fuego"] },
                            { type: "Mindscape 6", name: "Primera Causa Genial", description: "Tras activar (Técnica Definitiva), Norma invocará continuamente misiles para bombardear a enemigos aleatorios en el campo, con una duración de 12 segundos, cada misil tiene un intervalo de 0.75 segundos, e inflige Daño Fuego a los enemigos dentro del rango equivalente al 330% del ataque de Norma, este daño será considerado como daño de (Técnica Definitiva), al activarse repetidamente reinicia el tiempo de duración.", tags: ["Fuego"] }
                        ]
            }
        }
    }
};

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

    allVersions.forEach((version, vIndex) => {
        const vData = agent.versions[version];
        const latestSkills = getLatestSkillsForVersion(vData);
        if (!latestSkills || !Array.isArray(latestSkills)) return;

        const prevVersion = vIndex > 0 ? allVersions[vIndex - 1] : null;

        const unmatchedInPrev = [];
        if (prevVersion) {
            for (const [key, skillObj] of skillMap.entries()) {
                if (skillObj.versions[prevVersion]) {
                    unmatchedInPrev.push({ key, skill: skillObj.versions[prevVersion], matched: false });
                }
            }
        }

        const unmatchedNew = [];

        latestSkills.forEach((skill, index) => {
            const type = skill.type || "Unknown";
            const name = skill.name || "Unknown";
            const exactKey = `${type}::${name}`;

            // Priority 1: Exact Name
            if (skillMap.has(exactKey)) {
                skillMap.get(exactKey).versions[version] = skill;
                const prev = unmatchedInPrev.find(p => p.key === exactKey);
                if (prev) prev.matched = true;
            } else {
                unmatchedNew.push({ skill, index, mappedKey: null });
            }
        });

        // Priority 2: Fuzzy Match
        for (const newSkillObj of unmatchedNew) {
            if (newSkillObj.mappedKey) continue;
            let bestMatch = null;
            let bestSim = 0;

            for (const prevSkillObj of unmatchedInPrev) {
                if (prevSkillObj.matched) continue;
                const sim = calculateSimilarity(prevSkillObj.skill.description, newSkillObj.skill.description);
                if (sim > 0.60 && sim > bestSim) {
                    bestSim = sim;
                    bestMatch = prevSkillObj;
                }
            }

            if (bestMatch) {
                newSkillObj.mappedKey = bestMatch.key;
                bestMatch.matched = true;
            }
        }

        // Priority 3: Tag / Category Analysis
        const getSkillsByType = (skills) => {
            const grouped = {};
            skills.forEach(s => {
                if (!grouped[s.type]) grouped[s.type] = [];
                grouped[s.type].push(s);
            });
            return grouped;
        };

        const prevSkillsByType = prevVersion ? getSkillsByType(getLatestSkillsForVersion(agent.versions[prevVersion])) : {};
        const newSkillsByType = getSkillsByType(latestSkills);

        for (const newSkillObj of unmatchedNew) {
            if (newSkillObj.mappedKey) continue;

            const type = newSkillObj.skill.type;
            const newTypeArr = newSkillsByType[type] || [];
            const indexInType = newTypeArr.findIndex(s => s.name === newSkillObj.skill.name);

            const prevTypeArr = prevSkillsByType[type] || [];

            if (indexInType !== -1 && prevTypeArr[indexInType]) {
                const prevSkillDef = prevTypeArr[indexInType];
                const prevExactKey = `${prevSkillDef.type}::${prevSkillDef.name}`;
                const prevMatchData = unmatchedInPrev.find(p => p.key === prevExactKey);
                if (prevMatchData && !prevMatchData.matched) {
                    newSkillObj.mappedKey = prevExactKey;
                    prevMatchData.matched = true;
                }
            }
        }

        // Apply
        for (const newSkillObj of unmatchedNew) {
            if (newSkillObj.mappedKey) {
                skillMap.get(newSkillObj.mappedKey).versions[version] = newSkillObj.skill;
            } else {
                const type = newSkillObj.skill.type || "Unknown";
                const name = newSkillObj.skill.name || "Unknown";
                const newKey = `${type}::${name}`;
                skillMap.set(newKey, {
                    id: newKey,
                    type: type,
                    versions: { [version]: newSkillObj.skill }
                });
            }
        }
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
            } else {
                // If name not found, add the hotfix skill.
                // This covers cases where the base version list is incomplete
                // or the hotfix introduces a new skill entry.
                result.push({ ...hfSkill });
            }
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
