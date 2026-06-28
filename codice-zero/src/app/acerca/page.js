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

  const faqs = [
    {
      title: "¿Qué es CodiceZero?",
      text: "Es mi base central de proyectos. Todo esto empezó simplemente como un hobby para hacer una base de datos de Zenless Zone Zero en español. Pero como el proyecto fue creciendo, separé la wiki en su propio espacio y dejé este dominio para juntar todo lo que hago: herramientas para juegos, contenido y proyectos a futuro."
    },
    {
      title: "¿De dónde salió el nombre?",
      text: '"Códice" porque al final del día es eso: un archivo o registro donde voy guardando información, guías y herramientas. Y el "Zero", es un guiño a Zenless Zone Zero, que fue el juego que me motivó a empezar.'
    },
    {
      title: "¿Por qué crear una página desde cero?",
      text: "Principalmente porque estaba harto de las wikis corporativas atascadas de publicidad invasiva y diseños pesados. Quería hacer algo rápido, limpio y al grano para la comunidad, hecho por alguien que realmente juega."
    },
    {
      title: "¿Qué más voy a encontrar aquí?",
      text: "Por ahora el enfoque principal es mantener la wiki de ZZZ actualizada, pero la idea es integrar mis otras redes, compartir herramientas nuevas e incluso armar una sección de vlog para la comunidad."
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-white font-sans selection:bg-yellow-500/20 selection:text-yellow-200 acerca-bg py-10 md:py-16 overflow-y-auto px-6">
      
      {/* Container */}
      <div className="w-full max-w-[900px] flex flex-col gap-10 relative z-10">
        
        {/* HEADER */}
        <header className="w-full flex items-center justify-between border-b border-zinc-900 pb-4">
          <Link 
            href="/"
            className="flex items-center gap-2 font-mono text-[10px] font-bold text-zinc-500 hover:text-[#f5c518] transition-colors uppercase tracking-widest group"
          >
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
            Volver al Hub
          </Link>
          <div className="logo font-mono text-[11px] font-black uppercase tracking-[0.25em] text-[#f5c518]">
            codicezero.cc
          </div>
        </header>

        {/* SECTION 1: FAQ (TARJETAS GRANDES Y RECTANGULARES) */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-black italic tracking-wide text-white border-l-2 border-[#f5c518] pl-3 uppercase">
            Preguntas Frecuentes
          </h2>
          
          <div className="flex flex-col gap-5">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-zinc-800/80 bg-[#0e0e11]/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:border-zinc-700/80 flex flex-col gap-3"
              >
                <h4 className="text-lg md:text-xl font-black text-[#f5c518] tracking-wide">
                  {faq.title}
                </h4>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-medium">
                  {faq.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: PERFIL (FIRMA / TARJETA INFERIOR) */}
        <section className="flex flex-col gap-4 border-t border-zinc-900 pt-6">
          <div className="border border-zinc-800 bg-[#0e0e11]/60 backdrop-blur-md rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden transition-all duration-300 hover:border-zinc-700/80">
            {/* Profile Avatar */}
            <div className="relative w-20 h-20 rounded-full border border-zinc-800 ring-2 ring-yellow-500/5 overflow-hidden bg-zinc-900 shrink-0 shadow-md select-none">
              <Image
                src="/CodiceZero/IconoEgo.jpg"
                alt="Ego"
                fill
                className="object-cover"
              />
            </div>

            {/* Description content */}
            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-1 z-10">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black tracking-tight text-white">Ego</h3>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mt-0.5" />
              </div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5c518] mb-3">
                Desarrollador & Casual Gamer
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                En la comunidad probablemente me conozcas por analizar y filtrar información de ZZZ, o por el contenido de YouTube y Discord. Simplemente soy alguien que disfruta jugar y armar herramientas en su tiempo libre para sacarle más provecho a los juegos.
              </p>
            </div>
          </div>
        </section>

        {/* SOCIAL & FOOTER */}
        <div className="flex flex-col items-center gap-6 border-t border-zinc-900 pt-6">
          
          {/* Networks */}
          <div className="flex items-center gap-6">
            {socialNetworks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-9 h-9 transition-transform hover:scale-105 duration-300 flex items-center justify-center"
                title={social.name}
              >
                <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-[#f5c518]/10 blur-lg rounded-full transition-all duration-300" />
                {social.isComponent ? (
                  <social.icon className={`w-5 h-5 transition-colors duration-300 ${social.customClass}`} />
                ) : (
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={18}
                    height={18}
                    className={`object-contain filter group-hover:brightness-125 ${social.customClass || ""}`}
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
