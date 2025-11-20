'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { agents } from '@/data/agents';
import { agentDetails } from '@/data/agentDetails';
import { calculateStat, calculateStatsWithCore } from '@/utils/statCalculator';
import SkillsModule from '@/components/agents/SkillsModule';

export default function AgentDetailPage() {
  const params = useParams();
  const agentId = parseInt(params.id);
  
  // Definir los niveles escalonados
  const LEVELS = [1, 10, 20, 30, 40, 50, 60];
  const [levelIndex, setLevelIndex] = useState(6); // 6 es el índice de "60"
  const level = LEVELS[levelIndex];
  
  // Función para limpiar texto (quitar tildes y mayúsculas)
  const normalize = (str) => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
  
  // Buscar agente básico (Fix: convertir params.id a Número)
  const agent = agents.find(a => a.id === Number(params.id));
  const details = agentDetails[Number(params.id)];
  
  // Calcular stats con Core
  const currentStats = details ? calculateStatsWithCore(details.baseStats, level, details.coreStats) : {};

  // Mapa de colores por elemento
  const elementColors = {
    "fuego": "#ef4444",    // Rojo
    "hielo": "#22d3ee",    // Cian
    "electrico": "#3b82f6", // Azul Puro
    "fisico": "#eab308",   // Amarillo Dorado
    "etereo": "#d946ef",   // Rosa/Magenta
  };

  // Lógica para determinar el icono del elemento
  let elementIconPath = "";
  
  if (agent?.name?.includes("Miyabi")) {
     elementIconPath = "/CodiceZero/Agentes/Elemento/Icon_Frost.png";
  } else if (agent?.name?.includes("Yixuan")) {
     elementIconPath = "/CodiceZero/Agentes/Elemento/Icon_Auric_Ink.webp";
  } else {
     const iconMap = {
       "fuego": "Fuego.webp",
       "hielo": "Hielo.webp",
       "electrico": "Electrico.webp",
       "fisico": "Fisico.webp",
       "etereo": "Etéreo.webp" // Nombre exacto del archivo
     };
     elementIconPath = `/CodiceZero/Agentes/Elemento/${iconMap[normalize(agent?.element)] || "Fisico.webp"}`;
  }

  // Mapa de iconos de discos
  const discIcons = {
    "Flor del Alba": "/CodiceZero/Discos/Drive_Disc_Dawn's_Bloom.webp",
    "Jazz Caótico": "/CodiceZero/Discos/Drive_Disc_Chaos_Jazz.webp",
    "Proto Punk": "/CodiceZero/Discos/Drive_Disc_Proto_Punk.webp",
    "Canción de Rama y Hoja": "/CodiceZero/Discos/Drive_Disc_Branch_&_Blade_Song.webp",
    "Metal Inferno": "/CodiceZero/Discos/Drive_Disc_Inferno_Metal.webp",
    "Metal Polar": "/CodiceZero/Discos/Drive_Disc_Polar_Metal.webp",
    "Metal Trueno": "/CodiceZero/Discos/Drive_Disc_Thunder_Metal.webp",
    "Metal Caótico": "/CodiceZero/Discos/Drive_Disc_Chaotic_Metal.webp",
    "Metal Colmillo": "/CodiceZero/Discos/Drive_Disc_Fanged_Metal.webp",
    "Pájaro Carpintero": "/CodiceZero/Discos/Drive_Disc_Woodpecker_Electro.webp",
    "Punk Hormonal": "/CodiceZero/Discos/Drive_Disc_Hormone_Punk.webp",
    "Jazz Swing": "/CodiceZero/Discos/Drive_Disc_Swing_Jazz.webp",
    "Disco de Choque": "/CodiceZero/Discos/Drive_Disc_Shockstar_Disco.webp",
    "Blues de la Libertad": "/CodiceZero/Discos/Drive_Disc_Freedom_Blues.webp",
    "Electro Puffer": "/CodiceZero/Discos/Drive_Disc_Puffer_Electro.webp",
    "Rock del Alma": "/CodiceZero/Discos/Drive_Disc_Soul_Rock.webp",
    "Armonía de Sombras": "/CodiceZero/Discos/Drive_Disc_Shadow_Harmony.webp",
    "Nana de Luna": "/CodiceZero/Discos/Drive_Disc_Moonlight_Lullaby.webp",
    "Cuentos de Yunkui": "/CodiceZero/Discos/Drive_Disc_Yunkui_Tales.webp",
    "Voz Astral": "/CodiceZero/Discos/Astral.webp",
    "Melodía de Faetón": "/CodiceZero/Discos/Drive_Disc_Phaethon's_Melody.webp",
    "Rey de la Cima": "/CodiceZero/Discos/Drive_Disc_King_of_the_Summit.webp"
  };

  // Función helper para buscar el icono (por si el nombre en details varía un poco)
  const getDiscIcon = (name) => {
    const key = Object.keys(discIcons).find(k => name.includes(k));
    return key ? discIcons[key] : "/CodiceZero/Discos/Icon_Storage_Drive_Disc.webp"; // Placeholder
  };

  // Obtener color actual (o default cian)
  const themeColor = elementColors[normalize(agent?.element)] || "#22d3ee";

  // Componente Helper para filas limpias
  const StatRow = ({ label, value, bonus, isCoreAtk, color }) => {
    return (
      <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-1 group hover:border-white/30 transition-colors">
        <span className="text-gray-400 group-hover:text-gray-200 transition-colors">{label}</span>
        <div className="flex items-center gap-2">
          {/* Valor Base */}
          <span className={`font-bold ${isCoreAtk ? '' : 'text-white'}`} style={isCoreAtk ? { color: color } : {}}>
            {value || "-"}
          </span>
          {/* Bonus Visual (Si existe) */}
          {bonus && bonus !== "-" && (
            <span
              className="text-xs px-1 rounded border bg-black/50"
              style={{ color: color, borderColor: color }}
            >
              {bonus}
            </span>
          )}
        </div>
      </div>
    );
  };

  if (!agent) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p className="text-2xl">Agente no encontrado</p>
      </div>
    );
  }

  if (!details) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-orbitron mb-4">{agent.name}</h1>
          <p className="text-xl text-yellow-400">Próximamente</p>
        </div>
      </div>
    );
  }

  // Gradientes por elemento (Maneja ambos formatos con/sin acento)
  const elementGradients = {
    "Fuego": 'from-red-900/50 to-gray-950',
    "Hielo": 'from-cyan-900/50 to-gray-950',
    "Electrico": 'from-blue-900/50 to-gray-950',
    "Fisico": 'from-yellow-900/50 to-gray-950',
    "Etéreo": 'from-pink-900/50 to-gray-950',  // Con acento
    "Etereo": 'from-pink-900/50 to-gray-950'   // Sin acento
  };

  const gradient = elementGradients[agent.element] || 'from-gray-900 to-gray-950';

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Sección 1: Header de Identidad */}
      <div className={`bg-gradient-to-b ${gradient} p-8 relative`}>
        {/* Botón de Regreso Flotante */}
        <Link
          href="/personajes"
          className="absolute top-8 left-8 z-50 inline-flex items-center text-gray-300 hover:text-yellow-400 transition-colors group"
        >
          <ArrowLeft className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-lg shadow-black drop-shadow-md"></span>
        </Link>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen del personaje */}
          <div className="relative h-96 lg:h-[500px]">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              className="object-contain object-top"
              priority
            />
          </div>

          {/* Información del personaje */}
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-orbitron font-bold">{agent.name}</h1>
            
            {/* Bloque de Iconos de Identidad */}
            <div className="flex items-center gap-4 mt-2 mb-4">
              
              {/* 1. Rango (S/A) */}
              <div className="relative group">
                <Image
                  src={`/CodiceZero/Rango/${agent.rank}.webp`}
                  alt={`Rango ${agent.rank}`}
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-md"
                />
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Rango {agent.rank}
                </span>
              </div>

              {/* 2. Elemento */}
              <div className="relative group">
                <Image
                  src={elementIconPath}
                  alt={agent.element}
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-md"
                />
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {agent.element}
                </span>
              </div>

              {/* 3. Rol */}
              <div className="relative group">
                <Image
                  src={`/CodiceZero/Agentes/Rol/${normalize(agent.rol)}.webp`}
                  alt={agent.rol}
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-md"
                />
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {agent.rol}
                </span>
              </div>
            </div>

            <p className="text-xl text-gray-300">{agent.faction}</p>

            {/* --- PANEL DE ESTADO Y MATERIALES --- */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              
              {/* --- PANEL DE ESTADÍSTICAS (DISEÑO CLEAN HUD) --- */}
              <div className="bg-gray-950/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md max-w-3xl shadow-2xl">
                
                {/* HEADER: Título y Nivel */}
                <div className="bg-white/5 p-6 border-b border-white/5 flex justify-between items-center">
                  <div>
                    <h3 className="font-display text-xl text-white italic tracking-widest">STATS</h3>
                    <p className="text-xs text-gray-500 font-mono mt-1">CORE SKILL ENHANCEMENT</p>
                  </div>
                  
                {/* --- SLIDER DE NIVEL --- */}
                <div className="flex flex-col items-end w-1/2">
                  <div className="flex justify-between w-full text-xs font-mono mb-2 font-bold" style={{ color: themeColor }}>
                    
                    <span className="text-lg">Lv.{level}/60</span>
                  </div>
                  
                  <div className="relative w-full h-2 bg-gray-800 rounded-full">
                    {/* Barra de Progreso con Color Dinámico */}
                    <div
                      className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${(levelIndex / 6) * 100}%`,
                        backgroundColor: themeColor,
                        boxShadow: `0 0 10px ${themeColor}`
                      }}
                    />
                    
                    <input
                      type="range" min="0" max="6" step="1"
                      value={levelIndex}
                      onChange={(e) => setLevelIndex(Number(e.target.value))}
                      className="absolute top-[-10px] left-0 w-full h-6 opacity-0 cursor-pointer z-20"
                    />
                    
                    {/* Puntos de control */}
                    <div className="absolute w-full flex justify-between top-[-3px] px-0 pointer-events-none">
                      {LEVELS.map((l, i) => (
                        <div
                          key={l}
                          className={`w-4 h-4 rounded-full border-2 transition-all ${
                            i <= levelIndex ? "scale-110 bg-gray-950" : "bg-gray-800 border-gray-600"
                          }`}
                          style={i <= levelIndex ? { borderColor: themeColor, backgroundColor: themeColor } : {}}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div> {/* Cierre del Header interno */}

              {/* --- NODOS CORE (A-F) --- */}
              <div className="px-6 py-4 flex justify-between gap-2 border-b border-white/5 bg-black/20">
                {['A', 'B', 'C', 'D', 'E', 'F'].map((letter, idx) => {
                  const reqLevel = idx === 5 ? 60 : 15 + (idx * 10);
                  const isActive = level >= reqLevel;
                  
                  return (
                    <div
                      key={letter}
                      className={`flex-1 h-10 flex items-center justify-center rounded skew-x-[-10deg] font-display font-bold text-lg transition-all duration-300 border
                        ${isActive ? "" : "bg-gray-900/50 text-gray-700 border-gray-800"}
                      `}
                      // AQUI ESTA LA MAGIA: Aplicamos el color directo al estilo
                      style={isActive ? {
                        borderColor: themeColor,      // Borde del color
                        color: themeColor,            // Texto del color
                        backgroundColor: `${themeColor}20`, // Fondo al 20% de opacidad (Truco Hex)
                        boxShadow: `0 0 15px ${themeColor}40` // Brillo
                      } : {}}
                    >
                      <span className="skew-x-[10deg]">{letter}</span>
                    </div>
                  );
                })}
              </div>

                {/* DATA GRID (TABLA) */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 font-mono text-sm">
                  
                  <StatRow label="PV Base" value={currentStats.hp} color={themeColor} />
                  <StatRow label="Ataque Base" value={currentStats.atk} isCoreAtk={level >= 25} color={themeColor} />
                  <StatRow label="Defensa Base" value={currentStats.def} color={themeColor} />
                  <StatRow label="Impacto Base" value={currentStats.impact} color={themeColor} />
                  
                  <StatRow
                    label="Prob. Crítico"
                    value={details?.baseStats?.crit}
                    bonus={currentStats.specialStatName?.includes("Crit Rate") || currentStats.specialStatName?.includes("Crítico") ? currentStats.specialStatValue : null}
                    color={themeColor}
                  />
                  <StatRow
                    label="Daño Crítico"
                    value={details?.baseStats?.critDmg}
                    bonus={currentStats.specialStatName?.includes("Crit Dmg") ? currentStats.specialStatValue : null}
                    color={themeColor}
                  />
                  
                  <StatRow
                    label="Tasa de Anomalía"
                    value={details?.baseStats?.anomalyRate}
                    bonus={currentStats.specialStatName?.includes("Anomalía") ? currentStats.specialStatValue : null}
                    color={themeColor}
                  />
                  <StatRow
                    label="Maestría Anomalía"
                    value={details?.baseStats?.anomalyMastery}
                    bonus={currentStats.specialStatName?.includes("Maestría") ? currentStats.specialStatValue : null}
                    color={themeColor}
                  />
                  
                  <StatRow label="Tasa Perforación" value={details?.baseStats?.penRatio} color={themeColor} />
                  <StatRow
                    label="Recup. Energía"
                    value={details?.baseStats?.energyRegen}
                    // Detectar si el stat especial es de Energía
                    bonus={currentStats.specialStatName?.includes("Energía") ? currentStats.specialStatValue : null}
                    color={themeColor}
                  />

                </div>
              </div>

              {/* 2. Materiales de Ascensión (Estilo Lista) */}
              <div className="bg-black/40 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-yellow-400 font-display text-sm mb-3 uppercase tracking-wider flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Materiales
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Promoción:</p>
                    <div className="flex flex-wrap gap-1">
                      {details?.materials?.promotion?.map((mat, idx) => (
                        <span key={idx} className="bg-gray-700/50 px-2 py-1 rounded text-xs">
                          {mat}
                        </span>
                      )) || <span className="text-gray-500">Unknown</span>}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Habilidades:</p>
                    <div className="flex flex-wrap gap-1">
                      {details?.materials?.skill?.map((mat, idx) => (
                        <span key={idx} className="bg-gray-700/50 px-2 py-1 rounded text-xs">
                          {mat}
                        </span>
                      )) || <span className="text-gray-500">Unknown</span>}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Boss:</p>
                    <span className="text-white text-xs">{details?.materials?.boss || "Unknown"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 2: Panel Táctico */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Columna 1: Armas */}
        <div className="bg-gray-900 border border-white/10 rounded-md p-6">
          <h2 className="text-2xl font-orbitron text-yellow-400 mb-4">Armas Recomendadas</h2>
          <div className="space-y-4">
            {details.build.weapons.map((weapon, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-md border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <Image src={weapon.image} alt={weapon.name} width={40} height={40} />
                  <div>
                    <h3 className="font-bold">{weapon.name}</h3>
                    <p className="text-sm text-gray-400">Rango {weapon.rank}</p>
                  </div>
                </div>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                  {weapon.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- INICIO BLOQUE DISCOS Y STATS MODULAR --- */}
        <div className="bg-gray-900/60 p-5 rounded-xl border border-white/10 shadow-lg">
          <h3 className="text-xl font-display text-yellow-400 mb-4 uppercase">Discos y Stats</h3>
          
          {/* 1. Sets Recomendados (Con Iconos) */}
          <div className="space-y-4 pb-4 border-b border-white/10">
            <h4 className="text-xs text-gray-500 font-mono uppercase mb-3">Sets Recomendados</h4>
            
            {/* Set 4-Piece */}
            <div className="flex items-start gap-3">
              <Image src={getDiscIcon(details?.build?.discs?.set4?.name)} alt="4pc" width={48} height={48} className="rounded-full object-cover shadow-xl" />
              <div className="flex-1">
                <span className="text-sm font-bold text-cyan-400 mr-2">4 Piezas</span>
                <span className="text-gray-300">{details?.build?.discs?.set4?.name}</span>
                <p className="text-xs text-gray-500 mt-1">{details?.build?.discs?.set4?.desc}</p>
              </div>
            </div>

            {/* Set 2-Piece */}
            <div className="flex items-start gap-3">
              <Image src={getDiscIcon(details?.build?.discs?.set2?.name)} alt="2pc" width={48} height={48} className="rounded-full object-cover shadow-xl" />
              <div className="flex-1">
                <span className="text-sm font-bold text-pink-400 mr-2">2 Piezas</span>
                <span className="text-gray-300">{details?.build?.discs?.set2?.name}</span>
                <p className="text-xs text-gray-500 mt-1">{details?.build?.discs?.set2?.desc}</p>
              </div>
            </div>
          </div>

          {/* 2. Stats Principales y Sub-Stats */}

          {/* Stats Principales (Grid: Slot/Value) */}
          <div className="grid grid-cols-2 gap-y-1 mb-4 font-mono">
            {Object.entries(details?.build?.mainStats || {}).map(([slot, stat]) => (
              <div key={slot} className="flex justify-between items-center text-sm border-b border-dashed border-white/5 pb-1">
                <span className="text-yellow-400">{slot}</span>
                <span className="text-white">{stat}</span>
              </div>
            ))}
          </div>

          {/* Prioridad Sub-Stats (Chips) */}
          <h5 className="text-xs text-gray-500 font-mono uppercase mb-2 mt-4">Prioridad Sub-Stats</h5>
          <div className="flex flex-wrap gap-2">
            {(details?.build?.subStats || []).map((stat, index) => (
              <span key={index} className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-xs font-mono rounded-full border border-yellow-600/50">
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Columna 3: Equipos */}
        <div className="bg-gray-900 border border-white/10 rounded-md p-6">
          <h2 className="text-2xl font-orbitron text-yellow-400 mb-4">Equipos Sugeridos</h2>
          <div className="space-y-4">
            {details.teams.map((team, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-md border border-white/5">
                <h3 className="font-bold text-lg mb-3">{team.title}</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Miembros:</p>
                    <div className="flex flex-wrap gap-2">
                      {team.members.map((member, idx) => (
                        <span key={idx} className="bg-gray-700 px-2 py-1 rounded text-sm">
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Bangboo: <span className="text-white">{team.bangboo}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: HABILIDADES */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-orbitron text-yellow-400 mb-6">Habilidades</h2>
        <SkillsModule skills={details?.skills} color={themeColor} />
      </div>
    </div>
  );
}
