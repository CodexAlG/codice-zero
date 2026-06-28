"use client";
import Image from "next/image";
import Link from "next/link";

export default function LinktreePage() {
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
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between text-white font-sans overflow-hidden py-10 px-6 landing-bg selection:bg-yellow-500/20 selection:text-yellow-200">
      
      {/* 1. BACKGROUND GIF & OVERLAYS */}
      <div className="absolute inset-0 -z-20 w-full h-full select-none pointer-events-none">
        <img
          src="/CodiceZero/Landingpage/e82f64a8321ecc54607a1685b09918cb_7421573060994890032.gif"
          alt="Background GIF"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animating scan line */}
      <div className="animate-scan" />

      {/* Dark overlay with backdrop-blur */}
      <div className="absolute inset-0 -z-10 bg-black/50 backdrop-blur-[1px] select-none pointer-events-none" />

      {/* 2. MAIN CONTAINER */}
      <div className="w-full max-w-[500px] flex flex-col items-center gap-6 my-auto relative z-10">
        
        {/* PROFILE HEADER */}
        <div className="flex flex-col items-center text-center gap-2 mb-2">
          <div className="relative w-20 h-20 rounded-full border border-zinc-800 overflow-hidden bg-zinc-900 shadow-xl select-none">
            <Image
              src="/CodiceZero/Landingpage/Icono.webp"
              alt="Ego Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <h1 className="text-xl font-black tracking-tight text-white">Ego</h1>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5c518]">
              Desarrollador & Casual Gamer
            </p>
          </div>
        </div>

        {/* BUTTON LINKS (COMPACT RECTANGULAR CARDS) */}
        <nav className="w-full flex flex-col gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-between border border-zinc-800/80 bg-[#0e0e11]/60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:border-[#f5c518]/30 hover:scale-[1.01] active:scale-[0.99] select-none shadow-md text-left gap-4"
            >
              {/* Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-black text-white group-hover:text-[#f5c518] transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-normal max-w-[340px]">
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

      {/* 3. FOOTER */}
      <footer className="w-full text-center text-[9px] font-mono text-zinc-700 select-none tracking-widest mt-6 relative z-10">
        © 2026 CODICEZERO
      </footer>

    </div>
  );
}
