import Image from "next/image";
import { memo } from 'react';

const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

const WeaponCard = memo(({ weapon }) => {
  const rankColor = weapon.rank === 'S' ? 'border-yellow-500' : weapon.rank === 'A' ? 'border-purple-500' : 'border-blue-500';
  const rankIcon = `/CodiceZero/Rango/Icon_Item_Rank_${weapon.rank}.webp`;

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
          unoptimized
        />
      </div>

      {/* Insignia de Advertencia (Leak: Beta) */}
      {weapon.leak === "Beta" && (
        <div className="absolute top-2 left-14 z-30">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xs font-bold">!</span>
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