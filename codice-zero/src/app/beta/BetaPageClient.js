'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { agents } from '@/data/agents';
import { weapons } from '@/data/weapons';
import { driveDiscs } from '@/data/discs';
import AgentCard from '@/components/agents/AgentCard';
import WeaponCard from '@/components/weapons/WeaponCard';
import DiscCard from '@/components/discs/DiscCard';

export default function BetaPageClient() {
  const { language } = useLanguage();

  const betaAgents = useMemo(() => agents.filter(a => a.leak === "Beta"), []);
  const betaWeapons = useMemo(() => weapons.filter(w => w.leak === "Beta"), []);
  const betaDiscs = useMemo(() => driveDiscs.filter(d => d.leak === "Beta"), []);

  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-3xl font-display font-bold text-yellow-500 mb-8 tracking-widest uppercase">
        Novedades Beta
      </h1>

      {/* SECTION: AGENTS */}
      {betaAgents.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-300 mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
            Agentes
          </h2>
          <div className="flex flex-wrap gap-4">
            {betaAgents.map(agent => (
              <div key={agent.id} className="w-[140px] flex flex-col gap-3">
                <AgentCard agent={agent} />
                <Link 
                  href={`/${language}/beta/agentes/${agent.id}`}
                  className="w-full text-center py-2 px-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:text-yellow-400 text-xs font-bold rounded-lg transition-all duration-300"
                >
                  VER CAMBIOS
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: WEAPONS */}
      {betaWeapons.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-300 mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
            Armas
          </h2>
          <div className="flex flex-wrap gap-4">
            {betaWeapons.map(weapon => (
              <div key={weapon.id || weapon.name} className="w-[160px] flex flex-col gap-3">
                <WeaponCard weapon={weapon} />
                <Link 
                  href={`/${language}/beta/armas/${weapon.id}`}
                  className="w-full text-center py-2 px-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:text-yellow-400 text-xs font-bold rounded-lg transition-all duration-300"
                >
                  VER CAMBIOS
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: DISCS */}
      {betaDiscs.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-300 mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>
            Discos
          </h2>
          <div className="flex flex-wrap gap-4">
            {betaDiscs.map(disc => (
              <div key={disc.id} className="w-[160px] flex flex-col gap-3">
                <DiscCard disc={disc} />
                <Link 
                  href={`/${language}/beta/discos/${disc.id}`}
                  className="w-full text-center py-2 px-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:text-yellow-400 text-xs font-bold rounded-lg transition-all duration-300"
                >
                  VER CAMBIOS
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {betaAgents.length === 0 && betaWeapons.length === 0 && betaDiscs.length === 0 && (
        <div className="text-gray-500 italic">No hay novedades beta en este momento.</div>
      )}
    </div>
  );
}
