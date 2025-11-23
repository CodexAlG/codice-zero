import Image from "next/image";
import { memo } from 'react';
import HighlightText from '@/components/ui/HighlightText';

const DiscCard = memo(({ disc }) => {
  return (
    <div 
      className="group relative flex items-start gap-6 p-6 bg-black/40 hover:bg-black/60 border-t-2 border-white/10 transition-none"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
    >
      {/* Borde Decorativo Superior */}
      <div className="absolute bottom-0 right-0 w-[20px] h-[20px] bg-yellow-400/10" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />

      {/* COLUMNA IZQUIERDA: ICONO FLOTANTE */}
      <div className="flex-shrink-0 mt-2">
        <div className="relative w-28 h-28 group-hover:scale-110 filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <Image 
            src={disc.image} 
            alt={disc.name} 
            fill 
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* LEAK WARNING ICON - Solo para discos con leak que contenga "Beta" */}
      {disc.leak && disc.leak.includes("Beta") && (
        <div className="absolute top left z-30 filter drop-shadow-lg">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* COLUMNA DERECHA: INFO */}
      <div className="flex-1">
        <h2 className="text-xl font-display text-white group-hover:text-yellow-400 mb-4 tracking-wide">
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
  );
});

DiscCard.displayName = 'DiscCard';

export default DiscCard;