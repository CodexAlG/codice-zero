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
    //             }
    //         }
    //     }
    // }
    5542: {
        id: 5542,
        name: "Arma de Prueba de Nangong Yu",
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
            }
        }
    },
    5543: {
        id: 5543,
        name: "Arma de Prueba de Cissia",
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
