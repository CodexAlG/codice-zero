import React, { useState, useMemo, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import {
    getAvailableAgents,
    getAgentVersions,
    getAgentVersionData,
    getAgentSkills,
    getAgentHotfixData,
    getAgentHotfixes
} from '@/data/versionedAgentData';
import {
    getAvailableWeapons,
    getWeaponVersions,
    getWeaponVersionData,
    getWeaponHotfixData,
    getWeaponHotfixes
} from '@/data/versionedWeaponData';
import { agents as agentsData } from '@/data/agents';
import { replaceIcons } from '@/components/utils/TextWithIcons';
import { compareText, renderDiffText, compareNumber } from '@/utils/diffUtils';
import HighlightText from '../ui/HighlightText';
import { useDynamicTitle } from '@/hooks/useDynamicTitle';
import './BetaDiffViewer.css';
import { useLanguage } from '@/context/LanguageContext';

const staticTranslations = {
    es: {
        title: "Visualizador de Diferencias Beta",
        type: "Tipo",
        agents: "Agentes",
        weapons: "Armas",
        agent: "Agente",
        weapon: "Arma",
        version: "Versión",
        select: "Seleccionar...",
        emptyEntity: "Selecciona un {type} para continuar",
        emptyVersion: "Selecciona una versión para ver los detalles",
        noData: "No hay datos disponibles para esta versión",
        before: "Antes",
        after: "Después",
        values: "Valores",
        description: "Descripción",
        baseStats: "Estadísticas Base",
        weaponStats: "Estadísticas del Arma",
        skills: "Habilidades",
        weaponEffect: "Efecto del Arma",
        refinementLevel: "Nivel de Refinamiento",
        passiveTalent: "Talento Pasivo",
        onlyChanges: "(Solo Cambios)",
        noChanges: "No hay cambios en habilidades entre {v1} y {v2}.",
        noSkills: "No se encontraron habilidades para esta versión.",
        deletedSkills: "Habilidades Eliminadas",
        newSkills: "Nuevas Habilidades",
        hotfixRev: "Hotfix Rev.",
        hotfixChanges: "Cambios del Hotfix",
        hotfixNotFound: "Hotfix #{id} no encontrado para {name} ({version})",
        noHotfixChanges: "No se encontraron cambios en este hotfix",
        statNames: {
            hp: "HP", atk: "ATK", def: "DEF", impact: "Impacto",
            anomalyRate: "Tasa de Anomalía", anomalyMastery: "Maestría de Anomalía",
            baseAtk: "ATK Base"
        }
    },
    en: {
        title: "Beta Differences Viewer",
        type: "Type",
        agents: "Agents",
        weapons: "Weapons",
        agent: "Agent",
        weapon: "Weapon",
        version: "Version",
        select: "Select...",
        emptyEntity: "Select an {type} to continue",
        emptyVersion: "Select a version to see details",
        noData: "No data available for this version",
        before: "Before",
        after: "After",
        values: "Values",
        description: "Description",
        baseStats: "Base Stats",
        weaponStats: "Weapon Stats",
        skills: "Skills",
        weaponEffect: "Weapon Effect",
        refinementLevel: "Refinement Level",
        passiveTalent: "Passive Talent",
        onlyChanges: "(Only Changes)",
        noChanges: "No changes in skills between {v1} and {v2}.",
        noSkills: "No skills found for this version.",
        deletedSkills: "Deleted Skills",
        newSkills: "New Skills",
        hotfixRev: "Hotfix Rev.",
        hotfixChanges: "Hotfix Changes",
        hotfixNotFound: "Hotfix #{id} not found for {name} ({version})",
        noHotfixChanges: "No changes found in this hotfix",
        statNames: {
            hp: "HP", atk: "ATK", def: "DEF", impact: "Impact",
            anomalyRate: "Anomaly Buildup", anomalyMastery: "Anomaly Proficiency",
            baseAtk: "Base ATK"
        }
    }
};

export default function BetaDiffViewer() {
    const { language, translateText } = useLanguage();
    const t = staticTranslations[language] || staticTranslations.es;
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [selectedType, setSelectedType] = useState(() => {
        if (searchParams.get('weapon')) return 'armas';
        return 'agentes';
    });

    // Initialize state reading from URL Search Params
    const [selectedEntity, setSelectedEntity] = useState(() => {
        const agentParam = searchParams.get('agent');
        const weaponParam = searchParams.get('weapon');

        if (agentParam) {
            const agents = getAvailableAgents();
            return agents.find(a => a.name.toLowerCase() === agentParam.toLowerCase()) || null;
        } else if (weaponParam) {
            const weapons = getAvailableWeapons();
            return weapons.find(w => w.name.toLowerCase() === weaponParam.toLowerCase()) || null;
        }
        return null;
    });

    const [selectedVersion, setSelectedVersion] = useState(() => searchParams.get('version') || null);

    const [corePassiveLevel, setCorePassiveLevel] = useState(0); // 0 to 6
    const [refinementLevel, setRefinementLevel] = useState(0); // 0 to 4
    const [translatedTexts, setTranslatedTexts] = useState({});

    const CORE_PASSIVE_LABELS = ['0', 'A', 'B', 'C', 'D', 'E', 'F'];
    const REFINEMENT_LABELS = ['R1', 'R2', 'R3', 'R4', 'R5'];

    // Hotfix mode detection
    const hotfixParam = searchParams.get('hotfix');
    const isHotfixMode = !!hotfixParam && !!selectedEntity && !!selectedVersion;

    // Dynamic Title Management
    useDynamicTitle(isHotfixMode
        ? `Hotfix #${hotfixParam}: ${selectedEntity?.name}`
        : (selectedEntity ? `Beta Diff: ${selectedEntity.name}` : null));


    // Get available entities
    const availableEntities = useMemo(() => {
        return selectedType === 'agentes'
            ? getAvailableAgents()
            : getAvailableWeapons();
    }, [selectedType]);

    // Get available versions
    const availableVersions = useMemo(() => {
        if (!selectedEntity) return [];
        return selectedType === 'agentes'
            ? getAgentVersions(selectedEntity.id)
            : getWeaponVersions(selectedEntity.id);
    }, [selectedEntity, selectedType]);

    // Handle type change
    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setSelectedType(newType);
        setSelectedEntity(null);
        setSelectedVersion(null);

        // Clear all params on type change
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.delete('agent');
        current.delete('weapon');
        current.delete('version');
        current.delete('left'); // Legacy cleanup
        current.delete('right'); // Legacy cleanup

        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.replace(`${pathname}${query}`, { scroll: false });
    };

    const handleEntityChange = (e) => {
        const entityId = parseInt(e.target.value);
        const entity = availableEntities.find(ent => ent.id === entityId);

        setSelectedEntity(entity);
        setSelectedVersion(null); // Reset version on entity change

        // Update URL
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.delete('agent');
        current.delete('weapon');
        current.delete('version');
        current.delete('left');
        current.delete('right');

        if (entity) {
            const paramKey = selectedType === 'agentes' ? 'agent' : 'weapon';
            current.set(paramKey, entity.name.toLowerCase());
        }

        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.replace(`${pathname}${query}`, { scroll: false });
    };

    const handleVersionChange = (e) => {
        const val = e.target.value;
        setSelectedVersion(val || null);

        const current = new URLSearchParams(Array.from(searchParams.entries()));
        if (val) {
            current.set('version', val);
        } else {
            current.delete('version');
        }
        // Cleanup old params
        current.delete('left');
        current.delete('right');

        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.replace(`${pathname}${query}`, { scroll: false });
    };

    // Determine Comparison Versions
    const comparisonState = useMemo(() => {
        if (!selectedVersion || !availableVersions.length) return { current: null, previous: null };

        const currentIndex = availableVersions.indexOf(selectedVersion);
        if (currentIndex === -1) return { current: null, previous: null };

        // Logic: previous is the one BEFORE the current in the list
        // Assuming list is sorted [v1, v2, v3]. If v2 selected, prev is v1.
        // If v1 selected (index 0), prev is null.

        // Check sort order of availableVersions. usually getAgentVersions returns keys.
        // We should ensure they are sorted logicaly. Assuming the data provider does this or they are added in order.
        // Usually keys in JS object insertion order. v2.6.1, v2.6.2, v2.6.3.

        const previousVersion = currentIndex > 0 ? availableVersions[currentIndex - 1] : null;

        return {
            current: selectedVersion,
            previous: previousVersion
        };
    }, [selectedVersion, availableVersions]);

    const { current: versionAfter, previous: versionBefore } = comparisonState;

    // Helper to merge base data with its hotfixes to get the fully patched version data
    const getMergedData = (entityId, versionLabel, type) => {
        const rawData = type === 'agentes' 
            ? getAgentVersionData(entityId, versionLabel) 
            : getWeaponVersionData(entityId, versionLabel);
            
        if (!rawData) return null;
        
        const merged = { ...rawData };
        if (merged.hotfixes && merged.hotfixes.length > 0) {
            merged.hotfixes.forEach(hf => {
                if (hf.coreSkillScaling) merged.coreSkillScaling = hf.coreSkillScaling;
                if (hf.coreSkillScalingColors) merged.coreSkillScalingColors = hf.coreSkillScalingColors;
                if (hf.baseStats) {
                    merged.baseStats = { ...merged.baseStats, ...hf.baseStats };
                }
            });
        }
        return merged;
    };

    // Get Data
    const beforeData = useMemo(() => {
        if (!selectedEntity || !versionBefore) return null;
        return getMergedData(selectedEntity.id, versionBefore, selectedType);
    }, [selectedEntity, versionBefore, selectedType]);

    const afterData = useMemo(() => {
        if (!selectedEntity || !versionAfter) return null;
        return getMergedData(selectedEntity.id, versionAfter, selectedType);
    }, [selectedEntity, versionAfter, selectedType]);

    // Get Skills
    const agentSkills = useMemo(() => {
        if (selectedType === 'agentes' && selectedEntity) {
            return getAgentSkills(selectedEntity.id) || [];
        }
        return [];
    }, [selectedType, selectedEntity]);

    useEffect(() => {
        if (language === 'es' || !selectedEntity) return;

        let isActive = true;

        async function loadTranslations() {
            const stringsToTranslate = new Set();

            // --- Hotfix Data Translating ---
            if (isHotfixMode && hotfixParam) {
                const hotfixId = parseInt(hotfixParam);
                const hfData = selectedType === 'agentes'
                    ? getAgentHotfixData(selectedEntity.id, selectedVersion, hotfixId)
                    : getWeaponHotfixData(selectedEntity.id, selectedVersion, hotfixId);

                const origData = selectedType === 'agentes'
                    ? getAgentVersionData(selectedEntity.id, selectedVersion)
                    : getWeaponVersionData(selectedEntity.id, selectedVersion);

                if (hfData) {
                    if (selectedType === 'agentes' && hfData.skills) {
                        hfData.skills.forEach(s => {
                            if (s.type && !translatedTexts[s.type]) stringsToTranslate.add(s.type);
                            if (s.name && !translatedTexts[s.name]) stringsToTranslate.add(s.name);
                            if (s.description && !translatedTexts[s.description]) stringsToTranslate.add(s.description);
                        });
                    } else if (selectedType === 'armas' && hfData.effect) {
                        if (hfData.effect.title && !translatedTexts[hfData.effect.title]) stringsToTranslate.add(hfData.effect.title);
                        if (hfData.effect.description && !translatedTexts[hfData.effect.description]) stringsToTranslate.add(hfData.effect.description);
                    }
                }

                if (origData) {
                    if (selectedType === 'agentes' && origData.skills) {
                        origData.skills.forEach(s => {
                            if (s.type && !translatedTexts[s.type]) stringsToTranslate.add(s.type);
                            if (s.name && !translatedTexts[s.name]) stringsToTranslate.add(s.name);
                            if (s.description && !translatedTexts[s.description]) stringsToTranslate.add(s.description);
                        });
                    } else if (selectedType === 'armas' && origData.effect) {
                        if (origData.effect.title && !translatedTexts[origData.effect.title]) stringsToTranslate.add(origData.effect.title);
                        if (origData.effect.description && !translatedTexts[origData.effect.description]) stringsToTranslate.add(origData.effect.description);
                    }
                }
            }

            if (selectedType === 'agentes' && agentSkills.length) {
                agentSkills.forEach(skillObj => {
                    if (skillObj.type && !translatedTexts[skillObj.type]) stringsToTranslate.add(skillObj.type);
                    Object.values(skillObj.versions || {}).forEach(v => {
                        if (v.name && !translatedTexts[v.name]) stringsToTranslate.add(v.name);
                        if (v.description && !translatedTexts[v.description]) stringsToTranslate.add(v.description);
                    });
                });
            } else if (selectedType === 'armas') {
                if (afterData?.effect) {
                    if (afterData.effect.title && !translatedTexts[afterData.effect.title]) stringsToTranslate.add(afterData.effect.title);
                    if (afterData.effect.description && !translatedTexts[afterData.effect.description]) stringsToTranslate.add(afterData.effect.description);
                }
                if (beforeData?.effect) {
                    if (beforeData.effect.title && !translatedTexts[beforeData.effect.title]) stringsToTranslate.add(beforeData.effect.title);
                    if (beforeData.effect.description && !translatedTexts[beforeData.effect.description]) stringsToTranslate.add(beforeData.effect.description);
                }
            }

            const arr = Array.from(stringsToTranslate);
            const translations = [];
            for (const t of arr) {
                let res = await translateText(t);
                if (res && typeof res === 'string') {
                    // Clean DeepL breaking scaling tags
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
    }, [agentSkills, afterData, beforeData, language, selectedEntity, selectedType, translateText, isHotfixMode, hotfixParam]);

    // Skill Icons Mapping (Moved inside or outside, but keeping inside for simplicity of edit)
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
        "Potencial": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    };

    // Helper: Construct flat skills list for HighlightText context
    const getSkillsContext = (version) => {
        if (!agentSkills.length) return [];
        return agentSkills.map(skill => skill.versions?.[version]).filter(Boolean);
    };

    // Rendering Helpers
    const renderStatComparison = (statName, oldValue, newValue) => {
        // If single view (no oldValue), just show newValue
        if (oldValue === undefined || oldValue === null) {
            return (
                <div className="stat-row" key={statName}>
                    <div className="stat-name">{statName}</div>
                    <div className="stat-values">
                        <div className="stat-after">{newValue}</div>
                    </div>
                </div>
            );
        }

        const comparison = compareNumber(oldValue, newValue);
        const statusClass = comparison.status === 'buff' ? 'stat-buff' : comparison.status === 'nerf' ? 'stat-nerf' : 'stat-unchanged';
        return (
            <div className="stat-row" key={statName}>
                <div className="stat-name">{statName}</div>
                <div className="stat-values">
                    <div className="stat-before">{oldValue}</div>
                    <div className={`stat-after ${statusClass}`}>{newValue}</div>
                </div>
            </div>
        );
    };

    const renderAgentStats = () => {
        if (!afterData || !afterData.baseStats) return null;

        const newStats = afterData.baseStats;
        const oldStats = beforeData?.baseStats; // May be null if first version

        const hasComparison = !!oldStats;

        return (
            <div className="stats-section">
                <h3>{t.baseStats} {hasComparison ? `(${language === 'es' ? 'Cambios desde' : 'Changes since'} ${versionBefore})` : `(${versionAfter})`}</h3>
                <div className="stats-comparison">
                    {hasComparison && (
                        <div className="stats-column">
                            <h4>{t.before} ({versionBefore})</h4>
                            <div className="stat-list">
                                {oldStats.hp && <div className="stat-item">{t.statNames.hp}: {oldStats.hp.min} - {oldStats.hp.max}</div>}
                                {oldStats.atk && <div className="stat-item">{t.statNames.atk}: {oldStats.atk.min} - {oldStats.atk.max}</div>}
                                {oldStats.def && <div className="stat-item">{t.statNames.def}: {oldStats.def.min} - {oldStats.def.max}</div>}
                                {oldStats.impact && <div className="stat-item">{t.statNames.impact}: {oldStats.impact}</div>}
                                {oldStats.anomalyRate && <div className="stat-item">{t.statNames.anomalyRate}: {oldStats.anomalyRate}</div>}
                                {oldStats.anomalyMastery && <div className="stat-item">{t.statNames.anomalyMastery}: {oldStats.anomalyMastery}</div>}
                            </div>
                        </div>
                    )}
                    <div className="stats-column" style={{ width: hasComparison ? 'auto' : '100%' }}>
                        <h4>{hasComparison ? `${t.after} (${versionAfter})` : `${t.values} (${versionAfter})`}</h4>
                        <div className="stat-list">
                            {renderStatComparison(t.statNames.hp, oldStats ? `${oldStats.hp?.min} - ${oldStats.hp?.max}` : null, `${newStats.hp?.min} - ${newStats.hp?.max}`)}
                            {renderStatComparison(t.statNames.atk, oldStats ? `${oldStats.atk?.min} - ${oldStats.atk?.max}` : null, `${newStats.atk?.min} - ${newStats.atk?.max}`)}
                            {renderStatComparison(t.statNames.def, oldStats ? `${oldStats.def?.min} - ${oldStats.def?.max}` : null, `${newStats.def?.min} - ${newStats.def?.max}`)}
                            {renderStatComparison(t.statNames.impact, oldStats?.impact, newStats.impact)}
                            {renderStatComparison(t.statNames.anomalyRate, oldStats?.anomalyRate, newStats.anomalyRate)}
                            {renderStatComparison(t.statNames.anomalyMastery, oldStats?.anomalyMastery, newStats.anomalyMastery)}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Helper functions for scaling and icons

    // Replace {VALOR_X} with values from coreSkillScaling, with optional colors
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

    // For diffing: replaces {VALOR_X} with side-specific opaque tokens.
    // OLD side uses __SVA{X}__ and NEW side uses __SVB{X}__ when values differ,
    // or __SVC{X}__ for both sides when values are the same.
    // These tokens have NO common characters between old/new, preventing diffWords
    // from splitting them. restoreScalingTokens converts them back to [VAL]/[CV] tags.
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
            // If values are the same, use shared token (won't create diff)
            if (val === otherVal) return `__SVC${number}__`;
            // Different values: use side-specific token (will create diff)
            return side === 'old' ? `__SVA${number}__` : `__SVB${number}__`;
        });
    };

    // Converts opaque scaling tokens back to [VAL]value[/VAL] or [CV="color"]value[/CV]
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

    const protectIcons = (text) => text ? text.replace(/\[Icono ([^\]]+)\]/g, (match, type) => `__ICON_${type.replace(/\s+/g, '_')}__`) : "";
    const restoreIcons = (text) => text ? text.replace(/__ICON_(.*?)__/g, (match, type) => `[Icono ${type.replace(/_/g, ' ')}]`) : "";

    const renderDiffWithHighlight = (diffTokens, side, data, skillsContext) => {
        if (!diffTokens || diffTokens.length === 0) return [];

        return diffTokens.map((part, index) => {
            let className = "diff-unchanged";
            if (side === 'left') {
                if (part.added) return null;
                if (part.removed) className = "diff-removed";
            } else {
                if (part.removed) return null;
                if (part.added) className = "diff-added";
            }

            let value = restoreIcons(part.value);
            // Restore scaling tokens __SV[ABC]X__ to [VAL]/[CV] tags,
            // then fall back to processScaling for any remaining {VALOR_X}
            let processedText = restoreScalingTokens(value, data);
            processedText = processScaling(processedText, data);
            processedText = replaceIcons(processedText);

            return (
                <span key={index} className={className}>
                    <HighlightText
                        text={processedText}
                        elementColor={data?.elementColor || "#facc15"}
                        skillIcons={skillIcons}
                        skills={skillsContext || []}
                    />
                </span>
            );
        }).filter(Boolean);
    };

    const renderSkillsComparison = () => {
        if (!agentSkills.length || !versionAfter) return null;

        const isComparison = !!versionBefore;

        const beforeSkillsContext = isComparison ? getSkillsContext(versionBefore) : [];
        const afterSkillsContext = getSkillsContext(versionAfter);

        const getLastKnownSkillVersion = (skillVersions, currentVersion) => {
            const currentIndex = availableVersions.indexOf(currentVersion);
            if (currentIndex === -1) return null;
            for (let i = currentIndex - 1; i >= 0; i--) {
                const version = availableVersions[i];
                if (skillVersions[version]) return version;
            }
            return null;
        };

        const mergedVersionDataCache = new Map();
        const getMergedVersionData = (version) => {
            if (!version) return null;
            if (mergedVersionDataCache.has(version)) return mergedVersionDataCache.get(version);
            const data = getMergedData(selectedEntity.id, version, selectedType);
            mergedVersionDataCache.set(version, data);
            return data;
        };

        const sortedSkills = [...agentSkills];
        const currentOrder = new Map();
        if (afterData?.skills) {
            afterData.skills.forEach((skill, idx) => {
                currentOrder.set(`${skill.type}::${skill.name}`, idx);
            });
        }
        sortedSkills.sort((a, b) => {
            const aKey = `${a.type}::${a.versions?.[versionAfter]?.name || ''}`;
            const bKey = `${b.type}::${b.versions?.[versionAfter]?.name || ''}`;
            const aIndex = currentOrder.has(aKey) ? currentOrder.get(aKey) : Number.MAX_SAFE_INTEGER;
            const bIndex = currentOrder.has(bKey) ? currentOrder.get(bKey) : Number.MAX_SAFE_INTEGER;
            if (aIndex !== bIndex) return aIndex - bIndex;
            if (a.type !== b.type) return a.type.localeCompare(b.type);
            return aKey.localeCompare(bKey);
        });

        const comparisonElements = sortedSkills.map((skillObj, index) => {
            const newSkill = skillObj.versions[versionAfter];
            const oldSkillVersion = isComparison ? getLastKnownSkillVersion(skillObj.versions, versionAfter) : null;
            const oldSkill = oldSkillVersion ? skillObj.versions[oldSkillVersion] : null;
            const oldSkillVersionData = oldSkillVersion ? getMergedVersionData(oldSkillVersion) : beforeData;
            const oldScalingData = oldSkillVersionData || beforeData;

            if (!newSkill && !oldSkill) return null;

            const isDeleted = isComparison && oldSkill && !newSkill;
            const isAdded = isComparison && newSkill && !oldSkill;
            const isMatched = isComparison && oldSkill && newSkill;

            const oldName = translatedTexts[oldSkill?.name] || oldSkill?.name || "";
            const newName = translatedTexts[newSkill?.name] || newSkill?.name || "";
            const oldDescRaw = translatedTexts[oldSkill?.description] || oldSkill?.description || "";
            const newDescRaw = translatedTexts[newSkill?.description] || newSkill?.description || "";

            const oldDesc = isComparison ? processScalingForDiff(oldDescRaw, oldScalingData, 'old', afterData) : oldDescRaw;
            const newDesc = isComparison ? processScalingForDiff(newDescRaw, afterData, 'new', oldScalingData) : newDescRaw;

            const nameDiff = isMatched ? compareText(protectIcons(oldName), protectIcons(newName)) : [{ value: protectIcons(isDeleted ? oldName : newName), added: false, removed: false }];
            const descDiff = isMatched ? compareText(protectIcons(oldDesc), protectIcons(newDesc)) : [{ value: protectIcons(isDeleted ? oldDesc : newDesc), added: false, removed: false }];

            const hasChanges = isComparison
                ? (isMatched ? (nameDiff.some(t => t.added || t.removed) || descDiff.some(t => t.added || t.removed)) : true)
                : true;

            if (isComparison && !hasChanges) return null;

            return (
                <div key={skillObj.id || index} className="skill-group icon-override">
                    <div className="flex items-center justify-between mb-2">
                        <div className="skill-type">{translatedTexts[skillObj.type] || skillObj.type}</div>
                        {(skillObj.type === "Pasiva Central" || skillObj.type === "Pasiva") && (
                            <div className="flex flex-col items-center w-64 mr-4">
                                <h5 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 self-start w-full text-left flex items-center gap-2">
                                    <span className="w-1 h-3 bg-yellow-500 rounded-full"></span>
                                    {t.passiveTalent}
                                </h5>
                                <div className="relative w-full h-8 flex items-center">
                                    <div className="absolute w-full h-1 bg-white/10 rounded-full"></div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="6"
                                        step="1"
                                        value={corePassiveLevel}
                                        onChange={(e) => setCorePassiveLevel(Number(e.target.value))}
                                        className="w-full absolute z-20 cursor-pointer opacity-0 h-8"
                                        title={`Nivel: ${CORE_PASSIVE_LABELS[corePassiveLevel]}`}
                                    />
                                    <div className="w-full flex justify-between absolute z-10 pointer-events-none px-1">
                                        {CORE_PASSIVE_LABELS.map((label, idx) => (
                                            <div key={label} className={`relative flex flex-col items-center group transition-all duration-300 ${idx === corePassiveLevel ? 'scale-110' : ''}`}>
                                                <div className={`w-3 h-3 rounded-full mb-2 transition-all duration-300 ${idx === corePassiveLevel ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-125' : idx < corePassiveLevel ? 'bg-yellow-500/50' : 'bg-gray-700'}`}></div>
                                                <span className={`text-[10px] font-mono font-bold transition-colors duration-300 ${idx === corePassiveLevel ? 'text-white' : 'text-gray-600'}`}>{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute h-1 bg-yellow-500/50 rounded-full transition-all duration-300 left-0" style={{ width: `${(corePassiveLevel / 6) * 100}%` }}></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="skill-comparison-item">
                        <div className="skill-grid" style={{ gridTemplateColumns: isComparison ? '1fr 1fr' : '1fr' }}>
                            {isComparison && (
                                <div className="skill-column skill-before">
                                    <div className="skill-name">
                                        {oldSkill && !isAdded
                                            ? renderDiffWithHighlight(nameDiff, 'left', oldSkillVersionData || beforeData, beforeSkillsContext)
                                            : <div className="skill-empty skill-empty-added" />}
                                    </div>
                                    <div className="skill-description">
                                        {oldSkill && !isAdded
                                            ? renderDiffWithHighlight(descDiff, 'left', oldSkillVersionData || beforeData, beforeSkillsContext)
                                            : <div className="skill-empty skill-empty-added" />}
                                    </div>
                                </div>
                            )}
                            <div className="skill-column skill-after">
                                <div className="skill-name">
                                    {newSkill && !isDeleted
                                        ? renderDiffWithHighlight(nameDiff, 'right', afterData, afterSkillsContext)
                                        : <div className="skill-empty skill-empty-added" />}
                                </div>
                                <div className="skill-description">
                                    {newSkill && !isDeleted
                                        ? renderDiffWithHighlight(descDiff, 'right', afterData, afterSkillsContext)
                                        : <div className="skill-empty skill-empty-added" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }).filter(Boolean);

        if (comparisonElements.length === 0) {
            return (
                <div className="skills-section">
                    <h3>{t.skills} ({versionAfter})</h3>
                    <div className="p-4 text-center text-gray-400 bg-white/5 rounded-lg border border-white/10">
                        {isComparison
                            ? t.noChanges.replace('{v1}', versionBefore).replace('{v2}', versionAfter)
                            : t.noSkills}
                    </div>
                </div>
            );
        }

        return (
            <div className="skills-section">
                <h3>{t.skills} {isComparison && t.onlyChanges}</h3>
                {comparisonElements}
            </div>
        );
    };

    const renderWeaponStats = () => {
        // Logic similar to Agent Stats but for Weapons
        // Omitted for brevity in this specific tool call patch, but in real file I'd implement it fully.
        // Since I am replacing the WHOLE file (implied by previous context), I must provide it.
        // IMPORTANT: I will implement the weapon logic fully below.

        if (!afterData || !afterData.detailStats) return null;
        const newStats = afterData.detailStats;
        const oldStats = beforeData?.detailStats;
        const isComparison = !!oldStats;

        return (
            <div className="stats-section">
                <h3>{t.weaponStats}</h3>
                <div className="stats-comparison">
                    {isComparison && (
                        <div className="stats-column">
                            <h4>{t.before} ({versionBefore})</h4>
                            <div className="stat-list">
                                <div className="stat-item">{t.statNames.baseAtk}: {oldStats.baseAtk.min} - {oldStats.baseAtk.max}</div>
                                <div className="stat-item">{oldStats.subStat.name}: {oldStats.subStat.min} - {oldStats.subStat.max}</div>
                            </div>
                        </div>
                    )}
                    <div className="stats-column">
                        <h4>{isComparison ? `${t.after} (${versionAfter})` : `${t.values} (${versionAfter})`}</h4>
                        <div className="stat-list">
                            {renderStatComparison(t.statNames.baseAtk, oldStats ? `${oldStats.baseAtk.min} - ${oldStats.baseAtk.max}` : null, `${newStats.baseAtk.min} - ${newStats.baseAtk.max}`)}
                            {renderStatComparison(newStats.subStat.name, oldStats ? `${oldStats.subStat.min} - ${oldStats.subStat.max}` : null, `${newStats.subStat.min} - ${newStats.subStat.max}`)}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderWeaponEffect = () => {
        if (!afterData || !afterData.effect) return null;
        const newEffect = afterData.effect;
        const oldEffect = beforeData?.effect;
        const isComparison = !!oldEffect;

        const currentNewRefinement = newEffect.refinements?.[refinementLevel];
        const currentOldRefinement = oldEffect?.refinements?.[refinementLevel];

        // Get refinement values as an ordered array (excluding 'level' key)
        const getRefinementValues = (refinement) => {
            if (!refinement) return [];
            return Object.entries(refinement).filter(([key]) => key !== 'level').map(([_, value]) => value);
        };

        // Replace {VALOR_X} placeholders with actual values wrapped in [VAL] tags
        const processWeaponScaling = (description, refinement) => {
            if (!refinement || !description) return description;
            const values = getRefinementValues(refinement);
            return description.replace(/\{VALOR_(\d+)\}/g, (_, number) => {
                const index = parseInt(number) - 1;
                const val = values[index];
                return val !== undefined ? `[VAL]${val}[/VAL]` : `{VALOR_${number}}`;
            });
        };

        // Replace {VALOR_X} with opaque tokens for diffing (same strategy as agents)
        const processWeaponScalingForDiff = (description, refinement, side, otherRefinement) => {
            if (!refinement || !description) return description;
            const values = getRefinementValues(refinement);
            const otherValues = otherRefinement ? getRefinementValues(otherRefinement) : [];
            return description.replace(/\{VALOR_(\d+)\}/g, (_, number) => {
                const index = parseInt(number) - 1;
                const val = values[index];
                if (val === undefined) return `{VALOR_${number}}`;
                const otherVal = otherValues[index];
                if (val === otherVal) return `__SVC${number}__`;
                return side === 'old' ? `__SVA${number}__` : `__SVB${number}__`;
            });
        };

        // Restore opaque tokens to [VAL] tags using side-specific refinement data
        const restoreWeaponScalingTokens = (text, refinement) => {
            if (!text || !refinement) return text;
            const values = getRefinementValues(refinement);
            return text.replace(/__SV[ABC](\d+)__/g, (_, number) => {
                const index = parseInt(number) - 1;
                const val = values[index];
                return val !== undefined ? `[VAL]${val}[/VAL]` : '';
            });
        };

        // For comparison: use opaque tokens for proper diff detection
        // For single view: use raw {VALOR_X} (processScaling applied at render time)
        const newDescRaw = translatedTexts[newEffect.description] || newEffect.description;
        const oldDescRaw = translatedTexts[oldEffect?.description] || oldEffect?.description || "";

        let newDescWithValues, oldDescWithValues;
        if (isComparison) {
            newDescWithValues = processWeaponScalingForDiff(newDescRaw, currentNewRefinement, 'new', currentOldRefinement);
            oldDescWithValues = processWeaponScalingForDiff(oldDescRaw, currentOldRefinement, 'old', currentNewRefinement);
        } else {
            newDescWithValues = processWeaponScaling(newDescRaw, currentNewRefinement);
            oldDescWithValues = "";
        }
        const descDiff = isComparison ? compareText(oldDescWithValues, newDescWithValues) : [{ value: newDescWithValues, added: false, removed: false }];

        // Custom renderDiffWithHighlight for weapons that restores weapon scaling tokens
        const renderWeaponDiff = (diffTokens, side) => {
            if (!diffTokens || diffTokens.length === 0) return [];
            const refinement = side === 'left' ? currentOldRefinement : currentNewRefinement;
            const data = side === 'left' ? beforeData : afterData;
            return diffTokens.map((part, index) => {
                let className = "diff-unchanged";
                if (side === 'left') {
                    if (part.added) return null;
                    if (part.removed) className = "diff-removed";
                } else {
                    if (part.removed) return null;
                    if (part.added) className = "diff-added";
                }
                let processedText = restoreWeaponScalingTokens(part.value, refinement);
                processedText = processWeaponScaling(processedText, refinement);
                processedText = replaceIcons(processedText);
                return (
                    <span key={index} className={className}>
                        <HighlightText
                            text={processedText}
                            elementColor={data?.elementColor || "#facc15"}
                            skillIcons={skillIcons}
                            skills={[]}
                        />
                    </span>
                );
            }).filter(Boolean);
        };

        return (
            <div className="effect-section">
                <h3>{t.weaponEffect}</h3>
                <div className="effect-title">{translatedTexts[newEffect.title] || newEffect.title}</div>
                {newEffect.refinements && newEffect.refinements.length > 0 && (
                    <div className="mt-2 mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-[#71717a] uppercase tracking-[0.1em]">{t.refinementLevel}</span>
                            <span className="text-xs font-mono font-bold text-[#fbbf24]">{REFINEMENT_LABELS[refinementLevel]}</span>
                        </div>
                        <div className="relative h-10 w-full flex items-center">
                            <input type="range" min="0" max="4" step="1" value={refinementLevel} onChange={(e) => setRefinementLevel(Number(e.target.value))} className="w-full absolute z-20 cursor-pointer opacity-0 h-10" title={`Nivel: ${REFINEMENT_LABELS[refinementLevel]}`} />
                            {/* Track background */}
                            <div className="absolute w-full h-[3px] bg-[#1e1e21] rounded-full" />
                            {/* Track fill */}
                            <div className="absolute h-[3px] bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-full transition-all duration-300 ease-out" style={{ width: `${(refinementLevel / 4) * 100}%` }} />
                            {/* Dots and labels */}
                            <div className="w-full flex justify-between absolute z-10 pointer-events-none">
                                {REFINEMENT_LABELS.map((label, idx) => (
                                    <div key={label} className="relative flex flex-col items-center transition-all duration-300">
                                        <div className={`w-2.5 h-2.5 rounded-full mb-1.5 transition-all duration-300 ${idx === refinementLevel ? 'bg-[#fbbf24] shadow-[0_0_8px_rgba(251,191,36,0.6)] scale-150' : idx < refinementLevel ? 'bg-[#fbbf24]/40' : 'bg-[#27272a]'}`} />
                                        <span className={`text-[9px] font-mono font-bold tracking-wider transition-colors duration-300 ${idx === refinementLevel ? 'text-[#fbbf24]' : 'text-[#3f3f46]'}`}>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <div className="effect-grid">
                    {isComparison && (
                        <div className="effect-column effect-before">
                            <h4>{t.before} ({versionBefore})</h4>
                            <div className="effect-description">{renderWeaponDiff(descDiff, 'left')}</div>
                        </div>
                    )}
                    <div className={`effect-column effect-after`}>
                        <h4>{isComparison ? `${t.after} (${versionAfter})` : `${t.description} (${versionAfter})`}</h4>
                        <div className="effect-description">
                            {isComparison
                                ? renderWeaponDiff(descDiff, 'right')
                                : <HighlightText text={replaceIcons(newDescWithValues)} elementColor={afterData?.elementColor} skillIcons={skillIcons} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // === HOTFIX VIEW ===
    const renderHotfixView = () => {
        if (!selectedEntity || !selectedVersion || !hotfixParam) return null;

        const hotfixId = parseInt(hotfixParam);
        const hotfixData = selectedType === 'agentes'
            ? getAgentHotfixData(selectedEntity.id, selectedVersion, hotfixId)
            : getWeaponHotfixData(selectedEntity.id, selectedVersion, hotfixId);

        if (!hotfixData) {
            return (
                <div className="beta-diff-viewer">
                    <div className="diff-content">
                        <div className="empty-state">
                            <p>{t.hotfixNotFound.replace('{id}', hotfixId).replace('{name}', selectedEntity.name).replace('{version}', selectedVersion)}</p>
                        </div>
                    </div>
                </div>
            );
        }

        // Get agent icon
        const agentInfo = agentsData.find(a => a.id === selectedEntity.id);
        const entityIcon = agentInfo?.image;

        // Get original version data (or previous hotfix data)
        const originalData = selectedType === 'agentes'
            ? getAgentVersionData(selectedEntity.id, selectedVersion)
            : getWeaponVersionData(selectedEntity.id, selectedVersion);

        // For agents: compare original skills vs hotfix skills
        const hotfixSkills = hotfixData.skills || [];

        const getMergedVersionDataFor = (version) => {
            if (!version) return null;
            return getMergedData(selectedEntity.id, version, selectedType);
        };

        // Find what the skill looked like before this hotfix
        const getPreviousSkillInfo = (hotfixSkill) => {
            if (!hotfixSkill?.name) return null;
            const versions = availableVersions;
            const currentIndex = versions.indexOf(selectedVersion);
            if (currentIndex === -1) return null;

            const searchVersion = (versionLabel) => {
                const versionData = selectedType === 'agentes'
                    ? getAgentVersionData(selectedEntity.id, versionLabel)
                    : getWeaponVersionData(selectedEntity.id, versionLabel);
                if (!versionData?.skills) return null;

                const hotfixes = selectedType === 'agentes'
                    ? getAgentHotfixes(selectedEntity.id, versionLabel)
                    : getWeaponHotfixes(selectedEntity.id, versionLabel);

                const orderedHotfixes = (hotfixes || []).slice().sort((a, b) => b.id - a.id);
                for (const hf of orderedHotfixes) {
                    if (versionLabel === selectedVersion && hf.id >= hotfixId) continue;
                    const prevSkill = hf.skills?.find(s => s.name === hotfixSkill.name);
                    if (prevSkill) {
                        return {
                            skill: prevSkill,
                            version: versionLabel,
                            versionData: getMergedVersionDataFor(versionLabel)
                        };
                    }
                }

                const baseSkill = versionData.skills.find(s => s.name === hotfixSkill.name);
                if (baseSkill) {
                    return {
                        skill: baseSkill,
                        version: versionLabel,
                        versionData: getMergedVersionDataFor(versionLabel)
                    };
                }

                return null;
            };

            let result = searchVersion(selectedVersion);
            if (result) return result;

            for (let i = currentIndex - 1; i >= 0; i--) {
                result = searchVersion(versions[i]);
                if (result) return result;
            }

            return null;
        };

        return (
            <div className="beta-diff-viewer">
                {/* Hotfix Header */}
                <div className="diff-header" style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                    <div className="flex items-center gap-5">
                        {entityIcon && (
                            <img
                                src={entityIcon}
                                alt={selectedEntity.name}
                                className="rounded-xl border-2 border-red-500/30 object-cover shadow-lg shadow-red-500/10"
                                style={{ width: '80px', height: '80px' }}
                            />
                        )}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-bold rounded-md uppercase tracking-wider border border-red-500/30">
                                    {t.hotfixRev} {hotfixData.revision || hotfixId}
                                </span>
                            </div>
                            <h1 className="text-2xl font-bold text-white m-0 mb-1">{selectedEntity.name}</h1>
                            <div className="flex items-center gap-2">
                                <span className="text-[#a1a1aa] text-sm font-medium">{selectedVersion}</span>
                                {hotfixData.date && <span className="text-[#71717a] text-sm">• {hotfixData.date}</span>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hotfix Content */}
                <div className="diff-content">
                    {selectedType === 'agentes' && hotfixSkills.length > 0 && (
                        <div className="skills-section">
                            <h3>{t.hotfixChanges}</h3>
                            {hotfixSkills.map((hfSkill, index) => {
                                const prevSkillInfo = getPreviousSkillInfo(hfSkill);
                                const prevSkill = prevSkillInfo?.skill;
                                const prevSkillData = prevSkillInfo?.versionData || originalData;
                                const oldDesc = translatedTexts[prevSkill?.description] || prevSkill?.description || "";
                                const newDesc = translatedTexts[hfSkill.description] || hfSkill.description || "";
                                const oldName = translatedTexts[prevSkill?.name] || prevSkill?.name || "";
                                const newName = translatedTexts[hfSkill.name] || hfSkill.name || "";

                                const nameDiff = compareText(protectIcons(oldName), protectIcons(newName));
                                const descDiff = compareText(protectIcons(oldDesc), protectIcons(newDesc));

                                return (
                                    <div key={hfSkill.type + index} className="skill-group icon-override">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="skill-type">{translatedTexts[hfSkill.type] || hfSkill.type}</div>
                                            {(hfSkill.type === "Pasiva Central" || hfSkill.type === "Pasiva") && (
                                                <div className="flex flex-col items-center w-64 mr-4">
                                                    <h5 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 self-start w-full text-left flex items-center gap-2">
                                                        <span className="w-1 h-3 bg-yellow-500 rounded-full"></span>
                                                        {t.passiveTalent}
                                                    </h5>
                                                    <div className="relative w-full h-8 flex items-center">
                                                        <div className="absolute w-full h-1 bg-white/10 rounded-full"></div>
                                                        <input
                                                            type="range"
                                                            min="0"
                                                            max="6"
                                                            step="1"
                                                            value={corePassiveLevel}
                                                            onChange={(e) => setCorePassiveLevel(Number(e.target.value))}
                                                            className="w-full absolute z-20 cursor-pointer opacity-0 h-8"
                                                            title={`Nivel: ${CORE_PASSIVE_LABELS[corePassiveLevel]}`}
                                                        />
                                                        <div className="w-full flex justify-between absolute z-10 pointer-events-none px-1">
                                                            {CORE_PASSIVE_LABELS.map((label, idx) => (
                                                                <div key={label} className={`relative flex flex-col items-center group transition-all duration-300 ${idx === corePassiveLevel ? 'scale-110' : ''}`}>
                                                                    <div className={`w-3 h-3 rounded-full mb-2 transition-all duration-300 ${idx === corePassiveLevel ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-125' : idx < corePassiveLevel ? 'bg-yellow-500/50' : 'bg-gray-700'}`}></div>
                                                                    <span className={`text-[10px] font-mono font-bold transition-colors duration-300 ${idx === corePassiveLevel ? 'text-white' : 'text-gray-600'}`}>{label}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="absolute h-1 bg-yellow-500/50 rounded-full transition-all duration-300 left-0" style={{ width: `${(corePassiveLevel / 6) * 100}%` }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="skill-comparison-item">
                                            <div className="skill-grid">
                                                <div className="skill-column skill-before">
                                                    <h4>{t.before}</h4>
                                                    <div className="skill-name">
                                                        {prevSkill ? renderDiffWithHighlight(nameDiff, 'left', prevSkillData) : <span className="text-gray-500 italic">{t.before}</span>}
                                                    </div>
                                                    <div className="skill-description">
                                                        {prevSkill ? renderDiffWithHighlight(descDiff, 'left', prevSkillData) : null}
                                                    </div>
                                                </div>
                                                <div className="skill-column skill-after">
                                                    <h4>{t.after} (Hotfix)</h4>
                                                    <div className="skill-name">
                                                        {renderDiffWithHighlight(nameDiff, 'right', { ...originalData, ...hotfixData })}
                                                    </div>
                                                    <div className="skill-description">
                                                        {renderDiffWithHighlight(descDiff, 'right', { ...originalData, ...hotfixData })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {hotfixSkills.length === 0 && (
                        <div className="empty-state"><p>{t.noHotfixChanges}</p></div>
                    )}
                </div>
            </div>
        );
    };

    // === HOTFIX MODE: Render hotfix view instead of normal view ===
    if (isHotfixMode) {
        return renderHotfixView();
    }

    return (
        <div className="beta-diff-viewer">
            <div className="diff-header">
                <h1>{t.title}</h1>
                <div className="diff-controls">
                    <div className="control-group">
                        <label htmlFor="type-select">{t.type}</label>
                        <select id="type-select" value={selectedType} onChange={handleTypeChange} className="diff-select">
                            <option value="agentes">{t.agents}</option>
                            <option value="armas">{t.weapons}</option>
                        </select>
                    </div>
                    <div className="control-group">
                        <label htmlFor="entity-select">{selectedType === 'agentes' ? t.agent : t.weapon}</label>
                        <select id="entity-select" value={selectedEntity?.id || ''} onChange={handleEntityChange} className="diff-select" disabled={!availableEntities.length}>
                            <option value="">{t.select}</option>
                            {availableEntities.map(entity => (
                                <option key={entity.id} value={entity.id}>{entity.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="control-group">
                        <label htmlFor="version-select">{t.version}</label>
                        <select id="version-select" value={selectedVersion || ''} onChange={handleVersionChange} className="diff-select" disabled={!selectedEntity || !availableVersions.length}>
                            <option value="">{t.select}</option>
                            {availableVersions.map(version => <option key={version} value={version}>{version}</option>)}
                        </select>
                    </div>

                </div>
            </div>
            <div className="diff-content">
                {!selectedEntity && <div className="empty-state"><p>{t.emptyEntity.replace('{type}', selectedType === 'agentes' ? t.agent : t.weapon)}</p></div>}
                {selectedEntity && !selectedVersion && <div className="empty-state"><p>{t.emptyVersion}</p></div>}
                {selectedEntity && selectedVersion && afterData && (
                    <>
                        {selectedType === 'agentes' ? renderAgentStats() : renderWeaponStats()}
                        {selectedType === 'agentes' ? renderSkillsComparison() : renderWeaponEffect()}
                    </>
                )}
                {selectedEntity && selectedVersion && !afterData && <div className="empty-state"><p>{t.noData}</p></div>}
            </div>
        </div>
    );
}
