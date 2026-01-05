

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
      title: "",
      description: "Aumenta el Ataque en un 12%. Al ejecutar una (técnica especial) o una (técnica especial EX), aumenta la Maestría de Anomalía del portador en 25 ptos. durante 8 s. Pueden acumularse hasta 3 cargas. La duración de cada carga es independiente.",
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
      title: "",
      description: "Al ejecutar un (ataque rapido), obtienes 1 carga de (instinto cazador). Por cada carga de (instinto cazador), el daño físico del portador aumenta en un 12% durante 10 s. Pueden acumularse hasta 3 cargas. Puede activarse una vez cada 0.5 s. La duración se reinicia con cada activación. Al entrar en combate o al ejecutar una (evasión perfecta), el portador obtiene 3 cargas de (instinto cazador) de inmediato. Cuando las cargas de (instinto cazador) alcanzan el máximo, la tasa de acumulación de Anomalía de Atributo del portador aumenta en un 40%.",
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
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Ataque", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "",
      description: "Mientras está fuera del campo, la Regeneración de Energía del equipo aumenta en 0.6/s. Cuando golpea a un enemigo con un (ataque especial o ataque rápido), el daño del equipo aumenta en un 3.5%, apilándose hasta 10 veces y durando 6s. Este efecto puede desencadenar una vez cada 0.3s. Mientras está fuera del campo, el efecto de la pila se duplica. Los desencadenadores repetidos restablecen la duración. Al obtener el efecto de aumento de Daño, si el número de pilas de corriente es mayor o igual a 5, entonces la Maestria de Anomalía del equipo aumenta en 50. Este aumento de la Maestria de Anomalía no se acumula y dura 6s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "0.6/s", tasa: "3.5%", mastery: "50" },
        { level: 2, atk: "0.75/s", tasa: "4.4%", mastery: "62" },
        { level: 3, atk: "0.9/s", tasa: "5.2%", mastery: "75" },
        { level: 4, atk: "1.05/s", tasa: "6.1%", mastery: "87" },
        { level: 5, atk: "1.2/s", tasa: "7.0%", mastery: "100" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Flamemaker_Shaker.png" // Es PNG
  },
  {
    id: 5504,
    name: "Tejedor del Tiempo", // Yanagi (Timeweaver)
    rank: "S",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Ataque", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Estratagema Devoradora de Tiempo",
      description: "La Tasa de Acumulación de Anomalia Electrica del portador aumenta un 30%. Cuando una (Tecnica Especial) o (Tecnica Especial EX) golpea a enemigos sufriendo una (Anomalia de Atributo), la Maestría de Anomalía del portador aumenta en 75 por 15s. Cuando la Maestría de Anomalía del portador es mayor o igual a 375, el Daño de (Desorden) infligido por el portador aumenta un 25%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "30%", mastery: "75", damage: "25%" },
        { level: 2, atk: "35%", mastery: "85", damage: "27.5%" },
        { level: 3, atk: "40%", mastery: "95", damage: "30%" },
        { level: 4, atk: "45%", mastery: "105", damage: "32.5%" },
        { level: 5, atk: "50%", mastery: "115", damage: "35%" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Timeweaver.webp"
  },
  {
    id: 5505,
    name: "Santuario de Granizo", // Miyabi (Hailstorm Shrine)
    rank: "S",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 50, max: 743 },     // Nvl 1 -> 60
      subStat: { name: "Prob. Crítica", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Estrella Manchada de Escarcha",
      description: "El Daño CRIT aumenta un 50%. Al usar una (Tecnica Especial EX) o cuando cualquier miembro del escuadrón aplica una (Anomalia de Atributo) a un enemigo, el Daño Hielo del portador aumenta un 20%, acumulándose hasta 2 veces y durando 15s. La duración de cada acumulación se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "50%", damage: "20%" },
        { level: 2, atk: "57%", damage: "23%" },
        { level: 3, atk: "65%", damage: "26%" },
        { level: 4, atk: "72%", damage: "29%" },
        { level: 5, atk: "80%", damage: "32%" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Hailstorm_Shrine.webp"
  },
  {
    id: 5506,
    name: "Capricho del Vuelo", // Vivian (Flight of Fancy)
    rank: "S",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Maestría Anomalía", min: "36", max: "90" } // Nvl 1 -> 60
    },
    effect: {
      title: "Plumas de Punta de Plata",
      description: "Aumenta la Tasa de Acumulación de Anomalía un 40%. Cuando el portador inflige Daño Etereo, su Maestría de Anomalía aumenta en 20 por 5s, acumulándose hasta 6 veces. Este efecto puede activarse una vez cada 0.5s, y las activaciones repetidas reinician la duración.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "40%", damage: "20" },
        { level: 2, atk: "46%", damage: "23" },
        { level: 3, atk: "52%", damage: "26" },
        { level: 4, atk: "58%", damage: "29" },
        { level: 5, atk: "64%", damage: "32" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Flight_of_Fancy.webp"
  },
  {
    id: 5507,
    name: "Perfección Practicada", // Practiced Perfection
    rank: "S",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Ataque", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Regalo de Polvo de Estrellas",
      description: "La Maestría de Anomalía del portador aumenta en 60. Al infligir Asalto, el Daño Fisico del portador aumenta un 20% por 20s, acumulándose hasta 2 veces. Las activaciones repetidas reinician la duración. Cuando el portador entra en combate, gana inmediatamente 2 acumulaciones.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "60", damage: "20%" },
        { level: 2, atk: "69", damage: "23%" },
        { level: 3, atk: "78", damage: "26%" },
        { level: 4, atk: "87", damage: "29%" },
        { level: 5, atk: "96", damage: "32%" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Practiced_Perfection.webp"
  },

  // --- RANGO A (IDs 56XX) ---
  {
    id: 5601,
    name: "Gourmet de la Selva", // Rainforest Gourmet
    rank: "A",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Maestría Anomalía", min: "30", max: "75" } // Nvl 1 -> 60
    },
    effect: {
      title: "¡La Cena Esta Lista!",
      description: "Por cada 10 de Energía consumida, el portador gana un efecto que aumenta el ATK en un 2.5% por 10s, acumulándose hasta 10 veces. La duración de cada acumulación se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "2.5%" },
        { level: 2, atk: "2.8%" },
        { level: 3, atk: "3.2%" },
        { level: 4, atk: "3.6%" },
        { level: 5, atk: "4.0%" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Rainforest_Gourmet.webp"
  },
  {
    id: 5602,
    name: "Brillo Electro", // Electro-Lip Gloss
    rank: "A",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Maestría Anomalía", min: "30", max: "75" } // Nvl 1 -> 60
    },
    effect: {
      title: "Beso de la Muerte",
      description: "Cuando hay enemigos en el campo sufriendo una (Anomalia de Atributo), el ATK del portador aumenta un 10% y este inflige un 15% más de Daño adicional al objetivo.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "10%", damage: "15%" },
        { level: 2, atk: "11.5%", damage: "17.5%" },
        { level: 3, atk: "13%", damage: "20%" },
        { level: 4, atk: "14.5%", damage: "22.5%" },
        { level: 5, atk: "16%", damage: "25%" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Electro-Lip_Gloss.webp"
  },
  {
    id: 5603,
    name: "Geminis Llorones", // Weeping Gemini
    rank: "A",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Ataque", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Gritos Persistentes",
      description: "Siempre que un miembro del escuadrón inflige una (Anomalia de Atributo) a un enemigo, el portador gana una mejora que aumenta la Maestría de Anomalía en 30, acumulándose hasta 4 veces. Este efecto expira cuando el objetivo se recupera del Aturdimiento o es derrotado. La duración de cada acumulación se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "30" },
        { level: 2, atk: "34" },
        { level: 3, atk: "38" },
        { level: 4, atk: "42" },
        { level: 5, atk: "48" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Weeping_Gemini.webp"
  },
  {
    id: 5604,
    name: "Rugido", // Roaring Ride
    rank: "A",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "Ataque", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Potencial de Colisión",
      description: "Cuando (Tecnica Especial EX) golpea a un enemigo, uno de tres efectos posibles es activado aleatoriamente por 5 segundos. Este efecto puede activarse una vez cada 0.3s. Los mismos tipos de efectos no pueden acumularse. Activaciones repetidas reinician la duración, permitiendo que varios efectos estén activos a la vez: Aumenta el ATK del portador en un 8%, aumenta la Maestría de Anomalía del portador en 40, o aumenta la Tasa de Acumulación de Anomalía del portador en un 25%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "8%", damage: "40", atkSpeed: "25%" },
        { level: 2, atk: "9.2%", damage: "46", atkSpeed: "28%" },
        { level: 3, atk: "10.4%", damage: "52", atkSpeed: "32%" },
        { level: 4, atk: "11.6%", damage: "58", atkSpeed: "36%" },
        { level: 5, atk: "12.8%", damage: "64", atkSpeed: "40%" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_Roaring_Ride.webp"
  },

  // --- RANGO B (IDs 57XX) ---
  {
    id: 5701,
    name: "Tormenta Magnética - Charlie", // Magnetic Storm Charlie
    rank: "B",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "PEN Ratio", min: "6.4%", max: "16%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Sobrecarga de Carga",
      description: "Siempre que un miembro del escuadrón inflige una (Anomalia de Atributo) a un enemigo, el portador genera 3.5 de Energía. Este efecto puede activarse una vez cada 12s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, energy: "3.5" },
        { level: 2, energy: "4.0" },
        { level: 3, energy: "4.5" },
        { level: 4, energy: "5.0" },
        { level: 5, energy: "5.5" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_(Magnetic_Storm)_Charlie.webp"
  },
  {
    id: 5702,
    name: "Tormenta Magnética - Alpha", // Magnetic Storm Alpha
    rank: "B",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "Ataque", min: "8%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Corriente Desordenada",
      description: "Acumular Acumulación de Anomalía aumenta la Maestría de Anomalía del portador en 25 por 10s. Este efecto puede activarse una vez cada 20s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "25" },
        { level: 2, atk: "28" },
        { level: 3, atk: "32" },
        { level: 4, atk: "36" },
        { level: 5, atk: "40" }
      ]
    },
    image: "/CodiceZero/Armas/Anomalia/W-Engine_(Magnetic_Storm)_Alpha.png" // Es PNG
  },
  {
    id: 5703,
    name: "Tormenta Magnética - Bravo", // Magnetic Storm Bravo
    rank: "B",
    rol: "Anomalia",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "Maestría Anomalía", min: "24", max: "60" } // Nvl 1 -> 60
    },
    effect: {
      title: "Oleada de Alto Voltaje",
      description: "Acumular Acumulación de Anomalía aumenta la Maestría de Anomalía del portador en 25 por 10s. Este efecto puede activarse una vez cada 20s..",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "25" },
        { level: 2, atk: "28" },
        { level: 3, atk: "32" },
        { level: 4, atk: "36" },
        { level: 5, atk: "40" }
      ]
    },
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
    detailStats: {
      baseAtk: { min: 46, max: 684 },     // Nvl 1 -> 60
      subStat: { name: "Prob. Crítica", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Garras de Gato de Metal",
      description: "Aumenta el Daño Fisico en un 20%. El DAÑO del portador aumenta en un 25% al golpear al enemigo desde atrás.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "20%", atkBack: "25%" },
        { level: 2, atk: "25%", atkBack: "31.5%" },
        { level: 3, atk: "30%", atkBack: "38%" },
        { level: 4, atk: "35%", atkBack: "44%" },
        { level: 5, atk: "40%", atkBack: "50%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Steel_Cushion.webp"
  },
  {
    id: 5509,
    name: "Azufre", // The Brimstone (Soldier 11)
    rank: "S",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 46, max: 684 },     // Nvl 1 -> 60
      subStat: { name: "Ataque", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Aliento Abrasador",
      description: "Al golpear a un enemigo con un (Ataque Basico), (Ataque de Carrera) o (Contraataque de Evasion), el ATK del portador aumenta en un 3.5% por 8s, acumulándose hasta 8 veces. Este efecto puede activarse una vez cada 0.5s. La duración de cada acumulación se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, atk: "3.5%" },
        { level: 2, atk: "4.4%" },
        { level: 3, atk: "5.2%" },
        { level: 4, atk: "6%" },
        { level: 5, atk: "7%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_The_Brimstone.webp"
  },
  {
    id: 5510,
    name: "Visitante de las Profundidades", // Deep Sea Visitor (Ellen)
    rank: "S",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Prob. Crítica", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Señor de los Mares",
      description: "Aumenta el Daño Hielo en un 25%. Al golpear a un enemigo con un (Ataque Basico), la Probabilidad de CRIT del portador aumenta en un 10% por 8s. Al infligir Daño Hielo con un (Ataque de Carrera), la Probabilidad de CRIT del portador aumenta en un 10% adicional por 15s. La duración de cada efecto se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, damage: "25%", prob: "10%", probDash: "10%" },
        { level: 2, damage: "31.5%", prob: "12.5%", probDash: "12.5%" },
        { level: 3, damage: "38%", prob: "15%", probDash: "15%" },
        { level: 4, damage: "44.5%", prob: "17.5%", probDash: "17.5%" },
        { level: 5, damage: "50%", prob: "20%", probDash: "20%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Deep_Sea_Visitor.webp"
  },
  {
    id: 5511,
    name: "Caja de Hierbas Zanshin", // Zanshin Herb Case (Harumasa)
    rank: "S",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Daño Crítico", min: "19.2%", max: "48%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Crecimiento a Través de la Adversidad",
      description: "La Probabilidad de CRIT aumenta en un 10%. El Daño Electrico de (Ataque de Carrera) aumenta en un 40%. Cuando cualquier miembro del escuadrón aplica una (Anomalia de Atributo) o Aturde a un enemigo, la Probabilidad de CRIT del portador aumenta en un 10% adicional por 15s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, prob: "10%", damageDash: "40%", probadd: "10%" },
        { level: 2, prob: "11.5%", damageDash: "46%", probadd: "11.5%" },
        { level: 3, prob: "13%", damageDash: "52%", probadd: "13%" },
        { level: 4, prob: "14.5%", damageDash: "58%", probadd: "14.5%" },
        { level: 5, prob: "16%", damageDash: "64%", probadd: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Zanshin_Herb_Case.webp"
  },
  {
    id: 5512,
    name: "Agente Antidisturbios", // Riot Suppressor Mark VI (Zhu Yuan)
    rank: "S",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Daño Crítico", min: "19.2%", max: "48%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Patrulla de Seguridad",
      description: "Aumenta la Probabilidad de CRIT en un 15%. Lanzar una (Tecnica Especial EX) otorga al portador 8 acumulaciones de Carga, hasta un máximo de 8 acumulaciones. Siempre que el (Ataque Basico) o (Ataque de Carrera) del portador causa Daño Etereo, consume una acumulación de Carga y aumenta el DAÑO de la habilidad en un 35%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, prob: "15%", damageDash: "35%" },
        { level: 2, prob: "18.8%", damageDash: "43.5%" },
        { level: 3, prob: "22.6%", damageDash: "52%" },
        { level: 4, prob: "26.4%", damageDash: "60.5%" },
        { level: 5, prob: "30%", damageDash: "70%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Riot_Suppressor_Mark_VI.webp"
  },
  {
    id: 5513,
    name: "Eclipse Infinito", // Myriad Eclipse (Hugo)
    rank: "S",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Prob. Crítica", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Personas Falsas",
      description: "Aumenta el Daño CRIT en un 45%. Al usar una (Tecnica Especial EX), (Ataque en Cadena) o (Definitiva) para causar Daño Hielo, el portador gana el efecto (Sentencia de Muerte de Cero Absoluto) por 3s. Mientras (Sentencia de Muerte de Cero Absoluto) está activo, el personaje ignora el 25% de la DEF del enemigo al asestar un golpe.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DañoCrit: "45%", DEF: "25%" },
        { level: 2, DañoCrit: "51.75%", DEF: "28.75%" },
        { level: 3, DañoCrit: "58.5%", DEF: "32.5%" },
        { level: 4, DañoCrit: "65.25%", DEF: "36.25%" },
        { level: 5, DañoCrit: "72%", DEF: "40%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Myriad_Eclipse.webp"
  },
  {
    id: 5514,
    name: "Llama Belicosa", // Bellicose Blaze (Orphie)
    rank: "S",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Recup. Energía", min: "24%", max: "60%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Coro Devorador de Llamas",
      description: "Aumenta la Probabilidad de CRIT en un 20%. Cuando el portador activa una (Replica) que causa Daño Fuego, sus ataques ignoran un 15% de la DEF del objetivo por 8s. Puede acumularse una vez cada 3s, hasta 2 veces. Las activaciones repetidas reinician la duración.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, prob: "20%", DEF: "15%" },
        { level: 2, prob: "23%", DEF: "17.2%" },
        { level: 3, prob: "26%", DEF: "19.5%" },
        { level: 4, prob: "29%", DEF: "21.7%" },
        { level: 5, prob: "32%", DEF: "24%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Bellicose_Blaze.webp"
  },
  {
    id: 5515,
    name: "Nocturno del Corazón", // Heartstring Nocturne (Evelyn)
    rank: "S",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Prob. Crítica", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Cuerda y Melodía",
      description: "El Daño CRIT aumenta un 50%. Cuando el portador entra en combate, o activa un (Ataque en Cadena) o (Definitiva), gana 1 acumulación de (Cuerda del Corazon). Cada acumulación de (Cuerda del Corazon) permite que el (Ataque en Cadena) y la (Definitiva) del portador ignoren el 12.5% de la Res Fuego del objetivo, acumulándose hasta 2 veces y durando 30s. Las activaciones repetidas reinician la duración.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DañoCrit: "50%", FireRes: "12.5%" },
        { level: 2, DañoCrit: "57.5%", FireRes: "14.5%" },
        { level: 3, DañoCrit: "65%", FireRes: "16.5%" },
        { level: 4, DañoCrit: "72.5%", FireRes: "18.5%" },
        { level: 5, DañoCrit: "80%", FireRes: "20%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Heartstring_Nocturne.webp"
  },
  {
    id: 5516,
    name: "Inocencia Cortada", // Severed Innocence (Sanby)
    rank: "S",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Daño CRIT", min: "19.2%", max: "48%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Flor Tranquila",
      description: "El Daño CRIT aumenta en un 30%. Cuando el portador asesta un golpe con un (Ataque Basico), (Tecnica Especial) o (Replica), gana 1 acumulación de una mejora. Cada acumulación aumenta el Daño CRIT del portador en un 10% adicional, acumulándose hasta 3 veces. El efecto dura 30s, la duración de cada acumulación se calcula por separado, y solo puede activarse una vez por uso de una habilidad. Con las 3 acumulaciones, el Daño Electrico del portador aumenta en un 20%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DañoCrit: "30%", dañocritadd: "10%", Electrico: "20%" },
        { level: 2, DañoCrit: "34.5%", dañocritadd: "11.5%", Electrico: "23%" },
        { level: 3, DañoCrit: "39%", dañocritadd: "13%", Electrico: "26%" },
        { level: 4, DañoCrit: "43.5%", dañocritadd: "14.5%", Electrico: "29%" },
        { level: 5, DañoAnomalo: "48%", dañocritadd: "16%", Electrico: "32%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Severed_Innocence.webp"
  },
  {
    id: 5517,
    name: "Cordis Germina", // Cordis Germina (Seed)
    rank: "S",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Prob. CRIT", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Núcleo Brotante",
      description: "Aumenta la Probabilidad de CRIT en un 15%. Cuando el portador inflige DAÑO con un (Ataque Basico) o (Tecnica Especial EX), gana 1 acumulación de una mejora. Cada acumulación aumenta el Daño Electrico del portador en un 12.5%, hasta 2 acumulaciones. Cada acumulación dura 40s. La duración de cada acumulación se calcula por separado. Puede activarse una vez por uso de una habilidad. Al tener 2 acumulaciones, el DAÑO de (Ataque Basico) y (Definitiva) del portador ignora el 20% de la DEF del enemigo.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ProbCrit: "15%", DañoElectrico: "12.5%", DEF: "20%" },
        { level: 2, ProbCrit: "17%", DañoElectrico: "14.5%", DEF: "23%" },
        { level: 3, ProbCrit: "19%", DañoElectrico: "16.5%", DEF: "26%" },
        { level: 4, ProbCrit: "21%", DañoElectrico: "18.5%", DEF: "29%" },
        { level: 5, ProbCrit: "23%", DañoElectrico: "20%", DEF: "32%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Cordis_Germina.webp"
  },

  // --- RANGO A (A partir de ID 5605) ---
  {
    id: 5605,
    name: "Réplica Motor Estelar", // Starlight Engine Replica
    rank: "A",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Rayo de Caballero: Cambio",
      description: "Aumenta el Daño Fisico del portador contra el objetivo en un 36% por 8s al golpear a un enemigo al menos a 6 metros de distancia con un (Ataque Basico) o (Ataque de Carrera).",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "36%" },
        { level: 2, ATK: "41%" },
        { level: 3, ATK: "46.5%" },
        { level: 4, ATK: "52%" },
        { level: 5, ATK: "57.5%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Starlight_Engine_Replica.webp"
  },
  {
    id: 5606,
    name: "Anhelo Marcato", // Marcato Desire
    rank: "A",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Prob. CRIT", min: "8%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "¡Que Todos se Animen!",
      description: "Cuando una (Tecnica Especial EX) o (Ataque en Cadena) golpea a un enemigo, el ATK del portador aumenta un 6% por 8s. Mientras el objetivo está bajo una (Anomalia de Atributo), este efecto aumenta en un 6% adicional.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "6%", atkadd: "6%" },
        { level: 2, ATK: "6.9%", atkadd: "6.9%" },
        { level: 3, ATK: "7.8%", atkadd: "7.8%" },
        { level: 4, ATK: "8.7%", atkadd: "8.7%" },
        { level: 5, ATK: "9.6%", atkadd: "9.6%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Marcato_Desire.webp"
  },
  {
    id: 5607,
    name: "Flor Dorada", // Gilded Blossom
    rank: "A",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "ATK%", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Medidas Antirrobo Extraordinarias",
      description: "El ATQ aumenta en un 6%, y el DAÑO infligido por (Tecnica Especial EX) aumenta en un 15%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "6%", atkadd: "15%" },
        { level: 2, ATK: "6.9%", atkadd: "17.2%" },
        { level: 3, ATK: "7.8%", atkadd: "19.5%" },
        { level: 4, ATK: "8.7%", atkadd: "21.8%" },
        { level: 5, ATK: "9.6%", atkadd: "24%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Gilded_Blossom.webp"
  },
  {
    id: 5608,
    name: "Cámara de la Casa", // Housekeeper
    rank: "A",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "ATK%", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Sierra Doméstica Segura",
      description: "Mientras está fuera del campo, la Regeneración de Energía del portador aumenta en 0.45/s. Cuando una (Tecnica Especial EX) golpea a un enemigo, el Daño Fisico del portador aumenta en un 3%, acumulándose hasta 15 veces y durando 1s. Las activaciones repetidas reinician la duración.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, RecupEnergia: "0.45", dañoFisico: "3%" },
        { level: 2, RecupEnergia: "0.52", dañoFisico: "3.5%" },
        { level: 3, RecupEnergia: "0.58", dañoFisico: "4%" },
        { level: 4, RecupEnergia: "0.65", dañoFisico: "4.4%" },
        { level: 5, RecupEnergia: "0.72", dañoFisico: "4.8%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Housekeeper.webp"
  },
  {
    id: 5609,
    name: "Taladro - Eje Rojo", // Drill Rig - Red Axis
    rank: "A",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "Recup. Energía", min: "20%", max: "50%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Generador del Infierno",
      description: "Al lanzar una (Tecnica Especial EX) o (Ataque en Cadena), el Daño Electrico de (Ataques Basicos) y (Ataques de Carrera) aumenta en un 50% por 10s. Este efecto puede activarse una vez cada 15s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, dañoElectrico: "50%" },
        { level: 2, dañoElectrico: "57.5%" },
        { level: 3, dañoElectrico: "65%" },
        { level: 4, dañoElectrico: "72.5%" },
        { level: 5, dañoElectrico: "80%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Drill_Rig_-_Red_Axis.webp"
  },
  {
    id: 5610,
    name: "Rotor de Cañón", // Cannon Rotor
    rank: "A",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Prob. Crítico", min: "9.6%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Cañón Sobredimensionado",
      description: "Aumenta el ATQ en un 7.5%. Al asestar un golpe crítico a un enemigo, se infligirá un 200% adicional del ATQ como DAÑO. Este efecto puede activarse una vez cada 8s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "7.5%", segundos: "8s" },
        { level: 2, ATK: "8.6%", segundos: "7.5s" },
        { level: 3, ATK: "9.7%", segundos: "7s" },
        { level: 4, ATK: "10.8%", segundos: "6.5s" },
        { level: 5, ATK: "12%", segundos: "6s" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Cannon_Rotor.webp"
  },
  {
    id: 5611,
    name: "Estrella de la Calle", // Street Superstar
    rank: "A",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "ATK%", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Barras Ardientes",
      description: "Siempre que un miembro del escuadrón lanza un (Ataque en Cadena), el portador gana 1 acumulación de Carga, acumulándose hasta 3 veces. Al activar su propia (Definitiva), el portador consume todas las acumulaciones de Carga, y cada acumulación aumenta el DAÑO de la habilidad en un 15%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Daño: "15%" },
        { level: 2, Daño: "17.2%" },
        { level: 3, Daño: "19.5%" },
        { level: 4, Daño: "21.7%" },
        { level: 5, Daño: "24%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Street_Superstar.webp"
  },
  {
    id: 5612,
    name: "Motor Estelar", // Starlight Engine (Tipo S - Versión completa)
    rank: "A",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Combo de Caballero",
      description: "Lanzar un (Contraataque de Evasion) o (Asistencia Rapida) aumenta el ATK del portador en un 12% por 12s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "12%" },
        { level: 2, ATK: "13.8%" },
        { level: 3, ATK: "15.6%" },
        { level: 4, ATK: "17.4%" },
        { level: 5, ATK: "19.2%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Starlight_Engine.webp"
  },

  // --- RANGO B (A partir de ID 5704) ---
  {
    id: 5704,
    name: "Fase Lunar - Pleniluna", // Lunar Pleniluna
    rank: "B",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "8%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Luna Llena",
      description: "El DAÑO de (Ataque Basico), (Ataque de Carrera) y (Contraataque de Evasion) aumenta en un 12%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "12%" },
        { level: 2, ATK: "14%" },
        { level: 3, ATK: "16%" },
        { level: 4, ATK: "18%" },
        { level: 5, ATK: "20%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_(Lunar)_Pleniluna.webp"
  },
  {
    id: 5705,
    name: "Fase Lunar - Noviluna", // Lunar Noviluna
    rank: "B",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "Prob. Crítico", min: "6.4%", max: "16%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Luna Nueva",
      description: "Lanzar una (Tecnica Especial EX) genera 3 de Energía para el portador. Este efecto puede activarse una vez cada 12s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Energia: "3" },
        { level: 2, Energia: "3.5" },
        { level: 3, Energia: "4" },
        { level: 4, Energia: "4.5" },
        { level: 5, Energia: "5" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_(Lunar)_Noviluna.webp"
  },
  {
    id: 5706,
    name: "Fase Lunar - Decrescente", // Lunar Decrescent
    rank: "B",
    rol: "Ataque",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "8%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Luna Menguante",
      description: "Lanzar un (Ataque en Cadena) o (Definitiva) aumenta el DAÑO del portador en un 15% por 6s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "15%" },
        { level: 2, ATK: "17.5%" },
        { level: 3, ATK: "20%" },
        { level: 4, ATK: "22.5%" },
        { level: 5, ATK: "25%" }
      ]
    },
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
    detailStats: {
      baseAtk: { min: 46, max: 684 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "7.2%", max: "18%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Cadenas Vinculantes",
      description: "Cuando un ataque golpea a un enemigo, el DAÑO y el Aturdimiento de los (Ataques Basicos) aumentan en un 6% por 8s, acumulándose hasta 5 veces. Este efecto puede activarse como máximo una vez durante cada habilidad. La duración de cada acumulación se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "6%" },
        { level: 2, ATK: "7.5%" },
        { level: 3, ATK: "9%" },
        { level: 4, ATK: "10.5%" },
        { level: 5, ATK: "12%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_The_Restrained.webp"
  },
  {
    id: 5519,
    name: "Engranajes Infernales", // Koleda (Hellfire Gears)
    rank: "S",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 46, max: 684 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "7.2%", max: "18%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Construcción Apasionada",
      description: "Mientras está fuera del campo, la Regeneración de Energía del portador aumenta en 0.6/s. Al usar una (Tecnica Especial EX), el Impacto del portador aumenta en un 10% por 10s, acumulándose hasta 2 veces. La duración de cada acumulación se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, RegeneracionEnergy: "0.6/s", impacto: "10%" },
        { level: 2, RegeneracionEnergy: "0.75/s", impacto: "12.5%" },
        { level: 3, RegeneracionEnergy: "0.9/s", impacto: "15%" },
        { level: 4, RegeneracionEnergy: "1.05/s", impacto: "17.5%" },
        { level: 5, RegeneracionEnergy: "1.2/s", impacto: "20%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Hellfire_Gears.webp"
  },
  {
    id: 5520,
    name: "Tetera de Jade Helado", // Qingyi (Ice-Jade Teapot)
    rank: "S",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "7.2%", max: "18%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Melodía Resonante",
      description: "Cuando un (Ataque Basico) golpea a un enemigo, gana 1 acumulación de (Té-rífico). Cada acumulación de (Té-rífico) aumenta el Impacto del usuario en un 0.7%, acumulándose hasta 30 veces, y durando 8s. La duración de cada acumulación se calcula por separado. Al adquirir (Té-rífico), si el portador posee acumulaciones de (Té-rífico) mayores o iguales a 15, el DAÑO de todos los miembros del escuadrón aumenta en un 20% por 10s. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Impacto: "0.7%", daño: "20%" },
        { level: 2, Impacto: "0.88%", daño: "23%" },
        { level: 3, Impacto: "1.05%", daño: "26%" },
        { level: 4, Impacto: "1.22%", daño: "29%" },
        { level: 5, Impacto: "1.4%", daño: "32%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Ice-Jade_Teapot.webp"
  },
  {
    id: 5521,
    name: "Laurel Ardiente", // Lighter (Blazing Laurel)
    rank: "S",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "7.2%", max: "18%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Llama Fluyente",
      description: "Al lanzar una (Asistencia Rapida) o (Asistencia Perfecta), el Impacto del portador aumenta en un 25% por 8s. Cuando el portador lanza y golpea a un enemigo con un (Ataque Basico), aplica (Marchitamiento) al objetivo por 30s, acumulándose hasta 20 veces, las activaciones repetidas reinician la duración. Cuando cualquier miembro del escuadrón golpea a un enemigo, por cada acumulación de (Marchitamiento) aplicada al objetivo, el Daño CRIT del Daño Hielo y Daño Fuego infligido por ese ataque aumenta en un 1.5%. Solo puede existir una instancia de este efecto en el mismo escuadrón.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Impacto: "25%", daño: "1.5%" },
        { level: 2, Impacto: "28.75%", daño: "1.72%" },
        { level: 3, Impacto: "32.5%", daño: "1.95%" },
        { level: 4, Impacto: "36.25%", daño: "2.17%" },
        { level: 5, Impacto: "40%", daño: "2.5%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Blazing_Laurel.webp"
  },
  {
    id: 5522,
    name: "Mirada Espectral", // Spectral Gaze Trigger
    rank: "S",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Prob. Crítico", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Buscador de Viento",
      description: "Cuando la (Replica) del portador golpea a un enemigo causando Daño Electrico, la DEF del objetivo se reduce en un 25% por 5s. Los efectos pasivos del mismo nombre no se acumulan. Cuando se activa este efecto, si el portador no es el personaje activo, gana 1 acumulación de (Bloqueo Espiritual), hasta un máximo de 3 acumulaciones. Esto solo puede activarse una vez por uso de una habilidad. Cada acumulación de (Bloqueo Espiritual) aumenta el Impacto del portador en un 4%, durando 12s. La duración de cada acumulación se calcula por separado. Con las acumulaciones completas de (Bloqueo Espiritual), el Impacto del portador aumenta en un 8% adicional.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DEF: "25%", Impacto: "4%", ImpactAdd: "8%" },
        { level: 2, DEF: "28.75%", Impacto: "4.6%", ImpactAdd: "9.2%" },
        { level: 3, DEF: "32.5%", Impacto: "5.2%", ImpactAdd: "10.4%" },
        { level: 4, DEF: "36.25%", Impacto: "5.8%", ImpactAdd: "11.6%" },
        { level: 5, DEF: "40%", Impacto: "6.4%", ImpactAdd: "12.8%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Spectral_Gaze.webp"
  },
  {
    id: 5523,
    name: "Rugiente urna de la fortuna", // Jufufu
    rank: "S",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Espíritu del Tigre Naciente",
      description: "El Aturdimiento infligido por la (Tecnica Especial EX), (Ataque en Cadena) y (Definitiva) del portador aumenta en un 28%. Al usar un (Ataque en Cadena) o (Definitiva) para infligir Daño Fuego, el DAÑO infligido por todos los miembros del escuadrón aumenta en un 10%, acumulándose hasta 2 veces y durando 30s. La duración de cada acumulación se calcula por separado. Se activa una vez por uso de una habilidad. Solo puede existir una instancia de este efecto en el mismo escuadrón.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Daze: "28%", Damage: "10%" },
        { level: 2, Daze: "32.2%", Damage: "11.5%" },
        { level: 3, Daze: "36.4%", Damage: "13%" },
        { level: 4, Daze: "40.6%", Damage: "14.5%" },
        { level: 5, Daze: "44.8%", Damage: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Roaring_Fur-nace.webp"
  },

  // --- RANGO A (Desde 5613) ---
  {
    id: 5613,
    name: "Cilindro Precioso", // Precious Fossilized Core
    rank: "A",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "6%", max: "15%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Cazador de Bestias",
      description: "Cuando los PV del objetivo no son inferiores al 50%, el portador inflige un 10% más de Aturdimiento al objetivo. Cuando los PV del objetivo no son inferiores al 75%, esta bonificación aumenta en un 10% adicional.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Daze: "10%", DazeAdd: "10%" },
        { level: 2, Daze: "11.5%", DazeAdd: "11.5%" },
        { level: 3, Daze: "13%", DazeAdd: "13%" },
        { level: 4, Daze: "14.5%", DazeAdd: "14.5%" },
        { level: 5, Daze: "16%", DazeAdd: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Precious_Fossilized_Core.webp"
  },
  {
    id: 5614,
    name: "Seis Tiros", // Six Shooter
    rank: "A",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "6%", max: "15%" } // Nvl 1 -> 60
    },
    effect: {
      title: "¡Fuego!",
      description: "El portador gana 1 acumulación de Carga cada 3s, acumulándose hasta 6 veces. Al lanzar una (Tecnica Especial EX), consume todas las acumulaciones de Carga y cada acumulación consumida aumenta el Aturdimiento infligido por la habilidad en un 4%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Daze: "4%" },
        { level: 2, Daze: "4.6%" },
        { level: 3, Daze: "5.2%" },
        { level: 4, Daze: "5.8%" },
        { level: 5, Daze: "6.4%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Six_Shooter.webp"
  },
  {
    id: 5615,
    name: "Horno de Vapor", // Steam Oven
    rank: "A",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Recup. Energía", min: "20%", max: "50%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Caldo Espeso",
      description: "Por cada 10 de Energía acumulada, el Impacto del portador aumenta en un 2%, acumulándose hasta 8 veces. Después de consumir Energía, esta bonificación permanece por 8 segundos más. La duración de cada acumulación se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Impacto: "2%" },
        { level: 2, Impacto: "2.3%" },
        { level: 3, Impacto: "2.6%" },
        { level: 4, Impacto: "2.9%" },
        { level: 5, Impacto: "3.2%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Steam_Oven.webp"
  },
  {
    id: 5616,
    name: "Batería Demara II", // Demara Battery Mark II
    rank: "A",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "6%", max: "15%" } // Nvl 1 -> 60
    },
    effect: {
      title: "En un Destello de Luz",
      description: "Aumenta el Daño Electrico en un 15%. Cuando el portador golpea a un enemigo con un (Contraataque de Evasion) o (Ataque de Asistencia), su Tasa de Generación de Energía aumenta en un 18% por 8s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Electrico: "15%", Energy: "18%" },
        { level: 2, Electrico: "17.5%", Energy: "20.5%" },
        { level: 3, Electrico: "20%", Energy: "23%" },
        { level: 4, Electrico: "22%", Energy: "25%" },
        { level: 5, Electrico: "24%", Energy: "27.5%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Demara_Battery_Mark_II.webp"
  },
  {
    id: 5617,
    name: "Cortador de Cajas", // Box Cutter
    rank: "A",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "6%", max: "15%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Cuidado con los Dedos",
      description: "Al lanzar una (Replica), el Daño Fisico del portador aumenta en un 15% y el Aturdimiento aumenta en un 10%, por 10s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DañoFisico: "15%", Daze: "10%" },
        { level: 2, DañoFisico: "17.3%", Daze: "11.5%" },
        { level: 3, DañoFisico: "19.5%", Daze: "13%" },
        { level: 4, DañoFisico: "21.8%", Daze: "14.5%" },
        { level: 5, DañoFisico: "24%", Daze: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Box_Cutter.webp"
  },


  // --- RANGO B (Desde 5707) ---
  {
    id: 5707,
    name: "Vórtice - Revólver", // Vortex Revolver
    rank: "B",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "8%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Corriente Subyacente",
      description: "Las (Tecnicas Especiales EX) infligen un 10% más de Aturdimiento.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Daze: "10%" },
        { level: 2, Daze: "11.5%" },
        { level: 3, Daze: "13%" },
        { level: 4, Daze: "14.5%" },
        { level: 5, Daze: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_(Vortex)_Revolver.webp"
  },
  {
    id: 5708,
    name: "Vórtice - Hacha", // Vortex Hatchet
    rank: "B",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "Recup. Energía", min: "16%", max: "40%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Corriente de Resaca",
      description: "Al convertirse en el personaje activo en combate, el Impacto del portador aumenta en un 9% por 10s. Este efecto puede activarse una vez cada 20s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Impacto: "9%" },
        { level: 2, Impacto: "10%" },
        { level: 3, Impacto: "11%" },
        { level: 4, Impacto: "12%" },
        { level: 5, Impacto: "13%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_(Vortex)_Hatchet.webp"
  },
  {
    id: 5709,
    name: "Vórtice - Flecha", // Vortex Arrow
    rank: "B",
    rol: "Aturdidor",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "4.8%", max: "12%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Tsunami",
      description: "Los ataques del portador infligen un 8% más de Aturdimiento a su objetivo principal.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Daze: "8%" },
        { level: 2, Daze: "9%" },
        { level: 3, Daze: "10%" },
        { level: 4, Daze: "11%" },
        { level: 5, Daze: "12%" }
      ]
    },
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
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "7.2%", max: "18%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Jinete Invencible",
      description: "El valor del Escudo proporcionado por el portador aumenta en un 30%. Cuando cualquier miembro del escuadrón activa (Interrupcion) o (Evasion Perfecta), el DAÑO de todos los miembros del escuadrón aumenta en un 18% y el Aturdimiento infligido aumenta en un 12% por 20s. Los efectos pasivos del mismo nombre no se acumulan..",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Escudo: "30%", Daño: "18%", Daze: "12%" },
        { level: 2, Escudo: "38%", Daño: "22.5%", Daze: "15%" },
        { level: 3, Escudo: "46%", Daño: "27%", Daze: "18%" },
        { level: 4, Escudo: "54%", Daño: "31.5%", Daze: "21%" },
        { level: 5, Escudo: "62%", Daño: "36%", Daze: "24%" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/W-Engine_Tusks_of_Fury.webp"
  },


  // --- RANGO A (Desde 5623 para evitar conflictos) ---
  {
    id: 5623,
    name: "Gran Cilindro", // Big Cylinder
    rank: "A",
    rol: "Defensa",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "DEF %", min: "16%", max: "40%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Trompo de Diez Toneladas",
      description: "Reduce el DAÑO recibido en un 7.5%. Tras ser atacado, el siguiente ataque que golpee a un enemigo activará un golpe crítico e infligirá un 600% de la DEF del portador como DAÑO adicional. Este efecto puede activarse una vez cada 7.5s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DañoReducido: "7.5%", GolpeCritico: "600%" },
        { level: 2, DañoReducido: "8.5%", GolpeCritico: "690%" },
        { level: 3, DañoReducido: "9.5%", GolpeCritico: "780%" },
        { level: 4, DañoReducido: "10.5%", GolpeCritico: "870%" },
        { level: 5, DañoReducido: "11.5%", GolpeCritico: "960%" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/W-Engine_Big_Cylinder.png" // Ojo: PNG
  },
  {
    id: 5624,
    name: "Transmorfo Original", // Original Transmorpher
    rank: "A",
    rol: "Defensa",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Patada Voladora del Caballero de la Luz Estelar",
      description: "Aumenta los PV Máx en un 8%. Al ser atacado, el Impacto del portador aumenta en un 10% por 12s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, HP: "8%", Impacto: "10%" },
        { level: 2, HP: "9%", Impacto: "11.5%" },
        { level: 3, HP: "10%", Impacto: "13%" },
        { level: 4, HP: "11%", Impacto: "14.5%" },
        { level: 5, HP: "12%", Impacto: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/W-Engine_Original_Transmorpher.png" // Ojo: PNG
  },
  {
    id: 5625,
    name: "Banda de Conejo", // Bunny Band
    rank: "A",
    rol: "Defensa",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "DEF %", min: "16%", max: "40%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Acaricia al Conejo",
      description: "Aumenta los PV Máx en un 8%. Aumenta el ATK del portador en un 10% cuando tiene un escudo.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, HP: "8%", ATK: "10%" },
        { level: 2, HP: "9.2%", ATK: "11.5%" },
        { level: 3, HP: "10.4%", ATK: "13%" },
        { level: 4, HP: "11.6%", ATK: "14.5%" },
        { level: 5, HP: "12.8%", ATK: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/W-Engine_Bunny_Band.webp"
  },
  {
    id: 5626,
    name: "Abrazo Primaveral", // Spring Embrace
    rank: "A",
    rol: "Defensa",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "12%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Sopa de Aguas Termales",
      description: "Reduce el DAÑO recibido en un 7.5%. Al ser atacado, la Tasa de Generación de Energía del portador aumenta en un 10% por 12s. Cuando el portador sale del campo, esta mejora se transfiere al nuevo personaje en el campo con su duración reiniciada. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DEF: "7.5%", Energia: "10%" },
        { level: 2, DEF: "8.5%", Energia: "11.5%" },
        { level: 3, DEF: "9.5%", Energia: "13%" },
        { level: 4, DEF: "10.5%", Energia: "14.5%" },
        { level: 5, DEF: "11.5%", Energia: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/W-Engine_Spring_Embrace.webp"
  },
  {
    id: 5627,
    name: "Proyector de Celuloide", // Reel Projector (Nuevo A)
    rank: "A",
    rol: "Defensa",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Impacto", min: "6%", max: "15%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Grabado Relámpago",
      description: "Cuando los PV de un miembro del escuadrón son superiores o iguales al 50%, recibe un 7.5% menos de DAÑO y un 10% menos de Contaminación de Miasma. Solo puede existir una instancia de este efecto en el mismo escuadrón.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DEF: "7.5%", Energia: "10%" },
        { level: 2, DEF: "8.6%", Energia: "11.5%" },
        { level: 3, DEF: "9.7%", Energia: "13%" },
        { level: 4, DEF: "10.8%", Energia: "14.5%" },
        { level: 5, DEF: "12%", Energia: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/W-Engine_Reel_Projector.webp"
  },
  {
    id: 5628,
    name: "Vasija del Temblor", // Tremor Trigram Vessel (Yixuan)
    rank: "A",
    rol: "Defensa",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "12%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Mapeo de Meridianos",
      description: "El DAÑO de la (Técnica Especial EX) y la (Definitiva) del portador aumenta en un 25%. Cada vez que cualquier miembro del escuadrón recibe DAÑO o recupera PV, el portador gana 2 de Energía. Este efecto puede activarse una vez cada 5s..",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Daño: "25%", Energia: "2" },
        { level: 2, Daño: "28.7%", Energia: "2.3" },
        { level: 3, Daño: "32.5%", Energia: "2.6" },
        { level: 4, Daño: "36.2%", Energia: "2.9" },
        { level: 5, Daño: "40%", Energia: "3.2" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/W-Engine_Tremor_Trigram_Vessel.webp"
  },
  {
    id: 5629,
    name: "Pacificador Especializado", // Peacekeeper - Specialized
    rank: "A",
    rol: "Defensa",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "12%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Técnica de Bloqueo Estándar",
      description: "Mientras tiene un Escudo, la Regeneración de Energía del portador aumenta en 0.4/s. La Acumulación de Anomalía de las (Técnicas Especiales EX) y los (Seguimientos de Asistencia) aumenta en un 36%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Energia: "0.4/s", Anomalía: "36%" },
        { level: 2, Energia: "0.46/s", Anomalía: "40%" },
        { level: 3, Energia: "0.52/s", Anomalía: "45%" },
        { level: 4, Energia: "0.58/s", Anomalía: "50%" },
        { level: 5, Energia: "0.64/s", Anomalía: "55%" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/W-Engine_Peacekeeper_-_Specialized.png" // Ojo: PNG
  },

  // --- RANGO B (Desde 5713 para evitar conflictos) ---
  {
    id: 5713,
    name: "Identidad - Base", // Identity Base
    rank: "B",
    rol: "Defensa",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "DEF %", min: "12.8%", max: "32%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Golpe de Hundimiento",
      description: "Al ser atacado, la DEF del portador aumenta en un 20% por 8s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DEF: "20%" },
        { level: 2, DEF: "23%" },
        { level: 3, DEF: "26%" },
        { level: 4, DEF: "29%" },
        { level: 5, DEF: "32%" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/W-Engine_(Identity)_Base.webp"
  },
  {
    id: 5714,
    name: "Identidad - Inflexión", // Identity Inflection
    rank: "B",
    rol: "Defensa",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "DEF %", min: "12.8%", max: "32%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Deslumbramiento",
      description: "Al ser atacado, reduce el DAÑO del atacante en un 6% por 12s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DEF: "6%" },
        { level: 2, DEF: "7%" },
        { level: 3, DEF: "8%" },
        { level: 4, DEF: "9%" },
        { level: 5, DEF: "10%" }
      ]
    },
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
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Caricia Sincera",
      description: "Cuando los PV del portador disminuyen, su Daño Hielo Puro aumenta en un 6%, acumulándose hasta 3 veces y durando 25s. La duración de cada acumulación se calcula por separado. Este efecto puede activarse una vez cada 0.5s. Cuando los PV del portador caen al 50% de los PV Máx o menos, la Probabilidad de CRIT aumenta en un 20%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DañoHieloPuro: "6%", ProbabilidadCrit: "20%" },
        { level: 2, DañoHieloPuro: "7%", ProbabilidadCrit: "23%" },
        { level: 3, DañoHieloPuro: "8%", ProbabilidadCrit: "26%" },
        { level: 4, DañoHieloPuro: "9%", ProbabilidadCrit: "29%" },
        { level: 5, DañoHieloPuro: "10%", ProbabilidadCrit: "32%" }
      ]
    },
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Kraken's_Cradle.webp"
  },
  {
    id: 5531,
    name: "Jaula Qingming", // Qingming Birdcage
    rank: "S",
    rol: "Ruptura",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Flujo de Nubes",
      description: "La Probabilidad de CRIT aumenta en un 20%. Cuando el portador lanza una (Técnica Especial EX), el personaje gana el efecto (Compañero Qingming), acumulándose hasta 2 veces y durando 15s. Al entrar en combate, gana inmediatamente 2 acumulaciones. Las activaciones repetidas reinician la duración. Cada acumulación del efecto (Compañero Qingming) aumenta el Daño Etéreo del portador en un 8%, y aumenta el Daño Etéreo Puro de la (Definitiva) y (Técnica Especial EX) en un 10%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, TasaCrit: "20%", DañoEtéreo: "8%", DañoPuro: "10%" },
        { level: 2, TasaCrit: "23%", DañoEtéreo: "9.2%", DañoPuro: "11.5%" },
        { level: 3, TasaCrit: "26%", DañoEtéreo: "10.4%", DañoPuro: "13%" },
        { level: 4, TasaCrit: "29%", DañoEtéreo: "11.6%", DañoPuro: "14.5%" },
        { level: 5, TasaCrit: "32%", DañoEtéreo: "12.8%", DañoPuro: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Qingming_Birdcage.webp"
  },
  // --- RANGO A (Desde 5628 para evitar conflictos) ---

  {
    id: 5630,
    name: "Ignición Fatua", // Grill O'Wisp
    rank: "A",
    rol: "Ruptura",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Fuego Enjaulado",
      description: "El Daño Fuego del portador aumenta en un 15%. Cuando los PV del portador disminuyen, su Probabilidad de CRIT aumenta en un 15% por 5s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, TasaCrit: "15%", DañoFuego: "15%" },
        { level: 2, TasaCrit: "17.25%", DañoFuego: "17.25%" },
        { level: 3, TasaCrit: "19.5%", DañoFuego: "19.5%" },
        { level: 4, TasaCrit: "21.75%", DañoFuego: "21.75%" },
        { level: 5, TasaCrit: "24%", DañoFuego: "24%" }
      ]
    },
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Grill_O'Wisp.webp"
  },
  {
    id: 5631,
    name: "Esfera Rompecabezas", // Puzzle Sphere
    rank: "A",
    rol: "Ruptura",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Artesanía Ingeniosa",
      description: "Al lanzar una (Técnica Especial EX), el Daño CRIT del portador aumenta en un 16% por 12s. Además, si los PV actuales del objetivo son inferiores al 50% de sus PV Máx, el Daño de la (Técnica Especial EX) aumenta en un 20%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DañoCrit: "16%", Daño: "20%" },
        { level: 2, DañoCrit: "18.4%", Daño: "23%" },
        { level: 3, DañoCrit: "20.8%", Daño: "26%" },
        { level: 4, DañoCrit: "23.2%", Daño: "29%" },
        { level: 5, DañoCrit: "25.6%", Daño: "32%" }
      ]
    },
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Puzzle_Sphere.webp"
  },
  {
    id: 5632,
    name: "Tránsito Herciano", // Radiowave Journey
    rank: "A",
    rol: "Ruptura",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Zancadas Ligeras",
      description: "Al lanzar un (Ataque en Cadena) o (Definitiva), el portador gana 1 acumulación de un efecto de mejora. Cada acumulación aumenta la Fuerza Pura del portador en 80, acumulándose hasta 3 veces, y durando 12s. La duración de cada acumulación se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, FuerzaPura: "80" },
        { level: 2, FuerzaPura: "92" },
        { level: 3, FuerzaPura: "104" },
        { level: 4, FuerzaPura: "116" },
        { level: 5, FuerzaPura: "128" }
      ]
    },
    image: "/CodiceZero/Armas/Ruptura/W-Engine_Radiowave_Journey.webp"
  },

  // --- RANGO B (Desde 5715) ---
  {
    id: 5715,
    name: "Ceniza - Cobalto", // [Cinder] Cobalt
    rank: "B",
    rol: "Ruptura",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "8%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Llama Tenue",
      description: "Al convertirse en el personaje activo en combate, el ATK del portador aumenta en un 7.2% por 10s. Este efecto puede activarse una vez cada 20s.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "7.2%" },
        { level: 2, ATK: "8.2%" },
        { level: 3, ATK: "9.3%" },
        { level: 4, ATK: "10.4%" },
        { level: 5, ATK: "11.5%" }
      ]
    },
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
    detailStats: {
      baseAtk: { min: 46, max: 684 },     // Nvl 1 -> 60
      subStat: { name: "Tasa de Perforación", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Castigo",
      description: "Mientras está fuera del campo, la Regeneración de Energía del portador aumenta en 0.6/s. Los ataques del portador aumentan el DAÑO de todas las unidades contra un objetivo golpeado en un 10% por 3s. Durante este periodo, este efecto aumenta adicionalmente en un 1.7% cada 0.5s, hasta un aumento adicional máximo del 10.2%. Las activaciones repetidas solo reinician la duración sin reiniciar el efecto de aumento de DAÑO. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Energia: "0.6/s", Daño: "10%", Adicional: "1.7%", Maximo: "10.2%" },
        { level: 2, Energia: "0.75/s", Daño: "12.5%", Adicional: "2%", Maximo: "12%" },
        { level: 3, Energia: "0.9/s", Daño: "15%", Adicional: "2.5%", Maximo: "15%" },
        { level: 4, Energia: "1.05/s", Daño: "17.5%", Adicional: "3%", Maximo: "18%" },
        { level: 5, Energia: "1.2/s", Daño: "20%", Adicional: "3.3%", Maximo: "19.8%" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_Weeping_Cradle.webp"
  },
  {
    id: 5533,
    name: "Hogar de Ensueño", // Dreamlit Hearth (Lucia)
    rank: "S",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "DEF %", min: "16%", max: "40%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Épica de la Marea Lunar",
      description: "La Regeneración de Energía del portador aumenta en 0.4/s. Cuando el portador activa un (Velo Etereo) o extiende su duración, todos los miembros del escuadrón ganan un 25% de DAÑO aumentado y un 15% de PV Máx aumentados por 45s. Las activaciones repetidas reinician la duración. Solo puede existir una instancia de este efecto en el mismo escuadrón.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Energia: "0.4/s", Daño: "25%", PVMax: "15%" },
        { level: 2, Energia: "0.46/s", Daño: "28.8%", PVMax: "17.3%" },
        { level: 3, Energia: "0.52/s", Daño: "32.5%", PVMax: "19.5%" },
        { level: 4, Energia: "0.58/s", Daño: "36.3%", PVMax: "21.8%" },
        { level: 5, Energia: "0.64/s", Daño: "40%", PVMax: "24%" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_Dreamlit_Hearth.webp"
  },
  {
    id: 5534,
    name: "Vanidad Elegante", // Elegant Vanity
    rank: "S",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Belleza Indescriptible",
      description: "Cuando cualquier miembro del escuadrón entra al campo a través de una (Asistencia Rápida), (Ataque en Cadena), (Asistencia Defensiva) o (Asistencia Evasiva), el portador gana 5 de Energía. Este efecto puede activarse una vez cada 5s. Cuando el portador consume 25 o más de Energía, el DAÑO infligido por todos los miembros del escuadrón aumenta en un 10%, acumulándose hasta 2 veces y durando 20s. Las activaciones repetidas reinician la duración. Solo puede existir una instancia de este efecto en el mismo escuadrón.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Energia: "5", Daño: "10%" },
        { level: 2, Energia: "5.5", Daño: "11.5%" },
        { level: 3, Energia: "6", Daño: "13%" },
        { level: 4, Energia: "6.5", Daño: "14.5%" },
        { level: 5, Energia: "7", Daño: "16%" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_Elegant_Vanity.webp"
  },
  {
    id: 5535,
    name: "Metanukimorfosis", // Metanukimorphosis
    rank: "S",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Recuperación de Energía", min: "24%", max: "60%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Exquisitamente Ingenioso",
      description: "Cuando la (Técnica Especial EX) o (Definitiva) del portador inflige Daño Físico, su Tasa de Anomalía aumenta en 30 por 40s. Cuando la (Réplica) del portador golpea a un enemigo, la Maestría de Anomalía de todos los miembros del escuadrón aumenta en 60 por 40s. Solo puede existir una instancia de este efecto en el mismo escuadrón.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Tasa: "30", Maestría: "60" },
        { level: 2, Tasa: "34", Maestría: "69" },
        { level: 3, Tasa: "39", Maestría: "78" },
        { level: 4, Tasa: "43", Maestría: "87" },
        { level: 5, Tasa: "48", Maestría: "96" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_Metanukimorphosis.webp"
  },

  // --- RANGO A (Desde 5633) ---
  {
    id: 5633,
    name: "Bola de Juego", // Unfettered Game Ball
    rank: "A",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Recuperación de Energía", min: "20%", max: "50%" } // Nvl 1 -> 60
    },
    effect: {
      title: "¡Empieza el Juego!",
      description: "Siempre que el ataque del portador active un efecto de (Contraataque de Atributo), la Probabilidad de CRIT de todas las unidades contra el enemigo golpeado aumenta en un 12% por 12s. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Crítico: "12%" },
        { level: 2, Crítico: "13.5%" },
        { level: 3, Crítico: "15.5%" },
        { level: 4, Crítico: "17.5%" },
        { level: 5, Crítico: "20%" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_Unfettered_Game_Ball.webp"
  },
  {
    id: 5634,
    name: "La Bóveda", // The Vault (Nicole)
    rank: "A",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "Recuperación de Energía", min: "20%", max: "50%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Amante del Dinero",
      description: "Infligir Daño Etéreo usando una (Técnica Especial EX), (Ataque en Cadena) o (Definitiva) aumenta el DAÑO de todas las unidades contra el objetivo en un 15% y aumenta la Recuperación de Energía del portador en 0.5/s por 2s. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Energia: "0.5/s", Daño: "15%" },
        { level: 2, Energia: "0.58/s", Daño: "17.5%" },
        { level: 3, Energia: "0.65/s", Daño: "20%" },
        { level: 4, Energia: "0.72/s", Daño: "22%" },
        { level: 5, Energia: "0.8/s", Daño: "24%" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_The_Vault.webp"
  },
  {
    id: 5635,
    name: "Kaboom el Cañón", // Kaboom the Cannon
    rank: "A",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "Recuperación de Energía", min: "20%", max: "50%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Accidente de Estampida",
      description: "Cuando cualquier unidad aliada en el escuadrón ataca y golpea a un enemigo, el ATK de todas las unidades aliadas aumenta en un 2.5% por 8s, acumulándose hasta 4 veces. La duración de cada acumulación se calcula por separado, y cada unidad aliada puede proporcionar 1 acumulación de la mejora. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "2.5%" },
        { level: 2, ATK: "2.8%" },
        { level: 3, ATK: "3.2%" },
        { level: 4, ATK: "3.6%" },
        { level: 5, ATK: "4%" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_Kaboom_the_Cannon.webp"
  },
  {
    id: 5636,
    name: "Rebanada de Tiempo", // Slice of Time
    rank: "A",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 40, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "Tasa de Perforación", min: "8%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "¡Di patata!",
      description: "El (Contraataque de Evasión), (Técnica Especial EX), (Ataque de Asistencia) o (Ataque en Cadena) de cualquier miembro del escuadrón genera respectivamente 20/25/30/35 más de Decibelios y genera 0.7 de Energía para el portador. Este efecto puede activarse una vez cada 12s. El tiempo de espera para cada tipo de ataque es independiente de los otros. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Decibelios1: "20", Decibelios2: "25", Decibelios3: "30", Decibelios4: "35", Energia: "0.7" },
        { level: 2, Decibelios1: "23", Decibelios2: "28.5", Decibelios3: "34.5", Decibelios4: "40.5", Energia: "0.8" },
        { level: 3, Decibelios1: "26", Decibelios2: "32", Decibelios3: "39", Decibelios4: "45", Energia: "0.9" },
        { level: 4, Decibelios1: "29", Decibelios2: "35.5", Decibelios3: "43.5", Decibelios4: "50", Energia: "1" },
        { level: 5, Decibelios1: "32", Decibelios2: "40", Decibelios3: "48", Decibelios4: "55", Energia: "1.1" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_Slice_of_Time.webp"
  },
  {
    id: 5637,
    name: "Demonio Tímido", // Bashful Demon (Soukaku)
    rank: "A",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 42, max: 624 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "10%", max: "25%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Rostro de Avaricia",
      description: "Aumenta el Daño Hielo en un 15%. Al lanzar una (Técnica Especial EX), el ATK de todos los miembros del escuadrón aumenta en un 2% por 12s, acumulándose hasta 4 veces. Las activaciones repetidas reinician la duración. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DañoHielo: "15%", ATK: "2%" },
        { level: 2, DañoHielo: "17.5%", ATK: "2.3%" },
        { level: 3, DañoHielo: "20%", ATK: "2.6%" },
        { level: 4, DañoHielo: "22%", ATK: "2.9%" },
        { level: 5, DañoHielo: "24%", ATK: "3.2%" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_Bashful_Demon.webp"
  },


  // --- RANGO B (Desde 5716) ---
  {
    id: 5716,
    name: "Reverberación - Modelo I", // Reverb Mark I
    rank: "B",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "ATK %", min: "8%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Mareas Cambiantes",
      description: "Lanzar una (Técnica Especial EX) aumenta el Impacto de todos los miembros del escuadrón en un 8% por 10s. Este efecto puede activarse una vez cada 20s. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Impacto: "8%" },
        { level: 2, Impacto: "9%" },
        { level: 3, Impacto: "10%" },
        { level: 4, Impacto: "11%" },
        { level: 5, Impacto: "12%" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_(Reverb)_Mark_I.webp"
  },
  {
    id: 5717,
    name: "Reverberación - Modelo II", // Reverb Mark II
    rank: "B",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "Recuperación de Energía", min: "16%", max: "40%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Olas Rugientes",
      description: "Al lanzar una (Técnica Especial EX) o un (Ataque en Cadena), la Tasa de Anomalía y la Maestría de Anomalía de todos los miembros del escuadrón aumentan en 10 por 10s. Este efecto puede activarse una vez cada 20s. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Anomalia: "10" },
        { level: 2, Anomalia: "12" },
        { level: 3, Anomalia: "13" },
        { level: 4, Anomalia: "15" },
        { level: 5, Anomalia: "16" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_(Reverb)_Mark_II.webp"
  },
  {
    id: 5718,
    name: "Reverberación - Modelo III", // Reverb Mark III
    rank: "B",
    rol: "Soporte",
    detailStats: {
      baseAtk: { min: 32, max: 475 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "8%", max: "20%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Sonido Atronador",
      description: "Lanzar un (Ataque en Cadena) o (Definitiva) aumenta el ATK de todos los miembros del escuadrón en un 8% por 10s. Este efecto puede activarse una vez cada 20s. Los efectos pasivos del mismo nombre no se acumulan.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ATK: "8%" },
        { level: 2, ATK: "9%" },
        { level: 3, ATK: "10%" },
        { level: 4, ATK: "11%" },
        { level: 5, ATK: "12%" }
      ]
    },
    image: "/CodiceZero/Armas/Soporte/W-Engine_(Reverb)_Mark_III.webp"
  },



  {
    id: 5536, //arma Dialyn
    name: "Yesterday Calls",
    rank: "S",
    rol: "Aturdidor",
    // Info para la Tarjeta (Vista rápida)
    stats: { main: "Ataque", value: "713" },

    // Info para el Detalle (Vista completa)
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "Porb. Critica", min: "9.6%", max: "24%" } // Nvl 1 -> 60
    },
    effect: {
      title: "24/7",
      description: "Mientras está fuera del campo, la Regeneración de Energía del portador aumenta en 1.5/s. Cuando el portador inflige Daño Fisico con una (Tecnica Especial EX), el Aturdimiento infligido por los ataques del portador aumenta en un 9% por 10s, acumulándose hasta 3 veces. Con 3 acumulaciones, todos los miembros del escuadrón ganan un 30% de Daño CRIT adicional por 40s. Las activaciones repetidas reinician la duración. Solo puede existir una instancia de este efecto de aumento de Daño CRIT en el mismo escuadrón.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, RegenEnergia: "1.5/s", Daze: "9%", DañoCrit: "30%" },
        { level: 2, RegenEnergia: "1.7/s", Daze: "10.3%", DañoCrit: "34.5%" },
        { level: 3, RegenEnergia: "1.9/s", Daze: "11.7%", DañoCrit: "39%" },
        { level: 4, RegenEnergia: "2.1/s", Daze: "13%", DañoCrit: "43.5%" },
        { level: 5, RegenEnergia: "2.3/s", Daze: "14.5%", DañoCrit: "48%" }
      ]
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Yesterday_Calls.webp"
  },
  {
    id: 5537, //arma Banyue
    name: "Wrathful Vajra",
    rank: "S",
    rol: "Ruptura",
    // Info para la Tarjeta (Vista rápida)
    stats: { main: "Ataque", value: "713" },

    // Info para el Detalle (Vista completa)
    detailStats: {
      baseAtk: { min: 55, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Fuego Kármico Purificador",
      description: "La Probabilidad de CRIT aumenta en un 20%. Cuando el portador lanza una (Técnica Especial EX), su Daño Fuego Puro aumenta en un 9%, acumulándose hasta 2 veces y durando 20s. La duración de cada acumulación se calcula por separado.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, ProbCrit: "20%", DañoFuegoPuro: "9%" },
        { level: 2, ProbCrit: "23%", DañoFuegoPuro: "10.35%" },
        { level: 3, ProbCrit: "26%", DañoFuegoPuro: "11.7%" },
        { level: 4, ProbCrit: "29%", DañoFuegoPuro: "13.05%" },
        { level: 5, ProbCrit: "32%", DañoFuegoPuro: "14.4%" }
      ]
    },
    image: "/CodiceZero/Armas/Ruptura/Weapon_S_1471.webp"
  },
  {
    id: 5538, //arma Zhao
    name: "Hal-Sugar Hail",
    rank: "S",
    rol: "Defensa",
    // Info para la Tarjeta (Vista rápida)
    stats: { main: "Ataque", value: "713" },

    // Info para el Detalle (Vista completa)
    detailStats: {
      baseAtk: { min: 48, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Dulzura Frágil",
      description: "La Regeneración de Energía del portador aumenta en 0.46/s. Todos los miembros del escuadrón ganan un 10% de ATK y un 10% de PV Máx. Solo puede existir una instancia de este efecto en el mismo escuadrón. Cuando el portador activa o extiende un (Velo Etereo), todo el escuadrón gana un 30% de Daño CRIT por 60s. Las activaciones repetidas reinician la duración.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Energia: "0.46/s", ATK: "10%", PVMax: "10%", DañoCrit: "30%" },
        { level: 2, Energia: "0.53/s", ATK: "11.5%", PVMax: "11.5%", DañoCrit: "34.5%" },
        { level: 3, Energia: "0.60/s", ATK: "13%", PVMax: "13%", DañoCrit: "39%" },
        { level: 4, Energia: "0.67/s", ATK: "14.5%", PVMax: "14.5%", DañoCrit: "43.5%" },
        { level: 5, Energia: "0.74/s", ATK: "16%", PVMax: "16%", DañoCrit: "48%" }
      ]
    },
    image: "/CodiceZero/Armas/Defensa/Weapon_S_1341Big.png"
  },
  {
    id: 5539, //arma Ye Shunguang
    name: "Resplandor Partenubes",
    rank: "S",
    rol: "Ataque",

    // Info para el Detalle (Vista completa)
    detailStats: {
      baseAtk: { min: 50, max: 743 },     // Nvl 1 -> 60
      subStat: { name: "Daño Critico", min: "19.2%", max: "48%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Alma de Jade, Corazón Congelado",
      description: "El DAÑO del portador ignora el 20% de la Res Fisico del objetivo. Cuando el portador activa un (Velo Etereo), el DAÑO del portador aumenta en un 25% y el Daño CRIT aumenta en un 25% por 40s. Las activaciones repetidas reinician la duración.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, DañoIgnored: "20%", Daño: "25%", DañoCritico: "25%" },
        { level: 2, DañoIgnored: "22%", Daño: "28.7%", DañoCritico: "28.7%" },
        { level: 3, DañoIgnored: "24%", Daño: "32.5%", DañoCritico: "32.5%" },
        { level: 4, DañoIgnored: "26%", Daño: "36.2%", DañoCritico: "36.2%" },
        { level: 5, DañoIgnored: "28%", Daño: "40%", DañoCritico: "40%" }
      ]
    },
    image: "/CodiceZero/Armas/Ataque/W-Engine_Cloudcleave_Radiance.webp"
  },

  {
    id: 5638,
    name: "Caldero de la claridad",
    rank: "A",
    rol: "Ruptura",

    detailStats: {
      baseAtk: { min: 42, max: 594 },     // Nvl 1 -> 60
      subStat: { name: "HP %", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    effect: {
      title: "Arcano de Invocación",
      description: "Cuando el portador activa una (Técnica Especial EX), gana 1 acumulación de un efecto de mejora. Cada acumulación aumenta el DAÑO del portador en un 4%, hasta 3 acumulaciones, y dura 20s. Este efecto puede activarse una vez cada 0.5s, y las activaciones repetidas reinician la duración. Con 3 acumulaciones, la Probabilidad de CRIT del portador aumenta en un 6.5%.",
      refinements: [ // Tabla de Mejora (R1 - R5)
        { level: 1, Daño: "4%", ProbCrit: "6.5%" },
        { level: 2, Daño: "4.6%", ProbCrit: "7.5%" },
        { level: 3, Daño: "5.2%", ProbCrit: "8.5%" },
        { level: 4, Daño: "5.8%", ProbCrit: "9.4%" },
        { level: 5, Daño: "6.4%", ProbCrit: "10.4%" }
      ]
    },
    image: "/CodiceZero/Armas/Ruptura/Weapon_A_Common_19.webp"
  }

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