import { writeFileSync } from 'fs';

const version = {
    buildTime: new Date().toISOString(),
    buildId: Date.now().toString(36)
};

writeFileSync('public/version.json', JSON.stringify(version));
console.log(`[generate-version] Build ID: ${version.buildId} at ${version.buildTime}`);
