// HighlightText.jsx – component to render text with dynamic highlighting
import React from "react";

// Create dynamic highlight rules based on the character element color
const createHighlightRules = (elementColor = "#facc15") => [
  // Parentheses – show content without the parentheses
  {
    pattern: /\(([^)]+)\)/g,
    color: "text-white font-bold",
    extract: true,
  },
  // Damage types
  { pattern: /(Daño\s+Fuego|Quemadura|Quemados?)/gi, color: "text-[#ef4444] font-bold" },
  { pattern: /(Daño\s+Hielo|Rompehielo|Romper Hielo|Hielo|Congelacion|Congelación\w*|Ruptura)/gi, color: "text-[#22d3ee] font-bold" },
  { pattern: /(Daño\s+Eléctrico|Daño\s+Electrico|Shock|Electrocución)/gi, color: "text-[#3b82f6] font-bold" },
  { pattern: /(Daño\s+Físico|Daño\s+Fisico|Asalto)/gi, color: "text-[#eab308] font-bold" },
  { pattern: /(Daño\s+Etéreo|Daño\s+Etereo|Corrupción)/gi, color: "text-[#d946ef] font-bold" },
  // Massive / Severe damage – use element colour
  { pattern: /(Daño\s+Masivo|Daño\s+Severo)/gi, color: `text-[${elementColor}] font-bold` },
  // Misc special words
  {
    pattern: /(¡No te muevas! \[Modo Asalto\]|¡Por favor, no se resista! \[Modo Supresivo\]|Flash Freeze|Congelación Relámpago|Recorte de Dientes de Sierra|Invierno Eterno|Dientes Afilados|Emboscada Ártica|Barrido de Cola|Coleatazo|Ofensiva de Fuego|Poder de Fuego Abrumador|Disparo de Perdigones|Aluvión Completo|Modo de Erradicación|Modo de Erradicación Máxima|Recarga Rápida|Ascua Etérea|Perforación Etérea|Paquete de Energía Expandido III)/gi,
    color: "text-white font-bold",
  },
  // Skill and mechanic names – without generic "Cadena"
  {
    pattern: /((?:Técnica )?Especial(?: EX)?|Definitiva|Asistencia(?: Rápida|Defensiva|Evasiva)?|Ataque(?:s)? Básico(?:s)?|Básico|Basico|Dash|Contraataque|Réplica|Astral|Aturdir|Evadir|Evasión|Evasion|Aturdimiento)/gi,
    color: "text-white font-bold",
  },
  // Highlight the word "Cadena" only when it stands alone
  { pattern: /\bCadena\b/gi, color: "text-white font-bold" },
  // Emerald span – highlight the number inside the span
  {
    pattern: /<span class="text-emerald-400 font-bold text-lg">([^<]+)<\/span>/g,
    color: "text-emerald-400 font-bold text-lg",
    extract: true,
  },
];

// Process text, icons and apply highlight rules
const processTextWithIconsAndHighlight = (text, skillIcons = {}, skills = [], elementColor = "#facc15") => {
  if (!text) return [];

  // Build a regex that matches full skill names (with or without brackets)
  const skillPatterns = skills
    .map((skill) => {
      const full = `${skill.type}: ${skill.name}`;
      const clean = skill.name.replace(/\[.*?\]/g, "").trim();
      const partial = `${skill.type}: ${clean}`;
      const escFull = full.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&");
      const escPartial = partial.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&");
      return escFull === escPartial ? escFull : `${escFull}|${escPartial}`;
    })
    .join("|");

  const dynamicRules = [...createHighlightRules(elementColor)];
  if (skillPatterns) {
    dynamicRules.unshift({ pattern: new RegExp(`(${skillPatterns})`, "gi"), color: "text-white font-bold" });
  }

  // Icon pattern – <span class="inline-flex ..."><img src="..." alt="..." class="w-5 h-5" /></span>
  const iconPattern = /<span class="inline-flex align-middle mx-1"><img src="([^"]+)" alt="([^"]+)" class="w-5 h-5" \/>/g;
  const segments = [];
  let lastIdx = 0;
  let match;
  while ((match = iconPattern.exec(text)) !== null) {
    if (match.index > lastIdx) {
      const before = text.slice(lastIdx, match.index);
      segments.push(...processHighlightRules(before, dynamicRules));
    }
    segments.push({ type: "icon", src: match[1], alt: match[2] });
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) {
    const rest = text.slice(lastIdx);
    segments.push(...processHighlightRules(rest, dynamicRules));
  }
  if (segments.length === 0) {
    segments.push(...processHighlightRules(text, dynamicRules));
  }
  return segments;
};

// Apply a list of highlight rules to a plain string
const processHighlightRules = (text, rules) => {
  if (!text) return [{ text, highlight: false }];
  let parts = [{ text, highlight: false }];
  rules.forEach(({ pattern, color, extract }) => {
    const newParts = [];
    parts.forEach((part) => {
      if (part.highlight) {
        newParts.push(part);
        return;
      }
      const regex = new RegExp(pattern.source, pattern.flags);
      const matches = [...part.text.matchAll(regex)];
      if (matches.length) {
        let last = 0;
        matches.forEach((m) => {
          const start = m.index;
          const end = start + m[0].length;
          if (start > last) {
            newParts.push({ text: part.text.slice(last, start), highlight: false });
          }
          newParts.push({ text: extract ? m[1] : m[0], highlight: true, className: color });
          last = end;
        });
        if (last < part.text.length) {
          newParts.push({ text: part.text.slice(last), highlight: false });
        }
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });
  return parts;
};

// Main component
const HighlightText = ({ text, skills = [], skillIcons = {}, elementColor = "#facc15" }) => {
  if (!text) return null;
  const segments = processTextWithIconsAndHighlight(text, skillIcons, skills, elementColor);
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "icon" ? (
          <span key={i} className="inline-flex align-middle mx-1">
            <img src={seg.src} alt={seg.alt} className="w-5 h-5" />
          </span>
        ) : seg.highlight ? (
          <span key={i} className={seg.className}>
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
};

export default HighlightText;