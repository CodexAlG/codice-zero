// Agent 3 - Lycaon - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 677,
      max: 8416
    },
    atk: {
      min: 105,
      max: 728
    },
    def: {
      min: 49,
      max: 606
    },
    impact: 119,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "91",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "Impacto",
    valuePerNode: 6
  },
  materials: {
    weeklyBoss: {
      name: "Finale Dance Shoes",
      icon: "Item_Finale_Dance_Shoes.webp",
    },
    eliteBoss: {
      name: "Higher Dimensional Data: Ethereal Pursuit",
      icon: "Item_Higher_Dimensional_Data_Ethereal_Pursuit.webp",
    }
  },
  coreSkillScalingColors: [
    "text-[#22d3ee]", // Hielo (Cyan)
    "text-[#22d3ee]", // Hielo (Cyan)
    "text-[#22d3ee]"  // Hielo (Cyan)
  ],
  coreSkillScaling: [
    ["40%", "10%", "6%"],
    ["46.6%", "11.7%", "6%"],
    ["53.3%", "13.3%", "6%"],
    ["60%", "15%", "6%"],
    ["66.6%", "16.7%", "6%"],
    ["73.3%", "18.3%", "6%"],
    ["80%", "20%", "6%"]
  ],
  potentialSkillScaling: [
    ["5%"],
    ["7.5%"],
    ["10%"],
    ["12.5%"],
    ["15%"]
  ],
  potential: {
    name: "Despertar Potencial: Hielo Propagado",
    description: "Cuando Lycaon está en estado (Coordinación), el Impacto aumenta en un {VALOR_1}."
  },
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Cazador de Luna",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 5 golpes en frente, infligiendo Daño Físico. Mantén presionado [Icono Ataque] para cargar, aumentando el poder del ataque e infligiendo Daño Hielo.",
      tags: ["Físico", "Hielo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Posición Adecuada",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión deslizante. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Mantenlo Limpio",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Se desliza hacia adelante, lanzando una serie de golpes en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Manual de Etiqueta",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Golpea enemigos en frente, infligiendo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Evasión"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Manada de Lobos",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Lanza un ataque hacia adelante a enemigos, causando Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Intervención de Caza",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea el ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Contraataque Vengativo",
      description: "(Test1) Después de activar (Asistencia Defensiva), mantén [Icono Ataque] para activar: Lanza múltiples ataques rápidos hacia adelante a enemigos, causando Daño Hielo. Durante la activación del ataque, presiona (Asistencia Rápida) activará (Asistencia Rápida); Durante la activación del ataque, presiona [Ataque Básico] y lanza hacia adelante.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Hora de Cazar",
      description: "Presiona [Icono Especial] para activar: Desata una serie de golpes en frente, infligiendo Daño Hielo. Mantén presionado [Icono Especial] para cargar, aumentando su poder. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Emoción de la Caza",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata una serie de poderosos golpes en frente, infligiendo masivo Daño Hielo. Mantén presionado [Icono Especial EX] para cargar, consumiendo Energía y mejorando el poder del ataque. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Como Desee",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata una serie de poderosos golpes a enemigos en una pequeña área en frente, infligiendo masivo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Misión Cumplida",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata múltiples golpes poderosos a enemigos en una gran área, infligiendo masivo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Garras Metálicas",
      description: "(Test1) Cuando Lycaon carga su (Ataque Básico) hasta completarlo o activa (Parry con Éxito), el ataque inflige {VALOR_1} más de Aturdimiento. Cuando (Técnica Especial EX: Emoción de la Caza), (Ataque de Asistencia: Contraataque Vengativo) y (Ataque de Asistencia: Contraataque Vengativo Potenciado) o (Hielo) golpea a un enemigo, la RES al Daño Hielo del objetivo disminuye un 25%, acumulando daño de (Hielo) aumenta hasta un {VALOR_2}. Durante 30s. En la activación de (Ataque de Asistencia: Contraataque Vengativo) y (Ataque de Asistencia: Contraataque Vengativo Potenciado), Lycaon entra en estado (Coordinación), durando 8 segundos. Mientras está en estado (Coordinación): (Contraataque Vengativo: Hielo) termina y descompone en cualquiera de los siguientes: un (Ataque de Asistencia: Contraataque Vengativo Potenciado); Lycaon puede usar el primer ataque, hasta el segundo ataque. En estado (Parry con Éxito), (Ataque de Asistencia: Contraataque Vengativo) puede lanzar directamente después del segundo (Ataque Básico). El estado (Coordinación) terminará cuando el personaje cambie. El (Contraataque Vengativo: Hielo) causa aumento de Aturdimiento en un {VALOR_3}, durante 24s como máximo en una vez (Parry con Éxito).",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Manada Elegante",
      description: "Cuando hay personajes con la misma Facción o del mismo rol del equipo y se activa: Normalmente, o con otros miembros del equipo con otro rol activándose. Cuando Lycaon usa ataques que golpean enemigos en estado de Aturdimiento, el objetivo tiene un aumento de Aturdimiento del 35%.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Ímpetu de Luna Llena",
      description: "Cuando la (Técnica Especial EX: Emoción de la Caza) de Lycaon golpea a un enemigo, el Aturdimiento del ataque aumenta en un 12%. Este efecto puede activarse una vez cada 8s. Cuando carga su (Técnica Especial EX: Emoción de la Caza) hasta completarlo, este buff aumentará en un 10% adicional.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Retroalimentación de Energía",
      description: "Al Aturdir un enemigo o activar el (Ataque en Cadena) de un miembro del escuadrón, Lycaon gana 5 de Energía. Puede activarse una vez cada 1s.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Entrenamiento de Asistente",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Comportamiento Elegante",
      description: "Si Lycaon es atacado mientras usa un (Ataque Básico) o (Técnica Especial), ganará inmediatamente un Escudo igual al 7.5% de su HP Máx, durando 15s. Durante la duración del Escudo, su nivel de Anti-Interrupción aumenta. Este efecto puede activarse una vez cada 15s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Naturaleza Alfa",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Cazador Despiadado",
      description: "Cuando un ataque cargado golpea a un enemigo, el objetivo sufre 10% más de Daño de Lycaon, acumulándose hasta 5 veces y durando 12s. Solo se puede ganar una acumulación por uso de habilidad, y las activaciones repetidas reinician la duración.",
      tags: ["Mindscape 6"]
    }
  ]
};
