'use client';

import { useState, useEffect, useMemo } from 'react';
import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { weapons } from '@/data/weapons';
import WeaponCard from '@/components/weapons/WeaponCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import BetaWarning from "@/components/ui/BetaWarning";

export default function ArmasPage() {
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

  const rankFilters = ["S", "A", "B"];
  const roleFilters = ["Ataque", "Aturdidor", "Anomalia", "Soporte", "Defensa", "Ruptura"];

  const filterIcons = {
    // Rangos
    "S": "/CodiceZero/Rango/Icon_Item_Rank_S.webp",
    "A": "/CodiceZero/Rango/Icon_Item_Rank_A.webp",
    "B": "/CodiceZero/Rango/Icon_Item_Rank_B.webp",

    // Roles
    "Ataque": "/CodiceZero/Agentes/Rol/Ataque.webp",
    "Aturdidor": "/CodiceZero/Agentes/Rol/Aturdidor.webp",
    "Anomalia": "/CodiceZero/Agentes/Rol/Anomalia.webp",
    "Soporte": "/CodiceZero/Agentes/Rol/Soporte.webp",
    "Defensa": "/CodiceZero/Agentes/Rol/Defensa.webp",
    "Ruptura": "/CodiceZero/Agentes/Rol/Ruptura.webp"
  };

  // Mapa de prioridad para ordenamiento
  const rankPriority = { "S": 1, "A": 2, "B": 3 };

  const filteredWeapons = useMemo(() => {
    return (activeFilters.length === 0
      ? weapons
      : weapons.filter(w => {
        // Separar filtros activos por categoría
        const rankFilters = activeFilters.filter(f => ["S", "A", "B"].includes(f));
        const roleFilters = activeFilters.filter(f => !["S", "A", "B"].includes(f));

        // Verificar Rango (Si hay filtros de rango, debe coincidir con uno de ellos)
        const matchRank = rankFilters.length === 0 || rankFilters.includes(w.rank);

        // Verificar Rol (Si hay filtros de rol, debe coincidir con uno de ellos)
        const matchRole = roleFilters.length === 0 || roleFilters.includes(w.rol);

        // Lógica AND entre categorías (Rango Y Rol)
        return matchRank && matchRole;
      })
    ).sort((a, b) => {
      // Ordenar por Rango (S < A < B)
      const rankDiff = rankPriority[a.rank] - rankPriority[b.rank];
      if (rankDiff !== 0) return rankDiff;
      return b.id - a.id;
    });
  }, [weapons, activeFilters, rankPriority]);

  const hasBetaContent = weapons.some(weapon => weapon.leak === "Beta");

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {/* Contenido Normal de la Página (Solo visible cuando NO está cargando) */}
      <div className={`min-h-screen text-white p-4 sm:p-8 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>

        {hasBetaContent && <BetaWarning />}

        {/* --- PANEL DE FILTROS --- */}
        <div className="w-full mb-8 p-6 bg-[#09090b]/80 border-y border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-6">

          {/* Header del Panel: Botón Todos y Contador */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleFilter("Todos")}
                className={`h-10 px-6 rounded-lg font-bold font-display text-sm tracking-wider border transition-all ${activeFilters.length === 0
                  ? "bg-yellow-400 text-black border-yellow-400 shadow-[0_0_15px_#facc15]"
                  : "bg-black/50 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
              >
                TODOS
              </button>
              <span className="text-gray-500 text-sm hidden md:inline">|</span>
              <div className="text-gray-400 text-sm hidden md:block">
                Filtra por categorías
              </div>
            </div>

            {/* Contador de Armas */}
            <div className="text-gray-400 text-sm font-mono">
              {filteredWeapons.length} arma{filteredWeapons.length !== 1 ? 's' : ''} encontrada{filteredWeapons.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* GRUPOS DE FILTROS (Desktop: Row, Mobile: Stack Accordions) */}
          <div className="flex flex-wrap gap-4 items-start">

            <FilterCategory title="RANGO">
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
            </FilterCategory>

            <FilterCategory title="ROL">
              {roleFilters.map((role) => (
                <FilterIcon
                  key={role}
                  name={role}
                  icon={filterIcons[role]}
                  activeFilters={activeFilters}
                  toggleFilter={toggleFilter}
                />
              ))}
            </FilterCategory>
          </div>
        </div>

        {/* GRID DE ARMAS ANIMADO */}
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 content-start transition-none"
            style={{ minHeight: '80vh' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredWeapons.map((weapon, index) => (
                <Link key={weapon.id} href={`/armas/${weapon.id}`}>
                  <motion.div
                    layout // Animación suave de movimiento
                    className="w-full sm:w-[140px] md:w-[150px] lg:w-[160px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0 }}
                  >
                    <WeaponCard weapon={weapon} priority={index < 10} />
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

// COMPONENTE DE CATEGORÍA DE FILTRO (Responsive: Accordion en Móvil, Visible en Desktop)
const FilterCategory = ({ title, children, isFullWidth = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`flex flex-col gap-2 ${isFullWidth ? 'w-full' : ''}`}>
      {/* Título / Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-auto gap-2 group focus:outline-none"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors uppercase">
          {title}
        </span>
        {/* Icono Chevron (Solo visible en Móvil) */}
        <div className={`md:hidden text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {/* Contenido (Collapsible en Móvil, Siempre visible en Desktop) */}
      <div className={`
        overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}
        md:block
      `}>
        <div className="flex flex-wrap items-center gap-1 p-2 bg-black/40 border border-white/5 rounded-lg shadow-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

const FilterIcon = memo(({ name, icon, activeFilters, toggleFilter, size = 24 }) => {
  const isActive = activeFilters.includes(name);

  return (
    <button
      onClick={() => toggleFilter(name)}
      title={name}
      className={`relative p-2 rounded-lg border-2 transition-all duration-300 group ${isActive
        ? "border-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.4)] scale-110 z-10 opacity-100"
        : "border-transparent hover:bg-white/5 opacity-100 hover:scale-105"
        }`}
    >
      <Image
        src={icon}
        alt={name}
        width={size}
        height={size}
        className={`object-contain transition-all ${isActive ? "drop-shadow-md" : ""}`}
      />
    </button>
  );
});

FilterIcon.displayName = 'FilterIcon';