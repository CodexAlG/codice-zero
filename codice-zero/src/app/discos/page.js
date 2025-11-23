"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightText from "@/components/ui/HighlightText";
import { driveDiscs } from "@/data/discs";
import LoadingSpinner from '@/components/ui/LoadingSpinner';

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

  return (
    <>
      {isLoading && <LoadingSpinner />}
      
      {/* Contenido Normal de la Página (Solo visible cuando NO está cargando) */}
      <div className={`min-h-screen bg-gray-950 text-white p-6 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Base de Datos de Discos"
          subtitle="Todos los conjuntos de discos disponibles en el juego"
        />

        {/* Discs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {driveDiscs.map((disc) => (
            <div 
              key={disc.id} 
              className="group relative flex items-start gap-6 p-6 bg-black/40 hover:bg-black/60 transition-all duration-300 border-t-2 border-white/10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
            >
              {/* Borde Decorativo Superior */}
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] bg-yellow-400/10" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />

              {/* COLUMNA IZQUIERDA: ICONO FLOTANTE */}
              <div className="flex-shrink-0 mt-2">
                <div className="relative w-28 h-28 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Image 
                    src={disc.image} 
                    alt={disc.name} 
                    fill 
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* COLUMNA DERECHA: INFO */}
              <div className="flex-1">
                <h2 className="text-xl font-display text-white group-hover:text-yellow-400 transition-colors mb-4 tracking-wide">
                  {disc.name.split('(')[0]}
                </h2>
                
                <div className="space-y-3">
                  {/* 2 Piezas */}
                  <div className="flex gap-2 items-start">
                    <span className="text-cyan-400 font-bold text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-900/50 h-fit whitespace-nowrap mt-0.5">2 Pzas</span>
                    <p className="text-gray-200 text-sm leading-snug">
                      <HighlightText text={disc.twoPiece} />
                    </p>
                  </div>
                  
                  {/* 4 Piezas */}
                  <div className="flex gap-2 items-start pt-2 border-t border-white/5">
                    <span className="text-yellow-500 font-bold text-xs bg-yellow-950/50 px-1.5 py-0.5 rounded border border-yellow-900/50 h-fit whitespace-nowrap mt-0.5">4 Pzas</span>
                    <p className="text-gray-200 text-sm leading-snug">
                      <HighlightText text={disc.fourPiece} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}