"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LinktreePage() {
  // Prevent body/document level scrolling entirely on this route to remove black spaces and scrollbars
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.classList.add("overflow-hidden", "h-screen");
    body.classList.add("overflow-hidden", "h-screen");

    return () => {
      html.classList.remove("overflow-hidden", "h-screen");
      body.classList.remove("overflow-hidden", "h-screen");
    };
  }, []);

  const links = [
    {
      title: "💻 CodiceZero | Mi Base de Proyectos",
      desc: "Hub principal y registro de todos mis proyectos digitales.",
      url: "https://www.codicezero.cc",
      action: "ACCEDER —"
    },
    {
      title: "📁 Wiki Zenless Zone Zero (ES)",
      desc: "La referencia estratégica en español. Builds, agentes y más.",
      url: "https://zzz.codicezero.cc",
      action: "WIKI —"
    },
    {
      title: "👾 Wiki ZZZ | Servidor de Discord",
      desc: "Únete a la comunidad de la wiki para debatir y compartir.",
      url: "https://discord.gg/RBzdz2Bn4u",
      action: "UNIRSE —"
    },
    {
      title: "📺 Un poco de Ego | Canal de YouTube",
      desc: "Análisis, guías de personajes y contenido de videojuegos.",
      url: "https://www.youtube.com/@thisego9",
      action: "VER —"
    }
  ];

  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-center text-white font-sans overflow-hidden py-4 sm:py-8 px-4 sm:px-6 landing-bg selection:bg-yellow-500/20 selection:text-yellow-200">
      
      {/* 1. BACKGROUND GIF & OVERLAYS */}
      <div className="absolute inset-0 -z-30 w-full h-full select-none pointer-events-none">
        <img
          src="/CodiceZero/Landingpage/e82f64a8321ecc54607a1685b09918cb_7421573060994890032.gif"
          alt="Background GIF"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay with backdrop-blur */}
      <div className="absolute inset-0 -z-20 bg-black/55 backdrop-blur-[1px] select-none pointer-events-none" />

      {/* CRT Scanline glowing sweep line */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f5c518]/30 to-transparent shadow-[0_0_12px_#f5c518] opacity-35 animate-scanline" />
      </div>

      {/* 2. MAIN CENTERED CONTAINER (Compact on mobile to fit screen height) */}
      <div className="w-full max-w-[480px] flex flex-col items-center gap-4 sm:gap-6 z-10 mb-4 sm:mb-8">
        
        {/* PROFILE HEADER */}
        <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2 select-none">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-zinc-800 overflow-hidden bg-zinc-900 shadow-xl">
            <Image
              src="/CodiceZero/Landingpage/Icono.webp"
              alt="Ego Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <h1 className="text-lg sm:text-xl font-black tracking-tight text-white">Ego</h1>
            <div className="h-5 flex items-center justify-center">
              <p className="font-mono text-[9px] font-bold uppercase text-[#f5c518] typewriter-text">
                Desarrollador & Casual Gamer
              </p>
            </div>
          </div>
        </div>

        {/* BUTTON LINKS (COMPACT RECTANGULAR CARDS ON MOBILE) */}
        <nav className="w-full flex flex-col gap-2.5 sm:gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-between border border-zinc-800/80 bg-[#0e0e11]/60 backdrop-blur-sm rounded-2xl py-3 px-4 sm:p-5 transition-all duration-300 hover:border-[#f5c518]/30 hover:scale-[1.01] active:scale-[0.99] select-none shadow-md text-left gap-4"
            >
              {/* Content */}
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-[#f5c518] transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-400 leading-normal max-w-[320px]">
                  {link.desc}
                </p>
              </div>

              {/* Action indicator */}
              <div className="shrink-0 font-mono text-[9px] font-bold text-[#f5c518] tracking-wider transition-all duration-300 group-hover:translate-x-0.5">
                {link.action}
              </div>
            </a>
          ))}
        </nav>

      </div>

      {/* 3. ABSOLUTE FOOTER (Anchored at bottom, never causes scroll) */}
      <footer className="absolute bottom-4 left-0 right-0 w-full text-center text-[9px] font-mono text-zinc-700 select-none tracking-widest z-10">
        © 2026 CODICEZERO
      </footer>

    </div>
  );
}
