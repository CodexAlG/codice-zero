'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TriangleAlert } from 'lucide-react';
import { agents } from '@/data/agents';
import { getAgentDetails } from '@/data/agentDetails/';
import { calculateStatsWithCore } from '@/utils/statCalculator';
import StatsTable from '@/components/agents/StatsTable';
import AscensionMaterials from '@/components/agents/AscensionMaterials';
import HighlightText from '@/components/ui/HighlightText'; // Import directly here

export default function AgentDetailPage() {
  const params = useParams();
  const router = useRouter();

  const agentId = parseInt(params.id);
  const agent = agents.find(a => a.id === agentId);

  // Helper: Get Full Image
  const getAgentFullImage = (agent) => {
    const imageMap = {
      47: "/CodiceZero/Agentes/YeShunguang.webp",
      46: "/CodiceZero/Agentes/Zhao.webp",
      45: "/CodiceZero/Agentes/Banyue.webp",
      44: "/CodiceZero/Agentes/Dialyn.webp",
      43: "/CodiceZero/Agentes/Yidhari.png",
      42: "/CodiceZero/Agentes/Lucia.webp",
      41: "/CodiceZero/Agentes/Manato.png",
      40: "/CodiceZero/Agentes/Orphie.webp",
      39: "/CodiceZero/Agentes/Seed.webp",
      38: "/CodiceZero/Agentes/Alice.webp",
      37: "/CodiceZero/Agentes/Yuzuha.webp",
      36: "/CodiceZero/Agentes/Jufufu.webp",
      35: "/CodiceZero/Agentes/Yixuan.webp",
      34: "/CodiceZero/Agentes/Pan.webp",
      33: "/CodiceZero/Agentes/Hugo.webp",
      32: "/CodiceZero/Agentes/Vivian.webp",
      31: "/CodiceZero/Agentes/Trigger.webp",
      30: "/CodiceZero/Agentes/Sanby.webp",
      29: "/CodiceZero/Agentes/Pulchra.webp",
      27: "/CodiceZero/Agentes/Astra.webp",
      28: "/CodiceZero/Agentes/Evelyn.webp",
      26: "/CodiceZero/Agentes/Miyabi.webp",
      25: "/CodiceZero/Agentes/Harumasa.webp",
      23: "/CodiceZero/Agentes/Yanagi.webp",
      24: "/CodiceZero/Agentes/Lighter.webp",
      22: "/CodiceZero/Agentes/Burnice.webp",
      21: "/CodiceZero/Agentes/Caesar.webp",
      10: "/CodiceZero/Agentes/Jane.webp",
      9: "/CodiceZero/Agentes/Qingyi.webp",
      20: "/CodiceZero/Agentes/Seth.webp",
      2: "/CodiceZero/Agentes/ZhuYuan.webp",
      1: "/CodiceZero/Agentes/Ellen.webp",
      3: "/CodiceZero/Agentes/Lycaon.webp",
      5: "/CodiceZero/Agentes/S11.webp",
      4: "/CodiceZero/Agentes/Koleda.webp",
      6: "/CodiceZero/Agentes/Rina.webp",
      7: "/CodiceZero/Agentes/Grace.webp",
      8: "/CodiceZero/Agentes/Nekomiya.webp",
      18: "/CodiceZero/Agentes/Lucy.webp",
      19: "/CodiceZero/Agentes/Piper.webp",
      15: "/CodiceZero/Agentes/Soukaku.webp",
      12: "/CodiceZero/Agentes/Nicole.webp",
      11: "/CodiceZero/Agentes/Anby.webp",
      13: "/CodiceZero/Agentes/Billy.webp",
      14: "/CodiceZero/Agentes/Corin.webp",
      16: "/CodiceZero/Agentes/Ben.webp",
      17: "/CodiceZero/Agentes/Anton.webp"
    };
    return imageMap[agent.id] || agent.image;
  };

  const agentFullImage = getAgentFullImage(agent);

  // States
  const [level, setLevel] = useState(60);
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load details
  useEffect(() => {
    async function loadDetails() {
      setIsLoading(true);
      const data = await getAgentDetails(agentId);
      setDetails(data);
      setIsLoading(false);
    }
    loadDetails();
  }, [agentId]);

  // Skill Icons Mapping
  const skillIcons = {
    "Ataque Básico": "/CodiceZero/Habilidades/Icon_Basic_Attack.webp",
    "Ataque Normal": "/CodiceZero/Habilidades/Icon_Basic_Attack.webp",
    "Ataque": "/CodiceZero/Habilidades/Icon_Basic_Attack.webp",
    "Evasión": "/CodiceZero/Habilidades/Icon_Dodge.webp",
    "Asistencia": "/CodiceZero/Habilidades/Icon_Assist_Attack.png",
    "Técnica Especial": "/CodiceZero/Habilidades/Icon_Special_Attack.webp",
    "Habilidad Especial": "/CodiceZero/Habilidades/Icon_Special_Attack.webp",
    "Técnica Especial EX": "/CodiceZero/Habilidades/Icon_EX_Special_Attack.webp",
    "Habilidad Especial EX": "/CodiceZero/Habilidades/Icon_EX_Special_Attack.webp",
    "Técnica Definitiva": "/CodiceZero/Habilidades/Icon_Ultimate_Colored.webp",
    "Definitiva": "/CodiceZero/Habilidades/Icon_Ultimate_Colored.webp",
    "Pasiva Central": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    "Pasiva": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
  };

  if (!agent) {
    return <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">Agente no encontrado</div>;
  }

  // --- THEME & COLORS ---
  const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
  const elementColors = {
    "fuego": "#ef4444",
    "hielo": "#22d3ee",
    "electrico": "#3b82f6",
    "fisico": "#eab308",
    "etereo": "#d946ef",
  };
  const themeColor = elementColors[normalize(agent.element).toLowerCase()] || "#eab308";

  // --- STATS CALCULATION ---
  const calculateCurrentStats = () => {
    if (!details?.baseStats) return {};
    const baseStatsForCalc = { ...details.baseStats }; // Shallow copy ok
    return calculateStatsWithCore(baseStatsForCalc, level, details.coreStats);
  };
  const currentStats = calculateCurrentStats();


  // --- LAYOUT ---
  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30">

      {/* 1. SECCIÓN SUPERIOR: HERO + STATS (2 Columnas) */}
      <div className="relative w-full max-w-[1600px] mx-auto p-4 lg:p-12 pb-0 flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-screen lg:min-h-[90vh]">

        {/* BOTÓN VOLVER */}
        <Link href="/personajes" className="absolute top-4 left-4 z-50 p-2 bg-black/50 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-6 h-6 text-white" />
        </Link>

        {/* COLUMNA IZQUIERDA: IMAGEN (Sticky en Desktop) */}
        <div className="w-full lg:w-[45%] h-[60vh] lg:h-[85vh] sticky top-0 flex items-center justify-center z-10">
          <div className="relative w-full h-full">
            {/* Fondo Decorativo detrás de la imagen */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] opacity-20 blur-[100px] rounded-full pointer-events-none"
              style={{ backgroundColor: themeColor }}
            ></div>

            <Image
              src={agentFullImage}
              alt={agent.name}
              fill
              className="object-contain drop-shadow-2xl animate-slideUp"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* COLUMNA DERECHA: INFO + STATS */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center animate-fadeIn delay-100 z-20 bg-transparent">

          {/* Header Info */}
          <div className="mb-10 text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-2 opacity-60">
              <Image src={`/CodiceZero/Agentes/Faction/Faction_${agent.faction.replace(/ /g, "_")}_Icon.webp`} width={24} height={24} alt={agent.faction} className="opacity-80" unoptimized onError={(e) => e.target.style.display = 'none'} />
              <span className="font-mono text-sm uppercase tracking-[0.2em]">{agent.faction}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-lg">
              {agent.name}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <span className={`px-3 py-1 bg-black/40 border border-white/10 rounded text-sm font-bold uppercase flex items-center gap-2 ${agent.rank === 'S' ? 'text-yellow-400 border-yellow-400/30' : 'text-purple-400 border-purple-400/30'}`}>
                Rank {agent.rank}
              </span>
              <span className="px-3 py-1 bg-black/40 border border-white/10 rounded text-sm font-bold uppercase flex items-center gap-2" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
                <Image src={`/CodiceZero/Agentes/Elemento/${normalize(agent.element)}.webp`} width={16} height={16} alt={agent.element} unoptimized onError={(e) => e.target.style.display = 'none'} />
                {agent.element}
              </span>
              <span className="px-3 py-1 bg-black/40 border border-white/10 rounded text-sm font-bold uppercase text-gray-300 flex items-center gap-2">
                <Image src={`/CodiceZero/Agentes/Rol/${normalize(agent.rol)}.webp`} width={16} height={16} alt={agent.rol} className="invert" unoptimized />
                {agent.rol}
              </span>
              {agent.leak === "Beta" && (
                <span className="px-3 py-1 bg-red-500/10 border border-red-500/50 rounded text-sm font-bold uppercase text-red-500 flex items-center gap-2">
                  <TriangleAlert size={14} /> Beta
                </span>
              )}
            </div>
          </div>

          {/* Aviso Beta */}
          {agent.leak === "Beta" && (
            <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3">
              <TriangleAlert className="text-yellow-500 mt-1 flex-shrink-0" />
              <p className="text-yellow-200/80 text-sm leading-relaxed">
                Este personaje se encuentra en fase Beta. Sus estadísticas y habilidades están sujetas a cambios antes del lanzamiento oficial.
              </p>
            </div>
          )}

          {/* Panel de Estadísticas Estilo "Hakush" (Tarjeta Oscura con Datos) */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>

            {/* Sub-Header: Materiales */}
            <div className="mb-8 space-y-6">
              <div>
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Materiales de Ascensión</h3>
                <AscensionMaterials level={level} agentRole={agent.rol} themeColor={themeColor} />
              </div>
              <div>
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Materiales de Habilidad</h3>
                {/* Only show if details loaded to prevent layout shift or empty states if tied to logic */}
                <SkillMaterials agentElement={agent.element} themeColor={themeColor} materials={details?.materials} />
              </div>
            </div>

            {/* Control de Nivel + Stats */}
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <h3 className="text-xl font-display italic font-bold">ATRIBUTOS BASE</h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-gray-400">Nv.{level}</span>
                  <input
                    type="range" min="1" max="60" value={level}
                    onChange={(e) => setLevel(Number(e.target.value))}
                    className="w-32 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>
              </div>

              {/* Tabla de Stats */}
              {isLoading ? (
                <div className="h-40 flex items-center justify-center text-gray-600">Cargando datos...</div>
              ) : (
                <StatsTable currentStats={currentStats} themeColor={themeColor} agentRole={agent.rol} />
              )}
            </div>

            {/* Barra Decorativa Inferior */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

        </div>
      </div>

      {/* 2. SECCIÓN INFERIOR: HABILIDADES (Scroll Vertical Completo) */}
      <div className="relative w-full max-w-[1200px] mx-auto p-4 lg:p-12 pt-12 lg:pt-0">

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-white/20 flex-1"></div>
          <h2 className="text-3xl font-display italic font-bold text-center tracking-widest">HABILIDADES DE COMBATE</h2>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        {/* Lista de Habilidades "Wiki Style" */}
        <div className="flex flex-col gap-12 text-left">
          {details?.skills?.map((skill, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 group">

              {/* Columna Izquierda: Icono y Tipo (Sticky relative to section) */}
              <div className="w-full md:w-1/4 flex flex-row md:flex-col items-center md:items-start gap-4 flex-shrink-0">
                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center border border-white/10 shadow-lg group-hover:border-white/30 transition-colors">
                  <Image
                    src={skillIcons[skill.type] || skillIcons["Ataque"]}
                    alt={skill.type}
                    width={40} height={40}
                    className="object-contain opacity-80 group-hover:opacity-100"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{skill.type}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{skill.name}</h3>
                </div>
              </div>

              {/* Columna Derecha: Descripción Detallada */}
              <div className="w-full md:w-3/4 bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                {/* Accento de color lateral basado en elemento */}
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: themeColor }}></div>

                <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4 font-sans">
                  {/* Usamos el componente HighlightText para procesar la descripción rica */}
                  <HighlightText
                    text={skill.description}
                    skills={details.skills}
                    skillIcons={skillIcons}
                    elementColor={themeColor}
                  />
                </div>

                {/* Matriz de Multiplicadores (Si existe) */}
                {skill.attributes && skill.attributes.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="text-xs font-mono text-gray-500 uppercase mb-4">Atributos de Habilidad (Nv. Max)</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {skill.attributes.map((attr, idx) => (
                        <div key={idx} className="bg-white/5 p-3 rounded-lg text-center">
                          <div className="text-xs text-gray-400 mb-1">{attr.label}</div>
                          <div className="text-sm font-bold text-white font-mono">
                            {/* Mostrar último valor para "Wiki View" por defecto o rango */}
                            {attr.values[attr.values.length - 1]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Espaciador Final */}
        <div className="h-32"></div>
      </div>

    </div>
  );
}
