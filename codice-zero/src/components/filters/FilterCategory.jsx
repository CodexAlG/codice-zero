"use client";
import { useState } from "react";

const FilterCategory = ({ title, children, isFullWidth = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex flex-col gap-2 w-full md:w-auto ${isFullWidth ? 'md:w-full' : ''}`}>
            {/* Título / Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full md:w-auto gap-2 group focus:outline-none touch-manipulation"
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
            <div
                className={`
          overflow-hidden transition-[max-height,opacity] duration-300 ease-out origin-top
          ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}
          md:block
        `}
                style={{ willChange: "max-height, opacity" }}
            >
                {/* Contenedor interno optimizado: quitamos sombras pesadas o bordes complejos si causan lag, mantenemos el estilo pero 'will-change' ayuda */}
                <div className="flex flex-wrap items-center gap-1 p-2 bg-black/40 border border-white/5 rounded-lg shadow-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FilterCategory;
