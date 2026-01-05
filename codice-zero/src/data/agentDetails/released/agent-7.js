// Agent 7 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 602,
      max: 7482
    },
    atk: {
      min: 119,
      max: 825
    },
    def: {
      min: 48,
      max: 600
    },
    impact: 83,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "115",
    anomalyMastery: "116",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "tasa",
    valuePerNode: 12
  },
  coreSkillScaling: [
    ["65%"],
    ["75.8%"],
    ["86.6%"],
    ["97.5%"],
    ["108.3%"],
    ["119.1%"],
    ["130%"]
  ],
  potentialSkillScaling: [
    ["10%"],
    ["15%"],
    ["20%"],
    ["25%"],
    ["30%"]
  ],
  potential: {
    name: "Potencial Despierto: Motor de Ingeniería Overclockeado",
    description: "Al consumir (Zap), gana (Zap Mejorado), aumentando el Daño Eléctrico en un {VALOR_1} por 25s. Activaciones repetidas reinician la duración."
  },
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Punta de Alta Presión",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 4 ataques, infligiendo Daño Físico y Daño Eléctrico.\nMientras lanzas (Ataques Básicos), arrastra el stick/joystick para moverte mientras atacas. Esto permite a Grace reposicionarse y infligir Daño Físico.\nSi se usa después del 1er o 2do golpe de un (Ataque Básico), presionar [Icono Ataque] de nuevo reanuda el combo desde el 3er o 4to golpe del (Ataque Básico).\nMientras Grace lanza (Ataques Básicos), su combo de (Ataque Básico) no será interrumpido por sus (Técnicas Especiales), (Técnicas Especiales EX), (Evasión), (Ataques de Carrera), o (Contraataques de Evasión).",
      tags: ["Físico", "Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Regulación de Seguridad",
      description: "Presiona [Icono Dodges] para activar: Un esquive rápido. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Inspección Rápida",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Se desliza hacia adelante mientras dispara, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque de Carrera"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Penalización por Violación",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Lanza una granada a los enemigos, infligiendo Daño Eléctrico, luego activa automáticamente el (Ataque Básico). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Contraataque de Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Eliminación de Obstrucciones",
      description: "Presiona [Icono Especial] para activar: Lanza una granada hacia adelante, infligiendo Daño Eléctrico. Durante la habilidad, arrastra el stick/joystick para reposicionarte en esa dirección. Cuando se activa consumiendo (Zap), esquiva ataques enemigos entrantes. El nivel de Anti-Interrupción aumenta durante el uso de esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial EX: Eliminación de Obstrucciones Supercargada",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Salta en el aire y lanza dos granadas hacia adelante, infligiendo Daño Eléctrico masivo. Durante la habilidad, arrastra el stick/joystick para cambiar direcciones. Si (Zap) alcanza las acumulaciones máximas, lanza una Granada de Vórtice adicional, generando un campo electromagnético en el punto de detonación que atrae enemigos e inflige Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial",
      name: "Pulso",
      description: "Activar una (Definitiva) otorga 25 acumulaciones de (Pulso) (max 25 acumulaciones). Al ganar (Zap), consume 1 acumulación de (Pulso).\nDespués de consumir (Pulso) para obtener 8 acumulaciones de (Zap), el siguiente lanzamiento de granada incluye una Granada de Pulso adicional. Si golpea a un enemigo sufriendo Anomalía de (Éter), (Eléctrico), (Fuego), (Físico), o (Hielo), desencadena (Florecimiento): inflige una instancia adicional de Daño igual al 560%/280%/700%/50%/70% del Daño de Anomalía original. Mientras está en el estado de (Pulso), se desbloquea (Técnica Especial: Eliminación de Obstrucciones - Ciclo).",
      tags: ["Mecánica"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Eliminación de Obstrucciones - Ciclo",
      description: "Mientras está en el estado de (Pulso), mantén [Icono Especial] para activar: Lanza granadas repetidamente hacia adelante durante la habilidad, infligiendo Daño Eléctrico y otorgando 1 acumulación de (Zap) cada vez que se lanzan granadas. Durante la habilidad, inclina el stick/joystick para reposicionarte y esquivar ataques enemigos. El nivel de Anti-Interrupción aumenta mientras se usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Definitiva",
      name: "Técnica en Cadena: Construcción Colaborativa",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Lanza tres granadas al aire y luego ametralla para detonarlas, infligiendo Daño Eléctrico masivo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Explosión de Demolición - Cuidado",
      description: "Cuando el Índice de Decibelios está al Máximo, presiona [Icono Definitiva] para activar: Lanza una granada personalizada que explota en el aire y se divide en cuatro granadas más pequeñas, infligiendo Daño Eléctrico masivo. Gana 8 acumulaciones de (Zap) y 25 acumulaciones de (Pulso) (max 25 acumulaciones). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Aguja Pre-Impulsada",
      description: "Cuando el (Ataque Básico) o (Ataque de Carrera) de Grace golpea a un enemigo e inflige Daño Físico, gana 1 acumulación de (Zap) (hasta 8 acumulaciones). Al alcanzar el máximo de acumulaciones, usar una (Técnica Especial) o (Técnica Especial EX) consumirá todas las acumulaciones de (Zap), aumentando la Acumulación de Anomalía Eléctrica en un {VALOR_1}.",
      tags: ["Pasiva Central", "Eléctrico"]
    },
    {
      type: "Pasiva Central",
      name: "Habilidad Adicional: Dpto. de Soporte Técnico",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción, o es un personaje de (Anomalía):\nCuando la (Técnica Especial EX) de Grace golpea a un enemigo, la próxima vez que ese objetivo sea afligido con (Electrocución), esa instancia de Daño de (Electrocución) aumenta en un 18%, acumulándose hasta 2 veces. Este efecto puede activarse en cada enemigo solo una vez por uso de habilidad, y todas las acumulaciones se reinician cuando el estado de (Electrocución) termina.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Gestión de Incidentes",
      description: "Cuando el personaje activo es lanzado por los aires, presiona [Icono Assist] para activar: Lanza una granada al enemigo, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia Rápida"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Evasiva: Respuesta Rápida al Riesgo",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Esquiva el ataque enemigo y activa (Visión Vital). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia Evasiva"]
    },
    {
      type: "Asistencia",
      name: "Seguimiento de Asistencia: Aguja Contra-Voltaje",
      description: "Presiona [Icono Ataque] después de una (Asistencia Evasiva) para activar: Desata una lluvia de balas giratoria contra enemigos en frente y lanza una granada, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Seguimiento de Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Cámara de Recarga",
      description: "Cuando el 4to golpe del (Ataque Básico) de Grace golpea a un enemigo, todos los miembros del escuadrón ganan 0.25 de Energía. Dentro del mismo movimiento, este efecto puede otorgar un máximo de 2 de Energía a todos los miembros del escuadrón."
    },
    {
      type: "Mindscape 2",
      name: "Perforador Relámpago",
      description: "Cuando la granada lanzada por Grace golpea a un enemigo durante un (Ataque Básico), (Técnica Especial), o (Técnica Especial EX), la (Res Eléctrica) del objetivo se reduce en 8.5%, y la (Res Acumulación de Anomalía Eléctrica) se reduce en 8.5%, durando 8s."
    },
    {
      type: "Mindscape 3",
      name: "Jefe Mecánico",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2"
    },
    {
      type: "Mindscape 4",
      name: "Condensador de Ráfaga",
      description: "Cuando Grace usa su (Técnica Especial EX), gana 6 acumulaciones de (Zap) (max 6 acumulaciones). Cuando su (Ataque Básico: Punta de Alta Presión) o (Ataque de Carrera: Inspección Rápida) golpea a un enemigo, se consume 1 acumulación de (Zap), aumentando su Tasa de Generación de Energía del ataque en un 20%."
    },
    {
      type: "Mindscape 5",
      name: "Bruja de Hierro Escarchada",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2"
    },
    {
      type: "Mindscape 6",
      name: "Gatillo de Detonación",
      description: "Cuando todas las acumulaciones de (Zap) se consumen para activar una (Técnica Especial) o (Técnica Especial EX), la habilidad de Grace se mejora, lanzando una granada extra y aumentando el Daño de cada granada al 200%."
    }
  ]
};
