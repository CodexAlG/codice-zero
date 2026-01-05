// Mock versioned weapon data for BetaDiffViewer demonstration

export const versionedWeapons = {
    // Weapon 5502 - Aguijón Afilado (Jane Doe)
    5502: {
        id: 5502,
        name: "Aguijón Afilado",
        rol: "Anomalia",
        versions: {
            "Beta 1": {
                versionLabel: "Beta 1",
                detailStats: {
                    baseAtk: { min: 55, max: 713 },
                    subStat: { name: "Maestría de Anomalía", min: "36", max: "90" }
                },
                effect: {
                    title: "Instinto Cazador",
                    description: "Al ejecutar un (ataque rapido), obtienes 1 carga de (instinto cazador). Por cada carga, el daño físico aumenta en un 12% durante 10s. Pueden acumularse hasta 3 cargas. Al tener 3 cargas, la tasa de acumulación de Anomalía aumenta en un 40%.",
                    refinements: [
                        { level: 1, atk: "12%", mastery: "40%" },
                        { level: 2, atk: "15%", mastery: "50%" },
                        { level: 3, atk: "18%", mastery: "60%" },
                        { level: 4, atk: "21%", mastery: "70%" },
                        { level: 5, atk: "24%", mastery: "80%" }
                    ]
                }
            },
            "Beta 2": {
                versionLabel: "Beta 2",
                detailStats: {
                    baseAtk: { min: 55, max: 720 },
                    subStat: { name: "Maestría de Anomalía", min: "38", max: "95" }
                },
                effect: {
                    title: "Instinto Cazador",
                    description: "Al ejecutar un (ataque rapido), obtienes 1 carga de (instinto cazador). Por cada carga, el daño físico aumenta en un 14% durante 12s. Pueden acumularse hasta 3 cargas. Al tener 3 cargas, la tasa de acumulación de Anomalía aumenta en un 45%.",
                    refinements: [
                        { level: 1, atk: "14%", mastery: "45%" },
                        { level: 2, atk: "17%", mastery: "55%" },
                        { level: 3, atk: "20%", mastery: "65%" },
                        { level: 4, atk: "23%", mastery: "75%" },
                        { level: 5, atk: "26%", mastery: "85%" }
                    ]
                }
            }
        }
    },

    // Weapon 5504 - Tejedor del Tiempo (Yanagi)
    5504: {
        id: 5504,
        name: "Tejedor del Tiempo",
        rol: "Anomalia",
        versions: {
            "V1": {
                versionLabel: "V1",
                detailStats: {
                    baseAtk: { min: 48, max: 713 },
                    subStat: { name: "Ataque", min: "12%", max: "30%" }
                },
                effect: {
                    title: "Estratagema Devoradora de Tiempo",
                    description: "La Tasa de Acumulación de Anomalia Electrica aumenta un 30%. Cuando una (Tecnica Especial) golpea a enemigos con (Anomalía de Atributo), la Maestría de Anomalía aumenta en 75 por 15s. Cuando la Maestría de Anomalía es mayor o igual a 375, el Daño de (Desorden) aumenta un 25%.",
                    refinements: [
                        { level: 1, atk: "30%", mastery: "75", damage: "25%" },
                        { level: 2, atk: "35%", mastery: "85", damage: "27.5%" },
                        { level: 3, atk: "40%", mastery: "95", damage: "30%" },
                        { level: 4, atk: "45%", mastery: "105", damage: "32.5%" },
                        { level: 5, atk: "50%", mastery: "115", damage: "35%" }
                    ]
                }
            },
            "V2": {
                versionLabel: "V2",
                detailStats: {
                    baseAtk: { min: 48, max: 720 },
                    subStat: { name: "Ataque", min: "12%", max: "32%" }
                },
                effect: {
                    title: "Estratagema Devoradora de Tiempo",
                    description: "La Tasa de Acumulación de Anomalia Electrica aumenta un 32%. Cuando una (Tecnica Especial) golpea a enemigos con (Anomalía de Atributo), la Maestría de Anomalía aumenta en 80 por 18s. Cuando la Maestría de Anomalía es mayor o igual a 375, el Daño de (Desorden) aumenta un 28%.",
                    refinements: [
                        { level: 1, atk: "32%", mastery: "80", damage: "28%" },
                        { level: 2, atk: "37%", mastery: "90", damage: "30.5%" },
                        { level: 3, atk: "42%", mastery: "100", damage: "33%" },
                        { level: 4, atk: "47%", mastery: "110", damage: "35.5%" },
                        { level: 5, atk: "52%", mastery: "120", damage: "38%" }
                    ]
                }
            }
        }
    },

    // Weapon 5505 - Santuario de Granizo (Miyabi)
    5505: {
        id: 5505,
        name: "Santuario de Granizo",
        rol: "Anomalia",
        versions: {
            "Beta 1": {
                versionLabel: "Beta 1",
                detailStats: {
                    baseAtk: { min: 50, max: 743 },
                    subStat: { name: "Prob. Crítica", min: "9.6%", max: "24%" }
                },
                effect: {
                    title: "Estrella Manchada de Escarcha",
                    description: "El Daño CRIT aumenta un 50%. Al usar una (Tecnica Especial EX) o cuando cualquier miembro aplica una (Anomalía de Atributo), el Daño Hielo aumenta un 20%, acumulándose hasta 2 veces y durando 15s.",
                    refinements: [
                        { level: 1, atk: "50%", damage: "20%" },
                        { level: 2, atk: "57%", damage: "23%" },
                        { level: 3, atk: "65%", damage: "26%" },
                        { level: 4, atk: "72%", damage: "29%" },
                        { level: 5, atk: "80%", damage: "32%" }
                    ]
                }
            },
            "Beta 2": {
                versionLabel: "Beta 2",
                detailStats: {
                    baseAtk: { min: 52, max: 750 },
                    subStat: { name: "Prob. Crítica", min: "9.6%", max: "26%" }
                },
                effect: {
                    title: "Estrella Manchada de Escarcha",
                    description: "El Daño CRIT aumenta un 55%. Al usar una (Tecnica Especial EX) o cuando cualquier miembro aplica una (Anomalía de Atributo), el Daño Hielo aumenta un 22%, acumulándose hasta 2 veces y durando 18s.",
                    refinements: [
                        { level: 1, atk: "55%", damage: "22%" },
                        { level: 2, atk: "62%", damage: "25%" },
                        { level: 3, atk: "70%", damage: "28%" },
                        { level: 4, atk: "77%", damage: "31%" },
                        { level: 5, atk: "85%", damage: "34%" }
                    ]
                }
            }
        }
    }
};

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
