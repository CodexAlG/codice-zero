/**
 * Agent Details Static Loader
 * 
 * Webpack/Next.js can't handle fully dynamic imports in production.
 * This file statically imports all agent details so they can be bundled.
 */

// Import all agent detail files
import agent47 from './released/agent-47.js';

// Create a lookup map
const agentDetailsMap = {
    47: agent47,
    // Add more as you migrate:
    // 46: agent46,
    // 45: agent45,
    // etc...
};

/**
 * Gets agent details by ID (static lookup)
 * 
 * @param {number} id - Agent ID
 * @returns {Promise<Object|null>} Agent details object or null if not found
 */
export async function getAgentDetails(id) {
    // Return from static map
    const details = agentDetailsMap[id];
    return details || null;
}

/**
 * Preloads agent details (no-op since already bundled)
 * 
 * @param {number} id - Agent ID to preload
 */
export function preloadAgentDetails(id) {
    // No-op: all agents already in bundle
}
