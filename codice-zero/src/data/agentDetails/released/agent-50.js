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
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Paso de Baile Meteórico",
            description: "Presiona [Icono Ataque]: Realiza hasta tres golpes consecutivos hacia adelante, infligiendo Daño Etéreo",
            tags: ["Etereo", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Cargado: Lindo Choque Volador de Mina Terrestre",
            description: "Mantener pulsado [Icono Ataque] para cargar, al soltar el botón en el momento adecuado, se puede lanzar un Ataque Cargado Preciso, causando Daño Etéreo, el cual aumenta el valor de Aturdimiento infligido por este movimiento en un 20%; Nangong Yu puede lanzar hasta tres etapas de Ataque Cargado, la segunda y tercera etapa de Ataque Cargado requieren consumir 50 puntos de (Contratiempo) cada una; al conectar después de (Ataque en Cadena), (Técnica Definitiva) y (Técnica Especial EX), se puede completar el Ataque Cargado Preciso más fácilmente; (Ataque en Cadena), (Técnica Definitiva) y (Técnica Especial EX) tras su activación, si el (Contratiempo) es suficiente, mantener pulsado [Icono Ataque] permite lanzar directamente la segunda y tercera etapa del Ataque Cargado, y además debe completar los pasos de precisión para acumular Ataque Cargado Preciso; cuando Nangong Yu es el personaje en operación, (Ataque en Cadena), (Técnica Definitiva) y (Técnica Especial EX) no interrumpirán el conteo de combo de (Ataque Cargado: Lindo Choque Volador de Mina Terrestre); durante la carga de la primera etapa del ataque el nivel de resistencia a la interrupción aumenta, y el daño recibido se reduce en un 60%; durante la segunda y tercera etapa del ataque se posee un efecto de invencibilidad; la fase de embestida de la primera etapa del ataque puede bloquear ataques enemigos, si el bloqueo es exitoso este ataque también se considerará como un ataque preciso; todos los ataques poseen efecto de invencibilidad durante su ejecución."
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
            description: "Cuando el personaje en el campo está a punto de ser atacado, pulsar [Icono Assist]: Realiza un parry al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee un rendimiento de parry superior, al recibir ataques de alta intensidad el consumo de (Puntos de Asistencia) se reduce; posee efecto de invencibilidad durante la ejecución del movimiento.",
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
            description: "La Maestría de Anomalía de Nangong Yu aumenta en {VALOR_1} puntos; cuando la Tasa de Anomalía de Nangong Yu es superior a 110 puntos, cada 1 punto que exceda la Tasa de Anomalía inicial aumentará su propio Impacto en 1; cuando un enemigo se encuentra en estado de Aturdimiento, cualquier personaje al infligirle un ataque de (Abloom), un ataque de (Desorden), o al hacerlo entrar en un estado de Anomalía, acumulará 1 capa de (Vibrato) para dicho enemigo; un mismo enemigo puede acumular hasta un máximo de 4 capas de (Vibrato); cuando el enemigo se encuentra en estado de Anomalía de Atributo, si el (Vibrato) se acumula hasta el número máximo de capas, o cuando un enemigo que posee (Vibrato) se recupera del estado de Aturdimiento, todos los (Vibratos) serán eliminados; cuando el (Vibrato) es eliminado, si el enemigo se encuentra en estado de Anomalía, Nangong Yu infligirá un ataque de (Abloom) al objetivo: calculando adicionalmente un daño de Anomalía de Atributo una vez, la proporción relativa al daño de Anomalía de Atributo original es {VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5}/{VALOR_6}, por cada capa de (Vibrato) que tenga el enemigo, el daño de este (Abloom) aumenta adicionalmente un 25%, durante el mismo periodo de Aturdimiento, si el (Vibrato) ya ha sido eliminado, el enemigo no podrá volver a recibir (Vibrato); cuando el (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) o la (Técnica Especial EX) de Nangong Yu golpean a un enemigo, aumentan su propia Eficiencia de Acumulación de Anomalía en un {VALOR_7}, el valor de Aturdimiento causado en un {VALOR_8}, y aumentan el daño infligido por todo el equipo en un 20%, con una duración de 30 segundos, al activarse de nuevo se reinicia la duración. Al estar en estado de combate, Nangong Yu recupera cada segundo 3.8 puntos de (Contratiempo), cuando cualquier personaje del equipo hace que un enemigo entre en estado de Anomalía, recuperará adicionalmente 12 puntos de (Contratiempo) para Nangong Yu, este efecto se activa como máximo una vez cada 6 segundos; Nangong Yu puede poseer un máximo de 100 puntos de (Contratiempo), al recibir inicialmente 30 puntos de (Contratiempo).",
            tags: ["Etereo", "Pasiva Central"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional: Capitana Ángel",
            description: "Se activa cuando existe un personaje de (Anomalía) o un personaje de la misma facción que ella en el equipo: La Eficiencia de Acumulación de Anomalía causada por el ataque de cualquier personaje del equipo al golpear a un enemigo en estado de Aturdimiento aumenta en un 30%, la Eficiencia de Acumulación de Anomalía causada por ataques de (Ataque en Cadena) al golpear a un enemigo en estado de Aturdimiento aumenta adicionalmente en un 30%; cuando cualquier personaje del equipo hace que un enemigo entre en estado de Aturdimiento, Nangong Yu obtiene 2 capas del efecto (Fiebre del Baile), poseyendo un máximo de 2 capas, con una duración de 15 segundos, al poseer (Fiebre del Baile), cuando el golpe pesado de la (Técnica Especial EX), el (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) o la (Asistencia Rápida) de Nangong Yu golpea a un enemigo en estado de Anomalía de Atributo y Aturdimiento, todos los enemigos que cumplan las condiciones activarán un efecto especial de (Desorden) llamado (Desorden de Polaridad), consumiendo 1 capa de (Fiebre del Baile), infligiendo al objetivo un 20% del daño del efecto de (Desorden) original, y además activará la (Asistencia Rápida) o (Asistencia de Velocidad) del personaje anterior del equipo, el (Desorden de Polaridad) eliminará el estado de Anomalía de Atributo en el que se encuentra el objetivo, si dicho movimiento no logra activar (Desorden de Polaridad) entonces no consumirá (Fiebre del Baile); cuando Nangong Yu posee (Fiebre del Baile), la próxima vez que cambie a la vanguardia lanzará directamente la primera etapa de (Ataque Cargado: Lindo Choque Volador de Mina Terrestre), y además obligatoriamente activará el Ataque Cargado Preciso; la primera activación de la (Técnica Especial EX) de Nangong Yu no consumirá energía, este efecto se activa como máximo una vez cada 15 segundos; cuando Nangong Yu y Aria están juntas en el equipo, cuando su (Ataque Básico) cooperativo golpea a un enemigo en estado de Anomalía de Atributo y Aturdimiento, si Nangong Yu completa su participación en este ataque, también consumirá 1 capa de (Fiebre del Baile) para activar (Desorden de Polaridad) en el enemigo; cuando el golpe pesado de la tercera etapa de ataque del (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) o la (Técnica Definitiva) de Nangong Yu golpea a un enemigo, el enemigo obtiene el efecto (Aturdir), los enemigos bajo este efecto ven aumentada su duración de Aturdimiento en 3 segundos tras entrar en estado de Aturdimiento, el valor de Aturdimiento causado se incrementa un 30%, antes de recuperarse del estado de Aturdimiento el efecto (Aturdir) se activa como máximo una vez por objetivo, el efecto de aumento de duración de Aturdimiento no se puede acumular con efectos del mismo tipo, cuando termina el Aturdimiento del enemigo con efecto (Aturdir), el efecto (Aturdir) termina."
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
            description: "Cuando (Técnica Especial EX: Afecto Bastante Pesado) o (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) golpean a un enemigo, reducen la Resistencia a Todos los Atributos del enemigo en un 18%, con una duración de 40 segundos, al activarse de nuevo se reinicia la duración, al entrar al campo de batalla, el (Fiebre del Baile) de Nangong Yu se recupera hasta el valor máximo, en el Cavidad Cero este efecto se activa como máximo una vez cada 180 segundos.",
            tags: ["Etereo", "Mindscape 1"]
        },
        {
            type: "Mindscape 2",
            name: "Lágrimas Indoloras",
            description: "Cada capa de (Vibrato) hace que el aumento adicional del daño de (Abloom) en la (Pasiva Central: Ídolo Genio) pase a ser del 35%; el multiplicador de daño de vulnerabilidad por aturdimiento proporcionado por la (Habilidad Adicional: Capitana Ángel) aumenta adicionalmente en un 30%; cuando el personaje en uso con un golpe de (Ataque en Cadena) golpea al enemigo que se encuentra simultáneamente en estado de Aturdimiento y en estado de Anomalía, se activará (Extremo Caos) en el enemigo, infligiendo al objetivo un 20% del daño del efecto de (Desorden) original, el enemigo solo puede activar este efecto una vez durante el mismo periodo de Aturdimiento, el límite de posesión de (Fiebre del Baile) se incrementa a 3 capas."
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
            description: "Los ataques de Nangong Yu aumentan el valor de Aturdimiento causado en un 50%; cuando el enemigo no se encuentra en estado de Aturdimiento, cualquier personaje del equipo al causar una Anomalía de Atributo o (Abloom) al golpear al enemigo, cada vez que entra en un estado de Anomalía acumulará para su objetivo 1 capa de (Vibrato: Modificado); al ser golpeado por el golpe pesado del (Ataque en Cadena) o del (Ataque Cargado: Lindo Choque Volador de Mina Terrestre) acumulará 1 capa de (Vibrato: Modificado), con (Técnica Definitiva) acumulará 1 capa de (Vibrato: Modificado); (Vibrato: Modificado) se puede acumular hasta un máximo de 4 capas, cuando el enemigo entra en estado de Aturdimiento, (Vibrato: Modificado) será eliminado por completo, cuando (Vibrato: Modificado) es eliminado, Nangong Yu infligirá un ataque de (Abloom) al objetivo: calculando adicionalmente un daño de Anomalía de Atributo una vez, la proporción relativa al daño de Anomalía de Atributo original es 800%/400%/1000%/70%/100%, por cada 1 capa de (Vibrato: Modificado) que tenga el enemigo, el daño de esta (Abloom) aumenta adicionalmente en un 25%; (Vibrato: Modificado) y (Vibrato) no se pueden superponer entre sí; esta (Abloom) no tiene requisito de estado previo; cuando Nangong Yu posee (Fiebre del Baile), la próxima vez que cambie a la vanguardia lanzará directamente la primera etapa de (Ataque Cargado: Lindo Choque Volador de Mina Terrestre), dicho Ataque Cargado será obligatoriamente considerado como un Ataque Cargado Preciso.",
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