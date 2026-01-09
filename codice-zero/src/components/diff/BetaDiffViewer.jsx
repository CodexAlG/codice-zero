"use client";

import React, { useState, useMemo } from 'react';
import {
    getAvailableAgents,
    getAgentVersions,
    getAgentVersionData
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
    const [selectedType, setSelectedType] = useState('agentes');
    const [selectedEntity, setSelectedEntity] = useState(null);
    const [versionBefore, setVersionBefore] = useState(null);
    const [versionAfter, setVersionAfter] = useState(null);
    const [corePassiveLevel, setCorePassiveLevel] = useState(0); // 0 to 6 (0, A, B, C, D, E, F)

    const CORE_PASSIVE_LABELS = ['0', 'A', 'B', 'C', 'D', 'E', 'F'];

    // Skill Icons Mapping (reused from AgentDetailPage)
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

    // Get available entities based on type
    const availableEntities = useMemo(() => {
        return selectedType === 'agentes'
            ? getAvailableAgents()
            : getAvailableWeapons();
    }, [selectedType]);

    // Handle type change
    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setSelectedEntity(null);
        setVersionBefore(null);
        setVersionAfter(null);
    };

    // Get available versions for selected entity
    const availableVersions = useMemo(() => {
        if (!selectedEntity) return [];
        return selectedType === 'agentes'
            ? getAgentVersions(selectedEntity.id)
            : getWeaponVersions(selectedEntity.id);
    }, [selectedEntity, selectedType]);

    // Get data for both versions
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

    // Handle entity change
    const handleEntityChange = (e) => {
        const entityId = parseInt(e.target.value);
        const entity = availableEntities.find(ent => ent.id === entityId);
        setSelectedEntity(entity);
        setVersionBefore(null);
        setVersionAfter(null);
    };

    // Render stat comparison
    const renderStatComparison = (statName, oldValue, newValue) => {
        const comparison = compareNumber(oldValue, newValue);
        const statusClass = comparison.status === 'buff'
            ? 'stat-buff'
            : comparison.status === 'nerf'
                ? 'stat-nerf'
                : 'stat-unchanged';

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

    // Render agent stats comparison
    const renderAgentStats = () => {
        if (!beforeData || !afterData || !beforeData.baseStats || !afterData.baseStats) {
            return null;
        }

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
                            {oldStats.anomalyRate && <div className="stat-item">Tasa Anomalía: {oldStats.anomalyRate}</div>}
                            {oldStats.anomalyMastery && <div className="stat-item">Maestría Anomalía: {oldStats.anomalyMastery}</div>}
                        </div>
                    </div>
                    <div className="stats-column">
                        <h4>Después ({versionAfter})</h4>
                        <div className="stat-list">
                            {renderStatComparison('HP', `${oldStats.hp?.min} - ${oldStats.hp?.max}`, `${newStats.hp?.min} - ${newStats.hp?.max}`)}
                            {renderStatComparison('ATK', `${oldStats.atk?.min} - ${oldStats.atk?.max}`, `${newStats.atk?.min} - ${newStats.atk?.max}`)}
                            {renderStatComparison('DEF', `${oldStats.def?.min} - ${oldStats.def?.max}`, `${newStats.def?.min} - ${newStats.def?.max}`)}
                            {renderStatComparison('Impact', oldStats.impact, newStats.impact)}
                            {renderStatComparison('Tasa Anomalía', oldStats.anomalyRate, newStats.anomalyRate)}
                            {renderStatComparison('Maestría Anomalía', oldStats.anomalyMastery, newStats.anomalyMastery)}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Render weapon stats comparison
    const renderWeaponStats = () => {
        if (!beforeData || !afterData || !beforeData.detailStats || !afterData.detailStats) {
            return null;
        }

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

    // Helper to process scaling placeholders {VALOR_1}
    const processScaling = (text, data) => {
        if (!data?.coreSkillScaling || !text) return text;
        if (!data?.coreSkillScaling || !text) return text;

        // Use selected level
        const currentScalingValues = data.coreSkillScaling[corePassiveLevel] || data.coreSkillScaling[0];
        if (!currentScalingValues) return text;

        const scalingColors = data.coreSkillScalingColors || [];

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

    // Helper to protect icons from being split by diffWords
    const protectIcons = (text) => {
        if (!text) return "";
        return text.replace(/\[Icono ([^\]]+)\]/g, (match, type) => {
            return `__ICON_${type.replace(/\s+/g, '_')}__`;
        });
    };

    // Helper to restore icons after diffing
    const restoreIcons = (text) => {
        if (!text) return "";
        return text.replace(/__ICON_([^_]+)__/g, (match, type) => {
            return `[Icono ${type.replace(/_/g, ' ')}]`;
        });
    };

    // Helper to render diff tokens with HighlightText
    const renderDiffWithHighlight = (diffTokens, side, data) => {
        if (!diffTokens || diffTokens.length === 0) return [];

        return diffTokens.map((part, index) => {
            let className = "diff-unchanged"; // default
            if (side === 'left') {
                if (part.added) return null;
                if (part.removed) className = "diff-removed";
            } else {
                if (part.removed) return null;
                if (part.added) className = "diff-added";
            }

            // 0. Restore icons from protection tokens
            let value = restoreIcons(part.value);

            // 1. Process scaling placeholders
            let processedText = processScaling(value, data);

            // 2. Replace icons placeholders [Icono ...] with HTML <img> tags
            processedText = replaceIcons(processedText);

            return (
                <span key={index} className={className}>
                    <HighlightText
                        text={processedText}
                        elementColor={data?.elementColor || "#facc15"}
                        skillIcons={skillIcons}
                        skills={data?.skills || []}
                    />
                </span>
            );
        }).filter(Boolean);
    };

    // Render skill comparison for agents
    const renderSkillsComparison = () => {
        if (!beforeData || !afterData || !beforeData.skills || !afterData.skills) {
            return null;
        }

        const oldSkills = beforeData.skills;
        const newSkills = afterData.skills;

        // Group skills by type from the NEW version (target of comparison)
        const skillsByType = newSkills.reduce((acc, skill) => {
            const type = skill.type;
            if (!acc[type]) acc[type] = [];
            acc[type].push(skill);
            return acc;
        }, {});

        return (
            <div className="skills-section">
                <h3>Habilidades</h3>
                {Object.entries(skillsByType).map(([type, groupSkills]) => {
                    // Filter skills that have changes
                    const comparisonItems = groupSkills.map(newSkill => {
                        const oldSkill = oldSkills.find(s => s.name === newSkill.name) || { name: "", description: "" };

                        const nameDiff = compareText(protectIcons(oldSkill.name), protectIcons(newSkill.name));
                        const descDiff = compareText(protectIcons(oldSkill.description), protectIcons(newSkill.description));

                        const hasChanges = nameDiff.some(t => t.added || t.removed) || descDiff.some(t => t.added || t.removed);

                        if (!hasChanges) return null;

                        return { newSkill, oldSkill, nameDiff, descDiff };
                    }).filter(Boolean);

                    if (comparisonItems.length === 0) return null;

                    return (
                        <div key={type} className="skill-group">
                            <div className="flex items-center justify-between mb-2">
                                <div className="skill-type">{type}</div>
                                {/* Slider para Pasiva Central */}
                                {(type === "Pasiva Central" || type === "Pasiva") && (
                                    <div className="flex flex-col items-center w-64 mr-4">
                                        <h5 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 self-start w-full text-left flex items-center gap-2">
                                            <span className="w-1 h-3 bg-yellow-500 rounded-full"></span>
                                            Talento Pasivo
                                        </h5>
                                        <div className="relative w-full h-8 flex items-center">
                                            {/* Línea de fondo */}
                                            <div className="absolute w-full h-1 bg-white/10 rounded-full"></div>

                                            {/* Input Range Personalizado */}
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

                                            {/* Marcadores Visuales */}
                                            <div className="w-full flex justify-between absolute z-10 pointer-events-none px-1">
                                                {CORE_PASSIVE_LABELS.map((label, idx) => (
                                                    <div key={label} className={`relative flex flex-col items-center group transition-all duration-300 ${idx === corePassiveLevel ? 'scale-110' : ''}`}>
                                                        <div
                                                            className={`w-3 h-3 rounded-full mb-2 transition-all duration-300 ${idx === corePassiveLevel
                                                                ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-125'
                                                                : idx < corePassiveLevel
                                                                    ? 'bg-yellow-500/50'
                                                                    : 'bg-gray-700'
                                                                }`}
                                                        ></div>
                                                        <span className={`text-[10px] font-mono font-bold transition-colors duration-300 ${idx === corePassiveLevel ? 'text-white' : 'text-gray-600'
                                                            }`}>
                                                            {label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Barra de Progreso (Relleno) */}
                                            <div
                                                className="absolute h-1 bg-yellow-500/50 rounded-full transition-all duration-300 left-0"
                                                style={{ width: `${(corePassiveLevel / 6) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {comparisonItems.map((item, idx) => {
                                const { nameDiff, descDiff } = item;

                                return (
                                    <div key={idx} className="skill-comparison-item">
                                        <div className="skill-grid">
                                            <div className="skill-column skill-before">
                                                {idx === 0 && <h4>Antes ({versionBefore})</h4>}
                                                <div className="skill-name">
                                                    {renderDiffWithHighlight(nameDiff, 'left', beforeData)}
                                                </div>
                                                <div className="skill-description">
                                                    {renderDiffWithHighlight(descDiff, 'left', beforeData)}
                                                </div>
                                            </div>
                                            <div className="skill-column skill-after">
                                                {idx === 0 && <h4>Después ({versionAfter})</h4>}
                                                <div className="skill-name">
                                                    {renderDiffWithHighlight(nameDiff, 'right', afterData)}
                                                </div>
                                                <div className="skill-description">
                                                    {renderDiffWithHighlight(descDiff, 'right', afterData)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    };

    // Render weapon effect comparison
    const renderWeaponEffect = () => {
        if (!beforeData || !afterData || !beforeData.effect || !afterData.effect) {
            return null;
        }

        const oldEffect = beforeData.effect;
        const newEffect = afterData.effect;
        const descDiff = compareText(oldEffect.description, newEffect.description);

        return (
            <div className="effect-section">
                <h3>Efecto del Arma</h3>
                <div className="effect-title">{oldEffect.title}</div>
                <div className="effect-grid">
                    <div className="effect-column effect-before">
                        <h4>Antes ({versionBefore})</h4>
                        <div className="effect-description">
                            {renderDiffText(descDiff, 'left')}
                        </div>
                        <div className="refinements">
                            <h5>Mejoras (R1)</h5>
                            {oldEffect.refinements && oldEffect.refinements[0] && (
                                <div className="refinement-values">
                                    {Object.entries(oldEffect.refinements[0]).map(([key, value]) => {
                                        if (key === 'level') return null;
                                        return <div key={key} className="refinement-item">{key}: {value}</div>;
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="effect-column effect-after">
                        <h4>Después ({versionAfter})</h4>
                        <div className="effect-description">
                            {renderDiffText(descDiff, 'right')}
                        </div>
                        <div className="refinements">
                            <h5>Mejoras (R1)</h5>
                            {newEffect.refinements && newEffect.refinements[0] && (
                                <div className="refinement-values">
                                    {Object.entries(newEffect.refinements[0]).map(([key, value]) => {
                                        if (key === 'level') return null;
                                        const oldValue = oldEffect.refinements[0][key];
                                        const comparison = compareNumber(oldValue, value);
                                        const className = comparison.status === 'buff' ? 'refinement-buff' : comparison.status === 'nerf' ? 'refinement-nerf' : '';
                                        return <div key={key} className={`refinement-item ${className}`}>{key}: {value}</div>;
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="beta-diff-viewer">
            {/* Header with 4 dropdowns */}
            <div className="diff-header">
                <h1>Visualizador de Diferencias Beta</h1>
                <div className="diff-controls">
                    {/* Type Selector */}
                    <div className="control-group">
                        <label htmlFor="type-select">Tipo</label>
                        <select
                            id="type-select"
                            value={selectedType}
                            onChange={handleTypeChange}
                            className="diff-select"
                        >
                            <option value="agentes">Agentes</option>
                            <option value="armas">Armas</option>
                        </select>
                    </div>

                    {/* Entity Selector */}
                    <div className="control-group">
                        <label htmlFor="entity-select">
                            {selectedType === 'agentes' ? 'Agente' : 'Arma'}
                        </label>
                        <select
                            id="entity-select"
                            value={selectedEntity?.id || ''}
                            onChange={handleEntityChange}
                            className="diff-select"
                            disabled={!availableEntities.length}
                        >
                            <option value="">Seleccionar...</option>
                            {availableEntities.map(entity => (
                                <option key={entity.id} value={entity.id}>
                                    {entity.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Version Before */}
                    <div className="control-group">
                        <label htmlFor="version-before">Versión Izquierda</label>
                        <select
                            id="version-before"
                            value={versionBefore || ''}
                            onChange={(e) => setVersionBefore(e.target.value)}
                            className="diff-select"
                            disabled={!selectedEntity || !availableVersions.length}
                        >
                            <option value="">Seleccionar...</option>
                            {availableVersions.map(version => (
                                <option key={version} value={version}>
                                    {version}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Version After */}
                    <div className="control-group">
                        <label htmlFor="version-after">Versión Derecha</label>
                        <select
                            id="version-after"
                            value={versionAfter || ''}
                            onChange={(e) => setVersionAfter(e.target.value)}
                            className="diff-select"
                            disabled={!selectedEntity || !availableVersions.length}
                        >
                            <option value="">Seleccionar...</option>
                            {availableVersions.map(version => (
                                <option key={version} value={version}>
                                    {version}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="diff-content">
                {!selectedEntity && (
                    <div className="empty-state">
                        <p>Selecciona un {selectedType === 'agentes' ? 'agente' : 'arma'} y dos versiones para comparar</p>
                    </div>
                )}

                {selectedEntity && (!versionBefore || !versionAfter) && (
                    <div className="empty-state">
                        <p>Selecciona ambas versiones para ver la comparación</p>
                    </div>
                )}

                {selectedEntity && versionBefore && versionAfter && beforeData && afterData && (
                    <>
                        {selectedType === 'agentes' ? renderAgentStats() : renderWeaponStats()}
                        {selectedType === 'agentes' ? renderSkillsComparison() : renderWeaponEffect()}
                    </>
                )}

                {selectedEntity && versionBefore && versionAfter && (!beforeData || !afterData) && (
                    <div className="empty-state">
                        <p>No se encontraron datos para las versiones seleccionadas</p>
                    </div>
                )}
            </div>
        </div>
    );
}
