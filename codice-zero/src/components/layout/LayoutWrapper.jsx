"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function LayoutWrapper({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden text-white">
      
      {/* Sidebar */}
      <Sidebar 
        isExpanded={isExpanded} 
        setIsExpanded={setIsExpanded} 
      />
      
      {/* Contenido con margen fijo, no se empuja */}
      <main 
        className={`flex-1 h-full overflow-y-auto overflow-x-hidden relative transition-all duration-300 ease-in-out ${
          isExpanded ? "pl-64" : "pl-20"
        }`}
      >
        {/* Capa oscura opcional cuando el menú se abre */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsExpanded(false)}
        />
        <div className="w-full h-full relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}