"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import {
    getAvailableAgents,
    getAgentVersions,
    getAgentVersionData,
    getAgentSkills // IMPORTED
} from '@/data/versionedAgentData';
import {
    getAvailableWeapons,
    getWeaponVersions,
    getWeaponVersionData
} from '@/data/versionedWeaponData';
import { replaceIcons } from '@/components/utils/TextWithIcons';
import { compareText, renderDiffText, compareNumber } from '@/utils/diffUtils';
import HighlightText from '../ui/HighlightText';
import { useDynamicTitle } from '@/hooks/useDynamicTitle';
import './BetaDiffViewer.css';

export default function BetaDiffViewer() {
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

    const CORE_PASSIVE_LABELS = ['0', 'A', 'B', 'C', 'D', 'E', 'F'];
    const REFINEMENT_LABELS = ['R1', 'R2', 'R3', 'R4', 'R5'];

    // Dynamic Title Management
    useDynamicTitle(selectedEntity ? `Beta Diff: ${selectedEntity.name}` : null);


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

    // Get Data
    const beforeData = useMemo(() => {
        if (!selectedEntity || !versionBefore) return null;
        return selectedType === 'agentes'
            ? getAgentVersionData(selectedEntity.id, versionBefore)
            : getWeaponVersionData(selectedEntity.id, versionBefore);
    }, [selectedEntity, versionBefore, selectedType]);

    const afterData = useMemo(() => {
        if (!selectedEntity || !versionAfter) return null;
        return selectedType === 'agentes'
            ? getAgentVersionData(selectedEntity.id, versionAfter)
            : getWeaponVersionData(selectedEntity.id, versionAfter);
    }, [selectedEntity, versionAfter, selectedType]);

    // Get Skills
    const agentSkills = useMemo(() => {
        if (selectedType === 'agentes' && selectedEntity) {
            return getAgentSkills(selectedEntity.id) || [];
        }
        return [];
    }, [selectedType, selectedEntity]);

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
                <h3>Estadísticas Base {hasComparison ? `(Cambios desde ${versionBefore})` : `(${versionAfter})`}</h3>
                <div className="stats-comparison">
                    {hasComparison && (
                        <div className="stats-column">
                            <h4>Antes ({versionBefore})</h4>
                            <div className="stat-list">
                                {oldStats.hp && <div className="stat-item">HP: {oldStats.hp.min} - {oldStats.hp.max}</div>}
                                {oldStats.atk && <div className="stat-item">ATK: {oldStats.atk.min} - {oldStats.atk.max}</div>}
                                {oldStats.def && <div className="stat-item">DEF: {oldStats.def.min} - {oldStats.def.max}</div>}
                                {oldStats.impact && <div className="stat-item">Impact: {oldStats.impact}</div>}
                                {oldStats.anomalyRate && <div className="stat-item">Tasa de Anomalía: {oldStats.anomalyRate}</div>}
                                {oldStats.anomalyMastery && <div className="stat-item">Maestría de Anomalía: {oldStats.anomalyMastery}</div>}
                            </div>
                        </div>
                    )}
                    <div className="stats-column" style={{ width: hasComparison ? 'auto' : '100%' }}>
                        <h4>{hasComparison ? `Después (${versionAfter})` : `Valores (${versionAfter})`}</h4>
                        <div className="stat-list">
                            {renderStatComparison('HP', oldStats ? `${oldStats.hp?.min} - ${oldStats.hp?.max}` : null, `${newStats.hp?.min} - ${newStats.hp?.max}`)}
                            {renderStatComparison('ATK', oldStats ? `${oldStats.atk?.min} - ${oldStats.atk?.max}` : null, `${newStats.atk?.min} - ${newStats.atk?.max}`)}
                            {renderStatComparison('DEF', oldStats ? `${oldStats.def?.min} - ${oldStats.def?.max}` : null, `${newStats.def?.min} - ${newStats.def?.max}`)}
                            {renderStatComparison('Impact', oldStats?.impact, newStats.impact)}
                            {renderStatComparison('Tasa de Anomalía', oldStats?.anomalyRate, newStats.anomalyRate)}
                            {renderStatComparison('Maestría de Anomalía', oldStats?.anomalyMastery, newStats.anomalyMastery)}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Helper functions for scaling and icons
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
            let processedText = processScaling(value, data);
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

        // Helper: Calculate similarity between two strings (Jaccard token overlap)
        const calculateSimilarity = (str1, str2) => {
            if (!str1 || !str2) return 0;
            const s1 = str1.toLowerCase();
            const s2 = str2.toLowerCase();
            if (s1 === s2) return 1.0;

            const tokens1 = new Set(s1.split(/\s+/));
            const tokens2 = new Set(s2.split(/\s+/));
            const intersection = new Set([...tokens1].filter(x => tokens2.has(x)));
            const union = new Set([...tokens1, ...tokens2]);

            return union.size > 0 ? intersection.size / union.size : 0;
        };

        // Collect all old skills from previous versions (for matching)
        // Key = "type:versionIndex" to track used skills
        const usedOldSkills = new Set();

        // Find the best matching old skill from previous versions
        // Searches backwards through versions to find the most recent match
        const findBestMatchingOldSkill = (newSkill, skillType) => {
            if (!newSkill || !isComparison) return null;

            const currentIndex = availableVersions.indexOf(versionAfter);
            if (currentIndex <= 0) return null;

            let bestMatch = null;
            let bestScore = 0;
            let bestKey = null;

            // Iterate backwards through previous versions
            for (let vIdx = currentIndex - 1; vIdx >= 0; vIdx--) {
                const prevVersion = availableVersions[vIdx];

                // Find all skills of the same type in this version
                for (let skillIdx = 0; skillIdx < agentSkills.length; skillIdx++) {
                    const skillObj = agentSkills[skillIdx];
                    if (skillObj.type !== skillType) continue;

                    const oldSkillData = skillObj.versions[prevVersion];
                    if (!oldSkillData) continue;

                    // Create unique key to track this old skill
                    const skillKey = `${skillType}:${prevVersion}:${skillIdx}`;

                    // Skip if this old skill was already matched to another new skill
                    if (usedOldSkills.has(skillKey)) continue;

                    // Calculate similarity
                    const nameSim = calculateSimilarity(newSkill.name, oldSkillData.name);
                    const descSim = calculateSimilarity(newSkill.description, oldSkillData.description);

                    // Calculate length similarity (0-1 scale)
                    // Skills with similar description lengths are more likely to be the same skill
                    const newLen = (newSkill.description || "").length;
                    const oldLen = (oldSkillData.description || "").length;
                    const maxLen = Math.max(newLen, oldLen, 1);
                    const minLen = Math.min(newLen, oldLen);
                    const lengthSim = minLen / maxLen;

                    // Combined score: name (20%), description content (40%), description length (40%)
                    const score = (nameSim * 0.2) + (descSim * 0.4) + (lengthSim * 0.4);

                    if (score > bestScore) {
                        bestScore = score;
                        bestMatch = oldSkillData;
                        bestKey = skillKey;
                    }
                }

                // If we found a good match in this version, use it and mark as used
                if (bestMatch && bestScore > 0.3) {
                    if (bestKey) usedOldSkills.add(bestKey);
                    return bestMatch;
                }
            }

            // Mark best match as used even if below threshold
            if (bestMatch && bestKey) {
                usedOldSkills.add(bestKey);
            }

            return bestMatch;
        };

        const comparisonElements = agentSkills.map((skillObj, index) => {
            const newSkill = skillObj.versions[versionAfter];

            // Find the best matching old skill by similarity
            let oldSkill = null;
            if (isComparison && newSkill) {
                oldSkill = findBestMatchingOldSkill(newSkill, skillObj.type);
            } else if (isComparison) {
                // If newSkill doesn't exist but we're comparing, check if old version had this skill
                oldSkill = skillObj.versions[versionBefore];
            }

            // If new version doesn't have skill, skip (unless it was removed, but if it was removed in new version, newSkill is undefined)
            // If it's a comparison and old exist but new doesn't -> Removed Skill.
            // If it's single view -> just show newSkill.

            if (!newSkill && !oldSkill) return null;

            // Prepare content for diffing
            const oldName = oldSkill?.name || "";
            const newName = newSkill?.name || "";
            const oldDesc = oldSkill?.description || "";
            const newDesc = newSkill?.description || "";

            const nameDiff = isComparison ? compareText(protectIcons(oldName), protectIcons(newName)) : [{ value: protectIcons(newName), added: false, removed: false }];
            const descDiff = isComparison ? compareText(protectIcons(oldDesc), protectIcons(newDesc)) : [{ value: protectIcons(newDesc), added: false, removed: false }];

            const hasChanges = isComparison
                ? (nameDiff.some(t => t.added || t.removed) || descDiff.some(t => t.added || t.removed))
                : true; // Always show in single view

            // Filter unchanged in comparison mode
            if (isComparison && !hasChanges) return null;

            return (
                <div key={skillObj.id || index} className="skill-group icon-override">
                    <div className="flex items-center justify-between mb-2">
                        <div className="skill-type">{skillObj.type}</div>
                        {(skillObj.type === "Pasiva Central" || skillObj.type === "Pasiva") && (
                            <div className="flex flex-col items-center w-64 mr-4">
                                <h5 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 self-start w-full text-left flex items-center gap-2">
                                    <span className="w-1 h-3 bg-yellow-500 rounded-full"></span>
                                    Talento Pasivo
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
                                        {oldSkill ? renderDiffWithHighlight(nameDiff, 'left', beforeData, beforeSkillsContext) : <span className="text-gray-500 italic">No existe</span>}
                                    </div>
                                    <div className="skill-description">
                                        {oldSkill ? renderDiffWithHighlight(descDiff, 'left', beforeData, beforeSkillsContext) : null}
                                    </div>
                                </div>
                            )}
                            <div className="skill-column skill-after">
                                <div className="skill-name">
                                    {newSkill
                                        ? (isComparison ? renderDiffWithHighlight(nameDiff, 'right', afterData, afterSkillsContext) : <HighlightText text={replaceIcons(processScaling(restoreIcons(newName), afterData))} skillIcons={skillIcons} skills={afterSkillsContext} />)
                                        : <span className="text-gray-500 italic">Eliminado</span>}
                                </div>
                                <div className="skill-description">
                                    {newSkill
                                        ? (isComparison ? renderDiffWithHighlight(descDiff, 'right', afterData, afterSkillsContext) : <HighlightText text={replaceIcons(processScaling(restoreIcons(newDesc), afterData))} skillIcons={skillIcons} skills={afterSkillsContext} />)
                                        : null}
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
                    <h3>Habilidades ({versionAfter})</h3>
                    <div className="p-4 text-center text-gray-400 bg-white/5 rounded-lg border border-white/10">
                        {isComparison
                            ? `No hay cambios en habilidades entre ${versionBefore} y ${versionAfter}.`
                            : "No se encontraron habilidades para esta versión."}
                    </div>
                </div>
            );
        }

        return (
            <div className="skills-section">
                <h3>Habilidades {isComparison && "(Solo Cambios)"}</h3>
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
                <h3>Estadísticas del Arma</h3>
                <div className="stats-comparison">
                    {isComparison && (
                        <div className="stats-column">
                            <h4>Antes ({versionBefore})</h4>
                            <div className="stat-list">
                                <div className="stat-item">ATK Base: {oldStats.baseAtk.min} - {oldStats.baseAtk.max}</div>
                                <div className="stat-item">{oldStats.subStat.name}: {oldStats.subStat.min} - {oldStats.subStat.max}</div>
                            </div>
                        </div>
                    )}
                    <div className="stats-column">
                        <h4>{isComparison ? `Después (${versionAfter})` : `Valores (${versionAfter})`}</h4>
                        <div className="stat-list">
                            {renderStatComparison('ATK Base', oldStats ? `${oldStats.baseAtk.min} - ${oldStats.baseAtk.max}` : null, `${newStats.baseAtk.min} - ${newStats.baseAtk.max}`)}
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

        const getDescriptionWithValues = (description, refinement) => {
            if (!refinement || !description) return description;
            const values = Object.entries(refinement).filter(([key]) => key !== 'level').map(([_, value]) => value);
            if (values.length === 0) return description;
            let result = description;
            let valueIndex = 0;
            result = result.replace(/\d+(?:\.\d+)?%?/g, (match) => {
                if (valueIndex < values.length) {
                    const replacement = `{${values[valueIndex]}}`;
                    valueIndex++;
                    return replacement;
                }
                return match;
            });
            return result;
        };

        const newDescWithValues = getDescriptionWithValues(newEffect.description, currentNewRefinement);
        const oldDescWithValues = isComparison ? getDescriptionWithValues(oldEffect.description, currentOldRefinement) : "";
        const descDiff = isComparison ? compareText(oldDescWithValues, newDescWithValues) : [{ value: newDescWithValues, added: false, removed: false }];

        return (
            <div className="effect-section">
                <h3>Efecto del Arma</h3>
                <div className="effect-title">{newEffect.title}</div>
                {newEffect.refinements && newEffect.refinements.length > 0 && (
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider">Nivel de Refinamiento</span>
                            <span className="text-sm font-mono text-yellow-500">{REFINEMENT_LABELS[refinementLevel]}</span>
                        </div>
                        <div className="relative h-8 w-full flex items-center bg-gray-800/50 rounded-lg px-2">
                            <input type="range" min="0" max="4" step="1" value={refinementLevel} onChange={(e) => setRefinementLevel(Number(e.target.value))} className="w-full absolute z-20 cursor-pointer opacity-0 h-8" title={`Nivel: ${REFINEMENT_LABELS[refinementLevel]}`} />
                            <div className="w-full flex justify-between absolute z-10 pointer-events-none px-1">
                                {REFINEMENT_LABELS.map((label, idx) => (
                                    <div key={label} className={`relative flex flex-col items-center group transition-all duration-300 ${idx === refinementLevel ? 'scale-110' : ''}`}>
                                        <div className={`w-3 h-3 rounded-full mb-2 transition-all duration-300 ${idx === refinementLevel ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-125' : idx < refinementLevel ? 'bg-yellow-500/50' : 'bg-gray-700'}`}></div>
                                        <span className={`text-[10px] font-mono font-bold transition-colors duration-300 ${idx === refinementLevel ? 'text-white' : 'text-gray-600'}`}>{label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute h-1 bg-yellow-500/50 rounded-full transition-all duration-300 left-0" style={{ width: `${(refinementLevel / 4) * 100}%` }}></div>
                        </div>
                    </div>
                )}
                <div className="effect-grid">
                    {isComparison && (
                        <div className="effect-column effect-before">
                            <h4>Antes ({versionBefore})</h4>
                            <div className="effect-description">{renderDiffWithHighlight(descDiff, 'left', beforeData)}</div>
                        </div>
                    )}
                    <div className="effect-column effect-after" style={{ width: isComparison ? '50%' : '100%' }}>
                        <h4>{isComparison ? `Después (${versionAfter})` : `Descripción (${versionAfter})`}</h4>
                        <div className="effect-description">
                            {isComparison
                                ? renderDiffWithHighlight(descDiff, 'right', afterData)
                                : <HighlightText text={replaceIcons(newDescWithValues)} elementColor={afterData.elementColor} skillIcons={skillIcons} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="beta-diff-viewer">
            <div className="diff-header">
                <h1>Visualizador de Diferencias Beta</h1>
                <div className="diff-controls">
                    <div className="control-group">
                        <label htmlFor="type-select">Tipo</label>
                        <select id="type-select" value={selectedType} onChange={handleTypeChange} className="diff-select">
                            <option value="agentes">Agentes</option>
                            <option value="armas">Armas</option>
                        </select>
                    </div>
                    <div className="control-group">
                        <label htmlFor="entity-select">{selectedType === 'agentes' ? 'Agente' : 'Arma'}</label>
                        <select id="entity-select" value={selectedEntity?.id || ''} onChange={handleEntityChange} className="diff-select" disabled={!availableEntities.length}>
                            <option value="">Seleccionar...</option>
                            {availableEntities.map(entity => (
                                <option key={entity.id} value={entity.id}>{entity.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="control-group">
                        <label htmlFor="version-select">Versión</label>
                        <select id="version-select" value={selectedVersion || ''} onChange={handleVersionChange} className="diff-select" disabled={!selectedEntity || !availableVersions.length}>
                            <option value="">Seleccionar...</option>
                            {availableVersions.map(version => <option key={version} value={version}>{version}</option>)}
                        </select>
                    </div>

                </div>
            </div>
            <div className="diff-content">
                {!selectedEntity && <div className="empty-state"><p>Selecciona un {selectedType === 'agentes' ? 'agente' : 'arma'} para continuar</p></div>}
                {selectedEntity && !selectedVersion && <div className="empty-state"><p>Selecciona una versión para ver los detalles</p></div>}
                {selectedEntity && selectedVersion && afterData && (
                    <>
                        {selectedType === 'agentes' ? renderAgentStats() : renderWeaponStats()}
                        {selectedType === 'agentes' ? renderSkillsComparison() : renderWeaponEffect()}
                    </>
                )}
                {selectedEntity && selectedVersion && !afterData && <div className="empty-state"><p>No hay datos disponibles para esta versión</p></div>}
            </div>
        </div>
    );
}
