import Image from "next/image";
import { memo } from 'react';

// Helper para normalizar nombres de archivos (quitar tildes, mantener capitalización)
const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

const AgentCard = memo(({ agent }) => {
  const rankColor = agent.rank === 'S' ? 'border-yellow-500' : agent.rank === 'A' ? 'border-purple-500' : 'border-blue-500';
  const rankIcon = `/CodiceZero/Rango/Icon_Item_Rank_${agent.rank}.webp`;

  // Función para obtener icono de elemento (con casos especiales si los hay)
  const getElementIcon = (agent) => {
    if (agent.name.includes("Miyabi")) return "/CodiceZero/Agentes/Elemento/Icon_Frost.png";
    if (agent.name.includes("Yixuan")) return "/CodiceZero/Agentes/Elemento/Icon_Auric_Ink.webp";
    if (agent.name.includes("Ye Shunguang")) return "/CodiceZero/Agentes/Elemento/IconHonedEdge.webp";

    const iconMap = {
      "fuego": "Fuego.webp",
      "hielo": "Hielo.webp",
      "electrico": "Electrico.webp",
      "fisico": "Fisico.webp",
      "etereo": "Etéreo.webp",
    };
    const normalizedElement = agent.element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return `/CodiceZero/Agentes/Elemento/${iconMap[normalizedElement] || "Fisico.webp"}`;
  };

  return (
    <div className={`relative w-full max-w-[160px] mx-auto aspect-[4/5] bg-gray-900/80 rounded-lg border-b-4 ${rankColor} overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-none`}>

      {/* Element Icon with Aura - Top Left */}
      <div className="absolute top-2 left-2 z-20">
        <div className="relative w-7 h-7">
          <div className={`absolute inset-0 blur-md rounded-full opacity-90 ${agent.element === 'Fuego' ? 'bg-red-600' :
              agent.element === 'Hielo' ? 'bg-cyan-500' :
                agent.element === 'Electrico' ? 'bg-blue-600' :
                  agent.element === 'Fisico' ? 'bg-yellow-500' : 'bg-pink-600'
            }`}></div>
          <div className="relative w-7 h-7 bg-black/60 rounded-md p-0.5 border border-white/10">
            <Image
              src={getElementIcon(agent)}
              alt={agent.element}
              width={24}
              height={24}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Rank Icon - Top Right */}
      <div className="absolute top-2 right-2 z-20">
        <Image
          src={rankIcon}
          alt={agent.rank}
          width={32}
          height={32}
          className="drop-shadow-md"
          unoptimized
        />
      </div>

      {/* Agent Icon */}
      <div className="absolute inset-0 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={agent.image}
          alt={agent.name}
          width={140}
          height={140}
          className="object-contain"
          unoptimized
        />
      </div>

      {/* LEAK WARNING ICON - Solo para agentes con leak que contenga "Beta" */}
      {agent.leak && agent.leak.includes("Beta") && (
        <div className="absolute top left z-30 filter drop-shadow-lg">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* Name */}
      <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black via-black/80 to-transparent pt-6">
        <h3 className="text-white font-bold text-xs text-center leading-tight group-hover:text-yellow-400">
          {agent.name}
        </h3>
      </div>
    </div>
  );
});

AgentCard.displayName = 'AgentCard';

export default AgentCard;