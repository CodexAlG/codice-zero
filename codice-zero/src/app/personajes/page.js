'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { agents } from '@/data/agents';
import AgentCard from '@/components/agents/AgentCard';

export default function PersonajesPage() {
  const [activeFilters, setActiveFilters] = useState(['Todos']);

  const toggleFilter = (filterName) => {
    if (filterName === 'Todos') {
      setActiveFilters(['Todos']);
      return;
    }

    setActiveFilters(prev => {
      if (prev.includes('Todos')) {
        return [filterName];
      }
      
      if (prev.includes(filterName)) {
        const newFilters = prev.filter(f => f !== filterName);
        return newFilters.length === 0 ? ['Todos'] : newFilters;
      } else {
        return [...prev, filterName];
      }
    });
  };

  const clearAllFilters = () => {
    setActiveFilters(['Todos']);
  };

  const filters = [
    "Fuego", "Hielo", "Electrico", "Fisico", "Etereo", // Elementos
    "S", "A", // Rangos
    "Ataque", "Aturdidor", "Anomalia", "Soporte", "Defensa", "Ruptura" // Roles
  ];

  const elementIcons = {
    // Elementos existentes
    Fuego: "/CodiceZero/Agentes/Elemento/Fuego.webp",
    Hielo: "/CodiceZero/Agentes/Elemento/Hielo.webp",
    Electrico: "/CodiceZero/Agentes/Elemento/Electrico.webp",
    Fisico: "/CodiceZero/Agentes/Elemento/Fisico.webp",
    Etereo: "/CodiceZero/Agentes/Elemento/Etéreo.webp",

    // Rangos
    "S": "/CodiceZero/Rango/S.webp",
    "A": "/CodiceZero/Rango/A.webp",

    // Roles
    Ataque: "/CodiceZero/Agentes/Rol/Ataque.webp",
    Aturdidor: "/CodiceZero/Agentes/Rol/Aturdidor.webp",
    Anomalia: "/CodiceZero/Agentes/Rol/Anomalia.webp",
    Soporte: "/CodiceZero/Agentes/Rol/Soporte.webp",
    Defensa: "/CodiceZero/Agentes/Rol/Defensa.webp",
    Ruptura: "/CodiceZero/Agentes/Rol/Ruptura.webp"
  };

  const filteredAgents = agents.filter((agent) => {
    if (activeFilters.includes('Todos')) return true;
    
    // Separar filtros por categoría
    const elementFilters = activeFilters.filter(f => ["Fuego", "Hielo", "Electrico", "Fisico", "Etereo"].includes(f));
    const rankFilters = activeFilters.filter(f => ["S", "A"].includes(f));
    const roleFilters = activeFilters.filter(f => ["Ataque", "Aturdidor", "Anomalia", "Soporte", "Defensa", "Ruptura"].includes(f));
    
    // Si hay filtros de una categoría, el agente debe cumplir al menos uno de esa categoría
    const matchesElement = elementFilters.length === 0 || elementFilters.includes(agent.element);
    const matchesRank = rankFilters.length === 0 || rankFilters.includes(agent.rank);
    const matchesRole = roleFilters.length === 0 || roleFilters.includes(agent.rol);
    
    // El agente debe cumplir todas las categorías que tengan filtros activos
    return matchesElement && matchesRank && matchesRole;
  });

  const getButtonClasses = (filterName) => {
    const isActive = activeFilters.includes(filterName);
    const base = 'px-4 py-2 rounded-md transition-all font-tech';

    if (filterName === 'Todos') {
      return `${base} ${isActive ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'}`;
    }

    const colorMap = {
      // Elementos
      Fuego: isActive ? 'bg-red-500 text-white' : 'bg-red-900/50 text-red-300 hover:bg-red-800',
      Hielo: isActive ? 'bg-cyan-400 text-white' : 'bg-cyan-900/50 text-cyan-300 hover:bg-cyan-800',
      Electrico: isActive ? 'bg-blue-500 text-white' : 'bg-blue-900/50 text-blue-300 hover:bg-blue-800',
      Fisico: isActive ? 'bg-yellow-600 text-white' : 'bg-yellow-900/50 text-yellow-300 hover:bg-yellow-800',
      Etereo: isActive ? 'bg-pink-500 text-white' : 'bg-pink-900/50 text-pink-300 hover:bg-pink-800',
    };

    // Rangos
    const rankColorMap = {
      S: isActive ? 'bg-amber-500 text-white' : 'bg-amber-900/50 text-amber-300 hover:bg-amber-800',
      A: isActive ? 'bg-purple-500 text-white' : 'bg-purple-900/50 text-purple-300 hover:bg-purple-800',
    };

    // Roles sin color - solo grises neutrales
    const roleColorMap = {
      Ataque: isActive ? 'bg-gray-400 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500',
      Aturdidor: isActive ? 'bg-gray-400 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500',
      Anomalia: isActive ? 'bg-gray-400 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500',
      Soporte: isActive ? 'bg-gray-400 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500',
      Defensa: isActive ? 'bg-gray-400 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500',
      Ruptura: isActive ? 'bg-gray-400 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500',
    };

    // Usar colorMap para elementos, rankColorMap para rangos y roleColorMap para roles
    if (["Fuego", "Hielo", "Electrico", "Fisico", "Etereo"].includes(filterName)) {
      return `${base} ${colorMap[filterName]}`;
    } else if (["S", "A"].includes(filterName)) {
      return `${base} ${rankColorMap[filterName]}`;
    } else {
      return `${base} ${roleColorMap[filterName]}`;
    }
  };

  return (
    <div className="p-8">
      {/* Filtros en fila con separación uniforme */}
      <div className="mb-8 flex flex-wrap gap-8">
        {/* Sección de Elementos */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-white">Elementos</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => toggleFilter('Todos')}
              className={getButtonClasses('Todos')}
            >
              Todos
            </button>
            {["Fuego", "Hielo", "Electrico", "Fisico", "Etereo"].map(element => (
              <button
                key={element}
                onClick={() => toggleFilter(element)}
                className={getButtonClasses(element)}
              >
                <Image src={elementIcons[element]} alt={element} width={24} height={24} />
              </button>
            ))}
          </div>
        </div>

        {/* Sección de Rangos */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-white">Rangos</h3>
          <div className="flex flex-wrap gap-3">
            {["S", "A"].map(rank => (
              <button
                key={rank}
                onClick={() => toggleFilter(rank)}
                className={getButtonClasses(rank)}
              >
                <Image src={elementIcons[rank]} alt={rank} width={24} height={24} />
              </button>
            ))}
          </div>
        </div>

        {/* Sección de Roles */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-white">Roles</h3>
          <div className="flex flex-wrap gap-3">
            {["Ataque", "Aturdidor", "Anomalia", "Soporte", "Defensa", "Ruptura"].map(role => (
              <button
                key={role}
                onClick={() => toggleFilter(role)}
                className={getButtonClasses(role)}
              >
                <Image src={elementIcons[role]} alt={role} width={24} height={24} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {filteredAgents.map(agent => (
          <Link key={agent.id} href={`/personajes/${agent.id}`}>
            <AgentCard agent={agent} />
          </Link>
        ))}
      </div>
    </div>
  );
}