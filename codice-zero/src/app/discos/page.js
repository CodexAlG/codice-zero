"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightText from "@/components/ui/HighlightText";
import { driveDiscs } from "@/data/discs";
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import BetaWarning from "@/components/ui/BetaWarning";

export default function DiscsPage() {
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

          {/* Discs List View */}
          <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto pb-12">
            {driveDiscs.map((disc) => (
              <motion.div
                key={disc.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col md:flex-row group hover:border-yellow-400 hover:bg-white/5 transition-all duration-300 relative"
              >
                {/* Decoración Esquina */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-white/10 group-hover:bg-yellow-400 transition-colors" />

                {/* Columna Izquierda: Identidad */}
                <div className="w-full md:w-64 flex-shrink-0 bg-white/5 md:bg-transparent border-b md:border-b-0 md:border-r border-white/10 p-6 flex flex-col items-center justify-center gap-4 relative">
                  {/* Icono */}
                  <div className="relative w-24 h-24 filter drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={disc.image}
                      alt={disc.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Nombre */}
                  <h3 className="text-yellow-400 font-bold text-base text-center uppercase tracking-wider font-display leading-tight px-2">
                    {disc.name}
                  </h3>
                </div>

                {/* Columna Derecha: Stats */}
                <div className="flex-1 p-6 flex flex-col gap-6 justify-center">
                  {/* 2 Piezas */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest bg-yellow-500/10 px-2 py-1 rounded w-fit border border-yellow-500/20">
                      2 Piezas
                    </span>
                    <p className="text-sm font-mono text-white/90 pl-1">
                      {disc.twoPiece}
                    </p>
                  </div>

                  {/* 4 Piezas */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
                      4 Piezas
                    </span>
                    <p className="text-sm text-gray-300 leading-relaxed pl-1">
                      {/* Simple parsing for paren keywords */}
                      {disc.fourPiece.split(/(\(.*?\))/g).map((part, i) => (
                        part.startsWith('(') && part.endsWith(')') ?
                          <span key={i} className="text-yellow-200 font-semibold">{part.slice(1, -1)}</span> :
                          <span key={i}>{part}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}