// Base de Datos de Bangboos
export const bangboos = [
    // RANGO S
    {
        id: 36,
        name: "Birkblick",
        rank: "S",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Birkblick_Portrait.webp"
    },
    {
        id: 35,
        name: "Mercurio",
        rank: "S",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Mercury_Portrait.webp"
    },
    {
        id: 34,
        name: "Srta. Esme",
        rank: "S",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Miss_Esme_Portrait.webp"
    },
    {
        id: 33,
        name: "Belion", // Rocaleón
        rank: "S",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Belion_Portrait.webp"
    },
    {
        id: 32,
        name: "Robin",
        rank: "S",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Robin_Portrait.webp"
    },
    {
        id: 31,
        name: "Snap",
        rank: "S",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Snap_Portrait.webp"
    },
    {
        id: 30,
        name: "Agente Gulliver",
        rank: "S",
        faction: "N.E.P.S.",
        image: "/CodiceZero/Bangboo/Agent_Gulliver_Portrait.webp"
    },
    {
        id: 29,
        name: "Bangvolver", // Revolverbú
        rank: "S",
        faction: "Sons of Calydon",
        image: "/CodiceZero/Bangboo/Bangvolver_Portrait.webp"
    },
    {
        id: 28,
        name: "Oficial Cui",
        rank: "S",
        faction: "N.E.P.S.",
        image: "/CodiceZero/Bangboo/Officer_Cui_Portrait.webp"
    },
    {
        id: 27,
        name: "Moccus Rojo",
        rank: "S",
        faction: "Sons of Calydon",
        image: "/CodiceZero/Bangboo/Red_Moccus_Portrait.webp"
    },
    {
        id: 26,
        name: "Resonaboo", // Ecobú
        rank: "S",
        faction: "N.E.P.S.",
        image: "/CodiceZero/Bangboo/Resonaboo_Portrait.webp"
    },
    {
        id: 25,
        name: "Enchufeboo", // Cablebú
        rank: "S",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Plugboo_Portrait.webp"
    },
    {
        id: 24,
        name: "Coheteboo", // Sonibú 
        rank: "S",
        faction: "Obol Squad",
        image: "/CodiceZero/Bangboo/Rocketboo_Portrait.webp"
    },
    {
        id: 23,
        name: "Amillion",
        rank: "S",
        faction: "Cunning Hares",
        image: "/CodiceZero/Bangboo/Amillion_Portrait.webp"
    },
    {
        id: 22,
        name: "Mayordomo",
        rank: "S",
        faction: "Victoria Housekeeping",
        image: "/CodiceZero/Bangboo/Butler_Portrait.webp"
    },
    {
        id: 21,
        name: "Diabloboo", // Belcebú
        rank: "A", // Corrected Rank based on file content A? Wait. Devilboo was A in file. User image implies S grouping? Devilboo is usually S in game? 
        // File said A for Diabloboo (ID 16 previously). I will keep file stats to avoid regression unless I know better.
        // Actually, looking at the grid in the image, the top section usually contains S ranks. Belcebu is in the second row.
        // Let's stick to the file's data for Rank but update ID.
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Devilboo_Portrait.webp"
    },
    {
        id: 20,
        name: "Seguridad", // Amparo
        rank: "S",
        faction: "H.S.O.-6",
        image: "/CodiceZero/Bangboo/Safety_Portrait.webp"
    },
    {
        id: 19,
        name: "Tiburonboo",
        rank: "S",
        faction: "Belobog Heavy Industries",
        image: "/CodiceZero/Bangboo/Sharkboo_Portrait.webp"
    },

    // RANGO A (Mostly)
    {
        id: 18,
        name: "Bild N. Boolok",
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Bild_N._Boolok_Portrait.webp"
    },
    {
        id: 17,
        name: "Caballeroboo",
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Knightboo_Portrait.webp"
    },
    {
        id: 16,
        name: "Excaliboo",
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Excaliboo_Portrait.webp"
    },
    {
        id: 15,
        name: "Luchaboo", // Peleabú
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Brawlerboo_Portrait.webp"
    },
    {
        id: 14,
        name: "Horasextra", // Currabú
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Overtimeboo_Portrait.webp"
    },
    {
        id: 13,
        name: "Malvaboo", // Malotebú
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Baddieboo_Portrait.webp"
    },
    {
        id: 12,
        name: "Presionboo", // Valvulabú
        rank: "A",
        faction: "Belobog Heavy Industries",
        image: "/CodiceZero/Bangboo/Booressure_Portrait.webp"
    },
    {
        id: 11,
        name: "Magnetiboo",
        rank: "A",
        faction: "Belobog Heavy Industries",
        image: "/CodiceZero/Bangboo/Magnetiboo_Portrait.webp"
    },
    {
        id: 10,
        name: "Electroboo",
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Electroboo_Portrait.webp"
    },
    {
        id: 9,
        name: "Dianaboo",
        rank: "A",
        faction: "Cunning Hares",
        image: "/CodiceZero/Bangboo/Boollseye_Portrait.webp"
    },
    {
        id: 8,
        name: "Aguacateboo",
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Avocaboo_Portrait.webp"
    },
    {
        id: 7,
        name: "Lloronboo",
        rank: "A",
        faction: "Victoria Housekeeping",
        image: "/CodiceZero/Bangboo/Cryboo_Portrait.webp"
    },
    {
        id: 6,
        name: "Bolsoboo",
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Bagboo_Portrait.webp"
    },
    {
        id: 5,
        name: "Papelboo", // Cartonbú
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Paperboo_Portrait.webp"
    },
    {
        id: 4,
        name: "Sumoboo",
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Sumoboo_Portrait.webp"
    },
    {
        id: 3,
        name: "Exploraboo",
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Exploreboo_Portrait.webp"
    },
    {
        id: 2,
        name: "Suerteboo", // Manikibú
        rank: "A",
        faction: "Generic",
        image: "/CodiceZero/Bangboo/Luckyboo_Portrait.webp"
    },
    {
        id: 1,
        name: "Pingüiboo",
        rank: "A",
        faction: "Belobog Heavy Industries",
        image: "/CodiceZero/Bangboo/Penguinboo_Portrait.webp"
    }
];
