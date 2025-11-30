import Image from "next/image";
import { memo, useState } from 'react';
import HighlightText from "@/components/ui/HighlightText";
import SkeletonCard from '@/components/ui/SkeletonCard';

const DiscCard = memo(({ disc, priority = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Show skeleton while image loads
  if (!imageLoaded) {
    return (
      <div className="relative w-full h-auto min-h-[320px] rounded-2xl overflow-hidden">
        <SkeletonCard aspectRatio="1/1" />
        {/* Hidden image to trigger loading */}
        <Image
          src={disc.image}
          alt={disc.name}
          width={64}
          height={64}
          className="hidden"
          onLoad={() => setImageLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          unoptimized
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-auto min-h-[320px] p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/10 cursor-pointer group flex flex-col gap-4 transition-all duration-300"
    >
      {/* Beta Warning Icon */}
      {disc.leak === "Beta" && (
        <div className="absolute top-2 left-2 z-20 filter drop-shadow-lg" title="Contenido Beta">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* 1. HEADER (Imagen y Nombre) */}
      <div className="flex items-center gap-4 border-b border-white/5 pb-4">
        <div className="flex-shrink-0 relative w-16 h-16 bg-black/20 rounded-full p-2 border border-white/5 group-hover:border-yellow-500/30 transition-colors">
          <Image
            src={disc.image}
            alt={disc.name}
            width={64}
            height={64}
            className="object-contain w-full h-full drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
            onLoad={() => setImageLoaded(true)}
            loading={priority ? "eager" : "lazy"}
            priority={priority}
            unoptimized
          />
        </div>
        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-yellow-400 transition-colors">
          {disc.name}
        </h3>
      </div>

      {/* 2. CONTENIDO (Stats) */}
      <div className="flex-1 flex flex-col gap-3 text-sm text-gray-300">

        {/* 2 Piezas */}
        <div className="bg-black/20 p-3 rounded-lg border border-white/5">
          <span className="text-yellow-500 font-bold text-xs uppercase tracking-wider mb-1 block">
            2 Piezas
          </span>
          <p className="leading-relaxed text-sm">
            <HighlightText text={disc.twoPiece} />
          </p>
        </div>

        {/* 4 Piezas */}
        <div className="bg-black/20 p-3 rounded-lg border border-white/5 flex-1">
          <span className="text-yellow-500 font-bold text-xs uppercase tracking-wider mb-1 block">
            4 Piezas
          </span>
          <p className="leading-relaxed text-sm">
            <HighlightText text={disc.fourPiece} />
          </p>
        </div>

      </div>
    </div>
  );
});

DiscCard.displayName = 'DiscCard';

export default DiscCard;