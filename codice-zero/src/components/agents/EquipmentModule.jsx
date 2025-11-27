import Image from 'next/image';

export default function EquipmentModule({ equipment, themeColor }) {
    if (!equipment) {
        return (
            <div className="flex items-center justify-center h-full text-gray-500">
                <p>No hay datos de equipo disponibles para este agente.</p>
            </div>
        );
    }

    const { weapons, driveDiscs, teams } = equipment;

    return (
        <div className="animate-fadeIn w-full h-full flex flex-col gap-3 pr-1 pb-1 overflow-hidden">

            {/* --- SECCIÓN SUPERIOR: ARMAS Y DISCOS (Ocupa el espacio disponible) --- */}
            <div className="flex-1 flex flex-col xl:flex-row gap-3 min-h-0">

                {/* --- SECCIÓN 1: AMPLIFICADORES (WEAPONS) --- */}
                <section className="flex-1 bg-gray-900/60 border border-white/10 rounded-xl p-4 flex flex-col min-w-0">
                    <h3 className="text-lg font-display text-white uppercase italic font-bold mb-3 flex items-center gap-2 shrink-0">
                        <div className="w-1.5 h-6 bg-yellow-500 rounded-full"></div>
                        Amplificadores
                    </h3>
                    <div className="flex-1 grid grid-cols-3 gap-2 min-h-0 items-center">
                        {weapons.map((weapon, index) => (
                            <div key={index} className="h-full bg-black/40 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-2 hover:border-white/20 transition-colors group min-w-0">
                                <div className="relative w-24 h-24 shrink-0">
                                    {/* Glow effect based on rarity */}
                                    <div className={`absolute inset-0 rounded-full blur-xl opacity-20 ${weapon.rarity === 'S' ? 'bg-yellow-500' : 'bg-purple-500'}`}></div>
                                    <Image
                                        src={`/CodiceZero/Armas/${weapon.rarity === 'S' ? 'Ataque' : 'Ataque'}/${weapon.icon}`}
                                        alt={weapon.name}
                                        fill
                                        className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className={`absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border ${weapon.rarity === 'S' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'bg-purple-500/20 border-purple-500 text-purple-500'
                                        }`}>
                                        {weapon.rarity}
                                    </div>
                                </div>
                                <div className="text-center w-full min-w-0">
                                    <h4 className="text-gray-200 font-bold text-sm leading-tight truncate w-full">{weapon.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SECCIÓN 2: PISTAS DE DISCO (DRIVE DISCS) --- */}
                <section className="flex-1 bg-gray-900/60 border border-white/10 rounded-xl p-4 flex flex-col min-w-0">
                    <h3 className="text-lg font-display text-white uppercase italic font-bold mb-3 flex items-center gap-2 shrink-0">
                        <div className="w-1.5 h-6 bg-yellow-500 rounded-full"></div>
                        Pistas de Disco
                    </h3>

                    <div className="flex-1 flex flex-row gap-3 min-h-0 items-center">
                        {/* Sets Recomendados (Mejorado) */}
                        <div className="flex-1 h-full bg-black/40 border border-white/5 rounded-xl p-2 flex items-center justify-center gap-3 min-w-0 relative overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                            {driveDiscs.sets.map((set, index) => (
                                <div key={index} className="flex items-center gap-2 min-w-0 z-10">
                                    <div className="relative w-24 h-24 shrink-0 group transition-transform hover:scale-110" title={set.name}>
                                        <div className="absolute inset-0 bg-black/50 rounded-full blur-md -z-10"></div>
                                        <Image
                                            src={`/CodiceZero/Discos/${set.icon}`}
                                            alt={set.name}
                                            fill
                                            className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-black/90 text-white text-sm font-bold px-2 py-0.5 rounded-lg border border-white/20 shadow-lg">
                                            {set.count}pz
                                        </div>
                                    </div>
                                    {index === 0 && driveDiscs.sets.length > 1 && (
                                        <div className="text-gray-500 text-3xl font-bold shrink-0 mx-1">+</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Stats Principales (Compacto) */}
                        <div className="flex-[1.2] flex flex-col justify-center gap-2 min-w-0">
                            <div className="flex items-center justify-between bg-black/20 px-4 py-2.5 rounded-lg border border-white/5 hover:bg-black/30 transition-colors">
                                <span className="text-sm font-bold text-gray-400 w-8 shrink-0">IV</span>
                                <span className="text-sm text-white font-medium text-right truncate">{driveDiscs.stats.main.iv}</span>
                            </div>
                            <div className="flex items-center justify-between bg-black/20 px-4 py-2.5 rounded-lg border border-white/5 hover:bg-black/30 transition-colors">
                                <span className="text-sm font-bold text-gray-400 w-8 shrink-0">V</span>
                                <span className="text-sm text-white font-medium text-right truncate">{driveDiscs.stats.main.v}</span>
                            </div>
                            <div className="flex items-center justify-between bg-black/20 px-4 py-2.5 rounded-lg border border-white/5 hover:bg-black/30 transition-colors">
                                <span className="text-sm font-bold text-gray-400 w-8 shrink-0">VI</span>
                                <span className="text-sm text-white font-medium text-right truncate">{driveDiscs.stats.main.vi}</span>
                            </div>
                            {/* Substats en una línea */}
                            <div className="flex flex-wrap gap-2 mt-1 justify-end">
                                {driveDiscs.stats.sub.slice(0, 4).map((stat, idx) => (
                                    <span key={idx} className="text-[11px] bg-white/5 text-gray-300 px-2.5 py-1 rounded border border-white/5">
                                        {stat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* --- SECCIÓN 3: EQUIPOS (TEAMS) (Altura fija) --- */}
            <section className="shrink-0 bg-gray-900/60 border border-white/10 rounded-xl p-4 min-w-0">
                <h3 className="text-lg font-display text-white uppercase italic font-bold mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-yellow-500 rounded-full"></div>
                    Composiciones
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {teams.map((team, index) => (
                        <div key={index} className="bg-black/40 border border-white/5 rounded-xl p-3 flex items-center justify-between gap-3 min-w-0 hover:bg-black/50 transition-colors">
                            <div className="min-w-[120px] shrink-0">
                                <h4 className="text-white font-bold text-base leading-tight">{team.name}</h4>
                            </div>

                            <div className="flex items-center gap-3 min-w-0 overflow-x-auto no-scrollbar">
                                {team.members.map((member, mIdx) => (
                                    <div key={mIdx} className="flex flex-col items-center group cursor-pointer relative shrink-0">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-yellow-500 transition-colors bg-gray-800 shadow-lg">
                                            <Image
                                                src={member.icon}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        {/* Connector Line */}
                                        {mIdx < team.members.length - 1 && (
                                            <div className="absolute -right-3 top-1/2 w-3 h-[2px] bg-white/10"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
