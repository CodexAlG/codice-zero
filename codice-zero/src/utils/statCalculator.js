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

  // 4. Calcular stats base primero
  let hp = Math.floor(baseStats.hp * multHP);
  let critRate = baseStats.crit;
  let critDmg = baseStats.critDmg;
  let anomalyMastery = baseStats.anomalyMastery;
  let anomalyRate = baseStats.anomalyRate;
  let energyRegen = baseStats.energyRegen;
  let impact = baseStats.impact;
  

  const statName = coreConfig?.statName?.toLowerCase() || "";
  const originalStatName = coreConfig?.statName || "";
  let buffedStat = "";
  
  // 5. Aplicar bonus especial según el stat
  if (originalStatName.includes("hp%")) {
    // Para HP%, calcular como HP min × porcentaje
    const baseHpMin = typeof baseStats.hp === 'object' ? baseStats.hp.min : baseStats.hp;
    const bonusValue = Math.floor(baseHpMin * (addedSpecial / 100));
    hp = hp + bonusValue;
    buffedStat = "hp";
  
  } else if (statName.includes("prob") || statName.includes("crit rate") || statName.includes("crítica")) {
    critRate = addPercentage(baseStats.crit, addedSpecial);
    buffedStat = "crit";
  } else if (statName.includes("daño") || statName.includes("crit dmg") || statName.includes("dano")) {
    critDmg = addPercentage(baseStats.critDmg, addedSpecial);
    buffedStat = "critDmg";
  } else if (statName.includes("maestría") || statName.includes("maestria") || statName.includes("mastery")) {
    // Si es plano (no %), sumamos directo
    anomalyMastery = (parseInt(baseStats.anomalyMastery) + Math.floor(addedSpecial)).toString();
    buffedStat = "anomalyMastery";
  } else if (statName.includes("tasa") || statName.includes("anomaly rate")) {
    anomalyRate = (parseInt(baseStats.anomalyRate) + Math.floor(addedSpecial)).toString();
    buffedStat = "anomalyRate";
  } else if (statName.includes("energía") || statName.includes("energia") || statName.includes("energy")) {
    energyRegen = (parseFloat(baseStats.energyRegen) + addedSpecial).toFixed(2);
    buffedStat = "energyRegen";
  } else if (statName.includes("impacto") || statName.includes("impact")) {
    impact = (parseFloat(baseStats.impact) + addedSpecial).toString();
    buffedStat = "impact";
  }

  // 5. Retornar objeto con valores YA SUMADOS
  return {
    hp: hp.toLocaleString(),
    def: Math.floor(baseStats.def * multHP).toLocaleString(),
    atk: Math.floor((baseStats.atk * multATK) + addedAtk).toLocaleString(),
    impact: impact ? impact.toLocaleString() : baseStats.impact,
    crit: critRate,
    critDmg: critDmg,
    anomalyMastery: anomalyMastery,
    anomalyRate: anomalyRate,
    penRatio: baseStats.penRatio,
    energyRegen: energyRegen,

    // Info para pintar de color el stat con buff
    buffedStat: buffedStat,
    bonusValue: addedSpecial // Valor del bonus para mostrar coloreado
  };
};
