import Image from 'next/image';
import Link from 'next/link';
import { agents } from '../../data/agents';
import { weapons as weaponsData } from '../../data/weapons';

export default function EquipmentModule({ equipment, themeColor }) {
    if (!equipment) {
        return (
            <div className="flex items-center justify-center h-full text-gray-500">
                <p>No hay datos de equipo disponibles para este agente.</p>
            </div>
        );
    }

    const { weapons, driveDiscs, teams } = equipment;

    // Helper functions to get IDs
    const getWeaponData = (name) => {
        return weaponsData.find(w => w.name === name);
    };

    const getAgentId = (name) => {
        const agent = agents.find(a => a.name === name);
        return agent ? agent.id : null;
    };

    return (
        <div className="flex flex-col gap-2 h-auto">

            {/* --- SECCIÓN SUPERIOR: ARMAS Y DISCOS (Altura automática) --- */}
            <div className="flex flex-col xl:flex-row gap-2">

                {/* --- SECCIÓN 1: AMPLIFICADORES (WEAPONS) [AZUL] --- */}
                <section className="flex-1 bg-gray-900/60 border border-white/10 rounded-xl p-3 flex flex-col min-w-0 h-auto">
                    <h3 className="text-base font-display text-white uppercase italic font-bold mb-2 flex items-center gap-2 shrink-0">
                        <div className="w-1 h-5 bg-yellow-500 rounded-full"></div>
                        Amplificadores
                    </h3>
                    {/* [VERDE] Grid de 3 armas */}
                    <div className="grid grid-cols-3 gap-2 items-center content-center h-auto">
                        {weapons.map((weapon, index) => {
                            const weaponData = getWeaponData(weapon.name);
                            const weaponId = weaponData?.id;
                            // Use image from weaponsData if available, otherwise fallback to a default path (assuming Ataque for now if not found)
                            const imageSrc = weaponData?.image || `/CodiceZero/Armas/Ataque/${weapon.icon}`;

                            return (
                                <Link
                                    key={index}
                                    href={weaponId ? `/armas/${weaponId}` : '#'}
                                    className={`bg-black/40 border border-white/5 rounded-lg p-2 flex flex-col items-center gap-2 group hover:bg-black/60 transition-colors relative h-auto ${!weaponId ? 'pointer-events-none' : ''}`}
                                >
                                    <div className="relative w-20 h-20 shrink-0">
                                        {/* Glow effect based on rarity */}
                                        <div className={`absolute inset-0 rounded-full blur-lg opacity-20 ${weapon.rarity === 'S' ? 'bg-yellow-500' : 'bg-purple-500'}`}></div>
                                        <Image
                                            src={imageSrc}
                                            alt={weapon.name}
                                            fill
                                            className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border border-white/20 ${weapon.rarity === 'S' ? 'bg-yellow-500 text-black' : 'bg-purple-500 text-white'}`}>
                                            {weapon.rarity}
                                        </div>
                                    </div>
                                    <div className="w-full text-center">
                                        <p className="text-[10px] text-gray-300 font-medium truncate w-full group-hover:text-yellow-500 transition-colors">
                                            {weapon.name}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Skill Priority Section */}
                    {equipment.skillPriority && (
                        <div className="mt-3 pt-2 border-t border-white/10 flex flex-col gap-2">
                            <div className="flex items-center justify-center gap-2 bg-black/20 rounded-lg p-2">
                                {equipment.skillPriority.map((icon, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="relative w-8 h-8 group hover:scale-110 transition-transform duration-300">
                                            <Image
                                                src={icon}
                                                alt="Skill Priority"
                                                fill
                                                className="object-contain drop-shadow-md"
                                            />
                                        </div>
                                        {index < equipment.skillPriority.length - 1 && (
                                            <span className="text-gray-500 font-bold mx-1 text-xs">&gt;</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* --- SECCIÓN 2: PISTAS DE DISCO (DRIVE DISCS) [AZUL] --- */}
                <section className="flex-1 bg-gray-900/60 border border-white/10 rounded-xl p-3 flex flex-col min-w-0 h-auto">
                    <h3 className="text-base font-display text-white uppercase italic font-bold mb-2 flex items-center gap-2 shrink-0">
                        <div className="w-1 h-5 bg-yellow-500 rounded-full"></div>
                        Pistas de Disco
                    </h3>

                    <div className="flex flex-row gap-2 items-center h-auto">
                        {/* [VERDE] Sets Recomendados (Iconos Verticales [ROSA]) */}
                        <Link href="/discos" className="flex-1 bg-black/40 border border-white/5 rounded-lg p-2 flex flex-col items-center justify-center gap-3 min-w-0 relative overflow-hidden h-auto group hover:bg-black/50 transition-colors">
                            {driveDiscs.sets.map((set, index) => (
                                <div key={index} className="flex items-center gap-2 min-w-0 z-10 w-full justify-center">
                                    {/* [ROSA] Imagen del Disco */}
                                    <div className="relative w-20 h-20 shrink-0 group-hover:scale-105 transition-transform duration-300" title={set.name}>
                                        <div className="absolute inset-0 bg-black/50 rounded-full blur-md -z-10"></div>
                                        <Image
                                            src={`/CodiceZero/Discos/${set.icon}`}
                                            alt={set.name}
                                            fill
                                            className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                        />
                                        <div className="absolute bottom-0 right-0 bg-black/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded border border-white/20 shadow-sm">
                                            {set.count}pz
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Link>

                        {/* [AMARILLO] Stats Principales */}
                        <div className="flex-[1.2] flex flex-col justify-center gap-2 min-w-0 bg-black/20 border border-white/5 rounded-lg p-2 h-auto">
                            <div className="flex items-start justify-between bg-black/40 px-3 py-2 rounded border border-white/5">
                                <span className="text-[10px] font-bold text-gray-400 w-6 shrink-0 mt-0.5">IV</span>
                                <span className="text-xs text-white font-medium text-right whitespace-normal leading-tight">{driveDiscs.stats.main.iv.replace(/\//g, ' > ')}</span>
                            </div>
                            <div className="flex items-start justify-between bg-black/40 px-3 py-2 rounded border border-white/5">
                                <span className="text-[10px] font-bold text-gray-400 w-6 shrink-0 mt-0.5">V</span>
                                <span className="text-xs text-white font-medium text-right whitespace-normal leading-tight">{driveDiscs.stats.main.v.replace(/\//g, ' > ')}</span>
                            </div>
                            <div className="flex items-start justify-between bg-black/40 px-3 py-2 rounded border border-white/5">
                                <span className="text-[10px] font-bold text-gray-400 w-6 shrink-0 mt-0.5">VI</span>
                                <span className="text-xs text-white font-medium text-right whitespace-normal leading-tight">{driveDiscs.stats.main.vi.replace(/\//g, ' > ')}</span>
                            </div>
                            {/* Substats */}
                            <div className="mt-2 text-right">
                                <span className="text-xs text-gray-300 font-medium leading-tight">
                                    {driveDiscs.stats.sub.slice(0, 4).join(' > ')}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* --- SECCIÓN 3: EQUIPOS (TEAMS) [AZUL] --- */}
            <section className="shrink-0 bg-gray-900/60 border border-white/10 rounded-xl p-3 min-w-0 h-auto">
                <h3 className="text-base font-display text-white uppercase italic font-bold mb-2 flex items-center gap-2">
                    <div className="w-1 h-5 bg-yellow-500 rounded-full"></div>
                    Composiciones
                </h3>

                {/* [VERDE] Grid de 2 equipos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-auto">
                    {teams.map((team, index) => (
                        <div key={index} className="bg-black/40 border border-white/5 rounded-lg p-2 flex items-center justify-between gap-2 min-w-0 hover:bg-black/50 transition-colors h-auto">
                            <div className="min-w-[100px] shrink-0">
                                <h4 className="text-white font-bold text-base leading-tight">{team.name}</h4>
                            </div>

                            <div className="flex items-center gap-2 min-w-0 overflow-x-auto no-scrollbar">
                                {team.members.map((member, mIdx) => {
                                    const agentId = getAgentId(member.name);
                                    return (
                                        <Link
                                            key={mIdx}
                                            href={agentId ? `/personajes/${agentId}` : '#'}
                                            className={`flex flex-col items-center group cursor-pointer relative shrink-0 ${!agentId ? 'pointer-events-none' : ''}`}
                                        >
                                            <div className="relative w-18 h-18 rounded-full overflow-hidden border border-gray-600 group-hover:border-yellow-500 transition-colors bg-gray-800 shadow-lg">
                                                <Image
                                                    src={member.icon}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {/* Connector Line */}
                                            {mIdx < team.members.length - 1 && (
                                                <div className="hidden"></div> // Placeholder for potential connector
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
