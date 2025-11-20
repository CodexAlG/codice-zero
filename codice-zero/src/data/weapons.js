// Base de Datos de Armas (W-Engines) - Datos Reales
export const weapons = [
  // ========================================================================
  // ROL ANOMALÍA (Sección Completa y Corregida)
  // ========================================================================

  // --- RANGO S (IDs 5500-552X para las de 5 estrellas) ---
  {
    id: 5501,
    name: "Compilador de Fusión", // Grace
    rank: "S",
    rol: "Anomalia",
    // Info para la Tarjeta (Vista rápida)
    stats: { main: "PEN Ratio", value: "24%" }, 
    
    // Info para el Detalle (Vista completa)
    detailStats: {
      baseAtk: { min: 46, max: 684 },     // Nvl 1 -> 60
      subStat: { name: "Tasa de Perforación", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Gestión de Datos",
      description: "Aumenta el Ataque en un 12%. Al ejecutar una <span class='text-white font-bold'>técnica especial</span> o una <span class='text-white font-bold'>técnica especial EX</span>, aumenta la Maestría de Anomalía del portador en 25 ptos. durante 8 s. Pueden acumularse hasta 3 cargas. La duración de cada carga es independiente.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "12%", mastery: "25" },
        { level: 2, atk: "15%", mastery: "31" },
        { level: 3, atk: "18%", mastery: "37" },
        { level: 4, atk: "21%", mastery: "43" },
        { level: 5, atk: "24%", mastery: "50" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Fusion_Compiler.webp"
  },
  {
    id: 5502,
    name: "Aguijón Afilado", // Jane Doe
    rank: "S",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 55, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Maestría de Anomalía", min: "36", max: "90" } // Nvl 1 -> 60
    },
    effect: {
      title: "Gestión de Datos",
      description: "Al ejecutar un <span class='text-white font-bold'>ataque rapido</span>, obtienes 1 carga de <span class='text-white font-bold'>instinto cazador</span>. Por cada carga de <span class='text-white font-bold'>instinto cazador</span>, el <span class='text-yellow-400 font-bold'>daño físico</span> del portador aumenta en un 12% durante 10 s. Pueden acumularse hasta 3 cargas. Puede activarse una vez cada 0.5 s. La duración se reinicia con cada activación. Al entrar en combate o al ejecutar una evasión perfecta, el portador obtiene 3 cargas de <span class='text-white font-bold'>instinto cazador</span> de inmediato. Cuando las cargas de <span class='text-white font-bold'>instinto cazador</span> alcanzan el máximo, la tasa de acumulación de Anomalía de Atributo del portador aumenta en un 40%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "12%", mastery: "40%" },
        { level: 2, atk: "15%", mastery: "50%" },
        { level: 3, atk: "18%", mastery: "60%" },
        { level: 4, atk: "21%", mastery: "70%" },
        { level: 5, atk: "24%", mastery: "80%" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Sharpened_Stinger.webp"
  },
  {
    id: 5503,
    name: "Agitador de Llamas", // Burnice (Flamemaker Shaker)
    rank: "S",
    rol: "Anomalia",
    stats: { main: "ATK %", value: "30%" },
    effect: "Aumenta la recuperación de energía. Al golpear con una Especial EX, aumenta el ataque y la Maestría de Anomalía.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Flamemaker_Shaker.png" // Es PNG
  },
  {
    id: 5504,
    name: "Tejedor del Tiempo", // Yanagi (Timeweaver)
    rank: "S",
    rol: "Anomalia",
    stats: { main: "ATK %", value: "30%" },
    effect: "Aumenta la Anomalía Eléctrica. Al cambiar de postura, gana bonificaciones de daño y maestría.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Timeweaver.webp"
  },
  {
    id: 5505,
    name: "Santuario de Granizo", // Miyabi (Hailstorm Shrine)
    rank: "S",
    rol: "Anomalia",
    stats: { main: "Prob. Crítica", value: "24%" },
    effect: "Aumenta el Daño Hielo. Los ataques cargados congelan a los enemigos, aumentando el daño crítico.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Hailstorm_Shrine.webp"
  },
  {
    id: 5506,
    name: "Capricho del Vuelo", // Vivian (Flight of Fancy)
    rank: "S",
    rol: "Anomalia",
    stats: { main: "Maestría Anomalía", value: "90" },
    effect: "Aumenta la duración de los estados de anomalía. Al infligir anomalía, el ATK aumenta.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Flight_of_Fancy.webp"
  },
  {
    id: 5507,
    name: "Perfección Practicada", // Practiced Perfection
    rank: "S",
    rol: "Anomalia",
    stats: { main: "Recup. Energía", value: "50%" },
    effect: "Aumenta la recuperación de energía. Al usar una Especial EX, regenera energía adicional.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Practiced_Perfection.webp"
  },

  // --- RANGO A (IDs 56XX) ---
  {
    id: 5601,
    name: "Gourmet de la Selva", // Rainforest Gourmet
    rank: "A",
    rol: "Anomalia",
    stats: { main: "Maestría Anomalía", value: "75" },
    effect: "Por cada 10 de energía consumida, aumenta el ATK un 2.5% (acumulable hasta 10 veces).",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Rainforest_Gourmet.webp"
  },
  {
    id: 5602,
    name: "Brillo Electro", // Electro-Lip Gloss
    rank: "A",
    rol: "Anomalia",
    stats: { main: "Maestría Anomalía", value: "75" },
    effect: "Al infligir daño eléctrico, aumenta el daño de la siguiente habilidad de anomalía.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Electro-Lip_Gloss.webp"
  },
  {
    id: 5603,
    name: "Geminis Llorones", // Weeping Gemini
    rank: "A",
    rol: "Anomalia",
    stats: { main: "ATK %", value: "25%" },
    effect: "Al usar una esquiva perfecta, aumenta la Maestría de Anomalía del equipo.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Weeping_Gemini.webp"
  },
  {
    id: 5604,
    name: "Rugido", // Roaring Ride
    rank: "A",
    rol: "Anomalia",
    stats: { main: "ATK %", value: "25%" },
    effect: "Al golpear a un enemigo con un estado de anomalía, aumenta el daño del portador.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Roaring_Ride.webp"
  },

  // --- RANGO B (IDs 57XX) ---
  {
    id: 5701,
    name: "Tormenta Magnética - Charlie", // Magnetic Storm Charlie
    rank: "B",
    rol: "Anomalia",
    stats: { main: "Maestría Anomalía", value: "60" },
    effect: "Aumenta la acumulación de anomalía eléctrica.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_(Magnetic_Storm)_Charlie.webp"
  },
  {
    id: 5702,
    name: "Tormenta Magnética - Alpha", // Magnetic Storm Alpha
    rank: "B",
    rol: "Anomalia",
    stats: { main: "Maestría Anomalía", value: "60" },
    effect: "Aumenta la duración de los efectos de anomalía.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_(Magnetic_Storm)_Alpha.png" // Es PNG
  },
  {
    id: 5703,
    name: "Tormenta Magnética - Bravo", // Magnetic Storm Bravo
    rank: "B",
    rol: "Anomalia",
    stats: { main: "Maestría Anomalía", value: "60" },
    effect: "Reduce la resistencia de los enemigos a la anomalía eléctrica.",
    image: "/CodiceZero/Armas/Anomalia/W-Engine_(Magnetic_Storm)_Bravo.webp"
  },

  // ========================================================================
  // ROL ATAQUE (Sección Completa y Corregida)
  // ========================================================================

  // --- RANGO S (A partir de ID 5508, o el siguiente disponible si hay conflicto) ---
  {
    id: 5508,
    name: "Cojín de Acero", // Steel Cushion (Nekomata)
    rank: "S",
    rol: "Ataque",
    stats: { main: "Prob. Crítica", value: "24%" },
    effect: "Aumenta el Daño Físico un 20%. El daño aumenta un 25% adicional si se ataca al enemigo por la espalda.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Steel_Cushion.webp"
  },
  {
    id: 5509,
    name: "Azufre", // The Brimstone (Soldier 11)
    rank: "S",
    rol: "Ataque",
    stats: { main: "ATK %", value: "30%" },
    effect: "Al golpear con Ataque Básico, Dash o Contraataque, el ATK aumenta un 3.5% por 8s. Se puede apilar hasta 8 veces.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_The_Brimstone.webp"
  },
  {
    id: 5510,
    name: "Visitante de las Profundidades", // Deep Sea Visitor (Ellen)
    rank: "S",
    rol: "Ataque",
    stats: { main: "Prob. Crítica", value: "24%" },
    effect: "Aumenta el Daño Hielo un 25%. Al golpear con Ataque Básico, aumenta la Prob. Crítica un 10% por 8s. Al infligir Daño Hielo con Dash, +10% Prob. Crítica adicional.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Deep_Sea_Visitor.webp"
  },
  {
    id: 5511,
    name: "Caja de Hierbas Zanshin", // Zanshin Herb Case (Anby)
    rank: "S",
    rol: "Ataque",
    stats: { main: "ATK %", value: "30%" },
    effect: "Al usar una Cadena, aumenta el Daño Físico. Al golpear con Ataque Básico, recupera energía.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Zanshin_Herb_Case.webp"
  },
  {
    id: 5512,
    name: "Agente Antidisturbios", // Riot Suppressor Mark VI (Zhu Yuan)
    rank: "S",
    rol: "Ataque",
    stats: { main: "Daño Crítico", value: "48%" },
    effect: "Aumenta el Daño Crítico un 15%. Al usar un Ataque Reforzado, el usuario inflige un 35% más de daño durante el siguiente ataque.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Riot_Suppressor_Mark_VI.webp"
  },
  {
    id: 5513,
    name: "Eclipse Infinito", // Myriad Eclipse (Harumasa)
    rank: "S",
    rol: "Ataque",
    stats: { main: "Daño Crítico", value: "48%" },
    effect: "Aumenta el daño Etéreo. Al usar Especial EX, aumenta el ATK un 20% por 10s.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Myriad_Eclipse.webp"
  },
  {
    id: 5514,
    name: "Llama Belicosa", // Bellicose Blaze (Soldier 11 - no es Anomalia)
    rank: "S",
    rol: "Ataque",
    stats: { main: "ATK %", value: "30%" },
    effect: "Aumenta el daño crítico un 20%. Al entrar en combate, regenera energía.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Bellicose_Blaze.webp"
  },
  {
    id: 5515,
    name: "Nocturno del Corazón", // Heartstring Nocturne (Alice)
    rank: "S",
    rol: "Ataque",
    stats: { main: "ATK %", value: "30%" },
    effect: "Aumenta el daño de ataque cargado. Al realizar un Dash, aumenta la Prob. Crítica del siguiente ataque.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Heartstring_Nocturne.webp"
  },
  {
    id: 5516,
    name: "Inocencia Cortada", // Severed Innocence (Aisha)
    rank: "S",
    rol: "Ataque",
    stats: { main: "PEN Ratio", value: "24%" },
    effect: "Aumenta el Daño Anómalo. Al usar una Especial EX, reduce la resistencia física de los enemigos.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Severed_Innocence.webp"
  },
  {
    id: 5517,
    name: "Cordis Germina", // Cordis Germina (Seed)
    rank: "S",
    rol: "Ataque",
    stats: { main: "Daño Crítico", value: "48%" },
    effect: "Aumenta el Daño Físico. Al golpear con Ataque Básico, acumula cargas que aumentan el daño explosivo.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Cordis_Germina.webp"
  },

  // --- RANGO A (A partir de ID 5605) ---
  {
    id: 5605,
    name: "Réplica Motor Estelar", // Starlight Engine Replica
    rank: "A",
    rol: "Ataque",
    stats: { main: "ATK %", value: "25%" },
    effect: "Aumenta el ATK. Al usar una Habilidad, aumenta el Daño Crítico por un corto período.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Starlight_Engine_Replica.webp"
  },
  {
    id: 5606,
    name: "Anhelo Marcato", // Marcato Desire
    rank: "A",
    rol: "Ataque",
    stats: { main: "Recup. Energía", value: "50%" },
    effect: "Al golpear a un enemigo con un Ataque Básico, recupera energía. La recuperación aumenta si el enemigo tiene poca vida.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Marcato_Desire.webp"
  },
  {
    id: 5607,
    name: "Flor Dorada", // Gilded Blossom
    rank: "A",
    rol: "Ataque",
    stats: { main: "ATK %", value: "25%" },
    effect: "Aumenta el Daño Físico. Al derrotar a un enemigo, recupera un porcentaje de HP.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Gilded_Blossom.webp"
  },
  {
    id: 5608,
    name: "Cámara de la Casa", // Housekeeper
    rank: "A",
    rol: "Ataque",
    stats: { main: "ATK %", value: "25%" },
    effect: "Mientras está fuera del campo, la recuperación de energía aumenta. Al entrar, el daño físico aumenta un 35%.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Housekeeper.webp"
  },
  {
    id: 5609,
    name: "Taladro - Eje Rojo", // Drill Rig - Red Axis
    rank: "A",
    rol: "Ataque",
    stats: { main: "Recup. Energía", value: "50%" },
    effect: "Aumenta la Prob. Crítica. Al usar una Especial EX, aumenta el Daño Crítico.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Drill_Rig_-_Red_Axis.webp"
  },
  {
    id: 5610,
    name: "Rotor de Cañón", // Cannon Rotor
    rank: "A",
    rol: "Ataque",
    stats: { main: "Prob. Crítica", value: "20%" },
    effect: "Aumenta el ATK un 7.5%. Al asestar un crítico, inflige un 200% de ATK como daño adicional (Cooldown corto).",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Cannon_Rotor.webp"
  },
  {
    id: 5611,
    name: "Estrella de la Calle", // Street Superstar
    rank: "A",
    rol: "Ataque",
    stats: { main: "ATK %", value: "25%" },
    effect: "Al usar una Cadena, gana cargas. La Definitiva consume cargas para aumentar su daño un 15% por carga.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Street_Superstar.webp"
  },
  {
    id: 5612,
    name: "Motor Estelar", // Starlight Engine (Tipo S - Versión completa)
    rank: "A",
    rol: "Ataque",
    stats: { main: "ATK %", value: "30%" },
    effect: "Aumenta el ATK base. Cada vez que inflige daño, aumenta el Daño Crítico del siguiente ataque.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_Starlight_Engine.webp"
  },

  // --- RANGO B (A partir de ID 5704) ---
  {
    id: 5704,
    name: "Fase Lunar - Pleniluna", // Lunar Pleniluna
    rank: "B",
    rol: "Ataque",
    stats: { main: "ATK %", value: "20%" },
    effect: "Aumenta el daño de Ataque Básico.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_(Lunar)_Pleniluna.webp"
  },
  {
    id: 5705,
    name: "Fase Lunar - Noviluna", // Lunar Noviluna
    rank: "B",
    rol: "Ataque",
    stats: { main: "ATK %", value: "20%" },
    effect: "Aumenta la Prob. Crítica de Ataques Básicos.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_(Lunar)_Noviluna.webp"
  },
  {
    id: 5706,
    name: "Fase Lunar - Decrescente", // Lunar Decrescent
    rank: "B",
    rol: "Ataque",
    stats: { main: "ATK %", value: "20%" },
    effect: "Aumenta el Daño Crítico de Ataques Básicos.",
    image: "/CodiceZero/Armas/Ataque/W-Engine_(Lunar)_Decrescent.webp"
  },

  // ========================================================================
  // ROL ATURDIDOR (Stun)
  // ========================================================================

  // --- RANGO S (Desde 5523 para evitar conflictos) ---
  {
    id: 5518,
    name: "El Sometido", // Lycaon (The Restrained)
    rank: "S",
    rol: "Aturdidor",
    stats: { main: "Impacto", value: "18%" },
    effect: "Aumenta el daño y aturdimiento de Ataques Básicos un 6%. Al atacar, aumenta el ATK un 6% (hasta 5 cargas).",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_The_Restrained.webp"
  },
  {
    id: 5519,
    name: "Engranajes Infernales", // Koleda (Hellfire Gears)
    rank: "S",
    rol: "Aturdidor",
    stats: { main: "Recup. Energía", value: "60%" },
    effect: "Mientras está en reserva, la recuperación de energía aumenta. Al usar Especial EX, el Impacto aumenta un 10% (se apila 2 veces).",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Hellfire_Gears.webp"
  },
  {
    id: 5520,
    name: "Tetera de Jade Helado", // Qingyi (Ice-Jade Teapot)
    rank: "S",
    rol: "Aturdidor",
    stats: { main: "Impacto", value: "18%" },
    effect: "Al lanzar un Ataque Básico, gana cargas 'Té'. Cada carga aumenta el Impacto un 0.7%. Al usar Especial EX, el objetivo recibe 20% más de daño.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Ice-Jade_Teapot.webp"
  },
  {
    id: 5521,
    name: "Laurel Ardiente", // Lighter (Blazing Laurel)
    rank: "S",
    rol: "Aturdidor",
    stats: { main: "Impacto", value: "18%" },
    effect: "Aumenta el Aturdimiento un 15%. Al causar aturdimiento, reduce la resistencia del enemigo.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Blazing_Laurel.webp"
  },
  {
    id: 5522,
    name: "Mirada Espectral", // Spectral Gaze Trigger
    rank: "S",
    rol: "Aturdidor",
    stats: { main: "ATK %", value: "25%" },
    effect: "Cuando hay Anomalía de Atributo, el Impacto aumenta.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Spectral_Gaze.webp"
  },
  {
    id: 5523,
    name: "Rugiente urna de la fortuna", // Jufufu
    rank: "S",
    rol: "Aturdidor",
    stats: { main: "ATK %", value: "25%" },
    effect: "",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Roaring_Fur-nace.webp"
  },

  // --- RANGO A (Desde 5613) ---
  {
    id: 5613,
    name: "Cilindro Precioso", // Precious Fossilized Core
    rank: "A",
    rol: "Aturdidor",
    stats: { main: "Impacto", value: "15%" },
    effect: "Reduce el daño recibido. Aumenta el aturdimiento infligido a enemigos con HP alto.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Precious_Fossilized_Core.webp"
  },
  {
    id: 5614,
    name: "Seis Tiros", // Six Shooter
    rank: "A",
    rol: "Aturdidor",
    stats: { main: "Impacto", value: "15%" },
    effect: "Gana una carga cada 3s. Al usar Especial EX, consume cargas para aumentar el aturdimiento un 4% por carga.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Six_Shooter.webp"
  },
  {
    id: 5615,
    name: "Horno de Vapor", // Steam Oven
    rank: "A",
    rol: "Aturdidor",
    stats: { main: "Recup. Energía", value: "50%" },
    effect: "Acumula energía. Por cada 10 de energía, el Impacto aumenta un 2% (hasta 8 veces).",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Steam_Oven.webp"
  },
  {
    id: 5616,
    name: "Batería Demara II", // Demara Battery Mark II
    rank: "A",
    rol: "Aturdidor",
    stats: { main: "Impacto", value: "15%" },
    effect: "Aumenta el Daño Eléctrico un 15%. Al esquivar, la recuperación de energía aumenta.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Demara_Battery_Mark_II.webp"
  },
  {
    id: 5617,
    name: "Cortador de Cajas", // Box Cutter
    rank: "A",
    rol: "Aturdidor",
    stats: { main: "ATK %", value: "25%" },
    effect: "Al atacar por la espalda, el daño de aturdimiento aumenta un 20%.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Box_Cutter.webp"
  },
  

  // --- RANGO B (Desde 5707) ---
  {
    id: 5707,
    name: "Vórtice - Revólver", // Vortex Revolver
    rank: "B",
    rol: "Aturdidor",
    stats: { main: "Impacto", value: "12%" },
    effect: "Aumenta el aturdimiento de ataques básicos.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_(Vortex)_Revolver.webp"
  },
  {
    id: 5708,
    name: "Vórtice - Hacha", // Vortex Hatchet
    rank: "B",
    rol: "Aturdidor",
    stats: { main: "Impacto", value: "12%" },
    effect: "Aumenta el aturdimiento de ataques de salto.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_(Vortex)_Hatchet.webp"
  },
  {
    id: 5709,
    name: "Vórtice - Flecha", // Vortex Arrow
    rank: "B",
    rol: "Aturdidor",
    stats: { main: "Impacto", value: "12%" },
    effect: "Aumenta el aturdimiento de ataques EX.",
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_(Vortex)_Arrow.webp"
  },

  // ========================================================================
  // ROL DEFENSA (Protección y Escudos)
  // ========================================================================

  // --- RANGO S (Desde 5527 para evitar conflictos) ---
  {
    id: 5527,
    name: "Colmillos de Furia", // Tusks of Fury (Caesar)
    rank: "S",
    rol: "Defensa",
    stats: { main: "Impacto", value: "18%" },
    effect: "Aumenta el escudo generado. Al bloquear o interrumpir, aumenta el daño de todo el equipo un 18%.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_Tusks_of_Fury.webp"
  },
  

  // --- RANGO A (Desde 5623 para evitar conflictos) ---
  {
    id: 5623,
    name: "Gran Cilindro", // Big Cylinder
    rank: "A",
    rol: "Defensa",
    stats: { main: "DEF %", value: "40%" },
    effect: "Reduce el daño recibido. Al ser atacado, el siguiente golpe será Crítico garantizado.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_Big_Cylinder.png" // Ojo: PNG
  },
  {
    id: 5624,
    name: "Transmorfo Original", // Original Transmorpher
    rank: "A",
    rol: "Defensa",
    stats: { main: "HP %", value: "25%" },
    effect: "Aumenta la vida máxima. Al recibir daño, aumenta el impacto.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_Original_Transmorpher.png" // Ojo: PNG
  },
  {
    id: 5625,
    name: "Banda de Conejo", // Bunny Band
    rank: "A",
    rol: "Defensa",
    stats: { main: "HP %", value: "25%" },
    effect: "Aumenta la vida máxima. Al esquivar, gana un escudo temporal.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_Bunny_Band.webp"
  },
  {
    id: 5626,
    name: "Abrazo Primaveral", // Spring Embrace
    rank: "A",
    rol: "Defensa",
    stats: { main: "ATK %", value: "25%" },
    effect: "Reduce daño recibido. Al ser atacado, gana generación de energía.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_Spring_Embrace.webp"
  },
  {
    id: 5627,
    name: "Proyector de Celuloide", // Reel Projector (Nuevo A)
    rank: "A",
    rol: "Defensa",
    stats: { main: "DEF %", value: "40%" },
    effect: "Al activar una Asistencia Defensiva, aumenta el daño del equipo.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_Reel_Projector.webp"
  },
  {
    id: 5628,
    name: "Vasija del Temblor", // Tremor Trigram Vessel (Yixuan)
    rank: "A",
    rol: "Defensa",
    stats: { main: "DEF %", value: "48%" },
    effect: "Al recibir daño, refleja una parte al atacante. Aumenta la defensa base.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_Tremor_Trigram_Vessel.webp"
  },
  {
    id: 5629,
    name: "Pacificador Especializado", // Peacekeeper - Specialized
    rank: "A",
    rol: "Defensa",
    stats: { main: "Recup. Energía", value: "60%" },
    effect: "Mientras el escudo está activo, la recuperación de energía aumenta. Al perder el escudo, aumenta el ATK.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_Peacekeeper_-_Specialized.png" // Ojo: PNG
  },

  // --- RANGO B (Desde 5713 para evitar conflictos) ---
  {
    id: 5713,
    name: "Identidad - Base", // Identity Base
    rank: "B",
    rol: "Defensa",
    stats: { main: "DEF %", value: "32%" },
    effect: "Aumenta la defensa cuando la vida es baja.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_(Identity)_Base.webp"
  },
  {
    id: 5714,
    name: "Identidad - Inflexión", // Identity Inflection
    rank: "B",
    rol: "Defensa",
    stats: { main: "DEF %", value: "32%" },
    effect: "Al ser atacado, reduce el daño del siguiente ataque recibido.",
    image: "/CodiceZero/Armas/Defensa/W-Engine_(Identity)_Inflection.webp"
  },

  // ========================================================================
  // ROL RUPTURA (Daño Explosivo / Break)
  // ========================================================================

  // --- RANGO S (Desde 5530 para evitar conflictos) ---
  {
    id: 5530,
    name: "Cuna del Kraken", // Kraken's Cradle (Yidhari)
    rank: "S",
    rol: "Ruptura",
    stats: { main: "Impacto", value: "20%" },
    effect: "Aumenta el Daño de Ruptura. Al romper la defensa enemiga, aumenta el daño de todo el equipo.",
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Kraken's_Cradle.webp"
  },
  {
    id: 5531,
    name: "Jaula Qingming", // Qingming Birdcage
    rank: "S",
    rol: "Ruptura",
    stats: { main: "ATK %", value: "25%" },
    effect: "Al usar una Habilidad Definitiva, aumenta el daño de ruptura.",
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Qingming_Birdcage.webp"
  },
  // --- RANGO A (Desde 5628 para evitar conflictos) ---
  
  {
    id: 5630,
    name: "Ignición Fatua", // Grill O'Wisp
    rank: "A",
    rol: "Ruptura",
    stats: { main: "ATK %", value: "25%" },
    effect: "Aumenta el daño contra enemigos aturdidos.",
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Grill_O'Wisp.webp"
  },
  {
    id: 5631,
    name: "Esfera Rompecabezas", // Puzzle Sphere
    rank: "A",
    rol: "Ruptura",
    stats: { main: "Impacto", value: "15%" },
    effect: "Al golpear con un ataque básico, aumenta el impacto del siguiente ataque especial.",
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Puzzle_Sphere.webp"
  },
  {
    id: 5632,
    name: "Tránsito Herciano", // Radiowave Journey
    rank: "A",
    rol: "Ruptura",
    stats: { main: "Recup. Energía", value: "50%" },
    effect: "Aumenta la recuperación de energía al estar fuera del campo.",
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Radiowave_Journey.webp"
  },

  // --- RANGO B (Desde 5715) ---
  {
    id: 5715,
    name: "Ceniza - Cobalto", // [Cinder] Cobalt
    rank: "B",
    rol: "Ruptura",
    stats: { main: "ATK %", value: "20%" },
    effect: "Aumenta el daño de ruptura básico.",
    image: "/CodiceZero/Armas/Ruptura/W-Engine_(Cinder)_Cobalt.webp"
  },

  // ========================================================================
  // ROL SOPORTE (Buffs y Energía)
  // ========================================================================

  // --- RANGO S (Desde 5532) ---
  {
    id: 5532,
    name: "Cuna de Lágrimas", // Weeping Cradle (Rina)
    rank: "S",
    rol: "Soporte",
    stats: { main: "PEN Ratio", value: "24%" },
    effect: "Mientras está en reserva, la recuperación de energía aumenta. Al atacar, aumenta el daño elemental del equipo.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_Weeping_Cradle.webp"
  },
  {
    id: 5533,
    name: "Hogar de Ensueño", // Dreamlit Hearth (Lucia)
    rank: "S",
    rol: "Soporte",
    stats: { main: "Recup. Energía", value: "60%" },
    effect: "Aumenta el ATK de todo el equipo tras usar una Definitiva. Recupera energía al cambiar.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_Dreamlit_Hearth.webp"
  },
  {
    id: 5534,
    name: "Vanidad Elegante", // Elegant Vanity
    rank: "S",
    rol: "Soporte",
    stats: { main: "Recup. Energía", value: "60%" },
    effect: "Al esquivar, aumenta la recuperación de energía de todo el equipo.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_Elegant_Vanity.webp"
  },
  {
    id: 5535,
    name: "Metanukimorfosis", // Metanukimorphosis
    rank: "S",
    rol: "Soporte",
    stats: { main: "HP %", value: "25%" },
    effect: "Aumenta la vida máxima y la curación realizada.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_Metanukimorphosis.webp"
  },

  // --- RANGO A (Desde 5633) ---
  {
    id: 5633,
    name: "Bola de Juego", // Unfettered Game Ball
    rank: "A",
    rol: "Soporte",
    stats: { main: "Recup. Energía", value: "50%" },
    effect: "Al activar una ventaja elemental, aumenta la Prob. Crítica de todo el equipo.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_Unfettered_Game_Ball.webp"
  },
  {
    id: 5634,
    name: "La Bóveda", // The Vault (Nicole)
    rank: "A",
    rol: "Soporte",
    stats: { main: "Recup. Energía", value: "50%" },
    effect: "Al infligir daño Etéreo, aumenta el daño del equipo contra ese objetivo y regenera energía.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_The_Vault.webp"
  },
  {
    id: 5635,
    name: "Kaboom el Cañón", // Kaboom the Cannon
    rank: "A",
    rol: "Soporte",
    stats: { main: "ATK %", value: "25%" },
    effect: "Al atacar enemigos, reduce su ataque.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_Kaboom_the_Cannon.webp"
  },
  {
    id: 5636,
    name: "Rebanada de Tiempo", // Slice of Time
    rank: "A",
    rol: "Soporte",
    stats: { main: "PEN Ratio", value: "20%" },
    effect: "Al usar Especial EX, reduce el tiempo de reutilización de la Definitiva.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_Slice_of_Time.webp"
  },
  {
    id: 5637,
    name: "Demonio Tímido", // Bashful Demon (Soukaku)
    rank: "A",
    rol: "Soporte",
    stats: { main: "ATK %", value: "25%" },
    effect: "Al usar Especial EX, aumenta el ATK de todo el equipo.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_Bashful_Demon.webp"
  },
  

  // --- RANGO B (Desde 5716) ---
  {
    id: 5716,
    name: "Reverberación - Modelo I", // Reverb Mark I
    rank: "B",
    rol: "Soporte",
    stats: { main: "Recup. Energía", value: "40%" },
    effect: "Aumenta la energía obtenida por asistencias.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_(Reverb)_Mark_I.webp"
  },
  {
    id: 5717,
    name: "Reverberación - Modelo II", // Reverb Mark II
    rank: "B",
    rol: "Soporte",
    stats: { main: "Recup. Energía", value: "40%" },
    effect: "Aumenta la energía obtenida por ataques básicos.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_(Reverb)_Mark_II.webp"
  },
  {
    id: 5718,
    name: "Reverberación - Modelo III", // Reverb Mark III
    rank: "B",
    rol: "Soporte",
    stats: { main: "Recup. Energía", value: "40%" },
    effect: "Aumenta la energía obtenida por ataques especiales.",
    image: "/CodiceZero/Armas/Soporte/W-Engine_(Reverb)_Mark_III.webp"
  },
  
];

// Función para obtener armas por rango
export const getWeaponsByRank = (rank) => {
  return weapons.filter(weapon => weapon.rank === rank);
};

// Función para obtener armas por rol
export const getWeaponsByRole = (role) => {
  return weapons.filter(weapon => weapon.rol === role);
};

// Función para obtener un arma por ID
export const getWeaponById = (id) => {
  return weapons.find(weapon => weapon.id === id);
};

// Función para obtener todas las armas de rango S
export const getSRankWeapons = () => {
  return getWeaponsByRank("S");
};

// Función para obtener todas las armas de rango A
export const getARankWeapons = () => {
  return getWeaponsByRank("A");
};

// Función para obtener todas las armas de rango B
export const getBRankWeapons = () => {
  return getWeaponsByRank("B");
};