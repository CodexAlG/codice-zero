'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

// Mapa simple para mostrar el título de la página actual
const pathTitles = {
  '/': 'Inicio',
  '/personajes': 'Personajes',
  '/armas': 'Armas',
  '/discos': 'Discos',
  '/guias': 'Guías',
  '/bangboo': 'Bangboo',
};

export default function MobileHeader({ toggleSidebar }) {
  const pathname = usePathname();

  const currentTitle = useMemo(() => {
    return pathTitles[pathname] || 'Inicio';
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-gray-950/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 lg:hidden">

      {/* 1. Logo CZ (Izquierda) */}
      <Link href="/" className="flex-shrink-0">
        <div className="text-xl font-display font-black italic text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600 tracking-tighter drop-shadow-[0_0_10px_rgba(234,179,8,0.9)] pr-4">
          CZ
        </div>
      </Link>

      {/* 2. Título Central */}
      <h1 className="text-lg font-bold text-white uppercase tracking-wide">{currentTitle}</h1>

      {/* 3. Botón Hamburguesa (Derecha) */}
      <button
        onClick={toggleSidebar}
        className="text-yellow-400 hover:text-yellow-300 transition-colors p-2 rounded-lg hover:bg-yellow-400/10"
        aria-label="Abrir menú"
      >
        <Menu className="w-6 h-6" />
      </button>

    </header>
  );
}