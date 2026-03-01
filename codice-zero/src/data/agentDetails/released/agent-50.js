export default {
    baseStats: {
        hp: {
            min: 673,
            max: 8373
        },
        atk: {
            min: 107,
            max: 746
        },
        def: {
            min: 50,
            max: 622
        },
        impact: 120,
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "90",
        anomalyMastery: "93",
        penRatio: "0%",
        energyRegen: "1.2",
    },
    coreStats: {
        statName: "Tasa de Anomalía",
        valuePerNode: 12,
    },
    coreSkillScalingColors: [
        "text-[#d946ef]", // Etéreo (Pink/Magenta)
        "text-[#3b82f6]", // Eléctrico (Blue)
        "text-[#ef4444]", // Fuego (Red)
        "text-[#eab308]", // Físico (Yellow)
        "text-[#22d3ee]", // Hielo (Cyan)
    ],
    coreSkillScaling: [
        ["12%", "12%", "12%", "12%", "12%", "50", "15%", "9%"],
        ["12%", "12%", "12%", "12%", "12%", "58", "17.5%", "10%"],
        ["12%", "12%", "12%", "12%", "12%", "66", "20%", "11%"],
        ["12%", "12%", "12%", "12%", "12%", "74", "22.5%", "12%"],
        ["12%", "12%", "12%", "12%", "12%", "82", "25%", "13%"],
        ["12%", "12%", "12%", "12%", "12%", "90", "27.5%", "14%"],
        ["12%", "12%", "12%", "12%", "12%", "100", "30%", "15%"],
    ],
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Paso de Baile Meteórico",
            description: "Presiona [Icono Ataque]: Realiza hasta tres golpes consecutivos hacia adelanta, infligiendo Daño Etéreo",
            tags: ["Etereo", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Cargado: Lindo Choque Volador de Mina Terrestre",
            description: "Mantener pulsado [Icono Ataque] para cargar, al soltar el boton en el momento adecuado, se puede lanzar un Ataque Cargado Preciso, el cual aumenta el valor de Aturdimiento infligido por este movimiento en un 20%; Nangong Yu puede lanzar hasta tres etapas de Ataque Cargado, la segunda y tercera etapa de Ataque Cargado requieren consumir 50 puntos de (Contratiempo) cada una; al conectar después de (Contraatque de Evasión), (Ataque de Asistencia), (Asistencia Rapida), (Ataque en Cadena), (Técnica Definitiva) y (Técnica Especial EX), se puede completar el Ataque Cargado Preciso más facilmente; después de (Ataque en Cadena), (Técnica Definitiva) y (Técnica Especial EX) se puede conectar directamente a la segunda etapa del Ataque Cargado, y no interrumpirá el conteo de combo de (Ataque Cargado: Lindo Choque Volador de Mina Terrestre); durante la carga de la primera etapa del Ataque Cargado el nivel de resistencia a la interrupción aumenta, y el daño recibido se reduce en un 60%; durante la segunda y tercera etapa del ataque Cargado se posee un efecto de invencibilidad; la fase de embestida de la primera etapa del Ataque Cargado puede bloquear ataques enemigos, si el bloqueo es exitoso este Ataque Cargado también se considerará como un Ataque Cargado Preciso; todos los Ataques Cargados poseen efecto de invencibilidad durante su ejecuión.",
            tags: ["Etereo", "Ataque Básico"]
        },
        {
            type: "Evasión",
            name: "Evasión: Bailarina Nata",
            description: "Pulsar [Icono Dodges]: Realiza una evasiòn ràpida; posee efecto de invencibilidad durante la ejecuciòn del movimiento",
            tags: ["Etereo", "Evasión"]
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera: Meteoro Giratorio",
            description: "Al evadir, pulsar [Icono Ataque]: Realiza un ataque ràpido hacia adelante, infligiendo Daño Etéreo",
            tags: ["Etereo", "Evasión"]
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión: Vals Meteórico",
            description: "Tras activar una (Evasiòn Perfecta), pulsar [Icono Ataque]: Salta hacia adelante y realiza un ataque de barrido al aterrizar, infligiendo Daño Etéreo; possee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Evasión"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial: Afecto un Poco Pesado",
            description: "Pulsar [Icono Especial]: Blandir el martillo para lanzar un ataque, infligiendo Daño Etéreo.",
            tags: ["Etereo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial EX: Afecto Bastante Pesado",
            description: "Cuando la energía es suficiente, pulsar [Icono Especial EX] para activar: Blandir un martillo para lanzar un ataque, infligiendo Daño Etéreo; este movimiento no interrumpirá el conteo de combo de (Ataque Cargado: Lindo Choque Volador de Mina Terrestre); posee efecto de invencibilidad durante la ejecución del movimiento.",
            tags: ["Etereo", "Técnica Especial"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida: Técnica de Rescate",
            description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist]: Salta hacia adelante y realiza ataques consecutivos al objetivo, infligiendo Daño Etéreo; posee efecto de invenciblidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva: Paso de Baile Perfecto",
            description: "Cuando el personaje en el campo està a punto de ser atacado, pulsar [Icono Assist]: Realiza un parry al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Ataque de Asistencia: Actuación Improvisada",
            description: "Tras activar (Asistencia Definitiva), pulsar [Icono Ataque]: Realiza ataques continuos contra el objetivo, infligiendo una gran cantidad de Daño Etéreo; posee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Asistencia"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Central: Ídolo Genio",
            description: "La Maestría de Anomalia de Nangong Yu aumenta en {VALOR_6} puntos; cuando la Tasa de Anomalia de Nangong Yu es superior a 100 puntos, cada 1 punto que exceda la Tasa de Anomalia inicial aumentará su propio impacto en 0.8; cuando un enemigo se encuentra en estado de Aturdimiento, cada vez que entra en un estado de Anomalia, recibe un ataque de (Abloom) o un ataque de (Desorden), acumulará 1 capa de (Vibrato); un mismo enemigo puede acumular hasta un máximo de 5 capas de (Vibrato); cuando el enemigo se encuentra bajo un estado de Anomalia de Atributo, si el (Vibrato) se acumula hasta el número máximo de capas o cuando un enemigo que posee (Vibrato) se recupera del estado de Aturdimiento, todos los (Vibratos) serán eliminados; cuando el (Vibrato) es eliminado, Nangong Yu infligirá un ataque de (Abloom) al objetivo; calculando adicionalmente un daño de Anomalía una vez, la proporción relativa al daño de Anomalía de Atributo original es {VALOR_1}/{VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5}, por cada capa de (Vibrato) que tenga el enemigo, el daño de este (Abloom) aumenta adicionalmente un 10%, durante el mismo periodo de Aturdimiento, si el (Vibrato) ya ha sido eliminado, el enemigo no podrá volver a recibir (Vibrato): cuando el (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) o la (Técnica Especial EX) de Nangong Yu golpean a un enemigo, aumentan su propia Eficiencia de Acumulación de Anomalia en un {VALOR_7}, la Eficiencia de Aturdimiento en un {VALOR_8}, y aumentan el daño infligido por todo el equipo en un 30%, con una duración de 20 segundos. al activarse de nuevo se reinicia la duración. Cuando el (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) de Nangong Yu golpea a un enemigo, el enemigo obtiene el efecto (Atudir), los enemigos bajo este efecto ven aumentada su duraciòn de Aturdimiento en 3 segundos tras entrar en estado de Aturdimiento, el efecto (Aturdir) se activa como màximo una vez por objetivo antes de recuperarse del estado de Aturdimiento, el efecto de aumento de duraciòn de Aturdimiento no se puede acumular con efectos del mismo tipo, cuando termina el Aturdmiento del enemigo con efecto (Aturdir), el efecto (Aturdir) tèrmina; cuando cualquier personaje del equipo hace que un enemigo entre en estado de Aturdimiento, el multiplicador de daño de Aturdmiento del enemigo aumenta un 30%; al estar en estado de combate, Nangong Yu recupera 4 puntos de (Contratiempo) por segundo, cuando cualquier personaje del equipo hace que un enemigo entre en estado de Anomalìa, recuperarà adicionalmente 20 puntos de (Contratiempo) para Nangong Yu, este efecto se activa como màximo una vez cada 8 segundos, Nangong Yu puede poseer un màximo de 100 puntos de (Contratiempo)",
            tags: ["Etereo", "Pasiva Central"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional: Capitana Ángel",
            description: "Se activa cuando existe un personaje de (Anomalía) o un personaje de la misma facción que ella en el equipo: La Eficiencia de Acumulación de Anomalía causada por el ataque de cualquier personaje del equipo al golpear a un enemigo en estado de Aturdimiento aumenta en un 20%, la Eficiencia de Acumulación de Anomalía causada por ataques de (Ataque en Cadena) al golpear a un enemigo en estado de Aturdimiento aumenta adicionalmente en un 40%; cuando cualquier personaje del equipo hace que un enemigo entre en estado de Aturdimiento, Nangong Yu obtiene 2 capas del efecto (Fiebre del Baile), poseyendo un máximo de 2 capas, al poseer (Fiebre del Baile), cuando Nangong Yu activa (Técnica Especial EX), (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) o (Asistencia Rapida) consumirá 1 capa de (Fiebre del Baile), y hará que el golpe pesado de ese movimiento al golpear a un enemigo en estado de Anomalía de Atributo y Aturdimiento, active un efecto especial de (Desorden) llamado (Desorden de Polaridad) en el enemigo, infligiendo al objetivo un 40% del daño del efecto de (Desorden) original, el (Desorden de Polaridad) no eliminará el estado de Anomalía de Atributo en el que se encuentra el objetivo, el enemigo puede activar este efecto como máximo una vez durante el periodo de Aturdimiento; cuando Nangong Yu posee (Fiebre del Baile), la próxima vez que cambie a la vanguardia lanzará directamente la primera etapa de (Ataque Cargado: Lindo Choque Volador de Mina Terrestre), este Ataque Cargado se considera un Ataque Cargado Preciso; cuando Nangong Yu y Aria están juntar en el equipo, al activar Aria (Ataque Básico: Tono Absoluto), Nangong Yu también consumirá 1 capa de (Fiebre del Baile) para activar (Desorden de Polaridad) en el enemigo.",
            tags: ["Etereo", "Habilidad Adicional"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena: Gravedd de Cometa",
            description: "Al activar una (Ataque en Cadena), seleccionar al personaje correspondiente para lanzar: Realiz mùltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Etéreo; posee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etéreo", "Técnica Definitiva"]
        },
        {
            type: "Técnica Definitiva",
            name: "Técnica Definitiva: Cúmulo Estelar Errante",
            description: "Cuando el nivel de decibelios llega a (Màximo), pulsar [Icono Definitiva]: Realiza mùltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Etéreo; al lanzar el movimiento, Nangong Yu despliega el (Velo Etereo: Repeticiòn Delirante), durante la duraciòn del (Velo Etereo: Repeticiòn Delirante), el Ataque de todos los personajes del equipo aumenta adicionalmente en 50 puntos, con una duraciòn de 30 segundos; si Nangong Yu vuelve a desplegar el (Velo Etereo: Repeticiòn Delirante), se cerrarà el (Velo Etereo: Repeticiòn Delirante) existente; posee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Técnica Definitiva"]
        },
        {
            type: "Mindscape 1",
            name: "Foco Perezoso",
            description: "Cuando (Técnica Especial EX) o (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) golpean a un enemigo, reducen la Resistencia a Todos los Atributos del enemigo en un 15%, con una duraciòn de 40 segundos, al activarse de nuevo se reinicia la duraciòn, al entrar al campo de batalla, el (Fiebre del Baile) de Nangong Yu se recupera hasta el valor màximo, en el Cavidad Cero este efecto se activa como màximo una vez cada 180 segundos.",
            tags: ["Etereo", "Mindscape 1"]
        },
        {
            type: "Mindscape 2",
            name: "Lágrimas Indoloras",
            description: "Cada capa de (Vibrato) hace que el aumento adicional del daño de (Abloom) en la (Pasiva Central: Ídolo Genio) pase a ser del 15%; el multiplicador de daño de vulnerabilidad por aturdimiento proporcionado por la (Pasiva Central) aumenta adicionalmente en un 20%; el limite de posesión de (Fiebre del Baile) en la (Habilidad Adicional: Capitana Ángel) se incrementa a 3 capas",
            tags: ["Etereo", "Mindscape 2"]
        },
        {
            type: "Mindscape 3",
            name: "Fichas en la Balanza",
            description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2",
            tags: ["Etereo", "Mindscape 3"]
        },
        {
            type: "Mindscape 4",
            name: "Paso de Baile de Cómplice",
            description: "La Maestrìa de Anomalìa aumenta en 40; al activar un Ataque Cargado Preciso, la Eficiencia de Acumulaciòn de Anomalìa del (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) aumenta en un 35%.",
            tags: ["Etereo", "Mindscape 4"]
        },
        {
            type: "Mindscape 5",
            name: "Centro del Escenario",
            description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2",
            tags: ["Etereo", "Mindscape 5"]
        },
        {
            type: "Mindscape 6",
            name: "Delirio de Ángel",
            description: "Cuando el enemigo no se encuentra en estado de Aturdimiento, cada vez que cae en un estado de Anomalía por el ataque de un Agente, cada vez que recibe un ataque de (Abloom) o (Desorden), y al ser golpeado por el golpe pesado de la (Técnica Especial EX: Afecto Bastante Pesado) o del (Ataque Cargado: Lindo Choque Volador de Mina Terrestre), acumulará 1 capa de (Vibrato: Modificado), al ser golpeado por el golpe pesado de la (Técnica Definitiva: Cúmulo Estelar Errante) acumulará 2 capas de (Vibrato: Modificado); (Vibrato: Modificado) se puede acumular hasta un máximo de 5 capas, cuando el enemigo entra en estado de Aturdimiento, (Vibrato: Modificado) será eliminado por completo, cuando (Vibrato: Modificado) es eliminado, Nangong Yu infligirá un ataque de (Abloom) al objetivo: calculando adicionalmente un daño de Anomalía de Atributo una vez, la proporción relativa al daño de Anomalía de Atributo original es 12%/12%/12%/12%/12%, por cada 1 capa de (Vibrato: Modificado) que tenga el enemigo, el daño de esta (Abloom) aumenta adicionalmente en un 8%; (Vibrato: Modificado) y (Vibrato) no se pueden superponer entre sí.",
            tags: ["Etereo", "Mindscape 6"]
        },
    ],
    strategy: {
        skillPriority: ["Técnica Especial", "Técnica Definitiva", "Ataque Básico", "Evasión", "Asistencia"],
        statsPriority: ["Maestria de Anomalia", "Ataque %", "Ataque"],
        bestWeapons: [
            { id: "5542", name: "Arma de Prueba de Nangong Yu", tier: "S", tag: "BiS", icon: "/CodiceZero/Armas/Aturdidor/W-Engine_Yesterday_Calls.webp" },
            { id: "5519", name: "Engranajes Infernales", tier: "S", tag: "Alternativa", icon: "/CodiceZero/Armas/Aturdidor/W-Engine_Hellfire_Gears.webp" },
            { id: "5502", name: "Aguijón Afilado", tier: "S", tag: "Jane F2P", icon: "/CodiceZero/Armas/Anomalia/W-Engine_Sharpened_Stinger.webp" },
            { id: "5615", name: "Horno de Vapor", tier: "A", tag: "F2P W5", icon: "/CodiceZero/Armas/Aturdidor/W-Engine_Steam_Oven.webp" },
            { id: "5613", name: "Cilindro Precioso", tier: "A", tag: "F2P W5", icon: "/CodiceZero/Armas/Aturdidor/W-Engine_Precious_Fossilized_Core.webp" },
        ],
        driveDiscSetups: [
            {
                name: "Opción 1: Melodía Libre",
                sets: [
                    { name: "Melodía de Faeton", count: 4, icon: "/CodiceZero/Discos/Drive_Disc_Phaethon's_Melody_Icon.webp" },
                    { name: "Blues de la Libertad", count: 2, icon: "/CodiceZero/Discos/Drive_Disc_Freedom_Blues_Icon.webp" }
                ],
                mainStats: { iv: "Maestria de Anomalía", v: "Bono de Daño Etéreo", vi: "Tasa de Anomalía" }
            },
            {
                name: "Opción 2: Melodía Brillante",
                sets: [
                    { name: "Melodía de Faeton", count: 4, icon: "/CodiceZero/Discos/Drive_Disc_Phaethon's_Melody_Icon.webp" },
                    { name: "Aria Brillante", count: 2, icon: "/CodiceZero/Discos/SuitShiningAria.png" }
                ],
                mainStats: { iv: "Maestria de Anomalía", v: "Bono de Daño Etéreo", vi: "Tasa de Anomalía" }
            }
        ],
        teams: [
            {
                name: "Equipo Idol",
                members: [
                    { id: 48, name: "Aria", icon: "/CodiceZero/ICONOS/Agent_Aria_Icon.webp" },
                    { id: 49, name: "Sunna", icon: "/CodiceZero/ICONOS/Agent_Sunna_Icon.webp" },
                    { id: 50, name: "Nangong Yu", icon: "/CodiceZero/ICONOS/Agent_Nangong_Yu_Icon.webp" }
                ]
            },
            {
                name: "Equipo Miyabi",
                members: [
                    { id: 26, name: "Miyabi", icon: "/CodiceZero/ICONOS/Agent_Hoshimi_Miyabi_Icon.webp" },
                    { id: 37, name: "Yuzuha", icon: "/CodiceZero/ICONOS/Agent_Ukinami_Yuzuha_Icon.webp" },
                    { id: 50, name: "Nangong Yu", icon: "/CodiceZero/ICONOS/Agent_Nangong_Yu_Icon.webp" }
                ]
            },
            {
                name: "Equipo Alice",
                members: [
                    { id: 38, name: "Alice", icon: "/CodiceZero/ICONOS/Agent_Alice_Thymefield_Icon.webp" },
                    { id: 37, name: "Yuzuha", icon: "/CodiceZero/ICONOS/Agent_Ukinami_Yuzuha_Icon.webp" },
                    { id: 50, name: "Nangong Yu", icon: "/CodiceZero/ICONOS/Agent_Nangong_Yu_Icon.webp" }
                ]
            }
        ]
    },
}