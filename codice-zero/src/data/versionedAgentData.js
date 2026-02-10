
// Mock versioned agent data for BetaDiffViewer demonstration
// This data represents different beta versions of agents with stat and skill changes

export const versionedAgents = {
    // Los datos han sido limpiados. La estructura se mantiene para uso futuro.
    // Ejemplo de estructura esperada:
    // agentId: {
    //     id: number,
    //     name: "string",
    //     versions: {
    //         "vX.Y.Z": {
    //             versionLabel: "vX.Y.Z",
    //             baseStats: { hp: { min, max }, atk: { min, max }, def: { min, max }, impact, crit, critDmg, anomalyRate, anomalyMastery, penRatio, energyRegen },
    //             coreStats: { statName: "string", valuePerNode: number },
    //             coreSkillScalingColors: ["string"],
    //             coreSkillScaling: [["string"]],
    //             potential: { name: "string", description: "string" },
    //             skills: [
    //                 { type: "string", name: "string", description: "string", tags: ["string"] }
    //             ]
    //         }
    //     }
    // }
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

/**
 * Get skills for an agent, normalizing structure
 * @param {number} agentId 
 * @returns {Array} Array of skill objects
 */
// Helper for fuzzy matching (kept for potential future use, but not primary)
function calculateSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();
    if (s1 === s2) return 1.0;

    // Simple token overlap
    const tokens1 = new Set(s1.split(/\s+/));
    const tokens2 = new Set(s2.split(/\s+/));
    const intersection = new Set([...tokens1].filter(x => tokens2.has(x)));
    const union = new Set([...tokens1, ...tokens2]);

    return intersection.size / union.size;
}

/**
 * Get skills for an agent, normalizing structure with index-based matching
 * Uses type + index within that type to match skills across versions
 * @param {number} agentId 
 * @returns {Array} Array of skill objects
 */
export function getAgentSkills(agentId) {
    const agent = versionedAgents[agentId];
    if (!agent) return [];

    // Type A: Skills already in top-level array (legacy format)
    if (agent.skills && Array.isArray(agent.skills)) {
        return agent.skills;
    }

    // Type B: Skills nested inside versions
    if (!agent.versions) return [];

    const allVersions = Object.keys(agent.versions).sort();
    const skillMap = new Map(); // key -> skillObj

    allVersions.forEach(version => {
        const vData = agent.versions[version];
        if (!vData.skills || !Array.isArray(vData.skills)) return;

        vData.skills.forEach(skill => {
            const type = skill.type || "Unknown";
            const name = skill.name || "Unknown";

            // Use skill name as key for proper matching across versions
            // This ensures new skills with different names appear as [NUEVA]
            const key = `${type}::${name}`;

            if (!skillMap.has(key)) {
                skillMap.set(key, {
                    id: key,
                    type: type,
                    versions: {}
                });
            }

            skillMap.get(key).versions[version] = skill;
        });
    });

    return Array.from(skillMap.values());
}
