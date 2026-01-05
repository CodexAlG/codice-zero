// Agent 19 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 516,
      max: 6976
    },
    atk: {
      min: 109,
      max: 758
    },
    def: {
      min: 49,
      max: 612
    },
    impact: 86,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "116",
    anomalyMastery: "118",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "energy",
    valuePerNode: 0.12
  },
  coreSkillScaling: [
    ["2%"],
    ["2.3%"],
    ["2.6%"],
    ["3%"],
    ["3.3%"],
    ["3.6%"],
    ["4%"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Carga y Despliegue",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 4 cortes, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Derrape con Freno de Mano",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Pedal a Fondo",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta enemigos en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Derrape de Potencia",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Desata un golpe descendente en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Giro de Neumático",
      description: "Presiona [Icono Especial] para activar: Piper gira y lanza un corte de barrido a su alrededor, infligiendo Daño Físico. Mantén [Icono Especial] para extender la duración de la habilidad, desatando cortes giratorios cada vez más poderosos y aumentando el nivel de carga de la habilidad hasta 2 veces. Si la habilidad se usa después de los primeros 3 golpes de (Ataque Básico), (Ataque de Carrera) o (Contraataque de Evasión), puedes activar rápidamente (Técnica Especial: Giro de Neumático) de un nivel de carga aumentado. Durante la activación de la habilidad, el nivel de Anti-Interrupción aumenta, y el Daño recibido se reduce en un 40%.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Un Billón de Toneladas",
      description: "Mientras (Técnica Especial: Giro de Neumático) está activa, suelta [Icono Especial] para activar un ataque de golpe descendente basado en el nivel de carga de (Técnica Especial: Giro de Neumático), infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Giro de Motor",
      description: "Con suficiente Energía, continúa manteniendo [Icono Especial EX] después de que (Técnica Especial: Giro de Neumático) alcance el nivel máximo de carga para activar: Gira rápidamente, desatando poderosos cortes giratorios alrededor y infligiendo masivo Daño Físico. Esta habilidad consume Energía continuamente por hasta 3s. Durante la activación de la habilidad, el nivel de Anti-Interrupción aumenta, y el Daño recibido se reduce en un 40%.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Muy Pesado",
      description: "Durante (Técnica Especial EX: Giro de Motor), suelta [Icono Especial EX] para activar: Piper desata un ataque de golpe descendente, infligiendo masivo Daño Físico. Si la duración de (Técnica Especial EX: Giro de Motor) llega a su límite o la Energía baja a 20, (Técnica Especial EX: Muy Pesado) se activará automáticamente. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Abróchense",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un poderoso golpe descendente a enemigos en frente en una gran área, infligiendo masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: ¡Agárrense~ Fuerte~!",
      description: "Cuando el Nivel de Decibelios está al [Máximo], presiona [Icono Definitiva] para activar: Gira rápidamente, desatando poderosos cortes giratorios a enemigos en una gran área adelante, seguidos de un golpe descendente, infligiendo masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Carga de Potencia",
      description: "Cuando la (Técnica Especial EX: Giro de Motor) o (Definitiva) de Piper golpea a un enemigo, gana 1 acumulación de (Potencia), hasta un máximo de 20 acumulaciones, durando 12s. Activaciones repetidas reinician la duración. Por cada acumulación de (Potencia), la Tasa de Acumulación de Anomalía Física de Piper aumenta en un {VALOR_1}.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Aceleración Sincronizada",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Cuando Piper tiene 20 o más acumulaciones de (Potencia), el Daño de todos los miembros del escuadrón aumenta en un 18%.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Toque de Freno",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Lanza un ataque de golpe descendente a enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Freno de Emergencia",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Esta habilidad sobresale en bloquear ataques enemigos y reduce el consumo de (Puntos de Asistencia) cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Maniobra de Adelantamiento",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Carga y corta enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Momento de Ocio",
      description: "Cuando la (Técnica Especial: Giro de Neumático), (Técnica Especial EX: Giro de Motor), o (Definitiva) de Piper golpea a un enemigo con un corte giratorio, hay un 50% de probabilidad de ganar una acumulación adicional de (Potencia). El límite máximo de acumulaciones de (Potencia) aumenta a 30.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Motivación",
      description: "Durante (Técnica Especial: Giro de Neumático) y (Técnica Especial EX: Giro de Motor), la velocidad de movimiento de Piper aumenta. Cuando usa (Técnica Especial: Un Billón de Toneladas), (Técnica Especial EX: Muy Pesado), o (Definitiva) para lanzar un golpe descendente que golpea a un enemigo, el Daño Físico infligido por el movimiento aumenta en un 10%. Por cada acumulación de (Potencia), este buff aumenta en un 1% adicional.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Experta en Camiones",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Técnicas Refinadas",
      description: "Siempre que un miembro del escuadrón inflige una Anomalía de Atributo en un enemigo, Piper recupera 20 de Energía. Este efecto puede activarse una vez cada 30s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Pasatiempos Personales",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Emoción Leve",
      description: "Aumenta el límite de duración de (Técnica Especial EX: Giro de Motor) en 2s y extiende la duración de (Potencia) en 4s.",
      tags: ["Mindscape 6"]
    }
  ]
};
