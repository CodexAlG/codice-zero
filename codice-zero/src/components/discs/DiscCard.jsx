import Image from "next/image";
import { memo } from 'react';

const DiscCard = memo(({ disc }) => {
  return (
    <div 
      // w-full asegura que use todo el ancho de la columna del grid.
      // h-36/h-40 (altura fija) para evitar el estiramiento vertical.
      className="relative w-full h-36 md:h-40 p-2 rounded-xl bg-gray-900 border border-white/10 hover:border-yellow-500 cursor-pointer group flex items-center gap-2 transition-all duration-300"
    >
      
      {/* 1. ZONA IZQUIERDA (Imagen del Disco - Fija) */}
      {/* Ocupa 1/3 del ancho, y el 100% de la altura para centrar la imagen. */}
      <div className="flex-shrink-0 w-1/3 h-full flex items-center justify-center relative">
        <Image 
          src={disc.image} 
          alt={disc.name} 
          // Dimensiones relativas al contenedor para que no se desborde
          width={70} 
          height={70} 
          className="object-contain drop-shadow-xl" 
          unoptimized
        />
        {/* Contadores de Sets (Icons 2-piece/4-piece si aplican) se posicionarían aquí */}
      </div>
      
      {/* 2. ZONA DERECHA (Texto y Nombre - Flexible) */}
      {/* Ocupa 2/3 del ancho y el texto se apila horizontalmente, no verticalmente. */}
      <div className="flex-1 flex flex-col justify-center overflow-hidden h-full">
        
        {/* Nombre del Disco */}
        <h3 className="text-sm font-bold text-white leading-snug truncate">
          {disc.name}
        </h3>
        
        {/* Stats del Set (Texto Compacto) */}
        <div className="text-xs text-gray-400 mt-1">
            {/* Placeholder de información (Aquí iría tu lógica de 2 Pzas y 4 Pzas) */}
            <p className="leading-tight">2 Pzas: {disc.twoPiece}</p>
            <p className="leading-tight">4 Pzas: {disc.fourPiece}</p>
        </div>
      </div>
    </div>
  );
});

DiscCard.displayName = 'DiscCard';

export default DiscCard;