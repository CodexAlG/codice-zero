"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const staticTranslations = {
  es: {
    subtitle: "Hub de proyectos digitales",
    projects: "Proyectos",
    zzzTitle: "CodiceZero ZZZ",
    zzzDesc: "La referencia estratégica hispana para Zenless Zone Zero. Builds, agentes, armas y más.",
    zzzEnter: "ACCEDER —",
    soonTitle: "Próximamente",
    soonDesc: "Nuevo proyecto en desarrollo.",
    soonBadge: "RESTRINGIDO",
    soonRibbon: "PRÓXIMAMENTE",
    creatorRole: "Jugador & Developer",
    creatorBio: "Jugador casual y desarrollador. CodiceZero es donde ambas cosas se juntan.",
    seeMore: "VER MÁS —",
    logo: "codicezero.cc"
  },
  en: {
    subtitle: "Digital projects hub",
    projects: "Projects",
    zzzTitle: "CodiceZero ZZZ",
    zzzDesc: "The premier Spanish strategic reference for Zenless Zone Zero. Builds, agents, weapons, and more.",
    zzzEnter: "ENTER —",
    soonTitle: "Coming Soon",
    soonDesc: "New project under development.",
    soonBadge: "RESTRICTED",
    soonRibbon: "COMING SOON",
    creatorRole: "Gamer & Developer",
    creatorBio: "Casual gamer and developer. CodiceZero is where both worlds meet.",
    seeMore: "SEE MORE —",
    logo: "codicezero.cc"
  }
};

export default function Home() {
  const { language } = useLanguage();
  const t = staticTranslations[language] || staticTranslations.es;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-white font-sans selection:bg-yellow-500/30 selection:text-yellow-200 landing-bg py-8 overflow-y-auto">
      
      <div className="w-full max-w-[1080px] px-6 flex flex-col gap-6">
        
        {/* HEADER */}
        <header className="w-full flex items-center">
          <div className="logo font-mono text-[11px] font-black uppercase tracking-[0.25em] text-[#f5c518] drop-shadow-[0_0_8px_rgba(245,197,24,0.15)]">
            {t.logo}
          </div>
        </header>

        {/* HERO */}
        <section className="hero py-2 flex flex-col items-center text-center">
          <h1 className="hero-title text-6xl sm:text-7xl font-black tracking-tighter text-white select-none leading-none mb-2">
            CODICE<span className="text-[#f5c518] drop-shadow-[0_0_20px_rgba(245,197,24,0.25)]">ZERO</span>
          </h1>
          <p className="hero-sub font-mono text-[10px] font-medium tracking-[0.2em] text-zinc-500 uppercase leading-none">
            {t.subtitle}
          </p>
        </section>

        {/* PROJECTS */}
        <div className="w-full">
          <div className="section-label font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5c518] mb-2">
            {t.projects}
          </div>
          
          <div className="projects flex flex-col gap-4">
            
            {/* ZZZ Card */}
            <a 
              href="https://zzz.codicezero.cc" 
              className="group relative border border-zinc-800 border-l-[3px] border-l-[#f5c518] bg-[#0c0c0e]/80 hover:bg-[#0e0e12]/90 backdrop-blur-md rounded-2xl p-7 flex items-center justify-between gap-6 overflow-hidden transition-all duration-300 hover:border-[#f5c518]/50 hover:shadow-[0_0_30px_rgba(245,197,24,0.08)] min-h-[120px]"
            >
              {/* Background Art */}
              <div 
                className="absolute inset-0 bg-cover opacity-[0.55] transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-[0.70] pointer-events-none"
                style={{ 
                  backgroundImage: `url('/CodiceZero/Landingpage/zenlesszonezerohoshimimiyabitrailer-ign-blogroll-1734449473359.jpg')`,
                  backgroundPosition: 'center 60%'
                }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/60 to-transparent pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col gap-1">
                <h3 className="text-base font-black text-white tracking-wide transition-colors group-hover:text-[#f5c518]">
                  {t.zzzTitle}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-[550px]">
                  {t.zzzDesc}
                </p>
              </div>
              
              {/* Action Indicator (No border to avoid feeling like a separate button) */}
              <div className="relative z-10 shrink-0 flex items-center gap-1 font-mono text-[11px] font-bold text-[#f5c518] tracking-wider transition-all duration-300 group-hover:translate-x-1.5">
                {t.zzzEnter}
              </div>
            </a>

            {/* Locked Card */}
            <div 
              className="group relative border border-zinc-900 border-l-[3px] border-l-zinc-700 bg-[#0a0a0c]/40 backdrop-blur-sm rounded-2xl p-7 flex items-center justify-between gap-6 overflow-hidden select-none min-h-[120px]"
            >
              {/* Grid background inside card */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />
              
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col gap-1 opacity-40">
                <h3 className="text-base font-black text-zinc-400 tracking-wide">
                  {t.soonTitle}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {t.soonDesc}
                </p>
              </div>
              
              {/* Restricted indicator */}
              <div className="relative z-10 shrink-0 font-mono text-[10px] font-bold text-zinc-600 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-2 tracking-widest cursor-default">
                {t.soonBadge}
              </div>

              {/* Diagonal animated ribbon */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-20">
                <div className="absolute top-4 -right-8 w-28 py-1 text-[8px] font-black text-center text-zinc-500 uppercase tracking-widest rotate-45 border-y border-zinc-800 shadow-sm ribbon-shimmer-locked">
                  {t.soonRibbon}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ABOUT */}
        <div className="about border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-start justify-between gap-6">
          
          <div className="about-left flex items-center gap-4 shrink-0">
            <div className="relative w-10 h-10 rounded-full border border-zinc-800 ring-2 ring-yellow-500/10 overflow-hidden bg-zinc-900 shadow-md">
              <Image
                src="/CodiceZero/Landingpage/Icono.webp"
                alt="Ego"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-zinc-100 leading-none">Ego</span>
              <span className="text-[10px] text-zinc-500 mt-1">{t.creatorRole}</span>
            </div>
          </div>
          
          <div className="about-right text-left sm:text-right flex flex-col items-start sm:items-end gap-1.5 max-w-[400px]">
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t.creatorBio}
            </p>
            <Link 
              href="#" 
              className="font-mono text-[11px] font-bold text-[#f5c518] hover:text-yellow-400 transition-colors uppercase tracking-widest mt-0.5"
            >
              {t.seeMore}
            </Link>
          </div>
          
        </div>

        {/* FOOTER */}
        <footer className="w-full text-center text-[10px] font-mono text-zinc-700 pt-4 select-none">
          © 2025 CodiceZero
        </footer>

      </div>

    </div>
  );
}
