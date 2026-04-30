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
    5546: {
        id: 5546,
        name: "Arma de Prueba de Velina",
        rol: "Anomalia",
        versions: {
            "v3.0.1": {
                versionLabel: "v3.0.1",
                effect: {
                    title: "Efecto del Arma de Prueba de Velina",
                    description: "La Maestría de Anomalía del portador aumenta {VALOR_1}; cuando el portador activa (Técnica Especial EX), el daño de (Turbulencia) y (Corrosión) infligido por sí mismo aumenta un {VALOR_2}, con una duración de 40 segundos, acumulable hasta un máximo de 2 capas, al activarse repetidamente reinicia el tiempo de duración.",
                    refinements: [
                        { level: 1, MaestríaAnomalía: "105", DañoTurb: "10%" },
                        { level: 2, MaestríaAnomalía: "105", DañoTurb: "10%" },
                        { level: 3, MaestríaAnomalía: "105", DañoTurb: "10%" },
                        { level: 4, MaestríaAnomalía: "105", DañoTurb: "10%" },
                        { level: 5, MaestríaAnomalía: "105", DañoTurb: "10%" }
                    ]
                }
            }
        }
    },
    5547: {
        id: 5547,
        name: "Arma de Prueba de Norma",
        rol: "Aturdidor",
        versions: {
            "v3.0.1": {
                versionLabel: "v3.0.1",
                effect: {
                    title: "Efecto del Arma de Prueba de Norma",
                    description: "El Impacto del portador aumenta un {VALOR_1}; el daño infligido ignora un {VALOR_2} de la Res Fuego del objetivo; cuando el portador activa (Técnica Especial EX) e inflige daño, hace que el daño infligido por todo el equipo aumente un {VALOR_3}, con una duración de 8 segundos, acumulable hasta un máximo de 3 capas, al activarse repetidamente reinicia el tiempo de duración, dentro del mismo movimiento se activa como máximo 1 vez, este efecto es único para todo el equipo.",
                    refinements: [
                        { level: 1, Impacto: "15%", PenRatio: "10%", DañoEquipo: "8%" },
                        { level: 2, Impacto: "17.25%", PenRatio: "11.5%", DañoEquipo: "9.2%" },
                        { level: 3, Impacto: "19.5%", PenRatio: "13%", DañoEquipo: "10.4%" },
                        { level: 4, Impacto: "21.75%", PenRatio: "14.5%", DañoEquipo: "11.6%" },
                        { level: 5, Impacto: "24%", PenRatio: "16%", DañoEquipo: "12.8%" }
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
