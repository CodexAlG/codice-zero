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
    <div className="fixed inset-0 bg-gray-950 text-white flex pl-20 overflow-hidden">
      
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
          <h1 className="text-6xl font-display font-black italic text-white drop-shadow-lg mb-3 leading-none transform -skew-x-6">
            {agent.name}
          </h1>

          {/* Metadata Chips */}
          <div className="flex gap-3">
             {/* Chip: Rango */}
             <div className="flex items-center bg-black/60 border border-white/10 px-3 py-1 rounded skew-x-[-10deg]">
                <div className="skew-x-[10deg] flex items-center gap-2">
                   <Image src={`/CodiceZero/Rango/Icon_Item_Rank_${agent.rank}.webp`} alt={agent.rank} width={24} height={24} />
                   <span className={`font-bold text-lg ${agent.rank === 'S' ? 'text-orange-400' : 'text-purple-400'}`}>{agent.rank} RANK</span>
                </div>
             </div>

             {/* Chip: Elemento */}
             <div className="flex items-center bg-black/60 border border-white/10 px-3 py-1 rounded skew-x-[-10deg]" style={{ borderColor: themeColor }}>
                <div className="skew-x-[10deg] flex items-center gap-2">
                   <Image src={elementIconPath} alt={agent.element} width={20} height={20} />
                   <span className="font-bold text-sm uppercase" style={{ color: themeColor }}>{agent.element}</span>
                </div>
             </div>

             {/* Chip: Rol */}
             <div className="flex items-center bg-black/60 border border-white/10 px-3 py-1 rounded skew-x-[-10deg]">
                <div className="skew-x-[10deg] flex items-center gap-2">
                   <Image src={`/CodiceZero/Agentes/Rol/${normalize(agent.rol)}.webp`} alt={agent.rol} width={18} height={18} className="invert" />
                   <span className="font-bold text-sm uppercase text-gray-300">{agent.rol}</span>
                </div>
             </div>
          </div>
        </div>

        {/* --- PANEL DE CONTENIDO (Caja de Cristal) --- */}
        <div className="flex-1 bg-gray-900/70 border border-white/10 rounded-tr-3xl rounded-bl-3xl p-8 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col relative">
          
          {/* Decoración de esquinas */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-500/50 rounded-tr-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-yellow-500/50 rounded-bl-3xl pointer-events-none"></div>

          {/* Header del Panel (Título de Pestaña) */}
          <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-4">
            <h2 className="text-3xl font-display text-white uppercase italic tracking-wide flex items-center gap-3">
              <span className="w-3 h-3 bg-yellow-500 rotate-45"></span>
              {activeTab === 'stats' && "Atributos"}
              {activeTab === 'skills' && "Habilidades"}
              {activeTab === 'equip' && "Equipamiento"}
            </h2>
            
            {/* Slider de Nivel Integrado (Solo en Stats) */}
            {activeTab === 'stats' && (
              <div className="flex flex-col items-end">
                <span className="text-xs font-mono text-gray-400 mb-1">NIVEL DE AGENTE</span>
                <div className="flex items-center gap-3">
                  <input 
                    type="range" min="1" max="60" value={level} 
                    onChange={(e) => setLevel(Number(e.target.value))}
                    className="w-48 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                  <span className="font-mono font-bold text-yellow-400 text-lg w-12 text-right">Nv.{level}</span>
                </div>
              </div>
            )}
          </div>

          {/* ÁREA DE SCROLL DEL CONTENIDO */}
          <div className="flex-1 overflow-y-auto scrollbar-hide pr-2">
             {/* Aquí se renderiza el contenido condicional (Stats, Skills, etc.) */}
             {activeTab === 'stats' && (
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 animate-fadeIn">
                   {/* Stats Grid */}
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
             )}
             {activeTab === 'skills' && (
                <div className="flex flex-col justify-center items-center gap-8 animate-fadeIn">
                   {/* Título */}
                   <h2 className="text-xl font-mono text-gray-400 uppercase tracking-widest">Selecciona una Habilidad</h2>
                   
                   {/* Grid de Iconos de Habilidades */}
                   <div className="flex gap-4 flex-wrap justify-center">
                      {details?.skills?.map((skill, index) => (
                        <button 
                          key={index}
                          onClick={() => setSelectedSkill(skill)}
                          className={`w-20 h-20 rounded-xl border-2 flex items-center justify-center transition-all duration-300 group ${
                            selectedSkill === skill 
                              ? "border-yellow-400 bg-yellow-400/20 shadow-[0_0_20px_rgba(250,204,21,0.4)] scale-110" 
                              : "border-white/20 bg-black/40 hover:border-white/50 hover:bg-white/5"
                          }`}
                        >
                          {/* Icono de la habilidad */}
                          <Image 
                            src={skillIcons[skill.type] || "/CodiceZero/Habilidades/Icon_Basic_Attack.webp"} 
                            alt={skill.type} 
                            width={48} height={48} 
                            className={`object-contain transition-transform ${selectedSkill === skill ? "scale-110" : "group-hover:scale-110"}`}
                          />
                        </button>
                      ))}
                   </div>
                   
                   {/* Nodos de Core (A-F) */}
                   <div className="flex gap-2 mt-8">
                      {['A', 'B', 'C', 'D', 'E', 'F'].map((node) => (
                        <div key={node} className="w-12 h-12 rounded-full border-2 border-white/20 bg-black/40 flex items-center justify-center text-white font-bold">
                          {node}
                        </div>
                      ))}
                   </div>
                </div>
             )}
             {activeTab === 'equip' && (
                <div className="animate-fadeIn">
                   {/* Armas Recomendadas */}
                   <div className="mb-6">
                     <h3 className="text-lg font-bold text-white mb-4">Armas Recomendadas</h3>
                     <div className="p-4 bg-black/40 rounded border border-white/10">
                       <p className="text-gray-400">Próximamente: Sistema de armas recomendadas</p>
                     </div>
                   </div>

                   {/* Discos */}
                   <div>
                     <h3 className="text-lg font-bold text-white mb-4">Discos</h3>
                     <div className="p-4 bg-black/40 rounded border border-white/10">
                       <p className="text-gray-400">Próximamente: Sistema de discos</p>
                     </div>
                   </div>
                </div>
             )}
          </div>
        </div>

        {/* --- BARRA DE NAVEGACIÓN (Tabs Abajo) --- */}
        <div className="mt-4 flex justify-center gap-6 w-full">
          {['stats', 'skills', 'equip'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (tab !== 'skills') setSelectedSkill(null); // Clear skill selection when switching tabs
              }}
              className={`
                px-8 py-2 rounded-sm font-display font-bold italic uppercase tracking-wider transition-all duration-200
                ${activeTab === tab 
                  ? "bg-yellow-400 text-black border-b-4 border-yellow-600 translate-y-[-2px]" 
                  : "bg-black/40 text-gray-500 border border-white/10 hover:bg-white/10 hover:text-white"}
              `}
            >
              {tab === 'stats' ? "Atributos" : tab === 'skills' ? "Habilidades" : "Equipo"}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
