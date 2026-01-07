// Agent 6 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 692,
      max: 8609
    },
    atk: {
      min: 103,
      max: 717
    },
    def: {
      min: 48,
      max: 600
    },
    impact: 83,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "93",
    anomalyMastery: "92",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "pen ratio",
    valuePerNode: 4.8
  },
  materials: {
    weeklyBoss: {
      name: "Zapatos de Baile Finales",
      icon: "Item_Finale_Dance_Shoes.webp",
    },
    eliteBoss: {
      name: "Datos de Dimensiones Superiores: Avance Destructivo",
      icon: "Item_Higher_Dimensional_Data_Destructive_Advance.webp",
    }
  },
  coreSkillScaling: [
    ["6%"],
    ["7.5%"],
    ["9%"],
    ["10.2%"],
    ["10.8%"],
    ["11.4%"],
    ["12%"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Golpear al Tonto",
      description: "Presiona [Icono Ataque] para activar: Ordena a Drusilla y Anastella atacar hasta 4 veces, infligiendo Daño Físico y Daño Eléctrico. Realizar otras acciones con Rina durante los ataques de Drusilla y Anastella no interrumpirá el conteo del combo del (Ataque Básico) de Rina.",
      tags: ["Físico", "Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Ahuyentar al Necio",
      description: "Mantén [Icono Ataque] o presiona [Icono Especial] para activar: Llama de vuelta a Drusilla y Anastella para girarlas alrededor en un ataque a distancia, infligiendo Daño Eléctrico. El nivel de Anti-Interrupción aumenta durante esta habilidad.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Ajuste de Vestido",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Sorpresa Repentina",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Ordena a Drusilla y Anastella ejecutar un ataque penetrante, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Llamada de Bangboo",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Ordena a Drusilla y Anastella girar hacia adelante y activar una explosión, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Golpear al Zoquete",
      description: "Presiona [Icono Especial] para activar: Ordena a Anastella ejecutar un golpe descendente, infligiendo Daño Eléctrico. El nivel de Anti-Interrupción aumenta durante esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Truco de Desaparición del Tonto",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Ordena a Drusilla y Anastella ejecutar múltiples golpes descendentes, infligiendo masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad. Una (Asistencia Rápida) se activa cuando esta habilidad golpea a un enemigo.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Código de Conducta",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Ordena a Drusilla y Anastella empujar hacia adelante y generar un campo eléctrico en forma de bola que inflige masivo Daño Eléctrico. Durante esta habilidad, Drusilla y Anastella son incapaces de realizar (Ataques Básicos), (Ataques de Carrera), (Técnicas Especiales), y (Técnicas Especiales EX), pero pueden ser llamadas al lado de Rina mediante (Ataque Básico: Ahuyentar al Necio). El personaje es invulnerable mientras usa esta habilidad. Una (Asistencia Rápida) se activa cuando esta habilidad golpea a un enemigo.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Las Sirvientas de la Reina",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Ordena a Drusilla y Anastella girar hacia adelante, infligiendo masivo Daño Eléctrico. Durante esta habilidad, Drusilla y Anastella son incapaces de responder a comandos de (Ataque Básico), (Ataque de Carrera), (Técnica Especial), o (Técnica Especial EX), pero pueden ser llamadas al lado de Rina mediante (Ataque Básico: Ahuyentar al Necio). Al activar esta habilidad, los otros miembros del escuadrón recuperan 10 de Energía. El siguiente personaje en cambiar recupera 20 de Energía adicional. El personaje es invulnerable mientras usa esta habilidad. Una (Asistencia Rápida) se activa cuando esta habilidad golpea a un enemigo.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Pequeña Compañera de Destrucción",
      description: "Cuando se ordena a Drusilla o Anastella atacar, la Tasa de PEN de otros miembros del escuadrón aumenta junto con la de Rina, en un 25% de la Tasa de PEN de Rina + {VALOR_1}, hasta un 30%. El efecto termina cuando tanto Drusilla como Anastella regresan a Rina.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Banquete de Perfección",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Aumenta la duración de (electrochoque) infligido a enemigos por cualquier personaje en 3s. Cuando hay enemigos bajo (electrochoque) en el campo, el Daño Eléctrico de todos los miembros del escuadrón aumenta en un 10%.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Alemanda de Compás Doble",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Ordena a Drusilla y Anastella girar hacia adelante y activar una explosión, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Currante de Compás Triple",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Esquiva el ataque del enemigo y activa (Vista Vital). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Gavota de Compás Cuádruple",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Ordena a Drusilla y Anastella empujar hacia adelante y generar un vórtice eléctrico, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Dúo de Baile",
      description: "Tras ser enviadas a lanzar un ataque, Drusilla y Anastella permanecen en el lugar por 5.5s adicionales antes de regresar a Rina. El efecto ganado de (Pasiva Central: Pequeña Compañera de Destrucción) por personajes dentro de 10m aumenta al 130% del valor original.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Modelo del Maestro",
      description: "Al convertirse en el personaje activo en combate, el Daño de Rina aumenta en un 15% por 12s. Este efecto puede activarse una vez cada 18s.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Especialidad de la Jefa de Sirvientas",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Aguja y Martillo",
      description: "La Regeneración de Energía de Rina aumenta en 0.5/s cuando tanto Drusilla como Anastella están desplegadas. El efecto termina cuando Drusilla o Anastella regresan a Rina.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Jefa de Sirvientas Perfeccionista",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Terror de la Noche Tormentosa",
      description: "Cuando una (Técnica Especial EX), (Ataque en Cadena) o (Definitiva) golpea a un enemigo, el Daño Eléctrico de todo el escuadrón aumenta en un 15% por 8s.",
      tags: ["Mindscape 6"]
    }
  ]
};
