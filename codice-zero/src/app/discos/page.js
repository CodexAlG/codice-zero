"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightText from "@/components/ui/HighlightText";
import { driveDiscs } from "@/data/discs";
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import DiscCard from '@/components/discs/DiscCard';

export default function DiscsPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Lógica de tiempo de gracia con sessionStorage
  const GRACE_PERIOD = 300000; // 5 minutos en milisegundos

  useEffect(() => {
    const lastLoadTime = sessionStorage.getItem('lastLoadTime');
    const currentTime = new Date().getTime();

    // Comprobar si el tiempo de gracia ha expirado (o si es la primera vez)
    if (!lastLoadTime || (currentTime - lastLoadTime) > GRACE_PERIOD) {
      // Mostrar spinner solo la primera vez o si el tiempo expiró
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Actualizar el timestamp
        sessionStorage.setItem('lastLoadTime', new Date().getTime());
      }, 500); // 500ms de carga mínima simulada
      
      return () => clearTimeout(timer);
    } else {
      // Si está dentro del tiempo de gracia, cargamos al instante
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      
      {/* Contenido Normal de la Página (Solo visible cuando NO está cargando) */}
      <div className={`min-h-screen text-white p-6 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Base de Datos de Discos"
          subtitle="Todos los conjuntos de discos disponibles en el juego"
        />

        {/* Discs Grid */}
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            layout 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 justify-center transition-none"
            style={{ minHeight: '80vh' }}
          >
            {driveDiscs.map((disc) => (
              <DiscCard key={disc.id} disc={disc} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}