'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Home, X, List, Scale } from 'lucide-react';
import Link from 'next/link';
import appIcon from '@/app/icon.png';

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
    } else if (pathname.startsWith('/discos')) {
      setActiveItem(2); // Discos
    } else if (pathname.startsWith('/tierlist')) {
      setActiveItem(3); // Tier List
    } else if (pathname.startsWith('/diff')) {
      setActiveItem(4); // Diff
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
      className={`h-screen flex flex-col overflow-hidden text-white p-4 transition-transform duration-300 ease-in-out will-change-transform ${isMobile
        ? 'fixed top-0 left-0 w-64 z-[90] bg-[#0f0f12]/95 backdrop-blur-md border-r border-white/10 shadow-[10px_0_40px_rgba(0,0,0,0.8)]'
        : 'relative w-full bg-[#0a0a0c]/80 backdrop-blur-md border-r border-white/5 shadow-[5px_0_30px_rgba(0,0,0,0.3)]'
        }`}
    >
      {/* Logo CZ y Botón Cerrar Móvil */}
      <Link href="/" className="flex-shrink-0 flex items-center justify-center h-24 w-full relative group bg-transparent">

        <div className="flex flex-col items-center gap-1 transition-transform duration-300 group-hover:scale-105">
          {/* Imagen del Logo con Glow */}
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-40 rounded-full animate-pulse"></div>
            <Image
              src={appIcon}
              alt="CodiceZero Logo"
              width={40}
              height={40}
              className="object-contain relative z-10 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
            />
          </div>

          {/* Texto CodiceZero */}
          <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-yellow-300 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)] font-display">
            CodiceZero
          </span>
        </div>

        {/* Botón Cerrar (Solo en Móvil) */}
        {isMobile && (
          <button
            onClick={toggleDrawer}
            className="absolute right-3 top-3 text-white/50 hover:text-white transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* Overlay de Brillo para el hover */}
        <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-colors duration-200 pointer-events-none"></div>
      </Link>

      {/* Navigation */}
      <nav className="mt-4">
        <ul className="space-y-3">
          {/* Item 1: Inicio */}
          <li>
            <Link href="/" onClick={handleLinkClick} className={`group relative flex items-center h-12 py-2 px-3 rounded-xl transition-all duration-300 font-medium ${activeItem === -1 ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)] border border-yellow-500/20 text-yellow-500' : 'text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/10 hover:text-gray-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]'}`}>
              {activeItem === -1 && <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-r-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>}
              <Home size={26} className={`transition-all duration-300 ml-1 ${activeItem === -1 ? 'drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] text-yellow-400' : 'opacity-70 group-hover:opacity-100 group-hover:drop-shadow-md'}`} />
              <span className={`ml-4 tracking-wide`}>Inicio</span>
            </Link>
          </li>

          {/* Item 2: Agentes */}
          <li>
            <Link href="/agentes" onClick={handleLinkClick} className={`group relative flex items-center h-12 py-2 px-3 rounded-xl transition-all duration-300 font-medium ${activeItem === 0 ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)] border border-yellow-500/20 text-yellow-500' : 'text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/10 hover:text-gray-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]'}`}>
              {activeItem === 0 && <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-r-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>}
              <Image src="/CodiceZero/Agentes/Icon_Agents.webp" alt="Icono Agentes" width={26} height={26} className={`transition-all duration-300 object-contain ml-1 ${activeItem === 0 ? 'drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] saturate-200' : 'opacity-70 group-hover:opacity-100 group-hover:saturate-200 filter group-hover:drop-shadow-md'}`} />
              <span className={`ml-4 tracking-wide`}>Agentes</span>
            </Link>
          </li>

          {/* Item 3: Armas */}
          <li>
            <Link href="/armas" onClick={handleLinkClick} className={`group relative flex items-center h-12 py-2 px-3 rounded-xl transition-all duration-300 font-medium ${activeItem === 1 ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)] border border-yellow-500/20 text-yellow-500' : 'text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/10 hover:text-gray-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]'}`}>
              {activeItem === 1 && <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-r-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>}
              <Image src="/CodiceZero/Armas/Icon_Storage_W-Engine.webp" alt="Icono Armas" width={26} height={26} className={`transition-all duration-300 object-contain ml-1 ${activeItem === 1 ? 'drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] saturate-200' : 'opacity-70 group-hover:opacity-100 group-hover:saturate-200 filter group-hover:drop-shadow-md'}`} />
              <span className={`ml-4 tracking-wide`}>Armas</span>
            </Link>
          </li>

          {/* Item 4: Discos */}
          <li>
            <Link href="/discos" onClick={handleLinkClick} className={`group relative flex items-center h-12 py-2 px-3 rounded-xl transition-all duration-300 font-medium ${activeItem === 2 ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)] border border-yellow-500/20 text-yellow-500' : 'text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/10 hover:text-gray-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]'}`}>
              {activeItem === 2 && <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-r-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>}
              <Image src="/CodiceZero/Discos/Icon_Storage_Drive_Disc.webp" alt="Icono Discos" width={26} height={26} className={`transition-all duration-300 object-contain ml-1 ${activeItem === 2 ? 'drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] saturate-200' : 'opacity-70 group-hover:opacity-100 group-hover:saturate-200 filter group-hover:drop-shadow-md'}`} />
              <span className={`ml-4 tracking-wide`}>Discos</span>
            </Link>
          </li>

          {/* Item 5: Tier List */}
          <li>
            <Link href="/tierlist" onClick={handleLinkClick} className={`group relative flex items-center h-12 py-2 px-3 rounded-xl transition-all duration-300 font-medium ${activeItem === 3 ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)] border border-yellow-500/20 text-yellow-500' : 'text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/10 hover:text-gray-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]'}`}>
              {activeItem === 3 && <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-r-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>}
              <List size={26} className={`transition-all duration-300 ml-1 ${activeItem === 3 ? 'drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] text-yellow-400' : 'opacity-70 group-hover:opacity-100 group-hover:drop-shadow-md'}`} />
              <span className={`ml-4 tracking-wide`}>Tier List</span>
            </Link>
          </li>

          {/* Item 6: Diferencias */}
          <li>
            <Link href="/diff" onClick={handleLinkClick} className={`group relative flex items-center h-12 py-2 px-3 rounded-xl transition-all duration-300 font-medium ${activeItem === 4 ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)] border border-yellow-500/20 text-yellow-500' : 'text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/10 hover:text-gray-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]'}`}>
              {activeItem === 4 && <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-r-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>}
              <Scale size={26} className={`transition-all duration-300 ml-1 ${activeItem === 4 ? 'drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] text-yellow-400' : 'opacity-70 group-hover:opacity-100 group-hover:drop-shadow-md'}`} />
              <span className={`ml-4 tracking-wide`}>Diferencias</span>
            </Link>
          </li>

        </ul>
      </nav>

      {/* Footer / About Me */}
      <div className="mt-auto pt-4 border-t border-white/5">
        <Link
          href="/sobre-mi"
          onClick={handleLinkClick}
          className="flex items-center justify-center gap-2 py-2 text-xs text-gray-400 hover:text-yellow-400 transition-colors uppercase tracking-wider font-bold"
        >
          <span>Sobre mí</span>
        </Link>
        <div className="flex justify-center mt-2 opacity-50 text-[10px] text-gray-500 font-mono">
          v2.6
        </div>
      </div>    </aside >
  );
}