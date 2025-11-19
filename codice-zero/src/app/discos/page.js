"use client";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { driveDiscs } from "@/data/discs";

// Configuración de reglas de resaltado (Regex -> Clases/Color)
const highlightRules = [
  // --- ELEMENTOS Y REACCIONES (Con brillo y negrita normal) ---
  {
    pattern: /(Fuego|Quemadura|Quemados?)/gi,
    color: "text-[#ef4444] font-bold"
  },
  {
    pattern: /(Hielo|Congela\w*|Ruptura|Romper Hielo)/gi,
    color: "text-[#22d3ee] font-bold"
  },
  {
    pattern: /(Eléctrico|Electrico|Shock)/gi,
    color: "text-[#3b82f6] font-bold"
  },
  {
    pattern: /(Físico|Fisico|Asalto)/gi,
    color: "text-[#eab308] font-bold"
  },
  {
    pattern: /(Etéreo|Etereo|Corrupción)/gi,
    color: "text-[#d946ef] font-bold"
  },
  
  // --- HABILIDADES Y MECÁNICAS (Blanco Puro + Negrita) ---
  {
    pattern: /((?:Técnica )?Especial(?: EX)?|Definitiva|Ataque(?:s)? (?:en )?Cadena|Cadena|Asistencia(?: Rápida|Defensiva|Evasiva)?|Ataque(?:s)? Básico(?:s)?|Básico|Basico|Dash|Contraataque|Réplica|Astral|Aturdir|Evadir|Evasión|Evasion|Aturdimiento)/gi,
    color: "text-white font-bold"
  }
];

// Componente que procesa el texto
const HighlightText = ({ text }) => {
  if (!text) return null;

  // Dividimos el texto en partes basadas en las reglas
  let parts = [{ text, highlight: false }];

  highlightRules.forEach(({ pattern, color }) => {
    const newParts = [];
    parts.forEach((part) => {
      if (part.highlight) {
        newParts.push(part);
      } else {
        // Dividir por la regex capturando el grupo
        const split = part.text.split(pattern);
        split.forEach((str, i) => {
          if (str === "") return;
          
          // Si es impar, es una coincidencia (porque usamos grupos de captura en regex)
          // Nota: split con regex devuelve [texto, coincidencia, texto, coincidencia...]
          // Pero split básico de JS puede variar, usaremos match para asegurar.
          // Método simplificado de reemplazo:
          if (pattern.test(str)) {
            newParts.push({ text: str, highlight: true, className: color });
          } else {
            // Check if this part contains matches inside
            const matches = str.match(pattern);
            if (matches) {
              // Split again logic (simplified for stability: react-string-replace approach)
              const subParts = str.split(pattern);
              subParts.forEach((subStr, j) => {
                if(pattern.test(subStr)) {
                  newParts.push({ text: subStr, highlight: true, className: color });
                } else if (subStr) {
                  newParts.push({ text: subStr, highlight: false });
                }
              });
            } else {
              newParts.push({ text: str, highlight: false });
            }
          }
        });
      }
    });
    parts = newParts;
  });

  return (
    <>
      {parts.map((part, i) =>
        part.highlight ? (
          <span key={i} className={part.className}>{part.text}</span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </>
  );
};

export default function DiscsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Base de Datos de Discos"
          subtitle="Todos los conjuntos de discos disponibles en el juego"
        />

        {/* Discs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {driveDiscs.map((disc) => (
            <div 
              key={disc.id} 
              className="group relative flex items-start gap-6 p-6 bg-black/40 hover:bg-black/60 transition-all duration-300 border-t-2 border-white/10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
            >
              {/* Borde Decorativo Superior */}
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] bg-yellow-400/10" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />

              {/* COLUMNA IZQUIERDA: ICONO FLOTANTE */}
              <div className="flex-shrink-0 mt-2">
                <div className="relative w-28 h-28 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Image 
                    src={disc.image} 
                    alt={disc.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>

              {/* COLUMNA DERECHA: INFO */}
              <div className="flex-1">
                <h2 className="text-xl font-display text-white group-hover:text-yellow-400 transition-colors mb-4 tracking-wide">
                  {disc.name.split('(')[0]}
                </h2>
                
                <div className="space-y-3">
                  {/* 2 Piezas */}
                  <div className="flex gap-2 items-start">
                    <span className="text-cyan-400 font-bold text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-900/50 h-fit whitespace-nowrap mt-0.5">2 Pzas</span>
                    <p className="text-gray-200 text-sm leading-snug">
                      <HighlightText text={disc.twoPiece} />
                    </p>
                  </div>
                  
                  {/* 4 Piezas */}
                  <div className="flex gap-2 items-start pt-2 border-t border-white/5">
                    <span className="text-yellow-500 font-bold text-xs bg-yellow-950/50 px-1.5 py-0.5 rounded border border-yellow-900/50 h-fit whitespace-nowrap mt-0.5">4 Pzas</span>
                    <p className="text-gray-200 text-sm leading-snug">
                      <HighlightText text={disc.fourPiece} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}