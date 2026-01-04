"use client";
import Image from "next/image";
import { Send, Coffee } from "lucide-react";
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
      name: "YouTube",
      icon: "/CodiceZero/Redes/Youtube.png",
      link: "https://www.youtube.com/@thisego9",
      customClass: "scale-110"
    },
    {
      name: "GitHub",
      icon: "/CodiceZero/Redes/Github.png",
      link: "https://github.com/CodexAlG",
      customClass: "invert"
    },
    {
      name: "Telegram",
      icon: Send,
      link: "https://t.me/CodiceZeroZZZ",
      isComponent: true,
      customClass: "text-gray-300 group-hover:text-blue-400 p-1"
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
    <div className="min-h-screen flex flex-col relative overflow-hidden">

      {/* Fondo de Malla (Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl px-6 text-center mx-auto py-12">

        <span className="text-xs font-mono text-yellow-500/50 tracking-[0.5em] mb-[-10px] block">SYSTEM.ROOT.ACCESS</span>

        {/* Título */}
        <h1 className="text-6xl md:text-8xl font-display font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] mb-6 tracking-tighter pr-4">
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
            <span>GAME VER: {latestVersion.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span>AGENTS: {agentCount}</span>
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
              className="group relative w-10 h-10 transition-transform hover:scale-110 duration-300 flex items-center justify-center"
              title={social.name}
            >
              <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/20 blur-xl rounded-full transition-all duration-300"></div>

              {social.isComponent ? (
                <social.icon className={`w-full h-full transition-colors duration-300 ${social.customClass}`} />
              ) : (
                <Image
                  src={social.icon}
                  alt={social.name}
                  fill
                  className={`object-contain drop-shadow-lg filter group-hover:brightness-125 ${social.customClass || ""}`}
                />
              )}
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center space-y-1 text-gray-600 text-xs font-mono relative z-10">
        <p>© 2025 CodiceZero. Todos los derechos reservados.</p>
        <p>Zenless Zone Zero es una marca registrada de HoYoverse.</p>
      </footer>
    </div>

  );
}
