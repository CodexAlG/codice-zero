export default function GuidesPageClient() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <div className="max-w-2xl bg-[#09090b]/80 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-md flex flex-col items-center gap-6 animate-fadeIn">
                {/* Icono */}
                <div className="p-4 bg-yellow-500/10 rounded-full border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-400"
                    >
                        <path d="M12 7v6" />
                        <path d="M12 17h.01" />
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    </svg>
                </div>

                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider">
                    Sección en Construcción
                </h1>

                {/* Mensaje */}
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                    Por el momento, la sección de <span className="text-yellow-400 font-bold">Guías</span> no se encuentra disponible. Estamos trabajando para traerte el mejor contenido y estrategias.
                </p>

                {/* Enlace Discord */}
                <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl w-full">
                    <p className="text-sm text-gray-500 mb-2 font-mono uppercase tracking-widest">Mantente informado</p>
                    <a
                        href="https://discord.gg/RBzdz2Bn4u"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-bold text-lg group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:scale-110 transition-transform"
                        >
                            <circle cx="9" cy="12" r="1" />
                            <circle cx="15" cy="12" r="1" />
                            <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
                            <path d="M7 16.5c3.5 1 5.5 1 9 0" />
                            <path d="M2 12c0 5 2 9 7 9 3 0 7-5 7-5v-2" />
                            <path d="M8.5 4c3.5-1.5 5.5-1.5 9 0" />
                            <path d="M6 12c0-5 2-9 7-9 3 0 7 5 7 5v2" />
                        </svg>
                        Unirse al Servidor de Discord
                    </a>
                </div>
            </div>
        </div>
    );
}
