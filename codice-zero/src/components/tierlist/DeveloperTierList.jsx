"use client";

import Image from "next/image";
import { agents } from "@/data/agents";

const TIERS = ["T0", "T0.5", "T1", "T2", "T3", "T4", "T5"];
const ROLES = [
    { id: "dps", label: "DPS" },
    { id: "subdps", label: "SUB-DPS" },
    { id: "stun", label: "ATURDIDOR" },
    { id: "support", label: "SOPORTE" },
];

const TIER_COLORS = {
    "T0": "#ff7f7f", // Redish
    "T0.5": "#ffbf7f", // Orange
    "T1": "#ffff7f", // Yellow
    "T2": "#7fff7f", // Green
    "T3": "#7fbfff", // Blue
    "T4": "#7f7fff", // Indigo
    "T5": "#ff7fff", // Violet
};

// --- MANUAL CONFIGURATION ---
// Add Agent IDs to the corresponding arrays to place them.
// DPS: Ataque, Ruptura
// SUB-DPS: Anomalia
// STUN: Aturdidor
// SUPPORT: Soporte, Defensa

const TIER_DATA = {
    "T0": {
        "dps": [
            47, // Ye Shunguang
            26, // Miyabi
            35, // Yixuan




        ],
        "subdps": [




        ],
        "stun": [
            44, // Dialyn





        ],
        "support": [
            27, // Astra Yao
            46, // Zhao
            42, // Lucia Elowen
            37, // Ukinami Yuzuha
        ]
    },
    "T0.5": {
        "dps": [
            38, // Alice
            39, // Seed
            30, // Soldier 0 - Anby
            45, // Banyue

        ],
        "subdps": [
            32, // Vivian Banshee
            40, // Orphie & Magus
        ],
        "stun": [
            24, // Lighter
            31, // Trigger
            36, // JuFuFu

        ],
        "support": [
            12, // Nicole

        ]
    },
    "T1": {
        "dps": [
            28, // Evelyn
            23, // Yanagi
            43, // Yidhari Murphy
            33, // Hugo Vlad
            41, // Komano Manato
            40, // Orphie & Magus
            10, // Jane Doe
        ],
        "subdps": [],
        "stun": [
            3,  // Lycaon
            9,  // Qingyi
        ],
        "support": [
            34, // Pan Yinhu
        ]
    },
    "T2": {
        "dps": [
            5,  // Soldier 11
            1,  // Ellen
            2,  // Zhu Yuan
            19,  // Piper
            25, // Harumasa
        ],
        "subdps": [
            7,   // Grace
            22, // Burnice
        ],
        "stun": [
            29, // Pulchra
        ],
        "support": [
            21, // Caesar
            6,  // Rina
            18, // Lucy

        ]
    },
    "T3": {
        "dps": [],
        "subdps": [],
        "stun": [
            4,   // Koleda
        ],
        "support": [
            15, // Soukaku
        ]
    },
    "T4": {
        "dps": [
            17,  // Anton
            14, // Corin
        ],
        "subdps": [],
        "stun": [
            11,  // Anby
        ],
        "support": [
            20, // Seth
        ]
    },
    "T5": {
        "dps": [
            8,  // Nekomata
            13, // Billy
        ],
        "subdps": [],
        "stun": [],
        "support": [
            16 // Ben

        ]
    }
};

export default function DeveloperTierList() {
    return (
        <div className="w-full max-w-7xl mx-auto overflow-x-auto pb-10">
            <div className="text-center mb-8">
                <p className="text-gray-400 max-w-2xl mx-auto italic">
                    &quot;Esta tier list fue creada por el desarrollador. Se clasificó en base a daño, equipos, versatilidad y coste.&quot;
                </p>
            </div>

            {/* Grid Container */}
            <div className="min-w-[800px] border border-white/10 rounded-lg overflow-hidden bg-[#0a0a0a]">

                {/* Header Row (Roles) */}
                <div className="grid grid-cols-[100px_1fr_1fr_1fr_1fr] md:grid-cols-[120px_1fr_1fr_1fr_1fr]">
                    <div className="bg-gray-900/80 p-4 border-b border-r border-white/10 flex items-center justify-center">
                        <span className="font-bold text-gray-500 text-xs uppercase">Rango</span>
                    </div>
                    {ROLES.map(role => (
                        <div key={role.id} className="bg-gray-900/80 p-4 border-b border-white/10 border-l border-white/5 text-center flex items-center justify-center">
                            <span className="font-black italic text-yellow-500 text-lg md:text-xl drop-shadow-sm tracking-wider">
                                {role.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Tier Rows */}
                {TIERS.map(tier => (
                    <div key={tier} className="grid grid-cols-[100px_1fr_1fr_1fr_1fr] md:grid-cols-[120px_1fr_1fr_1fr_1fr] border-b border-white/5 last:border-0 min-h-[140px]">

                        {/* Row Header (Tier Label) - Smaller Font */}
                        <div
                            className="flex items-center justify-center border-r border-black/20 relative overflow-hidden p-2"
                            style={{ backgroundColor: TIER_COLORS[tier] }}
                        >
                            <span className="text-black font-black text-2xl md:text-3xl font-display italic shadow-black/10 drop-shadow-md">
                                {tier}
                            </span>
                        </div>

                        {/* Role Cells */}
                        {ROLES.map(role => {
                            const agentIds = TIER_DATA[tier]?.[role.id] || [];
                            const cellAgents = agentIds.map(id => agents.find(a => a.id === id)).filter(Boolean);

                            return (
                                <div key={`${tier}-${role.id}`} className="bg-gray-900/30 p-2 flex flex-wrap gap-2 content-center justify-center border-l border-white/5">
                                    {cellAgents.map(agent => (
                                        <div key={agent.id} className="relative group w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-lg overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-colors shadow-lg">
                                            <Image
                                                src={agent.image || agent.icon}
                                                alt={agent.name}
                                                fill
                                                className={`object-cover ${agent.customStyle ? agent.customStyle.replace('scale-[1.00] group-hover:scale-[1.10]', '') : ''}`}
                                            />
                                            {/* Tooltip */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-[9px] text-center py-0.5 truncate px-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {agent.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                ))}

            </div>
        </div>
    );
}
