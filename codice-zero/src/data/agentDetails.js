export const agentDetails = {
  1: { // Ellen Joe
    baseStats: {
      hp: 617,        // Valor exacto de la imagen
      atk: 135,       // Valor exacto de la imagen
      def: 49,        // Valor exacto de la imagen
      impact: 93,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "94",   // Valor exacto (Mastery)
      anomalyMastery: "93", // Valor exacto (Proficiency)
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Core Crit Rate",
      valuePerNode: 4.8, // (A, C, E otorgan 4.8% cada uno = 14.4% Total)
    },
    materials: {
      promotion: ["Sello de Ataque", "Sello de Hielo"],
      skill: ["Chip de Congelación", "Hamster Cage Pass"],
      boss: "Visitante de las Profundidades",
      expert: "Desafío Experto"
    },
    build: {
      weapons: [
        { name: "Visitante de las Profundidades", rank: "S", type: "BiS (Prob. Crítica + Daño Hielo)", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Cañón de Rotor", rank: "A", type: "Pase de Batalla", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Estrella de la Calle", rank: "A", type: "F2P", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" }
      ],
      discs: {
        set4: { name: "Metal Polar", desc: "Daño Hielo +10%. Aumenta daño de Básico y Dash un 20%." },
        set2: { name: "Pájaro Carpintero", desc: "Prob. Crítica +8%" }
      },
      mainStats: {
        iv: "Daño Crítico / Prob. Crítica",
        v: "Daño Hielo",
        vi: "ATK %"
      },
      subStats: ["Prob. Crítica", "Daño Crítico", "ATK %", "PEN"]
    },
    skills: [
      {
        type: "Ataque Básico",
        name: "Recorte de Dientes de Sierra",
        description: "Desata hasta 3 ataques, inflingiendo Daño físico. Presione repetidamente o mantenga presionado  Durante el tercer ataque para extender la duración de la habilidad.",
        tags: ["Físico", "Combo"],
        attributes: [{ label: "Daño 1er Golpe (Nv 12)", values: ["54.4%"] }] // Placeholder
      },
      {
        type: "Mecánica Única",
        name: "Congelación Relámpago (Flash Freeze)",
        description: "Cuando Ellen tiene Cargas de Flash Freeze, sus Ataques Básicos y de Dash consumen 1 carga para infligir Daño Hielo masivo. Puede tener hasta 6 cargas.",
        tags: ["Hielo", "Buff"]
      },
      {
        type: "Ataque Básico (Potenciado)",
        name: "Recorte de Congelación / Ola Glacial",
        description: "Con Flash Freeze activo:\n• Recorte: Lanza 3 ataques de Hielo (consume 1 carga cada uno).\n• Ola Glacial: Tras el 3er golpe, pulsa (Ataque) para lanzar una ola de hielo (consume 2 cargas).",
        tags: ["Daño Hielo", "Consumo Cargas"]
      },
      {
        type: "Evasión / Dash",
        name: "Vórtice / Caza Errante (Roaming)",
        description: "Mantén o doble-pulsa (Evasión) para entrar en estado 'Roaming' (carrera rápida).\n\n• Emboscada Ártica: Durante Roaming, pulsa (Ataque) para un golpe giratorio. Si cargas el ataque (tijeretazo), ganas 3 cargas de Flash Freeze.",
        tags: ["Movilidad", "Genera Cargas"]
      },
      {
        type: "Técnica Especial",
        name: "Deriva / Coleatazo (Tail Swipe)",
        description: "Especial: Barrido de cola rápido (Daño Hielo).\nEspecial EX: Golpea con la cola (Daño Hielo Masivo). Otorga 1 carga de Flash Freeze. Invulnerable durante el uso.",
        tags: ["Hielo", "Invulnerable", "Genera Cargas"]
      },
      {
        type: "Técnica Definitiva",
        name: "Invierno Eterno",
        description: "Cae desde arriba y desata una tormenta de hielo seguida de un tijeretazo masivo.\nOtorga 3 cargas de Flash Freeze y aumenta el Daño Hielo un 30% por 12s.",
        tags: ["Ultimate", "Burst", "Buff"]
      },
      {
        type: "Pasiva Central",
        name: "Dientes Afilados",
        description: "Cuando Ellen lanza el tijeretazo cargado (Emboscada Ártica) o consume una carga de Flash Freeze, el Daño Crítico de esa habilidad aumenta un 100%.",
        tags: ["Daño Crítico", "Pasiva"]
      }
    ],
    mindscape: [
      { name: "M1: Presagio Glacial", desc: "Al golpear con 'Emboscada Ártica', obtienes más cargas de Flash Freeze (3 con golpe rápido, 6 con cargado). Cada carga consumida da +2% Prob. Crítica (hasta 6 stacks)." },
      { name: "M2: Depredador del Océano Ártico", desc: "El 3er golpe del ataque básico puede encadenarse directamente con la Especial EX. Al usar la Especial EX, cada punto de Flash Freeze aumenta el Daño Crítico un 20% (máx 60%)." },
      { name: "M3: Intolerante a Horas Extra", desc: "Nivel de Habilidad +2." },
      { name: "M4: Escarcha Eterna", desc: "Cuando un aliado Congela o Aturde, Ellen gana 6 cargas y el efecto 'Carga Rápida', además de recuperar 4 de Energía." },
      { name: "M5: Sueño Adecuado", desc: "Nivel de Habilidad +2." },
      { name: "M6: El Banquete Comienza", desc: "Al usar Especial EX, Cadena o ganar Carga Rápida, la PEN aumenta un 20% por 6s. Gana cargas de 'El Banquete': usar el tijeretazo cargado consume las cargas para aumentar el daño un 250%." }
    ],
    teams: [
      {
        title: "Equipo Mono-Hielo (Premium)",
        members: ["Ellen", "Lycaon", "Soukaku"],
        bangboo: "Butler"
      },
      {
        title: "Equipo F2P",
        members: ["Ellen", "Anby", "Soukaku"],
        bangboo: "Penguin"
      }
    ]
  },
  2: { // Zhu Yuan
    baseStats: {
      hp: 602,         // Valor exacto Nvl 1
      atk: 132,        // Valor exacto Nvl 1
      def: 48,         // Valor exacto Nvl 1
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "93",    // Anomaly Mastery
      anomalyMastery: "92", // Anomaly Proficiency
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Core Crit Dmg",
      valuePerNode: 9.6, // 9.6% x 3 = 28.8%
    },
    materials: {
      promotion: ["Sello de Ataque", "Sello de Etéreo"],
      skill: ["Chip Etéreo", "Hamster Cage Pass"],
      boss: "Verdugo de la Construcción",
      expert: "Desafío Experto"
    },
    build: {
      weapons: [
        { name: "Agente Antidisturbios", rank: "S", type: "BiS (Daño Crítico + Etéreo)", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Estrella de la Calle", rank: "A", type: "Mejor F2P", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Cañón de Rotor", rank: "A", type: "Pase de Batalla", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" }
      ],
      discs: {
        set4: { name: "Metal Caótico", desc: "Daño Etéreo +10%. Daño Crítico +20% (+5.5% extra al detonar Corrupción)." },
        set2: { name: "Pájaro Carpintero", desc: "Prob. Crítica +8%" }
      },
      mainStats: {
        iv: "Daño Crítico / Prob. Crítica",
        v: "Daño Etéreo",
        vi: "ATK %"
      },
      subStats: ["Prob. Crítica", "Daño Crítico", "ATK %", "PEN"]
    },
    skills: [
      {
        type: "Ataque Básico",
        name: "¡No te muevas! [Modo Asalto]",
        description: "Pulsa (Ataque Normal) para activar:\nDesata una ráfaga de artes marciales, balas y Perdigones Etéreos en una serie de hasta 5 ataques, infligiendo Daño Físico y Daño Etéreo.\nCuando el 4.º o 5.º golpe impacta a un enemigo, obtiene 1 Cartucho Reforzado por golpe. Se puede obtener un máximo de 1 por activación de este Ataque Básico.\n\nMientras usas esta habilidad, arrastra el joystick y pulsa (Ataque Normal) para activar Ataque de Dash: Ofensiva de Fuego y reajustar para encaricar la dirección seleccionada.\nMientras estás en Modo Asalto, mantén (Ataque Normal) para cambiar a Modo Supresivo.",
        tags: ["Físico", "Etéreo", "Genera Cartuchos"]
      },
      {
        type: "Ataque Básico",
        name: "¡Por favor, no se resista! [Modo Supresivo]",
        description: "Mantén (Ataque Normal) para activar:\nDesata hasta 3 ataques de disparos perforantes, infligiendo Daño Físico. Si Zhu Yuan tiene Cartuchos Reforzados al disparar, se consumirá 1 Cartucho Reforzado, infligiendo Daño Etéreo masivo.\n\nMientras usas esta habilidad, arrastra el joystick para activar su Ataque de Dash: Poder de Fuego Abrumador y reajustar para encaricar la dirección seleccionada.\nMientras estás en Modo Supresivo, suelta (Ataque Normal) para regresar al Modo Asalto.",
        tags: ["Daño Masivo", "Consume Cartuchos"]
      },
      {
        type: "Evasión",
        name: "Desvío Táctico",
        description: "Pulsa (Evasión) para activar:\nUna evasión rápida (dash dodge).\nEl personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Invulnerable"]
      },
      {
        type: "Ataque rapido",
        name: "Ofensiva de Fuego [Modo Asalto]",
        description: "Pulsa (Ataque Normal) durante una evasión para activar:\nUsa la pistola para atacar, infligiendo Daño Etéreo.",
        tags: ["Daño Etéreo"]
      },
      {
        type: "Ataque rapido",
        name: "Poder de Fuego Abrumador [Modo Supresivo]",
        description: "Arrastra el joystick durante el Ataque Básico: ¡Por favor, no se resista! para activar:\nDesata un ataque de disparo perforante, infligiendo Daño Físico. Si Zhu Yuan tiene Cartuchos Reforzados al disparar, se consumirá 1 Cartucho Reforzado, infligiendo Daño Etéreo masivo.",
        tags: ["Daño Masivo", "Consume Cartuchos"]
      },
      {
        type: "Contraataque de Evasión",
        name: "Estallido de Fuego",
        description: "Pulsa (Ataque Normal) durante una Evasión Perfecta para activar:\nDispara a los enemigos en frente con un Perdigón Etéreo, infligiendo Daño Etéreo. Gana 1 Cartucho Reforzado al usar la habilidad.\nEl personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Invulnerable", "Genera Cartuchos"]
      },
      {
        type: "Habilidad Especial",
        name: "Disparo de Perdigones",
        description: "Pulsa (Habilidad Especial) para activar:\nDispara Perdigones Etéreos que infligen Daño Etéreo. Esto se puede repetir 3 veces pulsando repetidamente (Habilidad Especial).\nEl nivel de resistencia a la interrupción aumenta mientras se usa esta habilidad.",
        tags: ["Daño Etéreo"]
      },
      {
        type: "Habilidad Especial EX",
        name: "Aluvión Completo",
        description: "Con suficiente Energía, pulsa (Habilidad Especial EX) para activar:\nDispara una serie de Perdigones Etéreos que explotan e infligen Daño Etéreo masivo.\nAl activarse, gana 3 Cartuchos Reforzados.\nEl personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Burst", "Genera Cartuchos", "Invulnerable"]
      },
      {
        type: "Ataque en Cadena",
        name: "Modo de Erradicación",
        description: "Cuando se activa un Ataque en Cadena, selecciona al personaje para activar:\nUsa un Arma Maestra Modificada para ejecutar un ataque saturado, disparando láseres y misiles guiados para infligir Daño Etéreo masivo.\nAl activarse, gana 3 Cartuchos Reforzados.\nEl personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Burst", "Genera Cartuchos"]
      },
      {
        type: "Técnica Definitiva",
        name: "Modo de Erradicación Máxima",
        description: "Cuando el Nivel de Decibelios está al Máximo, pulsa (Definitiva) para activar:\nUsa un Arma Maestra Modificada para ejecutar un ataque saturado, disparando láseres y misiles guiados para infligir Daño Etéreo masivo.\nAl activarse, gana 3 Cartuchos Reforzados.\nEl personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Ultimate", "AoE", "Genera Cartuchos"]
      },
      {
        type: "Pasiva Central",
        name: "Munición de Operaciones Especiales",
        description: "Cuando Zhu Yuan está bajo el Modo Supresivo, usar Cartuchos Reforzados aumenta su Daño un 40%. Al atacar enemigos Aturdidos, este buff de Daño aumenta un 40% adicional. Cuando Zhu Yuan entra al campo de batalla, obtiene inmediatamente 6 Cartuchos Reforzados.",
        tags: ["Buff Daño", "Anti-Stun"]
      },
      {
        type: "Habilidad Adicional",
        name: "Coordinación Táctica",
        description: "Cuando otro personaje en tu equipo es de tipo Soporte o comparte la misma Facción:\nLa Prob. Crítica de Zhu Yuan aumenta un 30% por 10s después de usar una Habilidad Especial EX, Ataque en Cadena o Definitiva.",
        tags: ["Buff Crítico", "Sinergia"]
      },
      {
        type: "Asistencia Rápida",
        name: "Disparo de Cobertura",
        description: "Cuando el personaje activo es lanzado por los aires, pulsa (Asistencia) para activar:\nDispara a los enemigos en frente con un Perdigón Etéreo, infligiendo Daño Etéreo.\nGana 1 Cartucho Reforzado al usar la habilidad.\nEl personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Genera Cartuchos"]
      },
      {
        type: "Asistencia Defensiva",
        name: "Refuerzo Protegido",
        description: "Cuando el personaje en el campo está a punto de ser atacado, pulsa (Asistencia) para activar:\nEsquiva el ataque enemigo y activa Visión Vital.\nEl personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Esquiva", "Bullet Time"]
      },
      {
        type: "Seguimiento de Asistencia",
        name: "Contraataque Defensivo",
        description: "Pulsa (Ataque Normal) después de una Asistencia Evasiva para activar:\nAtaca con una combinación de artes marciales y cartuchos, infligiendo Daño Físico y Daño Etéreo.\nAl activarse, gana 3 Cartuchos Reforzados.\nEl personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Genera Cartuchos"]
      }
    ],
    mindscape: [
      { name: "M1: Recarga Rápida", desc: "Cuando Zhu Yuan activa Ataques en Cadena/Definitivas, gana el efecto Recarga Rápida. Cuando Zhu Yuan tiene el efecto Recarga Rápida y gasta todos los Cartuchos Reforzados, el efecto se consumirá para ganar instantáneamente 6 o 9 Cartuchos Reforzados." },
      { name: "M2: Ascua Etérea", desc: "En Modo Supresivo, el nivel de Anti-Interrupción de Zhu Yuan aumenta y el Daño recibido se reduce un 10%. Cuando Zhu Yuan golpea a un enemigo con Cartuchos Reforzados, inflige 10% más de Daño con Ataque Básico: ¡Por favor, no se resista! y Ataque de Dash: Poder de Fuego Abrumador (Daño Etéreo), acumulándose hasta 5 veces y durando 5s. Cada disparo añade una carga y las activaciones repetidas reinician la duración." },
      { name: "M3: Entrenamiento Especial de Seguridad Pública", desc: "Ataque Básico, Evasión, Asistencia, Habilidad Especial y Ataque en Cadena Nvl. +2" },
      { name: "M4: Perforación Etérea", desc: "Cuando Zhu Yuan golpea a un enemigo con Cartuchos Reforzados, su Ataque Básico: ¡Por favor, no se resista! y Ataque de Dash: Poder de Fuego Abrumador ignoran un 25% de la RES Etérea del objetivo." },
      { name: "M5: Experiencia en Operaciones Especiales", desc: "Ataque Básico, Evasión, Asistencia, Habilidad Especial y Ataque en Cadena Nvl. +2" },
      { name: "M6: Paquete de Energía Expandido III", desc: "Cuando Zhu Yuan consume un total de 12 Cartuchos Reforzados, recibe el efecto Resplandor Etéreo, y el costo de Energía de la siguiente Habilidad Especial EX se reduce en 30. Al lanzar una Habilidad Especial EX consume Resplandor Etéreo y dispara un Perdigón Etéreo adicional de 4 balas. Cada bala extra inflige Daño igual al 220% del ATK de Zhu Yuan." }
    ],
    teams: [
      {
        title: "Equipo N.E.P.S.",
        members: ["Zhu Yuan", "Qingyi", "Seth"],
        bangboo: "Resonaboo"
      },
      {
        title: "Equipo F2P",
        members: ["Zhu Yuan", "Anby", "Nicole"],
        bangboo: "Resonaboo"
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
  26: { // Hoshimi Miyabi
    baseStats: {
      hp: 617,
      atk: 127,
      def: 49,
      impact: 86,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "116",   // Anomaly Mastery
      anomalyMastery: "148", // Anomaly Proficiency (Valor del documento)
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Core Maestría Anomalía",
      valuePerNode: 30, // Total 90 puntos (30 x 3 nodos principales)
    },
    materials: {
      promotion: ["Sello de Anomalía", "Sello de Controlador"],
      skill: ["Chip de Hielo", "Hamster Cage Pass"],
      boss: "Refinamiento del Sicofante",
      expert: "Dragón Atronador"
    },
    build: {
      weapons: [
        { name: "Santuario de Granizo", rank: "S", type: "BiS (Crítico = Anomalía)", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Compilador de Fusión", rank: "S", type: "Alternativa", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" },
        { name: "Gourmet de la Selva", rank: "A", type: "F2P Craft", image: "/CodiceZero/Armas/Icon_Storage_W-Engine.webp" }
      ],
      discs: {
        set4: { name: "Canción de Rama y Hoja", desc: "Daño Crítico +16%. Si Maestría >= 115, +30% Daño Crítico." },
        set2: { name: "Pájaro Carpintero", desc: "Prob. Crítica +8%" }
      },
      mainStats: {
        iv: "Daño Crítico / Prob. Crítica",
        v: "Daño Hielo",
        vi: "Maestría de Anomalía"
      },
      subStats: ["Prob. Crítica", "Maestría Anomalía", "Daño Crítico", "ATK %"]
    },
    skills: [
      {
        type: "Ataque Normal",
        name: "Flor de viento",
        description: "Pulsa (Ataque Normal) para activar: Da cinco tajos hacia adelante, los dos primeros infligen daño físico y los tres últimos infligen daño de escarcha. Puedes bloquear ataques enemigos durante el quinto (Ataque normal).",
        tags: ["Físico", "Escarcha", "Bloqueo"],
        attributes: [
          { label: "Daño 1er Golpe", values: ["54.4%", "59.3%", "64.2%", "74.3%", "79.2%", "84.6%", "95.4%", "100.9%", "106.3%", "111.8%", "117.2%", "122.7%"] },
          { label: "Daño 2do Golpe", values: ["59.3%", "64.6%", "70.0%", "80.9%", "86.3%", "92.2%", "104.0%", "109.9%", "115.8%", "121.8%", "127.7%", "133.6%"] },
          { label: "Daño 3er Golpe", values: ["126.6%", "137.9%", "149.3%", "172.7%", "184.1%", "196.7%", "221.9%", "234.6%", "247.2%", "259.9%", "272.5%", "285.2%"] },
          { label: "Daño 4to Golpe", values: ["126.6%", "137.9%", "149.3%", "172.7%", "184.1%", "196.7%", "221.9%", "234.6%", "247.2%", "259.9%", "272.5%", "285.2%"] },
          { label: "Daño 5to Golpe", values: ["253.2%", "275.9%", "298.5%", "345.4%", "368.1%", "393.3%", "443.8%", "469.2%", "494.5%", "519.9%", "545.2%", "570.6%"] }
        ]
      },
      {
        type: "Ataque Normal (Carga)",
        name: "Luna helada",
        description: "Cuando tengas 2 o más (Caída de escarcha), mantén (Ataque Normal) o (Habilidad especial EX) para activar: Miyabi guarda su espada y adopta la (Postura de luna helada) y comienza a cargar.\n\nCada carga consumirá 2 puntos de (Caída de escarcha) y puedes cargar hasta tres veces.\n\nSuelta (Ataque Normal) o (Habilidad especial EX) o cuando (Caída de escarcha) se agote, Miyabi desenvainará su espada y lanzará un poderoso tajo hacia adelante según la etapa de carga actual, lo que infligirá mucho daño de escarcha y luego saldrá de la (Postura de luna helada).\n\nMiyabi tiene un efecto de invencibilidad durante la (Postura de luna helada).\nMiyabi tiene un máximo de 6 puntos de (Caída de escarcha).\nAl entrar en campo de batalla, Miyabi obtiene inmediatamente 3 puntos de (Caída de escarcha).",
        tags: ["Carga", "Invencibilidad", "Daño Masivo"],
        attributes: [
          { label: "Daño 1 Carga", values: ["506.4%", "551.7%", "597.0%", "691.0%", "736.3%", "786.8%", "887.8%", "938.2%", "988.7%", "1039.1%", "1089.6%", "1140.0%"] },
          { label: "Daño 2 Cargas", values: ["759.6%", "827.6%", "895.5%", "1036.5%", "1104.4%", "1180.2%", "1331.7%", "1407.3%", "1483.0%", "1558.7%", "1634.3%", "1710.0%"] },
          { label: "Daño 3 Cargas", values: ["1012.8%", "1103.4%", "1194.0%", "1382.0%", "1472.6%", "1573.6%", "1775.6%", "1876.4%", "1977.3%", "2078.2%", "2179.1%", "2280.0%"] }
        ]
      },
      {
        type: "Habilidad Especial",
        name: "Nieve profunda",
        description: "Pulsa (Habilidad especial) para activar: Saca rápidamente la espada y realiza un corte hacia adelante, lo que inflige un daño severo de escarcha.\nEl nivel de resistencia a la interrupción aumenta durante la activación del movimiento.",
        tags: ["Daño Severo", "Resistencia"],
        attributes: [
          { label: "Multiplicador de Daño", values: ["320.8%", "349.5%", "378.1%", "437.9%", "466.5%", "498.6%", "562.8%", "594.9%", "626.9%", "659.0%", "691.0%", "723.1%"] }
        ]
      },
      {
        type: "Habilidad Especial EX",
        name: "Nieve voladora",
        description: "Cuando la energía sea suficiente, pulsa (Habilidad especial EX) para activar: Avanza rápidamente y lanza un corte poderoso a los enemigos en el camino, lo que inflige una gran cantidad de daño severo de escarcha.\nCuando se activa el movimiento, obtienes 2 puntos de (Caída de escarcha).\nEl movimiento tiene un efecto de invencibilidad durante la activación.\n\nDespués de que se activa el movimiento, cuando la energía es suficiente, pulsa (Habilidad especial EX) de nuevo para consumir energía adicional y lanzar una persecución poderosa a los enemigos en el rango frontal, lo que inflige una gran cantidad de daño severo de escarcha.\nCuando se activa el movimiento, obtienes 2 puntos de (Caída de escarcha).",
        tags: ["Invencibilidad", "Genera Cargas", "Combo"],
        attributes: [
          { label: "Multiplicador Daño EX", values: ["320.8%", "349.5%", "378.1%", "437.9%", "466.5%", "498.6%", "562.8%", "594.9%", "626.9%", "659.0%", "691.0%", "723.1%"] },
          { label: "Daño Persecución", values: ["427.7%", "465.9%", "504.1%", "583.7%", "621.9%", "664.9%", "750.6%", "793.7%", "836.7%", "879.8%", "922.8%", "965.9%"] }
        ]
      },
      {
        type: "Pasiva Central",
        name: "Llama fría",
        description: "Cuando Miyabi inflige daño de escarcha a un enemigo, pondrá (Llama de hielo) al objetivo durante 30 segundos.\nCuando Miyabi acumula valor de acumulación de anomalía de escarcha para un enemigo con (Llama de hielo) unida, la eficiencia de acumulación de anomalía escarcha aumentará en un 100% según la probabilidad critica Miyabi, hasta un 80%.\n\nCuando Miyabi acumula valor de acumulación de anomalía de escarcha, tendrá una ranura de acumulación de anomalía de atributo independiente, que activará los efectos especiales (Congelación), (Rotura de hielo) y (Frío helado).\n\nCuando (Frío helado) está activado, (Llama de hielo) se eliminará y (Llama de hielo-rotura) se activará, lo que inflige un 1500% del Ataque de Miyabi en el objetivo con daño de escarcha severo y el objetivo entrará en el estado (Quemadura por escarcha).\n\nEn el estado (Quemadura por escarcha), el valor de acumulación de anomalía del equipo en el objetivo aumentará en un 20%.",
        tags: ["Conversión Crítico", "Quemadura", "Detonación"],
        attributes: [
          { label: "Conversión Crítico", values: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"] },
          { label: "Detonación Frío Helado", values: ["1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%", "1500%"] }
        ]
      },
      {
        type: "Pasiva Adicional",
        name: "Igual que Mu Shuangxue",
        description: "Se activa cuando hay otro (Auxiliar) o un personaje de la misma facción: Aumenta el daño de (Ataque Normal: Luna helada) en un 60%.\n\nCuando cualquier personaje del equipo activa el efecto (Disorder), Miyabi obtendrá 2 puntos de (Caída de escarcha) y durante la siguiente (Postura de luna helada), (Ataque Normal: Luna helada) ignorará un 30% de la resistencia hielo del objetivo.",
        tags: ["Buff Daño", "Penetración", "Sinergia"],
        attributes: [
          { label: "Buff Daño", values: ["60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"] },
          { label: "Penetración Hielo", values: ["30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"] }
        ]
      },
      {
        type: "Técnica en Cadena",
        name: "La llegada de la primavera",
        description: "Lanza un poderoso corte a una gran variedad de enemigos al frente, lo que inflige una gran cantidad de daño de escarcha. El movimiento tiene un efecto de invencibilidad durante la activación.",
        tags: ["AoE", "Invencibilidad"],
        attributes: [
          { label: "Multiplicador AoE", values: ["334.2%", "364.1%", "394.0%", "456.0%", "485.9%", "519.3%", "586.1%", "619.5%", "652.9%", "686.3%", "719.7%", "753.1%"] }
        ]
      },
      {
        type: "Movimiento Final",
        name: "Nieve famosa",
        description: "Lanza un poderoso corte a una gran variedad de enemigos al frente, lo que inflige una gran cantidad de daño de escarcha.\nCuando se activa el movimiento, obtienes 3 puntos de (Caída de escarcha).\nAdicionalmente, despues de golpear a un enemigo con el movimiento, Miyabi obtendrá un 30% de daño de escarcha durante 12 segundos.",
        tags: ["Ultimate", "Buff Daño", "Genera Cargas"],
        attributes: [
          { label: "Multiplicador Ultimate", values: ["668.4%", "728.2%", "788.0%", "912.0%", "971.8%", "1038.6%", "1172.2%", "1239.0%", "1305.8%", "1372.6%", "1439.4%", "1506.2%"] },
          { label: "Buff Daño Escarcha", values: ["30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"] }
        ]
      },
      {
        type: "Evasión / Contraataque",
        name: "Pájaro acuático / Invernal",
        description: "Evasión: Evasión rápida con invencibilidad.\nContraataque: Despues de activar (Evasión extrema), pulsa (Ataque Normal) para activar: Corte al enemigo que está al frente, lo que inflige daño de escarcha.",
        tags: ["Esquiva", "Contraataque"],
        attributes: [
          { label: "Daño Contraataque", values: ["167.1%", "182.1%", "197.0%", "228.0%", "242.9%", "259.7%", "293.1%", "309.8%", "326.5%", "343.2%", "359.9%", "376.6%"] }
        ]
      }
    ],
    teams: [
      {
        title: "Section 6 (Disorder)",
        members: ["Miyabi", "Soukaku", "Yanagi"],
        bangboo: "Sharkboo"
      },
      {
        title: "Mono-Hielo",
        members: ["Miyabi", "Lycaon", "Soukaku"],
        bangboo: "Butler"
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
  }
};
