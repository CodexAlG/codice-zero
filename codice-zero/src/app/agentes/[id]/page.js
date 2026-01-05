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

const SidebarNav = ({ agentId }) => {
  const [activeSection, setActiveSection] = useState('stats');
  const isManualScrolling = useRef(false);

  const navItems = [
    { id: 'stats', label: 'ESTADÍSTICAS' },
    { id: 'materials', label: 'MATERIALES' },
    { id: 'skills', label: 'HABILIDADES' },
    { id: 'mindscape', label: 'MINDSCAPE' },
  ];

  const scrollToSection = (id) => {
    // 1. Bloquear Spy temporalmente
    isManualScrolling.current = true;
    setActiveSection(id); // Feedback instantáneo

    // 2. Obtener el contenedor scrollable (main element del layout)
    const scrollContainer = document.querySelector('main');

    // 3. Ejecutar Scroll
    if (id === 'stats') {
      // Para estadísticas: ir al inicio del contenedor
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        // scrollIntoView funciona con cualquier contenedor scrollable
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // 4. Desbloquear Spy después de la animación (aprox 1s)
    setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    // El contenedor scrollable es 'main', no 'window'
    const scrollContainer = document.querySelector('main');
    if (!scrollContainer) return;

    const handleScroll = () => {
      // Si el usuario acaba de hacer click, ignorar el spy temporalmente
      if (isManualScrolling.current) return;

      const scrollTop = scrollContainer.scrollTop;

      // Protección de inicio
      if (scrollTop < 100) {
        setActiveSection('stats');
        return;
      }

      // Umbral visual: 50% desde la parte superior de la pantalla
      const threshold = window.innerHeight * 0.5;
      let current = 'stats';

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // El elemento activo es el último cuyo inicio ha pasado el umbral
          if (rect.top < threshold) {
            current = item.id;
          }
        }
      }

      setActiveSection(current);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    // Check inicial
    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-60 top-1/2 -translate-y-1/2 z-[9999] hidden 2xl:flex flex-col gap-6 pointer-events-auto">
      {/* Línea guía vertical */}
      <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full"></div>

      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-4 text-left transition-all relative cursor-pointer outline-none"
            aria-label={`Ir a sección ${item.label}`}
          >
            {/* Indicador (Punto) */}
            <div
              className={`
                w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 box-border
                ${isActive
                  ? 'bg-yellow-400 border-yellow-400 scale-110 shadow-[0_0_15px_rgba(250,204,21,0.5)]'
                  : 'bg-[#0b0c15] border-white/20 group-hover:border-white/60'}
              `}
            >
              {isActive && <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-50 animate-ping"></div>}
            </div>

            {/* Texto (Siempre visible) */}
            <span
              className={`
                text-[10px] font-bold tracking-[0.2em] transition-all duration-300 uppercase
                ${isActive
                  ? 'text-yellow-400 translate-x-1'
                  : 'text-white/30 group-hover:text-white/70'}
              `}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default function AgentDetailPage() {
  const params = useParams();
  const router = useRouter();

  const agentId = parseInt(params.id);
  const agent = agents.find(a => a.id === agentId);

  // RETURN EARLY IF NO AGENT
  if (!agent) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        Agente no encontrado
      </div>
    );
  }

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
  const [coreSkillLevel, setCoreSkillLevel] = useState(0); // 0=Default, 1-6=A-F
  const [potentialLevel, setPotentialLevel] = useState(0); // 0-5
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    "Potencial": "/CodiceZero/Habilidades/Icon_Core_Skill.webp", // Placeholder icon for Potential
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
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5 hover:bg-white/[0.02] transition-colors relative overflow-hidden animate-fadeIn">
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: themeColor }}></div>
              <h4 className="text-lg font-bold text-white mb-2">{details.potential.name || "Sin nombre"}</h4>
              <div className="text-gray-300 text-sm leading-relaxed space-y-2 font-sans">
                <HighlightText text={replaceIcons(description)} skills={details.skills} skillIcons={skillIcons} elementColor={themeColor} />
              </div>
            </div>
          ) : (
            <div className="h-24 bg-[#0a0a0a]/50 border border-white/5 rounded-xl flex items-center justify-center text-gray-600 italic border-dashed">
              Potencial inactivo
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- RENDER GROUP FUNCTION ---
  const renderGroup = (title, keyOrKeys, iconKey) => {
    let groupSkills = [];
    if (Array.isArray(keyOrKeys)) {
      keyOrKeys.forEach(k => {
        const found = details?.skills?.filter(s => s.type === k) || [];
        groupSkills = [...groupSkills, ...found];
      });
    } else {
      groupSkills = details?.skills?.filter(s => s.type === keyOrKeys) || [];
    }

    if (groupSkills.length === 0) return null;

    // Check if this is the Passive Talent group
    const isPassiveGroup = title.includes("Pasivo") || title.includes("Pasiva");
    const coreLevels = ['0', 'A', 'B', 'C', 'D', 'E', 'F'];

    // Helper to process scaling placeholders {VALOR_1}
    const processScaling = (text) => {
      if (!details?.coreSkillScaling || !text) return text;
      // coreSkillLevel 0 corresponds to index 0 in scaling array
      const currentScalingValues = details.coreSkillScaling[coreSkillLevel];
      if (!currentScalingValues) return text;

      // START: Custom Colors Logic
      const scalingColors = details.coreSkillScalingColors || [];
      // END: Custom Colors Logic

      return text.replace(/\{VALOR_(\d+)\}/g, (_, number) => {
        const index = parseInt(number) - 1;
        const val = currentScalingValues[index];

        if (val !== undefined) {
          // Check if a specific color is defined for this value index
          if (scalingColors[index]) {
            return `[CV="${scalingColors[index]}"]${val}[/CV]`;
          }
          // Default Green Highlight
          return `[VAL]${val}[/VAL]`;
        }
        return `{VALOR_${number}}`;
      });
    };

    return (
      <div className="flex flex-col gap-4">
        {/* Header del Grupo */}
        <div className="flex items-center gap-3 pb-2 border-b border-white/10 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
              <Image
                src={skillIcons[iconKey] || skillIcons["Ataque"]}
                alt={title} width={20} height={20} className="object-contain opacity-80" unoptimized
              />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide text-white/90">{title}</h3>
          </div>

          {/* Selector de Nivel Para Pasiva (Barra Deslizante) */}
          {isPassiveGroup && details?.coreSkillScaling && (
            <div className="flex flex-col w-48 lg:w-64 mr-2">
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
              <div className="flex justify-between px-1">
                {coreLevels.map((lvl, idx) => (
                  <span
                    key={lvl}
                    className={`text-[10px] font-mono font-bold transition-colors ${coreSkillLevel === idx ? 'text-white scale-125' : 'text-gray-600'}`}
                  >
                    {lvl}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lista de Habilidades del Grupo */}
        <div className="flex flex-col gap-6">
          {groupSkills.map((skill, idx) => {
            // Apply scaling to all groups, not just passive
            const description = processScaling(skill.description);

            return (
              <div key={idx} className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5 hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: themeColor }}></div>

                <h4 className="text-lg font-bold text-white mb-2">{skill.name || "Sin nombre"}</h4>

                <div className="text-gray-300 text-sm leading-relaxed space-y-2 font-sans">
                  <HighlightText text={replaceIcons(description)} skills={details.skills} skillIcons={skillIcons} elementColor={themeColor} />
                </div>

                {/* Multiplicadores Compactos */}
                {skill.attributes && skill.attributes.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-2">
                    {skill.attributes.slice(0, 4).map((attr, aIdx) => (
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
    <div className="min-h-screen bg-[#0b0c15] text-white selection:bg-yellow-500/30">

      {/* NAVEGACIÓN LATERAL FLOTANTE */}
      <SidebarNav agentId={agentId} hasPotential={!!details?.potential} />

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
          <div id="stats" className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl relative overflow-hidden group max-w-[480px] mx-auto lg:mr-0">
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

        {/* Grid de Habilidades Agrupadas */}
        {details?.skills && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-12 items-start">
            {/* Columna 1 */}
            <div className="flex flex-col gap-12">
              {renderGroup("Ataque Básico", ["Ataque Básico", "Ataque Normal"], "Ataque Básico")}
              {renderGroup("Asistencia", "Asistencia", "Asistencia")}
              {renderGroup("Técnica Definitiva", ["Técnica Definitiva", "Definitiva"], "Técnica Definitiva")}
            </div>

            {/* Columna 2 */}
            <div className="flex flex-col gap-12">
              {renderGroup("Evasión", "Evasión", "Evasión")}
              {renderGroup("Técnica Especial", ["Técnica Especial", "Técnica Especial EX", "Habilidad Especial", "Habilidad Especial EX"], "Técnica Especial")}
              {renderGroup("Talento Pasivo", ["Pasiva", "Pasiva Central", "Habilidad Adicional"], "Pasiva Central")}
            </div>
          </div>
        )}

        {/* MINDSCAPES (Full Width) */}
        <div id="mindscape" className="mt-8 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-display italic font-bold text-center tracking-widest mb-8">MINDSCAPE CINEMA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(details?.skills || []).filter(s => {
              if (!s.type) return false;
              if (typeof s.type === 'string') return s.type.startsWith("Mindscape");
              if (Array.isArray(s.type)) return s.type.includes("Mindscape");
              return false;
            }).map((skill, idx) => {
              const mindscapeNumber = Array.isArray(skill.type)
                ? (idx + 1)
                : skill.type.replace("Mindscape ", "");

              return (
                <div key={idx} className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:border-white/20 transition-all">
                  {/* Número Grande de Fondo */}
                  <div className="absolute -right-4 -bottom-4 text-9xl font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                    {mindscapeNumber}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 font-bold text-white">
                      {mindscapeNumber}
                    </div>
                    <h4 className="text-xl font-bold text-white">{skill.name || "Mindscape"}</h4>
                  </div>

                  <div className="text-gray-300 text-sm leading-relaxed relative z-10">
                    <HighlightText text={skill.description} skills={details.skills} skillIcons={skillIcons} elementColor={themeColor} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Espaciador Final */}
        <div className="h-32"></div>
      </div >

    </div >
  );
}
