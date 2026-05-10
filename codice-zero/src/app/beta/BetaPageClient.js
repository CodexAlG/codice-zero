'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { agents } from '@/data/agents';
import { weapons } from '@/data/weapons';
import { driveDiscs } from '@/data/discs';
import { getAgentVersions } from '@/data/versionedAgentData';
import { getWeaponVersions, versionedWeapons } from '@/data/versionedWeaponData';
import AgentCard from '@/components/agents/AgentCard';
import WeaponCard from '@/components/weapons/WeaponCard';
import DiscCard from '@/components/discs/DiscCard';

const getAgentBetaVersion = (agentId) => {
    const versions = getAgentVersions(agentId);
    if (!versions || versions.length === 0) return "Nuevo";
    return versions[versions.length - 1];
};

const getWeaponBetaVersion = (weaponId) => {
    const versions = getWeaponVersions(weaponId);
    if (!versions || versions.length === 0) return "Nuevo";
    const latestVersion = versions[versions.length - 1];
    
    const weaponData = versionedWeapons[weaponId];
    if (weaponData && weaponData.versions && weaponData.versions[latestVersion]) {
        const hotfixes = weaponData.versions[latestVersion].hotfixes;
        if (hotfixes && hotfixes.length > 0) {
            return `${latestVersion} HF${hotfixes.length}`;
        }
    }
    return latestVersion;
};

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
            {betaAgents.map(agent => {
              const version = getAgentBetaVersion(agent.id);
              return (
              <div key={agent.id} className="w-[140px] flex flex-col gap-3">
                <AgentCard agent={agent} />
                <div className="text-center text-[10px] font-black text-gray-400 bg-white/5 rounded py-1 uppercase tracking-widest border border-white/5 shadow-inner">
                    {version}
                </div>
                <Link 
                  href={`/${language}/beta/agentes/${agent.id}`}
                  className="w-full text-center py-2 px-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:text-yellow-400 text-xs font-bold rounded-lg transition-all duration-300"
                >
                  VER CAMBIOS
                </Link>
              </div>
            )})}
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
            {betaWeapons.map(weapon => {
              const version = getWeaponBetaVersion(weapon.id);
              return (
              <div key={weapon.id || weapon.name} className="w-[160px] flex flex-col gap-3">
                <WeaponCard weapon={weapon} />
                <div className="text-center text-[10px] font-black text-gray-400 bg-white/5 rounded py-1 uppercase tracking-widest border border-white/5 shadow-inner">
                    {version}
                </div>
                <Link 
                  href={`/${language}/beta/armas/${weapon.id}`}
                  className="w-full text-center py-2 px-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 hover:border-yellow-500 text-yellow-500 hover:text-yellow-400 text-xs font-bold rounded-lg transition-all duration-300"
                >
                  VER CAMBIOS
                </Link>
              </div>
            )})}
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
                <DiscCard disc={disc} minimal={true} />
                <div className="text-center text-[10px] font-black text-gray-400 bg-white/5 rounded py-1 uppercase tracking-widest border border-white/5 shadow-inner">
                    v3.0.2
                </div>
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
