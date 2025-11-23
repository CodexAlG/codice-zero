// Helper para convertir nombres a formato de archivo PascalCase
const capitalizeFileName = (name) => {
  if (!name) return "";
  return name.replace(/[()]/g, '') // Remover paréntesis
    .replace(/\s+/g, '_') // Espacios a guiones bajos
    .replace(/_+/g, '_') // Múltiples guiones a uno solo
    .replace(/^_|_$/g, '') // Quitar guiones al inicio y final
    .toUpperCase(); // TODO A MAYÚSCULAS
};

export const driveDiscs = [
  // --- VERSIÓN 1.4 / 1.5 (Lo Más Nuevo) ---
  {
    id: 9924,
    name: "Nana de Luna (Moonlight Lullaby)",
    twoPiece: "Recup. Energía +20%.",
    fourPiece: "Cuando un personaje de Soporte usa Técnica Especial EX o Definitiva, el daño de todo el equipo aumenta un 18% por 25s. (Efecto único).",
    image: "/CodiceZero/Discos/DriveDisc_MoonlightLullaby_Icon.webp"
  },
  {
    id: 9923,
    name: "Flor del Alba (Dawn's Bloom)",
    twoPiece: "Daño de Ataque Básico +15%.",
    fourPiece: "Daño de Ataque Básico +20%. Si lo usa un personaje de Ataque, al usar Especial EX o Definitiva, el daño de Básico sube otro 20% por 25s.",
    image: "/CodiceZero/Discos/DriveDisc_DawnsBloom_Icon.webp"
  },
  {
    id: 9922,
    name: "Rey de la Cima (King of the Summit)",
    twoPiece: "Aturdimiento +6%.",
    fourPiece: "Si lo usa un Aturdidor: Al usar Especial EX o Cadena, aumenta el Daño Crítico del equipo un 15%. Si el usuario tiene >=50% Prob. Crítica, da otro 15% extra.",
    image: "/CodiceZero/Discos/DriveDisc_KingOfTheSummit_Icon.webp"
  },
  {
    id: 9921,
    name: "Cuentos de Yunkui (Yunkui Tales)",
    twoPiece: "HP +10%.",
    fourPiece: "Al usar Especial EX, Cadena o Definitiva, Prob. Crítica +4% (se apila 3 veces por 15s). Con 3 cargas, aumenta el Daño de Ruptura un 10%.",
    image: "/CodiceZero/Discos/DriveDisc_YunkuiTales_Icon.webp"
  },

  // --- VERSIÓN 1.3 ---
  {
    id: 9920,
    name: "Melodía de Faetón (Phaethon's Melody)",
    twoPiece: "Tasa de Anomalía +8%.",
    fourPiece: "Cuando cualquier aliado usa Especial EX, la Maestría de Anomalía del usuario sube +45 por 8s. Si quien la usa NO es el portador, el portador gana +25% Daño Etéreo.",
    image: "/CodiceZero/Discos/DriveDisc_PhaethonsMelody_Icon.webp"
  },
  {
    id: 9919,
    name: "Armonía de Sombras (Shadow Harmony)",
    twoPiece: "Daño Réplica y Dash +15%.",
    fourPiece: "Al golpear con Réplica o Dash del mismo elemento, ATK +4% y Prob. Crítica +4% (se apila 3 veces).",
    image: "/CodiceZero/Discos/DriveDisc_ShadowHarmony_Icon.webp"
  },
  {
    id: 9918,
    name: "Voz Astral (Astral Voice)",
    twoPiece: "ATK +10%.",
    fourPiece: "Cuando un aliado entra por Asistencia Rápida, todo el equipo gana una carga 'Astral' (Daño +8% para el personaje que entró). Se apila 3 veces.",
    image: "/CodiceZero/Discos/Astral.webp"
  },
  {
    id: 9917,
    name: "Canción de Rama y Hoja (Branch & Blade Song)",
    twoPiece: "Daño Crítico +16%.",
    fourPiece: "Si Maestría Anomalía >= 115, Daño Crítico +30%. Si un aliado Congela o Aturde, el usuario gana +12% Prob. Crítica por 15s.",
    image: "/CodiceZero/Discos/DriveDisc_BranchAndBladeSong_Icon.webp"
  },

  // --- VERSIÓN 1.2 ---
  {
    id: 9916,
    name: "Proto Punk",
    twoPiece: "Efecto de Escudo +15%.",
    fourPiece: "Cuando cualquier aliado usa Asistencia Defensiva o Evasiva, todo el equipo gana +15% Daño por 10s.",
    image: "/CodiceZero/Discos/Drive_Disc_Proto_Punk_icon.png"
  },
  {
    id: 9915,
    name: "Jazz Caótico (Chaos Jazz)",
    twoPiece: "Maestría de Anomalía +30.",
    fourPiece: "Daño Fuego y Eléctrico +15%. Estando en reserva (off-field), daño de Especial EX y Asistencia +20%. Al entrar, el buff dura 5s.",
    image: "/CodiceZero/Discos/Drive_Disc_Chaos_Jazz_icon.png"
  },

  // --- VERSIÓN 1.0 (ELEMENTALES) ---
  {
    id: 9914,
    name: "Metal Colmillo (Fanged Metal)",
    twoPiece: "Daño Físico +10%.",
    fourPiece: "Si un aliado activa Asalto, el usuario inflige 35% más de daño al objetivo por 12s.",
    image: "/CodiceZero/Discos/DriveDisc_FangedMetal_Icon.webp"
  },
  {
    id: 9913,
    name: "Metal Polar (Polar Metal)",
    twoPiece: "Daño Hielo +10%.",
    fourPiece: "Daño de Básico y Dash +20%. Al Congelar o Romper Hielo, este bono aumenta otro 20% por 12s.",
    image: "/CodiceZero/Discos/DriveDisc_PolarMetal_Icon.webp"
  },
  {
    id: 9912,
    name: "Metal Trueno (Thunder Metal)",
    twoPiece: "Daño Eléctrico +10%.",
    fourPiece: "Mientras haya un enemigo en Shock, el ATK del usuario aumenta un 28%.",
    image: "/CodiceZero/Discos/DriveDisc_ThunderMetal_Icon.webp"
  },
  {
    id: 9911,
    name: "Metal Caótico (Chaotic Metal)",
    twoPiece: "Daño Etéreo +10%.",
    fourPiece: "Daño Crítico +20%. Al causar daño de Corrupción, +5.5% Daño Crítico adicional (apilable 6 veces).",
    image: "/CodiceZero/Discos/DriveDisc_ChaoticMetal_Icon.webp"
  },
  {
    id: 9910,
    name: "Metal Inferno (Inferno Metal)",
    twoPiece: "Daño Fuego +10%.",
    fourPiece: "Al golpear enemigos Quemados, la Prob. Crítica aumenta un 28% por 8s.",
    image: "/CodiceZero/Discos/DriveDisc_InfernoMetal_Icon.webp"
  },

  // --- VERSIÓN 1.0 (GENERALES) ---
  {
    id: 9909,
    name: "Jazz Swing (Swing Jazz)",
    twoPiece: "Recup. Energía +20%.",
    fourPiece: "Al usar Cadena o Definitiva, aumenta el daño de todo el equipo un 15% por 12s.",
    image: "/CodiceZero/Discos/DriveDisc_SwingJazz_Icon.webp"
  },
  {
    id: 9908,
    name: "Rock del Alma (Soul Rock)",
    twoPiece: "Defensa +16%.",
    fourPiece: "Al recibir daño, reduce el daño recibido un 40% por 2.5s.",
    image: "/CodiceZero/Discos/DriveDisc_SoulRock_Icon.webp"
  },
  {
    id: 9907,
    name: "Punk Hormonal (Hormone Punk)",
    twoPiece: "ATK +10%.",
    fourPiece: "Al entrar en combate o cambiar al personaje, ATK +25% por 10s (Cooldown 20s).",
    image: "/CodiceZero/Discos/DriveDisc_HormonePunk_Icon.webp"
  },
  {
    id: 9906,
    name: "Blues de la Libertad (Freedom Blues)",
    twoPiece: "Maestría de Anomalía +30.",
    fourPiece: "Al golpear con Especial EX, reduce la Resistencia a Anomalía del enemigo un 20% por 8s.",
    image: "/CodiceZero/Discos/DriveDisc_FreedomBlues_Icon.webp"
  },
  {
    id: 9905,
    name: "Disco de Choque (Shockstar Disco)",
    twoPiece: "Impacto +6%.",
    fourPiece: "Básico, Dash y Contraataque causan 20% más de Aturdimiento.",
    image: "/CodiceZero/Discos/DriveDisc_ShockstarDisco_Icon.webp"
  },
  {
    id: 9904,
    name: "Electro Puffer (Puffer Electro)",
    twoPiece: "Tasa de Perforación (PEN) +8%.",
    fourPiece: "Daño de Definitiva +20%. Tras usar la Definitiva, ATK +15% por 12s.",
    image: "/CodiceZero/Discos/DriveDisc_PufferElectro_Icon.webp"
  },
  {
    id: 9903,
    name: "Pájaro Carpintero (Woodpecker Electro)",
    twoPiece: "Prob. Crítica +8%.",
    fourPiece: "Al asestar Crítico con Básico, Evasión o Especial EX, ATK +9% por 6s (buffs independientes).",
    image: "/CodiceZero/Discos/Drive_Disc_Woodpecker_Electro_icon.png"
  }
];