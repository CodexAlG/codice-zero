// Agent 16 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 690,
      max: 8577
    },
    atk: {
      min: 140,
      max: 1232
    },
    def: {
      min: 58,
      max: 724
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
    statName: "energy",
    valuePerNode: 0.12
  },
  materials: {
    weeklyBoss: {
      name: "Impulso Vital",
      icon: "Item_Living_Drive.webp",
    },
    eliteBoss: {
      name: "Datos de Dimensiones Superiores: Avance Destructivo",
      icon: "Item_Higher_Dimensional_Data_Destructive_Advance.webp",
    }
  },
  coreSkillScaling: [
    ["40%", "15%", "100"],
    ["46%", "17.5%", "220"],
    ["52%", "20%", "330"],
    ["60%", "22.5%", "460"],
    ["66%", "25%", "500"],
    ["72%", "27.5%", "525"],
    ["80%", "30%", "550"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Reconciliación de Deuda",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 3 golpes, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Factura Perdida",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Gasto Entrante",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Golpea enemigos en frente de él, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Cuentas Saldadas",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Golpea enemigos en frente, infligiendo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Puño Fiscal",
      description: "Presiona [Icono Especial] para activar: Ben levanta su arma, bloqueando el ataque del enemigo antes de desatar un golpe hacia adelante, infligiendo Daño Físico. Bloquear exitosamente un ataque mejora el poder de esta habilidad y activa (Contraataque de Bloqueo), infligiendo masivo Daño Físico. Mantén presionado [Icono Especial] para permanecer en la postura de (Bloqueo). Mientras está en la postura de (Bloqueo), Ben gana un (Escudo) que se debilita con el tiempo. Después de dejar la postura de bloqueo, el (Escudo) se remueve y se recupera con el tiempo. El (Escudo) no puede exceder el 16% del HP Máx de Ben. Ben es invulnerable cuando activa (Bloqueo). El nivel de Anti-Interrupción aumenta mientras lanza golpes.",
      tags: ["Físico", "Técnica Especial", "Bloqueo", "Escudo"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Contador de Flujo de Caja",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Ben levanta su arma, bloqueando los ataques del enemigo antes de desatar un golpe hacia adelante, infligiendo Daño Fuego. Bloquear exitosamente un ataque mejora el poder de esta habilidad y activa (Contraataque de Bloqueo), infligiendo masivo Daño Fuego. Mantén presionado [Icono Especial EX] para permanecer en la postura de (Bloqueo). Mientras está en la postura de (Bloqueo), Ben gana un (Escudo) que se debilita con el tiempo. Después de dejar la postura de bloqueo, el (Escudo) se remueve y se recupera con el tiempo. El (Escudo) no puede exceder el 16% del HP Máx de Ben. Cuando esta habilidad es activada, el (Escudo) se restaura a su valor máximo. Después de activar la habilidad, presiona [Icono Especial EX] de nuevo para seguir con un poderoso golpe hacia adelante, infligiendo masivo Daño Fuego. Ben es invulnerable cuando activa (Bloqueo). Ben es invulnerable mientras lanza golpes.",
      tags: ["Fuego", "Técnica Especial EX", "Bloqueo", "Escudo"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Firmado y Sellado",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un poderoso golpe a enemigos en frente en un área grande, infligiendo masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Reembolso Completo",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata un poderoso golpe a enemigos en frente en un área grande, infligiendo masivo Daño Fuego. Cuando activa la habilidad, recupera adicionalmente 3 (Puntos de Asistencia). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Guardián",
      description: "El ATK inicial de Ben aumenta junto con su DEF inicial. Él gana {VALOR_1} de su DEF inicial como ATK. Cuando Ben lanza un poderoso golpe de seguimiento durante su (Técnica Especial EX), todos los miembros del escuadrón ganan un (Escudo) de {VALOR_2} de su DEF + {VALOR_3}, durando 30s.",
      tags: ["Pasiva Central", "Escudo"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Acuerdo Contractual",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Mientras el (Escudo) de (Pasiva Central: Guardián) está en efecto, la Probabilidad de Crit del personaje aumenta en un 16%.",
      tags: ["Habilidad Adicional", "Escudo"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Cuenta Conjunta",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea enemigos en frente, infligiendo Daño Fuego. El personaje es invulnerable durante el ataque.",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Asignación de Riesgos",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Esta habilidad sobresale en bloquear ataques enemigos y reduce el consumo de (Puntos de Asistencia) cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: No Rompas el Contrato",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Carga y golpea enemigos en frente, infligiendo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Fuerza Reactiva",
      description: "Cuando Bloquea exitosamente un enemigo con la (Técnica Especial) o (Técnica Especial EX) de Ben, el Daño infligido por el enemigo bloqueado se reduce en un 30% por 15s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Ofensa a través de Defensa",
      description: "Cuando activa exitosamente un (Contraataque de Bloqueo) durante la (Técnica Especial) o (Técnica Especial EX) de Ben, inflige un 300% adicional de la DEF de Ben como Daño.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Contabilidad Cuidadosa",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Adaptación Ágil",
      description: "Cuando bloquea exitosamente Daño enemigo con el efecto invulnerable de Ben durante su (Técnica Especial) o (Técnica Especial EX), el siguiente contraataque inflige un 30% más de Daño.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Detalle Meticuloso",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Espíritu Salvaje",
      description: "Después de lanzar un ataque o ataque de seguimiento durante la (Técnica Especial EX) de Ben, el Aturdimiento infligido por (Ataques Básicos), (Ataque de Carrera), y (Contraataque de Evasión) aumenta en un 20%, durando 12s.",
      tags: ["Mindscape 6"]
    }
  ]
};
