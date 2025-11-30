// Agent 47: Ye Shunguang - Detailed Stats and Skills
export default {
    id: 47,
    baseStats: {
        hp: { min: 617, max: 7673 },
        atk: { min: 135, max: 938 },
        def: { min: 49, max: 606 },
        impact: "93",
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "94",
        anomalyMastery: "93",
        penRatio: "0%",
        energyRegen: "1.2",
    },
    coreStats: {
        statName: "crit rate", // Core stat único para alcanzar el cap de buff
        valuePerNode: 4.8,
    },
    materials: {
        weeklyBoss: {
            name: "Exuvia del Refinamiento",
            icon: "Item_Exuvia_of_Refinement.webp"
        },
        eliteBoss: {
            name: "Datos Dimensionales Superiores: Elytron Miásmico",
            icon: "Item_Higher_Dimensional_Data_Miasmic_Elytron.webp"
        }
    },
    equipment: {
        weapons: [
            {
                name: "Lone Light in the Clouds",
                rarity: "S",
                icon: "W-Engine_Lone_Light_in_the_Clouds.webp",
                description: "Aumenta el Daño Físico y la Probabilidad de Crítico."
            },
            {
                name: "Nocturno del Corazón",
                rarity: "S",
                icon: "W-Engine_Heartstring_Nocturne.webp",
                description: "Aumenta el ATQ tras realizar una Evasión o Asistencia."
            },
            {
                name: "Azufre",
                rarity: "S",
                icon: "W-Engine_The_Brimstone.webp",
                description: "Alternativa sólida para daño sostenido."
            }
        ],
        driveDiscs: {
            sets: [
                {
                    name: "Balada de Agua Blanca",
                    count: 4,
                    icon: "SuitWhiteWaterBallad.png",
                    description: "Aumenta el Daño Físico y el daño tras Asalto."
                },
                {
                    name: "Pájaro Carpintero Electro",
                    count: 2,
                    icon: "Drive_Disc_Woodpecker_Electro_Icon.png",
                    description: "Aumenta la Probabilidad de Crítico."
                }
            ],
            stats: {
                main: {
                    iv: "Prob. Crítico / Daño Crítico",
                    v: "Daño Físico / ATQ%",
                    vi: "ATQ%"
                },
                sub: ["Prob. Crítico", "Daño Crítico", "ATQ%", "Penetración"]
            }
        },
        teams: [
            {
                name: "Equipo Premium",
                members: [
                    { name: "Dialyn", role: "Aturdidor", element: "Fisico", icon: "/CodiceZero/ICONOS/Agent_Dialyn_Icon.webp" },
                    { name: "Zhao", role: "Defensa", element: "Hielo", icon: "/CodiceZero/ICONOS/Agent_Zhao_Icon.webp" }
                ]
            },
            {
                name: "Equipo F2P",
                members: [
                    { name: "Koleda", role: "Aturdidor", element: "Fisico", icon: "/CodiceZero/ICONOS/Agent_Koleda_Belobog_Icon.webp" },
                    { name: "Zhao", role: "Defensa", element: "Hielo", icon: "/CodiceZero/ICONOS/Agent_Zhao_Icon.webp" }
                ]
            }
        ],
        skillPriority: [
            "/CodiceZero/Habilidades/Icon_Basic_Attack.webp",
            "/CodiceZero/Habilidades/Icon_EX_Special_Attack.webp",
            "/CodiceZero/Habilidades/Icon_Ultimate_Colored.webp",
            "/CodiceZero/Habilidades/Icon_Dodge.webp",
            "/CodiceZero/Habilidades/Icon_Assist_Attack.png"
        ]
    },
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico ",
            description: "Clic [Icono Ataque] para activar: Realiza hasta cuatro cortes hacia adelante, causando Daño Físico; Al lanzar el cuarto ataque, recuperará todas las espadas en el campo y colocará 6 espadas en el campo.",
            tags: ["Físico", "Ataque Básico"],
        },
        {
            type: "Ataque Básico",
            name: "Qi de Espada",
            description: "Mantener [Icono Ataque] para activar: Lanza rápidamente múltiples ondas de Qi de espada y consume continuamente (Intención de Espada), causando Daño Físico; Se puede extender el ataque haciendo clic repetidamente o manteniendo presionado; Al golpear a un enemigo, aumenta su propia Probabilidad de Crítico en un 6%, dura 60 segundos, se acumula hasta 5 veces, se puede obtener máximo 1 capa cada 0.1 segundos, activar repetidamente refresca la duración.",
            tags: ["Físico", "Ataque Básico"],
        },
        {
            type: "Ataque Básico",
            name: "Forma de Empuñadura Tierra",
            description: "Bajo (Forma de Empuñadura) y estando en el suelo, Clic [Icono Ataque] para activar: Realiza hasta dos etapas de cortes hacia adelante, causando Daño Físico; Al golpear a un enemigo, obtiene 1 capa de efecto (Tendencia Celestial).",
            tags: ["Físico", "Ataque Básico"],
        },
        {
            type: "Ataque Básico",
            name: "Forma de Empuñadura Tierra Tercera Postura",
            description: "Tras la segunda etapa de (Ataque Básico: Forma de Empuñadura Tierra), Clic [Icono Ataque] para activar: Realiza un corte hacia adelante, causando Daño Físico; Tras lanzarlo, Clic [Icono Especial] para activar rápidamente (Ataque Básico: Forma de Empuñadura Cielo Tercera Postura); Al activar el movimiento, si es atacado por un enemigo, puede activar el efecto de bloqueo (Parry), inmunizando ese daño y obteniendo 2 capas de efecto (Tendencia Celestial).  Al lanzar, si posee (Intención de Espada), realizará un corte de gran alcance hacia adelante, causando gran cantidad de Daño Físico; Al golpear a un enemigo, consumirá 1 punto de ( Intención de Espada), y obtendrá 2 capas de efecto (Tendencia Celestial), al mismo tiempo consumirá todo el efecto (Tendencia Celestial), aumentando el daño del movimiento, el valor de aumento específico crece con el nivel de la habilidad (Pasiva Principal)",
            tags: ["Físico", "Ataque Básico"],
        },
        {
            type: "Ataque Básico",
            name: "Forma de Empuñadura Tierra Definitiva",
            description: "En (Ataque de Asistencia: Corte de Retirada) al activar (evasión perfecta), Clic [Icono Ataque] para activar: Realiza un corte hacia adelante, causando Daño Físico; Tras lanzarlo, Clic [Icono Especial] para activar rápidamente (Ataque Básico: Forma de Empuñadura Cielo Tercera Postura); Al activar el movimiento, si es atacado por un enemigo, puede activar el efecto de bloqueo (Parry), inmunizando ese daño, y obteniendo 2 capas de efecto (Tendencia Celestial), se acumula hasta 4 capas.  Al lanzar, si posee ( Intención de Espada), realizará un corte de gran alcance hacia adelante, causando gran cantidad de Daño Físico; Al golpear a un enemigo, consumirá 1 punto de (Intención de Espada), y obtendrá 2 capas de efecto (Tendencia Celestial), al mismo tiempo consumirá todo el efecto (Tendencia Celestial), aumentando el daño del movimiento, el valor de aumento específico crece con el nivel de la habilidad (Pasiva Principal).",
            tags: ["Físico", "Ataque Básico"],
        },
        {
            type: "Ataque Básico",
            name: "Forma de Empuñadura Cielo",
            description: "Bajo (Forma de Empuñadura) y estando en el aire, Clic [Icono Ataque] para activar: Realiza hasta dos etapas de cortes hacia abajo, causando Daño Físico; Al golpear a un enemigo, obtiene 1 capa de efecto (Tendencia Celestial).",
            tags: ["Físico", "Ataque Básico"],
        },
        {
            type: "Ataque Básico",
            name: "Forma de Empuñadura Cielo Tercera Postura",
            description: "Tras la segunda etapa de (Ataque Básico: Forma de Empuñadura Cielo), Clic [Icono Ataque] para activar: Realiza un ataque de caída hacia abajo, causando Daño Físico; Tras lanzarlo, Clic [Icono Ataque] para activar rápidamente (Ataque Básico: Forma de Empuñadura Tierra Tercera Postura); Al activar el movimiento, si es atacado por un enemigo, puede activar el efecto de bloqueo (Parry), inmunizando ese daño, y obteniendo 2 capas de efecto (Tendencia Celestial).  Al lanzar, si posee (  Intención de Espada), realizará un ataque de caída de gran alcance hacia abajo, causando gran cantidad de Daño Físico; Al golpear a un enemigo, consumirá 1 punto de (Intención de Espada), y obtendrá 2 capas de efecto (Tendencia Celestial), al mismo tiempo consumirá todo el efecto (Tendencia Celestial), aumentando el daño del movimiento, el valor de aumento específico crece con el nivel de la habilidad (Pasiva Principal).",
            tags: ["Físico", "Ataque Básico"],
        },
        {
            type: "Evasión",
            name: "Evasión",
            description: "Clic [Icono Dodges] para activar: (Evasión rápida de carrera); Posee efecto de invencibilidad durante la activación; Bajo (Forma de Empuñadura), si se activa una evasión perfecta, Clic [Icono Ataque] para activar rápidamente (Ataque Básico: Forma de Empuñadura Tierra Definitiva).",
            tags: ["Físico", "Evasión"],
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera",
            description: "Al usar (Evasión), Clic [Icono Ataque] para activar: Causa Daño Físico.",
            tags: ["Físico", "Ataque de Carrera", "Evasión"],
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera: Corte de Retirada",
            description: "Bajo (Forma de Empuñadura), sin mover el joystick/palanca Clic [Icono Dodges] para activar: Lanza un rápido corte de retirada, si durante el periodo activa una (evasión perfecta), Clic [Icono Ataque] para activar rápidamente (Ataque Básico: Forma de Empuñadura Tierra Definitiva). Posee estado de invencibilidad durante la activación.",
            tags: ["Físico", "Ataque de Carrera", "Forma de Empuñadura", "Evasión"],
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión",
            description: "Tras activar (Evasión Perfecta), Clic [Icono Ataque] para activar: Causa Daño Físico; Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Evasión"],
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida",
            description: "Cuando el personaje en operación actual es lanzado por los aires, Clic [Icono Assist] para activar: Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Asistencia"],
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva",
            description: "Cuando el personaje en el campo está a punto de ser atacado, Clic [Icono Assist] para activar: Bloquea el ataque del enemigo, acumulando gran cantidad de valor de aturdimiento; Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Asistencia"],
        },
        {
            type: "Asistencia",
            name: "Ataque de Asistencia",
            description: "Tras lanzar (Asistencia Defensiva), Clic [Icono Ataque] para activar: Causa gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Asistencia"],
        },
        {
            type: "Asistencia",
            name: "Ataque de Asistencia",
            description: "Bajo (Forma de Empuñadura), tras lanzar (Asistencia Defensiva), Clic [Icono Ataque] para activar: Causa gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Asistencia", "Forma de Empuñadura"],
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial",
            description: "Clic [Icono Especial] para activar: Si hay una espada en el campo, corre rápidamente a la espada más cercana y lanza un ataque rápido de Qi de espada al enemigo, causando Daño Físico; Si no hay espada en el campo, la activación falla; Tras una activación exitosa, puede encadenar rápidamente (Ataque Básico: Qi de Espada); Durante el movimiento, recupera la espada del campo y la convierte en (Intención de Espada).",
            tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial",
            description: "Mantener [Icono Especial] para activar: Si hay una espada en el campo, corre rápidamente a la espada más cercana y, tras una breve carga, inflige un corte de embestida y un ataque de Qi de espada al enemigo, causando Daño Físico; Si no hay espada en el campo, la activación falla; Tras lanzarlo, puede encadenar rápidamente la tercera etapa de (Ataque Básico); y deja 2 espadas en el campo; Durante el movimiento, recupera la espada del campo y la convierte en (Intención de Espada).",
            tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
        },
        {
            type: "Técnica Especial",
            name: "Forma de Empuñadura - Ascenso",
            description: "Bajo (Forma de Empuñadura), Clic [Icono Especial EX] para activar: Lanza rápidamente un ataque ascendente, causando Daño Físico al enemigo y entrando en estado aéreo. Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial EX",
            description: "Cuando la energía es suficiente, Mantener [Icono Especial EX] para activar: Si hay una espada en el campo, corre rápidamente a la espada más cercana y, tras una breve carga, inflige un corte de embestida y un ataque de Qi de espada al enemigo, causando Daño Físico; Si no hay espada en el campo, la activación falla; durante el movimiento recupera la espada del campo, convirtiéndola en (Intención de Espada); tras lanzarlo puede encadenar rápidamente la tercera etapa de (Ataque Básico), y deja 5 espadas en el campo; Tras la activación, obtiene el efecto (Tendencia Terrestre); y tras entrar en (Forma de Empuñadura), lanzar (Ataque Básico: Forma de Empuñadura Tierra Tercera Postura) se mejorará automáticamente a (Ataque Básico: Forma de Empuñadura Tierra Definit iva), durando hasta que termine la (Forma de Empuñadura).",
            tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
        },
        {
            type: "Técnica Especial EX",
            name: "Forma de Empuñadura Destello",
            description: "Bajo (Forma de Empuñadura), en el aire Mantener [Icono Especial EX] para activar: Lanza cortes rápidos y consume continua y rápidamente (Intención de Espada), hasta agotar la (Intención de Espada).",
            tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
        },
        {
            type: "Técnica Especial EX",
            name: "Forma de Empuñadura Extinción",
            description: "Tras (Técnica Especial EX: Forma de Empuñadura Destello), si la (Intención de Espada) se agota, Clic o Mantener [Icono Especial] para activar: Causa gran cantidad de Daño Físico a una amplia gama de enemigos; Tras activar el movimiento, cierra el (Velo Etéreo: ZhuXie) y sale de la (Forma de Empuñadura).",
            tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
        },
        {
            type: "Ataque en Cadena",
            name: "Ataque en Cadena",
            description: "Al activar (Ataque en Cadena), selecciona el personaje correspondiente para activar: Lanza un poderoso corte a una amplia gama de enemigos en frente, causando gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Ataque en Cadena", "Forma de Empuñadura"],
        },
        {
            type: "Ataque en Cadena",
            name: "Forma de Empuñadura",
            description: "Bajo (Forma de Empuñad ura), al activar (Ataque en Cadena), selecciona el personaje correspondiente para activar: Lanza un poderoso corte a una amplia gama de enemigos en frente, causando gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Ataque en Cadena", "Forma de Empuñadura"],
        },
        {
            type: "Técnica Definitiva",
            name: "Técnica Definitiva",
            description: "Cuando el nivel de Decibelios llega a (Máximo), Clic [Icono Definitiva] para activar: Invoca una formación de espadas, causando gran cantidad de Daño Físico a los enemigos; Tras activar el movimiento, abrirá el (Velo Etéreo: ZhuXie) entrando en (Forma de Empuñadura), y obteniendo 4 puntos de (Intención de Espada), la (Forma de Empuñadura) y el (Velo Etéreo: ZhuXie) duran 12 segundos; Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Técnica Definitiva", "Forma de Empuñadura"],
        },
        {
            type: "Técnica Definitiva",
            name: "Forma de Empuñadura",
            description: "Bajo (Forma de Empuñadura), cuando el nivel de Decibelios llega a (Máximo), Clic [Icono Definitiva] para activar: Invoca una espada gigante, causando gran cantidad de Daño Físico a los enemigos; Tras activar el movimiento, cerrará el (Velo Etéreo: ZhuXie) y saldrá de la (Forma de Empuñadura), y obtendrá 4 puntos de (Intención de Espada). Posee efecto de invencibilidad durante la activación.",
            tags: ["Físico", "Técnica Definitiva", "Forma de Empuñadura"],
        },
        {
            type: "Pasiva Central",
            name: "",
            description: "Tras lanzar (Técnica Definitiva) o (Técnica de Entrada), Ye Shunguang entrará en (Forma de Empuñadura), obteniendo 4 puntos de (Intención de Espada), y abriendo el (Velo Etéreo: ZhuXie), durando hasta 12 segundos; Estando bajo (Forma de Empuñadura), Ye Shunguang usará movimientos más poderosos, lanzar (Ataque Básico) otorgará efecto (Tendencia Celestial), lanzar (Ataque Básico: Forma de Empuñadura Tierra Tercera Postura), (Ataque Básico: Forma de Empuñadura Tierra Definitiva) y (Ataque Básico: Forma de Empuñadura Cielo Tercera Postura) consumirá todo el efecto (Tendencia Celestial), cada capa aumenta el daño de dicho movimiento en un 20%, acumulándose hasta 4 capas, dura hasta que termine la (Forma de Empuñadura); Durante la existencia de (Velo Etéreo: ZhuXie), se aplicará Vulnerabilidad de Aturdimiento a los enemigos, el daño de Aturdimiento falla; si el enemigo no está en estado de Aturdimiento, el multiplicador de vulnerabilidad es el mismo que el multiplicador inicial de vulnerabilidad de Aturdimiento del enemigo, si el enemigo está en estado de Aturdimiento, el multiplicador de vulnerabilidad es el mismo que el multiplicador de vulnerabilidad de Aturdimiento del enemigo, el multiplicador de vulnerabilidad no puede exceder el 80%; Bajo (Forma de Empuñadura), la eficiencia de purificación contra (Escudos) aumenta un 50%.",
            tags: ["Pasiva Central"],
        },
        {
            type: "Habilidad Adicional",
            name: "",
            description: "Se activa cuando hay personajes de (Soporte) o (Defensa) en el equipo: Después de que un compañero active cualquier (Velo Etéreo) o un enemigo active un (Campo de Corrupción), Ye Shunguang obtendrá el efecto (Listo para la Acción), durando hasta que terminen todos los (Velo Etéreo) y (Campo de Corrupción), no acumulable. Cuando Ye Shunguang posee el efecto (Listo para la Acción), la próxima vez que entre al campo en combate consumirá el efecto (Listo para la Acción), y lanzará (Técnica de Entrada), abriendo (Velo Etéreo: ZhuXie) entrando en (Forma de Empuñadura) y obteniendo al mismo tiempo 4 puntos de (Intención de Espada).",
            tags: ["Habilidad Adicional"],
        },
        {
            type: "Mindscape 1",
            name: "Nombre a determinar",
            description: "En (Forma de Empuñadura), el efecto (Tendencia Celestial) no se consumirá, y el número de capas acumulables cambia a 6; al lanzar (Técnica Especial EX: Forma de Empuñadura Destello) bajo (Forma de Empuñadura), por cada 1 punto de (Intención de Espada) restante, aumenta el daño de este movimiento en un 10%.",
            tags: ["Mindscape 1"],
        },
        {
            type: "Mindscape 2",
            name: "Nombre a determinar",
            description: "El límite superior de (Intención de Espada) cambia a 6 puntos, al entrar o salir de (Forma de Empuñadura) por cualquier medio, obtiene 6 puntos de (Intención de Espada); Tras consumir valor de decibelios para lanzar (Técnica Definitiva) entrando en (Forma de Empuñadura), puede lanzar (Técnica Definitiva: Forma de Empuñadura) sin consumo, durando hasta que termine esta (Forma de Empuñadura).",
            tags: ["Mindscape 2"],
        },
        {
            type: "Mindscape 3",
            name: "Nombre a determinar",
            description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), (Ataque en Cadena) +2",
            tags: ["Mindscape 3"],
        },
        {
            type: "Mindscape 4",
            name: "Nombre a determinar",
            description: "El efecto (Tendencia Terrestre) puede acumularse máximo 3 capas, cada capa aumenta adicionalmente el daño de (Ataque Básico: Forma de Empuñadura Tierra Definitiva) en un 15%; Al entrar en combate, obtiene una capa de efecto (Tendencia Terrestre); al salir de (Forma de Empuñadura), obtiene una capa de efecto (Tendencia Terrestre).",
            tags: ["Mindscape 4"],
        },
        {
            type: "Mindscape 5",
            name: "Nombre a determinar",
            description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), (Ataque en Cadena) +2",
            tags: ["Mindscape 5"],
        },
        {
            type: "Mindscape 6",
            name: "Nombre a determinar",
            description: "Al entrar en (Forma de Empuñadura), por cada capa de efecto (Tendencia Terrestre), obtendrá una capa de efecto (Armonía); tras lanzar (Ataque Básico: Forma de Empuñadura Cielo Tercera Postura), puede hacer clic en la tecla de (Técnica Especial) para lanzar rápidamente una vez (Técnica Especial EX: Forma de Empuñadura Destello) sin consumir (Intención de Espada); al lanzar (Técnica Especial EX: Forma de Empuñadura Destello) normalmente y consumir (Intención de Espada), por cada 1 punto de (Intención de Espada) consumido, aumenta el multiplicador de daño de (Técnica Especial EX: Forma de Empuñadura Extinción) en un 10%, hasta un aumento máximo del 60%.",
            tags: ["Mindscape 6"],
        },
    ]
};
