"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

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
      // Navbar siempre visible según solicitud del usuario
      // const currentScrollTop = mainElement.scrollTop;
      // if (currentScrollTop > lastScrollTopRef.current && currentScrollTop > 50) {
      //   setNavbarVisible(false);
      // } else if (currentScrollTop < lastScrollTopRef.current) {
      //   setNavbarVisible(true);
      // }
      // lastScrollTopRef.current = currentScrollTop;
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
    <div className="flex flex-col h-screen w-full max-w-[1920px] mx-auto overflow-hidden text-white bg-[#09090b] shadow-2xl border-x border-white/5 relative">

      {/* TAREA 1: HEADER MÓVIL (Visible solo en móvil) */}
      <MobileHeader toggleSidebar={toggleDrawer} />

      {/* TAREA 2: TOP NAVBAR (Desktop only) */}
      <TopNavbar isVisible={navbarVisible} />

      {/* TAREA 3: MAIN CONTENT */}
      {/* We add lg:pt-0 to account for the fixed TopNavbar height via padding in Sidebar or similar if needed, here relative with sidebar padding */}
      <main
        ref={mainRef}
        className="flex-1 w-full h-full overflow-y-auto relative pt-16 lg:pt-0 lg:pl-56 scroll-smooth"
      >
        <div className="w-full min-h-full relative z-10 flex flex-col">
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
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
