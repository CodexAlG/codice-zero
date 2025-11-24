"use client";
import { useState, use } from "react"; // Importar 'use'
import Image from "next/image";
import Link from "next/link";
import { weapons } from "@/data/weapons"; // Usamos la base de datos única
import { ArrowLeft, TriangleAlert } from "lucide-react"; // O tu icono de regreso

// Helper para normalizar strings
const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

export default function WeaponDetail({ params }) {
  // Desempaquetar params de forma segura (compatible con Next.js 13/14/15)
  // Si params es una promesa (Next.js 15), usa 'use'. Si es objeto, úsalo directo.
  const unwrappedParams = params instanceof Promise ? use(params) : params;
  const id = Number(unwrappedParams.id);

  // Buscar el arma
  const weapon = weapons.find((w) => w.id === id);

  // Debugging (Ver en consola del navegador)
  console.log("ID buscado:", id);
  console.log("Arma encontrada:", weapon);

  // Estados para sliders
  const [level, setLevel] = useState(60); // Slider Nivel
  const [refinement, setRefinement] = useState(1); // Slider Refinamiento (1-5)

  if (!weapon) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-display text-red-400 mb-4">Arma no encontrada</h1>
        <Link href="/armas" className="text-yellow-400 hover:text-yellow-300 transition-colors">
          ← Volver a Armas
        </Link>
      </div>
    </div>
  );

  // Helper para colores según rango 
  const rankColor = weapon.rank === 'S' ? '#eab308' : weapon.rank === 'A' ? '#a855f7' : '#3b82f6';
  const rankShadow = weapon.rank === 'S' ? 'shadow-yellow-500/50' : weapon.rank === 'A' ? 'shadow-purple-500/50' : 'shadow-blue-500/50';

  // Helper: Calcular valores dinámicos 
  const getDynamicDescription = () => {
    if (!weapon.effect?.refinements) return weapon.effect || "";

    const baseRef = weapon.effect.refinements[0]; // Nivel 1
    const currentRef = weapon.effect.refinements[refinement - 1]; // Nivel Actual

    let desc = weapon.effect.description;

    // Reemplazo de VALORES DINÁMICOS
    Object.keys(baseRef).forEach(key => {
      if (key === 'level') return;

      const baseVal = String(baseRef[key]); // Asegurar string "12%"
      const currentVal = String(currentRef[key]); // "24%"

      // Escapar caracteres especiales (como el % o +) para la Regex
      const escapedBaseVal = baseVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      // Regex: Busca el valor base pero asegura que no sea parte de otro número mayor
      // (Ej: Evita cambiar "1" dentro de "100")
      // Usamos límites de palabra (\b) o validación simple si tiene símbolos
      const regex = new RegExp(escapedBaseVal, 'g');

      // Reemplazamos por el span verde
      desc = desc.replace(regex, `<span class="text-emerald-400 font-bold text-lg">${currentVal}</span>`);
    });

    return <div className="text-sm md:text-base leading-7 text-gray-400" dangerouslySetInnerHTML={{ __html: desc }} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      {/* Botón Volver Flotante */}
      <Link href="/armas" className="absolute top-8 left-8 z-50 inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors group">
        <ArrowLeft className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold text-lg">Volver al Armamento</span>
      </Link>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 min-h-screen items-center p-8">

        {/* COLUMNA IZQUIERDA: IMAGEN HERO */}
        <div className="relative aspect-square flex items-center justify-center">
          {/* Fondo de aura sutil */}
          <div className={`absolute inset-0 bg-[${rankColor}] opacity-10 blur-[100px] rounded-full pointer-events-none`}></div>
          <Image
            src={weapon.image}
            alt={weapon.name}
            fill
            className="object-contain drop-shadow-2xl z-10"
            sizes="(max-width: 400px) 50vw, 400px"
            unoptimized
          />
          {/* Icono de Rango Flotante */}
          <Image
            src={`/CodiceZero/Rango/Icon_Item_Rank_${weapon.rank}.webp`}
            alt={weapon.rank}
            width={80}
            height={80}
            className="absolute top-0 right-0 drop-shadow-lg"
          />
        </div>

        {/* COLUMNA DERECHA: INFORMACIÓN UNIFICADA */}
        <div className="flex flex-col justify-center space-y-10 w-full">

          {/* 1. Header Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full border border-white/10">
                <Image src={`/CodiceZero/Agentes/Rol/${normalize(weapon.rol)}.webp`} alt={weapon.rol} width={16} height={16} className="invert" />
                <span className="text-xs font-bold uppercase">{weapon.rol}</span>
              </div>
              <span className="text-xs font-mono text-gray-500">W-ENGINE</span>

              {/* Chip Advertencia Beta */}
              {weapon.leak && weapon.leak.includes("Beta") && (
                <div className="flex items-center gap-2 bg-red-500/20 px-4 py-1 rounded border border-red-500/50 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-red-400 uppercase text-xs">BETA</span>
                </div>
              )}
            </div>
            <h1 className="text-5xl font-display font-black italic text-white leading-none mb-1">
              {weapon.name}
            </h1>

            {/* Advertencia de Beta Texto Completo */}
            {weapon.leak && weapon.leak.includes("Beta") && (
              <div className="mt-4 w-full p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3 text-yellow-500">
                <TriangleAlert className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium leading-relaxed text-left">
                  Este arma se encuentra en fase Beta. Sus estadísticas y efectos están sujetos a cambios antes del lanzamiento oficial.
                </p>
              </div>
            )}
          </div>

          {/* 2. Panel de Stats (Expandido) */}
          <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden w-full">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-mono text-gray-400">
                <span>Nivel {level}</span>
                <span>MAX 60</span>
              </div>
              {/* Slider Horizontal */}
              <input
                type="range"
                min="1"
                max="60"
                value={level}
                onChange={(e) => setLevel(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex gap-12 mt-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Ataque Base</p>
                  <span className="text-3xl font-mono font-bold text-white">
                    {/* Cálculo simple de progresión visual */}
                    {weapon.detailStats
                      ? Math.floor(weapon.detailStats.baseAtk.min + ((weapon.detailStats.baseAtk.max - weapon.detailStats.baseAtk.min) * (level - 1) / 59))
                      : "---"}
                  </span>
                </div>
                {/* Stat Secundario Dinámico */}
                <div>
                  <span className="text-gray-500 text-xs font-mono block mb-1 uppercase">
                    {weapon.detailStats?.subStat.name || weapon.stats.main}
                  </span>
                  <p className="text-3xl font-bold font-mono text-white">
                    {(() => {
                      if (!weapon.detailStats) return weapon.stats.value;

                      // Extraer números (ej. "9.6%" -> 9.6)
                      const minVal = parseFloat(weapon.detailStats.subStat.min);
                      const maxVal = parseFloat(weapon.detailStats.subStat.max);

                      // Calcular valor actual
                      const currentVal = minVal + ((maxVal - minVal) * (level - 1) / 59);

                      // Formatear (Si tenía %, se lo volvemos a poner)
                      const isPercent = weapon.detailStats.subStat.min.includes("%");
                      return isPercent ? `${currentVal.toFixed(1)}%` : Math.floor(currentVal);
                    })()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Efecto Pasivo (Expandido) */}
          <div className="pt-4 border-t border-white/10 w-full">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-xl text-yellow-400 font-display italic">{weapon.effect?.title || "Pasiva"}</h3>

              {/* Slider Refinamiento */}
              <div className="flex flex-col items-end w-32">
                <span className="text-xs font-mono text-yellow-400 mb-1">Refinamiento {refinement}</span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={refinement}
                  onChange={(e) => setRefinement(Number(e.target.value))}
                  className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
                <div className="flex justify-between w-full text-[10px] text-gray-600 mt-1 font-mono">
                  <span>1</span><span>5</span>
                </div>
              </div>
            </div>

            {/* Descripción Dinámica */}
            <div className="text-lg text-gray-300 leading-relaxed">
              {getDynamicDescription()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}