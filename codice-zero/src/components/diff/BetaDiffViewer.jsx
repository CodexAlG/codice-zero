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

    const [versionBefore, setVersionBefore] = useState(() => searchParams.get('left') || null);
    const [versionAfter, setVersionAfter] = useState(() => searchParams.get('right') || null);

    const [corePassiveLevel, setCorePassiveLevel] = useState(0); // 0 to 6
    const [refinementLevel, setRefinementLevel] = useState(0); // 0 to 4

    const CORE_PASSIVE_LABELS = ['0', 'A', 'B', 'C', 'D', 'E', 'F'];
    const REFINEMENT_LABELS = ['R1', 'R2', 'R3', 'R4', 'R5'];

    // Update URL Helper Function
    const updateUrlParam = (key, value) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        if (!value) {
            current.delete(key);
        } else {
            current.set(key, value);
        }

        const search = current.toString();
        const query = search ? `?${search}` : "";

        router.replace(`${pathname}${query}`, { scroll: false });
    };

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
        "Potencial": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    };

    // Get available entities
    const availableEntities = useMemo(() => {
        return selectedType === 'agentes'
            ? getAvailableAgents()
            : getAvailableWeapons();
    }, [selectedType]);

    // Handle type change
    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setSelectedType(newType);
        setSelectedEntity(null);
        setVersionBefore(null);
        setVersionAfter(null);

        // Clear all params on type change to avoid mixing agent/weapon params
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.delete('agent');
        current.delete('weapon');
        current.delete('left');
        current.delete('right');

        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.replace(`${pathname}${query}`, { scroll: false });
    };

    // Get available versions
    const availableVersions = useMemo(() => {
        if (!selectedEntity) return [];
        return selectedType === 'agentes'
            ? getAgentVersions(selectedEntity.id)
            : getWeaponVersions(selectedEntity.id);
    }, [selectedEntity, selectedType]);

    // Get data for versions (Stats only for agents now)
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

    // Get Skills List (New Structure)
    const agentSkills = useMemo(() => {
        if (selectedType === 'agentes' && selectedEntity) {
            return getAgentSkills(selectedEntity.id) || [];
        }
        return [];
    }, [selectedType, selectedEntity]);

    // Helper: Construct flat skills list for HighlightText context
    const getSkillsContext = (version) => {
        if (!agentSkills.length) return [];
        return agentSkills.map(skill => skill.versions?.[version]).filter(Boolean);
    };

    const handleEntityChange = (e) => {
        const entityId = parseInt(e.target.value);
        const entity = availableEntities.find(ent => ent.id === entityId);

        setSelectedEntity(entity);
        setVersionBefore(null);
        setVersionAfter(null);

        // Update URL
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        // Clear previous selection params
        current.delete('agent');
        current.delete('weapon');
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

    const handleVersionBeforeChange = (e) => {
        const val = e.target.value;
        setVersionBefore(val || null);
        updateUrlParam('left', val);
    };

    const handleVersionAfterChange = (e) => {
        const val = e.target.value;
        setVersionAfter(val || null);
        updateUrlParam('right', val);
    };

    const renderStatComparison = (statName, oldValue, newValue) => {
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
        if (!beforeData || !afterData || !beforeData.baseStats || !afterData.baseStats) return null;
        const oldStats = beforeData.baseStats;
        const newStats = afterData.baseStats;

        return (
            <div className="stats-section">
                <h3>Estadísticas Base</h3>
                <div className="stats-comparison">
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
                    <div className="stats-column">
                        <h4>Después ({versionAfter})</h4>
                        <div className="stat-list">
                            {renderStatComparison('HP', `${oldStats.hp?.min} - ${oldStats.hp?.max}`, `${newStats.hp?.min} - ${newStats.hp?.max}`)}
                            {renderStatComparison('ATK', `${oldStats.atk?.min} - ${oldStats.atk?.max}`, `${newStats.atk?.min} - ${newStats.atk?.max}`)}
                            {renderStatComparison('DEF', `${oldStats.def?.min} - ${oldStats.def?.max}`, `${newStats.def?.min} - ${newStats.def?.max}`)}
                            {renderStatComparison('Impact', oldStats.impact, newStats.impact)}
                            {renderStatComparison('Tasa de Anomalía', oldStats.anomalyRate, newStats.anomalyRate)}
                            {renderStatComparison('Maestría de Anomalía', oldStats.anomalyMastery, newStats.anomalyMastery)}
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
        if (!agentSkills.length || !versionBefore || !versionAfter) return null;

        // Context for HighlightText (finding skill names for links/colors)
        const beforeSkillsContext = getSkillsContext(versionBefore);
        const afterSkillsContext = getSkillsContext(versionAfter);

        // Map over ALL skills defined for the agent
        const comparisonElements = agentSkills.map((skillObj, index) => {
            const oldSkill = skillObj.versions[versionBefore];
            const newSkill = skillObj.versions[versionAfter];

            // If neither version has this skill, skip
            if (!oldSkill && !newSkill) return null;

            // Prepare content for diffing
            const oldName = oldSkill?.name || "";
            const newName = newSkill?.name || "";
            const oldDesc = oldSkill?.description || "";
            const newDesc = newSkill?.description || "";

            const nameDiff = compareText(protectIcons(oldName), protectIcons(newName));
            const descDiff = compareText(protectIcons(oldDesc), protectIcons(newDesc));

            // Check if there are ACTUAL changes
            const hasChanges = nameDiff.some(t => t.added || t.removed) || descDiff.some(t => t.added || t.removed);

            // OPTIONAL: Hide unchanged skills if desired.
            // For now, we show everything if the skill exists in the RIGHT side version (the "After" version),
            // OR if it was removed (exists in Old but not New).
            // A pure "Diff" view often hides unchanged items, but a "Version Viewer" usually shows context.
            // Given User's request "only changed skills are displayed", I will enable filtering.

            // Only show if there IS a change.
            if (!hasChanges && versionBefore !== versionAfter) return null;

            return (
                <div key={skillObj.id || index} className="skill-group icon-override">
                    <div className="flex items-center justify-between mb-2">
                        <div className="skill-type">{skillObj.type}</div>
                        {/* Slider para Pasiva Central (Solo si es Pasiva) */}
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
                        <div className="skill-grid">
                            <div className="skill-column skill-before">
                                <div className="skill-name">
                                    {oldSkill ? renderDiffWithHighlight(nameDiff, 'left', beforeData, beforeSkillsContext) : <span className="text-gray-500 italic">No existe</span>}
                                </div>
                                <div className="skill-description">
                                    {oldSkill ? renderDiffWithHighlight(descDiff, 'left', beforeData, beforeSkillsContext) : null}
                                </div>
                            </div>
                            <div className="skill-column skill-after">
                                <div className="skill-name">
                                    {newSkill ? renderDiffWithHighlight(nameDiff, 'right', afterData, afterSkillsContext) : <span className="text-gray-500 italic">Eliminado</span>}
                                </div>
                                <div className="skill-description">
                                    {newSkill ? renderDiffWithHighlight(descDiff, 'right', afterData, afterSkillsContext) : null}
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
                    <h3>Habilidades</h3>
                    <div className="p-4 text-center text-gray-400 bg-white/5 rounded-lg border border-white/10">
                        No hay cambios en habilidades entre estas versiones.
                    </div>
                </div>
            );
        }

        return (
            <div className="skills-section">
                <h3>Habilidades</h3>
                {comparisonElements}
            </div>
        );
    };

    // Reuse existing renderWeaponStats, renderWeaponEffect code (omitted changes for brevity but keeping logic)
    // ... [Include the same renderWeaponStats and renderWeaponEffect from previous file content, simplified here for replacement tool]
    // Since replace_file_content replaces the WHOLE file if I selected 1-628, I must include EVERYTHING.
    // I will copy the Weapon parts from the `view_file` output in step 116.

    // ... Copying Weapon Logic ...
    const renderWeaponStats = () => {
        if (!beforeData || !afterData || !beforeData.detailStats || !afterData.detailStats) return null;
        const oldStats = beforeData.detailStats;
        const newStats = afterData.detailStats;

        return (
            <div className="stats-section">
                <h3>Estadísticas del Arma</h3>
                <div className="stats-comparison">
                    <div className="stats-column">
                        <h4>Antes ({versionBefore})</h4>
                        <div className="stat-list">
                            <div className="stat-item">ATK Base: {oldStats.baseAtk.min} - {oldStats.baseAtk.max}</div>
                            <div className="stat-item">{oldStats.subStat.name}: {oldStats.subStat.min} - {oldStats.subStat.max}</div>
                        </div>
                    </div>
                    <div className="stats-column">
                        <h4>Después ({versionAfter})</h4>
                        <div className="stat-list">
                            {renderStatComparison('ATK Base', `${oldStats.baseAtk.min} - ${oldStats.baseAtk.max}`, `${newStats.baseAtk.min} - ${newStats.baseAtk.max}`)}
                            {renderStatComparison(oldStats.subStat.name, `${oldStats.subStat.min} - ${oldStats.subStat.max}`, `${newStats.subStat.min} - ${newStats.subStat.max}`)}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderWeaponEffect = () => {
        if (!beforeData || !afterData || !beforeData.effect || !afterData.effect) return null;
        const oldEffect = beforeData.effect;
        const newEffect = afterData.effect;

        const currentOldRefinement = oldEffect.refinements?.[refinementLevel];
        const currentNewRefinement = newEffect.refinements?.[refinementLevel];

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

        const oldDescWithValues = getDescriptionWithValues(oldEffect.description, currentOldRefinement);
        const newDescWithValues = getDescriptionWithValues(newEffect.description, currentNewRefinement);
        const descDiff = compareText(oldDescWithValues, newDescWithValues);

        return (
            <div className="effect-section">
                <h3>Efecto del Arma</h3>
                <div className="effect-title">{oldEffect.title}</div>
                {oldEffect.refinements && oldEffect.refinements.length > 0 && (
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
                    <div className="effect-column effect-before">
                        <h4>Antes ({versionBefore})</h4>
                        <div className="effect-description">{renderDiffWithHighlight(descDiff, 'left', beforeData)}</div>
                    </div>
                    <div className="effect-column effect-after">
                        <h4>Después ({versionAfter})</h4>
                        <div className="effect-description">{renderDiffWithHighlight(descDiff, 'right', afterData)}</div>
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
                        <label htmlFor="version-before">Versión Izquierda</label>
                        <select id="version-before" value={versionBefore || ''} onChange={handleVersionBeforeChange} className="diff-select" disabled={!selectedEntity || !availableVersions.length}>
                            <option value="">Seleccionar...</option>
                            {availableVersions.map(version => <option key={version} value={version}>{version}</option>)}
                        </select>
                    </div>
                    <div className="control-group">
                        <label htmlFor="version-after">Versión Derecha</label>
                        <select id="version-after" value={versionAfter || ''} onChange={handleVersionAfterChange} className="diff-select" disabled={!selectedEntity || !availableVersions.length}>
                            <option value="">Seleccionar...</option>
                            {availableVersions.map(version => <option key={version} value={version}>{version}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="diff-content">
                {!selectedEntity && <div className="empty-state"><p>Selecciona un {selectedType === 'agentes' ? 'agente' : 'arma'} y dos versiones para comparar</p></div>}
                {selectedEntity && (!versionBefore || !versionAfter) && <div className="empty-state"><p>Selecciona ambas versiones para ver la comparación</p></div>}
                {selectedEntity && versionBefore && versionAfter && beforeData && afterData && (
                    <>
                        {selectedType === 'agentes' ? renderAgentStats() : renderWeaponStats()}
                        {selectedType === 'agentes' ? renderSkillsComparison() : renderWeaponEffect()}
                    </>
                )}
                {selectedEntity && versionBefore && versionAfter && (!beforeData || !afterData) && <div className="empty-state"><p>No se encontraron datos para las versiones seleccionadas</p></div>}
            </div>
        </div>
    );
}
