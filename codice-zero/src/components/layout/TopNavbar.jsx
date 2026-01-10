'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BookOpen, Home, List, GitCompare } from 'lucide-react';
import Link from 'next/link';
import appIcon from '@/app/icon.png';

export default function TopNavbar({ isVisible }) {
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
        } else if (pathname.startsWith('/guías')) {
            setActiveItem(2); // Guías
        } else if (pathname.startsWith('/bangboos')) {
            setActiveItem(3); // Bangboo
        } else if (pathname.startsWith('/discos')) {
            setActiveItem(4); // Discos
        } else if (pathname.startsWith('/tierlist')) {
            setActiveItem(5); // Tier List
        } else if (pathname.startsWith('/diff')) {
            setActiveItem(6); // Diferencias
        }
    }, [pathname]);

    const NavItem = ({ href, index, icon: Icon, label }) => {
        const isActive = activeItem === index;

        return (
            <li className="relative group w-full px-3 py-1">
                <Link
                    href={href}
                    className={`relative flex items-center h-12 rounded-xl transition-all duration-200 px-3 gap-3
                    ${isActive
                            ? 'text-yellow-300 bg-yellow-500/10 shadow-lg shadow-yellow-500/20 border border-yellow-400/30'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white hover:shadow-cyan-400/20'} 
                    hover:border hover:border-white/10 group`}
                    aria-label={label}
                >
                    {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-r-full shadow-lg shadow-yellow-500/50"></div>}

                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10">
                        {typeof Icon === 'string' ? (
                            <Image src={Icon} alt={`Icono ${label}`} width={36} height={36} className={`transition-all duration-200 object-contain ${isActive ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-70 group-hover:opacity-100 group-hover:saturate-150'}`} />
                        ) : (
                            <Icon size={36} className={`transition-all duration-200 ${isActive ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-current opacity-70 group-hover:opacity-100'}`} />
                        )}
                    </div>

                    <span className={`text-[15px] font-bold tracking-wide transition-colors duration-200 uppercase ${isActive ? 'text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]' : 'text-gray-400 group-hover:text-white'}`}>
                        {label}
                    </span>
                </Link>
            </li>
        );
    };

    return (
        <header
            className={`fixed top-0 left-0 h-full w-56 z-50 bg-[#09090b] backdrop-blur-md border-r border-white/5 shadow-2xl transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'
                } hidden lg:flex flex-col items-center py-8`}
        >
            {/* Logo CZ */}
            <Link href="/" className="flex flex-col items-center justify-center group relative mb-8 gap-2 w-full px-6">
                <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-40 rounded-full animate-pulse"></div>
                    <Image
                        src={appIcon}
                        alt="CodiceZero Logo"
                        width={80}
                        height={80}
                        className="object-contain relative z-10 drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                    />
                </div>

                {/* Texto CodiceZero */}
                <span className="text-sm uppercase font-bold tracking-widest text-yellow-300 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)] font-display text-center leading-none mt-2">
                    Codice<br />Zero
                </span>

                {/* Overlay de Brillo para el hover */}
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-colors duration-200 rounded-lg -z-10 -m-2"></div>
            </Link>

            {/* Navigation */}
            <nav className="flex-1 w-full overflow-y-auto custom-scrollbar">
                <ul className="flex flex-col gap-2 w-full">
                    <NavItem
                        href="/"
                        index={-1}
                        icon={Home}
                        label="Inicio"
                    />
                    <NavItem
                        href="/agentes"
                        index={0}
                        icon="/CodiceZero/Agentes/Icon_Agents.webp"
                        label="Agentes"
                    />
                    <NavItem
                        href="/armas"
                        index={1}
                        icon="/CodiceZero/Armas/Icon_Storage_W-Engine.webp"
                        label="Armas"
                    />
                    <NavItem
                        href="/guías"
                        index={2}
                        icon={BookOpen}
                        label="Guías"
                    />
                    <NavItem
                        href="/bangboos"
                        index={3}
                        icon="/CodiceZero/Bangboo/INTER-KNOT_Bangboo.webp"
                        label="Bangboo"
                    />
                    <NavItem
                        href="/discos"
                        index={4}
                        icon="/CodiceZero/Discos/Icon_Storage_Drive_Disc.webp"
                        label="Discos"
                    />
                    <NavItem
                        href="/tierlist"
                        index={5}
                        icon={List}
                        label="Tier List"
                    />
                    <NavItem
                        href="/diff"
                        index={6}
                        icon={GitCompare}
                        label="Diferencias"
                    />
                </ul>
            </nav>

            {/* Bottom Decoration or Settings if needed */}
            <div className="mt-auto w-full px-6 flex flex-col gap-4">
                <div className="w-full h-[1px] bg-white/10"></div>
                <div className="flex justify-center opacity-50 text-[10px] text-gray-500 font-mono">
                    v2.5
                </div>
            </div>
        </header>
    );
}
