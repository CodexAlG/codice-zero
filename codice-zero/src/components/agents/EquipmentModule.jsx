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
        <div className="animate-fadeIn w-full h-full overflow-y-auto pr-2 pb-8 space-y-8">

            {/* --- SECCIÓN 1: AMPLIFICADORES (WEAPONS) --- */}
            <section>
                <h3 className="text-xl font-display text-white uppercase italic font-bold mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
                    Amplificadores Recomendados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {weapons.map((weapon, index) => (
                        <div key={index} className="bg-gray-900/60 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-white/30 transition-colors group">
                            <div className="relative w-24 h-24">
                                {/* Glow effect based on rarity */}
                                <div className={`absolute inset-0 rounded-full blur-xl opacity-20 ${weapon.rarity === 'S' ? 'bg-yellow-500' : 'bg-purple-500'}`}></div>
                                <Image
                                    src={`/CodiceZero/Armas/${weapon.rarity === 'S' ? 'Ataque' : 'Ataque'}/${weapon.icon}`} // Asumiendo carpeta Ataque por ahora, idealmente dinámico
                                    alt={weapon.name}
                                    fill
                                    className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${weapon.rarity === 'S' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'bg-purple-500/20 border-purple-500 text-purple-500'
                                    }`}>
                                    {weapon.rarity}
                                </div>
                            </div>
                            <div className="text-center">
                                <h4 className="text-white font-bold text-sm mb-1">{weapon.name}</h4>
                                <p className="text-gray-400 text-xs leading-snug">{weapon.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SECCIÓN 2: PISTAS DE DISCO (DRIVE DISCS) --- */}
            <section>
                <h3 className="text-xl font-display text-white uppercase italic font-bold mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
                    Pistas de Disco
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Sets Recomendados */}
                    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-5">
                        <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Sets Recomendados</h4>
                        <div className="flex items-center justify-center gap-4 md:gap-8">
                            {driveDiscs.sets.map((set, index) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <div className="relative w-20 h-20 md:w-24 md:h-24 group">
                                        <Image
                                            src={`/CodiceZero/Discos/${set.icon}`}
                                            alt={set.name}
                                            fill
                                            className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
                                        />
                                        <div className="absolute bottom-0 right-0 bg-black/80 text-white text-xs font-bold px-1.5 py-0.5 rounded border border-white/20">
                                            {set.count}pz
                                        </div>
                                    </div>
                                    <div className="text-center max-w-[120px]">
                                        <p className="text-white text-xs font-bold leading-tight">{set.name}</p>
                                    </div>
                                    {index === 0 && driveDiscs.sets.length > 1 && (
                                        <div className="text-gray-500 text-xl font-bold">+</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Principales y Secundarios */}
                    <div className="bg-gray-900/60 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
                        <div>
                            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Stats Principales</h4>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between bg-black/20 p-2 rounded border border-white/5">
                                    <span className="text-xs font-bold text-gray-300 w-8">IV</span>
                                    <span className="text-sm text-white font-medium text-right">{driveDiscs.stats.main.iv}</span>
                                </div>
                                <div className="flex items-center justify-between bg-black/20 p-2 rounded border border-white/5">
                                    <span className="text-xs font-bold text-gray-300 w-8">V</span>
                                    <span className="text-sm text-white font-medium text-right">{driveDiscs.stats.main.v}</span>
                                </div>
                                <div className="flex items-center justify-between bg-black/20 p-2 rounded border border-white/5">
                                    <span className="text-xs font-bold text-gray-300 w-8">VI</span>
                                    <span className="text-sm text-white font-medium text-right">{driveDiscs.stats.main.vi}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Sub-Stats Prioritarios</h4>
                            <div className="flex flex-wrap gap-2">
                                {driveDiscs.stats.sub.map((stat, idx) => (
                                    <span key={idx} className="text-xs bg-white/5 text-white px-2 py-1 rounded border border-white/10">
                                        {stat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 3: EQUIPOS (TEAMS) --- */}
            <section>
                <h3 className="text-xl font-display text-white uppercase italic font-bold mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
                    Composiciones de Equipo
                </h3>

                <div className="grid grid-cols-1 gap-4">
                    {teams.map((team, index) => (
                        <div key={index} className="bg-gray-900/60 border border-white/10 rounded-xl p-4 flex flex-col md:flex-row items-center gap-6">
                            <div className="min-w-[150px] text-center md:text-left">
                                <h4 className="text-white font-bold text-lg">{team.name}</h4>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Sinergia Alta</span>
                            </div>

                            <div className="flex-1 flex items-center justify-center md:justify-start gap-4 md:gap-8">
                                {team.members.map((member, mIdx) => (
                                    <div key={mIdx} className="flex flex-col items-center gap-2 group cursor-pointer">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-yellow-500 transition-colors">
                                            <Image
                                                src={member.icon}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-white font-bold">{member.name}</p>
                                            <span className="text-[10px] text-gray-400 uppercase">{member.role}</span>
                                        </div>
                                        {/* Connector Line */}
                                        {mIdx < team.members.length - 1 && (
                                            <div className="hidden md:block absolute right-0 top-1/2 w-8 h-[1px] bg-white/20"></div>
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
