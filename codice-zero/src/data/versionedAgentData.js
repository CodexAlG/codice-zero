
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
                        description: "Iris' (Ataque Básico), (Ataque Especial), (Ataques Especiales EX) ignoran el 10% de la Resistencia de Acumulación de Anomalía de Atributo del objetivo oscuro Anomalía de Atributo de Etéreo. Cuando son activados, hay una posibilidad de activar una Probabilidad de Crit Base. La Probabilidad de Crit Base es de 40% y el Daño CRIT es de 30% respectivamente. Si La Tasa de Anomalía es mayor que 180, cada punto de Maestría de Anomalía excediendo este punto incrementa la Probabilidad de Crit de este efecto en un extra 0.4%.",
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
                        description: "Al entrar en el campo de batalla, Aria inmediatamente gana 1,500 Decibeles, y Aria no saldrá del (Estado Potenciado) una vez que el (Ataque de Carga Potenciado) el Daño Etéreo es incrementado en un 20%. Cuando Aria activa una Anomalía Etéreo de nuevo en el enemigo en el (Estado Debilitado de Anomalía), ella gana 2 (Bastones de Luz Súper).",
                        tags: ["Mindscape 6"]
                    }
                ]
            },
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
                        name: "Ataque Especial: Pistola de Aire",
                        description: "Presiona [Icono Especial] para activar: Dispara un gatito usando una pistola de aire para atacar a los enemigos adelante, infligiendo Daño Físico. Después de activar la habilidad, si no hay gatos en el campo, invoca un gatito.",
                        tags: ["Físico", "Técnica Especial"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Ataque Especial EX: Golpe de Gato",
                        description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un gato para golpear al objetivo e infligir Daño Físico. Después de activar esta habilidad, si no hay gatos en el campo, invoca un gato. Al activar esta habilidad, aplica el efecto (Fiebre) a todos los Agentes en el escuadrón durante 40s. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad.",
                        tags: ["Físico", "Técnica Especial EX"]
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Ataque Especial EX: Ataque de Enlace de Cámara",
                        description: "Después de entrar en (Fiebre), presiona [Icono Especial EX] para activar: Golpea a los enemigos objetivo junto con Kitty, infligiendo Daño Físico. Después de usar esta habilidad, si no hay gato en el campo, invoca a Kitty. Cuando se activa el ataque pesado, abre (Velo Etereo: Ídolo). Mientras (Velo Etereo: Ídolo) está activo, incrementa el ATK de todos los miembros del escuadrón en 50 puntos adicionales durante 30s. Antes de que Sunna reabra (Velo Etereo: Ídolo), el (Velo Etereo: Ídolo) existente se cerrará. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad. Cada vez que se entra en (Fiebre), (Ataque Especial EX: Golpe Combinado Fotográfico) solo puede activarse una vez.",
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
                        description: "Los personajes en el estado (Fiebre) ganan ATK aumentado igual al {VALOR_1} del ATK inicial de Sunna, hasta un máximo de {VALOR_2}. (Ataque Básico: Arañazo de Pata), (Ataque Especial EX: Golpe de Gato), (Ataque Especial EX: Ataque de Enlace de Cámara), (Ataque en Cadena: Embestida Gatuna) y (Definitiva: Golpea al Topo) aplican la marca (Hipnotizado) a los objetivos al golpear, durando 12 segundos. Mientras Sunna está en el campo, la duración de la marca (Hipnotizado) se refresca continuamente; los enemigos normales con la marca (Hipnotizado) tienen aggro reducido hacia Sunna. Cuando personajes de (Ataque) o (Anomalía) en el escuadrón atacan continuamente y aciertan un ataque pesado en enemigos con la marca (Hipnotizado), activan y detonan la marca (Hipnotizado). Cuando un personaje de (Ataque) la detona, infligen Daño de Atributo igual al (210%) del ATK a los enemigos en rango. Cuando un personaje de (Anomalía) la detona, infligen Daño de Atributo igual al (210%) del ATK a los enemigos en rango. Este DAÑO está garantizado de ser CRÍTICO y el Daño CRIT aumenta en un (100%). Cuando múltiples enemigos con la marca (Hipnotizado) están en el campo, solo la marca (Hipnotizado) del objetivo principal de ataque será activada, y otras marcas (Hipnotizado) serán eliminadas. Cuando un enemigo está Aturdido, la marca (Hipnotizado) se activa más rápidamente.",
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
                        description: "Nivel de Ataque Básico, Evasión, Asistencia, Ataque Especial y Ataque en Cadena +2",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 4",
                        name: "4. Escuadrón de Investigación de Delirios",
                        description: "Cuando Sunna entra al campo de batalla, restaura 20 de Energía. Este efecto puede activarse una vez cada 180 segundos en Zona de Investigación; cuando activa (Ataque Especial EX: Ataque de Enlace de Cámara), restaura 2.5% de HP para todos los miembros del escuadrón.",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 5",
                        name: "5. Expreso Galáctico",
                        description: "Nivel de Ataque Básico, Evasión, Asistencia, Ataque Especial y Ataque en Cadena +2",
                        tags: ["Mindscape"]
                    },
                    {
                        type: "Mindscape 6",
                        name: "6. Big Bang del Hueco",
                        description: "Cuando Sunna activa su (Ataque Especial EX), entra en el estado (Big Bang) por 8 segundos; \nDurante el estado (Big Bang), los ataques de Sunna son CRÍTICOS garantizados, y su Daño CRIT aumenta en un 0.02% de su ATK inicial, hasta un aumento máximo del 60%; \nDurante el estado (Big Bang), Sunna puede activar marcas (Hipnotizado), infligiendo DAÑO igual al 210% de su ATK a enemigos en rango; si Sunna tiene (Puntos de Ataque) al activar marcas (Hipnotizado), inmediatamente consume los (Puntos de Ataque) y aplica marcas (Hipnotizado) a los enemigos de nuevo; \nDurante el estado (Big Bang), el DAÑO infligido por todo el escuadrón al activar marcas (Hipnotizado) aumenta en un 20%.",
                        tags: ["Mindscape"]
                    }
                ]
            },
        },
    },
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
