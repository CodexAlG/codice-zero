/**
 * Agent Details Migration Script v2
 * 
 * Uses direct JS evaluation to extract agents from agentDetails.js
 */

const fs = require('fs');
const path = require('path');

// Paths
const sourceFile = path.join(__dirname, 'src', 'data', 'agentDetails.js');
const targetDir = path.join(__dirname, 'src', 'data', 'agentDetails', 'released');

console.log('📖 Reading agentDetails.js...');

// Read and execute the file to get the actual object
const sourceContent = fs.readFileSync(sourceFile, 'utf-8');

// Extract just the object content (remove export statement)
const objectMatch = sourceContent.match(/export const agentDetails = (\{[\s\S]*\});/);
if (!objectMatch) {
    console.error('❌ Could not parse agentDetails.js');
    process.exit(1);
}

// Evaluate the object directly
let agentDetails;
try {
    agentDetails = eval(`(${objectMatch[1]})`);
} catch (error) {
    console.error('❌ Error evaluating object:', error.message);
    process.exit(1);
}

console.log(`✅ Loaded agentDetails object with ${Object.keys(agentDetails).length} agents`);

// Get all agent IDs
const allIds = Object.keys(agentDetails).map(id => parseInt(id)).sort((a, b) => a - b);
console.log(`📋 Agent IDs: ${allIds.join(', ')}`);

// Create individual files
console.log('\n📝 Creating individual agent files...');
let created = 0;
let skipped = 0;

allIds.forEach(id => {
    const filename = `agent-${id}.js`;
    const filepath = path.join(targetDir, filename);

    // Check if file already exists
    if (fs.existsSync(filepath)) {
        console.log(`⏭️  ${filename} already exists, skipping`);
        skipped++;
        return;
    }

    const data = agentDetails[id];

    // Convert to formatted JSON-like JS object
    const content = JSON.stringify(data, null, 2)
        .replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
        .replace(/: "([^"]*)",?$/gm, ': "$1",'); // Keep quotes on string values

    const fileContent = `// Agent ${id} - Detailed Stats and Skills
export default ${content};
`;

    // Write file
    try {
        fs.writeFileSync(filepath, fileContent, 'utf-8');
        console.log(`✅ Created ${filename}`);
        created++;
    } catch (error) {
        console.error(`❌ Error creating ${filename}:`, error.message);
    }
});

console.log(`\n📊 Summary:`);
console.log(`   ✅ Created: ${created}`);
console.log(`   ⏭️  Skipped: ${skipped}`);
console.log(`   📁 Total: ${allIds.length}`);

// Generate imports for index.js
console.log('\n📋 Updating index.js...');

const imports = allIds.map(id => `import agent${id} from './released/agent-${id}.js';`).join('\n');
const mapEntries = allIds.map(id => `  ${id}: agent${id},`).join('\n');

const indexContent = `/**
 * Agent Details Static Loader
 * 
 * All ${allIds.length} agents are statically imported for Webpack compatibility.
 */

// Import all agent detail files
${imports}

// Create a lookup map
const agentDetailsMap = {
${mapEntries}
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
`;

const indexPath = path.join(__dirname, 'src', 'data', 'agentDetails', 'index.js');
fs.writeFileSync(indexPath, indexContent, 'utf-8');
console.log(`✅ Updated index.js with ${allIds.length} imports`);

console.log('\n✨ Migration complete!');
console.log('Next steps:');
console.log('  1. Test that agent pages load correctly');
console.log('  2. Once verified, you can delete src/data/agentDetails.js');
