"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightText from "@/components/ui/HighlightText";
import { driveDiscs } from "@/data/discs";
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import BetaWarning from "@/components/ui/BetaWarning";

export default function DiscsPageClient() {
    const [isLoading, setIsLoading] = useState(true);

    // Lógica de tiempo de gracia con sessionStorage
    const GRACE_PERIOD = 300000; // 5 minutos en milisegundos

    useEffect(() => {
        const lastLoadTime = sessionStorage.getItem('lastLoadTime');
        const currentTime = new Date().getTime();

        // Comprobar si el tiempo de gracia ha expirado (o si es la primera vez)
        if (!lastLoadTime || (currentTime - lastLoadTime) > GRACE_PERIOD) {
            // Mostrar spinner solo la primera vez o si el tiempo expiró
            const timer = setTimeout(() => {
                setIsLoading(false);
                // Actualizar el timestamp
                sessionStorage.setItem('lastLoadTime', new Date().getTime());
            }, 500); // 500ms de carga mínima simulada

            return () => clearTimeout(timer);
        } else {
            // Si está dentro del tiempo de gracia, cargamos al instante
            setIsLoading(false);
        }
    }, []);

    const hasBetaContent = driveDiscs.some(disc => disc.leak === "Beta");

    return (
        <>
            {isLoading && <LoadingSpinner />}

            {/* Contenido Normal de la Página (Solo visible cuando NO está cargando) */}
            <div className={`min-h-screen text-white p-6 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        title="Base de Datos de Discos"
                        subtitle="Todos los conjuntos de discos disponibles en el juego"
                    />

                    {hasBetaContent && <BetaWarning />}

                    {/* Discs Grid Layout (Dense 2-Col) */}
                    <div className="w-full max-w-7xl mx-auto pb-12">
                        <motion.div
                            layout
                            className="grid grid-cols-1 xl:grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {driveDiscs.map((disc) => (
                                <motion.div
                                    key={disc.id}
                                    layout
                                    className="relative flex flex-row h-full bg-[#18181b]/80 border border-white/5 rounded-md overflow-hidden"
                                >
                                    {/* Beta Warning Icon */}
                                    {disc.leak && disc.leak.includes("Beta") && (
                                        <div className="absolute top-2 left-2 z-30 filter drop-shadow-lg" title="Contenido Beta">
                                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                    {/* Columna Izquierda: Identidad */}
                                    <div className="w-32 flex-shrink-0 bg-black/20 border-r border-white/5 p-4 flex flex-col items-center justify-center gap-2 relative">
                                        <div className="relative w-16 h-16">
                                            <Image
                                                src={disc.image}
                                                alt={disc.name}
                                                fill
                                                className="object-contain drop-shadow-lg"
                                            />
                                        </div>
                                        <span className="text-white font-bold text-xs text-center uppercase tracking-wide leading-tight">
                                            {disc.name}
                                        </span>
                                    </div>

                                    {/* Columna Derecha: Stats */}
                                    <div className="flex-1 p-5 flex flex-col justify-center gap-4 min-w-0">
                                        {/* 2 Piezas */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-yellow-500/90 uppercase font-black tracking-widest">
                                                2 Piezas
                                            </span>
                                            <div className="text-sm text-gray-300 font-medium">
                                                <HighlightText text={disc.twoPiece} />
                                            </div>
                                        </div>

                                        {/* 4 Piezas */}
                                        <div className="flex flex-col gap-1 border-t border-white/5 pt-3">
                                            <span className="text-[10px] text-yellow-500/90 uppercase font-black tracking-widest">
                                                4 Piezas
                                            </span>
                                            <div className="text-[15px] text-gray-300 leading-relaxed">
                                                <HighlightText text={disc.fourPiece} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
