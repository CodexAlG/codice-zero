export default {
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
        { type: "Habilidad Adicional", name: "Habilidad Adicional: Ventaja de Enjambre", description: "Se activa cuando existe un personaje de (Atacante) o personaje de (Anomalía) en el equipo: cuando los ataques de Norma y sus creaciones golpean a un enemigo, aplican 1 capa de (Vulnerabilidad) al enemigo, acumulable hasta un máximo de 10 capas, cada capa de (Vulnerabilidad) puede aumentar el multiplicador de daño recibido por aturdimiento del objetivo en un 3%; los enemigos que posean cualquier número de capas de (Vulnerabilidad) tras entrar en estado de Aturdimiento, el tiempo de duración de su Aturdimiento aumenta en 3 segundos; durante (Descarga de Fuego), el ataque de Norma aumenta en 33.0, este efecto aumenta con el nivel del personaje, aumentando en 13 por cada nivel, hasta un máximo de 800; durante (Descarga de Fuego), el daño infligido por los agentes de todo el equipo aumenta en un {VALOR_5}.", tags: ["Fuego"] },
        { type: "Mindscape 1", name: "Presbicia Radical", description: "En la (Técnica Especial EX: Experimento de Fuego), la duración de la torreta desplegando la cápsula de misiles aumenta a 12 segundos; cuando los proyectiles perforantes o proyectiles de alto explosivo de cualquier (Técnica Especial EX) golpean a un enemigo, hace que la resistencia a todos los atributos del daño del enemigo se reduzca en un 15%, con una duración de 15 segundos.", tags: ["Fuego"] },
        { type: "Mindscape 2", name: "Axioma de Unificación de Todas las Cosas", description: "En (Habilidad Adicional: Ventaja de Enjambre), el multiplicador de daño recibido por aturdimiento proporcionado por cada capa de (Vulnerabilidad) aumenta al 6%; al activar (Ataque Básico: Truco de Sombrero), Norma recupera 25 puntos de energía, se activa como máximo una vez cada 20 segundos.", tags: ["Fuego"] },
        { type: "Mindscape 3", name: "Paradoja de Villano Nato", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2.", tags: ["Fuego"] },
        { type: "Mindscape 4", name: "Doctrina de Bangboo Superior", description: "Cuando Norma consume (Recursos Personales) para activar (Ataque en Cadena): Hace que los decibelios recuperados por el agente correspondiente aumenten en 50 puntos; y Norma recupera la misma cantidad de decibelios.", tags: ["Fuego"] },
        { type: "Mindscape 5", name: "Gran Explosión Uh-huh", description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Técnica de Asistencia), (Técnica Especial), (Ataque en Cadena) +2.", tags: ["Fuego"] },
        { type: "Mindscape 6", name: "Primera Causa Genial", description: "Tras activar (Técnica Definitiva), Norma invocará continuamente misiles para bombardear a enemigos aleatorios en el campo, con una duración de 12 segundos, cada misil tiene un intervalo de 0.75 segundos, e inflige (Daño Fuego) a los enemigos dentro del rango equivalente al 280% del ataque de Norma, este daño será considerado como daño de (Técnica Definitiva), al activarse repetidamente reinicia el tiempo de duración.", tags: ["Fuego"] }
    ]
}
