import Image from "next/image";
import { memo } from 'react';

const BangbooCard = memo(({ bangboo }) => {
    const rankColor = bangboo.rank === 'S' ? 'border-yellow-500' : bangboo.rank === 'A' ? 'border-purple-500' : 'border-blue-500';
    const rankIcon = `/CodiceZero/Rango/Icon_Item_Rank_${bangboo.rank}.webp`;

    return (
        <div className={`relative w-full max-w-[160px] mx-auto aspect-[4/5] bg-gray-900/80 rounded-lg border-b-4 ${rankColor} overflow-hidden group hover:scale-[1.02] hover:shadow-xl transition-none`}>

            {/* Rank Icon - Top Right */}
            <div className="absolute top-2 right-2 z-20">
                <Image
                    src={rankIcon}
                    alt={bangboo.rank}
                    width={32}
                    height={32}
                    className="drop-shadow-md"
                    unoptimized
                />
            </div>

            {/* Bangboo Image */}
            <div className="absolute inset-0 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                <Image
                    src={bangboo.image}
                    alt={bangboo.name}
                    width={140}
                    height={140}
                    className="object-contain"
                    unoptimized
                />
            </div>

            {/* Name */}
            <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black via-black/80 to-transparent pt-6">
                <h3 className="text-white font-bold text-xs text-center leading-tight group-hover:text-yellow-400">
                    {bangboo.name}
                </h3>
            </div>
        </div>
    );
});

BangbooCard.displayName = 'BangbooCard';

export default BangbooCard;
