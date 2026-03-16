"use client";

import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, AlertCircle, X } from 'lucide-react';

export default function LanguageWarningModal() {
  const { showWarningModal, setShowWarningModal } = useLanguage();

  if (!showWarningModal) return null;

  const handleClose = () => {
    setShowWarningModal(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-[#121216]/90 border border-yellow-500/30 rounded-2xl p-6 shadow-[0_0_50px_rgba(234,179,8,0.15)] flex flex-col items-center text-center backdrop-blur-xl"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Alert Icon with glow */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-40 rounded-full animate-pulse"></div>
            <div className="relative bg-yellow-500/10 border border-yellow-400/30 p-3 rounded-full text-yellow-500">
              <AlertCircle size={32} className="drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
            </div>
          </div>

          {/* Content Spanish */}
          <div className="mb-4">
            <h3 className="text-base font-bold text-yellow-400 uppercase tracking-wide mb-1">
              Traducción en Desarrollo
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              La traducción al inglés se encuentra en desarrollo y puede contener errores de formato o texto. Pedimos paciencia.
            </p>
          </div>

          {/* Separation Line */}
          <div className="w-16 h-[1px] bg-white/10 mb-4"></div>

          {/* Content English */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-yellow-400 uppercase tracking-wide mb-1">
              Translation in Development
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The English translation is under development and may contain formatting or text errors. We appreciate your patience.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 w-full">
            {/* Discord CTA */}
            <a
              href="https://discord.gg/your_discord_link" // Placeholder as approved in plan
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#5865F2]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare size={18} className="group-hover:animate-bounce" />
              <span className="text-xs uppercase tracking-wider">Informar problemas (Discord)</span>
            </a>

            {/* Accept Button */}
            <button
              onClick={handleClose}
              className="flex items-center justify-center w-full py-2.5 px-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-xs uppercase tracking-wider"
            >
              Entendido / Understood
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
