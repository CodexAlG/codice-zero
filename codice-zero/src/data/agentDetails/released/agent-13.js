// Agent 13 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 555,
      max: 6907
    },
    atk: {
      min: 113,
      max: 787
    },
    def: {
      min: 49,
      max: 606
    },
    impact: 91,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "92",
    anomalyMastery: "91",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  materials: {
    weeklyBoss: {
      name: "Ferocious Grip",
      icon: "Item_Ferocious_Grip.webp",
    },
    eliteBoss: {
      name: "Higher Dimensional Data: Ethereal Pursuit",
      icon: "Item_Higher_Dimensional_Data_Ethereal_Pursuit.webp",
    }
  },
  coreSkillScaling: [
    ["25%"],
    ["29.1%"],
    ["33.3%"],
    ["37.5%"],
    ["41.6%"],
    ["45.8%"],
    ["50%"], // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Potencia de Fuego Completa",
      description: "Presiona [Icono Ataque] para activar: Desata un ataque perforante, infligiendo Daño Físico. Presiona repetidamente o manten presionado para entrar en (Disparo en Cuclillas) para extender la duración del ataque. Mueve el stick/joystick durante el (Disparo en Cuclillas) para lanzar (Disparo Rodante) y ajustar la posición del personaje, infligiendo Daño Físico. Deja de presionar o mantener durante el (Disparo en Cuclillas) para lanzar (Disparo Final) a enemigos en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Negocio Arriesgado",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Sanción de Luz Estelar",
      description: "Cuando mueves el stick/joystick durante una evasión, presiona [Icono Ataque]: Lanza un ataque perforante a enemigos cercanos en un área grande, infligiendo Daño Físico. Cuando no mueves el stick/joystick durante una evasión, presiona [Icono Ataque]: Lanza un ataque perforante a enemigos en una línea, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Pelea Justa",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Perfora enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Quédense Quietos",
      description: "Presiona [Icono Especial] para activar: Realiza hasta 3 ataques perforantes en una línea, infligiendo Daño Físico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Tiempo de Limpieza",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un poderoso ataque perforante en una línea, infligiendo masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Espejismo de Luz Estelar",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un poderoso ataque perforante a enemigos circundantes en un área grande, infligiendo masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Luz Estelar, Brilla Fuerte",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata un poderoso ataque perforante a enemigos circundantes en un área grande, infligiendo masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Disparo Estable",
      description: "El Daño de Billy aumenta en un {VALOR_1} cuando entra en (Disparo en Cuclillas) durante su (Ataque Básico). El efecto termina si se mueve, regresa a espera, o es derribado o lanzado por un ataque.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Equipo Luz Estelar",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Después que Billy usa un (Ataque en Cadena), el Daño de su siguiente (Definitiva) aumenta en un 50%, acumulándose hasta 2 veces. Este efecto se reinicia cada vez que una (Definitiva) es activada.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Poder de Trabajo en Equipo",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Lanza un ataque perforante a enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Evasiva: Giro Relámpago",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Esquiva el ataque enemigo y activa (Visión Vital). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Disparo Fatal",
      description: "Presiona [Icono Ataque] después de una (Asistencia Evasiva) para activar: Perfora enemigos en un área grande en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Entrada Deslumbrante",
      description: "Cuando Billy golpea a un enemigo con un (Ataque de Carrera) o (Contraataque de Evasión), gana 2.7 de Energía adicional. Puede activarse una vez cada 5s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Pistolero Errante",
      description: "El Daño del (Contraataque de Evasión) de Billy aumenta en un 25%. Los (Disparos Rodantes) durante sus (Ataques Básicos) cuentan como evasiones, haciendo a Billy Invulnerable durante la activación de la habilidad y capaz de activar (Evasiones Perfectas). Cuando un (Disparo Rodante) activa una (Evasión Perfecta), automáticamente seguirá con un (Contraataque de Evasión).",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Enseñanzas de los Caballeros de la Luz Estelar",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Balística de Luz Estelar",
      description: "Cuando Billy golpea a un enemigo con su (Técnica Especial EX), la Probabilidad de Crit de la habilidad aumenta basada en la distancia con el enemigo. Mientras más cerca esté del objetivo, mayor será el efecto, hasta un aumento máximo del 32%.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Construcción Tecnológica Perdida",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Héroe de Luz Estelar",
      description: "Cuando Billy acumula 10 golpes en enemigos o activa una (Evasión Perfecta), su Daño aumenta en un 6%, acumulándose hasta 5 veces y durando hasta que es derribado o lanzado por un ataque.",
      tags: ["Mindscape 6"]
    }
  ]
};
