// Agent 48 - Aria - Detailed Stats and Skills
export default {
    baseStats: {
        hp: {
            min: 623,
            max: 7749
        },
        atk: {
            min: 124,
            max: 863
        },
        def: {
            min: 50,
            max: 619
        },
        impact: 87,
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "115",
        anomalyMastery: "116",
        penRatio: "0%",
        energyRegen: "1.2",
    },
    coreStats: {
        statName: "Tasa de Anomalía",
        valuePerNode: 12
    },
    coreSkillScalingColors: [
        "text-[#d946ef]", // Etéreo (Pink/Magenta)
        "text-[#3b82f6]", // Eléctrico (Blue)
        "text-[#ef4444]", // Fuego (Red)
        "text-[#eab308]", // Físico (Yellow)
        "text-[#22d3ee]"  // Hielo (Cyan)
    ],
    materials: {
        weeklyBoss: {
            name: "Sustancia Cristalina Nublada",
            icon: "Item_Clouded_Crystalline_Substance.webp",
        },
        eliteBoss: {
            name: "Datos de Dimensiones Superiores: Puño Descendente",
            icon: "Item_Higher_Dimensional_Data_Falling_Fist.webp",
        }
    },
    coreSkillScaling: [
        ["13.8%", "7.2%", "17.9%", "1.25%", "1.8%", "45"],
        ["16%", "8.3%", "20.8%", "1.46%", "2.1%", "52"],
        ["18.3%", "9.5%", "23.8%", "1.67%", "2.4%", "60"],
        ["20.6%", "10.7%", "26.8%", "1.88%", "2.7%", "67"],
        ["22.9%", "11.9%", "29.8%", "2.08%", "3%", "75"],
        ["25.2%", "13.1%", "32.7%", "2.29%", "3.3%", "82"],
        ["27.5%", "14.3%", "35.7%", "2.5%", "3.6%", "90"],
    ],
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Ritmo Dulce",
            description: "Presiona [Icono Ataque] para activar: Realiza hasta cuatro golpes hacia adelante, infligiendo Daño Etéreo; Si el cuarto golpe acierta al enemigo, generará 1 (Energía de Apoyo) en el campo al finalizar el ataque.",
            tags: ["Etéreo", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque de Carga: Tono Absoluto",
            description: "Mantén presionado [Icono Ataque] para activar: Aria entra en estado de carga, se puede cargar hasta dos niveles. Al soltar [Icono Ataque] o alcanzar el tiempo máximo de carga, Aria lanzará un poderoso ataque descendente hacia adelante basado en el nivel de carga actual, infligiendo gran cantidad de Daño Etéreo; Si Aria está cargando y hay (Energía de Apoyo) cerca, absorberá la (Energía de Apoyo). Cada vez que absorba con éxito 1 (Energía de Apoyo), aumentará inmediatamente el nivel de carga en 1 y obtendrá 1 efecto de mejora: El Aturdimiento y el Daño infligidos por el siguiente (Ataque Normal: Tono Absoluto) aumentan un 10%. Este efecto de mejora se puede acumular hasta 2 veces y se elimina tras finalizar el ataque; Tras el cuarto golpe de (Ataque Normal: Ritmo Dulce), (Técnica Especial: Sonido Electrónico Sin Hielo), (Técnica Especial EX), el tercer golpe de (Ataque Normal: Tono Absoluto), (Asistencia Rápida), (Técnica en Cadena) o (Técnica Definitiva), si la cantidad de (Energía de Apoyo) cercana es mayor o igual a 2, se puede mantener presionado [Icono Ataque] consumiendo 2 (Energía de Apoyo) para activar rápidamente la tercera fase de (Ataque Normal: Tono Absoluto); tras el tercer golpe de (Ataque Normal: Tono Absoluto), (Técnica en Cadena) o (Técnica Definitiva), si la cantidad de (Energía de Apoyo) cercana es mayor o igual a 2, también se puede presionar [Icono Ataque] dentro de un periodo de tiempo consumiendo 2 (Energía de Apoyo) para activar rápidamente la tercera fase de (Ataque Normal: Tono Absoluto); Durante el periodo de carga, el nivel de resistencia a la interrupción aumenta, el daño recibido se reduce en un 40% y se posee efecto de invencibilidad durante la ejecución del ataque.",
            tags: ["Etéreo", "Ataque Básico"]
        },
        {
            type: "Evasión",
            name: "Evasión: Ritmo Preciso",
            description: "Presiona [Icono Evasión] para activar: Realiza una evasión rápida con desplazamiento; Si se activa durante (Ataque Normal: Ritmo Dulce), no se reiniciarán los golpes del ataque normal durante esta acción; Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Evasión"]
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera: Pequeño Combo Sedoso",
            description: "Al evadir, presiona [Icono Ataque] para activar: Se lanza hacia adelante realizando cortes rápidos, infligiendo Daño Etéreo; Si se activa durante (Ataque Normal: Ritmo Dulce), no se reiniciarán los golpes del ataque normal durante esta acción.",
            tags: ["Etéreo", "Evasión"]
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión: Variación Dinamica",
            description: "Tras activar una (Evasión Perfecta), presiona [Icono Ataque] para activar: Lanza un poderoso corte al objetivo, infligiendo Daño Etéreo; Tras activar la habilidad, se puede conectar directamente con el tercer golpe de (Ataque Normal: Ritmo Dulce); Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Etéreo", "Evasión"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial: Electro-Pop Dulce",
            description: "Presiona [Icono Especial] para activar: Lanza una patada hacia adelante, infligiendo Daño Etéreo; El nivel de resistencia a la interrupción aumenta durante la activación de la habilidad.",
            tags: ["Etéreo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial: Electro-Pop Dulce: Sin Hielo",
            description: "Tras el cuarto golpe de (Ataque Normal: Ritmo Dulce), (Ataque de Asistencia), (Técnica en Cadena) o (Técnica Definitiva), presiona [Icono Especial] para activar: Lanza una patada aún más veloz hacia adelante, infligiendo Daño Etéreo. Si el ataque acierta al enemigo, generará 1 (Energía de Apoyo) en el campo al finalizar el ataque; Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Etéreo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Caída en la Fantasía",
            description: "Cuando la energía sea suficiente, presiona [Icono Especial EX] para activar: Realiza una poderosa patada hacia adelante seguida de un ataque de onda sonora, infligiendo Daño Etéreo. Si el ataque acierta al enemigo, generará 3 (Energía de Apoyo) en el campo al finalizar el ataque; Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Etéreo", "Técnica Especial EX"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Obsesión Instantánea",
            description: "Tras activar (Técnica Especial EX: Caída en la Fantasía), si la energía es suficiente, presiona [Icono Especial EX] para activar: Añade un poderoso ataque descendente hacia adelante, infligiendo Daño Etéreo. Si el ataque acierta al enemigo, generará 3 (Energía de Apoyo) en el campo al finalizar el ataque; Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Etéreo", "Técnica Especial EX"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida: Sueño Roto",
            description: "Cuando el personaje en operación es derribado, presiona [Icono Asistencia] para activar: Lanza un poderoso corte al objetivo, infligiendo Daño Etéreo; Tras activar la habilidad, se puede conectar directamente con el tercer golpe de (Ataque Normal: Ritmo Dulce); Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Etéreo", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva: Salvación Divina",
            description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Asistencia] para activar: Realiza un bloqueo al ataque del enemigo, acumulando una gran cantidad de aturdimiento; Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Seguimiento de Asistencia: Encore",
            description: "Tras activar (Asistencia Defensiva), presiona [Icono Ataque] para activar: Lanza poderosos cortes continuos al objetivo, infligiendo gran cantidad de Daño Etéreo; Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Etéreo", "Asistencia"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena: Colaboración Soñada",
            description: "Al activar una (Técnica en Cadena), selecciona al personaje correspondiente para activar: Realiza ataques continuos hacia adelante, infligiendo gran cantidad de Daño Etéreo. Al activar la habilidad se generan 4 (Energía de Apoyo) en el campo; Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Etéreo", "Ataque en Cadena"]
        },
        {
            type: "Técnica Definitiva",
            name: "Definitiva: Vitalidad al Máximo",
            description: "Cuando los Decibelios alcanzan el nivel (MÁX), presiona [Icono Definitiva] para activar: Libera todo su poder, entrando en (Momento de Fantasía) y lanzando múltiples ataques poderosos al objetivo, infligiendo gran cantidad de Daño Etéreo; Al entrar en (Momento de Fantasía), Aria obtiene 3 capas del efecto (Apoyo Total), y simultáneamente activa (Velo Etereo: Repetición de Fantasía). Mientras (Velo Etereo: Repetición de Fantasía) esté activo, el Ataque de todos los personajes del equipo aumenta adicionalmente en 50 puntos durante 30 segundos. Si Aria vuelve a activar (Velo Etereo: Repetición de Fantasía), se cerrará el (Velo Etereo: Repetición de Fantasía) existente; Cuando Aria está cargando, si posee el efecto (Apoyo Total), consumirá primero (Apoyo Total) para cargar; cada capa de (Apoyo Total) consumida puede aumentar el nivel de carga en 2; Al entrar en (Momento de Fantasía), si ella misma posee el efecto (Apoyo Total), convertirá las capas restantes de (Apoyo Total) en (Energía de Apoyo) generada en el campo. Cada capa de (Apoyo Total) se puede convertir en 2 (Energía de Apoyo); (Momento de Fantasía) dura un máximo de 15 segundos. Durante el periodo de (Momento de Fantasía), la tercera fase del (Ataque Normal: Tono Absoluto) de Aria se convertirá en una versión mejorada; Al salir de (Momento de Fantasía), si ella misma posee el efecto (Apoyo Total), también convertirá las capas restantes de (Apoyo Total) en (Energía de Apoyo) generada en el campo. Cada capa de (Apoyo Total) se puede convertir en 2 (Energía de Apoyo); Posee efecto de invencibilidad durante la activación de la habilidad.",
            tags: ["Etéreo", "Técnica Definitiva"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Central: Núcleo de Control",
            description: "La Maestría de Anomalia de Aria aumenta en {VALOR_6} puntos; Cuando el tercer golpe de (Ataque Normal: Tono Absoluto) de Aria golpea a un objetivo que se encuentra en estado de Anomalia de Atributo Etéreo, Anomalia de Atributo Eléctrico, Anomalia de Atributo Fuego, Anomalia de Atributo Fisico o Anomalia de Atributo Hielo, activa un (Desorden): en relación al daño de Anomalia de Atributo original, cada 10 puntos de Maestria de Anomalia inicial aumenta el ratio de daño de Anomalia en {VALOR_1}/{VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5}, cuando el objetivo esta desequilibrado, la relación de daño aumenta adicionalmente 50%.",
            tags: ["Pasiva Central"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional: Escenario Cooperativo",
            description: "Se activa cuando hay en el equipo personajes de (Aturdidor), (Soporte) o de la misma facción que ella: Cuando se activa (Velo Etereo), se generan 4 (Energia de Apoyo) en el campo, se activa como máximo 1 vez por segundo; Cuando cualquier personaje del equipo aplica el efecto de (Corrupción) al enemigo, la duracion de dicho efecto aumenta en 3 segundos.",
            tags: ["Habilidad Adicional"]
        },
        {
            type: "Mindscape 1",
            name: "Talento 1: Onda de Voz Vital",
            description: "Cuando el (Ataque Básico), (Ataque Especial) o (Ataque Especial EX) de Aria inflige daño a un enemigo, ignora el 10% de la RES de Acumulación de Anomalía Etérea del objetivo; Adicionalmente, cuando activa (Abloom), tiene una probabilidad de activar un golpe crítico: La Probabilidad de Crítico Base es 25%, el Daño Crítico es 25%; si la Tasa de Anomalía inicial excede 100, cada punto de Tasa de Anomalía por encima de este umbral incrementa la Probabilidad de Crítico de este efecto en un 0.5% adicional.",
            tags: ["Mindscape 1"]
        },
        {
            type: "Mindscape 2",
            name: "Talento 2: Ritmo de Sueño",
            description: "Cuando Aria ataca y activa (Abloom), ignora el 16% de la DEF del objetivo; durante la duración de (Momento de Fantasía), al atacar y activar (Desorden), ignora adicionalmente un 8% de la Defensa del objetivo.",
            tags: ["Mindscape 2"]
        },
        {
            type: "Mindscape 3",
            name: "Talento 3",
            description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2",
            tags: ["Mindscape 3"]
        },
        {
            type: "Mindscape 4",
            name: "Talento 4: Ángel Mecánico",
            description: "Cuando Aria activa (Abloom), ella recupera 4 de Energía y 70 Puntos de Decibelios. Este efecto puede activarse una vez cada 10s.",
            tags: ["Mindscape 4"]
        },
        {
            type: "Mindscape 5",
            name: "Talento 5",
            description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2",
            tags: ["Mindscape 5"]
        },
        {
            type: "Mindscape 6",
            name: "Talento 6: Sueño de Constructo",
            description: "Al entrar en el campo de batalla, Aria inmediatamente gana 1,200 Decibeles; En el modo Hollow Zero (Cavidad Cero), este efecto se activa como máximo una vez cada 180 segundos y una vez que Aria entra en (Momento de Fantasía) ella no saldrá de él. El Daño Etéreo del (Ataque Normal: Tono Absoluto) y (Técnica Definitiva) aumenta en un 40%. Cuando Aria está en (Momento de Fantasía), si un enemigo en el campo entra en un estado de Anomalía de Atributo, Aria gana 1 capa de (Apoyo Total). Este efecto puede activarse una vez cada 6s; al obtener el efecto de (Apoyo Total), si ella misma ya tiene 3 capas de (Apoyo Total), convertirá el efecto de (Apoyo Total) excedente en 2 (Energía de Apoyo) generadas en el campo.",
            tags: ["Mindscape 6"]
        }
    ]
};
