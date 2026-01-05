// HighlightText.jsx – component to render text with dynamic highlighting
import React from "react";

// Create dynamic highlight rules based on the character element color
const createHighlightRules = (elementColor = "#facc15") => [
  // Misc special words - specific terms that should be white/bold
  // Misc special words - specific terms that should be white/bold
  {
    pattern: /(¡No te muevas! \[Modo Asalto\]|¡Por favor, no se resista! \[Modo Supresivo\]|Flash Freeze|Congelación Relámpago|Recorte de Dientes de Sierra|Invierno Eterno|Dientes Afilados|Emboscada Ártica|Barrido de Cola|Coleatazo|Ofensiva de Fuego|Poder de Fuego Abrumador|Disparo de Perdigones|Aluvión Completo|Modo de Erradicación|Modo de Erradicación Máxima|Recarga Rápida|Ascua Etérea|Perforación Etérea|Paquete de Energía Expandido III|Velo Etereo|Campo de Corrupción|Fuego\s+de Horno|Fuego\s+Helado|Quemadura\s+Gélida(?:\s+-\s+Ruptura)?|Potencia|Vórtice|Bandera\s+Escarchada|Ondear\s+la\s+Bandera|Máscara|Campo\s+de\s+Energía|Bala\s+Azucarada|Carga|Disparo\s+en\s+Cuclillas|Disparo\s+Rodante|Disparo\s+Final|Visión\s+Vital|Puntos\s+de\s+Asistencia|Contraataque\s+de\s+Bloqueo|Bloqueo|Escudo|Modo\s+Explosivo|Ataque\s+de\s+Martinete|Ataque\s+de\s+Taladro)/gi,
    color: "text-white font-bold",
  },
  // Damage types
  // Hielo (Moved before Fuego to prioritize 'Quemadura por Frío' over 'Quemadura')
  { pattern: /(Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+Hielo|Daño\s+Hielo(?:\s+Puro)?|Daño\s+Congelaci[oó]n|Rompehielo|Romper\s+Hielo|Congelaci[ó]n\w*|Anomal[ií]a\s+Hielo|Res\s+Hielo|Resistencia\s+Hielo|Hielo(?:\s+Puro)?|Quemadura\s+por\s+Fr[ií]o|Anomal[ií]a\s+de\s+Congelaci[oó]n|Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+de\s+Congelaci[oó]n|Anomal[ií]a\s+de\s+Atributo\s+(?:de\s+)?Hielo)/gi, color: "text-[#22d3ee] font-bold" },
  // Fuego
  { pattern: /(Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+Fuego|Daño\s+Fuego(?:\s+Puro)?|Quemadura|Quemados?|Anomal[ií]a\s+Fuego|Res\s+Fuego|Resistencia\s+Fuego|Fuego(?:\s+Puro)?|Anomal[ií]a\s+de\s+Atributo\s+(?:de\s+)?Fuego)/gi, color: "text-[#ef4444] font-bold" },
  // Eléctrico
  { pattern: /(Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+El[eé]ctrica|Daño\s+El[eé]ctrico(?:\s+Puro)?|[Ee]lectrochoque|Electrocuci[oó]n|Anomal[ií]a\s+El[eé]ctrica|Res\s+El[eé]ctrica|Resistencia\s+El[eé]ctrica|El[eé]ctrico|El[eé]ctrica(?:\s+Pura)?|Anomal[ií]a\s+de\s+Atributo\s+(?:de\s+)?El[eé]ctric[oa])/gi, color: "text-[#3b82f6] font-bold" },
  // Físico
  { pattern: /(Asalto\s+de\s+Polaridad|Hoja\s+Afilada|Honed\s+Edge|Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+F[ií]sica|Daño\s+F[ií]sico(?:\s+Puro)?|Anomal[ií]a\s+F[ií]sica|Res\s+F[ií]sic[oa]|Resistencia\s+F[ií]sica|Asalto|F[ií]sico|F[ií]sica(?:\s+Pura)?|Anomal[ií]a\s+de\s+Atributo\s+(?:de\s+)?F[ií]sic[oa])/gi, color: "text-[#eab308] font-bold" },
  // Etéreo
  { pattern: /(Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+(?:Et[é]rea|Tinta\s+Aurica)|Daño\s+(?:Et[é]reo|Tinta\s+Aurica)(?:\s+Puro)?|Corrupci[oó]n|Anomal[ií]a\s+(?:Et[é]rea|Tinta\s+Aurica|Et[é]reo)|Res\s+(?:Et[é]rea|Tinta\s+Aurica)|Resistencia\s+(?:Et[é]rea|Tinta\s+Aurica)|Tinta\s+Aurica(?:\s+Pura)?|Et[é]reo(?:\s+Puro)?|Et[é]rea(?:\s+Pura)?|Anomal[ií]a\s+de\s+Atributo\s+(?:de\s+)?(?:Et[é]re[oa]|Tinta\s+Aurica))/gi, color: "text-[#d946ef] font-bold" },
  // Massive / Severe damage – use element colour

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
  // Dynamic scaling values (Green)
  {
    pattern: /\[VAL\](.*?)\[\/VAL\]/g,
    color: "text-[#86efac] font-bold",
    extract: true,
  },
  // Custom Colored Values [CV="text-red-500"]value[/CV]
  {
    pattern: /\[CV="(.*?)"\](.*?)\[\/CV\]/g,
    color: (m) => `${m[1]} font-bold`,
    extract: 2, // Extract the second group (value)
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
      const escFull = full.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const escPartial = partial.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return escFull === escPartial ? escFull : `${escFull}|${escPartial}`;
    })
    .join("|");

  const dynamicRules = [...createHighlightRules(elementColor)];

  if (skillPatterns) {
    dynamicRules.unshift({ pattern: new RegExp(`(${skillPatterns})`, "gi"), color: "text-white font-bold" });
  }

  // Icon pattern – <span class="inline-flex ..."><img src="..." alt="..." class="w-5 h-5" /></span>
  const iconPattern = /<span class="inline-flex align-middle mx-1"><img src="([^"]+)" alt="([^"]+)" class="w-5 h-5" \/><\/span>/g;
  const segments = [];
  let lastIdx = 0;
  let match;
  while ((match = iconPattern.exec(text)) !== null) {
    if (match.index > lastIdx) {
      const before = text.slice(lastIdx, match.index);
      segments.push(...processWithParenthesesPriority(before, dynamicRules));
    }
    segments.push({ type: "icon", src: match[1], alt: match[2] });
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) {
    const rest = text.slice(lastIdx);
    segments.push(...processWithParenthesesPriority(rest, dynamicRules));
  }
  if (segments.length === 0) {
    segments.push(...processWithParenthesesPriority(text, dynamicRules));
  }
  return segments;
};

// NEW: Process text with parentheses having absolute priority
const processWithParenthesesPriority = (text, rules) => {
  if (!text) return [{ text, highlight: false }];

  // Find all parentheses
  const parensPattern = /\(([^)]+)\)/g;
  const parensData = [];
  let match;

  while ((match = parensPattern.exec(text)) !== null) {
    parensData.push({
      start: match.index,
      end: match.index + match[0].length,
      content: match[1]
    });
  }

  // If no parentheses, apply rules normally
  if (parensData.length === 0) {
    return applyHighlightRules(text, rules);
  }

  // Split text into segments: before parens, inside parens, after parens
  const result = [];
  let currentPos = 0;

  parensData.forEach((paren) => {
    // Process text before parentheses
    if (paren.start > currentPos) {
      const beforeText = text.slice(currentPos, paren.start);
      result.push(...applyHighlightRules(beforeText, rules));
    }

    // Process content INSIDE parentheses to allow coloring
    // Default to white/bold if no rule matches
    const contentSegments = applyHighlightRules(paren.content, rules);

    contentSegments.forEach(seg => {
      if (!seg.highlight) {
        result.push({
          text: seg.text,
          highlight: true,
          className: "text-white font-bold" // Default parens style
        });
      } else {
        result.push(seg); // Keep specific highlight (e.g. Cyan for Ice)
      }
    });

    currentPos = paren.end;
  });

  // Process remaining text after last parentheses
  if (currentPos < text.length) {
    const afterText = text.slice(currentPos);
    result.push(...applyHighlightRules(afterText, rules));
  }

  return result;
};

// NEW: Apply highlight rules WITHOUT checking for parentheses
const applyHighlightRules = (text, rules) => {
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

          // Determine text content based on extract property
          let content = m[0];
          if (extract === true) content = m[1];
          else if (typeof extract === 'number') content = m[extract];

          // Determine color class
          const className = typeof color === 'function' ? color(m) : color;

          newParts.push({ text: content, highlight: true, className });
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