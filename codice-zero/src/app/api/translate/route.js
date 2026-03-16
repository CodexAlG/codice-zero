import { NextResponse } from 'next/server';

// 1. IN-MEMORY CACHE
// This cache lives in the module scope and survives for the lifecycle of the Serverless Function.
const inMemoryCache = {};

export async function POST(request) {
  try {
    const { text, targetLang = 'EN' } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'Text not provided' }, { status: 400 });
    }

    if (targetLang.toUpperCase() === 'ES') {
      return NextResponse.json({ translatedText: text, cached: true }); // Base is spanish
    }

    const cacheKey = `${targetLang.toUpperCase()}_${text}`;

    // Return cached if it exists
    if (inMemoryCache[cacheKey]) {
      return NextResponse.json({ translatedText: inMemoryCache[cacheKey], cached: true });
    }

    // 2. ZENLESS ZONE ZERO GLOSSARY (Forced translations via XML)
    // We wrap glossary terms so they are ignored by standard translation 
    // but replaced with the exact term we want using the <keep> tag logic,
    // or directly translating them before sending.

    // Actually, DeepL allows <keep> to ignore words from being translated, but doesn't easily let us say "translate x to y".
    // A trick with tag_handling is that if we replace the text *before* DeepL with standard English equivalents wrapped in <keep>, DeepL ignores them but outputs them.
    // So we translate the zzz terms ourselves and wrap them in <keep>.

    let textForDeepL = text;

    const zzzGlossary = {
      'Maestría de Anomalía': 'Anomaly Proficiency',
      'Tasa de Anomalía': 'Anomaly Mastery',
      'Motor Amplificador': 'W-Engine',
      'Disco de Pistas': 'Drive Disc',
      'Aturdimiento': 'Daze',
      'Probabilidad Crítica': 'CRIT Rate',
      'Probabilidad de Crítico': 'CRIT Rate',
      'Cavidad Cero': 'Hollow Zero',
      'Daño Critico': 'CRIT Damage',
      'Daño de Crítico': 'CRIT Damage',
      'Daño Crítico': 'CRIT Damage',
      'Daño de Golpe Crítico': 'CRIT Damage',
      'Daño Eléctrico': 'Electric Damage',
      'Daño Físico': 'Physical Damage',
      'Daño de Fuego': 'Fire Damage',
      'Daño de Hielo': 'Ice Damage',
      'Daño Etéreo': 'Ether Damage',
      'Daño de Éter': 'Ether Damage',
      'Daño Éter': 'Ether Damage',
      'Velo Etéreo': 'Ether Veil',
      'Velo Etereo': 'Ether Veil',
      'Técnica Especial EX': 'EX Special Attack',
      'Habilidad Especial EX': 'EX Special Attack',
      'Técnica Especial': 'Special Attack',
      'Habilidad Especial': 'Special Attack',
      'Ataque Básico': 'Basic Attack',
      'Ataque Normal': 'Basic Attack',
      'Ataque Cargado': 'Charged Attack',
      'Ataque en Cadena': 'Chain Attack',
      'Técnica Definitiva': 'Ultimate',
      'Asistencia Rápida': 'Quick Assist',
      'Asistencia Defensiva': 'Defensive Assist',
      'Asistencia Definitiva': 'Ultimate Assist',
      'Ataque de Asistencia': 'Assist Attack',
      'Evasión': 'Dodge',
      'Ataque de Carrera': 'Dash Attack',
      'Contraataque de Evasión': 'Dodge Counter',
      'Pasiva Central': 'Core Passive',
      'Habilidad Adicional': 'Additional Ability',
      'Desorden': 'Disorder',
      'Anomalía': 'Anomaly',
      'Anomalia': 'Anomaly',
      'Abloom': 'Abloom',
      'Vibrato': 'Vibrato',
      'Toxina': 'Toxin',
      'Hueso Corrosivo': 'Corrosive Bone',
      'Sombra de Serpiente': "Serpent's Shadow",
      'Contratiempo': 'Setback',
      'personaje de Ataque': 'Attack character',
      'personajes de Ataque': 'Attack characters',
      'personaje de Atacante': 'Attack character',
      'personajes de Atacante': 'Attack characters',
      'personaje Atacante': 'Attack character',
      'personajes Atacantes': 'Attack characters',
      'personajes de Ataque o Anomalía': 'Attack or Anomaly characters',
      'personaje de Anomalía': 'Anomaly character',
      'personajes de Anomalía': 'Anomaly characters',
      'personaje de Apoyo': 'Support character',
      'personajes de Apoyo': 'Support characters',
      'personaje de Defensa': 'Defensive character',
      'personajes de Defensa': 'Defensive characters',
      'personaje de Defensivo': 'Defensive character',
      'personajes de Defensivos': 'Defensive characters',
      'personaje Defensivo': 'Defensive character',
      'personajes Defensivos': 'Defensive characters',
      'personaje de Ruptura': 'Rupture character',
      'personajes de Ruptura': 'Rupture characters',
      'personaje de Aturdidor': 'Stunner character',
      'personajes de Aturdidores': 'Stunner characters',
      'personaje Aturdidor': 'Stunner character',
      'personajes de Aturdidores': 'Stunner characters',
      'personajes Aturdidores': 'Stunner characters',

      // Full attribute anomaly names to prevent piecemeal breakdown
      'Anomalía de Atributo Etéreo': 'Ether Attribute Anomaly',
      'Anomalía de Atributo Eléctrico': 'Electric Attribute Anomaly',
      'Anomalía de Atributo Fuego': 'Fire Attribute Anomaly',
      'Anomalía de Atributo Físico': 'Physical Attribute Anomaly',
      'Anomalía de Atributo Hielo': 'Ice Attribute Anomaly',
      'Anomalia de Atributo Etéreo': 'Ether Attribute Anomaly',
      'Anomalia de Atributo Eléctrico': 'Electric Attribute Anomaly',
      'Anomalia de Atributo Fuego': 'Fire Attribute Anomaly',
      'Anomalia de Atributo Fisico': 'Physical Attribute Anomaly',
      'Anomalia de Atributo Hielo': 'Ice Attribute Anomaly',

      'Impacto': 'Impact',
      'impacto': 'Impact',
      'Anomalía de Atributo Eléctrico': 'Electric Attribute Anomaly',
      'Anomalía de Atributo Físico': 'Physical Attribute Anomaly',
      'Anomalía de Atributo Fuego': 'Fire Attribute Anomaly',
      'Anomalía de Atributo Hielo': 'Ice Attribute Anomaly',
      'Anomalía de Atributo Éter': 'Ether Attribute Anomaly',
    };

    // 2. GLOSSARY REPLACEMENT
    // Sort glossary terms by length descending to match full phrases first, 
    // before short words sub-parts consume them (e.g., 'Anomalía de Atributo' vs 'Anomalía')
    const sortedGlossary = Object.entries(zzzGlossary).sort((a, b) => b[0].length - a[0].length);

    for (const [esTerm, enTerm] of sortedGlossary) {
      const regex = new RegExp(esTerm, 'gi');
      textForDeepL = textForDeepL.replace(regex, `<keep>${enTerm}</keep>`);
    }

    // 3. ICON AND VARIABLES AND PARENTHESIS PROTECTION
    // Wrap any [Icon...] in <keep> tags
    textForDeepL = textForDeepL.replace(/(\[[^\]]+\])/g, '<keep>$1</keep>');
    textForDeepL = textForDeepL.replace(/(\{VALOR_\d+\})/gi, '<keep>$1</keep>');

    // Protect parentheses from being converted to quotes by DeepL
    textForDeepL = textForDeepL.replace(/\(/g, '<keep>(</keep>');
    textForDeepL = textForDeepL.replace(/\)/g, '<keep>)</keep>');

    // COMBINE ADJACENT <keep> TAGS
    // Contiguous tags like <keep>(</keep><keep>Ether Veil</keep> confuse DeepL and cause quote/breakout errors
    textForDeepL = textForDeepL.replace(/<\/keep>\s*<keep>/g, '');

    // 4. DEEPL API CALL
    const DEEPL_URL = 'https://api-free.deepl.com/v2/translate';

    if (!process.env.DEEPL_API_KEY) {
      return NextResponse.json({ error: 'Config Error', details: 'Missing DEEPL_API_KEY in environment variables' }, { status: 500 });
    }

    const response = await fetch(DEEPL_URL, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: [textForDeepL],
        target_lang: targetLang.toUpperCase() === 'EN' ? 'EN-US' : targetLang.toUpperCase(),
        tag_handling: 'xml',
        ignore_tags: ['keep'],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`DeepL Error: ${response.status} - ${errorData}`);
      throw new Error(`DeepL API Error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    let translatedText = data.translations[0].text;

    // 5. RESTORE FORMATTING
    // DeepL sometimes wraps <keep> tags in quotes, thinking they might be specific entities.
    // Restore formatting
    translatedText = translatedText.replace(/["“”]<keep>(.*?)<\/keep>["“”]/gi, '$1');
    // Remove ANY remaining keep tags (case-insensitive and foolproof)
    translatedText = translatedText.replace(/<\/?keep>/gi, '');

    // Save to inMemoryCache
    inMemoryCache[cacheKey] = translatedText;

    return NextResponse.json({ translatedText, cached: false });

  } catch (error) {
    console.error('API Translate Error:', error);
    return NextResponse.json({ error: 'Failed to process translation', details: error.message }, { status: 500 });
  }
}
