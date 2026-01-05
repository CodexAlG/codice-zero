'use client';

import { useState, useEffect, useMemo } from 'react';
import { memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { bangboos } from '@/data/bangboos';
import Link from 'next/link';
import BangbooCard from '@/components/bangboos/BangbooCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function BangboosPage() {
    const [activeFilters, setActiveFilters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Lógica de tiempo de gracia con sessionStorage
    const GRACE_PERIOD = 300000; // 5 minutos en milisegundos

    useEffect(() => {
        const lastLoadTime = sessionStorage.getItem('lastLoadTime');
        const currentTime = new Date().getTime();

        // Comprobar si el tiempo de gracia ha expirado (o si es la primera vez)
        if (!lastLoadTime || (currentTime - lastLoadTime) > GRACE_PERIOD) {
            // Mostrar spinner solo la primera vez o si el tiempo expiró
            const timer = setTimeout(() => {
                setIsLoading(false);
                // Actualizar el timestamp
                sessionStorage.setItem('lastLoadTime', new Date().getTime());
            }, 500); // 500ms de carga mínima simulada

            return () => clearTimeout(timer);
        } else {
            // Si está dentro del tiempo de gracia, cargamos al instante
            setIsLoading(false);
        }
    }, []);

    const toggleFilter = (newFilter) => {
        if (newFilter === "Todos") {
            setActiveFilters([]); // Limpiar todo
            return;
        }
        setActiveFilters(prev => {
            // Si ya está, lo quita. Si no, lo agrega.
            if (prev.includes(newFilter)) return prev.filter(f => f !== newFilter);
            return [...prev, newFilter];
        });
    };

    const rankFilters = ["S", "A"];
    const factionFilters = [
        { name: "Belobog Heavy Industries", icon: "/CodiceZero/Agentes/Faction/Faction_Belobog_Heavy_Industries_Icon.webp" },
        { name: "Cunning Hares", icon: "/CodiceZero/Agentes/Faction/Faction_Criminal_Investigation_Special_Response_Team_Icon.webp" },
        { name: "Victoria Housekeeping", icon: "/CodiceZero/Agentes/Faction/Faction_Victoria_Housekeeping_Co._Icon.webp" },
        { name: "Sons of Calydon", icon: "/CodiceZero/Agentes/Faction/Faction_Sons_of_Calydon_Icon.webp" },
        { name: "N.E.P.S.", icon: "/CodiceZero/Agentes/Faction/Faction_Hollow_Special_Operations_Section_6_Icon.webp" },
        { name: "H.S.O.-6", icon: "/CodiceZero/Agentes/Faction/Faction_Defense_Force_-_Silver_Squad_Icon.webp" },
        { name: "Obol Squad", icon: "/CodiceZero/Agentes/Faction/Faction_Obol_Squad_Icon.webp" }
    ];

    const filterIcons = {
        // Rangos
        "S": "/CodiceZero/Rango/Icon_Item_Rank_S.webp",
        "A": "/CodiceZero/Rango/Icon_Item_Rank_A.webp"
    };

    // Mapa de prioridad para ordenamiento
    const rankPriority = { "S": 1, "A": 2 };

    const filteredBangboos = useMemo(() => {
        return (activeFilters.length === 0
            ? bangboos
            : bangboos.filter(b => {
                // Separar filtros activos por categoría
                const rankFilters = activeFilters.filter(f => ["S", "A"].includes(f));
                const factionFilters = activeFilters.filter(f => !["S", "A"].includes(f));

                // Verificar Rango (Si hay filtros de rango, debe coincidir con uno de ellos)
                const matchRank = rankFilters.length === 0 || rankFilters.includes(b.rank);

                // Verificar Facción (Si hay filtros de facción, debe coincidir con uno de ellos)
                const matchFaction = factionFilters.length === 0 || factionFilters.includes(b.faction);

                // Lógica AND entre categorías (Rango Y Facción)
                return matchRank && matchFaction;
            })
        ).sort((a, b) => {
            // Ordenar por Rango (S < A)
            const rankDiff = rankPriority[a.rank] - rankPriority[b.rank];
            if (rankDiff !== 0) return rankDiff;
            return b.id - a.id;
        });
    }, [bangboos, activeFilters, rankPriority]);

    return (
        <>
            {isLoading && <LoadingSpinner />}

            {/* Contenido Normal de la Página (Solo visible cuando NO está cargando) */}
            <div className={`min-h-screen text-white p-8 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>

                {/* --- AVISO IMPORTANTE --- */}
                <div className="w-full mb-6 p-4 bg-yellow-900/40 border border-yellow-500/30 rounded-xl flex items-center gap-4 shadow-lg backdrop-blur-sm">
                    <div className="p-2 bg-yellow-500/10 rounded-full text-yellow-500 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                    </div>
                    <p className="text-yellow-200 text-sm md:text-base font-medium leading-relaxed">
                        La información de cada Bangboo no se encuentra disponible por el momento. Estén atentos al <a href="https://discord.gg/RBzdz2Bn4u" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-white underline underline-offset-2 transition-colors font-bold">Servidor de Discord</a>, donde se avisará cuando se agregará esa información.
                    </p>
                </div>

                {/* --- PANEL DE FILTROS --- */}
                <div className="w-full mb-8 p-6 bg-gray-950/80 border-y border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-6">

                    {/* FILA 1: Filtros Principales */}
                    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">

                        {/* Grupo Izquierdo: Botón TODOS y Cápsulas */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => toggleFilter("Todos")}
                                className={`h-10 px-6 rounded-lg font-bold font-display text-sm tracking-wider border transition-all ${activeFilters.length === 0
                                    ? "bg-yellow-400 text-black border-yellow-400 shadow-[0_0_15px_#facc15]"
                                    : "bg-gray-900 text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white"
                                    }`}
                            >
                                TODOS
                            </button>

                            {/* Cápsulas de Filtros */}
                            <div className="flex flex-wrap gap-2">
                                {/* Filtros de Rango */}
                                <div className="flex items-center gap-1 p-2 bg-black/40 border border-white/5 rounded-lg shadow-inner">
                                    {rankFilters.map((rank) => (
                                        <FilterIcon
                                            key={rank}
                                            name={rank}
                                            icon={filterIcons[rank]}
                                            activeFilters={activeFilters}
                                            toggleFilter={toggleFilter}
                                            size={28}
                                        />
                                    ))}
                                </div>
                                {/* Filtros de Facción */}
                                <div className="flex items-center gap-1 p-2 bg-black/40 border border-white/5 rounded-lg shadow-inner flex-wrap">
                                    {factionFilters.map((faction) => (
                                        <FilterIcon
                                            key={faction.name}
                                            name={faction.name}
                                            icon={faction.icon}
                                            activeFilters={activeFilters}
                                            toggleFilter={toggleFilter}
                                            size={24}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contador de Bangboos */}
                        <div className="text-gray-400 text-sm">
                            {filteredBangboos.length} bangboo{filteredBangboos.length !== 1 ? 's' : ''} encontrado{filteredBangboos.length !== 1 ? 's' : ''}
                        </div>
                    </div>
                </div>

                {/* GRID DE BANGBOOS ANIMADO */}
                <div className="w-full max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="flex flex-wrap justify-center gap-4 content-start transition-none"
                        style={{ minHeight: '80vh' }}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredBangboos.map((bangboo, index) => (
                                <motion.div
                                    key={bangboo.id}
                                    layout // Animación suave de movimiento
                                    className="w-[29%] sm:w-[140px] md:w-[150px] lg:w-[160px]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0 }}
                                >
                                    <Link href={`/bangboos/${bangboo.id}`}>
                                        <BangbooCard bangboo={bangboo} priority={index < 10} />
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

const FilterIcon = memo(({ name, icon, activeFilters, toggleFilter, size = 24 }) => {
    const isActive = activeFilters.includes(name);

    return (
        <button
            onClick={() => toggleFilter(name)}
            title={name}
            className={`relative p-2 rounded-lg border-2 transition-all duration-300 group ${isActive
                ? "border-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.4)] scale-110 z-10 opacity-100"
                : "border-transparent hover:bg-white/5 opacity-40 hover:opacity-100 hover:scale-105"
                }`}
        >
            <Image
                src={icon}
                alt={name}
                width={size}
                height={size}
                className={`object-contain transition-all ${isActive ? "grayscale-0 drop-shadow-md" : "grayscale group-hover:grayscale-0"}`}
            />
        </button>
    );
});

FilterIcon.displayName = 'FilterIcon';
