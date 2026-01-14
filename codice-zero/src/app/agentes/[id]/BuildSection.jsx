'use client';

import Image from 'next/image';

// Mapeo de iconos de habilidades
const SKILL_ICONS = {
    "Ataque Básico": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Basic-Attack-White-Alt-01.webp",
    "Técnica Especial": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-01-675x675.webp",
    "Técnica Definitiva": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-QTE-Ultimate-Colored-Inverted-01-691x675.webp",
    "Evasión": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Dodge-02.webp",
    "Asistencia": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Assist-01-675x675.webp",
    "Pasiva": "/CodiceZero/Habilidades/ZZZ-Asset-Icon-Core-Skills-03.webp",
};

export default function BuildSection({ strategy }) {
    if (!strategy) return null;

    return (
        <div id="strategy" className="relative w-full max-w-[1400px] mx-auto p-4 lg:p-12 pt-0 pb-24">

            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-white/20 flex-1"></div>
                <h2 className="text-3xl font-display italic font-bold text-center tracking-widest text-white">
                    ESTRATEGIA DE COMBATE
                </h2>
                <div className="h-px bg-white/20 flex-1"></div>
            </div>

            {/* MAIN CONTAINER */}
            <div className="bg-[#0f0f11] border border-white/5 rounded-xl overflow-hidden">

                {/* SKILL PRIORITY */}
                {strategy.skillPriority && (
                    <div className="bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 border-b border-white/5 px-4 py-3">
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mr-2">
                                Prioridad
                            </span>
                            {strategy.skillPriority.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-1">
                                    <div className={`
                                        flex items-center gap-2 px-3 py-1.5 rounded-lg
                                        ${idx === 0 ? "bg-yellow-500/20 border border-yellow-500/40" : "bg-white/5"}
                                    `}>
                                        <div className="relative w-10 h-10 shrink-0">
                                            {SKILL_ICONS[skill] && (
                                                <Image
                                                    src={SKILL_ICONS[skill]}
                                                    alt={skill}
                                                    fill
                                                    className={`object-contain ${idx === 0 ? "" : "opacity-80"}`}
                                                    unoptimized
                                                />
                                            )}
                                        </div>
                                        <span className={`text-sm font-bold hidden lg:block ${idx === 0 ? "text-yellow-300" : "text-white/80"}`}>
                                            {skill}
                                        </span>
                                    </div>
                                    {idx < strategy.skillPriority.length - 1 && (
                                        <span className="text-white/40 text-lg mx-1">›</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12">

                    {/* LEFT - WEAPONS */}
                    <div className="lg:col-span-5 p-5 lg:border-r border-white/5">
                        <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                            W-Engines Recomendados
                        </h3>

                        <div className="space-y-2">
                            {strategy.bestWeapons?.map((w, i) => (
                                <div key={i} className="group flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                    {/* Weapon Icon */}
                                    <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-black/50 border border-white/10">
                                        {w.icon ? (
                                            <Image
                                                src={w.icon}
                                                alt={w.name}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs text-gray-500">?</div>
                                        )}
                                        <div className={`
                                            absolute bottom-0 left-0 right-0 text-[10px] font-black text-center py-1
                                            ${w.tier?.includes("S+") ? "bg-yellow-500 text-black" :
                                                w.tier?.includes("S") ? "bg-yellow-600 text-black" :
                                                    w.tier?.includes("A") ? "bg-purple-500 text-white" :
                                                        "bg-gray-600 text-white"}
                                        `}>
                                            {w.tier}
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-base font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                                            {w.name}
                                        </h4>
                                        {w.tag && (
                                            <span className="text-sm text-gray-300 uppercase font-medium">
                                                {w.tag}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - DISCS & TEAMS */}
                    <div className="lg:col-span-7">

                        {/* DISCS */}
                        <div className="p-5 border-b border-white/5">
                            <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                Drive Discs
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {strategy.driveDiscSetups?.map((setup, idx) => (
                                    <div key={idx} className="bg-white/[0.03] border border-white/5 rounded-lg p-4">
                                        <div className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-3">
                                            {setup.name}
                                        </div>

                                        {/* Disc Icons */}
                                        <div className="flex items-center gap-3 mb-3">
                                            {setup.sets.map((set, sIdx) => (
                                                <div key={sIdx} className="flex items-center gap-2">
                                                    <div className="relative">
                                                        <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 overflow-hidden relative">
                                                            {set.icon && (
                                                                <Image
                                                                    src={set.icon}
                                                                    alt={set.name}
                                                                    fill
                                                                    className="object-cover"
                                                                    unoptimized
                                                                />
                                                            )}
                                                        </div>
                                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-[#0f0f11]">
                                                            {set.count}
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-bold text-white">{set.name}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Stats Row */}
                                        {setup.mainStats && (
                                            <div className="flex gap-2">
                                                <div className="flex-1 bg-black/40 rounded px-2 py-1.5 text-center">
                                                    <div className="text-[10px] text-gray-400 font-bold">IV</div>
                                                    <div className="text-sm text-white font-bold truncate">{setup.mainStats.iv}</div>
                                                </div>
                                                <div className="flex-1 bg-black/40 rounded px-2 py-1.5 text-center">
                                                    <div className="text-[10px] text-gray-400 font-bold">V</div>
                                                    <div className="text-sm text-white font-bold truncate">{setup.mainStats.v}</div>
                                                </div>
                                                <div className="flex-1 bg-black/40 rounded px-2 py-1.5 text-center">
                                                    <div className="text-[10px] text-gray-400 font-bold">VI</div>
                                                    <div className="text-sm text-white font-bold truncate">{setup.mainStats.vi}</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {strategy.statsPriority && (
                                <div className="mt-3 text-sm">
                                    <span className="font-bold text-gray-400">Substats: </span>
                                    <span className="text-white font-medium">{strategy.statsPriority.join(" › ")}</span>
                                </div>
                            )}
                        </div>

                        {/* TEAMS */}
                        <div className="p-5">
                            <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                Sinergia de Equipos
                            </h3>

                            <div className="space-y-2">
                                {strategy.teams?.map((team, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 rounded-lg hover:border-green-500/20 transition-colors">
                                        <span className="text-base font-bold text-white">{team.name}</span>

                                        {/* Team portraits */}
                                        <div className="flex items-center -space-x-3">
                                            {team.members.map((member, mIdx) => (
                                                <div
                                                    key={mIdx}
                                                    className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#0f0f11] bg-gray-800 hover:z-10 hover:scale-110 transition-transform cursor-pointer"
                                                    title={member.name}
                                                >
                                                    {member.icon && member.icon !== "..." ? (
                                                        <Image
                                                            src={member.icon}
                                                            alt={member.name || "Agent"}
                                                            fill
                                                            className="object-cover"
                                                            unoptimized
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-sm text-gray-400 font-bold">
                                                            {member.name?.[0] || "?"}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
