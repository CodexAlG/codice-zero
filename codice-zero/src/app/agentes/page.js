'use client';

import { useState, useEffect, useMemo } from 'react';
import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { agents } from '@/data/agents';
import AgentCard from '@/components/agents/AgentCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import BetaWarning from "@/components/ui/BetaWarning";

export default function PersonajesPage() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const elementFilters = ["Fuego", "Hielo", "Electrico", "Fisico", "Etereo"];
  const rankFilters = ["S", "A"];
  const roleFilters = ["Ataque", "Aturdidor", "Anomalia", "Soporte", "Defensa", "Ruptura"];
  const factionFilters = [
    "Victoria Housekeeping", "Belobog Heavy Industries", "Cunning Hares",
    "N.E.P.S.", "Obol Squad", "Section 6", "Stars of Lyra", "Sons of Calydon",
    "Spook Shack", "Mookingbird", "Yunkui Summit",
    "Defense Force - Silver Squad", "Krampus Compliance Authority", "Angels of Delusion"
  ];

  const elementIcons = {
    // Elementos
    Fuego: "/CodiceZero/Agentes/Elemento/Fuego.webp",
    Hielo: "/CodiceZero/Agentes/Elemento/Hielo.webp",
    Electrico: "/CodiceZero/Agentes/Elemento/Electrico.webp",
    Fisico: "/CodiceZero/Agentes/Elemento/Fisico.webp",
    Etereo: "/CodiceZero/Agentes/Elemento/Etereo.webp",

    // Rangos
    "S": "/CodiceZero/Rango/Icon_Item_Rank_S.webp",
    "A": "/CodiceZero/Rango/Icon_Item_Rank_A.webp",

    // Roles
    Ataque: "/CodiceZero/Agentes/Rol/Ataque.webp",
    Aturdidor: "/CodiceZero/Agentes/Rol/Aturdidor.webp",
    Anomalia: "/CodiceZero/Agentes/Rol/Anomalia.webp",
    Soporte: "/CodiceZero/Agentes/Rol/Soporte.webp",
    Defensa: "/CodiceZero/Agentes/Rol/Defensa.webp",
    Ruptura: "/CodiceZero/Agentes/Rol/Ruptura.webp",

    // Facciones
    "Victoria Housekeeping": "/CodiceZero/Agentes/Faction/Faction_Victoria_Housekeeping_Co._Icon.webp",
    "Belobog Heavy Industries": "/CodiceZero/Agentes/Faction/Faction_Belobog_Heavy_Industries_Icon.webp",
    "Cunning Hares": "/CodiceZero/Agentes/Faction/Faction_Gentle_House_Icon.webp",
    "N.E.P.S.": "/CodiceZero/Agentes/Faction/Faction_Criminal_Investigation_Special_Response_Team_Icon.webp",
    "Obol Squad": "/CodiceZero/Agentes/Faction/Faction_Obol_Squad_Icon.webp",
    "Section 6": "/CodiceZero/Agentes/Faction/Faction_Hollow_Special_Operations_Section_6_Icon.webp",
    "Sons of Calydon": "/CodiceZero/Agentes/Faction/Faction_Sons_of_Calydon_Icon.webp",
    "Spook Shack": "/CodiceZero/Agentes/Faction/Faction_Spook_Shack_Icon.webp",
    "Stars of Lyra": "/CodiceZero/Agentes/Faction/Faction_Stars_of_Lyra_Icon.webp",
    "Mookingbird": "/CodiceZero/Agentes/Faction/Faction_Mockingbird_Icon.webp",
    "Yunkui Summit": "/CodiceZero/Agentes/Faction/Faction_Yunkui_Summit_Icon.webp",
    "Defense Force - Silver Squad": "/CodiceZero/Agentes/Faction/Faction_Defense_Force_-_Silver_Squad_Icon.webp",
    "Krampus Compliance Authority": "/CodiceZero/Agentes/Faction/Faction_Krampus_Compliance_Authority_Icon.png",
    "Angels of Delusion": "/CodiceZero/Agentes/Faction/Faction_Angels_of_Delusion_Icon.webp"
  };

  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      // 1. Filtro de Búsqueda (Texto)
      const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase());

      // 2. Separar filtros activos por categoría
      const activeElements = activeFilters.filter(f => elementFilters.includes(f));
      const activeRanks = activeFilters.filter(f => rankFilters.includes(f));
      const activeRoles = activeFilters.filter(f => roleFilters.includes(f));
      const activeFactions = activeFilters.filter(f => factionFilters.includes(f));

      // 3. Verificación por Categoría (Si la categoría tiene filtros activos, debe coincidir con uno)
      const matchElement = activeElements.length === 0 || activeElements.includes(agent.element);
      const matchRank = activeRanks.length === 0 || activeRanks.includes(agent.rank);
      const matchRole = activeRoles.length === 0 || activeRoles.includes(agent.rol);
      const matchFaction = activeFactions.length === 0 || activeFactions.includes(agent.faction);

      // Lógica Final: Debe cumplir Búsqueda Y (Elemento Y Rango Y Rol Y Facción)
      return matchesSearch && matchElement && matchRank && matchRole && matchFaction;
    });
  }, [agents, activeFilters, searchTerm]);

  // ----------------------------------------------------

  const hasBetaContent = agents.some(agent => agent.leak === "Beta");

  // Lógica de Renderizado
  return (
    <>
      {isLoading && <LoadingSpinner />}

      {/* Contenido Normal de la Página (Solo visible cuando NO está cargando) */}
      <div className={`min-h-screen text-white p-8 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>

        {hasBetaContent && <BetaWarning />}

        {/* --- PANEL DE FILTROS --- */}
        <div className="w-full mb-8 p-6 bg-gray-950/80 border-y border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-6">

          {/* FILA 1: Filtros Principales + Búsqueda */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">

            {/* Grupo Izquierdo: Botones y Cápsulas */}
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

              {/* Cápsulas (Elementos, Rangos, Roles) */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 p-2 bg-black/40 border border-white/5 rounded-lg shadow-inner">
                  {elementFilters.map((el) => (
                    <FilterIcon key={el} name={el} icon={elementIcons[el]} activeFilters={activeFilters} toggleFilter={toggleFilter} />
                  ))}
                </div>
                <div className="flex items-center gap-1 p-2 bg-black/40 border border-white/5 rounded-lg shadow-inner">
                  {rankFilters.map((r) => (
                    <FilterIcon key={r} name={r} icon={elementIcons[r]} activeFilters={activeFilters} toggleFilter={toggleFilter} size={28} />
                  ))}
                </div>
                <div className="flex items-center gap-1 p-2 bg-black/40 border border-white/5 rounded-lg shadow-inner">
                  {roleFilters.map((rol) => (
                    <FilterIcon key={rol} name={rol} icon={elementIcons[rol]} activeFilters={activeFilters} toggleFilter={toggleFilter} />
                  ))}
                </div>
              </div>
            </div>

            {/* Grupo Derecho: Búsqueda (Ahora aquí arriba) */}
            <div className="relative w-full xl:w-64">
              <input
                type="text"
                placeholder="Buscar Agente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-yellow-500 focus:shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-all"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* FILA 2: FACCIONES (Limpia, solo iconos) */}
          <div className="flex flex-wrap items-center gap-1 p-2 bg-black/40 border border-white/5 rounded-lg shadow-inner">
            {factionFilters.map((fac) => (
              <FilterIcon key={fac} name={fac} icon={elementIcons[fac]} activeFilters={activeFilters} toggleFilter={toggleFilter} size={32} />
            ))}
          </div>

        </div>

        {/* GRID DE PERSONAJES OPTIMIZADO */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 content-start transition-none" style={{ minHeight: '50vh' }}>
            {filteredAgents.map((agent, index) => (
              <Link
                key={agent.id}
                href={`/agentes/${agent.id}`}
                className="w-[30%] sm:w-[23%] md:w-[18%] lg:w-[15%] xl:w-[13%] 2xl:w-[11%]"
              >
                <AgentCard agent={agent} priority={index < 8} />
              </Link>
            ))}
          </div>
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
      // Clases base: Borde transparente, transición suave
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
        // Quitamos 'brightness-0' para que el icono mantenga su color original
        // Solo aplicamos grayscale cuando está inactivo para efecto de "apagado"
        className={`object-contain transition-all ${isActive ? "grayscale-0 drop-shadow-md" : "grayscale group-hover:grayscale-0"}`}
      />
    </button>
  );
});

FilterIcon.displayName = 'FilterIcon';