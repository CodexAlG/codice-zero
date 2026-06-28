"use client";
import Image from "next/image";
import Link from "next/link";
import { Send, Coffee, ArrowLeft, Twitter, Youtube, Github } from "lucide-react";

export default function AcercaHub() {
  const socialNetworks = [
    {
      name: "Discord",
      icon: "/CodiceZero/Redes/Discord.png",
      link: "https://discord.gg/RBzdz2Bn4u",
      customClass: "scale-110"
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      link: "https://x.com/EgoBl9",
      isComponent: true,
      customClass: "text-zinc-400 group-hover:text-white"
    },
    {
      name: "YouTube",
      icon: "/CodiceZero/Redes/Youtube.png",
      link: "https://www.youtube.com/@thisego9",
      customClass: "scale-110"
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/CodexAlG",
      isComponent: true,
      customClass: "text-zinc-400 group-hover:text-white"
    },
    {
      name: "Telegram",
      icon: Send,
      link: "https://t.me/CodiceZeroZZZ",
      isComponent: true,
      customClass: "text-zinc-400 group-hover:text-blue-400 p-0.5"
    },
    {
      name: "Ko-Fi",
      icon: Coffee,
      link: "https://ko-fi.com/codicezero",
      isComponent: true,
      customClass: "text-zinc-400 group-hover:text-amber-400 p-0.5"
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-white font-sans selection:bg-yellow-500/30 selection:text-yellow-200 landing-bg py-8 md:py-16 overflow-y-auto px-6">
      
      {/* Container */}
      <div className="w-full max-w-[760px] flex flex-col gap-8 relative z-10">
        
        {/* HEADER */}
        <header className="w-full flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 font-mono text-[10px] font-bold text-zinc-500 hover:text-[#f5c518] transition-colors uppercase tracking-widest group"
          >
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
            Volver al Hub
          </Link>
          <div className="logo font-mono text-[11px] font-black uppercase tracking-[0.25em] text-[#f5c518] drop-shadow-[0_0_8px_rgba(245,197,24,0.15)]">
            codicezero.cc
          </div>
        </header>

        {/* PROFILE CARD */}
        <div className="border border-zinc-800 bg-[#0c0c0e]/80 backdrop-blur-md rounded-3xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden">
          {/* Background mesh decoration */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />

          {/* Profile Photo */}
          <div className="relative w-24 h-24 rounded-full border-2 border-[#f5c518]/30 ring-4 ring-[#f5c518]/5 overflow-hidden bg-zinc-900 shrink-0 shadow-lg select-none">
            <Image
              src="/CodiceZero/IconoEgo.jpg"
              alt="Ego"
              fill
              className="object-cover"
            />
          </div>

          {/* Basic Info */}
          <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-black tracking-tight text-white">Ego</h2>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-1" />
            </div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5c518]">
              Desarrollador & Casual Gamer
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mt-2">
              "CodiceZero es el lugar donde el desarrollo de software y la pasión por los videojuegos se unen."
            </p>
          </div>
        </div>

        {/* PHILOSOPHY CARD */}
        <div className="border border-zinc-800 bg-[#0c0c0e]/60 backdrop-blur-sm rounded-3xl p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-zinc-300 text-sm md:text-base leading-relaxed">
            <h3 className="text-lg font-bold text-white tracking-wide border-b border-zinc-800 pb-2">
              Sobre Mí & Mi Filosofía
            </h3>
            
            <p>
              No me defino a través de datos rígidos o un currículum convencional. Me veo simplemente como un <strong>desarrollador de software y un jugador casual</strong> que disfruta de crear soluciones y herramientas digitales en su tiempo libre.
            </p>
            
            <p>
              Diseño y construyo estas páginas web como un laboratorio técnico personal. Es mi espacio ideal para experimentar con arquitecturas modernas (como Next.js, enrutamiento por subdominios y bases de datos dinámicas en tiempo real) y perfeccionar mis habilidades de desarrollo de manera totalmente práctica.
            </p>

            <h3 className="text-lg font-bold text-white tracking-wide border-b border-zinc-800 pb-2 mt-4">
              ¿Por qué creé CodiceZero?
            </h3>

            <p>
              CodiceZero nació de una motivación sencilla: quería crear una fuente estratégica y base de datos definitiva de Zenless Zone Zero en español. El objetivo era ofrecer una alternativa moderna, rápida y limpia, totalmente libre de la molesta publicidad invasiva o diseños sobrecargados de las wikis corporativas comunes.
            </p>
            
            <p>
              Este proyecto es impulsado puramente por amor al código y a la comunidad. No busca ganancias financieras ni notoriedad comercial; es simplemente la recompensa personal de ver una herramienta bien diseñada que sea de utilidad real para la aventura de otros jugadores en Nueva Eridu.
            </p>
          </div>
        </div>

        {/* SOCIAL & FOOTER */}
        <div className="flex flex-col items-center gap-6 border-t border-zinc-800/60 pt-6">
          
          {/* Networks */}
          <div className="flex items-center gap-6">
            {socialNetworks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-9 h-9 transition-transform hover:scale-110 duration-300 flex items-center justify-center"
                title={social.name}
              >
                <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-[#f5c518]/15 blur-xl rounded-full transition-all duration-300" />
                {social.isComponent ? (
                  <social.icon className={`w-5 h-5 transition-colors duration-300 ${social.customClass}`} />
                ) : (
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className={`object-contain drop-shadow-md filter group-hover:brightness-125 ${social.customClass || ""}`}
                  />
                )}
              </a>
            ))}
          </div>

          <footer className="text-center text-[10px] font-mono text-zinc-700 select-none">
            © 2025 CodiceZero
          </footer>

        </div>

      </div>

    </div>
  );
}
