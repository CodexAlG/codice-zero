// Agent 46 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 733,
      max: 8985
    },
    atk: {
      min: 110,
      max: 765
    },
    def: {
      min: 56,
      max: 701
    },
    impact: "93",
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "93",
    anomalyMastery: "96",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "hp%",
    valuePerNode: 6
  },
  materials: {
    weeklyBoss: {
      name: "",
      icon: "",
    },
    eliteBoss: {
      name: "",
      icon: "",
    }
  },
  coreSkillScaling: [
    [
      "0.8%",
      "100"
    ],
    [
      "0.9%",
      "250"
    ],
    [
      "1%",
      "400"
    ],
    [
      "1.1%",
      "550"
    ],
    [
      "1.2%",
      "700"
    ],
    [
      "1.3%",
      "850"
    ],
    [
      "1.4%",
      "1000"
    ]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico",
      description: "Clic [Icono Ataque] para activar: Realiza hasta cinco etapas de cortes hacia adelante, causando Daño Hielo.",
      tags: [
        "Hielo",
        "Ataque Básico"
      ]
    },
    {
      type: "Ataque Básico",
      name: "Corte Cargado",
      description: "Mantener [Icono Ataque] para activar: Tras cargar, realiza un corte hacia adelante, causando gran cantidad de Daño Hielo; Si Zhao activa (Asistencia Rapida) en un movimiento y es cambiada fuera del campo, conectará automáticamente con (Ataque Básico: Corte Cargado) y comenzará a cargar; Al cargar, Zhao acumulará duración de carga hasta un máximo de 5 segundos. La próxima vez que lance (Ataque Básico: Corte Cargado), (Ataque en Cadena) o (Ataque de Asistencia) e inflija daño, consumirá la duración de carga para causar daño adicional. Por cada 1 segundo de duración de carga, causa daño adicional equivalente al 24.0% de los PV Máximos de Zhao.",
      tags: [
        "Hielo",
        "Ataque Básico"
      ]
    },
    {
      type: "Evasión",
      name: "Evasión",
      description: "Clic [Icono Dodges] para activar: Evasión rápida de carrera; Posee efecto de invencibilidad durante la activación.",
      tags: [
        "Evasión"
      ]
    },
    {
      type: "Evasión",
      name: "Evasión",
      description: "Al usar (Evasión), Clic [Icono Ataque] para activar: Causa Daño Hielo.",
      tags: [
        "Hielo",
        "Evasión"
      ]
    },
    {
      type: "Evasión",
      name: "Evasión",
      description: "Tras activar (Evasión Perfecta), Clic [Icono Ataque] para activar: Causa Daño Hielo. Posee efecto de invencibilidad durante la activación.",
      tags: [
        "Hielo",
        "Evasión"
      ]
    },
    {
      type: "Asistencia",
      name: "Técnica de Entrada",
      description: "Cuando el (Valor de Escarcha) de Zhao está lleno, Clic [Icono Assist] para activar: Causa gran cantidad de Daño Hielo; Zhao activa (Asistencia Rapida) en el movimiento y es cambiada fuera del campo, conectará automáticamente con (Ataque Básico: Corte Cargado) y realizará la carga; Posee efecto de invencibilidad durante la activación.",
      tags: [
        "Hielo",
        "Asistencia"
      ]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida",
      description: "Cuando el personaje en operación actual es lanzado por los aires, Clic [Icono Assist] para activar: Posee efecto de invencibilidad durante la activación.",
      tags: [
        "Asistencia"
      ]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva",
      description: "Cuando el personaje en el campo está a punto de ser atacado, Clic [Icono Assist] para activar: Bloquea el ataque del enemigo, acumulando gran cantidad de valor de aturdimiento; Posee un rendimiento de bloqueo superior, al recibir ataques de alta intensidad el consumo de (Puntos de Asistencia) se reduce; Posee efecto de invencibilidad durante la activación.",
      tags: [
        "Asistencia"
      ]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia",
      description: "Tras lanzar (Asistencia Defensiva), Clic [Icono Ataque] para activar: Causa gran cantidad de Daño Hielo; Tras la activación, si el (Valor de Escarcha) está lleno, puede hacer Clic en [Icono Assist] para conectar con (Tecnica de Entrada); Posee efecto de invencibilidad durante la activación.",
      tags: [
        "Hielo",
        "Asistencia"
      ]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial",
      description: "Clic [Icono Especial] para activar: Realiza un corte hacia adelante al enemigo, causando Daño Hielo; Al activar el movimiento, si los PV actuales de Zhao son mayores al 50%, consumirá el 6% de los PV Máximos para hacer que todos los personajes del equipo recuperen PV cada segundo basados en el 1% de los PV Máximos de Zhao, dura 5 segundos, se activa máximo una vez cada 15 segundos.",
      tags: [
        "Hielo",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial Reforzada",
      description: "Cuando la energía es suficiente, Clic [Icono Especial EX] para activar: Realiza un corte hacia adelante al enemigo, causando gran cantidad de Daño Hielo; Al activar el movimiento, si los PV actuales de Zhao son mayores al 50%, consumirá el 6% de los PV Máximos para hacer que todos los personajes del equipo recuperen PV cada segundo basados en el 1% de los PV Máximos de Zhao, dura 5 segundos, se activa máximo una vez cada 15 segundos; Al activar el movimiento, otorga al equipo el efecto (Aumento). Al activar este efecto, si se encuentra bajo (Velo Etereo: Manantial), activará (Asistencia Rapida). Posee efecto de invencibilidad durante la activación.",
      tags: [
        "Hielo",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena",
      description: "Al activar (Ataque en Cadena), selecciona el personaje correspondiente para activar: Causa gran cantidad de Daño Hielo; Al activar el movimiento, acumula 15 puntos de (Valor de Escarcha); Posee efecto de invencibilidad durante la activación.",
      tags: [
        "Hielo",
        "Ataque en Cadena"
      ]
    },
    {
      type: "Técnica Definitiva",
      name: "Técnica Definitiva",
      description: "Cuando el nivel de Decibelios llega a [Max], Clic [Icono Definitiva] para activar: Ataca hacia adelante y sigue con un corte descendente al enemigo, causando gran cantidad de Daño Hielo; Al activar el movimiento, acumula 20 puntos de (Valor de Escarcha); Posee efecto de invencibilidad durante la activación.",
      tags: [
        "Hielo",
        "Técnica Definitiva"
      ]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal",
      description: "Zhao aumenta su Probabilidad de Crítico adicionalmente basada en sus PV Máximos iniciales, cada 1000 puntos de PV Máximos aumenta un {VALOR_1} de Probabilidad de Crítico; Cuando el agente en el campo causa daño, aturde a un enemigo o derrota a un enemigo, Zhao acumula 1.5/15/10 puntos de (Valor de Escarcha), se activa máximo una vez cada 1/50/50 segundos, máximo 100 puntos; Cuando el (Valor de Escarcha) está lleno, cambiar a Zhao al campo puede activar (Tecnica de Entrada); Cuando Zhao activa (Tecnica de Entrada), abre el (Velo Etereo: Manantial), dura 50 segundos, antes de activarse nuevamente, cerrará el (Velo Etereo: Manantial) existente; Cuando Zhao activa (Tecnica Especial Reforzada) o (Tecnica de Entrada), todo el equipo obtiene el efecto (Aumento), aumentando el Ataque en {VALOR_2} puntos, dura 40 segundos, activaciones repetidas extienden la duración; al activar este efecto, si se encuentra bajo (Velo Etereo: Manantial), activará (Asistencia Rapida).",
      tags: [
        "Pasiva Central"
      ]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional",
      description: "Se activa cuando hay personajes de (Ataque), (Anomalia) o (Aturdimiento) en el equipo: Cuando Zhao está bajo (Velo Etereo), aumenta el daño causado por todo el equipo en un 10%. Si los PV Máximos iniciales de Zhao son superiores a 6000 puntos, por cada 1000 puntos de PV Máximos iniciales excedentes, el efecto de aumento de daño mejora adicionalmente en un 1.5%, hasta un aumento máximo del 40%. Cuando los PV Máximos iniciales alcanzan 26000 puntos, el efecto de mejora alcanza su valor máximo.",
      tags: [
        "Habilidad Adicional"
      ]
    },
    {
      type: "Mindscape 1",
      name: "Nombre a determinar",
      description: "Cuando Zhao es cambiada fuera del campo, hace que el daño causado por todo el equipo ignore un 15% de la Resistencia a Daño Elemental del objetivo, dura 50 segundos.",
      tags: [
        "Mindscape 1"
      ]
    },
    {
      type: "Mindscape 2",
      name: "Nombre a determinar",
      description: "Aumenta la recuperación de PV de todos los personajes del equipo en un 10%; cuando un personaje del equipo recupera PV, si sus PV son superiores al 50% de sus PV Máximos, aumenta su Ataque en un 15%, dura 25 segundos.",
      tags: [
        "Mindscape 2"
      ]
    },
    {
      type: "Mindscape 3",
      name: "Nombre a determinar",
      description: "Nivel de habilidad de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial), (Ataque en Cadena) +2",
      tags: [
        "Mindscape 3"
      ]
    },
    {
      type: "Mindscape 4",
      name: "Nombre a determinar",
      description: "Cuando Zhao activa (Tecnica de Entrada), obtiene 300 puntos de Valor de Decibelios; aumenta el Daño Crítico de (Tecnica Definitiva), (Ataque en Cadena) y (Tecnica de Entrada) en un 25%.",
      tags: [
        "Mindscape 4"
      ]
    },
    {
      type: "Mindscape 5",
      name: "Nombre a determinar",
      description: "Nivel de habilidad de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial), (Ataque en Cadena) +2",
      tags: [
        "Mindscape 5"
      ]
    },
    {
      type: "Mindscape 6",
      name: "Nombre a determinar",
      description: "El efecto de aumento de Probabilidad de Crítico de la (Pasiva Principal) aumenta en un 25%; el daño adicional de (Ataque Basico: Corte Cargado) aumenta al 150% del original, y no se consumirá al golpear.",
      tags: [
        "Mindscape 6"
      ]
    }
  ]
};
