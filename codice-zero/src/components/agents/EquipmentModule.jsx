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
                <section className="flex-1 bg-gray-900/60 border border-white/10 rounded-xl p-3 flex flex-col min-w-0">
                    <h3 className="text-sm font-display text-white uppercase italic font-bold mb-2 flex items-center gap-2 shrink-0">
                        <div className="w-1 h-4 bg-yellow-500 rounded-full"></div>
                        Amplificadores
                    </h3>
                    <div className="flex-1 grid grid-cols-3 gap-2 min-h-0">
                        {weapons.map((weapon, index) => (
                            <div key={index} className="bg-black/40 border border-white/5 rounded-lg p-2 flex flex-col items-center justify-center gap-1 hover:border-white/20 transition-colors group min-w-0">
                                <div className="relative w-16 h-16 shrink-0">
                                    {/* Glow effect based on rarity */}
                                    <div className={`absolute inset-0 rounded-full blur-md opacity-20 ${weapon.rarity === 'S' ? 'bg-yellow-500' : 'bg-purple-500'}`}></div>
                                    <Image
                                        src={`/CodiceZero/Armas/${weapon.rarity === 'S' ? 'Ataque' : 'Ataque'}/${weapon.icon}`}
                                        alt={weapon.name}
                                        fill
                                        className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${weapon.rarity === 'S' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'bg-purple-500/20 border-purple-500 text-purple-500'
                                        }`}>
                                        {weapon.rarity}
                                    </div>
                                </div>
                                <div className="text-center w-full min-w-0">
                                    <h4 className="text-gray-200 font-bold text-[10px] leading-tight truncate w-full">{weapon.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SECCIÓN 2: PISTAS DE DISCO (DRIVE DISCS) --- */}
                <section className="flex-1 bg-gray-900/60 border border-white/10 rounded-xl p-3 flex flex-col min-w-0">
                    <h3 className="text-sm font-display text-white uppercase italic font-bold mb-2 flex items-center gap-2 shrink-0">
                        <div className="w-1 h-4 bg-yellow-500 rounded-full"></div>
                        Pistas de Disco
                    </h3>

                    <div className="flex-1 flex flex-row gap-3 min-h-0">
                        {/* Sets Recomendados (Solo Iconos) */}
                        <div className="flex-1 bg-black/40 border border-white/5 rounded-lg p-2 flex items-center justify-center gap-2 min-w-0">
                            {driveDiscs.sets.map((set, index) => (
                                <div key={index} className="flex items-center gap-1 min-w-0">
                                    <div className="relative w-16 h-16 shrink-0 group" title={set.name}>
                                        <Image
                                            src={`/CodiceZero/Discos/${set.icon}`}
                                            alt={set.name}
                                            fill
                                            className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
                                        />
                                        <div className="absolute bottom-0 right-0 bg-black/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded border border-white/20 shadow-sm">
                                            {set.count}pz
                                        </div>
                                    </div>
                                    {index === 0 && driveDiscs.sets.length > 1 && (
                                        <div className="text-gray-500 text-xl font-bold shrink-0">+</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Stats Principales (Compacto) */}
                        <div className="flex-[1.2] flex flex-col justify-center gap-2 min-w-0">
                            <div className="flex items-center justify-between bg-black/20 px-2 py-1.5 rounded border border-white/5">
                                <span className="text-[10px] font-bold text-gray-400 w-6 shrink-0">IV</span>
                                <span className="text-[10px] text-white font-medium text-right truncate">{driveDiscs.stats.main.iv}</span>
                            </div>
                            <div className="flex items-center justify-between bg-black/20 px-2 py-1.5 rounded border border-white/5">
                                <span className="text-[10px] font-bold text-gray-400 w-6 shrink-0">V</span>
                                <span className="text-[10px] text-white font-medium text-right truncate">{driveDiscs.stats.main.v}</span>
                            </div>
                            <div className="flex items-center justify-between bg-black/20 px-2 py-1.5 rounded border border-white/5">
                                <span className="text-[10px] font-bold text-gray-400 w-6 shrink-0">VI</span>
                                <span className="text-[10px] text-white font-medium text-right truncate">{driveDiscs.stats.main.vi}</span>
                            </div>
                            {/* Substats en una línea */}
                            <div className="flex flex-wrap gap-1 mt-1 justify-end">
                                {driveDiscs.stats.sub.slice(0, 4).map((stat, idx) => (
                                    <span key={idx} className="text-[9px] bg-white/5 text-gray-300 px-1.5 py-0.5 rounded border border-white/5">
                                        {stat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* --- SECCIÓN 3: EQUIPOS (TEAMS) (Altura fija) --- */}
            <section className="shrink-0 bg-gray-900/60 border border-white/10 rounded-xl p-3 min-w-0">
                <h3 className="text-sm font-display text-white uppercase italic font-bold mb-2 flex items-center gap-2">
                    <div className="w-1 h-4 bg-yellow-500 rounded-full"></div>
                    Composiciones
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {teams.map((team, index) => (
                        <div key={index} className="bg-black/40 border border-white/5 rounded-lg p-2 flex items-center justify-between gap-2 min-w-0">
                            <div className="min-w-[80px] shrink-0">
                                <h4 className="text-white font-bold text-xs leading-tight">{team.name}</h4>
                            </div>

                            <div className="flex items-center gap-2 min-w-0 overflow-x-auto no-scrollbar">
                                {team.members.map((member, mIdx) => (
                                    <div key={mIdx} className="flex flex-col items-center group cursor-pointer relative shrink-0">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-600 group-hover:border-yellow-500 transition-colors bg-gray-800">
                                            <Image
                                                src={member.icon}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        {/* Connector Line */}
                                        {mIdx < team.members.length - 1 && (
                                            <div className="absolute -right-2 top-1/2 w-2 h-[1px] bg-white/10"></div>
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
