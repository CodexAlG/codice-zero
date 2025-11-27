'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Suspense } from 'react';

function MaterialDetailContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const name = searchParams.get('name');
    const icon = searchParams.get('icon');
    const type = searchParams.get('type');

    if (!name || !icon) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Material no encontrado</p>
            </div>
        );
    }

    // Diccionario de contenido basado en tipo
    const content = {
        ascension: {
            desc: "Una insignia oficial que certifica la cualificación de un agente.",
            usage: "Material requerido para ascender al Agente y desbloquear nuevos límites de nivel."
        },
        skill: {
            desc: "Un chip de datos que contiene técnicas de combate avanzadas.",
            usage: "Material requerido para mejorar las Habilidades de Combate."
        },
        boss: {
            desc: "Un material raro obtenido de enemigos formidables.",
            usage: "Material requerido para mejorar las Habilidades Core y Habilidades de Combate de alto nivel."
        },
        hamster: {
            desc: "Un pase especial muy codiciado.",
            usage: "Material raro para mejoras de alto nivel."
        },
        currency: {
            desc: "La moneda principal de Nueva Eridu.",
            usage: "Se utiliza para todo tipo de transacciones y mejoras."
        },
        default: {
            desc: "Un modelo de datos construido sobre los registros de combate de numerosos investigadores.",
            usage: "Item requerido para incrementar el nivel de Habilidades Core y Habilidades de Combate."
        }
    };

    const { desc, usage } = content[type] || content.default;

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-black">
            {/* Botón de regreso */}
            <button
                onClick={() => router.back()}
                className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10 transition-all">
                    <ArrowLeft size={24} />
                </div>
                <span className="font-mono text-sm tracking-wider">VOLVER</span>
            </button>

            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-6xl mx-auto p-8">

                {/* Icono Grande Central */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative w-48 h-48 md:w-80 md:h-80 bg-gray-900/50 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                        <Image
                            src={icon}
                            alt={name}
                            width={256}
                            height={256}
                            className="object-contain w-32 h-32 md:w-64 md:h-64 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        />
                    </div>
                </div>

                {/* Detalles a la derecha */}
                <div className="flex flex-col gap-6 max-w-md text-center md:text-left">
                    <div>
                        <h4 className="text-blue-400 font-mono text-sm tracking-[0.2em] uppercase mb-2">
                            Detalles del Material
                        </h4>
                        <h1 className="text-4xl md:text-5xl font-black font-display text-white leading-tight">
                            {name}
                        </h1>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-2" />

                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        <p>
                            {desc}
                        </p>
                        <p className="text-sm border-l-2 border-white/10 pl-4 italic">
                            "Suficientes datos para verlo 'nacer y vivir' dentro de un sistema VR."
                        </p>
                    </div>

                    <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/5">
                        <p className="text-xs text-gray-500 font-mono uppercase mb-1">Uso</p>
                        <p className="text-sm text-gray-300">
                            {usage}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MaterialDetailPage() {
    return (
        <Suspense fallback={<div className="text-white text-center mt-20">Cargando...</div>}>
            <MaterialDetailContent />
        </Suspense>
    );
}
