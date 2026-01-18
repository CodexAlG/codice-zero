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
        ["14.5%", "7.6%", "18.8%", "1.35%", "1.9%", "45"],
        ["16.9%", "8.8%", "21.9%", "1.58%", "2.2%", "52"],
        ["19.3%", "10.1%", "25.1%", "1.8%", "2.5%", "60"],
        ["21.8%", "11.3%", "28.2%", "2.03%", "2.9%", "67"],
        ["24.2%", "12.6%", "31.3%", "2.25%", "3.2%", "75"],
        ["26.6%", "13.8%", "34.5%", "2.48%", "3.5%", "82"],
        ["29%", "15.1%", "37.6%", "2.7%", "3.8%", "90"],
    ],
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Ritmo Dulce",
            description: "Presiona [Icono Ataque] para activar: Ejecuta hasta 4 ataques consecutivos hacia adelante, causando Daño Etéreo. Si el 4to ataque golpea a un enemigo, 1 (Energía de Soporte) será generada en el campo después de que el ataque finaliza.",
            tags: ["Etéreo", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque de Carga: Tono Absoluto",
            description: "Mantén [Icono Ataque] para activar: Aria entra en un estado de carga de hasta tres niveles. Cuando [Icono Ataque] es soltado o el tiempo máximo de carga es alcanzado, desata un poderoso ataque descendente hacia adelante basado en el nivel de carga, causando masivo Daño Etéreo. Si hay (Energía de Soporte) cerca de Aria mientras carga, ella absorberá la (Energía de Soporte). Cada (Energía de Soporte) absorbida exitosamente incrementa el nivel de carga por 1 y otorga 1 acumulación de buff: la Acumulación de Anomalía del siguiente Ataque de Carga aumenta un 10%. Este buff se acumula hasta 2 veces y se remueve después de que el Ataque de Carga termina; Después del 4to golpe de (Ataque Básico), (Técnica Especial: Electro-Pop Dulce: Sin Hielo), (Técnica Especial EX), (Técnica Especial EX: Obsesión Instantánea), (Ataque en Cadena), (Definitiva), o un Nivel 3 (Ataque de Carga), si hay más de 2 (Energía de Soporte) cerca, sosteniendo [Icono Ataque] puede lanzar directamente un Lanzamiento Rápido de Nivel 3 (Ataque de Carga); Mientras carga, el Nivel Anti-Interrupción de Aria aumenta y el DAÑO recibido se reduce en un 40%. El personaje es invulnerable durante los Ataques de Carga.",
            tags: ["Etéreo", "Ataque Básico"]
        },
        {
            type: "Evasión",
            name: "Evasión: Ritmo Preciso",
            description: "Presiona [Icono Dodges] para activar: Una evasión rápida de dash. Si se activa durante un (Ataque Básico), no resetea la secuencia de (Ataque Básico) durante la acción. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Evasión"]
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera: Combo Fluido",
            description: "Presiona [Icono Ataque] durante una evasión para activar: Dash hacia adelante y ejecuta un golpe rápido, causando Daño Etéreo. Si se activa durante un (Ataque Básico), no resetea la secuencia del (Ataque Básico).",
            tags: ["Etéreo", "Evasión"]
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión: Variación Deslizante",
            description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Ejecuta un poderoso golpe en el objetivo, causando Daño Etéreo. Después de activar esta habilidad, puede conectar directamente con el 3er golpe de (Ataque Básico). El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Evasión"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial: Electro-Pop Dulce",
            description: "Presiona [Icono Especial] para activar: Lanza una patada hacia adelante, causando Daño Etéreo. El nivel de Anti-Interrupción se incrementa mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial: Electro-Pop Dulce: Sin Hielo",
            description: "Después del 4to golpe de (Ataque Básico), (Asistencia de Seguimiento), (Ataque en Cadena), y (Definitiva), presiona [Icono Especial] para activar: Lanza una patada más rápida hacia adelante, causando Daño Etéreo. Si el ataque golpea a un enemigo, 1 (Energía de Soporte) será generada en el campo después de que el ataque completa. El nivel de Anti-Interrupción se incrementa mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Caída en la Fantasía",
            description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso ataque hacia adelante seguido por una onda sónica, causando masivo Daño Etéreo. Si el ataque golpea a un enemigo, genera 3 (Energía de Soporte) en el campo después de que el ataque completa. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial EX"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Obsesión Instantánea",
            description: "Después de activar (Técnica Especial EX: Caída en la Fantasía), con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso ataque descendente adicional, causando Daño Etéreo. Si el ataque golpea a un enemigo, 3 (Energía de Soporte) serán generadas en el campo después de que el ataque completa. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial EX"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida: Sueño Roto",
            description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Desata un poderoso golpe contra los enemigos en frente, causando Daño Etéreo. Después de activar esta habilidad, puede conectar directamente con el 3er golpe de (Ataque Básico). El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva: Salvación Divina",
            description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parrea el ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Seguimiento de Asistencia: Encore",
            description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Desata golpes consecutivos poderosos en el objetivo, causando masivo Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Asistencia"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena: Colaboración Soñada",
            description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata ataques consecutivos hacia adelante, causando masivo Daño Etéreo. Si los ataques golpean a un enemigo, 4 (Energía de Soporte) serán generadas en el campo después de que el ataque se completa. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Ataque en Cadena"]
        },
        {
            type: "Técnica Definitiva",
            name: "Definitiva: Vitalidad al Máximo",
            description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata su poder completo entrando en (Momento de Fantasía) y disparando múltiples disparos poderosos en el objetivo, causando masivo Daño Etéreo. Cuando entra en (Momento de Fantasía), Aria gana 3 capas de (Apoyo Total), mientras activa (Velo Etereo: Fantasía Bis). Mientras (Velo Etereo: Fantasía Bis) está activo, todos los miembros del escuadrón ganan 50 de ATK adicional por 30s. Antes de que Aria activa (Velo Etereo: Fantasía Bis) de nuevo, cualquier (Velo Etereo: Fantasía Bis) existente será desactivado; Cuando Aria carga, si ella tiene el efecto (Apoyo Total), ella priorizará consumir 1 capa de (Apoyo Total) para cargar. Cada capa de (Apoyo Total) aumenta el nivel de carga en 2; Cuando entra en (Momento de Fantasía), si ella ya tiene el efecto (Apoyo Total), cualquier capa restante de (Apoyo Total) será convertida en (Energía de Soporte) en el campo. Cada capa de (Apoyo Total) se convierte en 2 (Energía de Soporte); (Momento de Fantasía) dura un máximo de 15s. Durante (Momento de Fantasía), el tercer nivel de (Ataque de Carga) de Aria será mejorado a una versión potenciada; Cuando sale de (Momento de Fantasía), si ella tiene el efecto (Apoyo Total), las capas restantes de (Apoyo Total) también serán convertidas en (Energía de Soporte) en el campo. Cada capa de (Apoyo Total) se convierte en 2 (Energía de Soporte); El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Definitiva"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Central: Núcleo de Control",
            description: "La Maestría de Anomalía aumenta en {VALOR_6} puntos.\nCuando el 3-Rank (Ataque de Carga) de Aria golpea un objetivo afectado por Anomalía de Atributo Etéreo, Anomalía de Atributo Eléctrico, Anomalía de Atributo Fuego, Anomalía de Atributo Físico o Anomalía de Atributo Hielo, activa una (Anomalía); en relación al daño de Anomalía de Atributo original, cada 10 puntos de Maestría de Anomalía inicial aumenta el ratio de daño de Anomalía en {VALOR_1}/{VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5}. Cuando el objetivo está en estado de (Aturdimiento), el ratio de DAÑO se incrementa adicionalmente.",
            tags: ["Pasiva Central"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional: Escenario Cooperativo",
            description: "Se activa cuando hay un personaje de Atributo Etéreo o de Soporte en el equipo:\\nCuando (Velo Etereo: Fantasía Bis) está activo, genera 4 (Energía de Soporte) en el campo;\\nCuando cualquier personaje del equipo aplica el efecto de (Erosión) a un enemigo, la Maestría de Anomalía aumenta en 3 niveles.",
            tags: ["Habilidad Adicional"]
        },
        {
            type: "Mindscape 1",
            name: "Talento 1: Onda de Voz Vital",
            description: "Cuando el (Ataque Básico), (Ataque Especial) o (Ataque Especial EX) de Aria inflige daño a un enemigo, ignora el 10% de la RES de Acumulación de Anomalía Etérea del objetivo; Adicionalmente, cuando activa (Abloom), tiene una probabilidad de activar un golpe crítico: La Probabilidad de Crítico Base es 25%, el Daño Crítico es 25%; si la Maestría de Anomalía inicial excede 100, cada punto de Maestría de Anomalía por encima de este umbral incrementa la Probabilidad de Crítico de este efecto en un 0.5% adicional.",
            tags: ["Mindscape 1"]
        },
        {
            type: "Mindscape 2",
            name: "Talento 2: Ritmo de Sueño",
            description: "Durante la duración de (Momento de Fantasía), los ataques de Aria y al activar (Abloom) ignoran el 30% de la DEF del objetivo.",
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
            description: "Al entrar en el campo de batalla, Aria inmediatamente gana 1,500 Decibeles, y una vez que Aria entra en (Momento de Fantasía) ella no saldrá de él. El Daño Etéreo del (Ataque de Carga Potenciado) aumenta en un 20%. Cuando Aria está en (Momento de Fantasía), si un enemigo en el campo entra en un estado de Anomalía de Atributo, Aria gana 1 capa de (Apoyo Total). Este efecto puede activarse una vez cada 8s.",
            tags: ["Mindscape 6"]
        }
    ]
};
