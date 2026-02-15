'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import appIcon from '@/app/icon.png';

// Mapa simple para mostrar el título de la página actual
const pathTitles = {
  '/': 'Inicio',
  '/agentes': 'Agentes',
  '/armas': 'Armas',
  '/discos': 'Discos',
  '/guias': 'Guías',
  '/bangboo': 'Bangboo',
  '/tier-list': 'Tier List',
  '/diff': 'Diferencias',
  '/sobre-mi': 'Sobre mí'
};

export default function MobileHeader({ toggleSidebar }) {
  const pathname = usePathname();

  const currentTitle = useMemo(() => {
    return pathTitles[pathname] || 'Inicio';
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 lg:hidden">

      {/* 1. Logo CZ (Izquierda) */}
      <Link href="/" className="flex-shrink-0 relative w-8 h-8">
        <Image
          src={appIcon}
          alt="Codice Zero"
          fill
          className="object-contain drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
        />
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