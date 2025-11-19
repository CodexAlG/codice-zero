export const agentDetails = {
  1: {
    baseStats: {
      hp: 617,
      atk: 135,
      def: 49,
      impact: 93,         // Nuevo: Impacto Base
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "94",  // Tasa de Anomalía (Base fija)
      anomalyMastery: "93", // Maestría de Anomalía (Base fija)
      penRatio: "0%",     // Tasa de Perforación
      energyRegen: "1.2", // Recuperación de Energía
    },
    // NUEVA PROPIEDAD PARA EL CÁLCULO
    coreStats: {
      statName: "Core Crit Rate", // Nombre del stat especial
      valuePerNode: 4.8,          // Cuánto sube en A, C y E (4.8%)
    },
    materials: {
      promotion: ["Certificación de Atacante", "Sello de Hielo"],
      skill: ["Chip de Congelación", "Hamster Cage Pass"],
      boss: "Notorious Hunt: Unknown Corruption"
    },
    build: {
      weapons: [
        { name: "Deep Sea Visitor", rank: "S", type: "Mejor Opción", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Cannon Rotor", rank: "A", type: "Alternativa BP", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Street Superstar", rank: "A", type: "F2P", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" }
      ],
      discs: {
        set4: { name: "Polar Metal", desc: "Aumenta Daño Hielo y Atq. Normal" },
        set2: { name: "Puffer Electro", desc: "PEN Ratio +8%" }
      },
      mainStats: {
        iv: "Prob. Crítica / Daño Crítico",
        v: "Daño Hielo",
        vi: "ATK %"
      },
      subStats: ["Crítico", "PEN", "ATK %", "Anomalía"]
    },
    teams: [
      {
        title: "Equipo Mono-Hielo (Premium)",
        members: ["Ellen", "Lycaon", "Astra"],
        bangboo: "Butler"
      },
      {
        title: "Equipo F2P",
        members: ["Ellen", "Anby", "Soukaku"],
        bangboo: "Penguin"
      }
    ]
  },
  10: { // Jane Doe
    baseStats: {
      hp: 626,
      atk: 127,
      def: 49,
      impact: 86,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "112",   // Tasa muy alta base
      anomalyMastery: "114", // Maestría base alta
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Core Tasa de Anomalía",
      valuePerNode: 12, // (A, C, E dan 9 puntos planos. Total 27)
    },
    materials: {
      promotion: ["Sello de Anomalía Básico", "Sello de Anomalía Avanzado"],
      skill: ["Chip Físico", "Hamster Cage Pass"],
      boss: "Garra Feroz (Disputa Notoria)",
      expert: "Corte Mortal (Leñador)"
    },
    build: {
      weapons: [
        { name: "Aguijón Afilado", rank: "S", type: "BiS (Daño Asalto)", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Geminis Llorones", rank: "A", type: "Alternativa F2P", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Gourmet de la Selva", rank: "A", type: "Opción Craft", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" }
      ],
      discs: {
        set4: { name: "Metal Colmillo", desc: "Daño Físico + Daño tras Asalto" }, // Fanged Metal
        set2: { name: "Blues de la Libertad", desc: "Maestría Anomalía +30" } // Freedom Blues
      },
      mainStats: {
        iv: "Maestría de Anomalía", // Vital para su daño
        v: "Daño Físico",
        vi: "Maestría de Anomalía / ATK %"
      },
      subStats: ["Maestría Anomalía", "ATK %", "PEN", "Crítico (Opcional)"]
    },
    teams: [
      {
        title: "Equipo Anomalía (Disorder)",
        members: ["Jane Doe", "Seth", "Grace"], // Seth le da escudo y maestría
        bangboo: "Officer Cui"
      },
      {
        title: "Equipo N.E.P.S.",
        members: ["Jane Doe", "Seth", "Qingyi"], // Sinergia de facción
        bangboo: "Resonaboo"
      }
    ]
  },
  32: { // Vivian Banshee
    baseStats: {
      hp: 617,
      atk: 127,
      def: 49,
      impact: 86,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "108",    // Anomaly Proficiency Base
      anomalyMastery: "118", // Anomaly Mastery Base
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Core Tasa Anomalía",
      valuePerNode: 12, // Usando 9 como valor plano genérico para Nodos de Anomalía (AP)
    },
    materials: {
      promotion: ["Sello de Certificación de Anomalía Básico", "Sello de Certificación de Anomalía Avanzado", "Sello de Certificación de Controlador"],
      skill: ["Chip Etéreo Básico", "Hamster Cage Pass"],
      boss: "Refinamiento del Sicofante (Disputa Notoria)",
      expert: "Datos Dimensionales Superiores: Dragón Atronador (Desafío Experto)"
    },
    build: {
      weapons: [
        { name: "Capricho del Vuelo (Flight of Fancy)", rank: "S", type: "BiS (AP y Éter)", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Llorones Géminis", rank: "A", type: "Alternativa F2P (Maestría)", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Brillo de Labios Electro", rank: "A", type: "Opción ATK %", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" }
      ],
      discs: {
        set4: { name: "Fantasma (Phantom)", desc: "Daño Etéreo + Velocidad de Impacto" }, // Set de 4pc Daño Etéreo
        set2: { name: "Blues de la Libertad", desc: "Maestría Anomalía +30" } // Set de 2pc Maestría de Anomalía
      },
      mainStats: {
        iv: "Maestría de Anomalía", // Anomaly Proficiency
        v: "Daño Etéreo",
        vi: "Maestría de Anomalía / ATK %"
      },
      subStats: ["Maestría Anomalía", "ATK %", "PEN", "CRIT"]
    },
    teams: [
      {
        title: "Equipo Ether Abloom (Burst)",
        members: ["Vivian Banshee", "Seth", "Grace"],
        bangboo: "Officer Cui"
      },
      {
        title: "Equipo Mixto (Sinergia de Facción)",
        members: ["Vivian Banshee", "Seth", "Jane Doe"], // Jane Doe para sinergia de daño de Anomalía
        bangboo: "Resonaboo"
      }
    ]
  },
  40: { // Orphie & Magus
    baseStats: {
      hp: 626,        // Valor real Wiki
      atk: 134,       // Valor real Wiki
      def: 49,
      impact: 93,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "92",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Core Recup. Energía", // Nombre exacto para que el stat row lo detecte
      valuePerNode: 0.12, // (Estimado: A, C, E dan energía plana. Total ~0.36)
    },
    materials: {
      promotion: ["Sello de Ataque Básico", "Sello de Ataque Avanzado"],
      skill: ["Chip de Quemadura", "Hamster Cage Pass"],
      boss: "Motor Escarlata (Pompey)", // Jefe Semanal: Notorious Hunt
      expert: "Élitros Miasmáticos" // Expert Challenge
    },
    build: {
      weapons: [
        { name: "Llama Belicosa", rank: "S", type: "BiS (Daño Off-field)", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Electro-Lip Gloss", rank: "A", type: "Anomalía/ATK", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Rotor de Cañón", rank: "A", type: "Opción Crítica", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" }
      ],
      discs: {
        set4: { name: "Armonía de Sombras", desc: "Asistencia + Daño Réplica" }, // Vital para Magus
        set2: { name: "Jazz Swing", desc: "Recup. Energía +20%" }
      },
      mainStats: {
        iv: "Prob. Crítica / Daño Crítico",
        v: "Daño Fuego",
        vi: "Recup. Energía / ATK %"
      },
      subStats: ["Crítico", "Recup. Energía", "ATK %", "PEN"]
    },
    teams: [
      {
        title: "Trinidad de Fuego (Burn)",
        members: ["Orphie & Magus", "Soldier 11", "Caesar"],
        bangboo: "Resonaboo"
      },
      {
        title: "Sinergia Obol",
        members: ["Orphie & Magus", "Soldier 11", "Lucy"],
        bangboo: "Red Moccus"
      }
    ]
  },
  39: { // Seed
    baseStats: {
      hp: 617,
      atk: 134,
      def: 49,
      impact: 93,
      crit: "5%",
      critDmg: "50%", // Base
      anomalyRate: "94",
      anomalyMastery: "93",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Core Crit Dmg", // Vital para su build
      valuePerNode: 9.6, // (A, C, E dan 9.6% cada uno)
    },
    materials: {
      promotion: ["Sello de Ataque", "Sello de Pionero"],
      skill: ["Chip de Choque", "Hamster Cage Pass"],
      boss: "Exuvia de Refinamiento (Sacerdote)", // Nuevo Weekly Boss
      expert: "Corte Mortal (Leñador)" // Expert Challenge
    },
    build: {
      weapons: [
        { name: "Cordis Germina", rank: "S", type: "BiS (Daño Eléctrico)", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Inocencia Cortada", rank: "S", type: "Alternativa Crítica", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Rotor de Cañón", rank: "A", type: "Opción BP", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" }
      ],
      discs: {
        set4: { name: "Flor del Alba", desc: "Buff Ataque Básico + Burst" }, // Set nuevo 2.2 (Dawn's Bloom)
        set2: { name: "Pájaro Carpintero", desc: "Prob. Crítica +8%" }
      },
      mainStats: {
        iv: "Daño Crítico / Prob. Crítica",
        v: "Daño Eléctrico",
        vi: "ATK %"
      },
      subStats: ["Daño Crítico", "Prob. Crítica", "ATK %", "PEN"]
    },
    teams: [
      {
        title: "Obol Squad Elite",
        members: ["Seed", "Trigger", "Soldier 11"], // Sinergia de Facción
        bangboo: "Electrboo"
      },
      {
        title: "Sobrecarga F2P",
        members: ["Seed", "Anby", "Nicole"], // Equipo estándar accesible
        bangboo: "Plugboo"
      }
    ]
  }
};
