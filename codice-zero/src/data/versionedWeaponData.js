// Mock versioned weapon data for BetaDiffViewer demonstration

export const versionedWeapons = {
    // Los datos han sido limpiados. La estructura se mantiene para uso futuro.
    // Ejemplo de estructura esperada:
    // weaponId: {
    //     id: number,
    //     name: "string",
    //     rol: "string",
    //     versions: {
    //         "vX.Y.Z": {
    //             versionLabel: "vX.Y.Z",
    //             effect: {
    //                 title: "string",
    //                 description: "string",
    //                 refinements: [
    //                     { level: number, DañoIgnored: "string", Daño: "string", DañoCritico: "string" }
    //                 ]
    //             },
    //             hotfixes: [
    //                 {
    //                     id: number,           // ID secuencial (1, 2, 3...) — se usa en la URL
    //                     revision: "string",    // Número de revisión del juego (ej: "14050658")
    //                     date: "YYYY-MM-DD",
    //                     effect: {
    //                         title: "string",
    //                         description: "string",
    //                         refinements: [...]
    //                     },
    //                     detailStats: { ... }
    //                     // Solo los campos que cambiaron en este hotfix
    //                 }
    //             ]
    //         }
    //     }
    // }
    5544: {
        id: 5544,
        name: "Arma de Prueba de Promeia",
        rol: "Anomalia",
        versions: {
            "v2.8.0": {
                versionLabel: "v2.8.0",
                effect: {
                    title: "Efecto del Arma de Prueba de Promeia",
                    description: "El Daño Hielo infligido por el portador aumenta un {VALOR_1}; cuando el portador activa la (Técnica Especial EX) e inflige Daño Hielo, el daño de Anomalía de Atributo infligido por sí mismo aumenta un {VALOR_2}, con una duración de 30 segundos, acumulable hasta un máximo de 2 capas, se activa como máximo una vez dentro del mismo movimiento, al activarse de nuevo se reinicia la duración.",
                    refinements: [
                        { level: 1, ProbablidadCrit: "35%", DañoDef: "15%" },
                        { level: 2, ProbablidadCrit: "41%", DañoDef: "16.5%" },
                        { level: 3, ProbablidadCrit: "47%", DañoDef: "18%" },
                        { level: 4, ProbablidadCrit: "53%", DañoDef: "19.5%" },
                        { level: 5, ProbablidadCrit: "60%", DañoDef: "21%" }
                    ]
                }
            },
            "v2.8.2": {
                versionLabel: "v2.8.2",
                effect: {
                    title: "Efecto del Arma de Prueba de Promeia",
                    description: "El Daño Hielo infligido por el portador aumenta un {VALOR_1}; cuando un portador de Atributo Hielo activa la (Técnica Especial EX), el daño de Anomalía de Atributo y el daño de (Desorden) infligidos por sí mismo aumentan un {VALOR_2}, con una duración de 40 segundos, acumulable hasta un máximo de 2 capas, se activa como máximo una vez dentro del mismo movimiento, al activarse de nuevo se reinicia la duración, al poseer 2 capas del efecto, el daño de (Abloom) infligido por el personaje aumenta adicionalmente un {VALOR_3}.",
                    refinements: [
                        { level: 1, ProbablidadCrit: "35%", DañoDef: "7.5%" , DañoAbloom: "25%"},
                        { level: 2, ProbablidadCrit: "41%", DañoDef: "8.5", DañoAbloom: "28.7" },
                        { level: 3, ProbablidadCrit: "47%", DañoDef: "9.5%", DañoAbloom: "32.5" },
                        { level: 4, ProbablidadCrit: "53%", DañoDef: "10.5%", DañoAbloom: "36.2", },
                        { level: 5, ProbablidadCrit: "60%", DañoDef: "11.5%", DañoAbloom: "40%" }
                    ]
                }
            }
        }
    },
    5545: {
        id: 5545,
        name: "Arma de Prueba de Starlight - Billy",
        rol: "Ruptura",
        versions: {
            "v2.8.1": {
                versionLabel: "v2.8.1",
                effect: {
                    title: "Efecto del arma de Prueba de Starlight - Billy",
                    description: "La Probabilidad Crítica aumenta un {VALOR_1}; cuando el portador activa un (Ataque Básico), el (Daño de Fuerza Pura de Atributo Físico) infligido por el portador aumenta un {VALOR_2}, acumulable hasta un máximo de 2 capas, con una duración de 12 segundos, al activarse de nuevo se reinicia la duración.",
                    refinements: [
                        { level: 1, ProbablidadCrit: "20%", DañoDef: "12%" },
                        { level: 2, ProbablidadCrit: "23%", DañoDef: "13.5%" },
                        { level: 3, ProbablidadCrit: "26%", DañoDef: "15%" },
                        { level: 4, ProbablidadCrit: "29%", DañoDef: "16.5%" },
                        { level: 5, ProbablidadCrit: "32%", DañoDef: "18%" }
                    ]
                }
            }
        }
    }
}


/**
 * Get all available weapons for the diff viewer
 * @returns {Array} Array of weapon objects with id and name
 */
export function getAvailableWeapons() {
    return Object.values(versionedWeapons).map(weapon => ({
        id: weapon.id,
        name: weapon.name,
        rol: weapon.rol
    }));
}

/**
 * Get available versions for a specific weapon
 * @param {number} weaponId - The weapon ID
 * @returns {Array} Array of version labels
 */
export function getWeaponVersions(weaponId) {
    const weapon = versionedWeapons[weaponId];
    if (!weapon || !weapon.versions) return [];
    return Object.keys(weapon.versions);
}

/**
 * Get specific version data for a weapon
 * @param {number} weaponId - The weapon ID
 * @param {string} versionLabel - The version label (e.g., "Beta 1", "V1")
 * @returns {Object|null} The version data or null if not found
 */
export function getWeaponVersionData(weaponId, versionLabel) {
    const weapon = versionedWeapons[weaponId];
    if (!weapon || !weapon.versions || !weapon.versions[versionLabel]) return null;
    return weapon.versions[versionLabel];
}

/**
 * Get all hotfixes for a specific weapon version
 * @param {number} weaponId
 * @param {string} versionLabel
 * @returns {Array} Array of hotfix objects
 */
export function getWeaponHotfixes(weaponId, versionLabel) {
    const weapon = versionedWeapons[weaponId];
    if (!weapon || !weapon.versions || !weapon.versions[versionLabel]) return [];
    return weapon.versions[versionLabel].hotfixes || [];
}

/**
 * Get a specific hotfix data for a weapon
 * @param {number} weaponId
 * @param {string} versionLabel
 * @param {number} hotfixId
 * @returns {Object|null} The hotfix data
 */
export function getWeaponHotfixData(weaponId, versionLabel, hotfixId) {
    const hotfixes = getWeaponHotfixes(weaponId, versionLabel);
    return hotfixes.find(hf => hf.id === hotfixId) || null;
}

/**
 * Get the version data with latest hotfix effect merged in
 * @param {number} weaponId
 * @param {string} versionLabel
 * @returns {Object|null} Version data with merged effect
 */
export function getWeaponLatestVersionData(weaponId, versionLabel) {
    const versionData = getWeaponVersionData(weaponId, versionLabel);
    if (!versionData) return null;

    const hotfixes = versionData.hotfixes || [];
    if (hotfixes.length === 0) return versionData;

    // Last hotfix wins
    const lastHotfix = hotfixes[hotfixes.length - 1];
    return {
        ...versionData,
        effect: lastHotfix.effect || versionData.effect,
        detailStats: lastHotfix.detailStats || versionData.detailStats
    };
}
