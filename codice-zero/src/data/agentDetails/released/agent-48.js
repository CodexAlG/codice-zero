// Agent 48 - Aria - Detailed Stats and Skills
export default {
    baseStats: {
        hp: {
            min: 623, // Usuario agregará
            max: 7749  // Usuario agregará
        },
        atk: {
            min: 124, // Usuario agregará
            max: 863  // Usuario agregará
        },
        def: {
            min: 50, // Usuario agregará
            max: 619  // Usuario agregará
        },
        impact: 87, // Usuario agregará
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "140", // Usuario agregará
        anomalyMastery: "116", // Usuario agregará
        penRatio: "0%",
        energyRegen: "1.2",
    },
    coreStats: {
        statName: "tasa", // Usuario agregará
        valuePerNode: 16 // Usuario agregará
    },
    coreSkillScaling: [
        ["3.1%", "1.6%", "4%", "0.3%", "0.4%", "6.2%"], // Usuario agregará los valores del Core Skill
        ["3.6%", "1.9%", "4.7%", "0.35%", "0.5%", "7.2%"],
        ["4.1%", "2.1%", "5.3%", "0.4%", "0.5%", "8.2%"],
        ["4.7%", "2.4%", "6%", "0.45%", "0.6%", "9.2%"],
        ["5.2%", "2.7%", "6.7%", "0.5%", "0.7%", "10.3%"],
        ["5.7%", "2.9%", "7.3%", "0.55%", "0.7%", "11.3%"],
        ["6.2%", "3.2%", "8%", "0.6%", "0.8%", "12.3%"],
    ],
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico",
            description: "Presiona [Icono Ataque] para activar: Ejecuta hasta 4 ataques consecutivos hacia adelante, causando Daño Etéreo. Si el 4to ataque golpea a un enemigo, 1 (Bastón de Luz) será generado en el campo después de que el ataque finaliza.",
            tags: ["Etéreo", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque de Carga",
            description: "Mantén [Icono Ataque] para activar: Aria entra en un estado de carga de hasta tres niveles. Cuando [Icono Ataque] es soltado o el tiempo máximo de carga es alcanzado, desata un poderoso ataque descendente hacia adelante basado en el nivel de carga, causando masivo Daño Etéreo. Si hay (Bastones de Luz) cerca de Aria mientras carga, ella absorberá los (Bastones de Luz). Cada (Bastón de Luz) absorbido incrementa exitosamente el  nivel de carga por 1, otorga 20 Decibelios, y otorga 1 acumulación de buff; el siguiente (Ataque de Carga)' DAÑO es incrementado en un 10%, y Acumulación de Anomalía aumenta en un 20%. Este buff se acumula hasta 2 veces y se remueve después de que (Ataque de Carga) termina. Después del 4to golpe de (Ataque Básico), (Ataque Especial: Cambio de Golpe), (Ataque Especial EX), o un Nivel 3 (Ataque de Carga), si hay más de 2 (Bastones de Luz) cerca, sosteniendo [Icono Ataque] puede rápidamente Lanzar un Nivel 3 (Ataque de Carga). Después de ejecutar 2 o más consecutivos Nivel 3 (Ataques de Carga), Aria puede inmediatamente seguir con el 4to golpe de (Ataque Básico). Mientras carga, el Nivel Anti-Interrupción de Aria se incrementa y el DAÑO recibido se reduce en un 40%. El nivel de Anti-Interrupción se incrementa mientras usa esta habilidad.",
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
            name: "Ataque Especial",
            description: "Presiona [Icono Especial] para activar: Lanza una patada hacia adelante, causando Daño Etéreo. El nivel de Anti-Interrupción se incrementa mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial",
            name: "Ataque Especial: Cambio de Golpe",
            description: "Después del 4to golpe de 3-Rank (Ataque Básico), 3-Rank (Ataque de Carrera), (Asistencia Rápida), (Ataque en Cadena), (Evasión Perfecta), o a nivel 3 (Ataque de Carga), presiona [Icono Especial] para activar: Lanza una patada más rápida hacia adelante, causando Daño Etéreo. Si el ataque golpea a un enemigo, 1 (Bastón de Luz) será generado en el campo después de que el ataque completa. Después de usar esta habilidad, puede seguir inmediatamente con el 3er golpe de (Ataque Básico). El nivel de Anti-Interrupción se incrementa mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial EX",
            name: "Ataque Especial EX",
            description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso ataque hacia adelante seguido por una onda sónica, causando masivo Daño Etéreo. Si el ataque golpea a un enemigo, genera 1 (Bastón de Luz) en el campo después de que el ataque completa. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Especial EX"]
        },
        {
            type: "Técnica Especial EX",
            name: "Ataque Especial EX: Fase 2",
            description: "(Ataque Especial EX:Cambio) Después de la activación, con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso ataque descendente adicional, causando Daño Etéreo. Si el ataque golpea a un enemigo, 3 (Bastones de Luz) serán generados en el campo después de que el ataque completa. El personaje es invulnerable mientras usa esta habilidad.",
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
            description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata ataques consecutivos hacia adelante, causando masivo Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Ataque en Cadena"]
        },
        {
            type: "Técnica Definitiva",
            name: "Definitiva",
            description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata su poder completo entrando en (Estado Potenciado) y disparando múltiples disparos poderosos en el objetivo, causando masivo Daño Etéreo. Cuando entra en (Estado Potenciado), desbloquea el (Medidor de Potenciación) y gana el número máximo de (Bastones de Luz Súper), mientras activa (Velo Etéreo: Ídolo). Mientras (Velo Etéreo: Ídolo) está activo, todos los miembros del escuadrón ganan 50 de ATK adicional por 30s. Antes de que Aria activa (Velo Etéreo: Ídolo) de nuevo, cualquier (Velo Etéreo: Ídolo) existente es desactivado. Cuando Aria carga, si ella tiene (Bastones de Luz Súper), ella priorizará consumir (Bastones de Luz Súper) para cargar. Cada (Bastón de Luz Súper) se convierte en 2 (Bastones de Luz) cuando es consumido. Cuando ella entra en (Estado Potenciado), durante el máximo de 15s de duración, desbloquea el (Medidor de Potenciación). Cuando sale del (Estado Potenciado), el (Medidor de Potenciación) se bloquea y se vuelve inusable. Cada (Bastón de Luz Súper) se convierte en 2 (Bastones de Luz) cuando se sale del (Estado Potenciado). Durante (Estado Potenciado), (Ataque de Carga) de tercer-nivel de Aria será mejorado. Cuando exita (Estado Potenciado), si hay (Bastones de Luz Súper) sin usado, restante (Bastones de Luz Súper) también se convertirán en (Bastones de Luz) en el campo. Cada (Bastón de Luz Súper) convierte en 2 (Bastones de Luz). El (Medidor de Potenciación) retornará a estado bloqueado y se volverá inusable. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Etéreo", "Técnica Definitiva"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Central: Aria",
            description: "Cuando la 3-Rank (Ataque de Carga) de Aria golpea un objetivo afligido con Anomalía de Atributo de Etéreo, Anomalía de Atributo Eléctrico, Anomalía de Atributo Fuego, Anomalía de Atributo Físico o Anomalía de AtributoHielo, activa (Abloom): causa Daño de Anomalía de Atributo adicional igual al {VALOR_1}/{VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5} del DAÑO de Anomalía de Atributo original por 10 puntos de Proficiencia de Anomalía. Cuando un miembro del escuadrón en el campo activa (Abloom), Aria también gana 2 (Bastones de Luz). Cuando en el escuadrón, enemigos entrando Anomalía de Atributo de Etéreo también entran (Estado Debilitado de Anomalía) por 20s, activaciones repetidas reinician la duración. Si Aria activa Anomalía de Atributo de Etéreo en un enemigo en (Estado Debilitado de Anomalía), ella inmediatamente activa un más poderoso (Abloom), causando Daño de Anomalía de Atributo adicional igual al {VALOR_6} del DAÑO de Anomalía de Atributo original por 10 puntos de Proficiencia de Anomalía. (Abloom) no eliminará la (Anomalía de Atributo) del objetivo.",
            tags: ["Pasiva Central"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional: Aria",
            description: "Cuando otro personaje en tu escuadrón es (Aturdidor) o especialidad (Soporte): Cuando (Velo Etereo) está activo, genera 2 (Bastones de Luz) en el campo. Puede activarse cada 15s. Cuando un enemigo élite o boss en el campo entra en el estado Aturdido, genera 4 (Bastones de Luz) en el campo. Puede activarse una vez cada 25s. Si la Maestría de Anomalía de Aria excede 180, incrementa la Proficiencia de Anomalía en 1.5 por cada 1 punto de Maestría de Anomalía sobre ese umbral.",
            tags: ["Habilidad Adicional"]
        },
        {
            type: "Mindscape 1",
            name: "Talento 1",
            description: "Iris' (Ataque Básico), (Ataque Especial), (Ataques Especiales EX) ignoran el 10% de la Resistencia de Acumulación de Anomalía de Atributo del objetivo oscuro Anomalía de Atributo de Etéreo. Cuando son activados, hay una posibilidad de activar una Tasa CRIT Base. La Tasa CRIT Base es de 40% y el Daño CRIT es de 30% respectivamente. Si CC es mayor que 180, cada punto de Proficiencia de Anomalía excediendo este punto incrementa la Tasa CRIT de este efecto en un extra 0.4%.",
            tags: ["Mindscape 1"]
        },
        {
            type: "Mindscape 2",
            name: "Talento 2",
            description: "La duración del (Estado Potenciado) incrementa a 30s. Incrementa el número máximo de (Bastones de Luz Súper) a 6, y (Mientras Potenciado), los ataques de Iris ignoran el 25% de la DEF del objetivo.",
            tags: ["Mindscape 2"]
        },
        {
            type: "Mindscape 3",
            name: "Talento 3",
            description: "(Ataque Básico), (Evasión), (Asistencia), (Ataque Especial) y (Ataque en Cadena) Lv. +2",
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
            description: "(Ataque Básico), (Evasión), (Asistencia), (Ataque Especial) y (Ataque en Cadena) Lv. +2",
            tags: ["Mindscape 5"]
        },
        {
            type: "Mindscape 6",
            name: "Talento 6",
            description: "Al entrar en el campo de batalla, Aria inmediatamente gana 1,500 Decibeles, y Aria no saldrá del (Estado Potenciado) una vez que el (Ataque de Carga Potenciado) es incrementado en un 20%. Cuando Aria activa una Anomalía de Etéreo de nuevo en el enemigo en el (Estado Debilitado de Anomalía), ella gana 2 (Bastones de Luz Súper).",
            tags: ["Mindscape 6"]
        }
    ]
};
