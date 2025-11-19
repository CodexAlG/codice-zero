"use client";
import Image from "next/image";

export default function Home() {
  const socialNetworks = [
    {
      name: "Discord",
      icon: "/CodiceZero/Redes/Discord.png",
      link: "#", // Sin servidor por el momento
      customClass: "scale-110" // Un poco más grande para igualar peso
    },
    {
      name: "X (Twitter)",
      icon: "/CodiceZero/Redes/Twitter.webp",
      link: "https://x.com/EgoBl9",
      customClass: "scale-125" // Ajustado al nuevo tamaño más pequeño
    },
    {
      name: "YouTube",
      icon: "/CodiceZero/Redes/Youtube.png",
      link: "https://www.youtube.com/@thisego9",
      customClass: "scale-110" // Ajuste ligero
    },
    {
      name: "GitHub",
      icon: "/CodiceZero/Redes/Github.png",
      link: "https://github.com/CodexAlG",
      customClass: "invert" // GitHub ya es denso, tamaño base está bien, solo invertir color
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col justify-center items-center text-center ml-20 relative">
      {/* Fondo Ambiental */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black opacity-80 pointer-events-none"></div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Contenido Principal */}
      <div className="z-10 flex flex-col items-center max-w-3xl px-4">
        
        {/* Título */}
        <span className="text-xs font-mono text-yellow-500/50 tracking-[0.5em] mb-[-10px] block">SYSTEM.ROOT.ACCESS</span>
        <h1 className="text-6xl md:text-8xl font-display font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] tracking-tighter">
          CODICEZERO
        </h1>

        {/* Subtítulo */}
        <div className="h-1 w-32 bg-yellow-500 rounded-full mb-8 shadow-[0_0_10px_#eab308]"></div>
        
        <p className="text-xl md:text-2xl text-gray-200 font-bold mb-4">
          La Referencia Estratégica Hispana
        </p>
        
        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
          La base de datos definitiva para <strong>Zenless Zone Zero</strong>.
          Análisis profundo de builds, sinergias de equipo y estrategias avanzadas,
          diseñada por y para la comunidad.
        </p>

        {/* Barra de Estado del Sistema */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 font-mono text-xs text-gray-500 border-y border-white/5 py-3 w-full max-w-lg">
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
        <div className="flex items-center gap-8 mb-16">
          {socialNetworks.map((social) => (
            <a 
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 transition-transform hover:scale-110 duration-300"
            >
              <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/20 blur-xl rounded-full transition-all duration-300"></div>
              <Image
                src={social.icon}
                alt={social.name}
                fill
                className={`object-contain drop-shadow-lg filter group-hover:brightness-125 ${social.customClass || ""}`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center space-y-1">
        <p className="text-gray-500 text-sm font-mono">© 2025 CodiceZero. Todos los derechos reservados.</p>
        <p className="text-gray-600 text-xs">Zenless Zone Zero es una marca registrada de HoYoverse.</p>
      </footer>
    </div>
  );
}
