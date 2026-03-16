"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 border border-white/10 hover:border-yellow-400/50 hover:bg-yellow-400/10 group bg-white/5 mx-auto"
      aria-label="Toggle Language"
    >
      <span className={`transition-colors ${language === 'es' ? 'text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]' : 'text-gray-500 group-hover:text-gray-300'}`}>
        ES
      </span>
      <span className="text-gray-600">|</span>
      <span className={`transition-colors ${language === 'en' ? 'text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]' : 'text-gray-500 group-hover:text-gray-300'}`}>
        EN
      </span>
    </button>
  );
}
