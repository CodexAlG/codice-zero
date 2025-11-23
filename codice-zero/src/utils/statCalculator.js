// Función para calcular valor por interpolación lineal
const getInterpolatedValue = (min, max, level) => {
    // FIX CRUCIAL: Usamos Number() para una conversión segura a número
    const numMin = Number(min);
    const numMax = Number(max);
    
    if (level <= 1) return numMin;
    if (level >= 60) return numMax;
    
    // (Si por alguna razón numMin/numMax siguen siendo inválidos, Math.floor(NaN) es NaN. 
    // Pero esto cubre el caso de conversión).
    const percent = (level - 1) / 59;
    return numMin + (numMax - numMin) * percent;
};

// Bonus de Core Skills (B, D, F son ignorados en ATK, solo para special) 
const CORE_THRESHOLDS = [
    { level: 15, type: 'special' }, // A
    { level: 25, type: 'atk_ignored' }, // B (+25 ATK - Ignorado para cálculo de ATK total)
    { level: 35, type: 'special' }, // C
    { level: 45, type: 'atk_ignored' }, // D (+25 ATK - Ignorado)
    { level: 55, type: 'special' }, // E
    { level: 60, type: 'atk_ignored' } // F (+25 ATK - Ignorado)
];

/**
 * Calcula estadísticas incluyendo bonus de Core Skills
 * @param {object} baseStats - Objeto con { min, max }
 * @param {number} level - Nivel del personaje (1-60)
 * @param {object} coreConfig - Configuración del core { statName, valuePerNode }
 * @returns {object} - Stats calculados con bonus de core sumados
 */
export const calculateStatsWithCore = (baseStats, level, coreConfig) => {
    // 1. Calcular Bonus de Core
    let addedSpecial = 0;
    CORE_THRESHOLDS.forEach(threshold => {
        if (level >= threshold.level && threshold.type === 'special') {
            addedSpecial += (coreConfig?.valuePerNode || 0);
        }
    });

    // 2. Interpolación Lineal de Stats Base
    let hp = getInterpolatedValue(baseStats.hp.min, baseStats.hp.max, level);
    let atk = getInterpolatedValue(baseStats.atk.min, baseStats.atk.max, level);
    let def = getInterpolatedValue(baseStats.def.min, baseStats.def.max, level);
    let sheerForce = baseStats.sheerForce ? getInterpolatedValue(baseStats.sheerForce.min, baseStats.sheerForce.max, level) : null;

    let critRate = baseStats.crit;
    let critDmg = baseStats.critDmg;
    let anomalyMastery = baseStats.anomalyMastery;
    let anomalyRate = baseStats.anomalyRate;
    let energyRegen = baseStats.energyRegen;
    let impact = baseStats.impact;

    // 3. Helper para sumar porcentajes/valores planos
    const addPercentage = (baseStr, bonus) => {
        if (!baseStr || bonus === 0) return baseStr;
        const baseNum = parseFloat(baseStr);
        if (isNaN(baseNum)) return baseStr;
        return `${(baseNum + bonus).toFixed(1)}%`;
    };

    // 4. Aplicar Core Special Bonus (Reglas de Aplicación)
    const statName = coreConfig?.statName?.toLowerCase() || "";
    const originalStatName = coreConfig?.statName || "";
    let buffedStat = "";
    let bonusValue = 0;

    if (originalStatName.includes("hp%")) {
        // REGLA CLAVE: MIN_Stat * % + Interpolated_Stat
        const baseHpMin = baseStats.hp.min;
        bonusValue = baseHpMin * (addedSpecial / 100);
        hp = hp + bonusValue;
        buffedStat = "hp";
    
    } else if (originalStatName.includes("atk%")) {
        const baseAtkMin = baseStats.atk.min;
        bonusValue = baseAtkMin * (addedSpecial / 100);
        atk = atk + bonusValue;
        buffedStat = "atk";
    
    } else if (originalStatName.includes("def%")) {
        const baseDefMin = baseStats.def.min;
        bonusValue = baseDefMin * (addedSpecial / 100);
        def = def + bonusValue;
        buffedStat = "def";
    
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
    // SheerForce no longer has special handling - it's calculated separately above with interpolation

    // 5. Retornar objeto con valores FINALIZADOS (formateados)
    return {
        hp: Math.floor(hp).toLocaleString(),
        def: Math.floor(def).toLocaleString(),
        atk: Math.floor(atk).toLocaleString(),
        impact: baseStats.impact, // Valor fijo o base
        sheerForce: sheerForce ? Math.floor(sheerForce).toLocaleString() : null, // Solo interpolado
        crit: critRate,
        critDmg: critDmg,
        anomalyMastery: anomalyMastery,
        anomalyRate: anomalyRate,
        penRatio: baseStats.penRatio,
        energyRegen: energyRegen,

        buffedStat: buffedStat,
        bonusValue: bonusValue.toFixed(2) // Para mostrar en el tooltip si es necesario
    };
};
