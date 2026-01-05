"use client";

export default function TierListLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#09090b] text-white flex flex-col p-6 overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
}
