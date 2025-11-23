export default function StatsTable({ currentStats, themeColor, agentRole }) {
  // Componente de Fila de Atributo - Tech Style con mejor legibilidad
  const AttributeRow = ({ label, value, highlight }) => (
    <div className="flex justify-between items-center py-1 border-b border-white/5 last:border-0 group hover:bg-white/5 px-2 rounded transition-colors">
      <span className="text-gray-300 text-xs font-mono uppercase tracking-wide group-hover:text-white transition-colors">
        {label}
      </span>
      <span 
        className={`text-sm font-bold font-mono drop-shadow-sm transition-colors ${highlight ? '' : 'text-white'}`}
        style={highlight ? { color: themeColor } : {}}
      >
        {value}
      </span>
    </div>
  );

  if (!currentStats) return null;

  return (
    <>
      <AttributeRow label="PV Base" value={currentStats.hp} highlight={currentStats.buffedStat === 'hp'} />
      <AttributeRow label="Ataque Base" value={currentStats.atk} highlight={currentStats.buffedStat === 'atk'} />
      <AttributeRow label="Defensa Base" value={currentStats.def} highlight={currentStats.buffedStat === 'def'} />
      <AttributeRow label="Impacto Base" value={currentStats.impact} highlight={currentStats.buffedStat === 'impact'} />
      {/* Fuerza Bruta - Solo para agentes de Ruptura */}
      {agentRole === "Ruptura" && currentStats.sheerForce && (
        <AttributeRow label="Fuerza Bruta" value={currentStats.sheerForce} highlight={currentStats.buffedStat === 'sheerForce'} />
      )}
      <AttributeRow label="Prob. Crítico" value={currentStats.crit} highlight={currentStats.buffedStat === 'crit'} />
      <AttributeRow label="Daño Crítico" value={currentStats.critDmg} highlight={currentStats.buffedStat === 'critDmg'} />
      <AttributeRow label="Tasa de Anomalía" value={currentStats.anomalyRate} highlight={currentStats.buffedStat === 'anomalyRate'} />
      <AttributeRow label="Maestría de Anomalía" value={currentStats.anomalyMastery} highlight={currentStats.buffedStat === 'anomalyMastery'} />
      <AttributeRow label="Tasa de Perforación" value={currentStats.penRatio} highlight={currentStats.buffedStat === 'penRatio'} />
      <AttributeRow label="Recup. de Energía" value={currentStats.energyRegen} highlight={currentStats.buffedStat === 'energyRegen'} />
    </>
  );
}
