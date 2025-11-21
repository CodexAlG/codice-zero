// Curva para HP y DEFENSA (Crecen ~12.4x)
const GROWTH_HP_DEF = {
  1: 1.00, 10: 2.22, 20: 4.26, 30: 6.31, 40: 8.35, 50: 10.40, 60: 12.44
};

// Multiplicadores para ATAQUE (Precisión basada en tu tabla 127 -> 805)
const GROWTH_ATK = {
  1: 1.000,
  10: 1.543,   // Multiplicador de 196 / 127
  "10+": 2.496,   // Multiplicador de 317 / 127
  20: 3.456,   // Multiplicador de 439 / 127
  "20+": 4.425,   // Multiplicador de 562 / 127
  30: 5.378,   // Multiplicador de 683 / 127
  "30+": 6.338,   // Multiplicador de 805 / 127 (Max Level sin más promos)
  40: 6.338,
  "40+": 6.338,
  50: 6.338,
  "50+": 6.338,
  60: 6.338  // Multiplicador final
};

// Bonus de Core Skills (A-F)
const CORE_THRESHOLDS = [
  { level: 15, type: 'special' }, // A
  { level: 25, type: 'atk' },     // B (+25 ATK)
  { level: 35, type: 'special' }, // C
  { level: 45, type: 'atk' },     // D (+25 ATK)
  { level: 55, type: 'special' }, // E
  { level: 60, type: 'atk' }      // F (+25 ATK)
];

/**
 * Calcula estadísticas incluyendo bonus de Core Skills
 * @param {object} baseStats - Objeto con { hp, atk, def } a nivel 1
 * @param {number} level - Nivel del personaje (1-60)
 * @param {object} coreConfig - Configuración del core { statName, valuePerNode }
 * @returns {object} - Stats calculados con bonus de core sumados
 */
export const calculateStatsWithCore = (baseStats, level, coreConfig) => {
  // 1. Buscar multiplicadores
  const growthKey = Object.keys(GROWTH_HP_DEF)
    .map(Number)
    .sort((a, b) => b - a)
    .find(k => k <= level) || 1;

  const multHP = GROWTH_HP_DEF[growthKey];
  const multATK = GROWTH_ATK[growthKey];

  // 2. Calcular Bonus de Core
  let addedAtk = 0;
  let addedSpecial = 0;

  CORE_THRESHOLDS.forEach(threshold => {
    if (level >= threshold.level) {
      if (threshold.type === 'atk') addedAtk += 25;
      if (threshold.type === 'special') addedSpecial += (coreConfig?.valuePerNode || 0);
    }
  });

  // 3. Helper para sumar porcentajes
  const addPercentage = (baseStr, bonus) => {
    if (!baseStr || bonus === 0) return baseStr;
    const baseNum = parseFloat(baseStr);
    if (isNaN(baseNum)) return baseStr;
    // Sumamos y formateamos (ej: 50 + 28.8 = 78.8)
    return `${(baseNum + bonus).toFixed(1)}%`;
  };

  // 4. Identificar qué stat recibe el bonus especial
  let critRate = baseStats.crit;
  let critDmg = baseStats.critDmg;
  let anomalyMastery = baseStats.anomalyMastery;
  let anomalyRate = baseStats.anomalyRate;
  let energyRegen = baseStats.energyRegen;
  let impact = baseStats.impact;

  const statName = coreConfig?.statName?.toLowerCase() || "";

  if (statName.includes("prob") || statName.includes("crit rate")) {
    critRate = addPercentage(baseStats.crit, addedSpecial);
  } else if (statName.includes("daño") || statName.includes("crit dmg")) {
    critDmg = addPercentage(baseStats.critDmg, addedSpecial);
  } else if (statName.includes("maestría") || statName.includes("mastery")) {
    // Si es plano (no %), sumamos directo
    anomalyMastery = (parseInt(baseStats.anomalyMastery) + Math.floor(addedSpecial)).toString();
  } else if (statName.includes("energía") || statName.includes("energy")) {
    energyRegen = (parseFloat(baseStats.energyRegen) + addedSpecial).toFixed(2);
  } else if (statName.inclueds("impacto") || statName.includes("Impact")) {
    impact = (parseFloat(baseStats.impact) + addedSpecial);
  }

  // 5. Retornar objeto con valores YA SUMADOS
  return {
    hp: Math.floor(baseStats.hp * multHP).toLocaleString(),
    def: Math.floor(baseStats.def * multHP).toLocaleString(),
    atk: Math.floor((baseStats.atk * multATK) + addedAtk).toLocaleString(),
    // Impacto NO se multiplica
    impact: baseStats.impact ? baseStats.impact.toLocaleString() : "-",

    // Valores sumados con Core bonus
    crit: critRate,
    critDmg: critDmg,
    anomalyMastery: anomalyMastery,
    anomalyRate: anomalyRate,
    penRatio: baseStats.penRatio,
    energyRegen: energyRegen,
    impact: baseStats.impact,

    // Info para pintar de amarillo el stat con buff
    hasBuff: addedSpecial > 0,
    buffType: statName
  };
};
