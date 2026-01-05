// Agent 14 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 561,
      max: 6976
    },
    atk: {
      min: 116,
      max: 807
    },
    def: {
      min: 49,
      max: 604
    },
    impact: 93,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "93",
    anomalyMastery: "96",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit dmg",
    valuePerNode: 9.6
  },
  coreSkillScaling: [
    ["18.7%"],
    ["21.8%"],
    ["25%"],
    ["28.1%"],
    ["31.2%"],
    ["34.3%"],
    ["37.5%"],  // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Limpieza",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 5 cortes, infligiendo Daño Físico. Presiona repetidamente o manten presionado el botón durante el 3er y 5to golpe para extender el ataque de corte de motosierra.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: ¡Fuera!",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: ¡Uy, Perdón!",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta enemigos en frente, infligiendo Daño Físico. Presiona repetidamente o manten presionado el botón para extender la duración del ataque de motosierra.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: ¡No!",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Corta enemigos en frente antes de detonar su motosierra, infligiendo Daño Físico. Presiona repetidamente o manten presionado el botón para extender el ataque de corte de motosierra. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Barrido Limpio",
      description: "Presiona [Icono Especial] para activar: Desata una serie de cortes sobre enemigos en frente, antes de detonar la motosierra, infligiendo Daño Físico. Presiona repetidamente o manten presionado el botón para extender el ataque de corte de motosierra. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad, y el Daño recibido se reduce en un 40%.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Alerta de Falda",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata una serie de poderosos cortes sobre enemigos en frente, antes de detonar la motosierra, infligiendo masivo Daño Físico. Presiona repetidamente o manten presionado el botón para extender el ataque de corte de motosierra a coste de Energía si el ataque conecta. El personaje es invulnerable durante el corte giratorio. El nivel de Anti-Interrupción aumenta durante el corte extendido, y el Daño recibido se reduce en un 40%.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Lo Siento...",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un poderoso corte a enemigos en una pequeña área, infligiendo masivo Daño Físico. Presiona repetidamente o manten presionado el botón para extender el ataque de corte de motosierra. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: ¡Lo Siento Muchísimo!",
      description: "Cuando el Nivel de Decibelios está al [Máximo], presiona [Icono Definitiva] para activar: Desata un poderoso corte a enemigos en una pequeña área, infligiendo masivo Daño Físico. Presiona repetidamente o manten presionado el botón para extender el ataque de corte de motosierra. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Hiperenfoque",
      description: "Después de mantener o presionar repetidamente, cuando Corin desata un corte continuo extendido con su Motosierra, el Daño de la habilidad aumenta en un {VALOR_1}.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Asistencia de Limpieza",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Corin inflige un 35% más de Daño a enemigos Aturdidos.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Medidas de Emergencia",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta enemigos en frente antes de detonar su motosierra, infligiendo Daño Físico. Presiona repetidamente o manten presionado el botón para extender el ataque de corte de motosierra. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: ¡P-Permíteme!",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Esta habilidad sobresale en bloquear ataques enemigos y reduce el consumo de (Puntos de Asistencia) cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Barrido Rápido",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Desata una serie de cortes contra enemigos en frente seguido de una motosierra explosiva, infligiendo Daño Físico. Presiona repetidamente o manten presionado para extender el ataque de corte de motosierra. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Trauma Abierto",
      description: "Cuando el (Ataque en Cadena) o (Definitiva) de Corin golpea a un enemigo, su Daño contra el objetivo aumenta en un 12% por 15s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Golpe Atómico",
      description: "Cuando la (Técnica Especial EX), (Ataque en Cadena) o (Definitiva) de Corin golpea a un enemigo, la RES Físico del objetivo se reduce en un 0.5%, acumulándose hasta 20 veces y durando 5s. La duración de cada acumulación se calcula por separado.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Maid Amateur",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Retenedor del Campo de Batalla",
      description: "Cuando Corin usa una (Asistencia Rápida), (Asistencia Defensiva), o (Ataque en Cadena), recupera 7.2 de Energía. Este efecto puede activarse una vez cada 16s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Maid de Operaciones Especiales",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Liberación Acumulada",
      description: "Cuando el corte extendido de Corin golpea a un enemigo, obtiene una acumulación de (Carga) (máx 40 acumulaciones). Durante un (Contraataque de Evasión), (Técnica Especial), (Técnica Especial EX), (Asistencia Rápida), o (Ataque de Asistencia), cuando la detonación de su motosierra golpea a un enemigo, consume todas las acumulaciones de (Carga). Cada acumulación consumida causa que el ataque inflija un 3% adicional de ATK como Daño.",
      tags: ["Mindscape 6"]
    }
  ]
};
