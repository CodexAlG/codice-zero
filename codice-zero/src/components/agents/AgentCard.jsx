import Image from "next/image";
import { memo } from 'react';

// Helper para normalizar nombres de archivos (quitar tildes, mantener capitalización)
const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

const AgentCard = memo(({ agent }) => {
  // Ruta del nuevo icono de rango (Igual que en armas)
  const rankIconPath = `/CodiceZero/Rango/Icon_Item_Rank_${agent.rank}.webp`;

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
    <div className="group relative w-full max-w-[280px] mx-auto aspect-[3/4] bg-gray-900 overflow-hidden transition-none hover:scale-[1.02] hover:shadow-xl" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>

      {/* 1. IMAGEN DEL PERSONAJE */}
      <Image
        src={agent.image}
        alt={agent.name}
        fill
        className={`object-cover z-0 ${agent.customStyle || "object-top group-hover:scale-110"}`}
        sizes="(max-width: 768px) 50vw, 20vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none" />

      {/* 2. TOP LEFT: RANGO (Icono Nuevo) */}
      <div className="absolute top-2 left-2 z-20 filter drop-shadow-lg">
        <Image 
          src={rankIconPath} 
          alt={`Rango ${agent.rank}`} 
          width={40} height={40} 
          className="object-contain"
          unoptimized
        />
      </div>

      {/* 3. LEAK WARNING ICON - Solo para agentes con leak que contenga "Beta" */}
      {agent.leak && agent.leak.includes("Beta") && (
        <div className="absolute top left z-30 filter drop-shadow-lg">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* 4. TOP RIGHT: ELEMENTO & ROL */}
      <div className="absolute top-2 right-2 flex flex-col items-end gap-1 z-20">
        
        {/* Elemento con Aura */}
        <div className="relative w-9 h-9 z-10">
          <div className={`absolute inset-0 blur-md rounded-full opacity-90 ${
              agent.element === 'Fuego' ? 'bg-red-600' : 
              agent.element === 'Hielo' ? 'bg-cyan-500' : 
              agent.element === 'Electrico' ? 'bg-blue-600' : 
              agent.element === 'Fisico' ? 'bg-yellow-500' : 'bg-pink-600'
          }`}></div>
          <div className="relative w-9 h-9 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <Image 
              src={getElementIcon(agent)} 
              alt={agent.element} 
              width={36} height={36} 
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Rol (Icono Blanco Limpio debajo del elemento) */}
        <div 
          className="relative w-6 h-6 flex items-center justify-center filter drop-shadow-[0_0_2px_rgba(0,0,0,1)] mt-1"
          title={agent.rol}
        >
          <Image 
            src={`/CodiceZero/Agentes/Rol/${normalize(agent.rol)}.webp`} 
            alt={agent.rol} 
            width={24} height={24} 
            className="object-contain invert opacity-100" 
            unoptimized
          />
        </div>
      </div>

      {/* 5. INFO INFERIOR (Nombre y Facción) */}
      <div className="absolute bottom-3 left-3 z-20 pr-2">
        <h3 className="text-white font-display font-bold text-lg uppercase tracking-wider leading-none group-hover:text-yellow-400 transition-colors">
          {agent.name}
        </h3>
        <div className={`h-0.5 w-8 mt-1 mb-1 ${agent.rank === 'S' ? 'bg-yellow-500' : 'bg-purple-500'}`} />
        <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest truncate max-w-[120px]">
          {agent.faction}
        </p>
      </div>

      {/* Borde Hover */}
      <div className={`absolute inset-0 border-2 pointer-events-none z-30 transition-all duration-300 ${
        agent.rank === 'S' 
          ? "border-yellow-500/0 group-hover:border-yellow-500/60 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]" 
          : "border-purple-500/0 group-hover:border-purple-500/60 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
      }`} />
    </div>

  );
});

AgentCard.displayName = 'AgentCard';

export default AgentCard;