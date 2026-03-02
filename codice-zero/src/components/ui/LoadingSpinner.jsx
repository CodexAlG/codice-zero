"use client";
import { useState, useEffect } from "react";

export default function LoadingSpinner() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen bg-[#09090b]/95 backdrop-blur-sm fixed inset-0 z-[100]">
      <div className="flex flex-col items-center max-w-sm px-6">
        {/* Logo */}
        <img
          src="/CodiceZero/Logo/CodiceZero_Logo.webp"
          alt="CodiceZero"
          className="w-16 h-16 mb-6 opacity-80"
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        {/* Spinner */}
        <div className="relative w-10 h-10 mb-5">
          <div className="absolute inset-0 border-[3px] border-[#fbbf24]/20 rounded-full" />
          <div className="absolute inset-0 border-[3px] border-transparent border-t-[#fbbf24] rounded-full animate-spin" />
        </div>

        {/* Primary message */}
        <p className="text-[#a1a1aa] font-mono text-xs tracking-widest uppercase text-center">
          Cargando Base de Datos...
        </p>

        {/* Timeout message - 10s */}
        {elapsed >= 10 && elapsed < 25 && (
          <p className="text-[#71717a] text-xs text-center mt-4 animate-[fadeIn_0.5s_ease]">
            Está tardando más de lo esperado...
          </p>
        )}

        {/* Timeout message - 25s with Discord link */}
        {elapsed >= 25 && (
          <div className="flex flex-col items-center mt-4 animate-[fadeIn_0.5s_ease]">
            <p className="text-[#71717a] text-xs text-center mb-3">
              Parece que hay problemas con la carga.
            </p>
            <a
              href="https://discord.gg/RBzdz2Bn4u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-lg text-[#5865F2] text-xs font-medium hover:bg-[#5865F2]/20 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
              </svg>
              Reportar en Discord
            </a>
          </div>
        )}
      </div>
    </div>
  );
}