'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TriangleAlert } from 'lucide-react';
import { agents } from '@/data/agents';
import { getAgentVersions, getAgentVersionData, getAgentLatestVersionData, getAgentSkills } from '@/data/versionedAgentData';
import { compareText, compareNumber } from '@/utils/diffUtils';
import { replaceIcons } from '@/components/utils/TextWithIcons';
import HighlightText from '@/components/ui/HighlightText';
import { useLanguage } from '@/context/LanguageContext';
import { calculateStatsWithCore } from '@/utils/statCalculator';
import StatsTable from '@/components/agents/StatsTable';

export default function BetaAgentDetailClient() {
    const params = useParams();
    const router = useRouter();
    const { language, translateText } = useLanguage();

    const agentId = parseInt(params.id);
    const agent = agents.find(a => a.id === agentId);

    const [level, setLevel] = useState(60);
    const [corePassiveLevel, setCorePassiveLevel] = useState(0);
    const [translatedTexts, setTranslatedTexts] = useState({});

    // 1. Resolve versions (latest vs previous)
    const availableVersions = useMemo(() => {
        if (!agent) return [];
        return getAgentVersions(agent.id) || [];
    }, [agent]);

    const { versionAfter, versionBefore } = useMemo(() => {
        if (availableVersions.length === 0) return { versionAfter: null, versionBefore: null };
        const latest = availableVersions[availableVersions.length - 1];
        const previous = availableVersions.length > 1 ? availableVersions[availableVersions.length - 2] : null;
        return { versionAfter: latest, versionBefore: previous };
    }, [availableVersions]);

    // 2. Load data
    const afterData = useMemo(() => {
        if (!agent || !versionAfter) return null;
        return getAgentLatestVersionData(agent.id, versionAfter);
    }, [agent, versionAfter]);

    const beforeData = useMemo(() => {
        if (!agent || !versionBefore) return null;
        return getAgentLatestVersionData(agent.id, versionBefore);
    }, [agent, versionBefore]);

    const agentSkills = useMemo(() => {
        if (!agent) return [];
        return getAgentSkills(agent.id) || [];
    }, [agent]);

    const [agentDetails, setAgentDetails] = useState(null);

    // Translations effect
    useEffect(() => {
        if (language === 'es' || !agent || !agentSkills.length) return;
        let isActive = true;

        async function loadTranslations() {
            const stringsToTranslate = new Set();
            agentSkills.forEach(skillObj => {
                if (skillObj.type && !translatedTexts[skillObj.type]) stringsToTranslate.add(skillObj.type);
                Object.values(skillObj.versions || {}).forEach(v => {
                    if (v.name && !translatedTexts[v.name]) stringsToTranslate.add(v.name);
                    if (v.description && !translatedTexts[v.description]) stringsToTranslate.add(v.description);
                });
            });

            const arr = Array.from(stringsToTranslate);
            const translations = [];
            for (const t of arr) {
                let res = await translateText(t);
                if (res && typeof res === 'string') {
                    res = res.replace(/(^|[^0-9])(?:0\.\s*|1\s*)(\{VALOR_\d+\})/g, '$1$2');
                    res = res.replace(/([a-zA-Z]+(?:\s+[a-zA-Z]+)*)\s*\(\s*\)/g, '($1)');
                }
                translations.push(res);
            }

            if (!isActive || arr.length === 0) return;
            const map = {};
            arr.forEach((str, i) => { map[str] = translations[i]; });
            setTranslatedTexts(prev => ({ ...prev, ...map }));
        }

        loadTranslations();
        return () => { isActive = false; };
    }, [agentSkills, language, agent, translateText]);

    // Load static agent details
    useEffect(() => {
        if (!agentId) return;
        import(`@/data/agentDetails/released/agent-${agentId}.js`)
            .then(mod => setAgentDetails(mod.default))
            .catch(err => console.error("Error loading static agent details", err));
    }, [agentId]);

    if (!agent) {
        return <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white">Agente no encontrado</div>;
    }

    // Colors & Icons
    const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
    const elementColors = {
        "fuego": "#ef4444", "hielo": "#22d3ee", "electrico": "#3b82f6",
        "fisico": "#eab308", "etereo": "#d946ef", "viento": "#38bdf8",
    };
    const themeColor = elementColors[normalize(agent.element).toLowerCase()] || "#eab308";

    const getAgentFullImage = (agent) => {
        const imageMap = {
            55: "/CodiceZero/Agentes/Agent_Norma_Hollowell_Portrait.webp",
            54: "/CodiceZero/Agentes/Agent_Velina_Airgid_Portrait.webp",
        };
        return imageMap[agent.id] || agent.image;
    };
    const agentFullImage = getAgentFullImage(agent);

    const translateTerm = (term) => {
        if (language === 'es') return term;
        const map = { "Eléctrico": "Electric", "Fuego": "Fire", "Hielo": "Ice", "Físico": "Physical", "Etéreo": "Ether", "Anomalía": "Anomaly", "Ataque": "Attack", "Defensa": "Defense", "Apoyo": "Support", "Ruptura": "Stun" };
        return map[term] || term;
    };

    const skillIcons = {
        "Ataque Básico": "/CodiceZero/Habilidades/Icon_Basic_Attack.webp",
        "Evasión": "/CodiceZero/Habilidades/Icon_Dodge.webp",
        "Asistencia": "/CodiceZero/Habilidades/Icon_Assist_Attack.png",
        "Técnica Especial": "/CodiceZero/Habilidades/Icon_Special_Attack.webp",
        "Técnica Especial EX": "/CodiceZero/Habilidades/Icon_EX_Special_Attack.webp",
        "Técnica Definitiva": "/CodiceZero/Habilidades/Icon_Ultimate_Colored.webp",
        "Pasiva Central": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
        "Pasiva": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    };

    // --- DIFF HELPERS (From BetaDiffViewer) ---
    const getSkillsContext = (version) => {
        if (!agentSkills.length) return [];
        return agentSkills.map(skill => skill.versions?.[version]).filter(Boolean);
    };

    const protectIcons = (text) => text ? text.replace(/\[Icono ([^\]]+)\]/g, (match, type) => `__ICON_${type.replace(/\s+/g, '_')}__`) : "";
    const restoreIcons = (text) => text ? text.replace(/__ICON_(.*?)__/g, (match, type) => `[Icono ${type.replace(/_/g, ' ')}]`) : "";

    const processScalingForDiff = (text, data, side, otherData) => {
        if (!data?.coreSkillScaling || !text) return text;
        const currentScalingValues = data.coreSkillScaling[corePassiveLevel] || data.coreSkillScaling[0];
        if (!currentScalingValues) return text;
        const otherScalingValues = otherData?.coreSkillScaling?.[corePassiveLevel] || otherData?.coreSkillScaling?.[0] || [];
        return text.replace(/\{VALOR_(\d+)\}/g, (_, number) => {
            const index = parseInt(number) - 1;
            const val = currentScalingValues[index];
            if (val === undefined) return `{VALOR_${number}}`;
            const otherVal = otherScalingValues[index];
            if (val === otherVal) return `__SVC${number}__`;
            return side === 'old' ? `__SVA${number}__` : `__SVB${number}__`;
        });
    };

    const restoreScalingTokens = (text, data) => {
        if (!text || !data?.coreSkillScaling) return text;
        const currentScalingValues = data.coreSkillScaling[corePassiveLevel] || data.coreSkillScaling[0];
        if (!currentScalingValues) return text;
        const scalingColors = data?.coreSkillScalingColors || [];
        return text.replace(/__SV[ABC](\d+)__/g, (_, number) => {
            const index = parseInt(number) - 1;
            const val = currentScalingValues[index];
            if (val === undefined) return '';
            if (scalingColors[index]) return `[CV="${scalingColors[index]}"]${val}[/CV]`;
            return `[VAL]${val}[/VAL]`;
        });
    };

    const processScaling = (text, data) => {
        if (!data?.coreSkillScaling || !text) return text;
        const currentScalingValues = data.coreSkillScaling[corePassiveLevel] || data.coreSkillScaling[0];
        if (!currentScalingValues) return text;
        const scalingColors = data.coreSkillScalingColors || [];
        return text.replace(/\{VALOR_(\d+)\}/g, (_, number) => {
            const index = parseInt(number) - 1;
            const val = currentScalingValues[index];
            if (val !== undefined) {
                if (scalingColors[index]) return `[CV="${scalingColors[index]}"]${val}[/CV]`;
                return `[VAL]${val}[/VAL]`;
            }
            return `{VALOR_${number}}`;
        });
    };

    const renderDiffWithHighlight = (diffTokens, side, data, skillsContext) => {
        if (!diffTokens || diffTokens.length === 0) return [];
        return diffTokens.map((part, index) => {
            let className = "text-gray-300"; // base color
            if (side === 'left') {
                if (part.added) return null;
                if (part.removed) className = "text-red-400 line-through bg-red-900/30 px-1 rounded";
            } else {
                if (part.removed) return null;
                if (part.added) className = "text-green-400 font-bold bg-green-900/30 px-1 rounded";
            }

            let value = restoreIcons(part.value);
            let processedText = restoreScalingTokens(value, data);
            processedText = processScaling(processedText, data);
            processedText = replaceIcons(processedText);

            return (
                <span key={index} className={className}>
                    <HighlightText
                        text={processedText}
                        elementColor={data?.elementColor || themeColor}
                        skillIcons={skillIcons}
                        skills={skillsContext || []}
                    />
                </span>
            );
        }).filter(Boolean);
    };

    // Skills sorting and rendering prep
    const typePriority = {
        'Ataque Básico': 0, 'Evasión': 1, 'Técnica Especial': 2, 'Técnica Especial EX': 2,
        'Asistencia': 3, 'Técnica Definitiva': 4, 'Pasiva Central': 5, 'Habilidad Adicional': 6, 'Mindscape': 7,
    };
    const normalizeType = (type) => {
        if (!type) return type;
        let normalized = type.replace(/ò/g, 'ó');
        if (normalized.startsWith('Mindscape')) return 'Mindscape';
        if (normalized === 'Técnica Especial EX') return 'Técnica Especial';
        return normalized;
    };
    const getSkillGroupOrder = (skillObj) => typePriority[normalizeType(skillObj.type)] ?? Number.MAX_SAFE_INTEGER;

    const sortedSkills = [...agentSkills].sort((a, b) => getSkillGroupOrder(a) - getSkillGroupOrder(b));

    const renderStatComparisonRow = (label, oldVal, newVal) => {
        const o = parseFloat(String(oldVal || "0").replace(/[^0-9.-]/g, ''));
        const n = parseFloat(String(newVal || "0").replace(/[^0-9.-]/g, ''));
        let colorClass = "text-white";
        if (n > o) colorClass = "text-green-400";
        else if (n < o) colorClass = "text-red-400";

        return (
            <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</span>
                <div className="flex items-center gap-3 font-mono text-sm">
                    {oldVal && oldVal !== newVal && <span className="text-gray-500 line-through">{oldVal}</span>}
                    <span className={`font-bold ${colorClass}`}>{newVal || "0"}</span>
                </div>
            </div>
        );
    };

    const calculateCurrentStats = () => {
        if (!agentDetails?.baseStats) return null;
        const baseStatsForCalc = { ...agentDetails.baseStats };
        return calculateStatsWithCore(baseStatsForCalc, level, agentDetails.coreStats);
    };
    const currentStats = calculateCurrentStats();

    return (
        <div className="min-h-screen bg-[#0f0f12] text-white selection:bg-yellow-500/30 overflow-x-hidden font-sans pb-32">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
            
            <Link href={`/${language}/beta`} className="absolute top-8 left-8 z-50 inline-flex items-center text-gray-400 hover:text-white transition-colors group bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold text-sm tracking-widest uppercase">Volver</span>
            </Link>

            {/* TOP SECTION: Hero & Stats */}
            <div className="relative w-full max-w-[1600px] mx-auto p-4 pt-20 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-[70vh]">
                <div className="w-full lg:w-[45%] h-[50vh] lg:h-[70vh] relative lg:sticky top-10 flex items-center justify-center z-10">
                    <div className="absolute inset-0 opacity-30 blur-3xl pointer-events-none" style={{ background: `radial-gradient(circle at center, ${themeColor} 0%, transparent 70%)` }}></div>
                    <Image src={agentFullImage} alt={agent.name} fill className="object-contain drop-shadow-2xl" priority unoptimized />
                </div>

                <div className="w-full lg:w-[55%] flex flex-col justify-center z-20">
                    <div className="mb-10 text-center lg:text-right drop-shadow-xl">
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            {agent.name}
                        </h1>
                        <div className="flex flex-wrap justify-center lg:justify-end gap-3 select-none mb-4">
                            <span className="px-4 py-1 bg-red-500/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-red-400 border border-red-500/30 flex items-center gap-2">
                                <TriangleAlert className="w-3.5 h-3.5" /> BETA CHANGES ({versionBefore} ➔ {versionAfter})
                            </span>
                        </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 w-full max-w-[480px] mx-auto lg:mr-0 z-20 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                            <h3 className="text-xl font-display italic font-black tracking-wide text-white uppercase">{language === 'es' ? 'ATRIBUTOS BASE' : 'BASE ATTRIBUTES'}</h3>
                            <div className="flex flex-col w-32 ml-auto bg-black/30 rounded-full px-3 py-1 border border-white/5">
                                <div className="flex items-center gap-2 relative">
                                    <span className="text-[10px] font-black uppercase text-gray-400">NV.{level}</span>
                                    <input
                                        type="range"
                                        min="1" max="60" step="1"
                                        value={level}
                                        onChange={(e) => setLevel(parseInt(e.target.value))}
                                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <StatsTable currentStats={currentStats} themeColor={themeColor} agentRole={agentDetails?.rol} />
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM SECTION: Skills Diff List */}
            <div className="relative w-full max-w-[1200px] mx-auto p-4 lg:p-12 pt-12">
                <div className="flex items-center justify-center gap-6 mb-12 relative">
                    <div className="h-[2px] w-24 md:w-48 bg-gradient-to-r from-transparent to-yellow-500/50"></div>
                    <h2 className="text-2xl md:text-4xl font-display italic font-black text-center tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                        SKILLS CHANGES
                    </h2>
                    <div className="h-[2px] w-24 md:w-48 bg-gradient-to-l from-transparent to-yellow-500/50"></div>
                </div>

                <div className="flex flex-col gap-8 animate-fadeIn">
                    {sortedSkills.map((skillObj, index) => {
                        const oldSkill = versionBefore ? skillObj.versions[versionBefore] : null;
                        const newSkill = versionAfter ? skillObj.versions[versionAfter] : null;
                        if (!newSkill && !oldSkill) return null;

                        const isDeleted = !!oldSkill && !newSkill;
                        const isAdded = !!newSkill && !oldSkill;
                        const isMatched = !!oldSkill && !!newSkill;

                        const oldName = translatedTexts[oldSkill?.name] || oldSkill?.name || "";
                        const newName = translatedTexts[newSkill?.name] || newSkill?.name || "";
                        const oldDescRaw = translatedTexts[oldSkill?.description] || oldSkill?.description || "";
                        const newDescRaw = translatedTexts[newSkill?.description] || newSkill?.description || "";

                        let nameDiff;
                        if (isMatched) {
                            if (oldName !== newName) {
                                nameDiff = [
                                    { value: protectIcons(oldName), added: false, removed: true },
                                    { value: protectIcons(newName), added: true, removed: false }
                                ];
                            } else {
                                nameDiff = compareText(protectIcons(oldName), protectIcons(newName));
                            }
                        } else {
                            nameDiff = [{ value: protectIcons(isDeleted ? `${oldName} [ELIMINADA]` : `${newName} [NUEVA]`), added: false, removed: false }];
                        }

                        const oldDesc = processScalingForDiff(oldDescRaw, beforeData, 'old', afterData);
                        const newDesc = processScalingForDiff(newDescRaw, afterData, 'new', beforeData);
                        const descDiff = isMatched ? compareText(protectIcons(oldDesc), protectIcons(newDesc)) : [{ value: protectIcons(isDeleted ? oldDesc : newDesc), added: false, removed: false }];

                        // Only show skills that changed
                        const hasChanges = isMatched ? (nameDiff.some(t => t.added || t.removed) || descDiff.some(t => t.added || t.removed)) : true;
                        if (!hasChanges) return null;

                        return (
                            <div key={index} className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col will-change-transform">
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 shadow-[0_0_15px_currentColor] rounded-l-3xl opacity-80" style={{ backgroundColor: themeColor, color: themeColor }}></div>
                                
                                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-4 pl-4 border-b border-white/5 pb-2 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{translatedTexts[skillObj.type] || skillObj.type}</span>
                                    </div>
                                    {normalizeType(skillObj.type) === 'Pasiva Central' && (afterData?.coreSkillScaling || beforeData?.coreSkillScaling) && (
                                        <div className="flex flex-col w-full max-w-[250px] bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 group/coreslider">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">NIVEL NÚCLEO</span>
                                                <span className="text-xs font-black text-white font-mono drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{['A', 'B', 'C', 'D', 'E', 'F', 'MAX'][corePassiveLevel]}</span>
                                            </div>
                                            <div className="relative py-1">
                                                <div className="absolute inset-0 blur-md rounded-full scale-y-150 opacity-0 group-hover/coreslider:opacity-50 transition-opacity" style={{ backgroundColor: themeColor }}></div>
                                                <input
                                                    type="range" min="0" max="6" step="1" value={corePassiveLevel}
                                                    onChange={(e) => setCorePassiveLevel(parseInt(e.target.value))}
                                                    className="relative z-10 w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                                />
                                            </div>
                                            <div className="flex justify-between px-0.5 mt-1">
                                                {['A', 'B', 'C', 'D', 'E', 'F', 'M'].map((lvl, idx) => (
                                                    <span key={lvl} className={`text-[9px] font-mono font-bold transition-colors ${corePassiveLevel === idx ? 'text-white scale-110' : 'text-gray-600'}`}>{lvl}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-4 pl-4">
                                    {isMatched ? (
                                        <>
                                            {/* Old version (Before) */}
                                            <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4 opacity-70">
                                                <h4 className="text-lg font-display italic font-black text-red-200 mb-2">
                                                    {renderDiffWithHighlight(nameDiff, 'left', beforeData, getSkillsContext(versionBefore))}
                                                </h4>
                                                <div className="text-gray-400 text-sm leading-relaxed space-y-2">
                                                    {renderDiffWithHighlight(descDiff, 'left', beforeData, getSkillsContext(versionBefore))}
                                                </div>
                                            </div>
                                            {/* New version (After) */}
                                            <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-4">
                                                <h4 className="text-lg font-display italic font-black text-green-200 mb-2">
                                                    {renderDiffWithHighlight(nameDiff, 'right', afterData, getSkillsContext(versionAfter))}
                                                </h4>
                                                <div className="text-gray-200 text-sm leading-relaxed space-y-2">
                                                    {renderDiffWithHighlight(descDiff, 'right', afterData, getSkillsContext(versionAfter))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className={`border rounded-xl p-4 ${isDeleted ? 'bg-red-900/10 border-red-500/20 opacity-70' : 'bg-green-900/10 border-green-500/20'}`}>
                                            <h4 className={`text-lg font-display italic font-black mb-2 ${isDeleted ? 'text-red-200' : 'text-green-200'}`}>
                                                {renderDiffWithHighlight(nameDiff, isDeleted ? 'left' : 'right', isDeleted ? beforeData : afterData, getSkillsContext(isDeleted ? versionBefore : versionAfter))}
                                            </h4>
                                            <div className={`text-sm leading-relaxed space-y-2 ${isDeleted ? 'text-gray-400' : 'text-gray-200'}`}>
                                                {renderDiffWithHighlight(descDiff, isDeleted ? 'left' : 'right', isDeleted ? beforeData : afterData, getSkillsContext(isDeleted ? versionBefore : versionAfter))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
