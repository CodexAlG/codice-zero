"use client";
import Image from "next/image";
import { Send } from "lucide-react";

export default function Home() {


  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Fondo de Malla (Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Contenido Principal */}
      <div className="z-10 flex flex-col items-center max-w-4xl px-6 text-center">

        <span className="text-xs font-mono text-yellow-500/50 tracking-[0.5em] mb-[-10px] block">SYSTEM.ROOT.ACCESS</span>

        {/* Título */}
        <h1 className="text-6xl md:text-8xl font-display font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] mb-6 tracking-tighter">
          CODICEZERO
        </h1>

        {/* Subtítulo */}
        <div className="h-1 w-32 bg-yellow-500 rounded-full mb-8 shadow-[0_0_10px_#eab308]"></div>

        <p className="text-xl md:text-2xl text-gray-200 font-bold mb-4">
          La Referencia Estratégica Hispana
        </p>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          La base de datos definitiva para <strong>Zenless Zone Zero</strong>.
          Análisis profundo de builds, sinergias de equipo y estrategias avanzadas,
          diseñada por y para la comunidad.
        </p>

        {/* Barra de Estado */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 font-mono text-xs text-gray-500 border-y border-white/5 py-3 w-full max-w-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>DATABASE: ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>GAME VER: 2.3</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span>AGENTS: 43</span>
          </div>
        </div>

        {/* Redes Sociales */}
        {/* Telegram Link */}
        <div className="mb-16 w-full max-w-2xl">
          <a
            href="https://t.me/CodiceZeroZZZ"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-6 p-6 bg-gray-900/50 border border-white/10 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 text-left"
          >
            {/* Icono */}
            <div className="flex-shrink-0 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Send className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
            </div>

            {/* Texto */}
            <div className="flex-1">
              <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                Canal Oficial de Telegram
                <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">NUEVO</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Únete a nuestro canal oficial para recibir notificaciones instantáneas sobre nuevas guías, actualizaciones de personajes y noticias de Zenless Zone Zero.
              </p>
            </div>

            {/* Flecha */}
            <div className="hidden md:block text-gray-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center space-y-1 text-gray-600 text-xs font-mono">
        <p>© 2025 CodiceZero. Todos los derechos reservados.</p>
        <p>Zenless Zone Zero es una marca registrada de HoYoverse.</p>
      </footer>
    </div>

  );
}
