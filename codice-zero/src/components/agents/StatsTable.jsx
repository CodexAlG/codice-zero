export default function StatsTable({ currentStats, themeColor, agentRole }) {
  // Componente de Fila de Atributo - Tech Style con mejor legibilidad
  const AttributeRow = ({ label, value, highlight, bonusValue }) => {
    // Calcular el valor base (sin el bonus)
    const displayValue = value;
    const hasBonus = highlight && bonusValue > 0;
    
    return (
      <div className="flex justify-between items-center py-1 border-b border-white/5 last:border-0 group hover:bg-white/5 px-2 rounded transition-colors">
        <span className="text-gray-300 text-xs font-mono uppercase tracking-wide group-hover:text-white transition-colors">
          {label}
        </span>
        <span className="text-sm font-bold font-mono drop-shadow-sm text-white">
          {displayValue}
          {hasBonus && (
            <span 
              className="ml-1 font-bold"
              style={{ color: themeColor }}
            >
              {/* Mostrar el bonus con formato apropiado */}
              {` (+${
                typeof bonusValue === 'string' && bonusValue.includes('%') 
                  ? `${parseFloat(bonusValue).toFixed(1)}%` 
                  : typeof bonusValue === 'number' && bonusValue % 1 !== 0 
                    ? bonusValue.toFixed(2)
                    : Math.floor(bonusValue).toLocaleString()
              })`}
            </span>
          )}
        </span>
      </div>
    );
  };

  if (!currentStats) return null;

  return (
    <>
      <AttributeRow label="PV Base" value={currentStats.hp} highlight={currentStats.buffedStat === 'hp'} bonusValue={currentStats.bonusValue} />
      <AttributeRow label="Ataque Base" value={currentStats.atk} highlight={currentStats.buffedStat === 'atk'} bonusValue={currentStats.bonusValue} />
      <AttributeRow label="Defensa Base" value={currentStats.def} highlight={currentStats.buffedStat === 'def'} bonusValue={currentStats.bonusValue} />
      <AttributeRow label="Impacto Base" value={currentStats.impact} highlight={currentStats.buffedStat === 'impact'} bonusValue={currentStats.bonusValue} />
      {/* Fuerza Bruta - Solo para agentes de Ruptura */}
      {agentRole === "Ruptura" && currentStats.sheerForce && (
        <AttributeRow label="Fuerza Bruta" value={currentStats.sheerForce} highlight={currentStats.buffedStat === 'sheerForce'} bonusValue={currentStats.bonusValue} />
      )}
      <AttributeRow label="Prob. Crítico" value={currentStats.crit} highlight={currentStats.buffedStat === 'crit'} bonusValue={currentStats.bonusValue} />
      <AttributeRow label="Daño Crítico" value={currentStats.critDmg} highlight={currentStats.buffedStat === 'critDmg'} bonusValue={currentStats.bonusValue} />
      <AttributeRow label="Tasa de Anomalía" value={currentStats.anomalyRate} highlight={currentStats.buffedStat === 'anomalyRate'} bonusValue={currentStats.bonusValue} />
      <AttributeRow label="Maestría de Anomalía" value={currentStats.anomalyMastery} highlight={currentStats.buffedStat === 'anomalyMastery'} bonusValue={currentStats.bonusValue} />
      <AttributeRow label="Tasa de Perforación" value={currentStats.penRatio} highlight={currentStats.buffedStat === 'penRatio'} bonusValue={currentStats.bonusValue} />
      <AttributeRow label="Recup. de Energía" value={currentStats.energyRegen} highlight={currentStats.buffedStat === 'energyRegen'} bonusValue={currentStats.bonusValue} />
    </>
  );
}
