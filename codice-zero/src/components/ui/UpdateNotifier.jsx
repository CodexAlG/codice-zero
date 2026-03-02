"use client";
import { useState, useEffect, useRef } from "react";

export default function UpdateNotifier() {
    const [showBanner, setShowBanner] = useState(false);
    const initialBuildId = useRef(null);

    useEffect(() => {
        // Only run in production
        if (process.env.NODE_ENV !== "production") return;

        const checkVersion = async () => {
            try {
                const res = await fetch("/version.json", {
                    cache: "no-store",
                    headers: { "Cache-Control": "no-cache" },
                });
                if (!res.ok) return;
                const data = await res.json();

                if (!initialBuildId.current) {
                    // First load — save current version
                    initialBuildId.current = data.buildId;
                    return;
                }

                // If version changed, show banner
                if (data.buildId !== initialBuildId.current) {
                    setShowBanner(true);
                }
            } catch {
                // Silently fail — network issues shouldn't break the app
            }
        };

        // Check immediately on mount then every 60 seconds
        checkVersion();
        const interval = setInterval(checkVersion, 60000);

        return () => clearInterval(interval);
    }, []);

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] animate-[slideUp_0.4s_ease-out]">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#18181b]/95 backdrop-blur-md border border-[#fbbf24]/30 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="w-2 h-2 bg-[#fbbf24] rounded-full animate-pulse" />
                <span className="text-sm text-[#e4e4e7]">
                    Nueva actualización disponible
                </span>
                <button
                    onClick={() => window.location.reload()}
                    className="px-3 py-1.5 bg-[#fbbf24] text-[#09090b] text-xs font-bold rounded-lg hover:bg-[#f59e0b] transition-colors duration-200"
                >
                    Actualizar
                </button>
                <button
                    onClick={() => setShowBanner(false)}
                    className="text-[#71717a] hover:text-white transition-colors ml-1"
                    title="Cerrar"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
