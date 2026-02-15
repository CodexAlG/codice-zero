// Agent 2 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 626,
      max: 7482
    },
    atk: {
      min: 127,
      max: 919
    },
    def: {
      min: 49,
      max: 600
    },
    impact: 90,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "93",
    anomalyMastery: "92",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "daño",
    valuePerNode: 9.6
  },
  materials: {
    weeklyBoss: {
      name: "Living Drive",
      icon: "Item_Living_Drive.webp",
    },
    eliteBoss: {
      name: "Higher Dimensional Data: Ethereal Pursuit",
      icon: "Item_Higher_Dimensional_Data_Ethereal_Pursuit.webp",
    }
  },
  strategy: {
    // Orden de Habilidades (Optional/Default if not provided)
    skillPriority: ["Técnica Especial", "Técnica Definitiva", "Ataque Básico", "Evasión", "Asistencia"],

    // Estadísticas Principales
    statsPriority: ["Daño Crítico", "Prob. Crítica", "Bono de Daño Éter", "Ataque %"],

    // Top 5 Mejores Armas
    bestWeapons: [
      { id: "5512", name: "Supresor Antidisturbios VI", tier: "S", tag: "BiS", icon: "/CodiceZero/Armas/Ataque/W-Engine_Riot_Suppressor_Mark_VI.webp" },
      { id: "5508", name: "Cojin de Acero", tier: "S", tag: "Alternativa", icon: "/CodiceZero/Armas/Ataque/W-Engine_Steel_Cushion.webp" },
      { id: "5509", name: "Azufre", tier: "S", tag: "Alternativa", icon: "/CodiceZero/Armas/Ataque/W-Engine_The_Brimstone.webp" },
      { id: "5606", name: "Anhelo Marcato", tier: "A", tag: "Evento W5", icon: "/CodiceZero/Armas/Ataque/W-Engine_Marcato_Desire.webp" },
      { id: "5610", name: "Rotor de Cañon", tier: "A", tag: "Pase de Batalla", icon: "/CodiceZero/Armas/Ataque/W-Engine_Cannon_Rotor.webp" },
    ],

    // Mejores Builds de Discos
    driveDiscSetups: [
      {
        name: "Opción A: Estándar (Consistente)",
        sets: [
          { name: "Metal Caótico", count: 4, icon: "/CodiceZero/Discos/Drive_Disc_Chaotic_Metal_Icon.webp" },
          { name: "Pájaro Carpintería", count: 2, icon: "/CodiceZero/Discos/Drive_Disc_Woodpecker_Electro_Icon.png" }
        ],
        mainStats: { iv: "Daño Crítico / Prob. Crítica", v: "Bono de Daño Éter", vi: "Ataque %" }
      },
      {
        name: "Opción B: Burst / Ulti Spam (Con Dialyn)",
        sets: [
          { name: "Pez Globo", count: 4, icon: "/CodiceZero/Discos/Drive_Disc_Puffer_Electro_Icon.webp" },
          { name: "Metal Caótico", count: 2, icon: "/CodiceZero/Discos/Drive_Disc_Chaotic_Metal_Icon.webp" }
        ],
        mainStats: { iv: "Daño Crítico / Prob. Crítica", v: "Bono de Daño Éter", vi: "Ataque %" }
      }
    ],

    // Mejores Equipos
    teams: [
      {
        name: "Equipo Premium (Meta v2.6)",
        members: [
          { id: 2, name: "Zhu Yuan", icon: "/CodiceZero/ICONOS/Agent_Zhu_Yuan_Icon.webp" },
          { id: 44, name: "Dialyn", icon: "/CodiceZero/ICONOS/Agent_Dialyn_Icon.webp" },
          { id: 27, name: "Astra Yao", icon: "/CodiceZero/ICONOS/Agent_Astra_Yao_Icon.webp" },
          { name: "Resonaboo", icon: "/CodiceZero/Bangboo/Resonaboo_Portrait.webp" }
        ]
      },
      {
        name: "Equipo Semi-Premium (Estándar)",
        members: [
          { id: 2, name: "Zhu Yuan", icon: "/CodiceZero/ICONOS/Agent_Zhu_Yuan_Icon.webp" },
          { id: 9, name: "Qingyi", icon: "/CodiceZero/ICONOS/Agent_Qingyi_Icon.webp" },
          { id: 12, name: "Nicole", icon: "/CodiceZero/ICONOS/Agent_Nicole_Demara_Icon.webp" },
          { name: "Resonaboo", icon: "/CodiceZero/Bangboo/Resonaboo_Portrait.webp" }
        ]
      },
      {
        name: "Equipo F2P",
        members: [
          { id: 2, name: "Zhu Yuan", icon: "/CodiceZero/ICONOS/Agent_Zhu_Yuan_Icon.webp" },
          { id: 11, name: "Anby", icon: "/CodiceZero/ICONOS/Agent_Anby_Demara_Icon.webp" },
          { id: 12, name: "Nicole", icon: "/CodiceZero/ICONOS/Agent_Nicole_Demara_Icon.webp" },
          { name: "Devilboo", icon: "/CodiceZero/Bangboo/Devilboo_Portrait.webp" }
        ]
      }
    ]
  },
  coreSkillScaling: [
    ["20%"], ["23.9%"], ["26.6%"], ["30%"], ["33.3%"], ["36.6%"], ["40%"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: ¡No te Muevas! [Modo Asalto]",
      description: "Presiona [Icono Ataque] para activar: Desata una ráfaga de artes marciales, balas y Perdigones Etereos en frente, infligiendo Daño Físico y Daño Etéreo. Cuando el 4to golpe impacta a un enemigo, obtén 1 (Perdigón Mejorado) por golpe. Un máximo de 1 puede obtenerse al activar esta habilidad sobre el escenario de una sola vez. Mientras usa esta habilidad, arrastra el joystick/stick y presiona [Icono Ataque] para activar (Ataque de Carrera: Ofensiva de Fuego) y reajustar para enfrentar la dirección seleccionada. Mientras está bajo (Modo Asalto), mantén [Icono Ataque] para cambiar a (Modo Supresivo).",
      tags: ["Físico", "Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: ¡Por Favor, no se Resista! [Modo Supresivo]",
      description: "Mantén [Icono Ataque] para activar: Desata hasta 3 ataques perforantes con artillería Perdigón, infligiendo Daño Físico. Si Zhu Yuan tiene (Perdigones Mejorados) al disparar, 1 (Perdigón Mejorado) será consumido, infligiendo daño masivo de Daño Etéreo. Mientras usa esta habilidad, arrastra el joystick/stick para activar (Ataque de Carrera: Abrumadora Sobrepotencia) y reajustar para enfrentar la dirección seleccionada. Mientras está en (Modo Supresivo), suelta [Icono Ataque] para volver a (Modo Asalto).",
      tags: ["Físico", "Etéreo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Desvío Táctico",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión deslizante. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Ofensiva de Fuego",
      description: "Durante el (Modo Asalto), presiona [Icono Ataque] durante una (Evasión) para activar: Usa pistola para atacar, infligiendo Daño Etéreo.",
      tags: ["Etéreo", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Poder de Fuego Abrumador",
      description: "Arrastra el joystick/stick durante (Ataque Básico: ¡Por Favor, no se Resista!) para activar: Desata un ataque perforante en el escenario, infligiendo Daño Físico. Si Zhu Yuan tiene (Perdigones Mejorados) al disparar, 1 (Perdigón Mejorado) será consumido, infligiendo daño masivo de Daño Etéreo.",
      tags: ["Físico", "Etéreo", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Ráfaga de Fuego",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Dispara enemigos en frente con un Perdigón Etereo, infligiendo Daño Etéreo. Gana 1 (Perdigón Mejorado) al usar habilidad. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Evasión"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Disparo de Cobertura",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Dispara enemigos en frente con un Perdigón Etereo, infligiendo Daño Etéreo. Gana 1 (Perdigón Mejorado) al usar habilidad. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Respaldo Vigilante",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Esquiva el ataque del enemigo y activa (Vista Vital). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Contraataque Defensivo",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Ataca con una combinación de artes marciales y artillería Perdigón, infligiendo Daño Físico y Daño Etéreo. Al activar, gana 3 (Perdigones Mejorados). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Etéreo", "Asistencia"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Explosión de Perdigones",
      description: "Presiona [Icono Especial] para activar: Dispara Perdigones Etereos que infligen Daño Etéreo. Esto puede repetirse 3 veces presionando repetidamente [Icono Especial]. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Etéreo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Andanada Completa",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Dispara una serie de Perdigones Etereos, que explotan e infligen daño masivo de Daño Etéreo. Al activar, gana 3 (Perdigones Mejorados). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Modo de Erradicación",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Usa Maestra de Armas de Fuego Modificada para ejecutar un ataque saturado, disparando láseres y buscando misiles para infligir daño masivo de Daño Etéreo. Al activar, gana 5 (Perdigones Mejorados). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Modo de Erradicación Máxima",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Usa Maestra de Armas de Fuego Modificada para ejecutar un ataque saturado, disparando láseres y buscando misiles para infligir daño masivo de Daño Etéreo. Al activar, gana 5 (Perdigones Mejorados). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Munición de Operaciones Especiales",
      description: "Cuando Zhu Yuan está bajo (Modo Supresivo), usar (Perdigones Mejorados) aumenta su Daño en un {VALOR_1}. Al atacar a enemigos Aturdidos, este buff de Daño aumenta en un {VALOR_1} adicional. Cuando Zhu Yuan entra al campo de batalla, gana inmediatamente 6 (Perdigones Mejorados).",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Coordinación Táctica",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Apoyo) o comparte la misma Facción: La Probabilidad de Crit de Zhu Yuan aumenta en un 30% por 10s después de usar una (Técnica Especial EX), (Ataque en Cadena), o (Definitiva).",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Recarga Rápida",
      description: "Cuando Zhu Yuan activa (Ataques en Cadena)/(Definitivas), gana el efecto de (Recarga Rápida). Cuando Zhu Yuan tiene el efecto de (Recarga Rápida), el efecto de (Recarga Rápida) será consumido para ganar instantáneamente 6/9 (Perdigones Mejorados).",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Ascua Etérea",
      description: "En (Modo Supresivo), el nivel de Anti-Interrupción de Zhu Yuan aumenta y el Daño recibido se reduce en un 10%. Cuando Zhu Yuan golpea a un enemigo con (Perdigones Mejorados), inflige un 10% más de Daño en (Ataque Básico: ¡Por Favor, no se Resista!) y (Ataque de Carrera: Poder de Fuego Abrumador) Daño Etéreo, acumulándose hasta 5 veces y durando por 5s. Cada disparo añade una acumulación de este efecto, y los disparos repetidos reinician la duración.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Entrenamiento Especial de Seguridad Pública",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Perforación Etérea",
      description: "Cuando Zhu Yuan golpea a un enemigo con (Perdigones Mejorados), su (Ataque Básico: ¡Por Favor, no se Resista!) y (Ataque de Carrera: Poder de Fuego Abrumador) ignoran el 25% de la RES Etérea del objetivo, acumulándose hasta 5 veces y durando 5s. Cada disparo añade una acumulación de este efecto, y los disparos repetidos reinician la duración.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Experiencia de Operaciones Especiales",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Paquete de Energía Expandido III",
      description: "Cuando Zhu Yuan consume un total de 12 (Perdigones Mejorados), recibe el efecto de (Resplandor Etereo), y el costo de Energía de la próxima (Técnica Especial EX) se reduce en 30. Lanzar (Técnica Especial EX) con el efecto de (Resplandor Etereo) disparará adicionalmente un Perdigón Etereo adicional de 4 balas. Cada bala extra inflige Daño igual al 220% del ATK de Zhu Yuan.",
      tags: ["Mindscape 6"]
    }
  ]
};
