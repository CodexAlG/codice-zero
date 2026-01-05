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

            {/* Header Content */}
            <div className="mb-8 space-y-6">

                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-4">Tier List</h2>

                {/* Disclaimer Box */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                        <div className="mt-1 min-w-[4px] h-12 bg-red-500 rounded-full"></div>
                        <div>
                            <h3 className="text-red-400 font-bold mb-1 uppercase text-xs tracking-widest">Aviso Importante</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Esta clasificación es una guía referencial basada en análisis detallados del meta actual.
                                Recuerda que la efectividad de cada agente puede variar según la composición de tu equipo
                                y tu estilo de juego personal. No tomes esto como una verdad absoluta.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Criteria Box */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-yellow-500 rounded-full"></span>
                        Criterios de Evaluación
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-300 group">
                                <span className="w-8 h-8 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center font-bold text-yellow-500 group-hover:border-yellow-500/50 transition-colors">S</span>
                                <span>Evaluados en base (M0) + Arma (W1)</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300 group">
                                <span className="w-8 h-8 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center font-bold text-purple-400 group-hover:border-purple-400/50 transition-colors">A</span>
                                <span>Evaluados a máximo potencial (M6)</span>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400">
                                <span className="text-yellow-500">❖</span>
                                Desempeño general en End-Game
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <span className="text-yellow-500">❖</span>
                                Coste de inversión vs Beneficio
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <span className="text-yellow-500">❖</span>
                                Versatilidad en equipos
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Grid Container */}
            <div className="w-full border border-white/10 rounded-lg overflow-hidden bg-[#0a0a0a]">

                {/* Header Row (Roles) - Hidden on Mobile */}
                <div className="hidden md:grid md:grid-cols-[120px_1fr_1fr_1fr_1fr]">
                    <div className="bg-gray-900/80 p-4 border-b border-r border-white/10 flex items-center justify-center">
                        <span className="font-bold text-gray-500 text-xs uppercase">Rango</span>
                    </div>
                    {ROLES.map(role => (
                        <div key={role.id} className="bg-gray-900/80 p-4 border-b border-white/10 border-l border-white/5 text-center flex items-center justify-center">
                            <span className="font-black italic text-yellow-500 text-xl drop-shadow-sm tracking-wider">
                                {role.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Tier Rows */}
                {TIERS.map(tier => (
                    <div key={tier} className="flex flex-col md:grid md:grid-cols-[120px_1fr_1fr_1fr_1fr] border-b border-white/5 last:border-0 min-h-[140px]">

                        {/* Row Header (Tier Label) */}
                        <div
                            className="flex items-center justify-center border-b md:border-b-0 md:border-r border-black/20 relative overflow-hidden p-4 md:p-2 w-full md:w-auto"
                            style={{ backgroundColor: TIER_COLORS[tier] }}
                        >
                            <span className="text-black font-black text-4xl md:text-3xl font-display italic shadow-black/10 drop-shadow-md">
                                {tier}
                            </span>
                        </div>

                        {/* Role Cells */}
                        {ROLES.map(role => {
                            const agentIds = TIER_DATA[tier]?.[role.id] || [];
                            const cellAgents = agentIds.map(id => agents.find(a => a.id === id)).filter(Boolean);

                            return (
                                <div key={`${tier}-${role.id}`} className="bg-gray-900/30 p-4 flex flex-col md:justify-center border-l-0 md:border-l border-white/5 border-b md:border-b-0 border-white/5 last:border-b-0">
                                    {/* Mobile Role Label */}
                                    <span className="md:hidden text-yellow-500 font-bold text-sm mb-3 uppercase tracking-wider text-center border-b border-white/10 pb-1">
                                        {role.label}
                                    </span>

                                    <div className="flex flex-wrap gap-3 justify-center">
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
                                </div>
                            );
                        })}
                    </div>
                ))}

            </div>
        </div>
    );
}
