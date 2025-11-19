'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <aside
      className={`h-screen bg-black/60 backdrop-blur-md text-white p-4 flex flex-col transition-all duration-300 ease-in-out border-r border-white/5 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-gray-700 mb-4">
        <Image src="/file.svg" alt="CodiceZero Logo" width={28} height={28} className="text-white" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" onClick={() => setActiveItem(0)} className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 0 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 0 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <Image src="/CodiceZero/Agentes/Icon_Agents.webp" alt="Icono Personajes" width={36} height={36} className={`opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200 ${activeItem === 0 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Personajes
              </span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveItem(1)} className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 1 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 1 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <Image src="/CodiceZero/Armas/Icon_Storage_W-Engine.webp" alt="Icono Armas" width={36} height={36} className={`opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200 ${activeItem === 1 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Armas
              </span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveItem(2)} className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 2 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 2 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <BookOpen size={36} className={`${activeItem === 2 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Guías
              </span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveItem(3)} className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 3 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 3 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <Image src="/CodiceZero/Bangboo/INTER-KNOT_Bangboo.webp" alt="Icono Bangboo" width={36} height={36} className={`opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200 ${activeItem === 3 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Bangboo
              </span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveItem(4)} className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 4 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 4 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <Image src="/CodiceZero/Discos/Icon_Storage_Drive_Disc.webp" alt="Icono Discos" width={36} height={36} className={`opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200 ${activeItem === 4 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Discos
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}