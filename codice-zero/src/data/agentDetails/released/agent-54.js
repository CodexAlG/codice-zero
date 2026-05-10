export default {
    baseStats: {
        hp: { min: 626, max: 7788 },
        atk: { min: 126, max: 872 },
        def: { min: 49, max: 612 },
        impact: 86,
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "120",
        anomalyMastery: "114",
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
