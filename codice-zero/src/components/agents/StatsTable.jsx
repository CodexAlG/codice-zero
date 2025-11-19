import { getPromotionStats } from '@/utils/statCalculator';

export default function StatsTable({ baseStats }) {
  if (!baseStats) {
    return (
      <div className="text-center text-gray-400 p-4">
        No hay datos de estadísticas disponibles
      </div>
    );
  }

  const rows = getPromotionStats(baseStats);

  // Agrupar filas por nivel de promoción (2 filas por nivel)
  const groupedRows = [];
  for (let i = 0; i < rows.length; i += 2) {
    groupedRows.push({
      promo: rows[i].promo,
      rows: [rows[i], rows[i + 1]].filter(Boolean)
    });
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-yellow-400/50 text-sm text-center">
        <thead className="bg-yellow-400 text-black font-bold uppercase">
          <tr>
            <th className="p-2 border border-yellow-400/50">Nivel Promoción</th>
            <th className="p-2 border border-yellow-400/50">Nivel</th>
            <th className="p-2 border border-yellow-400/50">Base HP</th>
            <th className="p-2 border border-yellow-400/50">Base ATK</th>
            <th className="p-2 border border-yellow-400/50">Base DEF</th>
          </tr>
        </thead>
        <tbody className="text-gray-300 bg-gray-900/80">
          {groupedRows.map((group, groupIdx) => (
            group.rows.map((row, rowIdx) => (
              <tr key={`${groupIdx}-${rowIdx}`} className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors">
                {rowIdx === 0 && (
                  <td 
                    className="p-2 border border-yellow-400/30 bg-yellow-400/10 font-bold text-yellow-400" 
                    rowSpan={group.rows.length}
                  >
                    {group.promo}
                  </td>
                )}
                <td className="p-2 border border-gray-700/30 font-mono">{row.level}</td>
                <td className="p-2 border border-gray-700/30 font-mono text-green-400">{row.hp}</td>
                <td className="p-2 border border-gray-700/30 font-mono text-red-400">{row.atk}</td>
                <td className="p-2 border border-gray-700/30 font-mono text-blue-400">{row.def}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}
