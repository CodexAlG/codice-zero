// Agent 11 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 603,
      max: 7500
    },
    atk: {
      min: 95,
      max: 658
    },
    def: {
      min: 49,
      max: 612
    },
    impact: 118,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "94",
    anomalyMastery: "93",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "impact",
    valuePerNode: 6
  },
  coreSkillScaling: [
    ["32%"],
    ["37.3%"],
    ["42.6%"],
    ["48%"],
    ["53.3%"],
    ["58.6%"],
    ["64%"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Turbovoltaje",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 4 cortes. Los primeros 3 golpes infligen Daño Físico, el 4to golpe inflige Daño Eléctrico.",
      tags: ["Físico", "Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Rayo",
      description: "Después de desatar el 3er golpe de (Ataque Básico), mantén presionado o pausa por un momento, y luego presiona [Icono Ataque] para activar: Desata un golpe descendente que inflige Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Deslizamiento",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Disparo Taser",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta a todos los enemigos cercanos, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Trueno",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Corta enemigos en frente, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Relámpago",
      description: "Presiona [Icono Especial] para activar: Desata un corte ascendente que inflige Daño Eléctrico. Este ataque se lanza más rápido cuando se usa después del 3er golpe de (Ataque Básico) o (Ataque Básico: Rayo). El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Rayo",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un poderoso corte ascendente que inflige masivo Daño Eléctrico. Este ataque se lanza más rápido cuando se usa después del 3er golpe de su (Ataque Básico) o (Ataque Básico: Rayo). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Motor Eléctrico",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un poderoso corte ascendente a enemigos en una pequeña área, infligiendo masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Motor Sobrecargado",
      description: "Cuando el Nivel de Decibelios está al [Máximo], presiona [Icono Definitiva] para activar: Desata un poderoso corte ascendente a enemigos en una pequeña área seguido de varios golpes descendentes, infligiendo masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Voltaje Fluctuante",
      description: "Lanza un (Ataque Básico: Rayo), (Técnica Especial), o (Técnica Especial EX) después del 3er golpe del (Ataque Básico) de Anby para un {VALOR_1} extra de Aturdimiento.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Conexión en Paralelo",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Cuando el (Contraataque de Evasión) de Anby golpea a un enemigo, gana 7.2 de Energía extra. Este efecto puede activarse una vez cada 5s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Caída de Trueno",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta enemigos en frente, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Flash",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Torbellino Relámpago",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Realiza un corte giratorio contra enemigos en frente, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Modo de Carga Rápida",
      description: "Cuando el 4to golpe del (Ataque Básico) de Anby golpea a un enemigo, su Tasa de Generación de Energía aumenta en un 12% por 30s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Descarga de Precisión",
      description: "Cuando (Ataque Básico: Rayo) golpea a un enemigo Aturdido, su Daño aumenta en un 30%. Cuando la (Técnica Especial EX) de Anby golpea a un enemigo que no está Aturdido, el Aturdimiento infligido aumenta en un 10%.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Bien Disciplinada",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Carga Conductora",
      description: "Cuando Anby lanza un (Ataque en Cadena) o usa su (Definitiva), los Agentes Electricos fuera del campo recuperan 3 de Energía. Por cada 12% de Tasa de Generación de Energía que Anby tiene, recuperan 2 de Energía adicional, hasta un máximo de 6.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Experiencia Callejera",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Campo de Carga",
      description: "Cuando Anby usa su (Técnica Especial EX), gana 8 acumulaciones de (Carga) (máx 8 acumulaciones). Cuando golpea a un enemigo con su (Ataque Básico) o (Ataque de Carrera), 1 acumulación de (Carga) se consume, aumentando el Daño de ese ataque en un 45%.",
      tags: ["Mindscape 6"]
    }
  ]
};
