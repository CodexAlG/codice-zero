'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BookOpen, Home } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar({ isExpanded, setIsExpanded }) {
  const [activeItem, setActiveItem] = useState(-1);
  const pathname = usePathname();

  // Sincronizar el estado activo con la ruta actual
  useEffect(() => {
    if (pathname === '/') {
      setActiveItem(-1); // Inicio
    } else if (pathname.startsWith('/personajes')) {
      setActiveItem(0); // Personajes
    } else if (pathname.startsWith('/armas')) {
      setActiveItem(1); // Armas
    } else if (pathname.startsWith('/discos')) {
      setActiveItem(4); // Discos
    }
  }, [pathname]);

  return (
    <aside 
      className={`fixed top-0 left-0 h-screen border-r border-white/5 flex flex-col overflow-hidden backdrop-blur-sm text-white p-4 transition-all duration-300 ease-in-out z-50 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo CZ - Insignia Estilizada */}
      <div className={`flex items-center justify-center h-20 border-b border-white/5 mb-6 relative group transition-all duration-300 ${
        isExpanded ? 'px-4' : 'px-2'
      }`}>
        <div className={`font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-[0_2px_8px_rgba(234,179,8,0.4)] transition-all duration-300 ${
          isExpanded ? 'text-3xl' : 'text-xl'
        }`}>
          CZ
        </div>
        {/* Efecto HUD sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === -1 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === -1 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <Home size={36} className="text-gray-300 opacity-75 hover:opacity-100 transition-opacity" />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Inicio
              </span>
            </Link>
          </li>
          <li>
            <Link href="/personajes" className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 0 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 0 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <Image src="/CodiceZero/Agentes/Icon_Agents.webp" alt="Icono Personajes" width={36} height={36} className={`opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200 ${activeItem === 0 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Personajes
              </span>
            </Link>
          </li>
          <li>
            <Link href="/armas" className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 1 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 1 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <Image src="/CodiceZero/Armas/Icon_Storage_W-Engine.webp" alt="Icono Armas" width={36} height={36} className={`opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200 ${activeItem === 1 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Armas
              </span>
            </Link>
          </li>
          <li>
            <a href="#" className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 2 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 2 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <BookOpen size={36} className={`${activeItem === 2 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Guías
              </span>
            </a>
          </li>
          <li>
            <a href="#" className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 3 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 3 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <Image src="/CodiceZero/Bangboo/INTER-KNOT_Bangboo.webp" alt="Icono Bangboo" width={36} height={36} className={`opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200 ${activeItem === 3 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Bangboo
              </span>
            </a>
          </li>
          <li>
            <Link href="/discos" className={`relative flex items-center h-12 py-2 px-2 rounded-md text-gray-300 transition-all ${activeItem === 4 ? 'text-yellow-400' : 'hover:bg-white/5 hover:text-yellow-400'}`}>
              {activeItem === 4 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5E02A]"></div>}
              <Image src="/CodiceZero/Discos/Icon_Storage_Drive_Disc.webp" alt="Icono Discos" width={36} height={36} className={`opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200 ${activeItem === 4 ? 'drop-shadow-lg shadow-yellow-500/50' : ''}`} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Discos
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}