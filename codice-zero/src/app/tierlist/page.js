"use client";

import { useState } from "react";
import TierListLayout from "@/components/tierlist/TierListLayout";
import DeveloperTierList from "@/components/tierlist/DeveloperTierList";
import CommunityTierList from "@/components/tierlist/CommunityTierList";

export default function TierListPage() {
    const [activeTab, setActiveTab] = useState("developer");

    return (
        <TierListLayout>
            <header className="mb-8 flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-display font-black italic text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600 mb-6 drop-shadow-[0_2px_10px_rgba(234,179,8,0.5)] tracking-tighter">
                    TIER LIST
                </h1>

                {/* Toggle Switch */}
                <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm relative">
                    <div
                        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-300 shadow-lg shadow-yellow-500/20 ${activeTab === 'developer' ? 'left-1' : 'left-[calc(50%+4px)]'}`}
                    ></div>

                    <button
                        onClick={() => setActiveTab("developer")}
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${activeTab === 'developer' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        DEVELOPER
                    </button>
                    <button
                        onClick={() => setActiveTab("community")}
                        className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${activeTab === 'community' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        COMMUNITY
                    </button>
                </div>
            </header>

            <div className="flex-1 w-full">
                {activeTab === "developer" ? (
                    <DeveloperTierList />
                ) : (
                    <CommunityTierList />
                )}
            </div>
        </TierListLayout>
    );
}
