import { calculateStatsWithCore } from '@/utils/statCalculator';

export default function StatsTable({ details, level }) {
  // Componente de Fila de Atributo
  const AttributeRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
      <span className="text-gray-400 text-sm font-medium">{label}</span>
      <span className="text-white text-sm font-bold font-mono">{value}</span>
    </div>
  );

  // Calcular stats con Core
  const currentStats = details ? calculateStatsWithCore(details.baseStats, level, details.coreStats) : {};

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-4 animate-fadeIn">
      <AttributeRow label="PV Base" value={currentStats.hp} />
      <AttributeRow label="Ataque Base" value={currentStats.atk} />
      <AttributeRow label="Defensa Base" value={currentStats.def} />
      <AttributeRow label="Impacto Base" value={currentStats.impact} />
      <AttributeRow label="Prob. Crítico" value={details?.baseStats?.crit} />
      <AttributeRow label="Daño Crítico" value={details?.baseStats?.critDmg} />
      <AttributeRow label="Tasa de Anomalía" value={details?.baseStats?.anomalyRate} />
      <AttributeRow label="Maestría de Anomalía" value={details?.baseStats?.anomalyMastery} />
      <AttributeRow label="Tasa de Perforación" value={details?.baseStats?.penRatio} />
      <AttributeRow label="Recup. de Energía" value={details?.baseStats?.energyRegen} />
    </div>
  );
}
