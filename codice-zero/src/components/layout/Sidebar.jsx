'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BookOpen, Home, X, List } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar({ isExpanded, isMobile, toggleDrawer }) {
  const [activeItem, setActiveItem] = useState(-1);
  const pathname = usePathname();

  // Sincronizar el estado activo con la ruta actual
  useEffect(() => {
    if (pathname === '/') {
      setActiveItem(-1); // Inicio
    } else if (pathname.startsWith('/agentes')) {
      setActiveItem(0); // Agentes
    } else if (pathname.startsWith('/armas')) {
      setActiveItem(1); // Armas
    } else if (pathname.startsWith('/bangboos')) {
      setActiveItem(3); // Bangboo
    } else if (pathname.startsWith('/discos')) {
      setActiveItem(4); // Discos
    } else if (pathname.startsWith('/tierlist')) {
      setActiveItem(5); // Tier List
    }
  }, [pathname]);

  // Cerrar drawer cuando se hace click en un link en móvil
  const handleLinkClick = () => {
    if (isMobile && toggleDrawer) {
      toggleDrawer();
    }
  };

  return (
    <aside
      className={`h-screen border-r border-white/5 flex flex-col overflow-hidden bg-[#0f172a]/90 backdrop-blur-md text-white p-4 transition-all duration-300 ease-in-out ${isMobile
        ? 'fixed top-0 left-0 w-64 z-[90]'
        : 'relative w-full' // Full width of container (w-48 from LayoutWrapper)
        }`}
    >
      {/* Logo CZ y Botón Cerrar Móvil */}
      <Link href="/" className="flex-shrink-0 flex items-center justify-center h-20 w-full relative group bg-transparent shadow-2xl">

        {/* Insignia CZ */}
        <div
          className={`text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600 drop-shadow-[0_0_10px_rgba(234,179,8,0.9)] tracking-tighter transition-all duration-300 group-hover:scale-105 font-display font-black italic text-3xl pr-4`}
        >
          CZ
        </div>

        {/* Botón Cerrar (Solo en Móvil) */}
        {isMobile && (
          <button
            onClick={toggleDrawer}
            className="absolute right-3 text-white/50 hover:text-white transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* Overlay de Brillo para el hover */}
        <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-200"></div>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" onClick={handleLinkClick} className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === -1 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === -1 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Home size={32} className={`transition-all duration-200 ${activeItem === -1 ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-gray-200 opacity-80 hover:text-cyan-300 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50'}`} />
              <span className={`ml-3 font-medium transition-opacity`}>
                Inicio
              </span>
            </Link>
          </li>
          <li>
            <Link href="/agentes" onClick={handleLinkClick} className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 0 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 0 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Image src="/CodiceZero/Agentes/Icon_Agents.webp" alt="Icono Agentes" width={32} height={32} className={`transition-all duration-200 ${activeItem === 0 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
              <span className={`ml-3 font-medium transition-opacity`}>
                Agentes
              </span>
            </Link>
          </li>
          <li>
            <Link href="/armas" onClick={handleLinkClick} className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 1 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 1 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Image src="/CodiceZero/Armas/Icon_Storage_W-Engine.webp" alt="Icono Armas" width={32} height={32} className={`transition-all duration-200 ${activeItem === 1 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
              <span className={`ml-3 font-medium transition-opacity`}>
                Armas
              </span>
            </Link>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick} className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 2 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 2 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <BookOpen size={32} className={`transition-all duration-200 ${activeItem === 2 ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-gray-200 opacity-80 hover:text-cyan-300 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50'}`} />
              <span className={`ml-3 font-medium transition-opacity`}>
                Guías
              </span>
            </a>
          </li>
          <li>
            <Link href="/bangboos" onClick={handleLinkClick} className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 3 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 3 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Image src="/CodiceZero/Bangboo/INTER-KNOT_Bangboo.webp" alt="Icono Bangboo" width={32} height={32} className={`transition-all duration-200 ${activeItem === 3 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
              <span className={`ml-3 font-medium transition-opacity`}>
                Bangboo
              </span>
            </Link>
          </li>
          <li>
            <Link href="/discos" onClick={handleLinkClick} className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 4 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 4 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <Image src="/CodiceZero/Discos/Icon_Storage_Drive_Disc.webp" alt="Icono Discos" width={32} height={32} className={`transition-all duration-200 ${activeItem === 4 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
              <span className={`ml-3 font-medium transition-opacity`}>
                Discos
              </span>
            </Link>
          </li>
          <li>
            <Link href="/tierlist" onClick={handleLinkClick} className={`relative flex items-center h-12 py-2 px-2 rounded-md transition-all duration-200 ${activeItem === 5 ? 'text-yellow-300 bg-yellow-500/10 text-yellow-300 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
              {activeItem === 5 && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
              <List size={32} className={`transition-all duration-200 ${activeItem === 5 ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-gray-200 opacity-80 hover:text-cyan-300 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50'}`} />
              <span className={`ml-3 font-medium transition-opacity`}>
                Tier List
              </span>
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
}