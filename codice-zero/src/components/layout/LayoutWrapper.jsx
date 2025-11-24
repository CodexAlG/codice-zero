"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function LayoutWrapper({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden text-white">
      
      {/* 1. ZONA DEL SIDEBAR (Hidden en móvil, visible en LG) */}
      <div 
        className={`hidden lg:flex-shrink-0 h-full transition-all duration-300 ease-in-out ${
          isExpanded ? "lg:w-64" : "lg:w-20"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Sidebar isExpanded={isExpanded} />
      </div>

      {/* 2. ZONA DE CONTENIDO (Main) - pl-0 en móvil, pl-20/64 en LG */}
      <main 
        className={`flex-1 h-full overflow-y-auto overflow-x-hidden relative transition-all duration-300 ease-in-out ${
          isExpanded ? "lg:pl-64" : "lg:pl-20"
        } pl-0`}
      >
        {/* Capa oscura opcional cuando el menú se abre (solo en LG) */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isExpanded ? "lg:opacity-100" : "lg:opacity-0"
          } opacity-0 pointer-events-none`}
          onClick={() => setIsExpanded(false)}
        />
        <div className="w-full h-full relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}