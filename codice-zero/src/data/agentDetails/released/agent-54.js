export default {
    baseStats: {
        hp: { min: 615, max: 7680 },
        atk: { min: 135, max: 880 },
        def: { min: 45, max: 560 },
        impact: 105,
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "125",
        anomalyMastery: "115",
        penRatio: "0%",
        energyRegen: "1.2"
    },
    coreStats: {
        statName: "maestría de anomalía",
        valuePerNode: 18
    },
    materials: {
        weeklyBoss: {
            name: "",
            icon: "",
        },
        eliteBoss: {
            name: "",
            icon: ""
        }
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
        { type: "Pasiva Central", name: "Pasiva Central: Ángel y Bruja", description: "Cuando la regeneración automática de energía inicial de Velina es mayor a 1, por cada 0.01 que exceda, la (Tasa de Anomalía) aumenta 0.7 puntos, y el daño infligido aumenta un 0.3%; Cuando Velina entra al campo de batalla, obtiene 45 puntos de (Energía de Viento), en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos, Velina al activar cualquier (Técnica Especial EX) obtendrá 45 puntos de (Energía de Viento), el límite de (Energía de Viento) es de 135 puntos; Cuando el (Gran Campo de Viento) invocado por Velina golpea a un enemigo en estado de (Impregnación), activará el efecto (Teñido), transformándose en un (Gran Campo de Viento) del atributo correspondiente, y causará daño del atributo correspondiente; Cuando el ataque del (Gran Campo de Viento) golpea a un enemigo, reducirá la (Res Acumulación de Anomalía Viento) y la (Res Acumulación de Anomalía) del atributo correspondiente tras el (Teñido) del enemigo en un 10%, con una duración de 40 segundos, al activarse repetidamente reinicia el tiempo de duración; Cuando Velina activa (Turbulencia), invocará un (Pequeño Campo de Viento), infligiendo (Daño Viento), cuando el (Pequeño Campo de Viento) y el (Gran Campo de Viento) explotan y golpean a un enemigo en estado de (Anomalía de Atributo Viento), ambos causarán al objetivo 1 vez un daño de (Abloom): calcula adicionalmente una vez el daño de anomalía de atributo, calculando de forma fija el 210% y el 300% del multiplicador de daño de (Anomalía de Atributo Viento) respectivamente; Cuando Velina activa (Turbulencia), obtendrá 1 (Punto de Mejora), este efecto se activa como máximo una vez cada 3 segundos, cuando Velina posee 2 (Puntos de Mejora), la próxima vez que Velina active (Turbulencia), el multiplicador de daño de esa (Turbulencia) aumentará un 450%, y ya no invocará un (Pequeño Campo de Viento) sino que invocará un (Gran Campo de Viento).", tags: ["Viento"] },
        { type: "Habilidad Adicional", name: "Habilidad Adicional: Etiqueta de la Fiesta de Té", description: "Se activa cuando existen 2 personajes de (Anomalía) o personajes del mismo atributo en el equipo: El daño de (Corrosión) y (Turbulencia) infligido por Velina aumenta un 15%, al activar (Técnica Definitiva), obtiene 2 (Puntos de Mejora); en (Pasiva Núcleo: Ángel y Bruja), el efecto de reducción de (Res Acumulación de Anomalía) de atributo causado por el (Gran Campo de Viento) aumenta un 10% adicional.", tags: ["Viento"] },
        { type: "Mindscape 1", name: "Ideal Inmaculado", description: "Al entrar al campo de batalla, Velina obtiene inmediatamente 30 puntos de energía, en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos; Cuando Velina activa (Turbulencia) y (Corrosión), ignora un 15% de (Resistencia a todos los atributos) del objetivo." },
        { type: "Mindscape 2", name: "Plan de Saturación", description: "Cuando Velina activa (Corrosión), también puede obtener 1 (Punto de Mejora), este efecto se activa como máximo una vez cada 5 segundos; tras ser (Teñido) el (Gran Campo de Viento), este puede acumular valor continuo de anomalía del atributo correspondiente, y el valor de acumulación de anomalía de atributo acumulado por este ataque no participa en el cálculo de daño de anomalía." },
        { type: "Mindscape 3", name: "Conquista Ceremonial", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2." },
        { type: "Mindscape 4", name: "La Fiesta de Té es el Juicio", description: "El ataque de Velina aumenta un 10%; al activar (Visión Extrema) mediante (Técnica Especial EX: Cizalladura del Viento - Aclaramiento), recupera 1 (Punto de Asistencia)." },
        { type: "Mindscape 5", name: "Bruja Anunciadora de Muerte", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2." },
        { type: "Mindscape 6", name: "Ángel Principal", description: "Cuando el golpe pesado de (Ataque de Asistencia: Tácticas de Negociación) golpea a un enemigo en estado de (Anomalía de Atributo Viento), causará al objetivo 1 vez un daño de (Abloom): calcula adicionalmente una vez el daño de anomalía de atributo, calculando de forma fija el 60% del multiplicador de daño de (Anomalía de Atributo Viento); Cuando el ataque de Velina golpea a un enemigo en estado de (Anomalía de Atributo Viento), el valor de acumulación de anomalía causado aumenta un 20%; Cuando Velina vuelve a aplicar (Corrosión) a un enemigo en estado de (Corrosión), aumentará el daño de esta (Corrosión) basándose en el tiempo de duración restante de la (Corrosión) anterior, por cada 1 segundo de duración restante el daño aumentará un 2%." }
    ]
}
