// Mock versioned agent data for BetaDiffViewer demonstration
// This data represents different beta versions of agents with stat and skill changes

export const versionedAgents = {
    // Agent 48 - Aria (Beta versions)
    48: {
        id: 48,
        name: "Aria",
        versions: {
            "Beta 1": {
                versionLabel: "Beta 1",
                baseStats: {
                    hp: { min: 650, max: 8000 },
                    atk: { min: 130, max: 900 },
                    def: { min: 50, max: 620 },
                    impact: 88,
                    anomalyRate: "115",
                    anomalyMastery: "118"
                },
                skills: [
                    {
                        type: "Ataque Básico",
                        name: "Ataque Básico: Melodía Etérea",
                        description: "Presiona [Icono Ataque] para activar: Ejecuta hasta cuatro ataques rápidos, causando Daño Etéreo. El daño base es de 800 por golpe. Cada golpe exitoso aumenta la Maestría de Anomalía en 15 puntos durante 6s."
                    },
                    {
                        type: "Técnica Especial",
                        name: "Técnica Especial: Resonancia",
                        description: "Presiona [Icono Especial] para activar: Canaliza energía etérea, causando 1200 de Daño Etéreo en un área. Reduce la resistencia etérea del enemigo en un 10% durante 8s."
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX: Resonancia Suprema",
                        description: "Con suficiente Energía, mantén [Icono Especial EX] para activar: Desata un poderoso ataque etéreo causando 2500 de Daño Etéreo. Los enemigos golpeados sufren un 15% más de daño de Anomalía durante 10s."
                    },
                    {
                        type: "Pasiva Central",
                        name: "Pasiva Principal: Armonía Etérea",
                        description: "Cuando Aria aplica una Anomalía de Atributo Etéreo, toda la escuadra gana un 8% de Maestría de Anomalía durante 12s. El daño de Desorden aumenta en un 20%."
                    }
                ]
            },
            "Beta 2": {
                versionLabel: "Beta 2",
                baseStats: {
                    hp: { min: 650, max: 8200 },
                    atk: { min: 135, max: 920 },
                    def: { min: 52, max: 630 },
                    impact: 90,
                    anomalyRate: "118",
                    anomalyMastery: "122"
                },
                skills: [
                    {
                        type: "Ataque Básico",
                        name: "Ataque Básico: Melodía Etérea",
                        description: "Presiona [Icono Ataque] para activar: Ejecuta hasta cuatro ataques rápidos, causando Daño Etéreo. El daño base es de 850 por golpe. Cada golpe exitoso aumenta la Maestría de Anomalía en 18 puntos durante 8s."
                    },
                    {
                        type: "Técnica Especial",
                        name: "Técnica Especial: Resonancia Mejorada",
                        description: "Presiona [Icono Especial] para activar: Canaliza energía etérea, causando 1350 de Daño Etéreo en un área expandida. Reduce la resistencia etérea del enemigo en un 12% durante 10s."
                    },
                    {
                        type: "Técnica Especial EX",
                        name: "Técnica Especial EX: Resonancia Suprema",
                        description: "Con suficiente Energía, mantén [Icono Especial EX] para activar: Desata un poderoso ataque etéreo causando 2800 de Daño Etéreo. Los enemigos golpeados sufren un 18% más de daño de Anomalía durante 12s."
                    },
                    {
                        type: "Pasiva Central",
                        name: "Pasiva Principal: Armonía Etérea",
                        description: "Cuando Aria aplica una Anomalía de Atributo Etéreo, toda la escuadra gana un 10% de Maestría de Anomalía durante 15s. El daño de Desorden aumenta en un 25%."
                    }
                ]
            }
        }
    },
}


/**
 * Get all available agents for the diff viewer
 * @returns {Array} Array of agent objects with id and name
 */
export function getAvailableAgents() {
    return Object.values(versionedAgents).map(agent => ({
        id: agent.id,
        name: agent.name
    }));
}

/**
 * Get available versions for a specific agent
 * @param {number} agentId - The agent ID
 * @returns {Array} Array of version labels
 */
export function getAgentVersions(agentId) {
    const agent = versionedAgents[agentId];
    if (!agent || !agent.versions) return [];
    return Object.keys(agent.versions);
}

/**
 * Get specific version data for an agent
 * @param {number} agentId - The agent ID
 * @param {string} versionLabel - The version label (e.g., "Beta 1", "V1")
 * @returns {Object|null} The version data or null if not found
 */
export function getAgentVersionData(agentId, versionLabel) {
    const agent = versionedAgents[agentId];
    if (!agent || !agent.versions || !agent.versions[versionLabel]) return null;
    return agent.versions[versionLabel];
}
