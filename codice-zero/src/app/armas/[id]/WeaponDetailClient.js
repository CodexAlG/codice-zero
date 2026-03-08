"use client";
import { useState, use } from "react";
import Image from "next/image";
import HighlightText from "@/components/ui/HighlightText";
import Link from "next/link";
import { weapons } from "@/data/weapons";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import WeaponAscensionMaterials from "@/components/weapons/WeaponAscensionMaterials";
const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

export default function WeaponDetailClient({ params }) {
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

        // PASO 1: Crear un mapa de reemplazos (baseVal -> placeholder -> currentVal)
        const replacements = [];
        Object.keys(baseRef).forEach((key, index) => {
            if (key === 'level') return;

            const baseVal = String(baseRef[key]);
            const currentVal = String(currentRef[key]);
            const placeholder = `__PLACEHOLDER_${index}__`;

            replacements.push({ baseVal, currentVal, placeholder });
        });

        // PASO 2: Reemplazar valores base por placeholders (evita conflictos)
        replacements.forEach(({ baseVal, placeholder }) => {
            const escapedBaseVal = baseVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(?<!\\d)${escapedBaseVal}(?!\\d)`); // Sin flag 'g' para reemplazar solo la primera ocurrencia por key
            desc = desc.replace(regex, placeholder);
        });

        // PASO 3: Reemplazar placeholders por valores actuales con estilo
        replacements.forEach(({ placeholder, currentVal }) => {
            const regex = new RegExp(placeholder, 'g');
            desc = desc.replace(regex, `<span class="text-emerald-400 font-bold text-lg">${currentVal}</span>`);
        });

        return (
            <div className="text-sm md:text-base leading-7 text-gray-400">
                <HighlightText text={desc} />
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#0f0f12] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/20 via-[#0f0f12] to-black relative overflow-hidden font-sans">
            {/* Decoración de fondo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>

            {/* Botón Volver Flotante */}
            <Link href="/armas" className="absolute top-8 left-8 z-50 inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors group bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 hover:border-yellow-500/30 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold text-sm tracking-widest uppercase">Volver al Armamento</span>
            </Link>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 min-h-screen items-center p-8">

                {/* COLUMNA IZQUIERDA: IMAGEN HERO + MATERIALES */}
                <div className="flex flex-col items-center justify-center space-y-8 relative z-10 w-full">
                    <div className="relative aspect-square flex items-center justify-center w-full max-w-[400px] mx-auto group">

                        <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700">
                            <Image
                                src={weapon.image}
                                alt={weapon.name}
                                fill
                                className="object-contain z-10"
                                sizes="(max-width: 768px) 80vw, 400px"
                                unoptimized
                            />
                        </div>
                        <div className="absolute top-4 right-4 z-20 w-20 h-20 p-2 rounded-full group-hover:scale-110 transition-transform duration-500 overflow-hidden flex justify-center items-center will-change-transform">

                            <Image
                                src={`/CodiceZero/Rango/Icon_Item_Rank_${weapon.rank}.webp`}
                                alt={weapon.rank}
                                width={60}
                                height={60}
                                className="drop-shadow-lg relative z-10"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Materiales de Ascensión (Desktop: Columna Izquierda) */}
                    <div className="w-full max-w-md hidden lg:block">
                        <WeaponAscensionMaterials level={level} weaponRole={weapon.rol} themeColor={rankColor} />
                    </div>
                </div>

                {/* COLUMNA DERECHA: INFORMACIÓN UNIFICADA */}
                <div className="flex flex-col justify-center space-y-10 w-full relative z-10">

                    {/* 1. Header Info */}
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                <Image src={`/CodiceZero/Agentes/Rol/${normalize(weapon.rol)}.webp`} alt={weapon.rol} width={16} height={16} className="invert opacity-90" unoptimized />
                                <span className="text-xs font-black tracking-widest text-gray-300 uppercase">{weapon.rol}</span>
                            </div>
                            <span className="text-xs font-mono font-bold tracking-widest text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">W-ENGINE</span>

                            {/* Chip Agente Exclusivo */}
                            {weapon.exclusiveAgent && (
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 rounded-full border border-yellow-500/30 backdrop-blur-md">
                                    <Image
                                        src={weapon.exclusiveAgent.icon}
                                        alt={weapon.exclusiveAgent.name}
                                        width={20}
                                        height={20}
                                        className="rounded-full"
                                        unoptimized
                                    />
                                    <span className="text-[10px] font-black tracking-widest text-yellow-400 uppercase">{weapon.exclusiveAgent.name}</span>
                                </div>
                            )}

                            {/* Chip Advertencia Beta */}
                            {weapon.leak && weapon.leak.includes("Beta") && (
                                <div className="flex items-center gap-2 bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                    <svg className="w-3.5 h-3.5 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-black text-red-400 tracking-widest uppercase text-[10px]">BETA</span>
                                </div>
                            )}
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-none mb-2 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] tracking-tight pr-4">
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

                    {/* 2. Panel de Stats (Premium Glassmorphism) */}
                    <div className="bg-black/40 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden w-full group">
                        {/* Highlights de fondo */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between text-xs font-black tracking-widest text-gray-400 uppercase">
                                <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Nivel {level}</span>
                                <span className="text-yellow-500 shadow-yellow-500/50">MAX 60</span>
                            </div>

                            {/* Slider Horizontal Premium */}
                            <div className="relative group/slider py-2">
                                <div className="absolute inset-0 bg-yellow-500/20 blur-md rounded-full scale-y-150 opacity-0 group-hover/slider:opacity-100 transition-opacity"></div>
                                <input
                                    type="range"
                                    min="1"
                                    max="60"
                                    value={level}
                                    onChange={(e) => setLevel(Number(e.target.value))}
                                    className="relative z-10 w-full h-1.5 bg-gray-800/80 rounded-full appearance-none outline-none focus:outline-none focus:ring-4 focus:ring-white/10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,255,255,0.8)] [&::-webkit-slider-thumb]:cursor-grab"
                                />
                            </div>
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

                    {/* Materiales de Ascensión (Móvil: Debajo de Stats, Arriba de Pasiva) */}
                    <div className="lg:hidden w-full">
                        <WeaponAscensionMaterials level={level} weaponRole={weapon.rol} themeColor={rankColor} />
                    </div>

                    {/* 3. Efecto Pasivo (Premium) */}
                    <div className="pt-8 border-t border-white/10 w-full relative">
                        <div className="absolute font-display font-black text-9xl text-white/5 right-0 top-6 select-none pointer-events-none italic tracking-tighter">PASSIVE</div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 relative z-10">
                            <h3 className="text-2xl text-yellow-500 font-display font-black italic drop-shadow-[0_0_15px_rgba(234,179,8,0.4)] tracking-wide relative inline-block">
                                {weapon.effect?.title || "Pasiva"}
                                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                            </h3>

                            {/* Slider Refinamiento Premium */}
                            <div className="flex flex-col items-start md:items-end w-40 bg-black/40 p-3 rounded-xl border border-white/5 backdrop-blur-md">
                                <span className="text-[10px] font-black tracking-widest uppercase text-yellow-500 mb-2 font-mono">Refinamiento {refinement}</span>
                                <div className="w-full relative group/refslider">
                                    <input
                                        type="range"
                                        min="1"
                                        max="5"
                                        step="1"
                                        value={refinement}
                                        onChange={(e) => setRefinement(Number(e.target.value))}
                                        className="relative z-10 w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-yellow-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                                    />
                                    <div className="absolute inset-0 bg-yellow-500/20 blur-md rounded-full scale-y-150 opacity-0 group-hover/refslider:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="flex justify-between w-full text-[9px] text-gray-500 mt-1 font-mono font-bold">
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
