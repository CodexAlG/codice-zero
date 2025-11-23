// Función para crear reglas de resaltado dinámicas basadas en el elemento del personaje
const createHighlightRules = (elementColor = "#facc15") => [
  // --- ELEMENTOS Y REACCIONES (Con brillo y negrita normal) ---
  {
    pattern: /(Daño\s+Fuego|Quemadura|Quemados?)/gi,
    color: "text-[#ef4444] font-bold"
  },
  {
    pattern: /(Daño\s+Hielo|Hielo|Congela\w*|Ruptura|Romper Hielo)/gi,
    color: "text-[#22d3ee] font-bold"
  },
  {
    pattern: /(Daño\s+Eléctrico|Daño\s+Electrico|Shock)/gi,
    color: "text-[#3b82f6] font-bold"
  },
  {
    pattern: /(Daño\s+Físico|Daño\s+Fisico|Asalto)/gi,
    color: "text-[#eab308] font-bold"
  },
  {
    pattern: /(Daño\s+Etéreo|Daño\s+Etereo|Corrupción)/gi,
    color: "text-[#d946ef] font-bold"
  },
  // REGLA CLAVE: Usar el color del elemento del personaje para daño masivo/severo
  {
    pattern: /(Daño\s+Masivo|Daño\s+Severo)/gi,
    color: `text-[${elementColor}] font-bold`
  },
  {
    pattern: /(¡No te muevas! \[Modo Asalto\]|¡Por favor, no se resista! \[Modo Supresivo\]|Flash Freeze|Congelación Relámpago|Recorte de Dientes de Sierra|Invierno Eterno|Dientes Afilados|Emboscada Ártica|Barrido de Cola|Coleatazo|Ofensiva de Fuego|Poder de Fuego Abrumador|Disparo de Perdigones|Aluvión Completo|Modo de Erradicación|Modo de Erradicación Máxima|Recarga Rápida|Ascua Etérea|Perforación Etérea|Paquete de Energía Expandido III)/gi,
    color: "text-white font-bold"
  },
   
  // --- HABILIDADES Y MECÁNICAS (Blanco Puro + Negrita) ---
  {
    pattern: /((?:Técnica )?Especial(?: EX)?|Definitiva|Ataque(?:s)? (?:en )?Cadena|Cadena|Asistencia(?: Rápida|Defensiva|Evasiva)?|Ataque(?:s)? Básico(?:s)?|Básico|Basico|Dash|Contraataque|Réplica|Astral|Aturdir|Evadir|Evasión|Evasion|Aturdimiento)/gi,
    color: "text-white font-bold"
  }
];

// Función para procesar iconos y texto con resaltado
const processTextWithIconsAndHighlight = (text, skillIcons = {}, skills = [], elementColor = "#facc15") => {
  if (!text) return [];

  // Crear patrones dinámicos para todos los skill names completos
  const skillPatterns = skills.map(skill => {
    const fullPattern = `${skill.type}: ${skill.name}`;
    const nameWithoutBrackets = skill.name.replace(/\[.*?\]/g, '').trim();
    const partialPattern = `${skill.type}: ${nameWithoutBrackets}`;
    
    const escapedFull = fullPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedPartial = partialPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    return escapedFull === escapedPartial ? escapedFull : `${escapedFull}|${escapedPartial}`;
  }).join('|');

  // Usar reglas dinámicas basadas en el elemento del personaje
  const dynamicRules = [...createHighlightRules(elementColor)];
  
  if (skillPatterns) {
    dynamicRules.unshift({
      pattern: new RegExp(`(${skillPatterns})`, 'gi'),
      color: "text-white font-bold"
    });
  }

  // Procesar iconos primero
  const iconPattern = /<span class="inline-flex align-middle mx-1"><img src="([^"]+)" alt="([^"]+)" class="w-5 h-5" \/><\/span>/g;
  const segments = [];
  let lastIndex = 0;
  let match;

  while ((match = iconPattern.exec(text)) !== null) {
    // Agregar texto antes del icono
    if (match.index > lastIndex) {
      const textSegment = text.slice(lastIndex, match.index);
      const processedText = processHighlightRules(textSegment, dynamicRules);
      segments.push(...processedText);
    }
    
    // Agregar el icono
    segments.push({
      type: 'icon',
      src: match[1],
      alt: match[2]
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Agregar el resto del texto
  if (lastIndex < text.length) {
    const remainingText = text.slice(lastIndex);
    const processedText = processHighlightRules(remainingText, dynamicRules);
    segments.push(...processedText);
  }

  // Si no hay iconos, procesar todo el texto
  if (segments.length === 0) {
    const processedText = processHighlightRules(text, dynamicRules);
    segments.push(...processedText);
  }

  return segments;
};

// Función para aplicar reglas de resaltado
const processHighlightRules = (text, rules) => {
  if (!text) return [{ text, highlight: false }];

  let parts = [{ text, highlight: false }];

  rules.forEach(({ pattern, color }) => {
    const newParts = [];
    parts.forEach((part) => {
      if (part.highlight) {
        newParts.push(part);
      } else {
        const regex = new RegExp(pattern.source, pattern.flags);
        const matches = [...part.text.matchAll(regex)];
        
        if (matches.length > 0) {
          let lastIndex = 0;
          matches.forEach((match) => {
            const matchStart = match.index;
            const matchEnd = matchStart + match[0].length;
            
            if (matchStart > lastIndex) {
              newParts.push({
                text: part.text.slice(lastIndex, matchStart),
                highlight: false
              });
            }
            
            newParts.push({
              text: match[0],
              highlight: true,
              className: color
            });
            
            lastIndex = matchEnd;
          });
          
          if (lastIndex < part.text.length) {
            newParts.push({
              text: part.text.slice(lastIndex),
              highlight: false
            });
          }
        } else {
          newParts.push(part);
        }
      }
    });
    parts = newParts;
  });

  return parts;
};

// Componente que procesa el texto
const HighlightText = ({ text, skills = [], skillIcons = {}, elementColor = "#facc15" }) => {
  if (!text) return null;

  const segments = processTextWithIconsAndHighlight(text, skillIcons, skills, elementColor);

  return (
    <>
      {segments.map((segment, i) => {
        if (segment.type === 'icon') {
          return (
            <span key={i} className="inline-flex align-middle mx-1">
              <img src={segment.src} alt={segment.alt} className="w-5 h-5" />
            </span>
          );
        } else {
          return segment.highlight ? (
            <span key={i} className={segment.className}>{segment.text}</span>
          ) : (
            <span key={i}>{segment.text}</span>
          );
        }
      })}
    </>
  );
};

export default HighlightText;