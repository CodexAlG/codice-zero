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
import BuildSection from './BuildSection';



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
            51: "/CodiceZero/Agentes/Cissia.webp",
            50: "/CodiceZero/Agentes/NangongYu.webp",
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
                        <div className="md:col-span-1 min-h-[500px] flex items-stretch">
                            <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 relative overflow-hidden animate-fadeIn shadow-[0_10px_30px_rgba(0,0,0,0.5)] group/pot w-full">
                                {/* Premium Glow sobre la tarjeta */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/pot:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 shadow-[0_0_15px_currentColor] rounded-l-2xl" style={{ backgroundColor: themeColor, color: themeColor }}></div>

                                <h4 className="text-xl font-display italic font-black text-white mb-3 ml-2 drop-shadow-md">{details.potential.name || "Sin nombre"}</h4>

                                <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-3 font-sans relative z-10 ml-2">
                                    <HighlightText text={replaceIcons(description)} skills={details.skills} skillIcons={skillIcons} elementColor={themeColor} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-24 bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl flex items-center justify-center text-gray-500 font-mono font-bold tracking-widest uppercase border-dashed">
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
                            <div key={idx} className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 h-full will-change-transform">
                                {/* Premium Element Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                {/* Número Grande de Fondo */}
                                <div className="absolute -right-4 -bottom-4 text-[12rem] font-black text-white/5 select-none pointer-events-none group-hover:text-white/[0.07] transition-colors duration-700 italic font-display">
                                    {mindscapeNumber}
                                </div>

                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 font-bold text-lg text-white shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:border-white/20 transition-colors" style={{ color: themeColor, textShadow: `0 0 10px ${themeColor}80` }}>
                                        {mindscapeNumber}
                                    </div>
                                    <h4 className="text-2xl font-display font-black italic text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all drop-shadow-md">
                                        {skill.name || "Mindscape"}
                                    </h4>
                                </div>

                                <div className="text-gray-300 text-base leading-relaxed relative z-10 space-y-3">
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


                {/* GRID HORIZONTAL DE HABILIDADES */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {groupSkills.map((skill, idx) => {
                        const description = processScaling(skill.description);

                        return (
                            <div key={idx} className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group h-full flex flex-col will-change-transform">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 shadow-[0_0_15px_currentColor] rounded-l-3xl opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: themeColor, color: themeColor }}></div>

                                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-6 pl-4 pr-2 pt-2 relative z-10">
                                    <h4 className="text-xl md:text-2xl font-display font-black italic text-white drop-shadow-md">{skill.name || "Sin nombre"}</h4>

                                    {/* Slider integrado en la tarjeta (Solo para Pasiva Central) */}
                                    {details?.coreSkillScaling && (skill.type === 'Pasiva Central' || skill.type === 'Pasiva') && (
                                        <div className="flex flex-col w-full max-w-[200px] bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 group/coreslider">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Nivel</span>
                                                <span className="text-xs font-black text-white font-mono drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{coreLevels[coreSkillLevel]}</span>
                                            </div>
                                            <div className="relative py-1">
                                                <div className="absolute inset-0 blur-md rounded-full scale-y-150 opacity-0 group-hover/coreslider:opacity-50 transition-opacity" style={{ backgroundColor: themeColor }}></div>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="6"
                                                    step="1"
                                                    value={coreSkillLevel}
                                                    onChange={(e) => setCoreSkillLevel(parseInt(e.target.value))}
                                                    className="relative z-10 w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                                />
                                            </div>
                                            <div className="flex justify-between px-0.5 mt-1">
                                                {coreLevels.map((lvl, idx) => (
                                                    <span
                                                        key={lvl}
                                                        className={`text-[9px] font-mono font-bold transition-colors ${coreSkillLevel === idx ? 'text-white scale-110' : 'text-gray-600'}`}
                                                    >
                                                        {lvl}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-3 font-sans flex-grow relative z-10 ml-2">
                                    <HighlightText text={replaceIcons(description)} skills={details.skills} skillIcons={skillIcons} elementColor={themeColor} />
                                </div>

                                {/* Multiplicadores Compactos Premium */}
                                {skill.attributes && skill.attributes.length > 0 && (
                                    <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 relative z-10">
                                        {skill.attributes.slice(0, 6).map((attr, aIdx) => (
                                            <div key={aIdx} className="flex flex-col gap-1 bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                                                <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 truncate">{attr.label}</span>
                                                <span className="font-mono text-sm font-bold text-white tracking-wide" style={{ textShadow: `0 0 10px ${themeColor}40` }}>{attr.values[attr.values.length - 1]}</span>
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
        <div className="min-h-screen bg-[#0f0f12] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/20 via-[#0f0f12] to-black text-white selection:bg-yellow-500/30 overflow-x-hidden relative font-sans">
            {/* Decoración de fondo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>


            {/* AVISO BETA (Top of Page) */}
            {agent.leak === "Beta" && (
                <div className="w-full bg-red-500/10 border-b border-red-500/30 py-3 px-4 text-center z-50 relative backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                    <p className="text-red-400 text-xs md:text-sm font-black tracking-widest uppercase flex items-center justify-center gap-2">
                        <TriangleAlert className="text-red-500 w-4 h-4 animate-pulse" />
                        Este personaje se encuentra en fase Beta. Stats y habilidades sujetas a cambios.
                    </p>
                </div>
            )}

            {/* 1. SECCIÓN SUPERIOR: HERO + STATS (2 Columnas) */}
            <div className="relative w-full max-w-[1600px] mx-auto p-4 pt-10 lg:p-8 pb-0 flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-screen lg:min-h-[85vh]">

                {/* BOTÓN VOLVER */}
                <Link href="/agentes" className="absolute top-8 left-8 z-50 inline-flex items-center text-gray-400 hover:text-white transition-colors group bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold text-sm tracking-widest uppercase">Volver</span>
                </Link>

                {/* COLUMNA IZQUIERDA: IMAGEN (Sticky en Desktop, Relative en Móvil para evitar cortes) */}
                <div className="w-full lg:w-[45%] h-[60vh] lg:h-[85vh] relative lg:sticky top-0 flex items-center justify-center z-10 group">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Fondo Decorativo: Radial Gradient Seguro */}
                        <div
                            className="absolute inset-0 opacity-30 blur-3xl pointer-events-none"
                            style={{
                                background: `radial-gradient(circle at center, ${themeColor} 0%, transparent 70%)`
                            }}
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
                    <div className="mb-10 text-center lg:text-right drop-shadow-xl">
                        <div className="flex items-center justify-center lg:justify-end gap-3 mb-4 opacity-80">
                            <Image src={`/CodiceZero/Agentes/Faction/Faction_${agent.faction.replace(/ /g, "_")}_Icon.webp`} width={24} height={24} alt={agent.faction} className="opacity-80 drop-shadow-md" unoptimized onError={(e) => e.target.style.display = 'none'} />
                            <span className="font-mono text-xs font-black uppercase tracking-[0.3em] text-gray-300">{agent.faction}</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black italic tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            {agent.name}
                        </h1>

                        {/* Badges Premium */}
                        <div className="flex flex-wrap justify-center lg:justify-end gap-3 select-none">
                            <span className={`px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ${agent.rank === 'S' ? 'text-yellow-400 border-yellow-400/30 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : 'text-purple-400 border-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]'}`}>
                                Rank {agent.rank}
                            </span>
                            <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-lg transition-shadow" style={{ color: themeColor, borderColor: `${themeColor}40` }}>
                                <Image src={getElementIcon()} width={16} height={16} alt={agent.element} className="drop-shadow-md" unoptimized onError={(e) => e.target.style.display = 'none'} />
                                {agent.element}
                            </span>
                            <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-gray-300 border border-white/10 flex items-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                <Image src={`/CodiceZero/Agentes/Rol/${normalize(agent.rol)}.webp`} width={16} height={16} alt={agent.rol} className="invert opacity-90" unoptimized />
                                {agent.rol}
                            </span>
                            {agent.leak === "Beta" && (
                                <span className="px-4 py-1.5 bg-red-500/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-red-400 border border-red-500/30 flex items-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_15px_rgba(239,68,68,0.2)]">
                                    <TriangleAlert className="w-3.5 h-3.5 animate-pulse" /> BETA
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Notice */}

                    {/* Panel Derecho (Contenido Principal - Scrollable en desktop) */}
                    <div id="stats" className="bg-black/40 backdrop-blur-md border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-3xl p-6 md:p-8 relative overflow-hidden group w-full max-w-[480px] mx-auto lg:mr-0 z-20">
                        {/* Highlights de fondo */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-20 transition-opacity duration-700 group-hover:opacity-40" style={{ backgroundColor: themeColor }}></div>


                        {/* Control de Nivel + Stats */}
                        <div className="space-y-6 relative z-10">
                            <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                <h3 className="text-xl font-display italic font-black tracking-wide text-white drop-shadow-md">ATRIBUTOS BASE</h3>
                                <div className="flex items-center gap-4 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md group/slider">
                                    <span className="text-xs font-black tracking-widest uppercase text-gray-400">Nv.{level}</span>
                                    <div className="relative w-24 py-1">
                                        <div className="absolute inset-0 blur-md rounded-full scale-y-150 opacity-0 group-hover/slider:opacity-50 transition-opacity" style={{ backgroundColor: themeColor }}></div>
                                        <input
                                            type="range" min="1" max="60" value={level}
                                            onChange={(e) => setLevel(Number(e.target.value))}
                                            className="relative z-10 w-full h-1.5 bg-gray-800/80 rounded-full appearance-none outline-none focus:outline-none focus:ring-4 focus:ring-white/10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,255,255,0.8)] [&::-webkit-slider-thumb]:cursor-grab"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Tabla de Stats */}
                            {isLoading ? (
                                <div className="h-40 flex items-center justify-center text-gray-500 font-mono text-sm uppercase tracking-widest animate-pulse">Cargando datos...</div>
                            ) : (
                                <StatsTable currentStats={currentStats} themeColor={themeColor} agentRole={agent.rol} />
                            )}
                        </div>
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
                <div className="flex items-center justify-center gap-6 mb-12 lg:mb-16 relative">
                    <div className="absolute inset-0 bg-yellow-500/5 blur-[100px] rounded-full"></div>
                    <div className="h-[2px] w-24 md:w-48 bg-gradient-to-r from-transparent to-yellow-500/50"></div>
                    <h2 className="text-3xl md:text-5xl font-display italic font-black text-center tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] select-none">
                        HABILIDADES DE COMBATE
                    </h2>
                    <div className="h-[2px] w-24 md:w-48 bg-gradient-to-l from-transparent to-yellow-500/50"></div>
                </div>

                {/* Grid de Habilidades Agrupadas (TABS UI) */}
                {details?.skills && (
                    <div className="flex flex-col gap-10">

                        {/* 1. TABS NAVIGATION */}
                        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 bg-black/40 border border-white/5 p-3 rounded-3xl mx-auto w-full max-w-5xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] select-none relative z-20">
                            {SKILL_GROUPS.map((group) => {
                                const isActive = activeSkillTab === group.id;
                                return (
                                    <button
                                        key={group.id}
                                        onClick={() => setActiveSkillTab(group.id)}
                                        className={`
                                            relative px-4 lg:px-6 py-3 rounded-2xl transition-all duration-500 flex items-center gap-2 lg:gap-3 shrink-0 overflow-hidden group border
                                            ${isActive
                                                ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] border-white/20'
                                                : 'bg-transparent text-gray-500 hover:text-gray-200 border-transparent hover:bg-white/5'
                                            }
                                        `}
                                    >
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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

                                        {/* Active Line Effect */}
                                        {isActive && (
                                            <div className="absolute bottom-0 left-4 right-4 h-[3px] rounded-t-full shadow-[0_0_10px_currentColor] animate-pulse" style={{ backgroundColor: themeColor, color: themeColor }}></div>
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

            {/* --- ESTRATEGIA DE EQUIPAMIENTO --- */}
            {/* TODO: Descomentar cuando todos los agentes tengan su estrategia */}
            {false && <BuildSection strategy={details?.strategy} />}

        </div >
    );
}
