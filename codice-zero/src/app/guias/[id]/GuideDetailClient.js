'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Snowflake, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

// --- MOCK DATA (Expandido o Dinámico en el futuro) ---
// Por ahora, si ID es 'miyabi' o '1' (ejemplo), carga datos de Miyabi.
// Si no, muestra un placeholder genérico.
const getMockData = (id) => {
    // Aquí conectaríamos con `src/data/guides/*.js` real en el futuro
    return {
        agent: { name: "Miyabi", element: "Ice", role: "Anomaly" },
        quick_summary: "DPS de Hielo enfocado en acumular anomalía rápidamente. Requiere gestión de energía.",
        stats_priority: ["Anomaly Mastery", "Ice DMG", "ATK%", "Pen Ratio"],
        weapons: [
            { name: "Timeweaver", tier: "S+", tag: "Best in Slot", desc: "Su arma firma. Buff masivo de hielo." },
            { name: "Steam Oven", tier: "A", tag: "Alternativa F2P", desc: "Buena regeneración de energía." },
            { name: "Electro-Lip Gloss", tier: "B", tag: "Situacional", desc: "Solo si hay otro anómalo en el equipo." }
        ],
        discs: {
            sets: ["4x Polar Metal", "2x Freedom Blues"],
            main_stats: {
                iv: "Anomaly Proficiency",
                v: "Ice DMG",
                vi: "Energy Regen"
            }
        }
    };
};

// --- COMPONENTS ---

const TierBadge = ({ tier }) => {
    const colors = {
        "S+": "bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.3)]",
        "A": "bg-purple-500/20 text-purple-400 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]",
        "B": "bg-blue-500/20 text-blue-400 border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
    };
    return (
        <span className={`px-2 py-0.5 rounded text-xs font-black font-mono border ${colors[tier] || colors["B"]}`}>
            {tier}
        </span>
    );
};

const ElementIcon = ({ element }) => {
    if (element === "Ice") return <Snowflake className="w-5 h-5 text-cyan-400" />;
    if (element === "Electric") return <Zap className="w-5 h-5 text-yellow-400" />;
    return <Sparkles className="w-5 h-5 text-gray-400" />;
};

export default function GuideDetailClient({ params }) {
    // Desempaquetar params (Next.js 15 safe)
    const unwrappedParams = params instanceof Promise ? use(params) : params;
    const id = unwrappedParams.id; // Podríamos usar esto para buscar data real

    const data = getMockData(id);

    return (
        <div className="min-h-screen bg-[#09090b] text-gray-200 font-sans selection:bg-cyan-500/30">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto p-6 md:p-12 relative z-10">

                {/* Navigation */}
                <Link href="/guias" className="inline-flex items-center text-gray-500 hover:text-cyan-400 transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold tracking-wider">VOLVER AL CENTRO</span>
                </Link>

                {/* --- HEADER: RESUMEN DEL AGENTE --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#121214]/80 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Top Border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Character Avatar Placeholder (Circle) */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-900 to-blue-900 border-2 border-cyan-400/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                            <span className="text-3xl">❄️</span>
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight italic">
                                    {data.agent.name}
                                </h1>
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                    <ElementIcon element={data.agent.element} />
                                    <span className="text-sm font-bold text-cyan-200 uppercase">{data.agent.element}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                    <Shield className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm font-bold text-purple-200 uppercase">{data.agent.role}</span>
                                </div>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                {data.quick_summary}
                            </p>

                            {/* Stats Priority */}
                            <div className="bg-black/40 rounded-lg p-3 inline-flex flex-wrap items-center gap-2 border border-white/5">
                                <span className="text-xs text-gray-500 font-bold uppercase mr-2 tracking-widest">Prioridad:</span>
                                {data.stats_priority.map((stat, index) => (
                                    <div key={index} className="flex items-center text-sm font-mono text-cyan-300">
                                        <span>{stat}</span>
                                        {index < data.stats_priority.length - 1 && (
                                            <span className="mx-2 text-gray-600 font-bold">{'>'}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* --- SECCIÓN: ARMAS (RANKING) --- */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 flex items-center gap-3">
                            <span className="w-8 h-1 bg-cyan-500 rounded-full" />
                            W-ENGINES
                        </h2>

                        <div className="flex flex-col gap-3">
                            {data.weapons.map((weapon, idx) => {
                                // Determine border color based on tier
                                let borderClass = "border-white/10 hover:border-white/20";
                                if (weapon.tier === "S+") borderClass = "border-yellow-500/50 bg-yellow-950/10 hover:bg-yellow-900/20";
                                if (weapon.tier === "A") borderClass = "border-purple-500/50 bg-purple-950/10 hover:bg-purple-900/20";
                                if (weapon.tier === "B") borderClass = "border-blue-500/50 bg-blue-950/10 hover:bg-blue-900/20";

                                return (
                                    <div key={idx} className={`relative p-4 rounded-xl border-l-[6px] ${borderClass} bg-[#121214] transition-all group`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-3">
                                                <TierBadge tier={weapon.tier} />
                                                <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                                                    {weapon.name}
                                                </h3>
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                                                {weapon.tag}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 pl-[4.5rem]">
                                            {weapon.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.section>

                    {/* --- SECCIÓN: DISCOS --- */}
                    <motion.section
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 flex items-center gap-3">
                            <span className="w-8 h-1 bg-purple-500 rounded-full" />
                            DRIVE DISCS
                        </h2>

                        <div className="bg-[#121214] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 p-20 bg-purple-500/5 blur-3xl rounded-full" />

                            {/* Sets Recomendados */}
                            <div className="mb-6">
                                {data.discs.sets.map((set, idx) => (
                                    <div key={idx} className="mb-3 last:mb-0">
                                        <h3 className="text-xl md:text-2xl font-black text-white mb-1 drop-shadow-lg">
                                            {set}
                                        </h3>
                                    </div>
                                ))}
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

                            {/* Main Stats Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {[
                                    { slot: "IV", stat: data.discs.main_stats.iv },
                                    { slot: "V", stat: data.discs.main_stats.v },
                                    { slot: "VI", stat: data.discs.main_stats.vi }
                                ].map((item) => (
                                    <div key={item.slot} className="bg-black/40 border border-white/5 rounded-lg p-3 flex flex-col items-center text-center hover:border-purple-500/50 transition-colors group">
                                        <span className="text-xs font-black text-gray-600 mb-2 group-hover:text-purple-400 transition-colors">
                                            SLOT {item.slot}
                                        </span>
                                        <span className="text-xs font-bold text-gray-200 leading-tight">
                                            {item.stat}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    );
}
