'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BookOpen, Home, X } from 'lucide-react';
import Link from 'next/link';

export default function TopNavbar({ isVisible }) {
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
        } else if (pathname.startsWith('/bangboos')) {
            setActiveItem(3); // Bangboo
        } else if (pathname.startsWith('/discos')) {
            setActiveItem(4); // Discos
        }
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5 shadow-md transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } hidden lg:flex items-center justify-between px-8 h-20`}
        >
            {/* Logo CZ */}
            <Link href="/" className="flex items-center group relative">
                <div
                    className={`text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600 drop-shadow-[0_0_10px_rgba(234,179,8,0.9)] tracking-tighter transition-all duration-300 group-hover:scale-105 font-display font-black italic text-3xl`}
                >
                    CZ
                </div>
                {/* Overlay de Brillo para el hover */}
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-200 rounded-full blur-xl -z-10"></div>
            </Link>

            {/* Navigation */}
            <nav>
                <ul className="flex items-center space-x-4">
                    <li>
                        <Link href="/" className={`relative flex items-center h-10 px-4 rounded-md transition-all duration-200 ${activeItem === -1 ? 'text-yellow-300 bg-yellow-500/10 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
                            <Home size={20} className={`transition-all duration-200 ${activeItem === -1 ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-gray-200 opacity-80 hover:text-cyan-300 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50'}`} />
                            <span className="ml-2 font-medium">Inicio</span>
                            {activeItem === -1 && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
                        </Link>
                    </li>
                    <li>
                        <Link href="/personajes" className={`relative flex items-center h-10 px-4 rounded-md transition-all duration-200 ${activeItem === 0 ? 'text-yellow-300 bg-yellow-500/10 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
                            <Image src="/CodiceZero/Agentes/Icon_Agents.webp" alt="Icono Personajes" width={20} height={20} className={`transition-all duration-200 ${activeItem === 0 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
                            <span className="ml-2 font-medium">Personajes</span>
                            {activeItem === 0 && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
                        </Link>
                    </li>
                    <li>
                        <Link href="/armas" className={`relative flex items-center h-10 px-4 rounded-md transition-all duration-200 ${activeItem === 1 ? 'text-yellow-300 bg-yellow-500/10 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
                            <Image src="/CodiceZero/Armas/Icon_Storage_W-Engine.webp" alt="Icono Armas" width={20} height={20} className={`transition-all duration-200 ${activeItem === 1 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
                            <span className="ml-2 font-medium">Armas</span>
                            {activeItem === 1 && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
                        </Link>
                    </li>
                    <li>
                        <a href="#" className={`relative flex items-center h-10 px-4 rounded-md transition-all duration-200 ${activeItem === 2 ? 'text-yellow-300 bg-yellow-500/10 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
                            <BookOpen size={20} className={`transition-all duration-200 ${activeItem === 2 ? 'text-yellow-300 drop-shadow-lg shadow-yellow-400/50' : 'text-gray-200 opacity-80 hover:text-cyan-300 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50'}`} />
                            <span className="ml-2 font-medium">Guías</span>
                            {activeItem === 2 && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
                        </a>
                    </li>
                    <li>
                        <Link href="/bangboos" className={`relative flex items-center h-10 px-4 rounded-md transition-all duration-200 ${activeItem === 3 ? 'text-yellow-300 bg-yellow-500/10 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
                            <Image src="/CodiceZero/Bangboo/INTER-KNOT_Bangboo.webp" alt="Icono Bangboo" width={20} height={20} className={`transition-all duration-200 ${activeItem === 3 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
                            <span className="ml-2 font-medium">Bangboo</span>
                            {activeItem === 3 && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
                        </Link>
                    </li>
                    <li>
                        <Link href="/discos" className={`relative flex items-center h-10 px-4 rounded-md transition-all duration-200 ${activeItem === 4 ? 'text-yellow-300 bg-yellow-500/10 shadow-lg shadow-yellow-500/20 border border-yellow-400/30' : 'text-gray-100 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-400/20'} hover:border hover:border-cyan-400/20`}>
                            <Image src="/CodiceZero/Discos/Icon_Storage_Drive_Disc.webp" alt="Icono Discos" width={20} height={20} className={`transition-all duration-200 ${activeItem === 4 ? 'drop-shadow-lg shadow-yellow-400/50 saturate-200 contrast-200' : 'opacity-80 hover:opacity-100 hover:drop-shadow-md hover:shadow-cyan-400/50 saturate-150 hover:saturate-200 hover:contrast-150'}`} />
                            <span className="ml-2 font-medium">Discos</span>
                            {activeItem === 4 && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/50"></div>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
