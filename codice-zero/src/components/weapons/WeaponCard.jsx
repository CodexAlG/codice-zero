import Image from "next/image";
import { memo, useState } from 'react';
import SkeletonCard from '@/components/ui/SkeletonCard';

const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

const WeaponCard = memo(({ weapon, priority = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const rankColor = weapon.rank === 'S' ? 'border-yellow-500' : weapon.rank === 'A' ? 'border-purple-500' : 'border-blue-500';
  const rankIcon = `/CodiceZero/Rango/Icon_Item_Rank_${weapon.rank}.webp`;

  return (
    <div className={`relative w-full max-w-[160px] mx-auto aspect-[4/5] bg-[#0f0f12] rounded-xl border-b-[3px] ${rankColor} overflow-hidden group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer border border-white/5`}>

      {/* Glow interactivo de fondo en hover basado en Rango */}
      <div className={`absolute -inset-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none ${weapon.rank === 'S' ? 'bg-yellow-500' :
          weapon.rank === 'A' ? 'bg-purple-500' : 'bg-blue-500'
        }`}></div>

      {/* Iconos Superiores - Rol */}
      <div className="absolute top-2 left-2 z-20 group/role">
        <div className="relative w-7 h-7 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-lg border border-white/10 shadow-lg group-hover/role:border-white/30 transition-colors">
          <Image
            src={`/CodiceZero/Agentes/Rol/${normalize(weapon.rol)}.webp`}
            alt={weapon.rol}
            width={20}
            height={20}
            className="invert opacity-90 group-hover/role:opacity-100 transition-opacity drop-shadow-md"
            unoptimized
          />
        </div>
      </div>

      {/* Rank Icon */}
      <div className="absolute top-0 right-0 z-20 overflow-hidden rounded-bl-xl backdrop-blur-sm border-b border-l border-white/10 bg-black/20 p-1">
        <Image
          src={rankIcon}
          alt={weapon.rank}
          width={28}
          height={28}
          className="drop-shadow-lg"
          unoptimized
        />
      </div>

      {/* Imagen Arma */}
      <div className="absolute inset-0 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-500 z-10">
        {/* Forma brillante detrÃ¡s del arma */}
        <div className={`absolute bg-white/5 rounded-full blur-xl w-24 h-24 group-hover:scale-125 transition-transform duration-700 ${weapon.rank === 'S' ? 'group-hover:bg-yellow-500/10' :
            weapon.rank === 'A' ? 'group-hover:bg-purple-500/10' : 'group-hover:bg-blue-500/10'
          }`}></div>

        {/* Skeleton Overlay */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-10">
            <SkeletonCard aspectRatio="4/5" />
          </div>
        )}

        <Image
          src={weapon.image}
          alt={weapon.name}
          width={120}
          height={120}
          className={`object-contain max-w-full max-h-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 relative z-20 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          unoptimized
        />
      </div>

      {/* LEAK WARNING ICON - Solo para armas con leak que contenga "Beta" */}
      {weapon.leak && weapon.leak.includes("Beta") && (
        <div className="absolute top-1 left-10 z-30 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
          <div className="w-5 h-5 bg-red-600 border border-red-400/50 rounded-full flex items-center justify-center animate-pulse shadow-lg">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}

      {/* Nombre */}
      <div className="absolute bottom-0 w-full p-3 pt-8 pb-3 bg-gradient-to-t from-[#09090b] via-black/80 to-transparent z-20">
        <h3 className="text-gray-200 font-bold text-xs text-center leading-tight group-hover:text-yellow-400 drop-shadow-md tracking-wide transition-colors duration-300">
          {weapon.name}
        </h3>
      </div>
    </div>
  );
});

WeaponCard.displayName = 'WeaponCard';

export default WeaponCard;