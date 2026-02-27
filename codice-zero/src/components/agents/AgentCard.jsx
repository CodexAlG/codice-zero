import Image from "next/image";
import { memo, useState } from 'react';
import SkeletonCard from '@/components/ui/SkeletonCard';

// Helper para normalizar nombres de archivos (quitar tildes, mantener capitalización)
const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

const AgentCard = memo(({ agent, priority = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const rankColor = agent.rank === 'S' ? 'border-yellow-500 border-b-yellow-500' : agent.rank === 'A' ? 'border-purple-500 border-b-purple-500' : 'border-blue-500 border-b-blue-500';
  const hoverGlow = agent.rank === 'S' ? 'hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]' : agent.rank === 'A' ? 'hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]' : 'hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]';
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
      "etereo": "Etereo.webp",
    };
    const normalizedElement = agent.element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return `/CodiceZero/Agentes/Elemento/${iconMap[normalizedElement] || "Fisico.webp"}`;
  };

  return (
    <div className={`relative w-full max-w-[140px] mx-auto aspect-[4/5] bg-[#0f0f12] rounded-xl border border-white/5 border-b-[3px] ${rankColor} overflow-hidden group hover:-translate-y-2 ${hoverGlow} transition-all duration-300 cursor-pointer will-change-transform`}>

      {/* Glow interactivo de fondo en hover */}
      <div className={`absolute -inset-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl pointer-events-none ${agent.element === 'Fuego' ? 'bg-red-500' :
        agent.element === 'Hielo' ? 'bg-cyan-500' :
          agent.element === 'Electrico' ? 'bg-blue-500' :
            agent.element === 'Fisico' ? 'bg-yellow-500' : 'bg-pink-500'
        }`}></div>

      {/* Element Icon with Aura - Top Left */}
      <div className="absolute top-1.5 left-1.5 z-20 flex flex-col gap-1">
        <div className="relative w-6 h-6 group/icon">
          <div className={`absolute inset-0 blur-md rounded-full opacity-70 group-hover/icon:opacity-100 transition-opacity ${agent.element === 'Fuego' ? 'bg-red-500' :
            agent.element === 'Hielo' ? 'bg-cyan-400' :
              agent.element === 'Electrico' ? 'bg-blue-500' :
                agent.element === 'Fisico' ? 'bg-yellow-400' : 'bg-pink-500'
            }`}></div>
          <div className="relative w-6 h-6 bg-black/40 backdrop-blur-sm rounded-lg p-0.5 border border-white/20 shadow-lg">
            <Image
              src={getElementIcon(agent)}
              alt={agent.element}
              width={20}
              height={20}
              className="object-contain drop-shadow-md"
              unoptimized
            />
          </div>
        </div>

        {/* Role Icon - Below Element - Matches Element Box Style */}
        <div className="relative w-6 h-6 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg group-hover:border-white/30 transition-colors">
          <Image
            src={`/CodiceZero/Agentes/Rol/${normalize(agent.rol)}.webp`}
            alt={agent.rol}
            width={16}
            height={16}
            className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            unoptimized
          />
        </div>
      </div>

      {/* Rank Icon - Top Right */}
      <div className="absolute top-1 right-1 z-20">
        <Image
          src={rankIcon}
          alt={agent.rank}
          width={22}
          height={22}
          className="drop-shadow-lg"
          unoptimized
        />
      </div>

      {/* Agent Icon - Cover para llenar mejor */}
      <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 z-10">

        {/* Skeleton Overlay - Visible until image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-10">
            <SkeletonCard aspectRatio="4/5" />
          </div>
        )}

        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          unoptimized
        />

        {/* Overlay con degradado sobre la imagen para resaltar texturas */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* LEAK WARNING ICON - Solo para agentes con leak que contenga "Beta" */}
      {agent.leak && agent.leak.includes("Beta") && (
        <div className="absolute top-1 left-9 z-30 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
          <div className="w-5 h-5 bg-red-600 border border-red-400/50 rounded-full flex items-center justify-center animate-pulse shadow-lg">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* Name - Text más grande */}
      <div className="absolute bottom-0 w-full p-3 pt-8 pb-3 bg-gradient-to-t from-[#09090b] via-black/80 to-transparent z-20">
        <h3 className="text-gray-200 font-bold text-xs text-center leading-tight group-hover:text-yellow-400 drop-shadow-md tracking-wide transition-colors duration-300">
          {agent.name}
        </h3>
      </div>
    </div>
  );
});

AgentCard.displayName = 'AgentCard';

export default AgentCard;