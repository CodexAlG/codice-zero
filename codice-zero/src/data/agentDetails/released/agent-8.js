// Agent 8 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 608,
      max: 7560
    },
    atk: {
      min: 131,
      max: 910
    },
    def: {
      min: 47,
      max: 587
    },
    impact: 92,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "97",
    anomalyMastery: "96",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  materials: {
    weeklyBoss: {
      name: "Agarre Feroz",
      icon: "Item_Ferocious_Grip.gif",
    },
    eliteBoss: {
      name: "Datos de Dimensiones Superiores: Terror Carmesí",
      icon: "Item_Higher_Dimensional_Data_Crimson_Awe.webp",
    }
  },
  coreSkillScaling: [
    ["30%"],
    ["35%"],
    ["40%"],
    ["45%"],
    ["50%"],
    ["55%"],
    ["60%"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Zarpazo Gatuno",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 5 cortes, infligiendo Daño Físico. En el último golpe, hay un 33.33% de probabilidad de repetir este golpe 3 veces.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Hoja Carmesí",
      description: "Mantén [Icono Ataque] durante los primeros 3 golpes del (Ataque Básico) de Nekomata para activar: Corta enemigos en frente y pasa a través de ellos, infligiendo Daño Físico. Tras la activación, hay un 33.33% de probabilidad de repetir este ataque 3 veces.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: ¡No puedes atraparme, miau!",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: ¡Por aquí!",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta enemigos en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Garras Fantasma",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Corta enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Ataque Sorpresa",
      description: "Presiona [Icono Especial] para activar: Desata un golpe descendente, infligiendo Daño Físico. El nivel de Anti-Interrupción aumenta durante esta habilidad.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: ¡Súper Ataque Sorpresa!",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso corte de caída que inflige masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Zarpazo de Garra",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un corte poderoso a enemigos en frente en una gran área, infligiendo masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Aplastamiento de Garra",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata cortes poderosos a enemigos en frente en una gran área, infligiendo masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Patas Sigilosas",
      description: "Cuando el (Contraataque de Evasión) o (Asistencia Rápida) de Nekomata golpea a un enemigo, su Daño aumenta en un {VALOR_1} por 6s.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Pasarela",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Después de que cualquier personaje inflige (Asalto), aumenta el Daño de la siguiente (Técnica Especial EX) de Nekomata en un 35%, acumulándose hasta 2 veces.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Pata de Gato",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Defensa Desesperada",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Golpe de Sombra",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Carga y corta enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Cazadora de Pájaros",
      description: "Cuando Nekomata golpea a un enemigo por detrás, ignora el 16% de la RES Física de su objetivo. Si el enemigo está Aturdido, todos los ataques de Nekomata contra ellos se consideran ataques por la espalda.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Gato y Ratón",
      description: "Cuando solo hay un enemigo en el campo y Nekomata está en combate, su Tasa de Generación de Energía aumenta en un 25%.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Cola Izquierda Curiosa",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Afilando Garras",
      description: "Cuando Nekomata usa su (Técnica Especial EX), su Probabilidad de Crit aumenta en un 7% por 15s, acumulándose hasta 2 veces, con la duración de cada acumulación calculada por separado.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Cola Derecha de la Suerte",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Linaje de Depredador",
      description: "Cuando Nekomata lanza un (Ataque en Cadena) o usa su (Definitiva), su Daño Crítico aumenta en un 18%, acumulándose hasta 3 veces. El efecto expira cuando ya no está en combate. Este efecto gana el máximo de acumulaciones inmediatamente al derrotar a un enemigo.",
      tags: ["Mindscape 6"]
    }
  ]
};
