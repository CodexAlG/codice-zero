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
    materials: {
        weeklyBoss: {
            name: "Exuvia del Refinamiento",
            icon: "Item_Exuvia_of_Refinement.webp",
        },
        eliteBoss: {
            name: "",
            icon: ""
        },
        coreSkillScaling: [
            ["3%", "0.52%", "12.88%", "212%"],
            ["3.5%", "0.6%", "14.9%", "230%"],
            ["4%", "0.68%", "16.92%", "248%"],
            ["4.5%", "0.76%", "18.94%", "266%"],
            ["5%", "0.84%", "20.96%", "284%"],
            ["5.5%", "0.92%", "22.98%", "302%"],
            ["6%", "1%", "25%", "320%"]
        ],
        skills: [
            {
                type: "Ataque Básico",
                name: "Ataque Básico: Escupir Veneno",
                description: "Pulsar [Icono Ataque] para activar: Realiza hasta cuatro ataques consecutivos hacia adelante infligiendo Daño Eléctrico; cuando el cuarto golpe del ataque golpea a un enemigo, obtiene 2 puntos de (Toxina), al golpear a un enemigo en estado de Aturdimiento, obtiene adicionalmente 1 punto de (Toxina).",
                tags: ["Electrico"]
            },
            {
                type: "Ataque Básico",
                name: "Ataque Cargado: Beso de Serpiente",
                description: "Al poseer (Sombra de Serpiente) mantener pulsado [Icono Ataque] para activar: Cissia salta en el aire y fija el objetivo, luego cae al suelo infligiendo Daño Eléctrico a los enemigos en el área; durante el periodo de fijación, mantener pulsado [Icono Ataque] y arrastrar el stick permite extender el tiempo de fijación, y controlar libremente el punto de caída; por cada 6 puntos de (Toxina) obtenidos, obtiene 1 capa del efecto (Sombra de Serpiente), pudiendo obtener hasta un máximo de 3 capas; al entrar al campo de batalla, obtiene 1 capa de (Sombra de Serpiente); al activar el movimiento consume (Sombra de Serpiente); tras golpear al enemigo, consume rápidamente todas las (Toxinas) y activa (Hueso Corrosivo); al activar el movimiento, activará (Asistencia Rápida); posee efecto de invencibilidad durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Ataque Básico",
                name: "Hueso Corrosivo",
                description: "Inflige Daño Eléctrico a los enemigos cercanos; cada vez que se activa, aumenta su propia Probabilidad Crítica en un 6%, con una duración de 15 segundos, acumulable hasta un máximo de 3 capas, al activarse de nuevo se reinicia la duración.",
                tags: ["Electrico"]
            },
            {
                type: "Evasión",
                name: "Evasión: Serpentear",
                description: "Pulsar [Icono Dodges]: Realiza una evasión rápida; posee efecto de invencibilidad durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Evasión",
                name: "Ataque de Carrera: Marca de Mordedura",
                description: "Al evadir, pulsar [Icono Ataque]: Realiza un ataque rápido hacia adelante, infligiendo Daño Eléctrico.",
                tags: ["Electrico"]
            },
            {
                type: "Evasión",
                name: "Contraataque de Evasión: Devolver el Mordisco",
                description: "Tras activar una (Evasión Perfecta), pulsar [Icono Ataque]: Salta hacia adelante y realiza un ataque de barrido al aterrizar, infligiendo Daño Eléctrico; al golpear a un enemigo; posee efecto de invencibilidad durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Técnica Especial",
                name: "Técnica Especial: Dientes de Mono",
                description: "Pulsar [Icono Especial]: Lanza una mordedura de serpiente a larga distancia hacia adelante, infligiendo Daño Eléctrico; al golpear a un enemigo el nivel de resistencia a la interrupción aumenta durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Técnica Especial",
                name: "Técnica Especial EX: Colmillo Venenoso",
                description: "Cuando la energía es suficiente, pulsar o mantener pulsado [Icono Especial EX]: Lanza múltiples mordeduras de serpientes a larga distancia hacia adelante, infligiendo Daño Eléctrico; al activar el movimiento, recupera 6 puntos de energía; al mantener pulsado, consumirá energía adicionalmente, cada 20 puntos activan un golpe adicional, infligiendo Daño Eléctrico, hasta consumir un máximo de 60 puntos de energía adicionales; tras mantener pulsado, obtiene 3 puntos de (Toxina), al mantener pulsado por cada 20 puntos de energía adicionales consumidos, obtiene 1 punto de (Toxina); al golpear a un enemigo; tras lanzar el movimiento, puede conectar directamente con el cuarto golpe del (Ataque Básico: Escupir Veneno); al golpear al enemigo con el movimiento, activará (Asistencia Rápida); posee efecto de invencibilidad durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Asistencia",
                name: "Asistencia Rápida: Dispositivo de Alarma",
                description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist]: Salta hacia adelante y realiza un ataque de barrido al aterrizar, infligiendo Daño Eléctrico; durante la ejecución del movimiento, se puede conectar rápidamente con (Técnica Especial: Dientes de Mono), (Técnica Especial EX: Colmillo Venenoso) y (Ataque Cargado: Beso de Serpiente); posee efecto de invencibilidad durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Asistencia",
                name: "Asistencia Defensiva: Comida de Prisión",
                description: "Cuando el personaje en el campo está a punto de ser atacado, pulsar [Icono Assist]: Realiza un parry al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Asistencia",
                name: "Ataque de Asistencia: Amistad de Cómplice",
                description: "Tras activar (Asistencia Definitiva), pulsar [Icono Ataque]: Realiza ataques continuos contra el objetivo, infligiendo una gran cantidad de Daño Eléctrico; al golpear a un enemigo, posee efecto de invencibilidad durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Pasiva Central",
                name: "Pasiva Central: Brebaje Letal",
                description: "Al entrar al campo de batalla, obtiene 3 puntos de (Toxina), en el modo de Cavidad Cero este efecto se activa como máximo una vez cada 180 segundos. Al poseer (Toxina), en estado de combate se consume 1 punto de (Toxina) cada 5 segundos, activando una vez (Hueso Corrosivo), causando Daño Eléctrico; hace que el Daño Eléctrico infligido por todos los personajes del equipo ignore un {VALOR_1} de la defensa del enemigo, si la Recuperación de Energía inicial automática es mayor a 1.4, por cada 0.12 que exceda, ignorará adicionalmente un {VALOR_2} de la defensa del enemigo, hasta ignorar un máximo de {VALOR_3} de la defensa del enemigo, dura hasta 30 segundos después de que se agote el (Toxina). (Hueso Corrosivo) añade adicionalmente un Daño Eléctrico del {VALOR_4} del Ataque de Cissia; Cuando hay 1 o 2 personaje de Atributo Eléctrico en el equipo, el valor de aturdimiento causado por (Hueso Corrosivo) aumenta un 40%/60%; al obtener (Toxina), por cada 1 punto de (Toxina) que se desborde, se activa una vez (Hueso Corrosivo).",
                tags: ["Electrico"]
            },
            {
                type: "Habilidad Adicional",
                name: "Habilidad Adicional: Fermentación de Toxina",
                description: "Se activa cuando existe otro personaje (Aturdidor) o un personaje con el mismo Atributo que ella en el equipo: Al poseer (Toxina), aumenta el Daño Crítico de todos los personajes del equipo en un 30%, y aumenta adicionalmente el propio en un 20%, dura hasta 30 segundos después de que se agote el (Toxina).",
                tags: ["Electrico"]
            },
            {
                type: "Técnica Definitiva",
                name: "Ataque en Cadena: Crimen en Banda",
                description: "Al activar un (Ataque en Cadena), seleccionar al personaje correspondiente para lanzar: Realiza múltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Eléctrico; tras lanzar el movimiento, obtiene 3 puntos de (Toxina); al golpear a un enemigo; al golpear al enemigo con el movimiento, activará (Asistencia Rápida); posee efecto de invencibilidad durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Técnica Definitiva",
                name: "Técnica Definitiva: Miedo Reptante",
                description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva]: Realiza un ataque de aplastamiento hacia adelante, infligiendo una gran cantidad de Daño Eléctrico; tras lanzar el movimiento, obtiene 3 puntos de (Toxina); tras lanzar el movimiento, despliega (Velo Etereo: Sangre Fría), con una duración de 30 segundos, durante este periodo el Daño de Golpe Crítico de todo el equipo aumenta un 4%; Antes de volver a desplegar (Velo Etereo: Sangre Fría), se cerrará el (Velo Etereo: Sangre Fría) existente; al golpear al enemigo con el movimiento, activará (Asistencia Rápida); posee efecto de invencibilidad durante la ejecución del movimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Mindscape 1",
                name: "Viajero y Presa",
                description: "Al entrar al campo de batalla, los puntos de (Toxina) obtenidos aumentan a 6; el efecto de ignorar defensa enemiga en la (Pasiva Central) aumenta al 140% del original, y hace que el daño infligido por todos los personajes del equipo ignore un 5% de la Resistencia al Daño de Atributo Eléctrico del objetivo; el daño infligido por (Hueso Corrosivo) ignora un 10% de la Resistencia al Daño Eléctrico del objetivo.",
                tags: ["Electrico"]
            },
            {
                type: "Mindscape 2",
                name: "Hambre y Mentiras",
                description: "Tras golpear a un enemigo en estado de Aturdimiento con [Técnica en Cadena: Crimen en Banda] o [Técnica Definitiva: Miedo Reptante], obtiene adicionalmente 3 puntos de (Toxina); el daño infligido por (Ataque Cargado: Beso de Serpiente) aumenta un 35%.",
                tags: ["Electrico"]
            },
            {
                type: "Mindscape 3",
                name: "Cadenas y Nido Cálido",
                description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2",
                tags: ["Electrico"]
            },
            {
                type: "Mindscape 4",
                name: "Despertar del Villano",
                description: "Al activar (Técnica Especial EX), (Ataque en Cadena) o (Técnica Definitiva), obtiene 1 capa de (Despertar), acumulable hasta un máximo de 3 capas; al activar (Ataque Cargado: Beso de Serpiente), consume todos los (Despertar), por cada 1 capa consumida activa adicionalmente 1 vez un (Hueso Corrosivo) especial que no consume (Toxina), este (Hueso Corrosivo) no puede causar valor de Aturdimiento.",
                tags: ["Electrico"]
            },
            {
                type: "Mindscape 5",
                name: "Perjurio y Colmillos",
                description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2",
                tags: ["Electrico"]
            },
            {
                type: "Mindscape 6",
                name: "Casa y Calle Sexta",
                description: "Cada vez que se activa (Hueso Corrosivo), obtiene 1 capa de (Marca de Hueso Corrosivo); cuando cualquier personaje del equipo, excepto (Hueso Corrosivo), golpea a un enemigo con un ataque, consume 1 capa de (Marca de Hueso Corrosivo), activando 1 vez un (Hueso Corrosivo) especial, este (Hueso Corrosivo) no puede causar valor de Aturdimiento, se puede consumir como máximo 1 capa de (Marca de Hueso Corrosivo) en un intervalo de 3 segundos.",
                tags: ["Electrico"]
            },

        ],
    }
}