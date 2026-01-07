// Agent 18 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 645,
      max: 8025
    },
    atk: {
      min: 95,
      max: 658
    },
    def: {
      min: 49,
      max: 612
    },
    impact: 86,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "94",
    anomalyMastery: "93",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "energy",
    valuePerNode: 0.12
  },
  materials: {
    weeklyBoss: {
      name: "Ferocious Grip",
      icon: "Item_Ferocious_Grip.webp",
    },
    eliteBoss: {
      name: "Higher Dimensional Data: Steel Malice",
      icon: "Item_Higher_Dimensional_Data_Steel_Malice.webp",
    }
  },
  coreSkillScaling: [
    ["140%", "22.6%", "88.0"],
    ["150%", "22.6%", "88.0"],
    ["160%", "22.6%", "88.0"],
    ["170%", "22.6%", "88.0"],
    ["180%", "22.6%", "88.0"],
    ["190%", "22.6%", "88.0"],
    ["200%", "22.6%", "88.0"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Bate de la Señorita",
      description: "Presiona [Icono Ataque] para activar: Golpea hacia adelante hasta 4 veces, infligiendo Daño Físico y Daño Fuego. Cuando Lucy usa su 4to (Ataque Básico), los (Jabalíes Guardianes) actualmente en el campo lanzarán (Jabalíes Guardianes: ¡Giro de Bateo!) juntos.",
      tags: ["Físico", "Fuego", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Jabalíes Guardianes: ¡A las Armas!",
      description: "En combate, los (Jabalíes Guardianes) usarán aleatoriamente un bate de béisbol, guantes de boxeo, o una resortera para atacar automáticamente a los enemigos, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Jabalíes Guardianes: ¡Giro de Bateo!",
      description: "Cuando Lucy usa el 4to (Ataque Básico), o cuando obtiene el estado de (¡Ánimo!), los (Jabalíes Guardianes) girarán sus bates de béisbol en un movimiento continuo, infligiendo Daño Físico a enemigos cercanos. Si el ataque no puede ejecutarse inmediatamente, los (Jabalíes Guardianes) recordarán el número requerido de veces para ejecutarlo.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: ¡Foul!",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: ¡Jabalí Intrépido!",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Golpea rápidamente a enemigos en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: ¡Colmillo de Regreso!",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Golpea enemigos en frente, infligiendo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: ¡Golpe Sólido!",
      description: "Presiona [Icono Especial] para activar: Llama a un (Jabalí Guardián) y lánzalo como un (Hit de Línea). El (Jabalí Guardián) causará una explosión al golpear enemigos o paredes, infligiendo Daño Fuego. Mantén [Icono Especial] para activar: Llama a un (Jabalí Guardián) y lánzalo como un (Elevado). El (Jabalí Guardián) causará una explosión al aterrizar, infligiendo Daño Fuego.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: ¡Jonrón!",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Llama a un (Jabalí Guardián) y lánzalo como un (Hit de Línea). El (Jabalí Guardián) causará una explosión al golpear enemigos o paredes, infligiendo masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad. Cuando la habilidad golpea a un enemigo, activa una (Asistencia Rápida). Con suficiente Energía, mantén [Icono Especial EX] para activar: Llama a un (Jabalí Guardián) y lánzalo como un (Elevado). El (Jabalí Guardián) causará una explosión al aterrizar, infligiendo masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad. Cuando la habilidad golpea a un enemigo, activa una (Asistencia Rápida).\n\n¡Ánimo!\nDespués de usar (Técnica Especial EX), cuando un (Jabalí Guardián) activa una explosión, aplicará el estado (¡Ánimo!) a todos los miembros del escuadrón y Bangboo, y a los (Jabalíes Guardianes) mismos. Mientras están bajo el estado (¡Ánimo!), el ATK de los aliados aumenta en {VALOR_2} del ATK inicial de Lucy + {VALOR_3}, hasta un máximo de 600. El estado (¡Ánimo!) dura 10s cuando se golpea un (Hit de Línea), y 15s cuando se golpea un (Elevado). Activaciones repetidas reinician la duración.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: ¡Grand Slam!",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Lucy salta y envía un (Jabalí Guardián) a enemigos en frente en una gran área, infligiendo masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad. Cuando la habilidad golpea a un enemigo, activa una (Asistencia Rápida).",
      tags: ["Fuego", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: ¡Jonrón de Oro!",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Lanza a todos los (Jabalíes Guardianes) secuencialmente, infligiendo masivo Daño Fuego en una gran área a enemigos adelante. Mientras usa esta habilidad, otros miembros del escuadrón recuperan 10 de Energía, y el siguiente personaje en cambiar gana 20 de Energía adicional. El personaje es invulnerable mientras usa esta habilidad. Cuando la habilidad golpea a un enemigo, activa una (Asistencia Rápida).",
      tags: ["Fuego", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Guardia de Melena Carmesí",
      description: "Cuando Lucy usa su (Técnica Especial) o (Técnica Especial EX), un (Jabalí Guardián) se unirá a la batalla y llamará a otros dos (Jabalíes Guardianes). Los (Jabalíes Guardianes) heredan el ATK, Impacto y Maestría de Anomalía de Lucy. El buff de (¡Ánimo!) para los (Jabalíes Guardianes) aumenta al {VALOR_1} del efecto original, y su frecuencia de ataque aumenta.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: ¡Bateador Arriba!",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción o es un personaje (Ruptura): Los (Jabalíes Guardianes) heredan la Probabilidad de Crit y el Daño Crítico de Lucy.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: ¡Pelotazo!",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea enemigos en frente, infligiendo Daño Fuego. El personaje es invulnerable durante el ataque.",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: ¡Quieto en Base!",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: ¡Carrera Anotada!",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Golpea enemigos en frente, infligiendo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Formaciones de Entrenamiento",
      description: "Cuando los (Jabalíes Guardianes) lanzan (Jabalíes Guardianes: ¡Giro de Bateo!), Lucy recupera 2 de Energía. Este efecto puede activarse una vez cada 15s, con cada (Jabalí Guardián) teniendo su propio enfriamiento separado.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Pequeño Capitán Jabalí",
      description: "Cuando Lucy usa un (Ataque en Cadena) o (Definitiva), otorga a todos los miembros del escuadrón y Bangboo, y a los (Jabalíes Guardianes) mismos el estado de (¡Ánimo!) por 10s.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Supervisor de Puño de Hierro",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Juego de Pelota Caótico",
      description: "Mientras está en el estado (¡Ánimo!), el Daño Crítico de los aliados aumenta en un 10% adicional.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Princesa de las Tierras Salvajes",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Colmillos Feroces de Fuego",
      description: "Cuando otro miembro del escuadrón en el estado (¡Ánimo!) golpea a un enemigo con una (Técnica Especial EX), un (Jabalí Guardián) caerá del cielo y causará una explosión, infligiendo Daño Fuego igual al 300% del ATK del (Jabalí Guardián). Esto extenderá la duración del buff (¡Ánimo!) para todos los miembros del escuadrón y Bangboo, y para los (Jabalíes Guardianes) mismos por 5s. La duración puede aumentar hasta 3 veces, con una duración máxima de 30s. Refrescar el estado (¡Ánimo!) reinicia el conteo de acumulaciones. Después de la explosión del (Jabalí Guardián), lanzará (Jabalíes Guardianes: ¡Giro de Bateo!).",
      tags: ["Mindscape 6"]
    }
  ]
};
