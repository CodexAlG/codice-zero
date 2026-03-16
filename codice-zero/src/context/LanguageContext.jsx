"use client";

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es'); // Default is Spanish
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [hasShownWarning, setHasShownWarning] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('app_language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('app_language', newLang);
      
      // Trigger warning modal when switching to English for the first time in this session
      if (newLang === 'en' && !hasShownWarning) {
        setShowWarningModal(true);
        setHasShownWarning(true);
      }
      
      return newLang;
    });
  };

  // Helper function to translate text with localStorage caching
  const translateText = useCallback(async (text) => {
    if (!text || language === 'es') return text;

    const cacheKey = `trans_v15_${language}_${text}`;
    
    // Check localStorage cache first
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return cached;
    } catch (e) {
      console.warn("localStorage not available or full");
    }

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLang: language })
      });
      
      const data = await res.json();
      
      if (data.translatedText) {
        // Save to localStorage
        try {
          localStorage.setItem(cacheKey, data.translatedText);
        } catch (e) {
          console.warn("Could not save to localStorage");
        }
        return data.translatedText;
      }
      return text; // Fallback to original text on error
    } catch (error) {
      console.error("Translation failed:", error);
      return text;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translateText, showWarningModal, setShowWarningModal }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
