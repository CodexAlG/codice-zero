'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TriangleAlert } from 'lucide-react';
import { weapons } from '@/data/weapons';
import { getWeaponVersions, getWeaponVersionData } from '@/data/versionedWeaponData';
import { compareText } from '@/utils/diffUtils';
import { replaceIcons } from '@/components/utils/TextWithIcons';
import HighlightText from '@/components/ui/HighlightText';
import { useLanguage } from '@/context/LanguageContext';

export default function BetaWeaponDetailClient() {
    const params = useParams();
    const router = useRouter();
    const { language, translateText } = useLanguage();

    const weaponIdParam = params.id;
    const weapon = weapons.find(w => w.id.toString() === weaponIdParam || w.name.toLowerCase() === decodeURIComponent(weaponIdParam).toLowerCase());

    const [refinementLevel, setRefinementLevel] = useState(0); // 0 to 4
    const [translatedTexts, setTranslatedTexts] = useState({});

    // 1. Resolve versions
    const availableVersions = useMemo(() => {
        if (!weapon) return [];
        return getWeaponVersions(weapon.id) || [];
    }, [weapon]);

    // 2. Load data intelligently handling hotfixes
    const { afterData, beforeData, versionAfterLabel, versionBeforeLabel } = useMemo(() => {
        if (!weapon || availableVersions.length === 0) return { afterData: null, beforeData: null, versionAfterLabel: null, versionBeforeLabel: null };
        
        const latestVersion = availableVersions[availableVersions.length - 1];
        const baseData = getWeaponVersionData(weapon.id, latestVersion);
        
        if (!baseData) return { afterData: null, beforeData: null, versionAfterLabel: null, versionBeforeLabel: null };
        
        const hotfixes = baseData.hotfixes || [];
        
        if (hotfixes.length > 0) {
            // Compare latest hotfix vs previous hotfix (or base)
            const latestHotfix = hotfixes[hotfixes.length - 1];
            const previousHotfix = hotfixes.length > 1 ? hotfixes[hotfixes.length - 2] : null;
            
            const mergedAfter = {
                ...baseData,
                effect: latestHotfix.effect || baseData.effect,
                detailStats: latestHotfix.detailStats || baseData.detailStats
            };
            
            const mergedBefore = {
                ...baseData,
                effect: previousHotfix ? (previousHotfix.effect || baseData.effect) : baseData.effect,
                detailStats: previousHotfix ? (previousHotfix.detailStats || baseData.detailStats) : baseData.detailStats
            };
            
            return {
                afterData: mergedAfter,
                beforeData: mergedBefore,
                versionAfterLabel: `${latestVersion} HF${hotfixes.length}`,
                versionBeforeLabel: previousHotfix ? `${latestVersion} HF${hotfixes.length - 1}` : `${latestVersion}`
            };
        } else {
            // No hotfixes, compare latest base vs previous base
            const previousVersion = availableVersions.length > 1 ? availableVersions[availableVersions.length - 2] : null;
            const prevBaseData = previousVersion ? getWeaponVersionData(weapon.id, previousVersion) : null;
            
            let mergedBefore = prevBaseData;
            if (prevBaseData && prevBaseData.hotfixes && prevBaseData.hotfixes.length > 0) {
                // If previous version had hotfixes, merge its latest hotfix
                const prevLastHotfix = prevBaseData.hotfixes[prevBaseData.hotfixes.length - 1];
                mergedBefore = {
                    ...prevBaseData,
                    effect: prevLastHotfix.effect || prevBaseData.effect,
                    detailStats: prevLastHotfix.detailStats || prevBaseData.detailStats
                };
            }
            
            return {
                afterData: baseData,
                beforeData: mergedBefore,
                versionAfterLabel: latestVersion,
                versionBeforeLabel: previousVersion ? (mergedBefore.hotfixes?.length > 0 ? `${previousVersion} HF` : previousVersion) : "V Anterior"
            };
        }
    }, [weapon, availableVersions]);

    // Translations effect
    useEffect(() => {
        if (language === 'es' || !weapon) return;
        let isActive = true;

        async function loadTranslations() {
            const stringsToTranslate = new Set();
            if (afterData?.effect?.title) stringsToTranslate.add(afterData.effect.title);
            if (afterData?.effect?.description) stringsToTranslate.add(afterData.effect.description);
            if (beforeData?.effect?.title) stringsToTranslate.add(beforeData.effect.title);
            if (beforeData?.effect?.description) stringsToTranslate.add(beforeData.effect.description);

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
    }, [language, afterData, beforeData, weapon, translateText]);

    if (!weapon) {
        return <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white">Arma no encontrada</div>;
    }

    // Colors
    const rankColors = { "S": "#eab308", "A": "#a855f7", "B": "#3b82f6" };
    const themeColor = rankColors[weapon.rank] || "#eab308";

    // --- DIFF HELPERS ---
    const protectIcons = (text) => text ? text.replace(/\[Icono ([^\]]+)\]/g, (match, type) => `__ICON_${type.replace(/\s+/g, '_')}__`) : "";
    const restoreIcons = (text) => text ? text.replace(/__ICON_(.*?)__/g, (match, type) => `[Icono ${type.replace(/_/g, ' ')}]`) : "";

    const processRefinementForDiff = (text, effectData, side, otherEffectData) => {
        if (!effectData?.refinements || !text) return text;
        const currentVals = effectData.refinements[refinementLevel];
        if (!currentVals) return text;
        const otherVals = otherEffectData?.refinements?.[refinementLevel] || {};
        
        const currentValuesArr = Object.values(currentVals).slice(1); // skip level
        const otherValuesArr = Object.values(otherVals).slice(1);

        return text.replace(/\{VALOR_(\d+)\}/g, (_, number) => {
            const index = parseInt(number) - 1;
            const val = currentValuesArr[index];
            if (val === undefined) return `{VALOR_${number}}`;
            const otherVal = otherValuesArr[index];
            if (val === otherVal) return `__SVC${number}__`;
            return side === 'old' ? `__SVA${number}__` : `__SVB${number}__`;
        });
    };

    const restoreRefinementTokens = (text, effectData) => {
        if (!text || !effectData?.refinements) return text;
        const currentVals = effectData.refinements[refinementLevel];
        if (!currentVals) return text;
        const currentValuesArr = Object.values(currentVals).slice(1); // skip level

        return text.replace(/__SV[ABC](\d+)__/g, (_, number) => {
            const index = parseInt(number) - 1;
            const val = currentValuesArr[index];
            if (val === undefined) return '';
            return `[VAL]${val}[/VAL]`;
        });
    };

    const processRefinement = (text, effectData) => {
        if (!effectData?.refinements || !text) return text;
        const currentVals = effectData.refinements[refinementLevel];
        if (!currentVals) return text;
        const currentValuesArr = Object.values(currentVals).slice(1);

        return text.replace(/\{VALOR_(\d+)\}/g, (_, number) => {
            const index = parseInt(number) - 1;
            const val = currentValuesArr[index];
            if (val !== undefined) return `[VAL]${val}[/VAL]`;
            return `{VALOR_${number}}`;
        });
    };

    const renderDiffWithHighlight = (diffTokens, side, effectData) => {
        if (!diffTokens || diffTokens.length === 0) return [];
        return diffTokens.map((part, index) => {
            let className = "text-gray-300";
            if (side === 'left') {
                if (part.added) return null;
                if (part.removed) className = "text-red-400 line-through bg-red-900/30 px-1 rounded";
            } else {
                if (part.removed) return null;
                if (part.added) className = "text-green-400 font-bold bg-green-900/30 px-1 rounded";
            }

            let value = restoreIcons(part.value);
            let processedText = restoreRefinementTokens(value, effectData);
            processedText = processRefinement(processedText, effectData);
            processedText = replaceIcons(processedText);

            return (
                <span key={index} className={className}>
                    <HighlightText text={processedText} elementColor={themeColor} />
                </span>
            );
        }).filter(Boolean);
    };

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

    const oldEffect = beforeData?.effect;
    const newEffect = afterData?.effect;

    const oldName = translatedTexts[oldEffect?.title] || oldEffect?.title || "";
    const newName = translatedTexts[newEffect?.title] || newEffect?.title || "";
    const oldDescRaw = translatedTexts[oldEffect?.description] || oldEffect?.description || "";
    const newDescRaw = translatedTexts[newEffect?.description] || newEffect?.description || "";

    // Solo comparamos si existe versión anterior
    const hasComparison = !!beforeData;
    
    const nameDiff = hasComparison ? compareText(protectIcons(oldName), protectIcons(newName)) : [];
    const oldDesc = hasComparison ? processRefinementForDiff(oldDescRaw, oldEffect, 'old', newEffect) : "";
    const newDesc = hasComparison ? processRefinementForDiff(newDescRaw, newEffect, 'new', oldEffect) : "";
    const descDiff = hasComparison ? compareText(protectIcons(oldDesc), protectIcons(newDesc)) : [];

    const REFINEMENT_LABELS = ['R1', 'R2', 'R3', 'R4', 'R5'];

    return (
        <div className="min-h-screen bg-[#0f0f12] text-white selection:bg-yellow-500/30 overflow-x-hidden font-sans pb-32">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
            
            <Link href={`/${language}/beta`} className="absolute top-8 left-8 z-50 inline-flex items-center text-gray-400 hover:text-white transition-colors group bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold text-sm tracking-widest uppercase">Volver</span>
            </Link>

            {/* TOP SECTION: Hero & Stats */}
            <div className="relative w-full max-w-[1600px] mx-auto p-4 pt-20 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-12 min-h-[60vh]">
                <div className="w-full lg:w-[45%] h-[40vh] lg:h-[60vh] relative lg:sticky top-10 flex items-center justify-center z-10">
                    <div className="absolute inset-0 opacity-30 blur-3xl pointer-events-none" style={{ background: `radial-gradient(circle at center, ${themeColor} 0%, transparent 70%)` }}></div>
                    <Image src={weapon.image} alt={weapon.name} width={400} height={400} className="object-contain drop-shadow-2xl" priority unoptimized />
                </div>

                <div className="w-full lg:w-[55%] flex flex-col justify-center z-20">
                    <div className="mb-10 text-center lg:text-right drop-shadow-xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            {weapon.name}
                        </h1>
                        <div className="flex flex-wrap justify-center lg:justify-end gap-3 select-none mb-4">
                            <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-gray-300 border border-white/10 flex items-center gap-2">
                                RANGO {weapon.rank}
                            </span>
                            <span className="px-4 py-1 bg-red-500/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-red-400 border border-red-500/30 flex items-center gap-2">
                                <TriangleAlert className="w-3.5 h-3.5" /> BETA CHANGES ({versionBeforeLabel} ➔ {versionAfterLabel})
                            </span>
                        </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 w-full max-w-[480px] mx-auto lg:mr-0 z-20 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                        <h3 className="text-xl font-display italic font-black tracking-wide text-white mb-6 border-b border-white/5 pb-4">WEAPON STATS</h3>
                        <div className="flex flex-col gap-1">
                            {renderStatComparisonRow("BASE ATK (MAX)", weapon?.detailStats?.baseAtk?.max, weapon?.detailStats?.baseAtk?.max)}
                            {weapon?.detailStats?.subStat && (
                                renderStatComparisonRow(`${weapon.detailStats.subStat.name} (MAX)`, weapon?.detailStats?.subStat?.max, weapon.detailStats.subStat.max)
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM SECTION: Effect Diff */}
            <div className="relative w-full max-w-[1200px] mx-auto p-4 lg:p-12 pt-12">
                <div className="flex items-center justify-center gap-6 mb-12 relative">
                    <div className="h-[2px] w-24 md:w-48 bg-gradient-to-r from-transparent to-yellow-500/50"></div>
                    <h2 className="text-2xl md:text-4xl font-display italic font-black text-center tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                        WEAPON EFFECT CHANGES
                    </h2>
                    <div className="h-[2px] w-24 md:w-48 bg-gradient-to-l from-transparent to-yellow-500/50"></div>
                </div>

                <div className="flex flex-col gap-8 animate-fadeIn">
                    <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col will-change-transform">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 shadow-[0_0_15px_currentColor] rounded-l-3xl opacity-80" style={{ backgroundColor: themeColor, color: themeColor }}></div>
                        
                        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-6 pl-4 border-b border-white/5 pb-4 relative z-10">
                            <span className="text-sm font-black uppercase text-gray-300 tracking-widest">EFECTO DEL ARMA</span>

                            {newEffect?.refinements && (
                                <div className="flex flex-col w-full max-w-[250px] bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 group/coreslider">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">REFINAMIENTO</span>
                                        <span className="text-xs font-black text-white font-mono drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{REFINEMENT_LABELS[refinementLevel]}</span>
                                    </div>
                                    <div className="relative py-1">
                                        <div className="absolute inset-0 blur-md rounded-full scale-y-150 opacity-0 group-hover/coreslider:opacity-50 transition-opacity" style={{ backgroundColor: themeColor }}></div>
                                        <input
                                            type="range" min="0" max="4" step="1" value={refinementLevel}
                                            onChange={(e) => setRefinementLevel(parseInt(e.target.value))}
                                            className="relative z-10 w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                        />
                                    </div>
                                    <div className="flex justify-between px-0.5 mt-1">
                                        {REFINEMENT_LABELS.map((lvl, idx) => (
                                            <span key={lvl} className={`text-[9px] font-mono font-bold transition-colors ${refinementLevel === idx ? 'text-white scale-110' : 'text-gray-600'}`}>{lvl}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-4 pl-4">
                            {hasComparison ? (
                                <>
                                    {/* Old version (Before) */}
                                    <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4 opacity-70">
                                        <h4 className="text-lg font-display italic font-black text-red-200 mb-2">
                                            {renderDiffWithHighlight(nameDiff, 'left', oldEffect)}
                                        </h4>
                                        <div className="text-gray-400 text-sm leading-relaxed space-y-2">
                                            {renderDiffWithHighlight(descDiff, 'left', oldEffect)}
                                        </div>
                                    </div>
                                    {/* New version (After) */}
                                    <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-4">
                                        <h4 className="text-lg font-display italic font-black text-green-200 mb-2">
                                            {renderDiffWithHighlight(nameDiff, 'right', newEffect)}
                                        </h4>
                                        <div className="text-gray-200 text-sm leading-relaxed space-y-2">
                                            {renderDiffWithHighlight(descDiff, 'right', newEffect)}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                    <h4 className="text-xl font-display italic font-black text-white mb-3 drop-shadow-md">
                                        {newName}
                                    </h4>
                                    <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-3 font-sans relative z-10">
                                        <HighlightText text={replaceIcons(processRefinement(newDescRaw, newEffect))} elementColor={themeColor} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
