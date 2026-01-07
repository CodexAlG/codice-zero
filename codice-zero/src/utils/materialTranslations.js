export const bossMaterialTranslations = {
    // Weekly Bosses
    "Finale Dance Shoes": "Zapatos de Baile Finales",
    "Ferocious Grip": "Agarre Feroz",
    "Living Drive": "Impulso Vital",
    "Exuvia of Refinement": "Exuvia del Refinamiento",
    "Clouded Crystalline Substance": "Sustancia Cristalina Nublada",
    "Sycophant's Refinement": "Refinamiento del Sicofante",
    "Scarlet Engine": "Motor Escarlata",

    // Elite Bosses
    // Prefixes
    "Higher Dimensional Data": "Datos de Dimensiones Superiores",

    // Full Names
    "Higher Dimensional Data: Crimson Awe": "Datos de Dimensiones Superiores: Terror Carmesí",
    "Higher Dimensional Data: Steel Malice": "Datos de Dimensiones Superiores: Malicia de Acero",
    "Higher Dimensional Data: Destructive Advance": "Datos de Dimensiones Superiores: Avance Destructivo",
    "Higher Dimensional Data: Murderous Obituary": "Datos de Dimensiones Superiores: Obituario Asesino",
    "Higher Dimensional Data: Ethereal Pursuit": "Datos de Dimensiones Superiores: Persecución Etérea",
    "Higher Dimensional Data: Falling Fist": "Datos de Dimensiones Superiores: Puño Descendente",
    "Higher Dimensional Data: Miasmic Elytron": "Datos de Dimensiones Superiores: Élitro Miasmático",
    "Higher Dimensional Data: Thunderous Dragon": "Datos de Dimensiones Superiores: Dragón Atronador",
    "Higher Dimensional Data: Toxic Edge": "Datos de Dimensiones Superiores: Filo Tóxico",
    "Higher Dimensional Data: Mortal Cleave": "Datos de Dimensiones Superiores: Corte Mortal",
    "Higher Dimensional Data: Stealth Phantom": "Datos de Dimensiones Superiores: Fantasma Sigiloso",
    "Higher Dimensional Data: Corrupted Dreamsteel": "Datos de Dimensiones Superiores: Acero Onírico Corrupto",
    "Higher Dimensional Data: Spiked Corruption Core": "Datos de Dimensiones Superiores: Núcleo de Corrupción Espinoso"
};

export const translateMaterial = (name) => {
    if (!name) return "";

    // Direct match
    if (bossMaterialTranslations[name]) {
        return bossMaterialTranslations[name];
    }

    // Check if it starts with "Higher Dimensional Data:" prefix but wasn't found in direct matches
    // This handles cases where we might miss a specific combination but can at least translate the prefix
    if (name.startsWith("Higher Dimensional Data:")) {
        const suffix = name.split(": ")[1];
        return `Datos de Dimensiones Superiores: ${suffix}`;
    }

    return name;
};
