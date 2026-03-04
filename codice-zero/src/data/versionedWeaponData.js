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
    5542: {
        id: 5542,
        name: "Delirio de Neón",
        rol: "Aturdidor",
        versions: {
            "v2.7.1": {
                versionLabel: "v2.7.1",
                effect: {
                    title: "",
                    description: "La Maestría de Anomalía del portador aumenta en 90 puntos; cuando la (Técnica Especial EX) o el (Ataque Básico) del portador infligen Daño Etéreo, el daño infligido por todo el equipo aumenta en 15%, con una duración de 40 segundos, acumulable hasta un máximo de 2 capas, se activa como máximo una vez dentro del mismo movimiento, al activarse de nuevo se reinicia la duración, al poseer 2 capas del efecto, la Maestriía de Anomalía del portador aumenta adicionalmente en 60, este efecto es único para todo el equipo.",
                    refinements: [
                        { level: 1, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" },
                        { level: 2, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" },
                        { level: 3, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" },
                        { level: 4, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" },
                        { level: 5, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" }
                    ]
                }
            },
            "v2.7.2": {
                versionLabel: "v2.7.2",
                effect: {
                    title: "Demonio del Disco",
                    description: "La Maestría de Anomalía del portador aumenta en 90 puntos; cuando la (Técnica Especial EX) o el (Ataque Básico) del portador infligen Daño Etéreo, el daño infligido por todo el equipo aumenta en 15%, con una duración de 40 segundos, acumulable hasta un máximo de 2 capas, se activa como máximo una vez dentro del mismo movimiento, al activarse de nuevo se reinicia la duración, al poseer 2 capas del efecto, la Maestriía de Anomalía del portador aumenta adicionalmente en 60 puntos, este efecto es único para todo el equipo.",
                    refinements: [
                        { level: 1, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" },
                        { level: 2, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" },
                        { level: 3, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" },
                        { level: 4, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" },
                        { level: 5, MaestríaAnomalía1: "90", Daño: "15%", MaestríaAnomalía2: "60" }
                    ]
                }
            }
        }
    },
    5543: {
        id: 5543,
        name: "Rastreo de Colmillos y Escamas",
        rol: "Ataque",
        versions: {
            "v2.7.1": {
                versionLabel: "v2.7.1",
                effect: {
                    title: "",
                    description: "La Probablidad Crítica aumenta un 20%; cuando el portador consume 20 puntos de energía en una sola acción, por cada 20 puntos de energía consumidos, obtiene un efecto de mejora de 3 segundos: al infligir Daño Eléctrico ignora un 30% de la defensa del objetivo; al obtenerse repetidamente, se extiende la duración, hasta un máxmimo de 30 segundos; al entrar en estado de combate, obtiene 10 segundos de este efecto de mejora; cuando el portador no es el personaje en uso, la duración no disminuye.",
                    refinements: [
                        { level: 1, ProbablidadCrit: "20%", DañoDef: "30%" },
                        { level: 2, ProbablidadCrit: "23%", DañoDef: "34.5%" },
                        { level: 3, ProbablidadCrit: "26%", DañoDef: "39%" },
                        { level: 4, ProbablidadCrit: "29%", DañoDef: "43.5%" },
                        { level: 5, ProbablidadCrit: "32%", DañoDef: "48%" }
                    ]
                }
            },
            "v2.7.2": {
                versionLabel: "v2.7.2",
                effect: {
                    title: "Toxina Biomimética",
                    description: "La Probablidad Crítica aumenta un 25%; cuando el portador consume 20 puntos de energía en una sola acción, por cada 20 puntos de energía consumidos, obtiene un efecto de mejora de 3 segundos: al infligir Daño Eléctrico ignora un 30% de la defensa del objetivo; al obtenerse repetidamente, se extiende la duración, hasta un máxmimo de 30 segundos; al entrar en estado de combate, obtiene 10 segundos de este efecto de mejora; cuando el portador no es el personaje en uso, la duración no disminuye.",
                    refinements: [
                        { level: 1, ProbablidadCrit: "25%", DañoDef: "30%" },
                        { level: 2, ProbablidadCrit: "28.8%", DañoDef: "34.5%" },
                        { level: 3, ProbablidadCrit: "32.5%", DañoDef: "39%" },
                        { level: 4, ProbablidadCrit: "36.3%", DañoDef: "43.5%" },
                        { level: 5, ProbablidadCrit: "40%", DañoDef: "48%" }
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
