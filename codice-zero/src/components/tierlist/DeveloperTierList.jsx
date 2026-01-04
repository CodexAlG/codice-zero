"use client";

import { useState } from "react";
import TierRow from "@/components/tierlist/TierRow";
import { agents } from "@/data/agents";

// Role mapping based on user request: DPS-SUBDPS-ATURDIDOR-SOPORTE
// We map the game's internal roles to these categories.
const ROLE_TABS = [
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

// Map agents to roles
const getAgentsByRole = (roleTab) => {
    return agents.filter(agent => {
        const r = agent.rol;
        switch (roleTab) {
            case "dps":
                return r === "Ataque" || r === "Ruptura"; // Assuming Ruptura is also DPS-like
            case "subdps":
                return r === "Anomalia"; // Anomaly as Sub-DPS
            case "stun":
                return r === "Aturdidor";
            case "support":
                return r === "Soporte" || r === "Defensa"; // Defense often acts as support
            default:
                return false;
        }
    });
};

export default function DeveloperTierList() {
    const [activeRole, setActiveRole] = useState("dps");

    // Filter agents for the current active role
    const roleAgents = getAgentsByRole(activeRole);

    // Group agents by their predefined rank (from data) or default to empty
    // Note: user said "una que sera estatica, tipo la que yo pondre manualmente". 
    // Since we don't have manual tier data for everyone, we use the 'rank' property from agent data if available, 
    // otherwise we can just list them or put them in specific tiers if the data existed.
    // For now, I will distribute them based on their 'rank' property in agents.js which seems to be 'S' or 'A'.
    const getTierItems = (tier) => roleAgents.filter(a => a.rank === tier);

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-8">
                <p className="text-gray-400 max-w-2xl mx-auto italic">
                    "Esta tier list fue creada por el desarrollador. Se clasificó en base a daño, equipos, versatilidad y coste."
                </p>
            </div>

            {/* Role Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {ROLE_TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveRole(tab.id)}
                        className={`px-6 py-2 rounded-lg font-black italic tracking-wider transition-all duration-200 border border-transparent 
                ${activeRole === tab.id
                                ? 'bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)] scale-105'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border-white/10'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tier Rows */}
            <div className="flex flex-col gap-1">
                {["S", "A", "B", "C", "D", "E", "F"].map((tier) => (
                    <TierRow
                        key={tier}
                        label={tier}
                        color={TIER_COLORS[tier]}
                        items={getTierItems(tier)}
                        id={tier}
                    />
                ))}
            </div>
        </div>
    );
}
