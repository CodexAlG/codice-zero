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
        <div className="animate-fadeIn w-full h-full flex flex-col gap-4 pr-1 pb-2">

            {/* --- GRID SUPERIOR: ARMAS Y DISCOS (Flex-1 para ocupar espacio vertical) --- */}
            <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-4 min-h-0">

                {/* --- SECCIÓN 1: AMPLIFICADORES (WEAPONS) --- */}
                <section className="bg-gray-900/60 border border-white/10 rounded-xl p-5 flex flex-col h-full">
                    <h3 className="text-lg font-display text-white uppercase italic font-bold mb-4 flex items-center gap-2 shrink-0">
                        <div className="w-1.5 h-6 bg-yellow-500 rounded-full"></div>
                        Amplificadores
                    </h3>
                    <div className="flex-1 grid grid-cols-3 gap-4 items-center">
                        {weapons.map((weapon, index) => (
                            <div key={index} className="h-full bg-black/40 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center gap-3 hover:border-white/20 transition-colors group">
                                <div className="relative w-24 h-24">
                                    {/* Glow effect based on rarity */}
                                    <div className={`absolute inset-0 rounded-full blur-xl opacity-20 ${weapon.rarity === 'S' ? 'bg-yellow-500' : 'bg-purple-500'}`}></div>
                                    <Image
                                        src={`/CodiceZero/Armas/${weapon.rarity === 'S' ? 'Ataque' : 'Ataque'}/${weapon.icon}`}
                                        alt={weapon.name}
                                        fill
                                        className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${weapon.rarity === 'S' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'bg-purple-500/20 border-purple-500 text-purple-500'
                                        }`}>
                                        {weapon.rarity}
                                    </div>
                                </div>
                                <div className="text-center w-full">
                                    <h4 className="text-gray-200 font-bold text-sm leading-tight truncate w-full">{weapon.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SECCIÓN 2: PISTAS DE DISCO (DRIVE DISCS) --- */}
                <section className="bg-gray-900/60 border border-white/10 rounded-xl p-5 flex flex-col h-full">
                    <h3 className="text-lg font-display text-white uppercase italic font-bold mb-4 flex items-center gap-2 shrink-0">
                        <div className="w-1.5 h-6 bg-yellow-500 rounded-full"></div>
                        Pistas de Disco
                    </h3>

                    <div className="flex-1 flex flex-row gap-4 items-center">
                        {/* Sets Recomendados (Solo Iconos) */}
                        <div className="flex-1 h-full bg-black/40 border border-white/5 rounded-xl p-4 flex items-center justify-center gap-4">
                            {driveDiscs.sets.map((set, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="relative w-24 h-24 group" title={set.name}>
                                        <Image
                                            src={`/CodiceZero/Discos/${set.icon}`}
                                            alt={set.name}
                                            fill
                                            className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
                                        />
                                        <div className="absolute bottom-0 right-0 bg-black/90 text-white text-sm font-bold px-2 py-0.5 rounded border border-white/20 shadow-sm">
                                            {set.count}pz
                                        </div>
                                    </div>
                                    {index === 0 && driveDiscs.sets.length > 1 && (
                                        <div className="text-gray-500 text-3xl font-bold">+</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Stats Principales (Compacto) */}
                        <div className="flex-[1.5] h-full flex flex-col justify-center gap-3">
                            <div className="flex items-center justify-between bg-black/20 px-4 py-3 rounded border border-white/5">
                                <span className="text-sm font-bold text-gray-400 w-8">IV</span>
                                <span className="text-sm text-white font-medium text-right truncate">{driveDiscs.stats.main.iv}</span>
                            </div>
                            <div className="flex items-center justify-between bg-black/20 px-4 py-3 rounded border border-white/5">
                                <span className="text-sm font-bold text-gray-400 w-8">V</span>
                                <span className="text-sm text-white font-medium text-right truncate">{driveDiscs.stats.main.v}</span>
                            </div>
                            <div className="flex items-center justify-between bg-black/20 px-4 py-3 rounded border border-white/5">
                                <span className="text-sm font-bold text-gray-400 w-8">VI</span>
                                <span className="text-sm text-white font-medium text-right truncate">{driveDiscs.stats.main.vi}</span>
                            </div>
                            {/* Substats en una línea */}
                            <div className="flex flex-wrap gap-2 mt-2 justify-end">
                                {driveDiscs.stats.sub.slice(0, 4).map((stat, idx) => (
                                    <span key={idx} className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded border border-white/5">
                                        {stat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* --- SECCIÓN 3: EQUIPOS (TEAMS) (Altura fija o auto, pero ocupando ancho completo) --- */}
            <section className="bg-gray-900/60 border border-white/10 rounded-xl p-5 shrink-0">
                <h3 className="text-lg font-display text-white uppercase italic font-bold mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-yellow-500 rounded-full"></div>
                    Composiciones
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {teams.map((team, index) => (
                        <div key={index} className="bg-black/40 border border-white/5 rounded-xl p-4 flex items-center justify-between gap-4">
                            <div className="min-w-[120px]">
                                <h4 className="text-white font-bold text-base leading-tight">{team.name}</h4>
                            </div>

                            <div className="flex items-center gap-4">
                                {team.members.map((member, mIdx) => (
                                    <div key={mIdx} className="flex flex-col items-center group cursor-pointer relative">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-yellow-500 transition-colors bg-gray-800">
                                            <Image
                                                src={member.icon}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        {/* Connector Line */}
                                        {mIdx < team.members.length - 1 && (
                                            <div className="absolute -right-4 top-1/2 w-4 h-[2px] bg-white/10"></div>
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
