
// Mock versioned agent data for BetaDiffViewer demonstration
// This data represents different beta versions of agents with stat and skill changes

export const versionedAgents = {
    // Agent 48 - Aria (Beta versions)
    48: {
        id: 48,
        name: "Aria",
        versions: {
            "v2.6.1": {
                versionLabel: "v2.6.1",
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
                    statName: "Tasa de Anomalía", // Usuario agregará
                    valuePerNode: 16 // Usuario agregará
                },
                coreSkillScalingColors: [
                    "text-[#d946ef]", // Etéreo (Pink/Magenta)
                    "text-[#3b82f6]", // Eléctrico (Blue)
                    "text-[#ef4444]", // Fuego (Red)
                    "text-[#eab308]", // Físico (Yellow)
                    "text-[#22d3ee]", // Hielo (Cyan)
                    "text-[#d946ef]"  // Val 6 (Etéreo)
                ],
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
                        description: "Mantén [Icono Ataque] para activar: Aria entra en un estado de carga de hasta tres niveles. Cuando [Icono Ataque] es soltado o el tiempo máximo de carga es alcanzado, desata un poderoso ataque descendente hacia adelante basado en el nivel de carga, causando masivo Daño Etéreo. Si hay (Bastones de Luz) cerca de Aria mientras carga, ella absorberá los (Bastones de Luz). Cada (Bastón de Luz) absorbido incrementa exitosamente el  nivel de carga por 1, otorga 20 Decibelios, y otorga 1 acumulación de buff; el siguiente (Ataque de Carga)' DAÑO es incrementado en un 10%, y Acumulación de Anomalía aumenta en un 20%. Este buff se acumula hasta 2 veces y se remueve después de que (Ataque de Carga) termina. Después del 4to golpe de (Ataque Básico), (Técnica Especial: Cambio de Golpe), (Técnica Especial EX), o un Nivel 3 (Ataque de Carga), si hay más de 2 (Bastones de Luz) cerca, sosteniendo [Icono Ataque] puede rápidamente Lanzar un Nivel 3 (Ataque de Carga). Después de ejecutar 2 o más consecutivos Nivel 3 (Ataques de Carga), Aria puede inmediatamente seguir con el 4to golpe de (Ataque Básico). Mientras carga, el Nivel Anti-Interrupción de Aria se incrementa y el DAÑO recibido se reduce en un 40%. El nivel de Anti-Interrupción se incrementa mientras usa esta habilidad.",
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
                        description: "Después del 4to golpe de 3-Rank (Ataque Básico), 3-Rank (Ataque de Carrera), (Asistencia Rápida), (Ataque en Cadena), (Evasión Perfecta), o a nivel 3 (Ataque de Carga), presiona [Icono Especial] para activar: Lanza una patada más rápida hacia adelante, causando Daño Etéreo. Si el ataque golpea a un enemigo, 1 (Bastón de Luz) será generado en el campo después de que el ataque completa. Después de usar esta habilidad, puede seguir inmediatamente con el 3er golpe de (Ataque Básico). El nivel de Anti-Interrupción se incrementa mientras usa esta habilidad.",
                        tags: ["Etéreo", "Técnica Especial"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX",
                        description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso ataque hacia adelante seguido por una onda sónica, causando masivo Daño Etéreo. Si el ataque golpea a un enemigo, genera 1 (Bastón de Luz) en el campo después de que el ataque completa. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Etéreo", "Técnica Especial EX"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX: Fase 2",
                        description: "(Técnica Especial EX:Cambio) Después de la activación, con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso ataque descendente adicional, causando Daño Etéreo. Si el ataque golpea a un enemigo, 3 (Bastones de Luz) serán generados en el campo después de que el ataque completa. El personaje es invulnerable mientras usa esta habilidad.",
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
                        description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata su poder completo entrando en (Estado Potenciado) y disparando múltiples disparos poderosos en el objetivo, causando masivo Daño Etéreo. Cuando entra en (Estado Potenciado), desbloquea el (Medidor de Potenciación) y gana el número máximo de (Bastones de Luz Súper), mientras activa (Velo Etereo: Ídolo). Mientras (Velo Etereo: Ídolo) está activo, todos los miembros del escuadrón ganan 50 de ATK adicional por 30s. Antes de que Aria activa (Velo Etereo: Ídolo) de nuevo, cualquier (Velo Etereo: Ídolo) existente es desactivado. Cuando Aria carga, si ella tiene (Bastones de Luz Súper), ella priorizará consumir (Bastones de Luz Súper) para cargar. Cada (Bastón de Luz Súper) se convierte en 2 (Bastones de Luz) cuando es consumido. Cuando ella entra en (Estado Potenciado), durante el máximo de 15s de duración, desbloquea el (Medidor de Potenciación). Cuando sale del (Estado Potenciado), el (Medidor de Potenciación) se bloquea y se vuelve inusable. Cada (Bastón de Luz Súper) se convierte en 2 (Bastones de Luz) cuando se sale del (Estado Potenciado). Durante (Estado Potenciado), (Ataque de Carga) de tercer-nivel de Aria será mejorado. Cuando exita (Estado Potenciado), si hay (Bastones de Luz Súper) sin usado, restante (Bastones de Luz Súper) también se convertirán en (Bastones de Luz) en el campo. Cada (Bastón de Luz Súper) convierte en 2 (Bastones de Luz). El (Medidor de Potenciación) retornará a estado bloqueado y se volverá inusable. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Etéreo", "Técnica Definitiva"]
                    },
                    {
                        type: "Pasiva Central",
                        name: "Pasiva Central: Aria",
                        description: "Cuando la 3-Rank (Ataque de Carga) de Aria golpea un objetivo afligido con (Anomalía de Atributo de Etéreo), (Anomalía de Atributo Eléctrico), (Anomalía de Atributo Fuego), (Anomalía de Atributo Físico) o (Anomalía de Atributo Hielo), activa (Abloom): causa Daño de Anomalía de Atributo adicional igual al {VALOR_1}/{VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5} del DAÑO de Anomalía de Atributo original por 10 puntos de Maestría de Anomalía. Cuando un miembro del escuadrón en el campo activa (Abloom), Aria también gana 2 (Bastones de Luz). Cuando en el escuadrón, enemigos entrando (Anomalía de Atributo de Etéreo) también entran (Estado Debilitado de Anomalía) por 20s, activaciones repetidas reinician la duración. Si Aria activa (Anomalía de Atributo de Etéreo) en un enemigo en (Estado Debilitado de Anomalía), ella inmediatamente activa un más poderoso (Abloom), causando Daño de Anomalía de Atributo adicional igual al {VALOR_6} del DAÑO de Anomalía de Atributo original por 10 puntos de Maestría de Anomalía. (Abloom) no eliminará la (Anomalía de Atributo) del objetivo.",
                        tags: ["Pasiva Central"]
                    },
                    {
                        type: "Habilidad Adicional",
                        name: "Habilidad Adicional: Aria",
                        description: "Cuando otro personaje en tu escuadrón es (Aturdidor) o especialidad (Soporte): Cuando (Velo Etereo) está activo, genera 2 (Bastones de Luz) en el campo. Puede activarse cada 15s. Cuando un enemigo élite o boss en el campo entra en el estado Aturdido, genera 4 (Bastones de Luz) en el campo. Puede activarse una vez cada 25s. Si la Maestría de Anomalía de Aria excede 180, incrementa la Maestría de Anomalía en 1.5 por cada 1 punto de Maestría de Anomalía sobre ese umbral.",
                        tags: ["Habilidad Adicional"]
                    },
                    {
                        type: "Mindscape 1",
                        name: "Talento 1",
                        description: "Iris' (Ataque Básico), (Técnica Especial), (Ataques Especiales EX) ignoran el 10% de la Resistencia de Acumulación de Anomalía de Atributo del objetivo oscuro Anomalía de Atributo de Etéreo. Cuando son activados, hay una posibilidad de activar una Probabilidad de Crit Base. La Probabilidad de Crit Base es de 40% y el Daño CRIT es de 30% respectivamente. Si La Tasa de Anomalía es mayor que 180, cada punto de Maestría de Anomalía excediendo este punto incrementa la Probabilidad de Crit de este efecto en un extra 0.4%.",
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
                        description: "Al entrar en el campo de batalla, Aria inmediatamente gana 1,500 Decibeles, y Aria no saldrá del (Estado Potenciado) una vez que el (Ataque de Carga Potenciado) el Daño Etéreo es incrementado en un 20%. Cuando Aria activa una Anomalía Etéreo de nuevo en el enemigo en el (Estado Debilitado de Anomalía), ella gana 2 (Bastones de Luz Súper).",
                        tags: ["Mindscape 6"]
                    }
                ]
            },
            "v2.6.2": {
                versionLabel: "v2.6.2",
                coreSkillScalingColors: [
                    "text-[#d946ef]",
                    "text-[#3b82f6]",
                    "text-[#ef4444]",
                    "text-[#eab308]",
                    "text-[#22d3ee]",
                    "text-[#d946ef]"
                ],
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
                        description: "Cuando el 3-Rank (Ataque de Carga) de Aria golpea un objetivo afectado por Anomalía de Atributo Etéreo, Anomalía de Atributo Eléctrico, Anomalía de Atributo Fuego, Anomalía de Atributo Físico o Anomalía de Atributo Hielo, activa (Abloom): Causa Daño de Anomalía de Atributo adicional igual al {VALOR_1}/{VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5} del DAÑO de Anomalía de Atributo original por 10 puntos de Maestría de Anomalía inicial. Cuando el objetivo está Aturdido, el ratio de DAÑO se incrementa en un (50%) adicional.",
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
                        type: "Mindscape 6",
                        name: "Talento 6",
                        description: "Al entrar en el campo de batalla, Aria inmediatamente gana 1,500 Decibeles, y una vez que Aria entra en (Estado Potenciado) ella no saldrá de él. El Daño Etéreo del (Ataque de Carga Potenciado) aumenta en un 20%. Cuando Aria está en (Estado Potenciado), si un enemigo en el campo entra en un estado de Anomalía de Atributo, Aria gana 2 acumulaciones de (Apoyo de Poder). Este efecto puede activarse una vez cada 8s.",
                        tags: ["Mindscape 6"]
                    }
                ]
            },
            "v2.6.3": {
                versionLabel: "v2.6.3",
                baseStats: { hp: { min: 623, max: 7749 }, atk: { min: 124, max: 863 }, def: { min: 50, max: 619 }, impact: 87, crit: "5%", critDmg: "50%", anomalyRate: "140", anomalyMastery: "116", penRatio: "0%", energyRegen: "1.2" },
                coreStats: { statName: "Tasa de Anomalía", valuePerNode: 16 },
                coreSkillScalingColors: [
                    "text-[#d946ef]",
                    "text-[#3b82f6]",
                    "text-[#ef4444]",
                    "text-[#eab308]",
                    "text-[#22d3ee]"
                ],
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
                        type: "Mindscape 4",
                        name: "Talento 4: Ángel Mecánico",
                        description: "Cuando Aria activa (Abloom), ella recupera 4 de Energía y 70 Puntos de Decibelios. Este efecto puede activarse una vez cada 10s.",
                        tags: ["Mindscape 4"]
                    },
                    {
                        type: "Mindscape 6",
                        name: "Talento 6: Sueño de Constructo",
                        description: "Al entrar en el campo de batalla, Aria inmediatamente gana 1,500 Decibeles, y una vez que Aria entra en (Momento de Fantasía) ella no saldrá de él. El Daño Etéreo del (Ataque de Carga Potenciado) aumenta en un 20%. Cuando Aria está en (Momento de Fantasía), si un enemigo en el campo entra en un estado de Anomalía de Atributo, Aria gana 1 capa de (Apoyo Total). Este efecto puede activarse una vez cada 8s.",
                        tags: ["Mindscape 6"]
                    }
                ]
            }
        },
    },
    // Agent 49 - Sunna (Beta versions)
    49: {
        id: 49,
        name: "Sunna",
        versions: {
            "v2.6.1": {
                versionLabel: "v2.6.1",
                baseStats: {
                    hp: {
                        min: 681, // Placeholder
                        max: 8477 // Placeholder
                    },
                    atk: {
                        min: 108, // Placeholder
                        max: 750 // Placeholder
                    },
                    def: {
                        min: 48, // Placeholder
                        max: 600 // Placeholder
                    },
                    impact: 83, // Placeholder
                    crit: "5%",
                    critDmg: "50%",
                    anomalyRate: "96", // Placeholder
                    anomalyMastery: "95", // Placeholder
                    penRatio: "0%",
                    energyRegen: "1.2",
                },
                coreStats: {
                    statName: "atq%", // Inferido
                    valuePerNode: 0, // Placeholder
                },
                coreSkillScaling: [
                    ["30%", "400"],
                    ["30%", "500"],
                    ["30%", "600"],
                    ["30%", "700"],
                    ["30%", "800"],
                    ["30%", "900"],
                    ["30%", "1000"],
                ],
                skills: [
                    {
                        type: "Ataque Básico",
                        name: "Ataque Básico: Martillazo a la Cara",
                        description: "Presiona [Icono Ataque] para activar: Desata hasta 4 ataques hacia adelante, infligiendo Daño Físico.",
                        tags: ["Físico", "Ataque Básico"]
                    },
                    {
                        type: "Ataque Básico",
                        name: "Ataque Básico: Arañazo de Pata",
                        description: "Cuando Sunna está fuera del campo en combate y no hay enemigos con la marca (Hipnotizado) en el campo, Kitty consumirá 1 (Punto de Ataque) de Sunna y lanzará automáticamente un ataque, infligiendo Daño Físico. Cuando cualquier miembro del escuadrón activa o extiende cualquier (Velo Etereo), Sunna gana 3 (Puntos de Ataque).",
                        tags: ["Físico", "Ataque Básico", "Fuera del Campo"]
                    },
                    {
                        type: "Evasión",
                        name: "Evasión: Volar",
                        description: "Presiona [Icono Dodges] para activar: Una evasión rápida de dash. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Evasión"]
                    },
                    {
                        type: "Evasión",
                        name: "Ataque de Carrera: Corte Ascendente",
                        description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza a los enemigos en frente por los aires, infligiendo Daño Físico.",
                        tags: ["Físico", "Evasión"]
                    },
                    {
                        type: "Evasión",
                        name: "Contraataque de Evasión: Triple Gancho",
                        description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Martillea continuamente a los enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Evasión"]
                    },
                    {
                        type: "Técnica Especial",
                        name: "Técnica Especial: Pistola de Aire",
                        description: "Presiona [Icono Especial] para activar: Dispara un gatito usando una pistola de aire para atacar a los enemigos adelante, infligiendo Daño Físico. Después de activar la habilidad, si no hay gatos en el campo, invoca un gatito.",
                        tags: ["Físico", "Técnica Especial"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX: Golpe de Gato",
                        description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un gato para golpear al objetivo e infligir Daño Físico. Después de activar esta habilidad, si no hay gatos en el campo, invoca un gato. Al activar esta habilidad, aplica el efecto (Fiebre) a todos los Agentes en el escuadrón durante 40s. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Técnica Especial EX"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX: Ataque de Enlace de Cámara",
                        description: "Después de entrar en (Fiebre), presiona [Icono Especial EX] para activar: Golpea a los enemigos objetivo junto con Kitty, infligiendo Daño Físico. Después de usar esta habilidad, si no hay gato en el campo, invoca a Kitty. Cuando se activa el ataque pesado, abre (Velo Etereo: Ídolo). Mientras (Velo Etereo: Ídolo) está activo, incrementa el ATK de todos los miembros del escuadrón en 50 puntos adicionales durante 30s. Antes de que Sunna reabra (Velo Etereo: Ídolo), el (Velo Etereo: Ídolo) existente se cerrará. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad. Cada vez que se entra en (Fiebre), (Técnica Especial EX: Golpe Combinado Fotográfico) solo puede activarse una vez.",
                        tags: ["Físico", "Técnica Especial EX", "Velo Etereo"]
                    },
                    {
                        type: "Técnica Definitiva",
                        name: "Ataque en Cadena: Embestida Gatuna",
                        description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Carga hacia adelante en un gato, embistiendo a los enemigos adelante y causando Daño Físico masivo. Se activa una (Asistencia Rápida) cuando el ataque pesado de la habilidad golpea a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Ataque en Cadena"]
                    },
                    {
                        type: "Técnica Definitiva",
                        name: "Definitiva: Golpea al Topo",
                        description: "Cuando la Calificación de Decibelios está al Máximo, presiona [Icono Definitiva] para activar: Juega a golpea al topo con el gato mientras ataca a los enemigos, causando Daño Físico masivo. Cuando se activa un ataque pesado, se habilita (Velo Etereo: Ídolo). Cuando un ataque pesado de habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Técnica Definitiva"]
                    },
                    {
                        type: "Asistencia",
                        name: "Asistencia Rápida: Triple Gancho",
                        description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea a los enemigos en frente con golpes de martillo consecutivos, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Asistencia"]
                    },
                    {
                        type: "Asistencia",
                        name: "Asistencia Defensiva: Bloqueo",
                        description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parry al ataque del enemigo, causando Aturdimiento masivo. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Asistencia", "Aturdimiento"]
                    },
                    {
                        type: "Asistencia",
                        name: "Seguimiento de Asistencia: Martillo",
                        description: "Presiona [Icono Ataque] después de una Asistencia Defensiva para activar: Desata golpes de martillo consecutivos hacia adelante, infligiendo Daño Físico masivo. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Asistencia"]
                    },
                    {
                        type: "Pasiva Central",
                        name: "Pasiva Central: Sunna",
                        description: "Los personajes en el estado (Fiebre) ganan ATK aumentado igual al {VALOR_1} del ATK inicial de Sunna, hasta un máximo de {VALOR_2}. (Ataque Básico: Arañazo de Pata), (Técnica Especial EX: Golpe de Gato), (Técnica Especial EX: Ataque de Enlace de Cámara), (Ataque en Cadena: Embestida Gatuna) y (Definitiva: Golpea al Topo) aplican la marca (Hipnotizado) a los objetivos al golpear, durando 12 segundos. Mientras Sunna está en el campo, la duración de la marca (Hipnotizado) se refresca continuamente; los enemigos normales con la marca (Hipnotizado) tienen aggro reducido hacia Sunna. Cuando personajes de (Ataque) o (Anomalía) en el escuadrón atacan continuamente y aciertan un ataque pesado en enemigos con la marca (Hipnotizado), activan y detonan la marca (Hipnotizado). Cuando un personaje de (Ataque) la detona, infligen Daño de Atributo igual al (210%) del ATK a los enemigos en rango. Cuando un personaje de (Anomalía) la detona, infligen Daño de Atributo igual al (210%) del ATK a los enemigos en rango. Este DAÑO está garantizado de ser CRÍTICO y el Daño CRIT aumenta en un (100%). Cuando múltiples enemigos con la marca (Hipnotizado) están en el campo, solo la marca (Hipnotizado) del objetivo principal de ataque será activada, y otras marcas (Hipnotizado) serán eliminadas. Cuando un enemigo está Aturdido, la marca (Hipnotizado) se activa más rápidamente.",
                        tags: ["Pasiva Central", "Físico"]
                    },
                    {
                        type: "Habilidad Adicional",
                        name: "Habilidad Adicional: Sunna",
                        description: "Cuando otro personaje en tu escuadrón es un Personaje de (Ataque) o (Anomalía): \nCuando un personaje dentro de (Velo Etereo: Ídolo) golpea a un enemigo con un ataque, el Multiplicador de Daño de Aturdimiento del objetivo aumenta en un 30% por 40s. \nCuando otro personaje en tu escuadrón es un Personaje de (Ataque), mientras (Velo Etereo: Ídolo) está activo, el Daño CRIT de todos los miembros del escuadrón aumenta en un 15%. \nCuando otro personaje en tu escuadrón es un Personaje de (Anomalía), mientras (Velo Etereo: Ídolo) está activo, la Maestría de Anomalía de todos los miembros del escuadrón aumenta en 30.",
                        tags: ["Habilidad Adicional"]
                    },
                    {
                        type: "Mindscape 1",
                        name: "1. Síndrome de Corrupcion de Soledad",
                        description: "(Hipnotizado) Cuando una explosión de marca golpea a un enemigo, reduce la DEF del objetivo en un 5% durante 15 segundos. Puede acumularse hasta 3 veces. La duración de cada acumulación se calcula por separado.",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 2",
                        name: "2. Los Gatos se Dejan Llevar",
                        description: "Mientras Sunna está dentro de cualquier (Velo Etereo), gana 1 (Punto de Ataque) cada 10s; cuando la marca (Hipnotizado) es activada, su DAÑO ignora el 15% de la RES de Atributo del objetivo.",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 3",
                        name: "3. Transformación de Manzana",
                        description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 4",
                        name: "4. Escuadrón de Investigación de Delirios",
                        description: "Cuando Sunna entra al campo de batalla, restaura 20 de Energía. Este efecto puede activarse una vez cada 180 segundos en Zona de Investigación; cuando activa (Técnica Especial EX: Ataque de Enlace de Cámara), restaura 2.5% de HP para todos los miembros del escuadrón.",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 5",
                        name: "5. Expreso Galáctico",
                        description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 6",
                        name: "6. Big Bang del Hueco",
                        description: "Cuando Sunna activa su (Técnica Especial EX), entra en el estado (Big Bang) por 8 segundos; \nDurante el estado (Big Bang), los ataques de Sunna son CRÍTICOS garantizados, y su Daño CRIT aumenta en un 0.02% de su ATK inicial, hasta un aumento máximo del 60%; \nDurante el estado (Big Bang), Sunna puede activar marcas (Hipnotizado), infligiendo DAÑO igual al 210% de su ATK a enemigos en rango; si Sunna tiene (Puntos de Ataque) al activar marcas (Hipnotizado), inmediatamente consume los (Puntos de Ataque) y aplica marcas (Hipnotizado) a los enemigos de nuevo; \nDurante el estado (Big Bang), el DAÑO infligido por todo el escuadrón al activar marcas (Hipnotizado) aumenta en un 20%.",
                        tags: ["Mindscape"]
                    }
                ]
            },
            "v2.6.2": {
                versionLabel: "v2.6.2",
                coreSkillScaling: [
                    ["180%", "240%", "40%"],
                    ["210%", "280%", "50%"],
                    ["240%", "320%", "60%"],
                    ["270%", "360%", "70%"],
                    ["300%", "400%", "80%"],
                    ["330%", "440%", "90%"],
                    ["360%", "480%", "100%"],
                ],
                skills: [
                    {
                        type: "Ataque Básico",
                        name: "Ataque Básico: Martillo Meteoro Fantasmal",
                        description: "Presiona [Icono Ataque] para activar: Desata hasta 4 ataques al frente, infligiendo Daño Físico.",
                        tags: ["Físico", "Ataque Básico"]
                    },
                    {
                        type: "Ataque Básico",
                        name: "Ataque Básico: Gatita Mala al Acecho",
                        description: "Cuando Sunna está fuera del campo en combate y no hay enemigos con la marca (Mirada de Gato) en el campo, Bubble Pop consumirá 1 (Pulidor de Uñas) y lanzará automáticamente un ataque, infligiendo Daño Físico. Cuando cualquier miembro del escuadrón activa o extiende cualquier (Velo Etereo), Sunna gana 2 (Pulidores de Uñas).",
                        tags: ["Físico", "Ataque Básico"]
                    },
                    {
                        type: "Evasión",
                        name: "Evasión: No Me Puedes Tocar",
                        description: "Presiona [Icono Dodges] para activar: Una evasión rápida. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Evasión"]
                    },
                    {
                        type: "Evasión",
                        name: "Ataque de Carrera: Martillo Celestial",
                        description: "Presiona [Icono Ataque] durante una esquiva para activar: Lanza enemigos al frente hacia el aire, infligiendo Daño Físico.",
                        tags: ["Físico", "Ataque de Embestida"]
                    },
                    {
                        type: "Evasión",
                        name: "Contraataque de Evasión: Delusión Triplex",
                        description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Martilla continuamente a los enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Contador de Evasión"]
                    },
                    {
                        type: "Técnica Especial",
                        name: "Técnica Especial: Lanzador Estelar",
                        description: "Presiona [Icono Especial] para activar: Dispara Bubble Pop desde el Air Gun para atacar enemigos adelante, infligiendo Daño Físico. Después de activar esta habilidad, (Bubble Pop se une) al combate.",
                        tags: ["Físico", "Técnica Especial"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX: Bombardeo Bubblegum",
                        description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un gato usando el arma para el objetivo e inflige Daño Físico. Después de activar esta habilidad, (Bubble Pop se une) al combate. Cuando se activa la habilidad, aplica el efecto (Acorde de Ángel) a todos los Agentes en el escuadrón por 35s. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Técnica Especial EX"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX: Técnica de Cámara Especial",
                        description: "Después de entrar en (Acorde de Ángel), presiona [Icono Especial EX] para activar, o durante (Fiebre), mantén presionado [Icono Especial] para el (Quick Assist): Lanza un Ataque Coordinado con Bubble Pop contra enemigos objetivo, infligiendo Daño Físico. Después de usar esta habilidad, (Bubble Pop se une) al combate. Antes de que se active la habilidad, abre (Velo Etereo: Encore Fantasía). Mientras (Velo Etereo: Encore Fantasía) está activo, incrementa el ATK de todos los miembros del escuadrón en 50 puntos adicionales durante 35s. Antes de que Sunna reabra (Velo Etereo: Encore Fantasía), el (Velo Etereo: Encore Fantasía) existente se cerrará. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad. Cada vez que (Acorde de Ángel) es activado, (Técnica Especial EX: Técnica de Cámara Especial) solo puede activarse una vez.",
                        tags: ["Físico", "Técnica Especial EX", "Velo Etereo"]
                    },
                    {
                        type: "Técnica Definitiva",
                        name: "Ataque en Cadena: No Te Metas con el Gato",
                        description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Monta a Bubble Pop hacia adelante, embistiendo enemigos adelante e infligiendo masivo Daño Físico. Un (Quick Assist) es activado cuando el ataque pesado de la habilidad golpea a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Ataque en Cadena"]
                    },
                    {
                        type: "Técnica Definitiva",
                        name: "Definitiva: ¡Aplástalo Todo!",
                        description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata ataques consecutivos de martillo, luego dispara Bubble Pop que explota, infligiendo masivo Daño Físico a enemigos en rango. Cuando un ataque pesado es activado, (Velo Etereo: Encore Fantasía) es activado; gana 3 (Garras Afiladas). Cuando un ataque pesado golpea a un enemigo, activa (Quick Assist). El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Técnica Definitiva"]
                    },
                    {
                        type: "Asistencia",
                        name: "Asistencia Rápida: Bombardeo de Golpes Salvajes",
                        description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea a los enemigos en frente con golpes de martillo consecutivos, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Asistencia"]
                    },
                    {
                        type: "Asistencia",
                        name: "Asistencia Defensiva: Pánico Escénico",
                        description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parry al ataque del enemigo, causando Aturdimiento masivo. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Asistencia", "Aturdimiento"]
                    },
                    {
                        type: "Asistencia",
                        name: "Seguimiento de Asistencia: Taladros Rebotantes",
                        description: "Presiona [Icono Ataque] después de una Asistencia Defensiva para activar: Monta el martillo neumático y salta continuamente, infligiendo Daño Físico masivo a enemigos en frente. El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Asistencia"]
                    },
                    {
                        type: "Pasiva Central",
                        name: "Pasiva Central: La Ternura es Justicia",
                        description: "Los personajes en el estado (Acorde de Ángel) ven incrementado su ATK en una cantidad igual al 14% del ATK inicial de Sunna, hasta un máximo de 490. (Ataque Básico), (Técnica Especial Potenciada), (Técnica Especial EX), (Ataque en Cadena), (Definitiva) al golpear a un enemigo, aplican (Mirada de Gato) al objetivo durante 12s. Mientras Sunna está en el campo, la duración de (Mirada de Gato) se refresca continuamente; los enemigos normales con (Mirada de Gato) tienen un deseo de ataque reducido hacia Sunna. Cuando personajes de (Ataque) o (Anomalía) en el equipo atacan continuamente a un enemigo con (Mirada de Gato), se activa y elimina (Mirada de Gato): Cuando es activado por un personaje de (Ataque), inflige un {VALOR_1} del ATK como Daño de Atributo del Agente a los enemigos en el rango. Cuando es activado por un personaje de (Anomalía), inflige un {VALOR_2} del ATK como Daño de Atributo del Agente a los enemigos en el rango; este daño es Crítico garantizado, y el Daño Crítico aumenta en un {VALOR_3}. El daño causado por (Mirada de Gato) se considera daño causado por el (Agente Activador). Cuando hay múltiples monstruos con (Mirada de Gato) en el campo, solo se activará la (Mirada de Gato) del objetivo principal, y al activarse recuperará todas las (Mirada de Gato) del campo. Cuando un enemigo está en estado de Aturdimiento, (Mirada de Gato) se activará más rápidamente.",
                        tags: ["Pasiva Central"]
                    },
                    {
                        type: "Habilidad Adicional",
                        name: "Habilidad Adicional: Contrapunto del Ensueño",
                        description: "Se activa cuando hay un personaje de (Ataque) o de la misma Facción en el equipo:\nCuando un personaje dentro del (Velo Etereo: Repetición Delirante) golpea a un enemigo, el Multiplicador de Daño de Aturdimiento del objetivo aumenta en un 30% durante 35s.\nAl entrar en combate, o cuando cualquier personaje del equipo abre o extiende cualquier (Velo Etereo), el efecto de aumento de ATK de (Acorde de Ángel) aumenta adicionalmente en un 8%, y el límite superior aumenta adicionalmente en 280 puntos, durante 35s. Se puede acumular hasta 2 veces, y la duración de cada acumulación se calcula de forma independiente.",
                        tags: ["Habilidad Adicional"]
                    },
                    {
                        type: "Mindscape 1",
                        name: "1. 'Síndrome de Corrupción de Soledad'",
                        description: "Cuando Sunna entra al campo de batalla, restaura 20 de Energía. En modo Zona de Investigación, este efecto puede activarse una vez cada 180 segundos. Cuando (Mirada de Gato) activa y sus enemigos, reduce el DEF del objetivo en un 6%, durando 30 segundos, acumulando hasta 3 veces. La duración de cada acumulación se calcula separadamente.",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 2",
                        name: "2. 'Gatos Siguen la Corriente'",
                        description: "Mientras Sunna está dentro de cualquier (Velo Etereo), gana 1 acumulación de (Pulidor de Uñas) cada 10s; el tratamiento de daño del Multiplicador de DAÑO aumenta cuando (Mirada de Gato) es activada. Cuando es activado por un personaje de (Ataque): el Multiplicador de DAÑO aumenta en un 200%. Cuando es activado por un personaje de (Anomalía): el Multiplicador de DAÑO aumenta en un 300%.",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 4",
                        name: "4. 'Escuadrón de Investigación de Delirios'",
                        description: "Cuando Sunna lanza su (Definitiva), todos los miembros del escuadrón obtienen 15% de DAÑO aumentado por 60s.",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 6",
                        name: "6. 'Big Bang del Hueco'",
                        description: "Cuando Sunna activa su (Técnica Especial EX), entra en el estado (Encerrada) por 8 segundos. Durante (Encerrada), los ataques de Sunna son CRÍTICOS garantizados, y su Daño CRIT aumenta en un 0.03% de su ATK inicial, hasta un aumento máximo del 105%. Durante (Encerrada), el Nivel de Anti-Interrupción de Sunna aumenta y el DAÑO tomado es reducido en un 40%. Durante (Encerrada), Sunna puede activar (Mirada de Gato), calculando DAÑO según (Ataque) del Multiplicador de DAÑO de (Mirada de Gato) y una vez que se activa (Mirada de Gato), inmediatamente consume los (Pulidores de Uñas) y aplica (Mirada de Gato) al enemigo nuevamente; Durante (Encerrada), el DAÑO infligido por todo el escuadrón al activar (Mirada de Gato) aumenta en un 50%.",
                        tags: ["Mindscape"]
                    }
                ]
            },
            "v2.6.3": {
                versionLabel: "v2.6.3",
                coreSkillScaling: [
                    ["150%", "240%", "80%", "1750", "525"],
                    ["175%", "280%", "90%", "2050", "615"],
                    ["200%", "320%", "100%", "2350", "705"],
                    ["225%", "360%", "120%", "2650", "795"],
                    ["250%", "400%", "130%", "2950", "885"],
                    ["275%", "440%", "140%", "3250", "975"],
                    ["300%", "480%", "150%", "3500", "1050"],
                ],
                skills: [
                    {
                        type: "Ataque Básico",
                        name: "Ataque Básico: Gatita Mala al Acecho",
                        description: "Cuando Sunna está fuera del campo en combate y no hay enemigos con la marca (Mirada de Gato) en el campo, Bubble Pop consumirá 1 (Pulidor de Uñas) y lanzará automáticamente un ataque, infligiendo Daño Físico. Cuando cualquier miembro del escuadrón activa o extiende cualquier (Velo Etereo), Sunna gana 2 (Pulidores de Uñas). Cuando cualquier personaje del equipo activa (Mirada de Gato) sobre un enemigo que ha sido afectado por cualquier efecto de estado, Sunna obtiene 1 (Pulidor de Uñas); cada 10s como máximo se puede obtener 6 ataques; Sunna debe tener 6 o más (Pulidores de Uñas).",
                        tags: ["Físico", "Ataque Básico"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX: Bombardeo Bubblegum",
                        description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un gato usando el arma para el objetivo e inflige Daño Físico. Después de activar esta habilidad, (Bubble Pop se une) al combate. Cuando se activa la habilidad, aplica el efecto (Acorde de Ángel) a todos los Agentes en el escuadrón por 40s. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Técnica Especial EX"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX: Técnica de Cámara Especial",
                        description: "Después de entrar en (Acorde de Ángel), presiona [Icono Especial EX] para activar, o durante (Fiebre), mantén presionado [Icono Especial] para el (Quick Assist): Lanza un Ataque Coordinado con Bubble Pop contra enemigos objetivo, infligiendo Daño Físico. Después de usar esta habilidad, (Bubble Pop se une) al combate. Antes de que se active la habilidad, abre (Velo Etereo: Encore Fantasía). Mientras (Velo Etereo: Encore Fantasía) está activo, incrementa el ATK de todos los miembros del escuadrón en 50 puntos adicionales durante 40s. Antes de que Sunna reabra (Velo Etereo: Encore Fantasía), el (Velo Etereo: Encore Fantasía) existente se cerrará. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad. Cada vez que (Acorde de Ángel) es activado, (Técnica Especial EX: Técnica de Cámara Especial) solo puede activarse una vez.",
                        tags: ["Físico", "Técnica Especial EX", "Velo Etereo"]
                    },
                    {
                        type: "Técnica Definitiva",
                        name: "Definitiva: ¡Aplástalo Todo!",
                        description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata ataques consecutivos de martillo, luego dispara Bubble Pop que explota, infligiendo masivo Daño Físico a enemigos en rango. Cuando un ataque pesado es activado, (Velo Etereo: Encore Fantasía) es activado; gana 6 (Pulidores de Uñas). Cuando un ataque pesado golpea a un enemigo, activa (Quick Assist). El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Técnica Definitiva"]
                    },
                    {
                        type: "Pasiva Central",
                        name: "Pasiva Central: La Ternura es Justicia",
                        description: "Los personajes en el estado (Acorde de Ángel) ven incrementado su ATK en una cantidad igual al 30% del ATK inicial de Sunna; cuando el ATK inicial alcanza {VALOR_4} puntos, todo el equipo recibe un aumento de ATK de hasta un máximo adicional, hasta un máximo de {VALOR_5}. (Ataque Básico), (Técnica Especial Potenciada), (Técnica Especial EX), (Ataque en Cadena), (Definitiva) al golpear a un enemigo con una parte que no sea de la marca, aplican (Mirada de Gato) al objetivo durante 12s. Mientras Sunna está en el campo, la duración de (Mirada de Gato) se refresca continuamente; los enemigos normales con (Mirada de Gato) tienen un deseo de ataque reducido hacia Sunna. Cuando personajes de (Ataque) o (Anomalía) en el equipo atacan continuamente a un enemigo con (Mirada de Gato), se activa y elimina (Mirada de Gato): Cuando es activado por un personaje de (Atacante), inflige un {VALOR_1} del ATQ como Daño de Atributo del Agente a los enemigos en el rango. Cuando es activado por un personaje de (Anomalía), inflige un {VALOR_2} del ATQ como Daño de Atributo del Agente a los enemigos en el rango; este daño es Crítico garantizado, y el Daño Crítico aumenta en un {VALOR_3}. El daño causado por (Mirada de Gato) se considera daño causado por el (Agente Activador). Cuando hay múltiples monstruos con (Mirada de Gato) en el campo, solo se activará la (Mirada de Gato) del objetivo principal, y al activarse se removerán todas las (Mirada de Gato) del campo; la cantidad de ataques requeridos para la activación de (Mirada de Gato) se reduce enormemente. Cuando un enemigo está en estado de Aturdimiento, (Mirada de Gato) se activará más rápidamente.",
                        tags: ["Pasiva Central"]
                    },
                    {
                        type: "Habilidad Adicional",
                        name: "Habilidad Adicional: Contrapunto del Ensueño",
                        description: "Se activa cuando hay un personaje de (Ataque) o de la misma Facción en el equipo:\\nCuando un personaje dentro del (Velo Etereo: Encore Fantasía) golpea a un enemigo, el Multiplicador de Daño de Aturdimiento del objetivo aumenta en un 30% durante 40s.\\nAl entrar al campo de batalla, recupera 15 de Energía. En modo Zona de Investigación, el efecto puede activarse una vez cada 180s y solo se activa una vez.",
                        tags: ["Habilidad Adicional"]
                    },
                    {
                        type: "Mindscape 1",
                        name: "1. 'Síndrome de Corrupción de Soledad'",
                        description: "Cuando Sunna entra al campo de batalla, restaura 15 de Energía. En modo Zona de Investigación, este efecto puede activarse una vez cada 180 segundos. Cuando (Mirada de Gato) activa y golpea enemigos, reduce el DEF del objetivo en un 7%, durando 40 segundos, acumulando hasta 3 veces. La duración de cada acumulación se calcula por separado.",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 2",
                        name: "2. 'Gatos Siguen la Corriente'",
                        description: "Mientras Sunna está dentro de cualquier (Velo Etereo), incrementa el ATK de todo el equipo en un 10%, gana 1 acumulación de (Pulidor de Uñas) cada 10s; el tratamiento de daño del Multiplicador de DAÑO (Mirada de Gato) aumenta cuando (Mirada de Gato) es activada. Cuando es activado por un personaje de (Ataque): el Multiplicador de DAÑO aumenta en un 200%. Cuando es activado por un personaje de (Anomalía): el Multiplicador de DAÑO aumenta en un 300%.",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 4",
                        name: "4. 'Escuadrón de Investigación de Delirios'",
                        description: "Cuando Sunna lanza su (Definitiva), todos los miembros del escuadrón obtienen 15% de DAÑO aumentado por 60s.",
                        tags: ["Mindscape"]
                    }
                ]
            },

        },
    },
    // Agent 25 - Asaba Harumasa
    25: {
        id: 25,
        name: "Asaba Harumasa",
        versions: {
            "v1.4": {
                versionLabel: "v1.4",
                baseStats: { hp: { min: 595, max: 7405 }, atk: { min: 132, max: 915 }, def: { min: 48, max: 600 }, impact: 90, crit: "5%", critDmg: "50%", anomalyRate: "80", anomalyMastery: "95", penRatio: "0%", energyRegen: "1.2" },
                coreStats: { statName: "crit rate", valuePerNode: 4.8 },
                coreSkillScaling: [["10.6%", "6%"], ["13%", "7%"], ["15.4%", "8%"], ["17.8%", "9%"], ["20.2%", "10%"], ["22.6%", "11%"], ["25%", "12%"]],
                potential: { name: "(Test1) Despertar Potencial: Asaba Harumasa", description: "Al activar [Técnica Especial Potenciada], [Ataque en Cadena] o [Definitiva], el ATQ aumenta en un 10%, durante 12s." },
                skills: [
                    { type: "Evasión", name: "Evasión: Destello Rápido", description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Evasión"] },
                    { type: "Evasión", name: "Ataque de Carrera: Hiten no Tsuru", description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza múltiples ataques perforantes hacia adelante, causando Daño Físico.", tags: ["Físico", "Evasión"] },
                    { type: "Evasión", name: "Contraataque de Evasión: Filo Oculto", description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Perfora a enemigos en frente, causando Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Evasión"] },
                    { type: "Técnica Especial", name: "Técnica Especial: Sin Lugar Donde Esconderse", description: "Presiona [Icono Especial] para activar: Lanza una flecha hacia adelante, causando Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Especial"] },
                    { type: "Técnica Especial EX", name: "Técnica Especial EX: Sin Lugar Donde Correr", description: "Con suficiente Energía, presiona [Icono Especial] para activar: Lanza dagas y una flecha mejorada hacia adelante, causando masivo Daño Eléctrico. Cuando la flecha mejorada golpea a un enemigo o al suelo, genera 6 (Cargas Electro). El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Especial EX"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena: Kai - Hanare", description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata un ataque perforante en una gran área adelante y luego dispara una flecha mejorada, causando masivo Daño Eléctrico. Cuando la flecha golpea el suelo, genera 6 (Cargas Electro). El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Ataque en Cadena"] },
                    { type: "Técnica Definitiva", name: "Definitiva: Zanshin", description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata un ataque perforante a enemigos en una gran área adelante, causando masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Definitiva"] },
                    { type: "Pasiva Central", name: "Pasiva Central: Amanecer", description: "La Prob. Crítica de (Ataque de Carrera: Hiten no Tsuru - Corte) aumenta en un {VALOR_1}, y cuando el (Ataque de Carrera: Hiten no Tsuru - Corte) de Harumasa activa un golpe crítico contra un enemigo, gana 1 acumulación de (Filo Reluciente), hasta un máximo de 3 acumulaciones por uso de la habilidad y acumulándose hasta 6 veces, durando 5s, los disparos repetidos reinician la duración. Cada acumulación de (Filo Reluciente) aumenta el Daño Crítico de (Ataque de Carrera: Hiten no Tsuru - Corte) en un {VALOR_2}.", tags: ["Pasiva Central"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional: Overclock", description: "Cuando otro personaje en tu escuadrón es un personaje de (Aturdimiento) o (Anomalía): Cuando los ataques de Harumasa golpean enemigos Aturdidos o enemigos bajo Anomalía de Atributo, su DAÑO aumenta en un 40%. Cuando el (Pluma Descendente) de Harumasa golpea enemigos Aturdidos o enemios bajo Anomalía de Atributo, aplicará 2 acumulaciones de (Prisión Electro) al objetivo.", tags: ["Habilidad Adicional"] }
                ]
            },
            "v2.6.2": {
                versionLabel: "v2.6.2",
                baseStats: { hp: { min: 595, max: 7405 }, atk: { min: 132, max: 915 }, def: { min: 48, max: 600 }, impact: 90, crit: "5%", critDmg: "50%", anomalyRate: "80", anomalyMastery: "95", penRatio: "0%", energyRegen: "1.2" },
                coreStats: { statName: "crit rate", valuePerNode: 4.8 },
                coreSkillScaling: [["10.6%", "6%"], ["13%", "7%"], ["15.4%", "8%"], ["17.8%", "9%"], ["20.2%", "10%"], ["22.6%", "11%"], ["25%", "12%"]],
                potential: { name: "(Test1) Despertar Potencial: Asaba Harumasa", description: "Al activar [Técnica Especial Potenciada], [Ataque en Cadena] o [Definitiva], el ATQ aumenta en un 30%, durante 12s; la duración de [Borde] de la [Pasiva Central] se extiende a 10s." },
                skills: [
                    { type: "Evasión", name: "Evasión: Destello Rápido", description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Evasión"] },
                    { type: "Evasión", name: "Ataque de Carrera: Hiten no Tsuru", description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza múltiples ataques perforantes hacia adelante, causando Daño Eléctrico.", tags: ["Eléctrico", "Evasión"] },
                    { type: "Evasión", name: "Ataque de Carrera: Hiten no Tsuru - Corte", description: "Mientras hay enemigos (Marcado-X) en el campo, Harumasa entrará en el estado (Despertar), cambiando (Ataque de Carrera: Hiten no Tsuru) por (Ataque de Carrera: Hiten no Tsuru - Corte). Mientras está en el estado (Despertar), presiona [Icono Ataque] durante una evasión para activar: Arremete hacia el enemigo (Marcado-X) más cercano y ejecuta un corte poderoso, causando Daño Eléctrico. Cuando el corte golpea al objetivo, consume 2 acumulaciones de (Prisión Electro). Con menos de 2 acumulaciones de (Prisión Electro), (Marcado-X) será eliminado del enemigo. Antes de que (Marcado-X) sea eliminado, presiona repetidamente [Icono Ataque] para usar repetidamente (Ataque de Carrera: Hiten no Tsuru - Corte). Mientras no existan enemigos (Marcado-X) en el campo, Harumasa sale del estado (Despertar).", tags: ["Eléctrico", "Evasión"] },
                    { type: "Evasión", name: "Contraataque de Evasión: Filo Oculto", description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Perfora a enemigos en frente, causando Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Evasión"] },
                    { type: "Técnica Especial", name: "Técnica Especial: Sin Lugar Donde Esconderse", description: "Presiona [Icono Especial] para activar: Lanza una flecha hacia adelante, causando Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Especial"] },
                    { type: "Técnica Especial EX", name: "Técnica Especial EX: Sin Lugar Donde Correr", description: "Con suficiente Energía, presiona [Icono Especial] para activar: Lanza dagas y una flecha mejorada hacia adelante, causando masivo Daño Eléctrico. Cuando la flecha mejorada golpea a un enemigo, genera 6 (Cargas Electro). El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Especial EX"] },
                    { type: "Pasiva Central", name: "Pasiva Central: Amanecer", description: "La Prob. Crítica de (Ataque de Carrera: Hiten no Tsuru - Corte) aumenta en un {VALOR_1}, y cuando el (Ataque de Carrera: Hiten no Tsuru - Corte) de Harumasa activa un golpe crítico contra un enemigo, gana 1 acumulación de (Filo Reluciente), hasta un máximo de 3 acumulaciones por uso de la habilidad y acumulándose hasta 6 veces, durando 5s, los disparos repetidos reinician la duración. Cada acumulación de (Filo Reluciente) aumenta el Daño Crítico de (Ataque de Carrera: Hiten no Tsuru - Corte) en un {VALOR_2}.", tags: ["Pasiva Central"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional: Overclock", description: "Cuando otro personaje en tu escuadrón es un personaje de (Aturdimiento) o (Anomalía): Cuando los ataques de Harumasa golpean enemigos Aturdidos o enemigos bajo Anomalía de Atributo, su DAÑO aumenta en un 40%. Cuando el (Pluma Descendente) de Harumasa golpea enemigos Aturdidos o enemios bajo Anomalía de Atributo, aplicará 2 acumulaciones de (Prisión Electro) al objetivo.", tags: ["Habilidad Adicional"] }
                ]
            },
            "v2.6.3": {
                versionLabel: "v2.6.3",
                baseStats: { hp: { min: 595, max: 7405 }, atk: { min: 132, max: 915 }, def: { min: 48, max: 600 }, impact: 90, crit: "5%", critDmg: "50%", anomalyRate: "80", anomalyMastery: "95", penRatio: "0%", energyRegen: "1.2" },
                coreStats: { statName: "Prob. Critica", valuePerNode: 14.4 },
                coreSkillScaling: [["10.6%", "6%"], ["13%", "7%"], ["15.4%", "8%"], ["17.8%", "9%"], ["20.2%", "10%"], ["22.6%", "11%"], ["25%", "12%"]],
                potential: { name: "Despertar Potencial: Concentración", description: "Al activar (Técnica Especial Potenciada), (Ataque en Cadena) o (Definitiva), el ATQ aumenta en un 12%; (Ataque de Carrera: Hiten no Tsuru) ignora un 5% de la RES a Daño Eléctrico del objetivo, durante 12s. Los activadores repetidos reinician la duración. La duración de (Filo Reluciente) de la (Pasiva Central) se extiende a 10s." },
                skills: [
                    { type: "Evasión", name: "Evasión: Destello Rápido", description: "Presiona [Icono Dodges] para activar: Una evasión rápida. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Evasión"] },
                    { type: "Evasión", name: "Ataque de Carrera: Hiten no Tsuru", description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza múltiples ataques perforantes hacia adelante, causando Daño Físico.", tags: ["Físico", "Evasión"] },
                    { type: "Evasión", name: "Contraataque de Evasión: Filo Oculto", description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Perfora a enemigos en frente, causando Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Evasión"] },
                    { type: "Evasión", name: "Ataque de Velocidad: Hiten no Tsuru", description: "Cuando hay enemigos con marca de (Marcado-X) en el campo, Harumasa entrará en estado (Despertar), cambiando (Ataque de Carrera: Hiten no Tsuru) por (Ataque de Velocidad: Hiten no Tsuru). En estado (Despertar), presiona [Icono Ataque] durante una evasión para activar: Arremete rápidamente hacia el enemigo más cercano con marca (Marcado-X) y realiza un corte físico, causando Daño Eléctrico. Cuando el corte golpea al objetivo, consume 2 acumulaciones de (Prisión Electro); si tiene menos de 2 acumulaciones de (Prisión Electro), se elimina la marca (Marcado-X) del enemigo. Antes de eliminar (Marcado-X), presiona repetidamente [Icono Ataque] para usar continuamente (Ataque de Velocidad: Hiten no Tsuru); cuando no hay enemigos (Marcado-X) en el campo, sale del estado (Despertar). En estado (Despertar), después de activar (Contraataque de Evasión), presiona [Icono Ataque] para activar directamente (Ataque de Velocidad: Hiten no Tsuru). El 1er y 2do ataque de (Ataque de Velocidad: Hiten no Tsuru) causa daño adicional de (Prisión Electro) considerado Daño de Atributo Eléctrico. Mientras está en el primer ataque de este modo, el daño recibido se reduce en un 40%.", tags: ["Eléctrico", "Evasión"] },
                    { type: "Técnica Especial", name: "Técnica Especial: Territorio", description: "Presiona [Icono Especial] para activar: Lanza una flecha hacia adelante, causando Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Especial"] },
                    { type: "Técnica Especial EX", name: "Técnica Especial EX: Territorio Mejorado", description: "Con suficiente Energía, presiona [Icono Especial] para activar: Lanza flechas mejoradas hacia adelante, causando masivo Daño Eléctrico. Cuando una flecha mejorada golpea a un enemigo o al suelo, puede generar (Prisión Electro). 1º. Una flecha mejorada que golpea enemigo puede hacer que el objetivo sea marcado con (Marcado-X); luego una siguiente flecha mejorada golpeando el objetivo, genera (Prisión Electro en el objetivo); si el objetivo tiene menos de un cierto número de (Prisión Electro), el número de activaciones se reducirá. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Especial EX"] },
                    { type: "Técnica Especial EX", name: "Técnica Especial EX: Territorio Mejorado - Cielos", description: "Después de (Técnica Especial EX: Territorio Mejorado), en el 4to o 5to ataque después de (Ataque de Carrera), (Ataque de Velocidad), (Hiten no Tsuru), (Contraataque Especial), (Ataque de Velocidad: Boost), (Evasión Rápida: Boost) y después de presionar [Icono Especial] se puede activar: Dispara continuamente flechas mejoradas hacia adelante, causando masivo Daño Eléctrico. La primera flecha mejorada que golpea enemigo o suelo puede generar (Prisión Electro). Después de una flecha mejorada golpear al objetivo, genera (Prisión Electro) en el objetivo; si el objetivo tiene un cierto número de (Prisión Electro) asignadas cerca del límite, se reducirá el número de activaciones. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Especial EX"] },
                    { type: "Técnica Definitiva", name: "Ataque en Cadena: Convergencia", description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Lanza ataques perforantes a enemigos en una gran área hacia adelante, y dispara flechas mejoradas, causando masivo Daño Eléctrico. Cuando la flecha golpea el suelo, puede generar (Prisión Electro). El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Ataque en Cadena"] },
                    { type: "Técnica Definitiva", name: "Definitiva: Zanshin", description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Lanza ataques perforantes a enemigos en una gran área hacia adelante, causando masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Definitiva"] },
                    { type: "Técnica Definitiva", name: "Definitiva: Zanshin - Rama", description: "Con (Filo Reluciente Afilado), (Zanshin) se activa automáticamente después de ejecutarse: Lanza ataques de penetración de gran área a enemigos en frente, causando masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.", tags: ["Eléctrico", "Técnica Definitiva"] },
                    { type: "Pasiva Central", name: "Pasiva Central: Amanecer", description: "La Prob. Crítica de (Ataque de Carrera: Hiten no Tsuru), (Evasión) y (Ataque de Velocidad) aumenta en un {VALOR_1}, y cuando el (Ataque de Carrera: Hiten no Tsuru - Corte) de Harumasa activa un golpe crítico contra un enemigo y activa (Ultima Técnica), obtiene 1/6 acumulaciones de (Filo Reluciente), hasta un máximo de 3/6 acumulaciones por uso de la habilidad y acumulándose hasta 6 veces, durando 6s; los triggers repetidos reinician la duración. Cada acumulación de (Filo Reluciente) aumenta el Daño Crítico de (Ataque de Carrera: Hiten no Tsuru - Corte) en un {VALOR_2}.", tags: ["Pasiva Central"] },
                    { type: "Habilidad Adicional", name: "Habilidad Adicional: Overclock", description: "Cuando hay personajes de rol (Aturdidor) o de otra Facción en el equipo y se activa: Cuando los ataques de Harumasa golpean enemigos en estado de Aturdimiento o bajo estado de Anomalía de Atributo, el DAÑO propio aumenta en un 40%. Cuando las flechas de Harumasa lanzan y golpean enemigos en estado de Aturdimiento o bajo estado de Anomalía de Atributo, aplica 2 acumulaciones de (Prisión Electro).", tags: ["Habilidad Adicional"] }
                ]
            }
        }
    },
    // Agent 3 - Lycaon
    3: {
        id: 3,
        name: "Lycaon",
        versions: {
            "v1.0": {
                versionLabel: "v1.0",
                baseStats: { hp: { min: 677, max: 8416 }, atk: { min: 105, max: 728 }, def: { min: 49, max: 606 }, impact: 119, crit: "5%", critDmg: "50%", anomalyRate: "91", anomalyMastery: "90", penRatio: "0%", energyRegen: "1.2" },
                coreStats: { statName: "impact", valuePerNode: 6 },
                coreSkillScaling: [["40%"], ["46.6%"], ["53.3%"], ["60%"], ["66.6%"], ["73.3%"], ["80%"]],
                potential: { name: "(Test1) Despertar Potencial: Lycaon", description: "(Test1) Cuando Lycaon está en estado [Coordinación], Impacto aumenta 15%." },
                skills: [
                    {
                        type: "Pasiva Central",
                        name: "Pasiva Central: Garras Metálicas",
                        description: "Cuando Lycaon carga su (Ataque Básico) hasta completarlo, el ataque inflige {VALOR_1} más de Aturdimiento. Cuando (Técnica Especial EX: Emoción de la Caza) o (Ataque de Asistencia: Contraataque Vengativo) golpea a un enemigo, la RES al Daño Hielo del objetivo disminuye un 25% por 30s. En la activación de [Assist: Vengeful Counter] y [Assist: Empowered Vengeful Counter] durante el proceso de activar un Quick Assist, Lycaon entra en estado [Coordinación], durando {EXCEL:3} segundos.",
                        tags: ["Pasiva Central"]
                    }
                ]
            },
            "v2.6.2": {
                versionLabel: "v2.6.2",
                baseStats: { hp: { min: 677, max: 8416 }, atk: { min: 105, max: 728 }, def: { min: 49, max: 606 }, impact: 119, crit: "5%", critDmg: "50%", anomalyRate: "91", anomalyMastery: "90", penRatio: "0%", energyRegen: "1.2" },
                coreStats: { statName: "impact", valuePerNode: 6 },
                coreSkillScaling: [["40%"], ["46.6%"], ["53.3%"], ["60%"], ["66.6%"], ["73.3%"], ["80%"]],
                potential: { name: "(Test1) Despertar Potencial: Lycaon", description: "(Test1) Cuando Lycaon está en estado [Coordinación], Impacto aumenta 15%." },
                skills: [
                    {
                        type: "Pasiva Central",
                        name: "Pasiva Central: Garras Metálicas",
                        description: "Cuando Lycaon carga su (Ataque Básico) hasta completarlo, el ataque inflige {VALOR_1} más de Aturdimiento. Cuando (Técnica Especial EX: Emoción de la Caza) o (Ataque de Asistencia: Contraataque Vengativo) golpea a un enemigo, la RES al Daño Hielo del objetivo disminuye un 25% por 30s. En la activación de [Assist: Vengeful Counter] y [Assist: Empowered Vengeful Counter] durante el proceso de activar un Quick Assist, Lycaon entra en estado [Coordinación], durando 5 segundos. Mientras está en estado [Coordinación], activar [Ataque de Asistencia: Contraataque Vengativo Potenciado] terminará el estado [Coordinación] 1s antes, y el Daño de [Ataque de Asistencia: Contraataque Vengativo Potenciado] aumenta en un 40%.",
                        tags: ["Pasiva Central"]
                    }
                ]
            }
        }
    }
}



/**
 * Get all available agents for the diff viewer
 * @returns {Array} Array of agent objects with id and name
 */
export function getAvailableAgents() {
    return Object.values(versionedAgents).map(agent => ({
        id: agent.id,
        name: agent.name
    }));
}

/**
 * Get available versions for a specific agent
 * @param {number} agentId - The agent ID
 * @returns {Array} Array of version labels
 */
export function getAgentVersions(agentId) {
    const agent = versionedAgents[agentId];
    if (!agent || !agent.versions) return [];
    return Object.keys(agent.versions);
}

/**
 * Get specific version data for an agent
 * @param {number} agentId - The agent ID
 * @param {string} versionLabel - The version label (e.g., "Beta 1", "V1")
 * @returns {Object|null} The version data or null if not found
 */
export function getAgentVersionData(agentId, versionLabel) {
    const agent = versionedAgents[agentId];
    if (!agent || !agent.versions || !agent.versions[versionLabel]) return null;
    return agent.versions[versionLabel];
}

/**
 * Get skills for an agent, normalizing structure
 * @param {number} agentId 
 * @returns {Array} Array of skill objects
 */
// Helper for fuzzy matching (kept for potential future use, but not primary)
function calculateSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();
    if (s1 === s2) return 1.0;

    // Simple token overlap
    const tokens1 = new Set(s1.split(/\s+/));
    const tokens2 = new Set(s2.split(/\s+/));
    const intersection = new Set([...tokens1].filter(x => tokens2.has(x)));
    const union = new Set([...tokens1, ...tokens2]);

    return intersection.size / union.size;
}

/**
 * Get skills for an agent, normalizing structure with index-based matching
 * Uses type + index within that type to match skills across versions
 * @param {number} agentId 
 * @returns {Array} Array of skill objects
 */
export function getAgentSkills(agentId) {
    const agent = versionedAgents[agentId];
    if (!agent) return [];

    // Type A: Skills already in top-level array (Harumasa/Lycaon)
    if (agent.skills && Array.isArray(agent.skills)) {
        return agent.skills;
    }

    // Type B: Skills nested inside versions (Aria/Sunna)
    if (!agent.versions) return [];

    const allVersions = Object.keys(agent.versions).sort();
    const skillMap = new Map(); // key -> skillObj

    allVersions.forEach(version => {
        const vData = agent.versions[version];
        if (!vData.skills || !Array.isArray(vData.skills)) return;

        // Group by type and use index within type for matching
        const typeCounters = {};

        vData.skills.forEach(skill => {
            const type = skill.type || "Unknown";
            if (!typeCounters[type]) typeCounters[type] = 0;
            const index = typeCounters[type]++;

            // Create a unique key for this skill slot, e.g., "Técnica Especial_0", "Técnica Especial_1"
            const key = `${type}_${index}`;

            if (!skillMap.has(key)) {
                skillMap.set(key, {
                    id: key,
                    type: type,
                    versions: {}
                });
            }

            skillMap.get(key).versions[version] = skill;
        });
    });

    return Array.from(skillMap.values());
}
