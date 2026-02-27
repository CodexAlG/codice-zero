"use client";
import Image from "next/image";
import { Coffee } from "lucide-react";
import { agents } from "@/data/agents";

export default function Home() {
  // Filter agents that don't have leak: "Beta"
  const releaseAgents = agents.filter(agent => agent.leak !== "Beta");

  // Get the latest version from released agents
  const latestVersion = releaseAgents.reduce((maxVersion, agent) => {
    const agentVersion = parseFloat(agent.version || "0");
    return agentVersion > maxVersion ? agentVersion : maxVersion;
  }, 0);

  // Count released agents
  const agentCount = releaseAgents.length;

  const socialNetworks = [
    {
      name: "Discord",
      icon: "/CodiceZero/Redes/Discord.png",
      link: "https://discord.gg/RBzdz2Bn4u",
      customClass: "scale-110"
    },
    {
      name: "X (Twitter)",
      icon: "/CodiceZero/Redes/Twitter.webp",
      link: "https://x.com/EgoBl9",
      customClass: "scale-[1.35]"
    },
    {
      name: "Ko-Fi",
      icon: Coffee,
      link: "https://ko-fi.com/codicezero",
      isComponent: true,
      customClass: "text-gray-300 group-hover:text-cyan-400 p-1"
    },
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col relative overflow-hidden font-sans">

      {/* Fondo de Malla (Grid) con más blur/fusión */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none opacity-80 backdrop-blur-[2px]"></div>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl px-4 sm:px-6 text-center mx-auto py-8 sm:py-12 relative z-10">

        <span className="text-[10px] font-black font-mono text-yellow-500/60 tracking-[0.8em] mb-[-10px] block drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]">SYSTEM.ROOT.ACCESS</span>

        {/* Título */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-display font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)] mb-4 sm:mb-6 tracking-tighter pr-2 sm:pr-4 leading-tight">
          CODICEZERO
        </h1>

        {/* Subtítulo decorativo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[2px] w-12 bg-gradient-to-l from-yellow-500 to-transparent"></div>
          <div className="h-1.5 w-24 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)]"></div>
          <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-500 to-transparent"></div>
        </div>

        <p className="text-lg xs:text-xl md:text-2xl text-gray-100 font-bold mb-4 drop-shadow-md">
          La Referencia Estratégica Hispana
        </p>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
          La base de datos definitiva para <strong className="text-gray-200">Zenless Zone Zero</strong>.
          Análisis profundo de builds, sinergias de equipo y estrategias avanzadas,
          diseñada por y para la comunidad.
        </p>

        {/* Barra de Estado (Premium Glassmorphism) */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 font-mono text-xs font-bold text-gray-400 py-3 px-6 w-full max-w-lg bg-black/30 backdrop-blur-md rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            </div>
            <span className="tracking-widest">DATABASE: ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
            <span className="tracking-widest">GAME VER: {latestVersion.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            <span className="tracking-widest">AGENTS: {agentCount}</span>
          </div>
        </div>

        {/* CARTA DEL CREADOR (EGO) - Premium */}
        <div className="mb-10 w-full max-w-[280px] xs:max-w-xs sm:max-w-sm relative z-10">
          <div className="relative bg-[#0f0f12]/80 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex items-center gap-4 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">

            {/* Premium Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none"></div>

            {/* Avatar */}
            <div className="relative w-16 h-16 rounded-full border-2 border-[#151518] ring-2 ring-yellow-500/30 overflow-hidden shrink-0 bg-black">
              <Image
                src="/CodiceZero/IconoEgo.jpg"
                alt="Ego"
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center items-start gap-1 relative z-10 w-full">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-500/80 leading-none">Líder del Proyecto</span>
              <div className="flex items-center justify-between w-full">
                <h3 className="text-xl font-bold text-gray-100 leading-tight drop-shadow-sm">Ego</h3>
                <div className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" title="Online"></span>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 italic leading-snug mt-1 border-t border-white/5 pt-1 w-full">"Construyendo para la comunidad."</p>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-8 mb-8">
          {socialNetworks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 transition-all hover:scale-110 duration-300 flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              title={social.name}
            >
              {social.isComponent ? (
                <social.icon className={`w-5 h-5 transition-colors duration-300 text-gray-400 group-hover:text-white ${social.customClass?.replace('text-gray-300 group-hover:text-cyan-400', '')}`} />
              ) : (
                <div className={`relative w-6 h-6 ${social.customClass || ""}`}>
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="object-contain filter opacity-70 group-hover:opacity-100 group-hover:brightness-125 transition-all"
                  />
                </div>
              )}
            </a>
          ))}
        </div>
      </main>
    </div>

  );
}
