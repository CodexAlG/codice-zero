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
import HighlightText from '../ui/HighlightText';
import './BetaDiffViewer.css';

export default function BetaDiffViewer() {
    const [selectedType, setSelectedType] = useState('agentes');
    const [selectedEntity, setSelectedEntity] = useState(null);
    const [versionBefore, setVersionBefore] = useState(null);
    const [versionAfter, setVersionAfter] = useState(null);

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

    // ... (rest of the code unchanged until helper functions)

    // Helper to process scaling placeholders {VALOR_1}
    const processScaling = (text, data) => {
        if (!data?.coreSkillScaling || !text) return text;
        // Use Level 1 (index 0) as default for comparison view
        const currentScalingValues = data.coreSkillScaling[0];
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

            // 1. Process scaling placeholders
            let processedText = processScaling(part.value, data);

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

        return (
            <div className="skills-section">
                <h3>Habilidades</h3>
                {oldSkills.map((oldSkill, index) => {
                    const newSkill = newSkills[index];
                    if (!newSkill) return null;

                    const nameDiff = compareText(oldSkill.name, newSkill.name);
                    const descDiff = compareText(oldSkill.description, newSkill.description);

                    return (
                        <div key={index} className="skill-comparison">
                            <div className="skill-type">{oldSkill.type}</div>
                            <div className="skill-grid">
                                <div className="skill-column skill-before">
                                    <h4>Antes ({versionBefore})</h4>
                                    <div className="skill-name">
                                        {renderDiffWithHighlight(nameDiff, 'left', beforeData)}
                                    </div>
                                    <div className="skill-description">
                                        {renderDiffWithHighlight(descDiff, 'left', beforeData)}
                                    </div>
                                </div>
                                <div className="skill-column skill-after">
                                    <h4>Después ({versionAfter})</h4>
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
                <h1>Beta Diff Viewer</h1>
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
                        <label htmlFor="version-before">Versión Izquierda (Before)</label>
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
                        <label htmlFor="version-after">Versión Derecha (After)</label>
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
