'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TriangleAlert } from 'lucide-react';
import { agents } from '@/data/agents';
import { getAgentDetails } from '@/data/agentDetails/';
import { calculateStatsWithCore } from '@/utils/statCalculator';
import StatsTable from '@/components/agents/StatsTable';
import AscensionMaterials from '@/components/agents/AscensionMaterials';
import SkillMaterials from '@/components/agents/SkillMaterials';
import { replaceIcons } from '@/components/utils/TextWithIcons';
import HighlightText from '@/components/ui/HighlightText'; // Import directly here



export default function AgentDetailPage() {
  const params = useParams();
  const router = useRouter();

  const agentId = parseInt(params.id);
  const agent = agents.find(a => a.id === agentId);

  // RETURN EARLY IF NO AGENT
  if (!agent) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white">
        Agente no encontrado
      </div>
    );
  }

  // Helper: Get Full Image
  const getAgentFullImage = (agent) => {
    const imageMap = {
      49: "/CodiceZero/Agentes/Sunna.webp",
      48: "/CodiceZero/Agentes/Aria.webp",
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
  const [coreSkillLevel, setCoreSkillLevel] = useState(0); // 0=Default, 1-6=A-F
  const [potentialLevel, setPotentialLevel] = useState(0); // 0-5
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSkillTab, setActiveSkillTab] = useState("basic");

  // Load details
  useEffect(() => {
    async function loadDetails() {
      setIsLoading(true);
      try {
        console.log("Fetching details for agent:", agentId);
        let data = await getAgentDetails(agentId);

        // Fallback: Try dynamic import if static lookup fails
        if (!data) {
          console.log("Static lookup failed, attempting dynamic import from /released/...");
          try {
            const module = await import(`@/data/agentDetails/released/agent-${agentId}.js`);
            data = module.default;
          } catch (e) {
            console.error("Dynamic import failed:", e);
          }
        }

        if (data) {
          setDetails(data);
        } else {
          console.error("No details found for agent:", agentId);
        }
      } catch (err) {
        console.error("Error in loadDetails:", err);
      } finally {
        setIsLoading(false);
      }
    }

    if (agentId) {
      loadDetails();
    }
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
    "Pasiva": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    "Potencial": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    "MINDSCAPE": "/CodiceZero/Habilidades/Icon_Core_Skill.webp", // Fallback for Mindscape tab icon
  };

  if (!agent) {
    return <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white">Agente no encontrado</div>;
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

  const getElementIcon = () => {
    const name = agent.name;
    if (name === "Miyabi") return "/CodiceZero/Agentes/Elemento/Icon_Frost.png";
    if (name === "Ye Shunguang") return "/CodiceZero/Agentes/Elemento/IconHonedEdge.webp";
    if (name === "Yixuan") return "/CodiceZero/Agentes/Elemento/Icon_Auric_Ink.webp";
    return `/CodiceZero/Agentes/Elemento/${normalize(agent.element)}.webp`;
  };
  const themeColor = elementColors[normalize(agent.element).toLowerCase()] || "#eab308";

  // --- STATS CALCULATION ---
  const calculateCurrentStats = () => {
    if (!details?.baseStats) return {};
    const baseStatsForCalc = { ...details.baseStats }; // Shallow copy ok
    return calculateStatsWithCore(baseStatsForCalc, level, details.coreStats);
  };
  const currentStats = calculateCurrentStats();


  // --- HELPER: Process Potential Scaling ---
  const processPotentialScaling = (text) => {
    if (!details?.potentialSkillScaling || !text) return text;
    // potentialLevel 0 = hidden/inactive. Levels 1-5 correspond to array indices 0-4.
    if (potentialLevel === 0) return text;

    const index = potentialLevel - 1;
    const currentScalingValues = details.potentialSkillScaling[index];
    if (!currentScalingValues) return text;

    // START: Custom Colors Logic (reuse core one or make new if needed)
    const scalingColors = details.potentialSkillScalingColors || [];

    return text.replace(/\{VALOR_(\d+)\}/g, (_, number) => {
      const valIndex = parseInt(number) - 1;
      const val = currentScalingValues[valIndex];

      if (val !== undefined) {
        if (scalingColors[valIndex]) {
          return `[CV="${scalingColors[valIndex]}"]${val}[/CV]`;
        }
        return `[VAL]${val}[/VAL]`;
      }
      return `{VALOR_${number}}`;
    });
  };

  // --- RENDER POTENTIAL FUNCTION ---
  const renderPotential = () => {
    if (!details?.potential) return null;
    const potentialLevels = ['0', '1', '2', '3', '4', '5'];

    const description = processPotentialScaling(details.potential.description);

    return (
      <div id="potential" className="relative w-full max-w-[1400px] mx-auto p-4 lg:p-12 pb-0">
        <div className="flex flex-col gap-4">
          {/* Header del Grupo */}
          <div className="flex items-center gap-3 pb-2 border-b border-white/10 justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                {/* Reuse Core Skill Icon for now or get a specific one */}
                <Image
                  src={skillIcons["Potencial"] || skillIcons["Pasiva Central"]}
                  alt="Potencial" width={20} height={20} className="object-contain opacity-80" unoptimized
                />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white/90">Potencial</h3>
            </div>

            {/* Selector de Nivel Para Potencial (Barra Deslizante) */}
            {details?.potentialSkillScaling && (
              <div className="flex flex-col w-48 lg:w-64 mr-2">
                <div className="relative h-6 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={potentialLevel}
                    onChange={(e) => setPotentialLevel(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white hover:bg-white/30 transition-colors"
                  />
                </div>
                <div className="flex justify-between px-1">
                  {potentialLevels.map((lvl, idx) => (
                    <span
                      key={lvl}
                      className={`text-[10px] font-mono font-bold transition-colors ${potentialLevel === idx ? 'text-white scale-125' : 'text-gray-600'}`}
                    >
                      {lvl}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contenido Potencial - Solo visible si Nivel > 0 */}
          {potentialLevel > 0 ? (
            <div className="bg-[#18181b] border border-white/5 rounded-xl p-5 hover:bg-white/[0.02] transition-colors relative overflow-hidden animate-fadeIn">
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: themeColor }}></div>
              <h4 className="text-lg font-bold text-white mb-2">{details.potential.name || "Sin nombre"}</h4>
              <div className="text-gray-300 text-sm leading-relaxed space-y-2 font-sans">
                <HighlightText text={replaceIcons(description)} skills={details.skills} skillIcons={skillIcons} elementColor={themeColor} />
              </div>
            </div>
          ) : (
            <div className="h-24 bg-[#18181b]/50 border border-white/5 rounded-xl flex items-center justify-center text-gray-600 italic border-dashed">
              Potencial inactivo
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- CONSTANTS: SKILL GROUPS ---
  const SKILL_GROUPS = [
    { id: 'basic', label: 'ATAQUE BÁSICO', keys: ['Ataque Básico', 'Ataque Normal'], icon: 'Ataque Básico' },
    { id: 'dodge', label: 'EVASIÓN', keys: 'Evasión', icon: 'Evasión' },
    { id: 'assist', label: 'ASISTENCIA', keys: 'Asistencia', icon: 'Asistencia' },
    { id: 'special', label: 'TÉCNICA ESPECIAL', keys: ['Técnica Especial', 'Técnica Especial EX', 'Habilidad Especial', 'Habilidad Especial EX'], icon: 'Técnica Especial' },
    { id: 'chain', label: 'TÉCNICA DEFINITIVA', keys: ['Técnica Definitiva', 'Definitiva'], icon: 'Técnica Definitiva' },
    { id: 'passive', label: 'TALENTO PASIVO', keys: ['Pasiva', 'Pasiva Central', 'Habilidad Adicional'], icon: 'Pasiva Central' },
    { id: 'mindscape', label: 'MINDSCAPE CINEMA', keys: 'Mindscape', icon: 'MINDSCAPE' },
  ];

  // --- RENDER GROUP FUNCTION (ADAPTED FOR TABS) ---
  const renderActiveTabContent = () => {
    const activeGroup = SKILL_GROUPS.find(g => g.id === activeSkillTab);
    if (!activeGroup) return null;

    const { keys, id } = activeGroup;

    // --- MINDSCAPE SPECIAL RENDERING ---
    if (id === 'mindscape') {
      const mindscapeSkills = (details?.skills || []).filter(s => {
        if (!s.type) return false;
        if (typeof s.type === 'string') return s.type.startsWith("Mindscape") || s.type.includes("Mindscape");
        if (Array.isArray(s.type)) return s.type.includes("Mindscape");
        return false;
      });

      if (mindscapeSkills.length === 0) {
        return (
          <div className="flex items-center justify-center p-12 border border-white/5 rounded-xl bg-[#18181b]/50 text-gray-500 italic">
            No hay Mindscapes disponibles.
          </div>
        );
      }

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {mindscapeSkills.map((skill, idx) => {
            const mindscapeNumber = Array.isArray(skill.type)
              ? (idx + 1)
              : skill.type.replace("Mindscape ", "").replace(/[^\d]/g, '') || (idx + 1);

            return (
              <div key={idx} className="bg-[#18181b] border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:border-white/20 transition-all h-full">
                {/* Número Grande de Fondo */}
                <div className="absolute -right-4 -bottom-4 text-9xl font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                  {mindscapeNumber}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 font-bold text-white shrink-0 z-10">
                    {mindscapeNumber}
                  </div>
                  <h4 className="text-xl font-bold text-white z-10">{skill.name || "Mindscape"}</h4>
                </div>

                <div className="text-gray-300 text-sm leading-relaxed relative z-10">
                  <HighlightText text={skill.description} skills={details.skills} skillIcons={skillIcons} elementColor={themeColor} />
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    // --- END MINDSCAPE SPECIAL RENDERING ---

    let groupSkills = [];
    if (Array.isArray(keys)) {
      keys.forEach(k => {
        const found = details?.skills?.filter(s => s.type === k) || [];
        groupSkills = [...groupSkills, ...found];
      });
    } else {
      groupSkills = details?.skills?.filter(s => s.type === keys) || [];
    }

    if (groupSkills.length === 0) {
      return (
        <div className="flex items-center justify-center p-12 border border-white/5 rounded-xl bg-[#18181b]/50 text-gray-500 italic">
          No hay habilidades disponibles en esta categoría.
        </div>
      );
    }

    // Check if this is the Passive Talent group
    const isPassiveGroup = id === 'passive';
    const coreLevels = ['0', 'A', 'B', 'C', 'D', 'E', 'F'];

    // Helper to process scaling
    const processScaling = (text) => {
      if (!details?.coreSkillScaling || !text) return text;
      const currentScalingValues = details.coreSkillScaling[coreSkillLevel];
      if (!currentScalingValues) return text;

      const scalingColors = details.coreSkillScalingColors || [];

      return text.replace(/\{VALOR_(\d+)\}/g, (_, number) => {
        const index = parseInt(number) - 1;
        const val = currentScalingValues[index];

        if (val !== undefined) {
          if (scalingColors[index]) {
            return `[CV="${scalingColors[index]}"]${val}[/CV]`;
          }
          return `[VAL]${val}[/VAL]`;
        }
        return `{VALOR_${number}}`;
      });
    };

    return (
      <div className="flex flex-col gap-6 animate-fadeIn">
        {/* Header Específico del Tab Activo (Opcional, ya está el Tab, pero útil para sliders) */}
        {isPassiveGroup && details?.coreSkillScaling && (
          <div className="flex justify-end mb-4">
            <div className="flex flex-col w-full max-w-xs p-4 bg-[#18181b] border border-white/10 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase text-gray-400">Nivel de Pasiva Central</span>
                <span className="text-sm font-bold text-white font-mono">{coreLevels[coreSkillLevel]}</span>
              </div>
              <div className="relative h-6 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="1"
                  value={coreSkillLevel}
                  onChange={(e) => setCoreSkillLevel(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white hover:bg-white/30 transition-colors"
                />
              </div>
              <div className="flex justify-between px-1 mt-1">
                {coreLevels.map((lvl, idx) => (
                  <span
                    key={lvl}
                    className={`text-[10px] font-mono font-bold transition-colors ${coreSkillLevel === idx ? 'text-white' : 'text-gray-600'}`}
                  >
                    {lvl}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* GRID HORIZONTAL DE HABILIDADES */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {groupSkills.map((skill, idx) => {
            const description = processScaling(skill.description);

            return (
              <div key={idx} className="bg-[#18181b] border border-white/5 rounded-xl p-6 hover:bg-white/[0.02] transition-colors relative overflow-hidden group h-full flex flex-col">
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: themeColor }}></div>

                <h4 className="text-lg font-bold text-white mb-3 pl-3">{skill.name || "Sin nombre"}</h4>

                <div className="text-gray-300 text-sm leading-relaxed space-y-2 font-sans flex-grow">
                  <HighlightText text={replaceIcons(description)} skills={details.skills} skillIcons={skillIcons} elementColor={themeColor} />
                </div>

                {/* Multiplicadores Compactos */}
                {skill.attributes && skill.attributes.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-2 gap-y-2 gap-x-4">
                    {skill.attributes.slice(0, 6).map((attr, aIdx) => (
                      <div key={aIdx} className="flex justify-between text-xs text-gray-500">
                        <span>{attr.label}</span>
                        <span className="font-mono text-gray-300">{attr.values[attr.values.length - 1]}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // --- LAYOUT ---
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-yellow-500/30">



      {/* AVISO BETA (Top of Page) */}
      {agent.leak === "Beta" && (
        <div className="w-full bg-yellow-500/10 border-b border-yellow-500/20 py-2 px-4 text-center z-50 relative">
          <p className="text-yellow-200/80 text-xs md:text-sm font-bold flex items-center justify-center gap-2">
            <TriangleAlert className="text-yellow-500 w-4 h-4" />
            Este personaje se encuentra en fase Beta. Stats y habilidades sujetas a cambios.
          </p>
        </div>
      )}

      {/* 1. SECCIÓN SUPERIOR: HERO + STATS (2 Columnas) */}
      <div className="relative w-full max-w-[1600px] mx-auto p-4 lg:p-8 pb-0 flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-screen lg:min-h-[85vh]">

        {/* BOTÓN VOLVER */}
        <Link href="/agentes" className="absolute top-4 left-4 z-50 p-2 bg-black/50 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
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
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-lg">
              {agent.name}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <span className={`px-3 py-1 bg-black/40 border border-white/10 rounded text-sm font-bold uppercase flex items-center gap-2 ${agent.rank === 'S' ? 'text-yellow-400 border-yellow-400/30' : 'text-purple-400 border-purple-400/30'}`}>
                Rank {agent.rank}
              </span>
              <span className="px-3 py-1 bg-black/40 border border-white/10 rounded text-sm font-bold uppercase flex items-center gap-2" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
                <Image src={getElementIcon()} width={16} height={16} alt={agent.element} unoptimized onError={(e) => e.target.style.display = 'none'} />
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

          {/* Aviso Beta REMOVED from here */}

          {/* Panel de Estadísticas Estilo "Hakush" (Tarjeta Oscura con Datos) */}
          <div id="stats" className="bg-[#18181b]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl relative overflow-hidden group max-w-[480px] mx-auto lg:mr-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>

            {/* Sub-Header: Materiales REMOVED */}


            {/* Control de Nivel + Stats */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <h3 className="text-lg font-display italic font-bold">ATRIBUTOS BASE</h3>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-gray-400">Nv.{level}</span>
                  <input
                    type="range" min="1" max="60" value={level}
                    onChange={(e) => setLevel(Number(e.target.value))}
                    className="w-24 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-white"
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

      {/* 2. SECCIÓN INTERMEDIA: MATERIALES (Grid 2 Columnas) */}
      {/* 2. SECCIÓN INTERMEDIA: MATERIALES (Flex Centrado) */}
      <div id="materials" className="relative w-full max-w-[1600px] mx-auto p-4 lg:p-8 pb-0 pt-8">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-24">

          {/* Bloque 1: Ascensión (Alineado a la derecha hacia el centro) */}
          <div className="flex flex-col items-center lg:items-end">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-6 text-center lg:text-right">Materiales de Ascensión</h3>
            <div className="flex justify-center lg:justify-end w-full">
              <AscensionMaterials level={level} agentRole={agent.rol} themeColor={themeColor} />
            </div>
          </div>

          {/* Bloque 2: Habilidades (Alineado a la izquierda desde el centro) */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-6 text-center lg:text-left">Materiales de Habilidad</h3>
            <div className="flex justify-center lg:justify-start w-full">
              <SkillMaterials agentElement={agent.element} themeColor={themeColor} materials={details?.materials} />
            </div>
          </div>

        </div>
      </div>

      {/* POTENTIAL SECTION */}
      {renderPotential()}

      {/* 3. SECCIÓN INFERIOR: HABILIDADES (Grid 2 Columnas) */}
      <div id="skills" className="relative w-full max-w-[1400px] mx-auto p-4 lg:p-12 pt-12 lg:pt-8">

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-white/20 flex-1"></div>
          <h2 className="text-3xl font-display italic font-bold text-center tracking-widest">HABILIDADES DE COMBATE</h2>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        {/* Grid de Habilidades Agrupadas (TABS UI) */}
        {details?.skills && (
          <div className="flex flex-col gap-8">

            {/* 1. TABS NAVIGATION */}
            <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 bg-[#18181b]/50 border border-white/5 p-2 rounded-2xl mx-auto w-full overflow-x-auto selection-none">
              {SKILL_GROUPS.map((group) => {
                const isActive = activeSkillTab === group.id;
                return (
                  <button
                    key={group.id}
                    onClick={() => setActiveSkillTab(group.id)}
                    className={`
                      relative px-3 lg:px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 lg:gap-3 border shrink-0
                      ${isActive
                        ? 'bg-white/10 border-white/20 text-white shadow-lg z-10'
                        : 'bg-transparent border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300'}
                    `}
                  >
                    {/* Icon Container */}
                    <div className={`
                      w-5 h-5 lg:w-6 lg:h-6 rounded flex items-center justify-center transition-opacity
                      ${isActive ? 'opacity-100' : 'opacity-50'}
                    `}>
                      <Image
                        src={skillIcons[group.icon] || skillIcons["Ataque"]}
                        alt={group.label} width={20} height={20} className="object-contain" unoptimized
                      />
                    </div>

                    <span className={`text-[10px] lg:text-sm font-bold uppercase tracking-widest whitespace-nowrap`}>
                      {group.label}
                    </span>

                    {/* Active Indicator Line */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px]" style={{ backgroundColor: themeColor }}></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* 2. ACTIVE TAB CONTENT AREA */}
            <div className="min-h-[400px]">
              {renderActiveTabContent()}
            </div>

          </div>
        )}




        {/* Espaciador Final */}
        <div className="h-32"></div>
      </div >

    </div >
  );
}
