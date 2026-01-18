// Mock versioned weapon data for BetaDiffViewer demonstration

export const versionedWeapons = {
    // Weapon 5540 - Aria Test W-Engine (S)
    5540: {
        id: 5540,
        name: "Aria Test W-Engine",
        rol: "Anomalia",
        versions: {
            "v2.6.1": {
                versionLabel: "v2.6.1",
                effect: {
                    title: "Aria Test W-Engine",
                    description: "Aumenta el ATK del equipador en un 18%. Cuando el equipador entra al campo o activa un (Ataque Especial) o (Técnica Especial EX), gana un buff: el DAÑO tratado a enemigos afligidos con Anomalía de Atributo Etereo aumenta en un 15%, y el DAÑO tratado a enemigos afligidos con cualquier Anomalía de Atributo aumenta en un 15%. Este efecto dura 12s, y los triggers repetidos reinician la duración. El efecto se elimina cuando el equipador sale del campo.",
                    refinements: [ // Tabla de Mejora (R1 - R5)
                        { level: 1, DañoIgnored: "18%", Daño: "15%", DañoCritico: "15%" },
                        { level: 2, DañoIgnored: "20.7%", Daño: "17.3%", DañoCritico: "17.3%" },
                        { level: 3, DañoIgnored: "23.4%", Daño: "19.5%", DañoCritico: "19.5%" },
                        { level: 4, DañoIgnored: "26.1%", Daño: "21.8%", DañoCritico: "21.8%" },
                        { level: 5, DañoIgnored: "28.8%", Daño: "24%", DañoCritico: "24%" }
                    ]
                }
            },
            "v2.6.2": {
                versionLabel: "v2.6.2",
                effect: {
                    title: "Aria Test W-Engine",
                    description: "Aumenta el ATK del equipador en un 18%. Cuando el equipador entra al campo o activa un (Ataque Especial) o (Técnica Especial EX), gana un buff: el DAÑO tratado a enemigos afligidos con Anomalía de Atributo Etereo aumenta en un 15%, y el DAÑO tratado a enemigos afligidos con cualquier Anomalía de Atributo aumenta en un 15%. Este efecto dura 15s, y los triggers repetidos reinician la duración. El efecto se elimina cuando el equipador sale del campo.",
                    refinements: [ // Tabla de Mejora (R1 - R5)
                        { level: 1, DañoIgnored: "18%", Daño: "15%", DañoCritico: "15%" },
                        { level: 2, DañoIgnored: "20.7%", Daño: "17.3%", DañoCritico: "17.3%" },
                        { level: 3, DañoIgnored: "23.4%", Daño: "19.5%", DañoCritico: "19.5%" },
                        { level: 4, DañoIgnored: "26.1%", Daño: "21.8%", DañoCritico: "21.8%" },
                        { level: 5, DañoIgnored: "28.8%", Daño: "24%", DañoCritico: "24%" }
                    ]
                }
            },
            "v2.6.3": {
                versionLabel: "v2.6.3",
                effect: {
                    title: "Golpe de Vitalidad",
                    description: "Aumenta el ATK del equipador en un 15%. Cuando el equipador de atributo Etéreo entra al campo o activa (Técnica Especial) o (Técnica Especial EX), obtiene un efecto de mejora: el DAÑO infligido a enemigos afectados por Anomalía de Atributo aumenta en un 25%, y todo el daño de Anomalía de Atributo después de activarse aumenta en un 12%. El efecto dura 15 segundos, los disparadores repetidos reinician la duración. El efecto se elimina al cambiar al campo trasero.",
                    refinements: [ // Tabla de Mejora (R1 - R5)
                        { level: 1, DañoIgnored: "15%", Daño: "25%", DañoCritico: "12%" },
                        { level: 2, DañoIgnored: "17.3%", Daño: "28.8%", DañoCritico: "13.8%" },
                        { level: 3, DañoIgnored: "19.5%", Daño: "32.5%", DañoCritico: "15.6%" },
                        { level: 4, DañoIgnored: "21.8%", Daño: "36.3%", DañoCritico: "17.4%" },
                        { level: 5, DañoIgnored: "24%", Daño: "40%", DañoCritico: "19.2%" }
                    ]
                }
            }
        }
    },
    // Weapon 5541 - Song of Thoughts (S)
    5541: {
        id: 5541,
        name: "Song of Thoughts",
        rol: "Soporte",
        versions: {
            "v2.6.1": {
                versionLabel: "v2.6.1",
                effect: {
                    title: "Sunna Test W-Engine",
                    description: "Aumenta la Regeneración de Energía del equipador en 0.4 por segundo. Cuando el equipador usa una (Técnica Especial EX) para infligir Daño Físico, otorga un buff a todo el escuadrón: Aumenta el DAÑO tratado en un 12.5% durante 6s. Puede acumularse hasta 2 veces, los triggers repetidos reinician la duración. Cuando tiene 2 acumulaciones, adicionalmente aumenta el ATK en un 12.5%. Solo una instancia de este efecto puede existir en el mismo escuadrón.",
                    refinements: [ // Tabla de Mejora (R1 - R5)
                        { level: 1, DañoIgnored: "0.4", Daño: "12.5%", DañoCritico: "12.5%" },
                        { level: 2, DañoIgnored: "0.46", Daño: "14.3%", DañoCritico: "14.3%" },
                        { level: 3, DañoIgnored: "0.52", Daño: "16.1%", DañoCritico: "16.1%" },
                        { level: 4, DañoIgnored: "0.58", Daño: "18.9%", DañoCritico: "18%" },
                        { level: 5, DañoIgnored: "0.65", Daño: "20%", DañoCritico: "20%" }
                    ]
                }
            },
            "v2.6.2": {
                versionLabel: "v2.6.2",
                effect: {
                    title: "Monólogo Decibel",
                    description: "Aumenta la Regeneración de Energía del equipador en 0.4 por segundo. Cuando el equipador usa una (Técnica Especial EX) para infligir Daño Físico, otorga un buff a todos los miembros del escuadrón: Aumenta el DAÑO tratado en un 12.5% durante 6s. Puede acumularse hasta 2 veces, los triggers repetidos reinician la duración. Cuando tiene 2 acumulaciones, adicionalmente aumenta el ATK en un 12.5%. Solo una instancia de este efecto puede existir en el mismo escuadrón.",
                    refinements: [ // Tabla de Mejora (R1 - R5)
                        { level: 1, DañoIgnored: "0.6", Daño: "12.5%", DañoCritico: "10%" },
                        { level: 2, DañoIgnored: "0.69", Daño: "14.3%", DañoCritico: "11.5%" },
                        { level: 3, DañoIgnored: "0.78", Daño: "16.1%", DañoCritico: "13%" },
                        { level: 4, DañoIgnored: "0.87", Daño: "18.9%", DañoCritico: "14.5%" },
                        { level: 5, DañoIgnored: "0.96", Daño: "20%", DañoCritico: "16%" }
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
