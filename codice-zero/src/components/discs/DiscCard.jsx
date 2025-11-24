import Image from "next/image";
import { memo } from 'react';
import HighlightText from "@/components/ui/HighlightText";

const DiscCard = memo(({ disc }) => {
  return (
    <div
      className="relative w-full h-auto min-h-[320px] p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/10 cursor-pointer group flex flex-col gap-4 transition-all duration-300"
    >

      {/* 1. HEADER (Imagen y Nombre) */}
      <div className="flex items-center gap-4 border-b border-white/5 pb-4">
        <div className="flex-shrink-0 relative w-16 h-16 bg-black/20 rounded-full p-2 border border-white/5 group-hover:border-yellow-500/30 transition-colors">
          <Image
            src={disc.image}
            alt={disc.name}
            width={64}
            height={64}
            className="object-contain w-full h-full drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
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