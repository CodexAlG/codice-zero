"use client";

import Image from "next/image";
import { agents } from "@/data/agents";

const TIERS = ["S", "A", "B", "C", "D", "E", "F"];
const ROLES = [
    { id: "dps", label: "DPS" },
    { id: "subdps", label: "SUB-DPS" },
    { id: "stun", label: "ATURDIDOR" },
    { id: "support", label: "SOPORTE" },
];

const TIER_COLORS = {
    S: "#ff7f7f", // Redish
    A: "#ffbf7f", // Orange
    B: "#ffff7f", // Yellow
    C: "#7fff7f", // Green
    D: "#7fbfff", // Blue
    E: "#7f7fff", // Indigo
    F: "#ff7fff", // Violet
};

// Helper to map agent role to column ID
const getAgentRoleColumn = (agent) => {
    const r = agent.rol;
    if (r === "Ataque" || r === "Ruptura") return "dps";
    if (r === "Anomalia") return "subdps";
    if (r === "Aturdidor") return "stun";
    if (r === "Soporte" || r === "Defensa") return "support";
    return null;
};

export default function DeveloperTierList() {

    // Group agents by Tier + Role
    const getAgentsForCell = (tier, roleId) => {
        return agents.filter(agent => {
            // 1. Check Rank (Row)
            // If agent has no explicit rank, maybe exclude or put in F? 
            // User said "una que sera estatica, tipo la que yo pondre manualmente".
            // We rely on agent.rank being set to S, A, etc.
            // If agent.rank is undefined, we skip for now.
            if (agent.rank !== tier) return false;

            // 2. Check Role (Column)
            const col = getAgentRoleColumn(agent);
            return col === roleId;
        });
    };

    return (
        <div className="w-full max-w-7xl mx-auto overflow-x-auto pb-10">
            <div className="text-center mb-8">
                <p className="text-gray-400 max-w-2xl mx-auto italic">
                    "Esta tier list fue creada por el desarrollador. Se clasificó en base a daño, equipos, versatilidad y coste."
                </p>
            </div>

            {/* Grid Container */}
            <div className="min-w-[800px] border border-white/10 rounded-lg overflow-hidden bg-[#0a0a0a]">

                {/* Beader Row (Roles) */}
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
                    <div key={tier} className="grid grid-cols-[100px_1fr_1fr_1fr_1fr] md:grid-cols-[120px_1fr_1fr_1fr_1fr] border-b border-white/5 last:border-0 min-h-[120px]">

                        {/* Row Header (Tier Label) */}
                        <div
                            className="flex items-center justify-center border-r border-black/20 relative overflow-hidden p-2"
                            style={{ backgroundColor: TIER_COLORS[tier] }}
                        >
                            <span className="text-black font-black text-4xl md:text-5xl font-display italic shadow-black/10 drop-shadow-md">
                                {tier}
                            </span>
                        </div>

                        {/* Role Cells */}
                        {ROLES.map(role => {
                            const cellAgents = getAgentsForCell(tier, role.id);

                            return (
                                <div key={`${tier}-${role.id}`} className="bg-gray-900/30 p-2 flex flex-wrap gap-2 content-center justify-center border-l border-white/5">
                                    {cellAgents.map(agent => (
                                        <div key={agent.id} className="relative group w-14 h-14 md:w-16 md:h-16 bg-gray-800 rounded-lg overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-colors shadow-lg">
                                            <Image
                                                src={agent.image || agent.icon}
                                                alt={agent.name}
                                                fill
                                                className={`object-cover ${agent.customStyle ? agent.customStyle.replace('scale-[1.00] group-hover:scale-[1.10]', '') : ''}`} // Strip hover scale to avoid clipping issues if needed, or keep it.
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
