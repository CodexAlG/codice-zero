"use client";
import React, { memo } from "react";
import Image from "next/image";

const FilterIcon = memo(({ name, icon, activeFilters, toggleFilter, size = 24 }) => {
    const isActive = activeFilters.includes(name);

    return (
        <button
            onClick={() => toggleFilter(name)}
            className={`relative group transition-all duration-200 ${isActive ? "scale-110 z-10" : "scale-100 opacity-60 hover:opacity-100 hover:scale-105"
                }`}
            title={name}
            aria-label={`Filtrar por ${name}`}
        >
            {/* Glow Effect (Active) - Optimizado: Solo mostrar si activo */}
            {isActive && (
                <div className="absolute inset-0 bg-white/20 blur-md rounded-full" />
            )}

            <div className={`
        relative flex items-center justify-center p-1.5 rounded-full border transition-all
        ${isActive
                    ? "bg-white/10 border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    : "bg-transparent border-transparent"
                }
      `}>
                <Image
                    src={icon}
                    alt={name}
                    width={size}
                    height={size}
                    className={`transition-all duration-200 ${isActive ? "brightness-125 drop-shadow-md" : ""}`}
                    unoptimized
                />
            </div>
        </button>
    );
}, (prevProps, nextProps) => {
    // Custom memo comparison for performance
    const prevActive = prevProps.activeFilters.includes(prevProps.name);
    const nextActive = nextProps.activeFilters.includes(nextProps.name);
    // Only re-render if active state changes OR if icon/size props change (unlikely)
    return prevActive === nextActive && prevProps.icon === nextProps.icon && prevProps.size === nextProps.size;
});

export default FilterIcon;
