// Agent 32 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 617,
      max: 7673
    },
    atk: {
      min: 127,
      max: 880
    },
    def: {
      min: 49,
      max: 606
    },
    impact: 86,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "108",
    anomalyMastery: "118",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "tasa",
    valuePerNode: 12
  },
  coreSkillScalingColors: [
    "text-[#d946ef]", // Etéreo (Pink/Magenta)
    "text-[#3b82f6]", // Eléctrico (Blue)
    "text-[#ef4444]", // Fuego (Red)
    "text-[#eab308]", // Físico (Yellow)
    "text-[#22d3ee]", // Hielo (Cyan)
    "text-green-400"  // Default/Extra (Green)
  ],
  coreSkillScaling: [
    ["3.07%", "1.6%", "4%", "0.37%", "0.54%", "12%"],
    ["3.59%", "1.86%", "4.66%", "0.44%", "0.63%", "12%"],
    ["4.11%", "2.12%", "5.32%", "0.51%", "0.72%", "12%"],
    ["4.63%", "2.38%", "5.98%", "0.58%", "0.81%", "12%"],
    ["5.15%", "2.64%", "6.64%", "0.65%", "0.9%", "12%"],
    ["5.65%", "2.9%", "7.3%", "0.7%", "0.99%", "12%"],
    ["6.15%", "3.2%", "8%", "0.75%", "1.08%", "12%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Golpe Emplumado",
      description: "Presiona [Icono Ataque] para activar: Realiza hasta cuatro ataques en frente, causando Daño Fisico y Daño Etereo. Después de activar el cuarto ataque, entra en el estado (Mujer Noble). Con (Plumas de Vuelo) disponibles, mantener [Icono Ataque] durante el cuarto ataque activará el estado (Vestido Aleteante).",
      tags: ["Físico", "Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Mujer Noble - Vals",
      description: "Mientras está en el estado (Mujer Noble), presiona [Icono Ataque] para activar: Se lanza hacia adelante con un ataque que causa Daño Etereo y recupera 1 (Pluma de Guardia). El personaje es invulnerable mientras usa esta habilidad. Si se activa una (Evasion Perfecta) durante el dash, gana 1 (Pluma de Vuelo) adicional. Si hay (Plumas de Vuelo) disponibles después de la habilidad, entra en el estado (Vestido Aleteante), el cual puede ser cancelado manteniendo presionado [Icono Dodges] cuando se usa la habilidad.",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Vestido Aleteante - Suspension",
      description: "Presiona [Icono Ataque] mientras está en el estado (Vestido Aleteante) para activar: Ataca un área adelante, causando Daño Etereo. Después de la activación, esta habilidad consumirá todas las (Plumas de Vuelo), y cada (Pluma de Vuelo) consumida otorga 1 (Pluma de Guardia). El personaje es invulnerable mientras usa esta habilidad. Cuando se cambian personajes durante el estado (Vestido Aleteante), Vivian realizará automáticamente (Ataque Basico: Vestido Aleteante - Suspension). Mientras está en el estado (Vestido Aleteante), presiona [Icono Dodges] para salir del estado.",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Flor de Pluma",
      description: "Después de que cualquier miembro del escuadrón golpea a un objetivo con un (Tecnica Especial EX), Vivian consumirá 1 (Pluma de Guardia) para lanzar (Ataque Basico: Flor de Pluma). Lanza un ataque al objetivo, causando Daño Etereo, activándose como máximo una vez por uso de una habilidad. Este efecto puede activarse incluso si Vivian está fuera del campo. Un máximo de 5 (Plumas de Guardia) pueden ser almacenadas.",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Corriente de Luz",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Melodia de Espina de Plata",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza un ataque de empuje a los enemigos en frente, causando Daño Fisico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Reverberacion de Hoja de Ala",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Lanza un ataque a los enemigos en frente, causando Daño Fisico y Daño Etereo. El personaje es invulnerable mientras usa esta habilidad. Después de activar la habilidad, entra en el estado (Mujer Noble). Cuando hay (Plumas de Vuelo) disponibles, mantener [Icono Ataque] durante la activación de la habilidad permite entrar en el estado (Vestido Aleteante).",
      tags: ["Físico", "Etéreo", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Evasion: Pasos Delicados",
      description: "Cuando está en el estado (Mujer Noble) y a punto de ser atacada, una evasión automática será activada, durante la cual el personaje será invulnerable, pero una (Evasion Perfecta) no será activada. Después de activar la habilidad, se entra en el estado (Mujer Noble).",
      tags: ["Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Cancion de Alas de Plata",
      description: "Presiona [Icono Especial] para activar: Corre rápidamente hacia adelante, causando Daño Fisico y Daño Etereo. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Físico", "Etéreo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Requiem Violeta",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso ataque hacia adelante que causa masivo Daño Etereo y gana 3 (Plumas de Vuelo). El personaje es invulnerable mientras usa esta habilidad. Después de usar la habilidad, mantén presionado [Icono Dodges] durante el uso de la habilidad para entrar en el estado (Vestido Aleteante).",
      tags: ["Etéreo", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Guardia de Escarcha",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Lanza un ataque a los enemigos en frente, causando Daño Fisico y Daño Etereo. El personaje es invulnerable mientras usa esta habilidad. Después de que la habilidad se activa, entra en el estado (Mujer Noble). Con (Plumas de Vuelo) disponibles, mantén presionado [Icono Ataque] durante la activación de la habilidad para entrar en el estado (Vestido Aleteante).",
      tags: ["Físico", "Etéreo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Formacion de Paraguas de Plata",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea el ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Ejecucion de Hoja de Pluma",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Lanza un ataque a los enemigos en frente, causando Daño Etereo y ganando 2 (Plumas de Vuelo). El personaje es invulnerable mientras usa esta habilidad. Después de que la habilidad se activa, entra en el estado (Vestido Aleteante), el cual puede ser cancelado manteniendo presionado [Icono Dodges] durante la habilidad.",
      tags: ["Etéreo", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Canto Funebre del Destino",
      description: "Cuando (Ataque Basico: Flor de Pluma) golpea a un objetivo que está sufriendo de una (Anomalia) de Etereo, Electrico, Fuego, Fisico o Hielo, activará (Florecer), causando Daño de Anomalia de Atributo adicional. El DAÑO adicional es {VALOR_1}/{VALOR_2}/{VALOR_3}/{VALOR_4}/{VALOR_5} por cada 10 puntos de Competencia de Anomalía del DAÑO de Anomalía original. Cuando (Ataque Basico: Vestido Aleteante - Suspension) o (Ataque Basico: Flor de Pluma) golpea a un objetivo sufriendo cualquier (Anomalia de Atributo), infligirá (Profecia de Vivian), causando que el objetivo reciba Daño Etereo igual al 55% del ATK de Vivian cada 0.55s. Este DAÑO puede activar DAÑO adicional de (Anomalias de Atributo). (Profecia de Vivian) termina cuando el objetivo ya no está sufriendo una (Anomalia de Atributo). Al entrar al campo de batalla, Vivian gana 2 (Plumas de Vuelo).",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Lagrimas Profeticas",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Anomalia) o comparte la misma Facción: Cuando otro miembro del escuadrón aplica una (Anomalia de Atributo) a un enemigo, Vivian consumirá 1 (Pluma de Guardia) para lanzar (Ataque Basico: Flor de Pluma) en el objetivo. Este efecto puede activarse una vez cada 0.5s. El Daño de (Corrupcion) causado por todos los miembros del escuadrón y el Daño de (Desorden) del estado (Corrupcion) aumenta en un {VALOR_6}.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Coro de Alas Celestiales",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Lanza un poderoso ataque en un área grande de enemigos adelante, causando masivo Daño Etereo y ganando 3 (Plumas de Vuelo). El personaje es invulnerable mientras usa esta habilidad. Después de que la habilidad se activa, entra en el estado (Vestido Aleteante), el cual puede ser cancelado manteniendo presionado [Icono Dodges] durante la habilidad.",
      tags: ["Etéreo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Cancion del Pajaro Elevandose",
      description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Lanza un poderoso ataque en un área grande de enemigos adelante, causando masivo Daño Etereo y ganando 5 (Plumas de Vuelo). El personaje es invulnerable mientras usa esta habilidad. Después de que la habilidad se activa, entra en el estado (Vestido Aleteante), el cual puede ser cancelado manteniendo presionado [Icono Dodges] durante la habilidad.",
      tags: ["Etéreo", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "Caminando hacia el Huerto en Primavera",
      description: "Cuando un total de 4 (Plumas de Guardia) son consumidas, gana 1 (Pluma de Vuelo). Todo el Daño de (Anomalia de Atributo) y Daño de (Desorden) recibido por objetivos bajo (Profecia de Vivian) aumenta en un 16%.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Noche Tormentosa, Noche Tormentosa",
      description: "La Tasa de Acumulación de (Anomalia Eter) de Vivian aumenta en un 25%, los beneficios de (Florecer) de la Maestría de Anomalía se aumentan al 130% del valor original, y 15% de la RES a Todo-Atributo del objetivo es ignorada.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Otro y lo Mismo",
      description: "Nivel de (Ataque Basico), (Ataque de Asistencia), (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "El Viento Entre las Cañas",
      description: "(Ataque Basico: Vestido Aleteante - Suspension) y (Ataque Basico: Flor de Pluma) siempre harán CRIT al golpear, y también aumentarán el ATK de Vivian en un 12% por 12s. Activaciones repetidas reinician la duración. Al entrar al campo de batalla, Vivian gana inmediatamente 5 (Plumas de Guardia).",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Soneto",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Vivian",
      description: "El Daño de (Florecer) aumenta en un 40%. Al activar una (Evasion Perfecta) durante (Ataque Basico: Mujer Noble - Vals) o usando (Ataque Basico: Flor de Pluma), (Tecnica Especial EX: Requiem Violeta) gana 1 (Pluma de Vuelo) adicional. Lanzar (Ataque Basico: Vestido Aleteante - Suspension) consume todas las (Plumas de Guardia), sin embargo, el ataque descendente activa una instancia especial de (Florecer). Vivian consumirá la cantidad proporcional de Competencia de Anomalía adicional en esa instancia de (Florecer), consumiendo un máximo de 5 (Plumas de Guardia) para aumentar el Daño hasta un máximo de 5 veces el valor original.",
      tags: ["Mindscape 6"]
    }
  ]
};
