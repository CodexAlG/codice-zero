"use client";
import Image from "next/image";
import Link from "next/link";

export default function LinktreePage() {
  const links = [
    {
      label: "💻 CodiceZero | Mi Base de Proyectos",
      url: "/"
    },
    {
      label: "📁 Wiki Zenless Zone Zero (ES)",
      url: "https://zzz.codicezero.cc"
    },
    {
      label: "👾 Ego System | Servidor de Discord",
      url: "https://discord.gg/RBzdz2Bn4u"
    },
    {
      label: "📺 Un poco de Ego | Canal de YouTube",
      url: "https://www.youtube.com/@thisego9"
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between text-white font-sans overflow-hidden py-16 px-6">
      
      {/* 1. BACKGROUND VIDEO & OVERLAYS */}
      <div className="absolute inset-0 -z-20 w-full h-full select-none pointer-events-none">
        <img
          src="/CodiceZero/Landingpage/e82f64a8321ecc54607a1685b09918cb_7421573060994890032.gif"
          alt="Background GIF"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay with backdrop-blur */}
      <div className="absolute inset-0 -z-10 bg-black/65 backdrop-blur-sm select-none pointer-events-none" />

      {/* 2. MAIN CONTAINER */}
      <div className="w-full max-w-[400px] flex flex-col items-center gap-8 my-auto relative z-10">
        
        {/* PROFILE HEADER */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="relative w-24 h-24 rounded-full border border-white/20 overflow-hidden bg-zinc-900 shadow-xl select-none">
            <Image
              src="/CodiceZero/IconoEgo.jpg"
              alt="Ego Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight text-white">Ego</h1>
            <p className="text-sm text-zinc-400 font-medium tracking-wide">
              Desarrollador & Casual Gamer
            </p>
          </div>
        </div>

        {/* BUTTON LINKS */}
        <nav className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="w-full text-center py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-md font-medium text-[14px] md:text-[15px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] select-none shadow-md"
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>

      {/* 3. FOOTER */}
      <footer className="w-full text-center text-[10px] font-mono text-zinc-500 select-none tracking-widest mt-8 relative z-10">
        © 2026 CODICEZERO
      </footer>

    </div>
  );
}
