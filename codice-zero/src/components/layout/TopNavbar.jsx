'use client';

import { useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BookOpen, Home, X, List } from 'lucide-react';
import Link from 'next/link';
import { agents } from '../../data/agents';
import { weapons } from '../../data/weapons';
import { bangboos } from '../../data/bangboos';

export default function TopNavbar({ isVisible }) {
    const [activeItem, setActiveItem] = useState(-1);
    const pathname = usePathname();

    // Logic to get latest items
    const latestAgents = useMemo(() => {
        return [...agents].sort((a, b) => b.id - a.id).slice(0, 2);
    }, []);

    const latestWeapons = useMemo(() => {
        return [...weapons].filter(w => w.rank === 'S').sort((a, b) => b.id - a.id).slice(0, 2);
    }, []);

    const latestBangboos = useMemo(() => {
        return [...bangboos].sort((a, b) => b.id - a.id).slice(0, 1);
    }, []);


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

    const NavItem = ({ href, index, icon: Icon, label, hasDropdown, latestItems, itemType }) => {
        const isActive = activeItem === index;

        return (
            <li className="relative group w-full flex justify-center py-2">
                <Link
                    href={href}
                    className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 
                    ${isActive
                            ? 'text-yellow-300 bg-yellow-500/10 shadow-lg shadow-yellow-500/20 border border-yellow-400/30'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white hover:shadow-cyan-400/20'} 
                    hover:border hover:border-white/10 group`}
                    aria-label={label}
                >
                    {typeof Icon === 'string' ? (
                        <Image src={Icon} alt={`Icono ${label}`} width={24} height={24} className={`transition-all duration-200 ${isActive ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-70 group-hover:opacity-100 group-hover:saturate-150'}`} />
                    ) : (
                        <Icon size={24} className={`transition-all duration-200 ${isActive ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-current opacity-70 group-hover:opacity-100'}`} />
                    )}

                    {/* Tooltip Label (Shows on Hover - Hidden if Dropdown exists) */}
                    {!hasDropdown && (
                        <span className="absolute left-full ml-4 px-2 py-1 bg-black/80 border border-white/10 rounded text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                            {label}
                        </span>
                    )}

                    {/* Active Indicator Bar (Left vertical) */}
                    {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[3px] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-r-full shadow-lg shadow-yellow-500/50"></div>}
                </Link>

                {/* Dropdown Menu (Opens to Right) */}
                {hasDropdown && latestItems && (
                    <div className="absolute top-0 left-full ml-4 hidden group-hover:block z-50 pl-2">
                        <div className="bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl p-4 w-72 backdrop-blur-xl flex flex-col gap-3 relative overflow-hidden">
                            {/* Decoration */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>

                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1">{label} - Lo más nuevo</span>

                            {latestItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={itemType === 'agente' ? `/agentes/${item.id}` : itemType === 'arma' ? `/armas/${item.id}` : `/bangboos/${item.id}`}
                                    className="flex items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 group/item"
                                >
                                    <div className="relative w-12 h-12 rounded-md overflow-hidden bg-black/50 border border-white/5 flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover group-hover/item:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="ml-3 flex flex-col">
                                        <span className="text-sm font-bold text-gray-200 group-hover/item:text-yellow-400 transition-colors line-clamp-1">{item.name}</span>
                                        {item.leak === 'Beta' && (
                                            <span className="text-[10px] text-black bg-yellow-500 px-1.5 py-0.5 rounded w-fit font-bold">BETA</span>
                                        )}
                                        {!item.leak && item.rank && (
                                            <span className="text-[10px] text-gray-500">Rango {item.rank}</span>
                                        )}
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                )}
            </li>
        );
    };

    return (
        <header
            className={`fixed top-0 left-0 h-full w-20 z-50 bg-[#0b0c15]/95 backdrop-blur-md border-r border-white/5 shadow-2xl transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : '-translate-x-full'
                } hidden lg:flex flex-col items-center py-8`}
        >
            {/* Logo CZ */}
            <Link href="/" className="flex items-center justify-center group relative mb-12">
                <div
                    className={`text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600 drop-shadow-[0_0_10px_rgba(234,179,8,0.9)] tracking-tighter transition-all duration-300 group-hover:scale-110 font-display font-black italic text-2xl`}
                >
                    CZ
                </div>
                {/* Overlay de Brillo para el hover */}
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-200 rounded-full blur-xl -z-10 w-12 h-12"></div>
            </Link>

            {/* Navigation */}
            <nav className="flex-1 w-full">
                <ul className="flex flex-col items-center gap-4 w-full">
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
                        hasDropdown={true}
                        latestItems={latestAgents}
                        itemType="agente"
                    />
                    <NavItem
                        href="/armas"
                        index={1}
                        icon="/CodiceZero/Armas/Icon_Storage_W-Engine.webp"
                        label="Armas"
                        hasDropdown={true}
                        latestItems={latestWeapons}
                        itemType="arma"
                    />
                    <NavItem
                        href="#"
                        index={2}
                        icon={BookOpen}
                        label="Guías"
                    />
                    <NavItem
                        href="/bangboos"
                        index={3}
                        icon="/CodiceZero/Bangboo/INTER-KNOT_Bangboo.webp"
                        label="Bangboo"
                        hasDropdown={true}
                        latestItems={latestBangboos}
                        itemType="bangboo"
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
                </ul>
            </nav>

            {/* Bottom Decoration or Settings if needed */}
            <div className="mt-auto w-10 h-[1px] bg-white/10"></div>
        </header>
    );
}
