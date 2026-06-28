"use client";

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LanguageContext = createContext();

// Cola de traducción global para evitar ráfagas concurrentes que saturen la API
let translationQueue = [];
let isProcessingQueue = false;

// Procesador de la cola en lotes (batching) para acelerar sin saturar
const processQueue = async () => {
  if (isProcessingQueue || translationQueue.length === 0) return;
  isProcessingQueue = true;

  const BATCH_SIZE = 4; // Procesa 3 a 5 a la vez en paralelo (seguro para DeepL)

  while (translationQueue.length > 0) {
    // Tomar un lote de tareas
    const currentBatch = translationQueue.splice(0, BATCH_SIZE);

    await Promise.all(currentBatch.map(async (item) => {
      const { text, language, resolve, reject, cacheKey } = item;

      try {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, targetLang: language })
        });

        const data = await res.json();

        if (data.error) {
           console.warn("API Error en lote:", data.error, data.details ? ` | Detalles: ${data.details}` : "");
           resolve(text); // Fallback
        } else if (data.translatedText) {
          try {
            localStorage.setItem(cacheKey, data.translatedText);
          } catch (e) {}
          resolve(data.translatedText);
        } else {
          resolve(text);
        }
      } catch (error) {
        console.error("Fallo de red en lote:", error);
        resolve(text);
      }
    }));

    // Pequeño retardo entre lotes para evitar rebasar límites de ráfagas
    await new Promise(r => setTimeout(r, 50)); 
  }

  isProcessingQueue = false;
};

export function LanguageProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState('es'); // Default is Spanish
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [hasApprovedWarning, setHasApprovedWarning] = useState(false);
  const [isReloading, setIsReloading] = useState(false);

  // Load language preference from URL pathname on mount or change
  useEffect(() => {
    if (pathname?.startsWith('/en/') || pathname === '/en') {
      setLanguage('en');
      localStorage.setItem('app_language', 'en');
    } else {
      setLanguage('es');
      localStorage.setItem('app_language', 'es');
    }
  }, [pathname]);

  const toggleLanguage = () => {
    if (language === 'es') {
      // Intentando cambiar a Inglés
      if (!hasApprovedWarning) {
        setShowWarningModal(true);
        return; // No cambia el idioma todavía
      }
      setLanguage('en');
      localStorage.setItem('app_language', 'en');
      setIsReloading(true);
      setTimeout(() => {
        const redirectUrl = pathname === '/' ? '/en' : `/en${pathname}`;
        window.location.href = redirectUrl;
      }, 1200);
    } else {
      // Volver a Español
      setLanguage('es');
      localStorage.setItem('app_language', 'es');
      setIsReloading(true);
      setTimeout(() => {
        const redirectUrl = pathname === '/en' ? '/' : pathname.replace(/^\/en/, '');
        window.location.href = redirectUrl || '/';
      }, 1200);
    }
  };

  const approveWarning = () => {
    setHasApprovedWarning(true);
    setLanguage('en');
    localStorage.setItem('app_language', 'en');
    setShowWarningModal(false);
    
    setIsReloading(true);
    setTimeout(() => {
      const redirectUrl = pathname === '/' ? '/en' : `/en${pathname}`;
      window.location.href = redirectUrl;
    }, 1200);
  };

  // Helper function to translate text with sequential and batch queue support
  const translateText = useCallback((text) => {
    return new Promise((resolve, reject) => {
      if (!text || language === 'es') {
        return resolve(text);
      }

      const cacheKey = `trans_v15_${language}_${text}`;

      // 1. Check client-side cache first
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          return resolve(cached);
        }
      } catch (e) {}

      // 2. Queue the request
      translationQueue.push({
        text,
        language,
        resolve,
        reject,
        cacheKey
      });

      // 3. Trigger queue processor
      processQueue();
    });
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translateText, showWarningModal, setShowWarningModal, approveWarning, isReloading }}>
      {children}
      {isReloading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif'
        }}>
          <div style={{
            width: '45px',
            height: '45px',
            border: '4px solid rgba(255, 255, 255, 0.1)',
            borderTopColor: '#facc15',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '16px'
          }} />
          <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
          <p style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', color: '#fcd34d', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
             {language === 'es' || language === 'en' ? (language === 'es' ? 'CAMBIANDO IDIOMA...' : 'CHANGING LANGUAGE...') : 'LOADING...'}
          </p>
        </div>
      )}
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
