"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

export default function LayoutWrapper({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // NUEVO ESTADO

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);

  return (
    <div className="flex h-screen w-screen overflow-hidden text-white">
      
      {/* TAREA 1: HEADER MÓVIL (Visible solo en móvil) */}
      <MobileHeader toggleSidebar={toggleDrawer} />
      
      {/* TAREA 2: SIDEBAR VERTICAL (Desktop/Tablet Grande) */}
      <div 
        // Visible en LG, flex-shrink-0 evita que se estire. lg: solo controla tamaño.
        className={`flex-shrink-0 h-full transition-all duration-300 ease-in-out lg:block ${
          isExpanded ? "lg:w-64" : "lg:w-20"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Sidebar isExpanded={isExpanded} isMobile={false} />
      </div>

      {/* TAREA 3: MAIN CONTENT (Añadir Padding para el Header Móvil) */}
      <main className="flex-1 h-full overflow-y-auto relative pt-16 lg:pt-0"> {/* pt-16 para Header Móvil */}
        <div className="w-full h-full relative z-10">
          {children}
        </div>
      </main>

      {/* TAREA 4: SIDEBAR DRAWER (Móvil - Fixed/Overlay) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-[90] transition-transform duration-300 lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isExpanded={true} isMobile={true} toggleDrawer={toggleDrawer} />
      </div>

      {/* Overlay Oscuro para Móvil */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[80] lg:hidden"
          onClick={toggleDrawer}
        />
      )}

    </div>
  );
}