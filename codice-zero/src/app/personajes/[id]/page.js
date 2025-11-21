'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { agents } from '@/data/agents';
import { agentDetails } from '@/data/agentDetails';
import { calculateStatsWithCore } from '@/utils/statCalculator';
import SkillsModule from '@/components/agents/SkillsModule';
import StatsTable from '@/components/agents/StatsTable';

export default function AgentDetailPage() {
  // 1. PRIMERO: Definir params y encontrar el agente
  const params = useParams();
  const agentId = parseInt(params.id);
  const agent = agents.find(a => a.id === agentId);

  // 2. SEGUNDO: Hooks de estado
  const [activeTab, setActiveTab] = useState("stats"); // Pestañas: 'stats', 'skills', 'equip'
  const [level, setLevel] = useState(1); // Nivel del personaje
  const [selectedSkill, setSelectedSkill] = useState(null); // Habilidad seleccionada

  // 3. TERCERO: Validar si existe (Return temprano)
  if (!agent) {
    return (
      <div className="fixed inset-0 bg-gray-950 text-white flex items-center justify-center pl-20">
        <p className="text-2xl">Agente no encontrado</p>
      </div>
    );
  }

  // 4. CUARTO: Lógica que depende de 'agent' (Colores, Iconos)
  const details = agentDetails[agentId];

  // Helper de normalización
  const normalize = (str) => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

  // Mapa de Colores
  const elementColors = {
    "fuego": "#ef4444",    // Rojo
    "hielo": "#22d3ee",    // Cian
    "electrico": "#3b82f6", // Azul Puro
    "fisico": "#eab308",   // Amarillo Dorado
    "etereo": "#d946ef",   // Rosa/Magenta
  };
  const themeColor = elementColors[normalize(agent.element)] || "#facc15";

  // Mapeo de Iconos de Facción
  const factionIcons = {
    "Victoria Housekeeping": "/CodiceZero/Agentes/Faction/Faction_Victoria_Housekeeping_Co._Icon.webp",
    "Belobog Heavy Industries": "/CodiceZero/Agentes/Faction/Faction_Belobog_Heavy_Industries_Icon.webp",
    "Cunning Hares": "/CodiceZero/Agentes/Faction/Faction_Gentle_House_Icon.webp",
    "N.E.P.S.": "/CodiceZero/Agentes/Faction/Faction_Criminal_Investigation_Special_Response_Team_Icon.webp",
    "Section 6": "/CodiceZero/Agentes/Faction/Faction_Hollow_Special_Operations_Section_6_Icon.webp",
    "Obol Squad": "/CodiceZero/Agentes/Faction/Faction_Obol_Squad_Icon.webp",
    "Sons of Calydon": "/CodiceZero/Agentes/Faction/Faction_Sons_of_Calydon_Icon.webp",
    "Spook Shack": "/CodiceZero/Agentes/Faction/Faction_Spook_Shack_Icon.webp",
    "Mockingbird": "/CodiceZero/Agentes/Faction/Faction_Mockingbird_Icon.webp",
    "Yunkui Summit": "/CodiceZero/Agentes/Faction/Faction_Yunkui_Summit_Icon.webp"
  };
  const factionIconPath = factionIcons[agent.faction] || ""; // Fallback vacío si no encuentra

  // Lógica de Icono Especial (Miyabi/Yixuan/Etéreo)
  let elementIconPath = "";
  if (agent.name.includes("Miyabi")) {
     elementIconPath = "/CodiceZero/Agentes/Elemento/Icon_Frost.png";
  } else if (agent.name.includes("Yixuan")) {
     elementIconPath = "/CodiceZero/Agentes/Elemento/Icon_Auric_Ink.webp";
  } else {
     const iconMap = {
       "fuego": "Fuego.webp",
       "hielo": "Hielo.webp",
       "electrico": "Electrico.webp",
       "fisico": "Fisico.webp",
       "etereo": "Etéreo.webp"
     };
     elementIconPath = `/CodiceZero/Agentes/Elemento/${iconMap[normalize(agent.element)] || "Fisico.webp"}`;
  }

  // Calcular stats con Core
  const currentStats = details ? calculateStatsWithCore(details.baseStats, level, details.coreStats) : {};

  // Mapeo de iconos de habilidades
  const skillIcons = {
    "Basic": "/CodiceZero/Habilidades/Icon_Basic_Attack.webp",
    "Skill": "/CodiceZero/Habilidades/Icon_Special_Attack.webp",
    "Ultimate": "/CodiceZero/Habilidades/Icon_Ultimate_Colored.webp",
    "Assist": "/CodiceZero/Habilidades/Icon_Assist_Attack.png",
    "Chain": "/CodiceZero/Habilidades/Icon_Chain_Attack.webp",
    "Dodge": "/CodiceZero/Habilidades/Icon_Dodge.webp"
  };

  // Componente de Fila de Atributo
  const AttributeRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
      <span className="text-gray-400 text-sm font-medium">{label}</span>
      <span className="text-white text-sm font-bold font-mono">{value}</span>
    </div>
  );

  if (!details) {
    return (
      <div className="fixed inset-0 bg-gray-950 text-white flex items-center justify-center pl-20">
        <div className="text-center">
          <h1 className="text-4xl font-orbitron mb-4">{agent.name}</h1>
          <p className="text-xl text-yellow-400">Próximamente</p>
        </div>
      </div>
    );
  }

  // 5. QUINTO: Return del JSX
  return (
    <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-black text-white flex pl-20 overflow-hidden">
      
      {/* BOTÓN VOLVER - POSICION ABSOLUTA */}
      <Link 
        href="/personajes" 
        className="absolute top-4 left-20 z-50 inline-flex items-center text-gray-400 hover:text-white transition-colors bg-black/40 px-4 py-2 rounded-lg border border-white/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver
      </Link>

      {/* IZQUIERDA: 450px Fijos (Solo Imagen de Fondo) */}
      <div className="relative w-[450px] h-full border-r border-white/10 bg-black/20 flex-shrink-0">
        {/* Imagen de Fondo Limpia */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-gray-950 z-10"></div>
          <Image
            src={agent.image}
            alt={agent.name}
            fill
            className="object-contain object-top opacity-90"
            priority
          />
        </div>
        
        {/* TARJETA DE DETALLE DE HABILIDAD (Solo si hay una seleccionada) */}
        {activeTab === 'skills' && selectedSkill && (
          <div className="absolute bottom-0 left-0 w-full p-6 bg-black/80 backdrop-blur-xl border-t border-white/20 animate-slideUp z-30 max-h-[60%] overflow-y-auto scrollbar-hide">
             <h3 className="text-2xl font-display text-yellow-400 mb-2">{selectedSkill.name}</h3>
             <div className="flex flex-wrap gap-2 mb-4">
                {selectedSkill.tags && selectedSkill.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded uppercase">{tag}</span>
                ))}
             </div>
             <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">{selectedSkill.description}</p>
             
             {/* Tabla de Multiplicadores (Si existe) */}
             {selectedSkill.attributes && (
                <div className="mt-4 pt-4 border-t border-white/10">
                   <div className="grid grid-cols-2 gap-2 text-sm">
                     {Object.entries(selectedSkill.attributes).map(([key, value]) => (
                       <div key={key} className="flex justify-between">
                         <span className="text-gray-400">{key}:</span>
                         <span className="text-white font-mono">{value}</span>
                       </div>
                     ))}
                   </div>
                </div>
             )}
          </div>
        )}
      </div>

      {/* ZONA DERECHA (Panel HUD) */}
      <div className="flex-1 flex flex-col h-full pt-12 pr-12 pb-8 relative z-20">
        
        {/* --- BLOQUE 1: HEADER INFO (Compacto) --- */}
        <div className="mb-4 flex flex-col items-start max-w-xl animate-slideInRight">
          
          {/* Facción con Icono */}
          <div className="flex items-center gap-2 mb-1 opacity-80">
            {factionIconPath && (
              <div className="relative w-6 h-6">
                <Image src={factionIconPath} alt={agent.faction} fill className="object-contain" />
              </div>
            )}
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-yellow-500">
              {agent.faction}
            </span>
          </div>

          {/* Nombre */}
          <h1 className="font-display text-6xl uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] mb-3 leading-none">
            {agent.name}
          </h1>

          {/* Metadata Chips - Neon Border Style */}
          <div className="flex gap-3">
             {/* Chip: Rango */}
             <div className="flex items-center bg-black border border-yellow-500/50 px-3 py-1 rounded">
                <div className="flex items-center gap-2">
                   <Image src={`/CodiceZero/Rango/Icon_Item_Rank_${agent.rank}.webp`} alt={agent.rank} width={24} height={24} />
                   <span className={`font-bold text-xs uppercase tracking-wider ${agent.rank === 'S' ? 'text-orange-400' : 'text-purple-400'}`}>{agent.rank} RANK</span>
                </div>
             </div>

             {/* Chip: Elemento */}
             <div className="flex items-center bg-black border px-3 py-1 rounded" style={{ borderColor: themeColor }}>
                <div className="flex items-center gap-2">
                   <Image src={elementIconPath} alt={agent.element} width={20} height={20} />
                   <span className="font-bold text-xs uppercase tracking-wider" style={{ color: themeColor }}>{agent.element}</span>
                </div>
             </div>

             {/* Chip: Rol */}
             <div className="flex items-center bg-black border border-cyan-500/50 px-3 py-1 rounded">
                <div className="flex items-center gap-2">
                   <Image src={`/CodiceZero/Agentes/Rol/${normalize(agent.rol)}.webp`} alt={agent.rol} width={18} height={18} className="invert" />
                   <span className="font-bold text-xs uppercase tracking-wider text-cyan-400">{agent.rol}</span>
                </div>
             </div>
          </div>
        </div>

        {/* DERECHA: PANEL GRANDE CON ESPACIO */}
        <div className="flex-1 flex flex-col justify-center pr-12 pl-12 z-20 h-full">
          
          {/* Contenedor Principal - Tech HUD Style */}
          <div className="relative w-full bg-gray-950/80 border border-white/10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl group hover:border-yellow-500/50 transition-all duration-300 p-8 flex flex-col gap-6 max-h-[85vh]">
            
            {/* Header + Slider */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h2 className="text-2xl font-display text-yellow-400 uppercase italic">Atributos Base</h2>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-gray-400">Nv.{level}/60</span>
                <input 
                  type="range" 
                  min="1" 
                  max="60" 
                  value={level} 
                  onChange={(e) => setLevel(Number(e.target.value))}
                  className="w-48 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400" 
                />
              </div>
            </div>

            {/* Contenido - Stats Table Compact */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-1 text-sm overflow-y-auto pr-2 scrollbar-hide font-mono">
              <StatsTable details={details} level={level} />
            </div>

          </div>

          {/* Navegación Centrada */}
          <div className="mt-4 flex justify-center gap-6">
            {['stats', 'skills', 'equip'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab !== 'skills') setSelectedSkill(null);
                }}
                className={`px-6 py-2 uppercase font-display tracking-widest border-b-2 transition-all ${
                  activeTab === tab 
                    ? "border-yellow-400 text-yellow-400" 
                    : "border-transparent text-gray-500 hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                {tab === 'stats' ? "Atributos" : tab === 'skills' ? "Habilidades" : "Equipo"}
              </button>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
}
