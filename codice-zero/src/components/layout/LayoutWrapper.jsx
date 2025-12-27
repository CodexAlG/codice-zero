"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import TopNavbar from "./TopNavbar";

export default function LayoutWrapper({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const mainRef = useRef(null);
  const lastScrollTopRef = useRef(0);
  const pathname = usePathname();

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);

  // Verificar si estamos en la ruta de detalles de materiales
  const isMaterialDetail = pathname?.startsWith("/materiales");

  // Reset navbar visibility when changing routes
  useEffect(() => {
    setNavbarVisible(true);
  }, [pathname]);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const handleScroll = () => {
      const currentScrollTop = mainElement.scrollTop;

      // If scrolling down and past a threshold (e.g. 50px), hide navbar
      if (currentScrollTop > lastScrollTopRef.current && currentScrollTop > 50) {
        setNavbarVisible(false);
      }
      // If scrolling up, show navbar
      else if (currentScrollTop < lastScrollTopRef.current) {
        setNavbarVisible(true);
      }

      lastScrollTopRef.current = currentScrollTop;
    };

    mainElement.addEventListener('scroll', handleScroll);

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname]);

  if (isMaterialDetail) {
    return (
      <div className="h-screen w-screen overflow-hidden bg-black text-white">
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden text-white bg-slate-950">

      {/* TAREA 1: HEADER MÓVIL (Visible solo en móvil) */}
      <MobileHeader toggleSidebar={toggleDrawer} />

      {/* TAREA 2: TOP NAVBAR (Desktop only) */}
      <TopNavbar isVisible={navbarVisible} />

      {/* TAREA 3: MAIN CONTENT */}
      {/* We add lg:pt-20 to account for the fixed TopNavbar height */}
      <main
        ref={mainRef}
        className="flex-1 w-full h-full overflow-y-auto relative pt-16 lg:pt-20 scroll-smooth"
      >
        <div className="w-full min-h-full relative z-10">
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
