'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { weapons } from '@/data/weapons';
import WeaponCard from '@/components/weapons/WeaponCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ArmasPage() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simular tiempo de carga (para asegurar que el spinner se vea)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Mínimo 500ms de carga

    return () => clearTimeout(timer);
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

  const filteredWeapons = (activeFilters.length === 0
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

  return (
    <>
      {isLoading && <LoadingSpinner />}
      
      {/* Contenido Normal de la Página (Solo visible cuando NO está cargando) */}
      <div className={`min-h-screen bg-gray-950 text-white p-8 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* --- PANEL DE FILTROS --- */}
      <div className="w-full mb-8 p-6 bg-gray-950/80 border-y border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-6">
        
        {/* FILA 1: Filtros Principales */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
          
          {/* Grupo Izquierdo: Botón TODOS y Cápsulas */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => toggleFilter("Todos")}
              className={`h-10 px-6 rounded-lg font-bold font-display text-sm tracking-wider border transition-all ${
                activeFilters.length === 0
                  ? "bg-yellow-400 text-black border-yellow-400 shadow-[0_0_15px_#facc15]" 
                  : "bg-gray-900 text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white"
              }`}
            >
              TODOS
            </button>

            {/* Cápsulas de Filtros */}
            <div className="flex flex-wrap gap-2">
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
              <div className="flex items-center gap-1 p-2 bg-black/40 border border-white/5 rounded-lg shadow-inner">
                {roleFilters.map((role) => (
                  <FilterIcon 
                    key={role} 
                    name={role} 
                    icon={filterIcons[role]} 
                    activeFilters={activeFilters} 
                    toggleFilter={toggleFilter} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contador de Armas */}
          <div className="text-gray-400 text-sm">
            {filteredWeapons.length} arma{filteredWeapons.length !== 1 ? 's' : ''} encontrada{filteredWeapons.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* GRID DE ARMAS ANIMADO */}
      <div className="w-full max-w-7xl mx-auto">
        <motion.div 
          layout 
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-3 justify-center"
        >
        <AnimatePresence mode="popLayout">
          {filteredWeapons.map((weapon) => (
            <Link key={weapon.id} href={`/armas/${weapon.id}`}>
              <motion.div
                layout // Animación suave de movimiento
                initial={{ opacity: 0, scale: 0.8 }} // Estado inicial
                animate={{ opacity: 1, scale: 1 }}   // Estado visible
                exit={{ opacity: 0, scale: 0.5 }}    // Al filtrarse
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              >
                <WeaponCard weapon={weapon} />
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

function FilterIcon({ name, icon, activeFilters, toggleFilter, size = 24 }) {
  const isActive = activeFilters.includes(name);
  
  return (
    <button
      onClick={() => toggleFilter(name)}
      title={name}
      className={`relative p-2 rounded-lg border-2 transition-all duration-300 group ${
        isActive
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
}