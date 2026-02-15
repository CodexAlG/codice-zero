export default {
    baseStats: {
        hp: {
            min: 617,
            max: 7673
        },
        atk: {
            min: 135,
            max: 938
        },
        def: {
            min: 49,
            max: 606
        },
        impact: 93,
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "94",
        anomalyMastery: "93",
        penRatio: "0%",
        energyRegen: "1.2",
    },
    coreStats: {
        statName: "energia",
        valuePerNode: 0.12,
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
        {
            type: "Ataque Básico",
            name: "Ataque Básico",
            description: "Pulsar [Icono Ataque]: Realiza hasta cuatro golpes consecutivos hacia adelante, infligiendo Daño Eléctrico; cuando el cuarto golpe golpea a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; después de que el cuarto golpe golpee al enemigo, obtiene 1 punto de (Veneno), al golpear a un enemigo que se encuentra en estado de Aturdimiento, obtiene adicionalmente 1 punto de (Veneno).",
            tags: ["Electrico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Cargado",
            description: "Se puede activar manteniendo pulsado [Icono Ataque] cuando se posee al menos 1 punto de (Veneno) o 1 capa de (Agilidad de Serpiente): Cissia salta en el aire y fija el objetivo; luego cae al suelo infligiendo Daño Eléctrico a los enemigos en el área; durante el periodo de fijación, mantener pulsado [Icono Ataque] puede extender el tiempo de fijación, y arrastrando el stick se puede controlar libremente el punto de caída; al activar el movimiento consume hasta 6 capas de (Agilidad de Serpiente), cada capa aumenta el multiplicador de daño de este movimiento; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; tras golpear al enemigo, si ella es el personaje en uso, consumirpa rapidamente todo el (Veneno) y activará (Estallido de Veneno de Serpiente); posee efecto de invencibilidad durante la ejecución del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Ataque Básico",
            name: "Estallido de Veneno de Serpiente",
            description: "Inflinge Daño Eléctrico a todos los enemigos que poseen la (Marca de Veneno de Serpiente); cada vez que se activa, aumenta la Probabilidad Crítica propia en un 8%, con una duración de 15 segundos, acumulable hasta 3 capas, al activarse de nuevo se reinicia la duración; al activarse, obtiene 1 capa del efecto (Agilidad de Serpiente), hasta un máximo de 9 capas.",
            tags: ["Electrico"]
        },
        {
            type: "Evasión",
            name: "Evasión",
            description: "Pulsar [Icono Dodges]: Realiza una evasión rápida; posee efecto de invencibilidad durante la ejecuión del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera",
            description: "Al evadir, pulsar [Icono Ataque]: Realiza un ataque rápido hacia adelante, infligiendo Daño Eléctrico.",
            tags: ["Electrico"]
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión",
            description: "Tras activar una (Evasión Perfecta), pulsar [Icono Ataque]: Salta hacia adelante y realiza un ataque de barrio al aterrizar, infligiendo Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; posee efecto de invencibilidad durante la ejecución del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial",
            description: "Pulsar [Icono Especial]: Lanza una mordedura de serpiente a larga distancia hacia adelante, infligiendo Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; el nivel de resistencia a la interrupción aumenta durante la ejecución del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial EX",
            description: "Cuando la energía es suficiente, pulsar o mantener pulsado [Icono Especial EX]: Lanza múltiples mordeduras de serpientes a larga distancia hacia adelante, infligiendo Daño Eléctrico; al mantener pulsado, consumirá energía adicionalmente, cada 20 puntos activan un golpe adicional, infligiendo Daño Eléctrico, hasta consumir un máximo de 60 puntos de energía adicionales; tras mantener pulsado, obtiene 3 puntos de (Veneno), al mantener pulsado por cada 20 puntos de energía adicionales consumidos, obtiene 1 punto de (Veneno); al golpear a un enemigo, aplica el efecto de (Marca de Veneno de Serpiente) al enemigo con una duración de 60 segundos; tras lanzar el movimiento, puede conectar directamente con el cuarto golpe del (Ataque Básico); posee efecto de invencibilidad durante la ejecución del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida",
            description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist]: Salta hacia adelante y realiza un ataque de barrido al aterrizar, infligiendo Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, posee efecto de invencibilidad durante la ejecución del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva",
            description: "Cuando el personaje en el campo está a punto de ser atacado, pulsar [Icono Assist]: Realiza un parry al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecución del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Asistencia",
            name: "Ataque de Asistencia",
            description: "Tras activar (Asistencia Definitiva), pulsar [Icono Ataque]: Realiza ataques continuos contra el objetivo, infligiendo una gran cantidad de Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo; posee efecto de invencibilidad durante la ejecución del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Central",
            description: "Al entrar al campo de batalla, obtiene 3 puntos de (Veneno), en el modo de Cavidad Cero este efecto se activa como máximo una vez cada 180 segundos. Al poseer (Veneno), en estado de combate se consume 1 punto de (Veneno) cada 5 segundos, activando una vez (Estallido de Veneno de Serpiente), causando Daño Eléctrico; hace que el Daño Eléctrico y Daño Físico infligido por todos los personajes del equipo a enemigos con (Marca de Veneno de Serpiente) ignore un {VALOR_1} de la defensa del enemigo, si la Recuperación de Energía inicial automática es mayor a 1.4, por cada 0.12 que exceda, ignorará adicionalmente un {VALOR_2} de la defensa del enemigo, hasta ignorar un maximo de {VALOR_3} de la defensa del enemigo, dura hasta 8 segundos despues de que se agote el (Veneno). El multiplicador de daño de (Estallido de Veneno de Serpiente) aumenta un {VALOR_4}; Cuando hay al menos 1 personaje de Atributo Eléctrico adicional en el equipo, el valor de aturdimiento causado por (Estallido de Veneno de Serpiente) aumenta un 50%; al obtener (Veneno), por cada 1 punto de (Veneno) que se desborde, se activa una vez (Estallido de Veneno de Serpiente).",
            tags: ["Electrico"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional",
            description: "Se activa cuando existe otro personaje de (Atributo Físico) o un personaje con el mismo Atributo que ella en el equipo: Al poseer (Veneno), aumenta el Daño Crítico de todos los personajes del equipo en un 30%, y aumenta adicionalmente el propio en un 20%, dura hasta 8 segundos después de que se agote el (Veneno).",
            tags: ["Electrico"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena",
            description: "Al activar un (Ataque en Cadena), selecionar al personaje correspondiente para lanzar: Realiza múltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Eléctrico; tras lanar el movimiento, obtiene 3 puntos de (Veneno); al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; posee efecto de invencibilidad durante la ejecución del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Técnica Definitiva",
            name: "Técnica Definitiva",
            description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva]: Realiza un ataque de aplastamiento hacia adelante, infligiendo una gran cantidad de Daño Eléctrico; al golpear a un enemigo, aplica el efecto (Marca de Veneno de Serpiente) al enemigo, con una duración de 60 segundos; tras lanzar el movimiento, obtiene 3 puntos de (Veneno); tras lanzar el movimiento, despliega (Velo Etereo: Ojo de Serpiente), con una duración de 12 segundos, durante este periodo el Daño Crítico de todo el equipo aumenta un 8 %; Antes de volver a desplegar (Velo Etereo: Ojo de Serpiente), se cerrará el (Velo Etereo: Ojo de Serpiente) existente; posee efecto de invencibilidad durante la ejecución del movimiento.",
            tags: ["Electrico"]
        },
        {
            type: "Mindscape 1",
            name: "Mindscape 1",
            description: "Al entrar al campo de batalla, los puntos de (Veneno) obtenidos aumentan a 6; el efecto de ignorar defensa enemiga en la (Pasiva Central) aumentan al 150% del original; al golpear a un enemigo con (Técnica Especial EX), (Ataque en Cadena) o (Técnica Definitiva), o al consumir 6 capas de (Agilidad de Serpiente) al activar (Ataque Cargado), se activará (Asistencia Rapida).",
            tags: ["Electrico"]
        },
        {
            type: "Mindscape 2",
            name: "Mindscape 2",
            description: "El daño infligido por (Estallido de Veneno de Serpiente), (Técnica Especial EX), (Ataque Cargado) y (Técnica Definitiva) ignora un 15% de la Resistencia al Daño Eléctrico del objetivo; cada vez que se activan 2 veces (Estallido de Veneno de Serpiente) a través de la (Pasiva Central), se recuperan 100 puntos de valor de Decibelios.",
            tags: ["Electrico"]
        },
        {
            type: "Mindscape 3",
            name: "Mindscape 3",
            description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2",
            tags: ["Electrico"]
        },
        {
            type: "Mindscape 4",
            name: "Mindscape 4",
            description: "Al activar (Técnica Especial EX), (Ataque en Cadena) o (Técnica Definitiva), obtiene 1 capa de (Colmillo Venenoso), acumulable hasta un máximo de 3 capas; al activar (Ataque Cargado), consume todos los (Colmillos Venenosos), por cada 1 capa consumida activa adicionalmente 1 vez (Estallido de Veneno de Serpiente) que no consume (Veneno).",
            tags: ["Electrico"]
        },
        {
            type: "Mindscape 5",
            name: "Mindscape 5",
            description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2",
            tags: ["Electrico"]
        },
        {
            type: "Mindscape 6",
            name: "Mindscape 6",
            description: "Al golpear a un enemigo en estado de Aturdmiento con (Ataque en Cadena) o (Técnica Definitiva), obtiene adicionalmente 3 puntos de (Veneno); cuando el cuarto golpe del (Ataque Básico) golpea a un enemigo, en estado de aturdimiento, obtiene adicionalmente 1 punto de (Veneno); el daño infligido por (Ataque Cargado) aumenta un 30%.",
            tags: ["Electrico"]
        },

    ],
}
