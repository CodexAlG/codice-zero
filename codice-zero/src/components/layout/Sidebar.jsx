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
      {/* Logo CZ - Insignia Premium con Efecto de Botón Activado */}
      <Link href="/" className="flex-shrink-0 flex items-center justify-center h-20 w-full relative group bg-black/70 shadow-inner">
        {/* Insignia CZ */}
        <div 
          className={`text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600 drop-shadow-[0_0_10px_rgba(234,179,8,0.9)] tracking-tighter transition-all duration-300 group-hover:scale-105 font-display font-black italic ${
            isExpanded ? 'text-3xl' : 'text-xl'
          }`}
        >
          CZ
        </div>
        
        {/* Overlay de Brillo para el hover */}
        <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-200"></div>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === -1 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === -1 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Home size={36} className={`transition-all duration-200 ${activeItem === -1 ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-gray-200 opacity-80 hover:text-cyan-300 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50'}`} />
              <span className={`ml-4 font-medium ${!isExpanded && 'hidden'} transition-opacity`}>
                Inicio
              </span>
            </Link>
          </li>
          <li>
            <Link href="/personajes" className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 0 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 0 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Image src="/CodiceZero/Agentes/Icon_Agents.webp" alt="Icono Personajes" width={36} height={36} className={`transition-all duration-200 ${activeItem === 0 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
              <span className={`ml-4 font-medium ${!isExpanded && 'hidden'} transition-opacity`}>
                Personajes
              </span>
            </Link>
          </li>
          <li>
            <Link href="/armas" className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 1 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 1 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Image src="/CodiceZero/Armas/Icon_Storage_W-Engine.webp" alt="Icono Armas" width={36} height={36} className={`transition-all duration-200 ${activeItem === 1 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
              <span className={`ml-4 font-medium ${!isExpanded && 'hidden'} transition-opacity`}>
                Armas
              </span>
            </Link>
          </li>
          <li>
            <a href="#" className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 2 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 2 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <BookOpen size={36} className={`transition-all duration-200 ${activeItem === 2 ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-gray-200 opacity-80 hover:text-cyan-300 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50'}`} />
              <span className={`ml-4 font-medium ${!isExpanded && 'hidden'} transition-opacity`}>
                Guías
              </span>
            </a>
          </li>
          <li>
            <a href="#" className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 3 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 3 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Image src="/CodiceZero/Bangboo/INTER-KNOT_Bangboo.webp" alt="Icono Bangboo" width={36} height={36} className={`transition-all duration-200 ${activeItem === 3 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
              <span className={`ml-4 font-medium ${!isExpanded && 'hidden'} transition-opacity`}>
                Bangboo
              </span>
            </a>
          </li>
          <li>
            <Link href="/discos" className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 4 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 4 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Image src="/CodiceZero/Discos/Icon_Storage_Drive_Disc.webp" alt="Icono Discos" width={36} height={36} className={`transition-all duration-200 ${activeItem === 4 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
              <span className={`ml-4 font-medium ${!isExpanded && 'hidden'} transition-opacity`}>
                Discos
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}