// Agent 17 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 580,
      max: 7219
    },
    atk: {
      min: 114,
      max: 791
    },
    def: {
      min: 50,
      max: 622
    },
    impact: 95,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "86",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  materials: {
    weeklyBoss: {
      name: "Living Drive",
      icon: "Item_Living_Drive.webp",
    },
    eliteBoss: {
      name: "Higher Dimensional Data: Destructive Advance",
      icon: "Item_Higher_Dimensional_Data_Destructive_Advance.webp",
    }
  },
  coreSkillScaling: [
    ["12%", "20%"],
    ["14%", "23.3%"],
    ["16%", "26.6%"],
    ["18%", "30%"],
    ["20%", "33.3%"],
    ["22%", "36.6%"],
    ["24%", "40%"], // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Ejercicios Entusiastas",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 4 ataques mixtos en frente, infligiendo Daño Físico. El 4to golpe es un (Ataque de Martinete).",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Ejercicios Entusiastas (Modo Explosivo)",
      description: "Presiona [Icono Ataque] mientras Anton está en (Modo Explosivo) para activar: Desata hasta 3 ataques mixtos en frente, infligiendo masivo Daño Eléctrico. Durante el 2do (Ataque de Taladro) y el 3er (Ataque de Martinete), presiona repetidamente o presiona [Icono Ataque] para extender la duración de la habilidad.",
      tags: ["Eléctrico", "Ataque Básico", "Modo Explosivo"]
    },
    {
      type: "Evasión",
      name: "Evasión: ¡Movámonos!",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Fuego con Fuego",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Embiste a los enemigos frente a él, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Represalia",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Golpea continuamente enemigos en frente con puñetazos pesados, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Taladro de Sobrecarga (Modo Explosivo)",
      description: "Mientras está en (Modo Explosivo), presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Lanza un (Ataque de Taladro) a enemigos frente a él, infligiendo masivo Daño Eléctrico. El personaje es invulnerable durante el ataque.",
      tags: ["Eléctrico", "Evasión", "Modo Explosivo"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: ¡Gira, Hermano!",
      description: "Presiona [Icono Especial] para activar: Lanza un (Ataque de Martinete) contra enemigos en línea recta en frente, infligiendo Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Taladro Explosivo (Modo Explosivo)",
      description: "Presiona [Icono Especial] mientras está en (Modo Explosivo) para activar: Lanza un (Ataque de Martinete) a enemigos en frente, infligiendo Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial", "Modo Explosivo"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: ¡Aplasta el Horizonte, Hermano!",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza varios (Ataques de Martinete) a enemigos en una línea frente a él, infligiendo masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad. Anton entra en (Modo Explosivo) después de usar esta habilidad. Cuando está en (Modo Explosivo), los ataques de Anton se vuelven más poderosos, infligiendo masivo Daño Eléctrico mientras consume continuamente Energía al golpear a un enemigo. El (Modo Explosivo) permanece activo hasta que su Energía se agota.",
      tags: ["Eléctrico", "Técnica Especial EX", "Modo Explosivo"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: ¡Vamos Vamos Vamos!",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un (Ataque de Martinete) al suelo frente a él sobre una área grande, infligiendo masivo Daño Eléctrico a enemigos dentro del alcance. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: ¡Vamos Vamos Vamos Vamos Vamos!",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata un (Ataque de Martinete) al suelo frente a él sobre una área grande, infligiendo masivo Daño Eléctrico a enemigos dentro del alcance. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: ¡Hermanos de Armas!",
      description: "Cuando Anton usa su (Ataque de Martinete), el Daño de la habilidad aumenta en un {VALOR_1} y cuando usa su (Ataque de Taladro), el Daño de la habilidad aumenta en un {VALOR_2}.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Trabajo en Equipo",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Mientras Anton está en (Modo Explosivo), por cada 4 golpes críticos, el siguiente ataque golpeando enemigos electrochoque activa un episodio adicional de Daño electrochoque al 45% del Daño original. Este efecto puede activarse una vez cada 0.5s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Hombro con Hombro",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea continuamente enemigos frente a él con puñetazos pesados, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Taladro Protector (Modo Explosivo)",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Ataca enemigos en frente con un (Ataque de Taladro), infligiendo masivo Daño Eléctrico. El personaje es invulnerable durante el ataque.",
      tags: ["Eléctrico", "Asistencia", "Modo Explosivo"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Muñeca de Hierro",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Esta habilidad sobresale en bloquear ataques enemigos y reduce el consumo de (Puntos de Asistencia) cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Estallido Límite",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Lanza un (Ataque de Taladro) que termina en un (Ataque de Martinete), infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Ejercicios de Calentamiento",
      description: "Cuando un (Ataque de Taladro) golpea a un enemigo, Anton gana Energía adicional, hasta un máximo de 5 de Energía por uso de habilidad.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Estado de Flujo",
      description: "Cuando Anton usa su (Técnica Especial EX) y entra en (Modo Explosivo), gana un Escudo que equivale al 7.5% de su HP Máx. Mientras esté en (Modo Explosivo), entrar en combate o cambiar re-aplica el efecto de Escudo. Este efecto puede activarse una vez cada 15s. El Escudo se disipa cuando el (Modo Explosivo) termina.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Entrenamiento Rotacional",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "¡Todos Entusiasmémonos!",
      description: "Cuando Anton usa su (Ataque en Cadena) o (Definitiva), la Probabilidad de Crit de todos los miembros del escuadrón aumenta en un 10% por 12s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Aprendiz de Todo",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Romper el Límite",
      description: "Cuando el (Ataque de Martinete) de Anton activa un golpe crítico, su (Ataque Básico: Ejercicios Entusiastas (Modo Explosivo)) y (Contraataque de Evasión: Taladro de Sobrecarga (Modo Explosivo)) infligen un 4% más de Daño por 30s, acumulándose hasta 6 veces. Activaciones repetidas reinician la duración.",
      tags: ["Mindscape 6"]
    }
  ]
};
