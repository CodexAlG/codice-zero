import React from 'react';

const inlineIcons = {
    "[Icono Ataque]": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Basic-Attack-White-Alt-01.webp",
    "[Icono Dodges]": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Dodge-02.webp",
    "[Icono Especial]": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-02-691x675.webp",
    "[Icono Especial EX]": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-01-675x675.webp",
    "[Icono Assist]": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Assist-01-675x675.webp",
    "[Icono Definitiva]": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-QTE-Ultimate-Colored-Inverted-01-691x675.webp",
};

// Exportable helper function for plain string replacement
export const replaceIcons = (inputText) => {
    if (!inputText) return "";
    let processed = inputText;

    // 1. Reemplazo de Iconos (Format matches HighlightText expectations)
    Object.entries(inlineIcons).forEach(([key, src]) => {
        // Escape brackets for regex
        const regex = new RegExp(key.replace(/\[/g, '\\[').replace(/\]/g, '\\]'), 'g');
        // Important: Use the exact HTML structure HighlightText expects
        processed = processed.replace(regex, `<span class="inline-flex align-middle mx-1"><img src="${src}" alt="${key}" class="w-5 h-5" /></span>`);
    });

    return processed;
};

export default function TextWithIcons({ text }) {
    if (!text) return null;
    // This component now ONLY handles icon replacement, raw HTML
    return (
        <div
            className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: replaceIcons(text) }}
        />
    );
}
