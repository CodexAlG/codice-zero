/**
 * Agent Details Dynamic Loader
 * 
 * Provides lazy loading for agent details to improve performance.
 * Only loads the specific agent data when needed.
 */

/**
 * Dynamically loads agent details based on agent ID
 * 
 * @param {number} id - Agent ID
 * @returns {Promise<Object|null>} Agent details object or null if not found
 */
export async function getAgentDetails(id) {
    try {
        // Try loading from released agents first
        const details = await import(`./released/agent-${id}.js`);
        return details.default;
    } catch {
        try {
            // If not found, try beta agents
            const details = await import(`./beta/agent-${id}.js`);
            return details.default;
        } catch {
            // Agent doesn't have details yet
            return null;
        }
    }
}

/**
 * Preloads agent details for faster navigation
 * Useful for prefetching when hovering over agent cards
 * 
 * @param {number} id - Agent ID to preload
 */
export function preloadAgentDetails(id) {
    import(`./released/agent-${id}.js`).catch(() => {
        import(`./beta/agent-${id}.js`).catch(() => {
            // Silently fail if not found
        });
    });
}
