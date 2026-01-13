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
        anomalyRate: "152",
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
        "text-[#22d3ee]", // Hielo (Cyan)
        "text-[#d946ef]"  // Val 6 (Etéreo)
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
        ["14.3%", "7.5%", "18.6%", "1.3%", "1.9%"],
        ["16.7%", "8.7%", "21.6%", "1.52%", "2.2%"],
        ["19.1%", "9.9%", "24.7%", "1.73%", "2.5%"],
        ["21.5%", "11.2%", "27.8%", "1.95%", "2.8%"],
        ["23.8%", "12.4%", "30.9%", "2.17%", "3.1%"],
        ["26.2%", "13.7%", "34.0%", "2.38%", "3.4%"],
        ["28.6%", "14.9%", "37.1%", "2.6%", "3.7%"],
    ],
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico",
            description: "Presiona [Icono Ataque] para activar: Ejecuta hasta 4 ataques consecutivos hacia adelante, causando Daño Etéreo. Si el 4to ataque golpea a un enemigo, 1 (Energía de Soporte) será generada en el campo después de que el ataque finaliza.",
            tags: ["Etéreo", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque de Carga",
            description: "Mantén [Icono Ataque] para activar: Aria entra en un estado de carga de hasta tres niveles. Cuando [Icono Ataque] es soltado o el tiempo máximo de carga es alcanzado, desata un poderoso ataque descendente hacia adelante basado en el nivel de carga, causando masivo Daño Etéreo. Si hay (Energía de Soporte) cerca de Aria mientras carga, ella absorberá la (Energía de Soporte). Cada (Energía de Soporte) absorbida exitosamente incrementa el nivel de carga por 1 y otorga 1 acumulación de buff: la Acumulación de Anomalía del siguiente Ataque de Carga aumenta un 10%. Este buff se acumula hasta 2 veces y se remueve después de que el Ataque de Carga termina; Después del 4to golpe de (Ataque Básico), (Técnica Especial: Cambio de Golpe), (Técnica Especial EX), o un Nivel 3 (Ataque de Carga), si hay (Energía de Soporte) cerca, sosteniendo [Icono Ataque] puede lanzar directamente un Lanzamiento Rápido de Nivel 3 (Ataque de Carga); Mientras carga, el Nivel Anti-Interrupción de Aria aumenta y el DAÑO recibido se reduce en un 40%. El personaje es invulnerable durante los Ataques de Carga.",
            tags: ["Etéreo", "Ataque Básico"]
        },
        {
            type: "Evasión",
            name: "Evasión",
            description: "Presiona [Icono Dodges] para activar: Una evasión rápida de dash. Si se activa durante un (Ataque Básico), no resetea la secuencia de (Ataque Básico) durante la acción. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Evasión"]
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera",
            description: "Presiona [Icono Ataque] durante una evasión para activar: Dash hacia adelante y ejecuta un golpe rápido, causando Daño Etéreo. Si se activa durante un (Ataque Básico), no resetea la secuencia del (Ataque Básico).",
            tags: ["Etéreo", "Evasión"]
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión",
            description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Ejecuta un poderoso golpe en el objetivo, causando Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Evasión"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial",
            description: "Presiona [Icono Especial] para activar: Lanza una patada hacia adelante, causando Daño Etéreo. El nivel de Anti-Interrupción se incrementa mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial: Cambio de Golpe",
            description: "Después del 4to golpe de (Ataque Básico), 3-Rank (Ataque de Carga), (Seguimiento de Asistencia), (Ataque en Cadena), y (Definitiva), presiona [Icono Especial] para activar: Lanza una patada más rápida hacia adelante, causando Daño Etéreo. Si el ataque golpea a un enemigo, 1 (Energía de Soporte) será generada en el campo después de que el ataque completa. El nivel de Anti-Interrupción se incrementa mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX",
            description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso ataque hacia adelante seguido por una onda sónica, causando masivo Daño Etéreo. Si el ataque golpea a un enemigo, genera 1 (Energía de Soporte) en el campo después de que el ataque completa. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial EX"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Fase 2",
            description: "(Técnica Especial EX) Después de la activación, con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso ataque descendente adicional, causando Daño Etéreo. Si el ataque golpea a un enemigo, 3 (Energía de Soporte) serán generadas en el campo después de que el ataque completa. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial EX"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida",
            description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Desata un poderoso golpe contra los enemigos en frente, causando Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva",
            description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parrea el ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Seguimiento de Asistencia",
            description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Desata golpes consecutivos poderosos en el objetivo, causando masivo Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Asistencia"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena",
            description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata ataques consecutivos hacia adelante, causando masivo Daño Etéreo. Si los ataques golpean a un enemigo, 2 (Energía de Soporte) serán generadas en el campo después de que el ataque se completa. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Ataque en Cadena"]
        },
        {
            type: "Técnica Definitiva",
            name: "Definitiva",
            description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata su poder completo entrando en (Estado Potenciado) y disparando múltiples disparos poderosos en el objetivo, causando masivo Daño Etéreo. Cuando entra en (Estado Potenciado), Aria gana el máximo de acumulaciones de (Apoyo de Poder), mientras activa (Velo Etereo: Fantasía Bis). Mientras (Velo Etereo: Fantasía Bis) está activo, todos los miembros del escuadrón ganan 50 de ATK adicional por 30s. Antes de que Aria activa (Velo Etereo: Fantasía Bis) de nuevo, cualquier (Velo Etereo: Fantasía Bis) existente será desactivado; Cuando Aria carga, si ella tiene el efecto (Apoyo de Poder), ella priorizará consumir 1 acumulación de (Apoyo de Poder) para cargar. Cada acumulación de (Apoyo de Poder) aumenta el nivel de carga en 2; Cuando entra en (Estado Potenciado), si ella ya tiene el efecto (Apoyo de Poder), cualquier acumulación restante de (Apoyo de Poder) será convertida en (Energía de Soporte) en el campo. Cada acumulación de (Apoyo de Poder) se convierte en 2 (Energía de Soporte); (Estado Potenciado) dura un máximo de 15s. Durante (Estado Potenciado), el tercer nivel de (Ataque de Carga) de Aria será mejorado a una versión potenciada; Cuando sale de (Estado Potenciado), si ella tiene el efecto (Apoyo de Poder), las acumulaciones restantes de (Apoyo de Poder) también serán convertidas en (Energía de Soporte) en el campo. Cada acumulación de (Apoyo de Poder) se convierte en 2 (Energía de Soporte); El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Definitiva"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Central: Aria",
            description: "Cuando el 3-Rank (Ataque de Carga) de Aria golpea un objetivo afectado por Anomalía de Atributo Etéreo, Anomalía de Atributo Eléctrico, Anomalía de Atributo Fuego, Anomalía de Atributo Físico o Anomalía de Atributo Hielo, activa (Abloom): Causa Daño de Anomalía de Atributo adicional igual al {VALOR_1}/{VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5} del DAÑO de Anomalía de Atributo original por 10 puntos de Maestría de Anomalía inicial. Cuando el objetivo está Aturdido, el ratio de DAÑO se incrementa en un (50%) adicional. Puede activarse una vez cada 1s.\\nCuando un enemigo élite o boss en el campo entra en el estado Aturdido, genera 4 (Energía de Soporte) en el campo. Puede activarse una vez cada 35s.\\nSi la Maestría de Anomalía inicial de Aria excede 180, incrementa la Maestría de Anomalía en 1.2 por cada 1 punto sobre ese umbral.",
            tags: ["Pasiva Central"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional: Aria",
            description: "Cuando otro personaje en tu escuadrón es (Aturdidor) o (Soporte):\\nCuando (Velo Etereo) está activo, genera 4 (Energía de Soporte) en el campo. Puede activarse una vez cada 1s.\\nCuando un enemigo élite o boss en el campo entra en el estado Aturdido, genera 4 (Energía de Soporte) en el campo. Puede activarse una vez cada 35s.\\nSi la Maestría de Anomalía inicial de Aria excede 180, incrementa la Maestría de Anomalía en 1.2 por cada 1 punto sobre ese umbral.",
            tags: ["Habilidad Adicional"]
        },
        {
            type: "Mindscape 1",
            name: "Talento 1",
            description: "Cuando el (Ataque Básico), (Ataque Especial) o (Ataque Especial EX) de Aria inflige daño a un enemigo, ignora el 10% de la RES de Acumulación de Anomalía Etérea del objetivo; Adicionalmente, cuando activa (Abloom), tiene una probabilidad de activar un golpe crítico: La Probabilidad de Crítico Base es 35%, el Daño Crítico es 30%; si la Maestría de Anomalía inicial excede 180, cada punto de Maestría de Anomalía por encima de este umbral incrementa la Probabilidad de Crítico de este efecto en un 0.5% adicional.",
            tags: ["Mindscape 1"]
        },
        {
            type: "Mindscape 2",
            name: "Talento 2",
            description: "El límite de acumulaciones de (Apoyo de Poder) aumenta a 6; durante la duración del (Estado Potenciado), los ataques de Aria ignoran el 30% de la DEF del objetivo.",
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
            name: "Talento 4",
            description: "Cuando Aria activa Abloom, gana 3 Energía y 60 Decibeles. Este efecto puede activarse una vez cada 10 segundos.",
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
            name: "Talento 6",
            description: "Al entrar en el campo de batalla, Aria inmediatamente gana 1,500 Decibeles, y una vez que Aria entra en (Estado Potenciado) ella no saldrá de él. El Daño Etéreo del (Ataque de Carga Potenciado) aumenta en un 20%. Cuando Aria está en (Estado Potenciado), si un enemigo en el campo entra en un estado de Anomalía de Atributo, Aria gana 2 acumulaciones de (Apoyo de Poder). Este efecto puede activarse una vez cada 8s.",
            tags: ["Mindscape 6"]
        }
    ]
};
