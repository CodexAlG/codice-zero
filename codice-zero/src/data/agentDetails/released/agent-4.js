// Agent 4 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 653,
      max: 8127
    },
    atk: {
      min: 106,
      max: 735
    },
    def: {
      min: 48,
      max: 594
    },
    impact: 116,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "97",
    anomalyMastery: "96",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "impact",
    valuePerNode: 6
  },
  coreSkillScaling: [
    ["30%"],
    ["35%"],
    ["40%"],
    ["45%"],
    ["50%"],
    ["55%"],
    ["60%"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Aplastar y Machacar",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 4 golpes, infligiendo Daño Físico. Cuando Koleda tiene el efecto de (Fuego de Horno), puede lanzar un (Ataque Básico) mejorado tras el 2do golpe, consumiendo el efecto de (Fuego de Horno) e infligiendo masivo Daño de Fuego. Cuando Koleda y Ben están desplegados juntos, ejecutar un (Ataque Básico) mejorado activará un ataque coordinado de ambos, aumentando aún más el poder del movimiento; Koleda es invulnerable durante el 4to golpe del (Ataque Básico) y el (Ataque Básico) mejorado.",
      tags: ["Físico", "Fuego", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Espera y Verás",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: ¡Tiembla!",
      description: "Presiona [Icono Ataque] durante una Evasión para activar: Golpea enemigos en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: ¡No Me Menosprecies!",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Golpea enemigos en frente y crea una explosión, infligiendo Daño de Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Hora del Martillo",
      description: "Presiona [Icono Especial] para activar: Golpea enemigos en frente y activa una explosión, infligiendo Daño de Fuego. Esta habilidad se lanza más rápido y activa una explosión cuando se usa tras el 2do o 4to golpe del (Ataque Básico) de Koleda o (Ataque Básico) mejorado. Cuando Koleda y Ben están ambos en tu escuadrón, y esta habilidad se lanza rápidamente tras un (Ataque Básico) mejorado, se unen para lanzar un ataque coordinado, aumentando aún más el poder de la habilidad. El nivel de Anti-Interrupción aumenta durante esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Horno Hirviente",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Golpea enemigos en frente y activa una poderosa explosión, infligiendo masivo Daño de Fuego. Koleda también gana el efecto de (Fuego de Horno). Esta habilidad se activa más rápido y activa una explosión cuando se usa tras el 2do o 4to golpe del (Ataque Básico) de Koleda o (Ataque Básico) mejorado. Cuando Koleda y Ben están ambos en tu escuadrón y esta habilidad se lanza rápidamente tras un (Ataque Básico) mejorado, se unen para lanzar un ataque coordinado, aumentando aún más el poder de la habilidad. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Desastre Natural",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata una poderosa explosión en enemigos en una gran área, infligiendo masivo Daño de Fuego mientras también obtiene el efecto de (Fuego de Horno). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Terremoto de Martillo",
      description: "Cuando el Nivel de Decibelios está al [Máximo], presiona [Icono Definitiva] para activar: Desata una poderosa explosión en enemigos en una gran área en frente, infligiendo masivo Daño de Fuego mientras también obtiene el efecto de (Fuego de Horno). Koleda y Ben pueden unirse cuando luchan juntos para lanzar un ataque coordinado, aumentando aún más el poder del ataque. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Martillo de Demolición",
      description: "Cuando Koleda usa su (Técnica Especial EX) o consume (Fuego de Horno) para usar un (Ataque Básico) mejorado, el Aturdimiento que inflige aumenta en un {VALOR_1}.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional: Gestión de Belobog",
      name: "Habilidad Adicional: Gestión de Belobog",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción o es un personaje (Aturdidor): Cuando la explosión de la (Técnica Especial EX) de Koleda golpea a un enemigo, aplica un debuff al objetivo. Mientras el objetivo está Aturdido, los (Ataques en Cadena) infligen 35% más Daño al objetivo. Este efecto puede acumularse hasta 2 veces y se reinicia cuando el efecto de Aturdimiento termina.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: ¡Pasando!",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea enemigos en frente, infligiendo Daño de Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Martillo Protector",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Esta habilidad sobresale en bloquear ataques enemigos y reduce el consumo de (Puntos de Asistencia) cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Campana de Martillo",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Koleda carga y golpea enemigos en frente, infligiendo Daño de Fuego y obteniendo el efecto de (Fuego de Horno). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Golpe del Martillo",
      description: "Tras el 2do o 4to golpe del (Ataque Básico) de Koleda o su (Ataque Básico) mejorado, usa rápidamente una (Técnica Especial) o (Técnica Especial EX) para aumentar el Aturdimiento infligido en un 15%.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Recuperación Cinética",
      description: "Cuando la (Técnica Especial EX) de Koleda golpea a un enemigo, recupera 60 de Energía. Puede activarse una vez cada 45s.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "¡Ocúpate de lo Tuyo!",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Brillo del Horno",
      description: "Koleda gana una acumulación de Carga (máx 2 acumulaciones) cuando consume (Fuego de Horno) para usar su (Ataque Básico) Mejorado. Cuando su (Ataque en Cadena: Desastre Natural) o (Definitiva: Terremoto de Martillo) golpea a un enemigo, consume todas las acumulaciones de Carga para aumentar el Daño del ataque en un 18% por acumulación.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "¿Te Atreves a Subestimarme?",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Explosión Saturada",
      description: "Cuando (Técnica Especial EX), (Ataque en Cadena), o (Definitiva) activa una explosión que golpea a un enemigo, inflige Daño adicional igual al 360% del ATK de Koleda.",
      tags: ["Mindscape 6"]
    }
  ]
};
