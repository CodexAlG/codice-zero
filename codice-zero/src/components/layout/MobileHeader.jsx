'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import appIcon from '@/app/icon.png';

// Mapa simple para mostrar el título de la página actual
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';

// Mapa simple para mostrar el título de la página actual
const pathTitles = {
  es: {
    '/': 'Inicio',
    '/agentes': 'Agentes',
    '/armas': 'Armas',
    '/discos': 'Discos',
    '/tierlist': 'Tier List',
    '/diff': 'Diferencias'
  },
  en: {
    '/': 'Home',
    '/agentes': 'Agents',
    '/armas': 'Weapons',
    '/discos': 'Drive Discs',
    '/tierlist': 'Tier List',
    '/diff': 'Diff'
  }
};

export default function MobileHeader({ toggleSidebar }) {
  const pathname = usePathname();
  const { language } = useLanguage();

  const currentTitle = useMemo(() => {
    const t = pathTitles[language] || pathTitles.es;
    return t[pathname] || t['/'] || 'Inicio';
  }, [pathname, language]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 shadow-[0_5px_30px_rgba(0,0,0,0.3)] flex items-center justify-between px-4 lg:hidden">

      {/* 1. Logo CZ (Izquierda) */}
      <Link href={`/${language}`} className="flex-shrink-0 relative w-8 h-8">
        <Image
          src={appIcon}
          alt="Codice Zero"
          fill
          className="object-contain drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
        />
      </Link>

      {/* 2. Título Central */}
      <h1 className="text-lg font-bold text-white uppercase tracking-wide">{currentTitle}</h1>

      {/* 3. Controles Derecha (Idioma + Menú) */}
      <div className="flex items-center gap-2">
        {/* <LanguageToggle />*/}
        <button
          onClick={toggleSidebar}
          className="text-yellow-500 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-yellow-500/10 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

    </header>
  );
}