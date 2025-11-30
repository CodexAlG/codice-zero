"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

export default function LayoutWrapper({ children }) {
  // Removed isExpanded state as sidebar is now static
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);

  // Verificar si estamos en la ruta de detalles de materiales
  const isMaterialDetail = pathname?.startsWith("/materiales");

  if (isMaterialDetail) {
    return (
      <div className="h-screen w-screen overflow-hidden bg-black text-white">
        {children}
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden text-white">

      {/* TAREA 1: HEADER MÓVIL (Visible solo en móvil) */}
      <MobileHeader toggleSidebar={toggleDrawer} />

      {/* TAREA 2: SIDEBAR VERTICAL (Desktop/Tablet Grande) */}
      <div
        // Fixed width, no hover expansion
        className="hidden lg:block lg:flex-shrink-0 h-full lg:w-48 transition-all duration-300 ease-in-out"
      >
        {/* Always expanded in desktop */}
        <Sidebar isExpanded={true} isMobile={false} />
      </div>

      {/* TAREA 3: MAIN CONTENT (Añadir Padding para el Header Móvil) */}
      <main className="flex-1 h-full overflow-y-auto relative pt-16 lg:pt-0"> {/* pt-16 para Header Móvil */}
        <div className="w-full h-full relative z-10">
          {children}
        </div>
      </main>

      {/* TAREA 4: SIDEBAR DRAWER (Móvil - Fixed/Overlay) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-[90] transition-transform duration-300 lg:hidden ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
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