import { useState } from 'react';
import Image from 'next/image';
import HighlightText from '@/components/ui/HighlightText';

export default function SkillsModule({ skills, color }) {
  const [skillLevel, setSkillLevel] = useState(11); // índice 11 = Nivel 12
  const [activeCategory, setActiveCategory] = useState("Ataque Básico");

  // Mapeo de iconos de habilidades
  const skillIcons = {
    "Ataque Básico": "/CodiceZero/Habilidades/Icon_Basic_Attack.webp",
    "Ataque Normal": "/CodiceZero/Habilidades/Icon_Basic_Attack.webp", 
    "Ataque": "/CodiceZero/Habilidades/Icon_Basic_Attack.webp", // Alias// Alias
    "Evasión": "/CodiceZero/Habilidades/Icon_Dodge.webp",
    "Asistencia": "/CodiceZero/Habilidades/Icon_Assist_Attack.png",
    "Técnica Especial": "/CodiceZero/Habilidades/Icon_Special_Attack.webp",
    "Habilidad Especial": "/CodiceZero/Habilidades/Icon_Special_Attack.webp", // Alias
    "Técnica Especial EX": "/CodiceZero/Habilidades/Icon_EX_Special_Attack.webp",
    "Habilidad Especial EX": "/CodiceZero/Habilidades/Icon_EX_Special_Attack.webp", // Alias
    "Técnica Definitiva": "/CodiceZero/Habilidades/Icon_Ultimate_Colored.webp",
    "Definitiva": "/CodiceZero/Habilidades/Icon_Ultimate_Colored.webp", // Alias
    "Pasiva Central": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    "Pasiva": "/CodiceZero/Habilidades/Icon_Core_Skill.webp", // Alias
  };

  // Definir categorías basadas en los tipos de habilidades
  const categories = ["Ataque Básico", "Evasión", "Asistencia", "Técnica Especial", "Técnica Definitiva", "Pasiva Central"];

  if (!skills) return null;

  // Filtrar habilidades por categoría con lógica expandida
  const filteredSkills = skills.filter(skill => {
    const skillType = skill.type.toLowerCase();
    
    switch (activeCategory) {
      case "Ataque Básico":
        return skillType.includes("ataque básico") || skillType.includes("ataque normal");
        
      case "Evasión":
        return skillType.includes("evasión") || skillType.includes("evasion") || skillType.includes("rapido") || skillType.includes("contraataque");
        
      case "Técnica Especial":
        return skillType.includes("técnica especial") || skillType.includes("habilidad especial") || 
               skillType.includes("técnica especial ex") || skillType.includes("habilidad especial ex");
        
      case "Técnica Definitiva":
        return skillType.includes("definitiva") || skillType.includes("técnica definitiva") || skillType.includes("cadena") || skillType.includes("ataque en cadena");
        
      case "Pasiva Central":
        return skillType.includes("pasiva") || skillType.includes("habilidad adicional") || skillType.includes("central");
        
      case "Asistencia":
        return skillType.includes("asistencia") || skillType.includes("seguimiento");
        
      default:
        return skill.type.includes(activeCategory);
    }
  });

  // Función para obtener el valor de un atributo en el nivel seleccionado
  const getAttributeValue = (attribute, level) => {
    if (!attribute.values || attribute.values.length === 0) return "N/A";
    const index = Math.min(level, attribute.values.length - 1);
    return attribute.values[index] || attribute.values[0] || "N/A";
  };

  // Función para calcular el progreso como porcentaje
  const getProgressPercentage = (level) => {
    return ((level + 1) / 12) * 100; // level es índice (0-11), convertimos a nivel (1-12)
  };

  // Función para reemplazar nombres de habilidades en paréntesis con iconos
  const processSkillDescription = (text) => {
    if (!text) return text;
    
    // Patrón para encontrar habilidades entre paréntesis
    const skillPattern = /\((Ataque Normal|Evasión|Asistencia|Técnica Especial|Habilidad Especial|Técnica Especial EX|Habilidad Especial EX|Técnica Definitiva|Definitiva|Pasiva Central|Pasiva)\)/g;
    
    return text.replace(skillPattern, (match, skillName) => {
      const iconPath = skillIcons[skillName];
      if (iconPath) {
        return `<span class="inline-flex align-middle mx-1"><img src="${iconPath}" alt="${skillName}" class="w-5 h-5" /></span>`;
      }
      return match;
    });
  };

  return (
    <div className="space-y-6">
      {/* SLIDER DE NIVEL */}
      <div className="bg-gray-900 p-6 rounded-xl border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-display text-cyan-400 uppercase tracking-wider">
            Nivel de Habilidad
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 font-mono text-sm">Nivel:</span>
            <span className="text-cyan-400 font-bold text-lg">{skillLevel + 1}/12</span>
          </div>
        </div>
        
        <div className="relative">
          <input
            type="range"
            min="0"
            max="11"
            step="1"
            value={skillLevel}
            onChange={(e) => setSkillLevel(Number(e.target.value))}
            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, ${color || '#06b6d4'} 0%, ${color || '#06b6d4'} ${getProgressPercentage(skillLevel)}%, #374151 ${getProgressPercentage(skillLevel)}%, #374151 100%)`
            }}
          />
          <div className="flex justify-between text-xs font-mono text-gray-500 mt-2">
            <span>1</span>
            <span>3</span>
            <span>6</span>
            <span>9</span>
            <span>12</span>
          </div>
        </div>
      </div>

      {/* TABS DE NAVEGACIÓN */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all border-b-2 flex items-center ${
              activeCategory === cat 
                ? "border-yellow-400 text-yellow-400 bg-white/5" 
                : "border-transparent text-gray-500 hover:text-white hover:bg-white/5"
            }`}
          >
            {skillIcons[cat] && (
              <Image 
                src={skillIcons[cat]} 
                alt={cat} 
                width={20} 
                height={20} 
                className="w-5 h-5 mr-2 inline-block object-contain"
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* LISTA DE HABILIDADES FILTRADAS */}
      <div className="space-y-4">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
          >
            {/* HEADER DE LA HABILIDAD */}
            <div className="p-6 border-b border-white/5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                      {skill.type}
                    </span>
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: color || '#06b6d4' }}
                    />
                  </div>
                  <h4 className="text-xl font-display text-white mb-3 tracking-wide">
                    {skill.name}
                  </h4>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags?.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] uppercase px-2 py-1 rounded bg-black/40 border border-white/10 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Descripción con Highlight */}
              <div className="text-gray-300 text-sm leading-relaxed">
                <HighlightText 
                  text={processSkillDescription(skill.description)} 
                  skills={skills} 
                  skillIcons={skillIcons}
                />
              </div>
            </div>

            {/* TABLA DE ATRIBUTOS */}
            {skill.attributes && skill.attributes.length > 0 && (
              <div className="p-6">
                <h5 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                  Multiplicadores de Daño
                </h5>
                
                <div className="space-y-3">
                  {skill.attributes.map((attribute, attrIndex) => {
                    const currentValue = getAttributeValue(attribute, skillLevel);
                    const progressWidth = ((skillLevel + 1) / 12) * 100;
                    
                    return (
                      <div 
                        key={attrIndex}
                        className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                          attrIndex % 2 === 0 ? 'bg-white/5' : 'bg-transparent'
                        }`}
                      >
                        {/* Nombre del Atributo */}
                        <div className="flex-1">
                          <span className="text-gray-300 font-medium">
                            {attribute.label}
                          </span>
                        </div>
                        
                        {/* Valor con Barra de Progreso */}
                        <div className="flex items-center gap-3 min-w-[120px]">
                          {/* Barra de Progreso de Fondo */}
                          <div className="relative w-20 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className="absolute top-0 left-0 h-full transition-all duration-300 rounded-full"
                              style={{ 
                                width: `${progressWidth}%`,
                                backgroundColor: color || '#06b6d4',
                                boxShadow: `0 0 8px ${color || '#06b6d4'}40`
                              }}
                            />
                          </div>
                          
                          {/* Valor Actual */}
                          <span className="text-cyan-400 font-mono font-bold min-w-[80px] text-right">
                            {currentValue}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ESTILOS CUSTOM PARA EL SLIDER */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: ${color || '#06b6d4'};
          cursor: pointer;
          box-shadow: 0 0 10px ${color || '#06b6d4'}60;
          border: 2px solid #fff;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: ${color || '#06b6d4'};
          cursor: pointer;
          box-shadow: 0 0 10px ${color || '#06b6d4'}60;
          border: 2px solid #fff;
        }
      `}</style>
    </div>
  );
}