'use client';

import { useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BookOpen, Home, X } from 'lucide-react';
import Link from 'next/link';
import { agents } from '../../data/agents';
import { weapons } from '../../data/weapons';
import { bangboos } from '../../data/bangboos';

export default function TopNavbar({ isVisible }) {
    const [activeItem, setActiveItem] = useState(-1);
    const pathname = usePathname();

    // Logic to get latest items
    const latestAgents = useMemo(() => {
        // Sort by ID desc (assuming higher ID = newer/beta)
        return [...agents].sort((a, b) => b.id - a.id).slice(0, 2);
    }, []);

    const latestWeapons = useMemo(() => {
        // Filter for S-Rank only to show featured/premium weapons, avoiding B-rank IDs which are numerically higher
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
        }
    }, [pathname]);

    const NavItem = ({ href, index, icon: Icon, label, hasDropdown, latestItems, itemType }) => {
        const isActive = activeItem === index;

        return (
            <li className="relative group h-full flex items-center">
                <Link href={href} className={`relative flex items-center h-10 px-4 rounded-md transition-all duration-200 ${isActive ? 'text-yellow-300 bg-yellow-500/10 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
                    {typeof Icon === 'string' ? (
                        <Image src={Icon} alt={`Icono ${label}`} width={20} height={20} className={`transition-all duration-200 ${isActive ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
                    ) : (
                        <Icon size={20} className={`transition-all duration-200 ${isActive ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-gray-200 opacity-80 hover:text-cyan-300 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50'}`} />
                    )}
                    <span className="ml-2 font-medium">{label}</span>
                    {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
                </Link>

                {/* Dropdown Menu */}
                {hasDropdown && latestItems && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block">
                        <div className="bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl p-4 w-72 backdrop-blur-xl flex flex-col gap-3 relative overflow-hidden">
                            {/* Decoration */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>

                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1">Lo más nuevo</span>

                            {latestItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={itemType === 'agente' ? `/agentes/${item.id}` : itemType === 'arma' ? `/armas/${item.id}` : `/bangboos/${item.id}`} // Assuming routes structure
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
                                        {/* Fallback for non-beta showing rank or element if available, simplistic approach */}
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
            className={`fixed top-0 left-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5 shadow-md transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } hidden lg:flex items-center justify-between px-8 h-20`}
        >
            {/* Logo CZ */}
            <Link href="/" className="flex items-center group relative">
                <div
                    className={`text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600 drop-shadow-[0_0_10px_rgba(234,179,8,0.9)] tracking-tighter transition-all duration-300 group-hover:scale-105 font-display font-black italic text-3xl pr-4`}
                >
                    CZ
                </div>
                {/* Overlay de Brillo para el hover */}
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-200 rounded-full blur-xl -z-10"></div>
            </Link>

            {/* Navigation */}
            <nav className="h-full">
                <ul className="flex items-center space-x-2 h-full">
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
                </ul>
            </nav>
        </header>
    );
}
