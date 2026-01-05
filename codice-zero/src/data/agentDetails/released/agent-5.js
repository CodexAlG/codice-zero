// Agent 5 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 617,
      max: 7673
    },
    atk: {
      min: 128,
      max: 888
    },
    def: {
      min: 49,
      max: 612
    },
    impact: 93,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "94",
    anomalyMastery: "93",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  coreSkillScaling: [
    ["35%"],
    ["40.8%"],
    ["46.6%"],
    ["52.5%"],
    ["58.3%"],
    ["64.1%"],
    ["70%"]
  ],
  potentialSkillScaling: [
    ["16%"],
    ["24%"],
    ["32%"],
    ["40%"],
    ["48%"]
  ],
  potential: {
    name: "Potencial Despierto: Llamarada Infernal",
    description: "En la (Habilidad Adicional: Campos de Fuego), el Daño Crítico de Soldier 11 aumenta en un {VALOR_1}."
  },
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Chispas de Calentamiento",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 4 cortes, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Supresión de Fuego",
      description: "Presiona [Icono Ataque] en el momento justo para activar: Lanza un corte más fuerte, infligiendo Daño Fuego. Cuando (Supresión de Fuego) está garantizada para activarse, presionar [Icono Ataque] cuando el ataque está a punto de terminar acelera la transición al siguiente golpe de (Ataque Básico).\nCuando (Supresión de Fuego) está garantizada para activarse, el 5to golpe de la cadena de (Ataque Básico) se desbloquea. Activar un (Ataque en Cadena) o (Definitiva) potencia su siguiente 5to golpe de (Ataque Básico). Un 5to golpe de (Ataque Básico) fortalecido consumirá todas las activaciones restantes garantizadas de (Supresión de Fuego) para infligir Daño Fuego adicional por activación consumida.\nDespués de activar una (Evasión Perfecta), el conteo actual de golpes de (Ataque Básico) se retiene por 5s. Después de realizar un (Contraataque de Evasión), presionar [Icono Ataque] reanuda el (Ataque Básico) desde el conteo de golpes retenido.",
      tags: ["Fuego", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Asalto de Fuego",
      description: "Mantén [Icono Ataque] para activar: (Ataque Básico: Carga de Fuego).\nSuelta [Icono Ataque] mientras (Ataque Básico: Carga de Fuego) está activo para lanzar (Ataque Básico: Asalto de Fuego).\nSi es atacada por un enemigo durante (Ataque Básico: Carga de Fuego) o el momento en que se activa (Ataque Básico: Asalto de Fuego), se puede activar un Contador de Bloqueo, negando esa instancia de Daño y otorgando 3 activaciones garantizadas de (Supresión de Fuego). Presiona [Icono Especial] para seguir con el 3er golpe de un (Ataque Básico), hasta 8 veces.\nMientras carga, inclinar el stick/joystick lanza (Ataque Básico: Carrera Abrasadora).",
      tags: ["Fuego", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Fuego Templado",
      description: "Presiona [Icono Dodges] para activar: Un esquive rápido. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Fuego Abrasador",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta a enemigos en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque de Carrera"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Supresión de Fuego",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta a enemigos en frente, infligiendo Daño Fuego.",
      tags: ["Fuego", "Ataque de Carrera"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Contracorriente",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Ejecuta un corte poderoso contra enemigos en frente, infligiendo Aturdimiento masivo. Inflige Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Contraataque de Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Fuego Furioso",
      description: "Presiona [Icono Especial] para activar: Corta enemigos cercanos, infligiendo Daño Fuego. El nivel de Anti-Interrupción aumenta mientras se usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial EX: Fuego Ferviente",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Ejecuta un corte poderoso contra enemigos cercanos, infligiendo Daño Fuego masivo. El personaje es invulnerable mientras usa esta habilidad.\nDespués de usar esta habilidad, los (Ataques Básicos) y (Ataques de Carrera) de Soldier 11 están garantizados para activar (Supresión de Fuego) por hasta 30s u 8 veces.\nDespués de usar esta habilidad, presiona [Icono Ataque] para seguir inmediatamente con el 4to golpe de un (Ataque Básico).\nSoldier 11 entra en la (Postura de Alerta) después de usar esta habilidad. Mientras está en (Postura de Alerta), si es golpeada durante un (Ataque Básico), activa (Ataque Básico: Carga de Fuego) para bloquear el ataque, seguido por (Ataque Básico: Asalto de Fuego). Después de realizar (Ataque Básico: Asalto de Fuego), presiona [Icono Ataque] para reanudar (Ataque Básico) desde el conteo de golpes de (Ataque Básico) retenido.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Técnica en Cadena: Llama Edificante",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Corta enemigos en una pequeña área adelante, luego ejecuta un poderoso corte hacia arriba, infligiendo Daño Fuego masivo. El personaje es invulnerable mientras usa esta habilidad.\nDespués de usar esta habilidad, los (Ataques Básicos) y (Ataques de Carrera) de Soldier 11 están garantizados para activar (Supresión de Fuego) por hasta 30s u 8 veces.\nDespués de usar esta habilidad, presiona [Icono Ataque] para seguir inmediatamente con el 4to golpe de un (Ataque Básico).\nSoldier 11 entra en la (Postura de Alerta) después de usar esta habilidad. Mientras está en (Postura de Alerta), si es golpeada durante un (Ataque Básico), activa (Ataque Básico: Carga de Fuego) para bloquear el ataque, seguido por (Ataque Básico: Asalto de Fuego). Después de realizar (Ataque Básico: Asalto de Fuego), presiona [Icono Ataque] para reanudar (Ataque Básico) desde el conteo de golpes de (Ataque Básico) retenido.",
      tags: ["Fuego", "Técnica en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Llama Rugiente",
      description: "Cuando el Índice de Decibelios está al Máximo, presiona [Icono Definitiva] para activar: Corta enemigos cercanos, infligiendo Daño Fuego masivo. El personaje es invulnerable mientras usa esta habilidad.\nDespués de usar esta habilidad, los (Ataques Básicos) y (Ataques de Carrera) de Soldier 11 están garantizados para activar (Supresión de Fuego) por hasta 30s u 8 veces.\nDespués de usar esta habilidad, presiona [Icono Ataque] para seguir inmediatamente con el 4to golpe de un (Ataque Básico).\nSoldier 11 entra en la (Postura de Alerta) después de usar esta habilidad. Mientras está en (Postura de Alerta), si es golpeada durante un (Ataque Básico), activa (Ataque Básico: Carga de Fuego) para bloquear el ataque, seguido por (Ataque Básico: Asalto de Fuego). Después de realizar (Ataque Básico: Asalto de Fuego), presiona [Icono Ataque] para reanudar (Ataque Básico) desde el conteo de golpes de (Ataque Básico) retenido.",
      tags: ["Fuego", "Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Ola de Calor",
      description: "Cuando se activa (Supresión de Fuego) durante un (Ataque Básico) o (Ataque de Carrera), aumenta el Daño de ese ataque en un {VALOR_1}.",
      tags: ["Pasiva Central", "Fuego"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Campos de Fuego",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción:\nSoldier 11 inflige 10% más Daño Fuego. Al atacar enemigos Aturdidos, este efecto se mejora adicionalmente por un 22.5% extra.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Fuego de Cobertura",
      description: "Cuando el personaje activo es lanzado por los aires, presiona [Icono Assist] para activar: Corta a enemigos en frente, infligiendo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia Rápida"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Mantener la Línea",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Realiza un bloqueo al ataque del enemigo, infligiendo Aturdimiento masivo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia Defensiva"]
    },
    {
      type: "Asistencia",
      name: "Seguimiento de Asistencia: Reignición",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Carga y corta en cruz a enemigos en frente, infligiendo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Seguimiento de Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Calor Rápido",
      description: "Cuando Soldier 11 se convierte en el personaje activo en combate, si su Energía es menor a 40, su Energía se recupera a 80. Este efecto puede activarse una vez cada 50s."
    },
    {
      type: "Mindscape 2",
      name: "Convergencia Abrasadora",
      description: "Al activar (Supresión de Fuego), (Ataque Básico), (Ataque de Carrera), y (Contraataque de Evasión) el Daño aumenta en un 3%, hasta 12 acumulaciones, durando 15s, con la duración de cada acumulación calculada por separado."
    },
    {
      type: "Mindscape 3",
      name: "Soldado de Élite",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2"
    },
    {
      type: "Mindscape 4",
      name: "Llamarada Indulgente",
      description: "Si (Supresión de Fuego) se activa durante el 1er, 2do o 3er golpe del (Ataque Básico) o un (Ataque de Carrera) de Soldier 11, el nivel de Anti-Interrupción aumenta y el Daño recibido se reduce en un 18% durante la activación de la habilidad. Si (Supresión de Fuego) se activa durante el 4to golpe de su (Ataque Básico), se vuelve invulnerable durante la activación de la habilidad."
    },
    {
      type: "Mindscape 5",
      name: "Soldado Perfecto",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2"
    },
    {
      type: "Mindscape 6",
      name: "Flujo Abrasador",
      description: "Cuando Soldier 11 usa su (Técnica Especial EX), (Ataque en Cadena), o (Definitiva), gana 8 acumulaciones de Carga (max 8 acumulaciones). Cuando (Supresión de Fuego) se activa, se consume 1 acumulación de Carga, causando que el movimiento actual ignore el 25% de la Res Fuego del objetivo."
    }
  ]
};
