import SectionTitle from "@/components/ui/SectionTitle";
import { Coffee, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

export default function AboutMePage() {
    return (
        <div className="min-h-screen text-white p-6 pb-24 relative overflow-hidden">
            {/* Fondo de Malla (Grid) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionTitle
                    title="Sobre Mí"
                    subtitle="El desarrollador detrás de Codice Zero"
                />

                <div className="flex flex-col md:flex-row gap-8 mt-12">
                    {/* Columna Izquierda: Perfil */}
                    <div className="w-full md:w-1/3 flex flex-col gap-6">
                        <div className="bg-[#18181b] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group">

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-500 mb-4 shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/CodiceZero/IconoEgo.jpg"
                                    alt="Ego"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="text-3xl font-display font-black italic text-white mb-1">Ego</h2>
                            <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-6 border-b border-yellow-500/30 pb-4 w-full">
                                Developer & Proxy
                            </p>

                            <div className="w-full space-y-3 text-left">
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="text-yellow-500">📍</span>
                                    <span>México, 22 Años</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="text-yellow-500">🎓</span>
                                    <span>Ing. Sistemas Computacionales</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="text-yellow-500">💻</span>
                                    <span>Full Stack Dev</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="text-yellow-500">🎮</span>
                                    <span>Proxy Día 1</span>
                                </div>
                            </div>

                            <div className="flex gap-3 justify-center mt-8 w-full border-t border-white/5 pt-6">
                                <Link
                                    href="https://discord.gg/RBzdz2Bn4u"
                                    target="_blank"
                                    className="p-3 bg-[#5865F2]/10 text-[#5865F2] rounded-xl hover:bg-[#5865F2] hover:text-white transition-all duration-300 hover:scale-110"
                                    title="Discord"
                                >
                                    <Image
                                        src="/CodiceZero/Redes/Discord.png"
                                        alt="Discord"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 object-contain"
                                    />
                                </Link>
                                <Link
                                    href="https://x.com/EgoBl9"
                                    target="_blank"
                                    className="p-3 bg-black/30 text-white rounded-xl hover:bg-black hover:text-white border border-white/10 transition-all duration-300 hover:scale-110"
                                    title="X (Twitter)"
                                >
                                    <Twitter size={20} />
                                </Link>
                                <Link
                                    href="https://www.youtube.com/@thisego9"
                                    target="_blank"
                                    className="p-3 bg-[#FF0000]/10 text-[#FF0000] rounded-xl hover:bg-[#FF0000] hover:text-white transition-all duration-300 hover:scale-110"
                                    title="YouTube"
                                >
                                    <Youtube size={20} />
                                </Link>
                                <Link
                                    href="https://ko-fi.com/codicezero"
                                    target="_blank"
                                    className="p-3 bg-[#FF5E5B]/10 text-[#FF5E5B] rounded-xl hover:bg-[#FF5E5B] hover:text-white transition-all duration-300 hover:scale-110"
                                    title="Ko-si"
                                >
                                    <Coffee size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Historia */}
                    <div className="w-full md:w-2/3 flex flex-col gap-6">

                        {/* Carta de Presentación */}
                        <div className="bg-[#18181b]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <span className="text-9xl font-black font-display text-white">01</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                                <div className="w-2 h-8 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full"></div>
                                Pasión por Crear
                            </h3>

                            <div className="space-y-4 text-gray-300 leading-relaxed text-lg relative z-10">
                                <p>
                                    Mi camino en la tecnología comenzó estudiando <strong>Ingeniería en Sistemas Computacionales</strong>,
                                    donde descubrí que programar no es solo escribir código, sino una forma de arte para solucionar problemas y crear experiencias.
                                </p>
                                <p>
                                    Soy una persona que cuando encuentra algo que ama, se entrega por completo.
                                    Esa dedicación, a veces obsesiva, es la que me permite pasar horas puliendo cada detalle de este proyecto,
                                    asegurándome de que sea algo de lo que pueda sentirme orgulloso.
                                </p>
                            </div>
                        </div>

                        {/* El Porqué */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#18181b]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-yellow-500/30 transition-colors duration-300">
                                <h3 className="text-lg font-bold text-yellow-500 mb-3 flex items-center gap-2">
                                    <Coffee size={18} />
                                    Por Amor al Arte
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Codice Zero nació de un capricho personal, no por dinero ni reconocimiento.
                                    No gano nada con esto más que la satisfacción personal y la motivación de aprender nuevas tecnologías mientras aporto algo a la comunidad.
                                </p>
                            </div>

                            <div className="bg-[#18181b]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
                                <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
                                    <Image src="/CodiceZero/Agentes/Icon_Agents.webp"
                                        alt="Icon" width={18} height={18} className="brightness-200" />
                                    Jugador Dedicado
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Juego ZZZ desde el día 1 sin falta. No me considero un "gurú", pero entiendo las mecánicas a profundidad
                                    y me apasiona traducir ese conocimiento en herramientas útiles para otros jugadores.
                                </p>
                            </div>
                        </div>

                        {/* Quote Personal */}
                        <div className="bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent border-l-4 border-yellow-500 p-8 rounded-r-2xl mt-2">
                            <p className="text-xl text-gray-200 font-display italic font-light">
                                "Orgullosamente mexicano, programador de corazón y Proxy por elección.
                                Si esta página te ayuda al menos un poco en tu viaje por Nueva Eridu, entonces todo el esfuerzo ha valido la pena."
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
