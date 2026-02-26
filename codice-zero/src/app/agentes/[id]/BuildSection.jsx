'use client';

import Image from 'next/image';
import Link from 'next/link';

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
        <div id="strategy" className="relative w-full max-w-[1400px] mx-auto p-4 lg:p-12 pt-0 pb-24 font-sans">

            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent"></div>
                <h2 className="text-3xl font-display italic font-bold text-center tracking-widest bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent drop-shadow-lg">
                    ESTRATEGIA DE COMBATE
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-500/50 to-transparent"></div>
            </div>

            {/* MAIN CONTAINER */}
            <div className="bg-[#0f0f11]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden relative">

                {/* Decoración de fondo */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                {/* SKILL PRIORITY */}
                {strategy.skillPriority && (
                    <div className="relative border-b border-white/5 px-4 py-5 flex flex-col items-center justify-center bg-black/20">
                        <span className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-3">
                            Prioridad de Habilidades
                        </span>
                        <div className="flex items-center gap-2 flex-wrap justify-center p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                            {strategy.skillPriority.map((skill, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className={`
                                        flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                                        ${idx === 0
                                            ? "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                                            : "hover:bg-white/10"
                                        }
                                    `}>
                                        <div className="relative w-8 h-8 shrink-0 drop-shadow-md">
                                            {SKILL_ICONS[skill] && (
                                                <Image
                                                    src={SKILL_ICONS[skill]}
                                                    alt={skill}
                                                    fill
                                                    className={`object-contain ${idx === 0 ? "drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" : "opacity-70 grayscale-[50%]"}`}
                                                    unoptimized
                                                />
                                            )}
                                        </div>
                                        <span className={`text-sm font-bold hidden md:block tracking-wide ${idx === 0 ? "text-yellow-400" : "text-gray-400"}`}>
                                            {skill}
                                        </span>
                                    </div>
                                    {idx < strategy.skillPriority.length - 1 && (
                                        <div className="mx-2 text-white/20">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">

                    {/* LEFT - WEAPONS */}
                    <div className="lg:col-span-5 p-6 lg:border-r border-white/5 relative bg-gradient-to-r from-cyan-950/10 to-transparent">
                        <h3 className="text-xs font-black text-cyan-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                            W-Engines Recomendados
                        </h3>

                        <div className="space-y-3">
                            {strategy.bestWeapons?.map((w, i) => (
                                <Link
                                    key={i}
                                    href={w.id ? `/armas/${w.id}` : '#'}
                                    className="group flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/30 hover:shadow-[0_4px_20px_rgba(34,211,238,0.1)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                                >
                                    {/* Weapon Icon */}
                                    <div className="relative w-[5.5rem] h-[5.5rem] shrink-0 rounded-lg overflow-hidden bg-black border border-white/10 group-hover:border-cyan-500/50 transition-colors shadow-inner">
                                        {w.icon ? (
                                            <Image
                                                src={w.icon}
                                                alt={w.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                unoptimized
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">?</div>
                                        )}
                                        {/* Tier Badge Premium */}
                                        <div className="absolute top-0 right-0 p-1">
                                            <div className={`
                                                flex items-center justify-center min-w-[24px] h-[24px] px-1.5 rounded-bl-lg rounded-tr-sm text-[11px] font-black tracking-wider shadow-lg backdrop-blur-sm border-b border-l border-white/20
                                                ${w.tier?.includes("S+") ? "bg-gradient-to-br from-yellow-300 to-yellow-600 text-black" :
                                                    w.tier?.includes("S") ? "bg-gradient-to-br from-yellow-500 to-amber-700 text-black" :
                                                        w.tier?.includes("A") ? "bg-gradient-to-br from-purple-400 to-purple-700 text-white" :
                                                            "bg-gradient-to-br from-gray-500 to-gray-700 text-white"}
                                            `}>
                                                {w.tier}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0 py-1">
                                        <h4 className="text-base font-bold text-gray-200 truncate group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                                            {w.name}
                                        </h4>
                                        {w.tag && (
                                            <div className="mt-1 flex items-center gap-2">
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded text-cyan-200 bg-cyan-950/50 border border-cyan-800/50 uppercase tracking-widest">
                                                    {w.tag}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - DISCS & TEAMS */}
                    <div className="lg:col-span-7 flex flex-col">

                        {/* DISCS */}
                        <div className="p-6 border-b border-white/5 relative bg-gradient-to-l from-purple-950/10 to-transparent">
                            <h3 className="text-xs font-black text-purple-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span>
                                Drive Discs Requeridos
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                                {strategy.driveDiscSetups?.map((setup, idx) => (
                                    <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-4 relative overflow-hidden group hover:border-purple-500/20 transition-colors">
                                        {/* Glow background */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors pointer-events-none"></div>

                                        <div className="text-[10px] font-black text-purple-300/70 uppercase tracking-[0.15em] mb-4 flex items-center justify-between">
                                            <span>{setup.name}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            {setup.sets.map((set, sIdx) => (
                                                <div key={sIdx} className="flex items-center gap-2">
                                                    <div className="relative group/disc">
                                                        <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-gray-900 border border-white/10 overflow-hidden relative shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover/disc:border-purple-400/50 transition-colors">
                                                            {set.icon && (
                                                                <Image
                                                                    src={set.icon}
                                                                    alt={set.name}
                                                                    fill
                                                                    className="object-cover p-1 drop-shadow-lg"
                                                                    unoptimized
                                                                />
                                                            )}
                                                        </div>
                                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-[10px] font-black text-white border-2 border-[#151518] shadow-sm">
                                                            {set.count}
                                                        </div>
                                                    </div>
                                                    <span className="text-[11px] font-bold text-gray-300 leading-tight flex-1 max-w-[80px]">{set.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Main Stats UI */}
                            {strategy.driveDiscSetups?.[0]?.mainStats && (
                                <div className="bg-black/40 rounded-xl border border-white/5 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5 overflow-hidden shadow-inner">
                                    <div className="flex-1 p-3 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
                                        <div className="text-[10px] text-gray-500 font-bold mb-1 tracking-widest">SLOT IV</div>
                                        <div className="text-sm text-purple-100 font-bold drop-shadow-sm">{strategy.driveDiscSetups[0].mainStats.iv}</div>
                                    </div>
                                    <div className="flex-1 p-3 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
                                        <div className="text-[10px] text-gray-500 font-bold mb-1 tracking-widest">SLOT V</div>
                                        <div className="text-sm text-purple-100 font-bold drop-shadow-sm">{strategy.driveDiscSetups[0].mainStats.v}</div>
                                    </div>
                                    <div className="flex-1 p-3 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
                                        <div className="text-[10px] text-gray-500 font-bold mb-1 tracking-widest">SLOT VI</div>
                                        <div className="text-sm text-purple-100 font-bold drop-shadow-sm">{strategy.driveDiscSetups[0].mainStats.vi}</div>
                                    </div>
                                </div>
                            )}

                            {strategy.statsPriority && (
                                <div className="mt-4 flex items-center gap-3 text-xs bg-white/[0.02] py-2 px-4 rounded-lg border border-white/5">
                                    <span className="font-black text-gray-400 tracking-wider">SUBSTATS:</span>
                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                        {strategy.statsPriority.map((stat, sIdx) => (
                                            <div key={sIdx} className="flex items-center">
                                                <span className="text-gray-200 font-medium">{stat}</span>
                                                {sIdx < strategy.statsPriority.length - 1 && (
                                                    <span className="text-gray-600 mx-2">›</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* TEAMS */}
                        <div className="p-6 flex-1 relative bg-gradient-to-tl from-green-950/10 to-transparent">
                            <h3 className="text-xs font-black text-green-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                                Sinergia de Equipos
                            </h3>

                            <div className="space-y-3">
                                {strategy.teams?.map((team, idx) => (
                                    <div key={idx} className="group flex items-center justify-between p-4 bg-black/20 border border-white/5 rounded-xl hover:bg-white/[0.02] hover:border-green-500/30 transition-all duration-300">
                                        <span className="text-base font-bold text-gray-200 group-hover:text-green-300 transition-colors drop-shadow-sm">{team.name}</span>

                                        {/* Team portraits with cascading z-index */}
                                        <div className="flex items-center -space-x-4 pr-2">
                                            {team.members.map((member, mIdx) => (
                                                <Link
                                                    key={mIdx}
                                                    href={member.id ? `/agentes/${member.id}` : '#'}
                                                    className={`
                                                        relative w-[4.5rem] h-[4.5rem] rounded-full overflow-hidden border-[3px] border-[#151518] bg-gray-900 
                                                        hover:!z-20 hover:scale-110 hover:border-green-400 transition-all duration-300 cursor-pointer block drop-shadow-lg
                                                    `}
                                                    style={{ zIndex: team.members.length - mIdx }}
                                                    title={member.name}
                                                >
                                                    {member.icon && member.icon !== "..." ? (
                                                        <Image
                                                            src={member.icon}
                                                            alt={member.name || "Agent"}
                                                            fill
                                                            className="object-cover group-hover/link:scale-110 transition-transform duration-500"
                                                            unoptimized
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-sm text-gray-600 font-black">
                                                            {member.name?.[0] || "?"}
                                                        </div>
                                                    )}
                                                </Link>
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
