import Image from "next/image";
import { memo, useState } from 'react';
import SkeletonCard from '@/components/ui/SkeletonCard';

const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

const WeaponCard = memo(({ weapon, priority = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const rankColor = weapon.rank === 'S' ? 'border-yellow-500' : weapon.rank === 'A' ? 'border-purple-500' : 'border-blue-500';
  const rankIcon = `/CodiceZero/Rango/Icon_Item_Rank_${weapon.rank}.webp`;

  // Show skeleton while image loads
  if (!imageLoaded) {
    return (
      <div className="relative">
        <SkeletonCard aspectRatio="4/5" />
        {/* Hidden image to trigger loading */}
        <Image
          src={weapon.image}
          alt={weapon.name}
          width={120}
          height={120}
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
    <div className={`relative w-full max-w-[160px] mx-auto aspect-[4/5] bg-gray-900/80 rounded-lg border-b-4 ${rankColor} overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-none`}>

      {/* Iconos Superiores */}
      <div className="absolute top-2 left-2 z-20">
        <div className="w-7 h-7 bg-black/60 rounded-md p-1 border border-white/10">
          <Image
            src={`/CodiceZero/Agentes/Rol/${normalize(weapon.rol)}.webp`}
            alt={weapon.rol}
            width={24}
            height={24}
            className="invert"
            unoptimized
          />
        </div>
      </div>
      <div className="absolute top-2 right-2 z-20">
        <Image
          src={rankIcon}
          alt={weapon.rank}
          width={32}
          height={32}
          className="drop-shadow-md"
          unoptimized
        />
      </div>

      {/* Imagen Arma */}
      <div className="absolute inset-0 flex items-center justify-center p-2 group-hover:scale-110">
        <Image
          src={weapon.image}
          alt={weapon.name}
          width={120}
          height={120}
          className="object-contain"
          onLoad={() => setImageLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          unoptimized
        />
      </div>

      {/* LEAK WARNING ICON - Solo para armas con leak que contenga "Beta" */}
      {weapon.leak && weapon.leak.includes("Beta") && (
        <div className="absolute top left z-30 filter drop-shadow-lg">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* Nombre */}
      <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black via-black/80 to-transparent pt-6">
        <h3 className="text-white font-bold text-xs text-center leading-tight group-hover:text-yellow-400">
          {weapon.name}
        </h3>
      </div>
    </div>
  );
});

WeaponCard.displayName = 'WeaponCard';

export default WeaponCard;