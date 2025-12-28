

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
      subStat: { name: "hp", min: "12%", max: "30%" } // Nvl 1 -> 60
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
    leak: "Beta",
    // Info para el Detalle (Vista completa)
    detailStats: {
      baseAtk: { min: 55, max: 713 },     // Nvl 1 -> 60
      subStat: { name: "hp", min: "12%", max: "30%" } // Nvl 1 -> 60
    },
    image: "/CodiceZero/Armas/Defensa/Weapon_S_1341Big.png"
  },
  {
    id: 5539, //arma Ye Shunguang
    name: "Lone Light in the Clouds",
    rank: "S",
    rol: "Ataque",
    // Info para la Tarjeta (Vista rápida)
    stats: { main: "Ataque", value: "743" },
    leak: "Beta",
    // Info para el Detalle (Vista completa)
    detailStats: {
      baseAtk: { min: 50, max: 743 },     // Nvl 1 -> 60
      subStat: { name: "Crit Dmg", min: "19.2%", max: "48%" } // Nvl 1 -> 60
    },
    image: "/CodiceZero/Armas/Aturdidor/W-Engine_Yesterday_Calls.webp"
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