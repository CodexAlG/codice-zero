"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { bangboos } from "@/data/bangboos";
import { ArrowLeft } from "lucide-react";

export default function BangbooDetail({ params }) {
    const unwrappedParams = params instanceof Promise ? use(params) : params;
    const id = Number(unwrappedParams.id);
    const bangboo = bangboos.find((b) => b.id === id);

    if (!bangboo) return (
        <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-display text-red-400 mb-4">Bangboo no encontrado</h1>
                <Link href="/bangboos" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    ← Volver a Bangboos
                </Link>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-center p-8">
            {/* Botón Volver */}
            <Link href="/bangboos" className="absolute top-8 left-8 z-50 inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors">
                <ArrowLeft className="w-6 h-6 mr-2" />
                <span className="font-bold text-lg">Volver</span>
            </Link>

            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12">
                {/* Imagen */}
                <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
                    <div className={`absolute inset-0 bg-yellow-500/20 blur-[50px] rounded-full`}></div>
                    <Image
                        src={bangboo.image}
                        alt={bangboo.name}
                        fill
                        className="object-contain drop-shadow-2xl z-10"
                        unoptimized
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col space-y-6">
                    <div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Bangboo</span>
                        <h1 className="text-5xl md:text-6xl font-display font-black italic text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 leading-tight">
                            {bangboo.name}
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <p className="text-xs text-gray-400 uppercase mb-1">Rango</p>
                            <p className={`text-2xl font-black italic ${bangboo.rank === 'S' ? 'text-yellow-400' : 'text-purple-400'}`}>
                                {bangboo.rank}
                            </p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <p className="text-xs text-gray-400 uppercase mb-1">Facción</p>
                            <p className="text-xl font-bold">{bangboo.faction}</p>
                        </div>
                    </div>

                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-200 text-sm">
                        <p>Más información sobre habilidades y estadísticas próximamente.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
