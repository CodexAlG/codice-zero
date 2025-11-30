/**
 * Agent Details Static Loader
 * 
 * All 47 agents are statically imported for Webpack compatibility.
 */

// Import all agent detail files
import agent1 from './released/agent-1.js';
import agent2 from './released/agent-2.js';
import agent3 from './released/agent-3.js';
import agent4 from './released/agent-4.js';
import agent5 from './released/agent-5.js';
import agent6 from './released/agent-6.js';
import agent7 from './released/agent-7.js';
import agent8 from './released/agent-8.js';
import agent9 from './released/agent-9.js';
import agent10 from './released/agent-10.js';
import agent11 from './released/agent-11.js';
import agent12 from './released/agent-12.js';
import agent13 from './released/agent-13.js';
import agent14 from './released/agent-14.js';
import agent15 from './released/agent-15.js';
import agent16 from './released/agent-16.js';
import agent17 from './released/agent-17.js';
import agent18 from './released/agent-18.js';
import agent19 from './released/agent-19.js';
import agent20 from './released/agent-20.js';
import agent21 from './released/agent-21.js';
import agent22 from './released/agent-22.js';
import agent23 from './released/agent-23.js';
import agent24 from './released/agent-24.js';
import agent25 from './released/agent-25.js';
import agent26 from './released/agent-26.js';
import agent27 from './released/agent-27.js';
import agent28 from './released/agent-28.js';
import agent29 from './released/agent-29.js';
import agent30 from './released/agent-30.js';
import agent31 from './released/agent-31.js';
import agent32 from './released/agent-32.js';
import agent33 from './released/agent-33.js';
import agent34 from './released/agent-34.js';
import agent35 from './released/agent-35.js';
import agent36 from './released/agent-36.js';
import agent37 from './released/agent-37.js';
import agent38 from './released/agent-38.js';
import agent39 from './released/agent-39.js';
import agent40 from './released/agent-40.js';
import agent41 from './released/agent-41.js';
import agent42 from './released/agent-42.js';
import agent43 from './released/agent-43.js';
import agent44 from './released/agent-44.js';
import agent45 from './released/agent-45.js';
import agent46 from './released/agent-46.js';
import agent47 from './released/agent-47.js';

// Create a lookup map
const agentDetailsMap = {
  1: agent1,
  2: agent2,
  3: agent3,
  4: agent4,
  5: agent5,
  6: agent6,
  7: agent7,
  8: agent8,
  9: agent9,
  10: agent10,
  11: agent11,
  12: agent12,
  13: agent13,
  14: agent14,
  15: agent15,
  16: agent16,
  17: agent17,
  18: agent18,
  19: agent19,
  20: agent20,
  21: agent21,
  22: agent22,
  23: agent23,
  24: agent24,
  25: agent25,
  26: agent26,
  27: agent27,
  28: agent28,
  29: agent29,
  30: agent30,
  31: agent31,
  32: agent32,
  33: agent33,
  34: agent34,
  35: agent35,
  36: agent36,
  37: agent37,
  38: agent38,
  39: agent39,
  40: agent40,
  41: agent41,
  42: agent42,
  43: agent43,
  44: agent44,
  45: agent45,
  46: agent46,
  47: agent47,
};

/**
 * Gets agent details by ID (static lookup)
 * 
 * @param {number} id - Agent ID
 * @returns {Promise<Object|null>} Agent details object or null if not found
 */
export async function getAgentDetails(id) {
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
