'use client';

import { TriangleAlert } from 'lucide-react';
import Link from 'next/link';

export default function GuidesPageClient() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-[#18181b]/80 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl text-center flex flex-col items-center gap-6 animate-fadeIn">

                {/* Icon */}
                <div className="w-24 h-24 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 mb-2">
                    <TriangleAlert className="w-12 h-12 text-yellow-500" />
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-black font-display italic tracking-wider text-white">
                        SECCIÓN EN CONSTRUCCIÓN
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto">
                        Por el momento, la sección de Guías no se encuentra disponible. Estamos trabajando para traerte el mejor contenido y estrategias.
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-4">
                    <Link
                        href="https://discord.gg/RBzdz2Bn4u"
                        target="_blank"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] rounded-xl font-bold text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                    >
                        {/* Discord Icon (SVG) */}
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
                            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.82,105.82,0,0,0,126.6,80.22c.63-23.28-18.9-48.87-18.9-48.87ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                        </svg>
                        <span>Unirse al Servidor de Discord</span>
                    </Link>
                    <p className="mt-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                        Mantente informado
                    </p>
                </div>

            </div>
        </div>
    );
}
