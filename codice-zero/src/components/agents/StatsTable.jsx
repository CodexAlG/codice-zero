export default function StatsTable({ currentStats, themeColor, agentRole }) {
  // Componente de Fila de Atributo - Mejorado para mostrar bonus inmediatamente
  const AttributeRow = ({ label, value, highlight, bonusValue }) => {
    const hasBonus = highlight && bonusValue > 0;
    
    // Extraer el valor numérico para mostrar el bonus inmediatamente
    const baseValue = value?.toString().replace(/[,+]/g, '');
    const bonusNum = parseFloat(bonusValue || 0);
    
    return (
      <div className="flex justify-between items-center py-1 border-b border-white/5 last:border-0 group hover:bg-white/5 px-2 rounded transition-all duration-200">
        <span className={`text-xs font-mono uppercase tracking-wide transition-colors ${
          hasBonus ? 'group-hover:text-white' : 'text-gray-300 group-hover:text-white'
        }`} style={{
          color: hasBonus ? themeColor : undefined
        }}>
          {label}
          {hasBonus && <span className="ml-1" style={{ color: themeColor }}>★</span>}
        </span>
        <span className="text-sm font-bold font-mono drop-shadow-sm">
          {hasBonus ? (
            // Mostrar valor total destacado cuando hay bonus
            <span className="flex items-center gap-1">
              <span 
                className="text-white transition-colors"
                style={{ 
                  textShadow: `0 0 8px ${themeColor}40`
                }}
              >
                {value}
              </span>
              <span 
                className="text-xs font-extrabold"
                style={{ 
                  color: themeColor,
                  textShadow: `0 0 4px ${themeColor}`,
                  filter: 'brightness(1.2)'
                }}
              >
                +{bonusNum % 1 !== 0 ? bonusNum.toFixed(1) : Math.floor(bonusNum).toLocaleString()}
                {typeof bonusValue === 'string' && bonusValue.includes('%') ? '%' : ''}
              </span>
            </span>
          ) : (
            // Valor normal sin bonus
            <span className="text-white">{value}</span>
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
