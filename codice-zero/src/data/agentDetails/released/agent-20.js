// Agent 20 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 699,
      max: 8701
    },
    atk: {
      min: 93,
      max: 643
    },
    def: {
      min: 60,
      max: 746
    },
    impact: 105,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "86",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "energy%",
    valuePerNode: 0.12
  },
  coreSkillScaling: [
    ["40%", "50"],
    ["50%", "62"],
    ["60%", "75"],
    ["68%", "85"],
    ["72%", "90"],
    ["76%", "95"],
    ["80%", "100"],  // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Golpe de Relámpago",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 4 ataques en frente, infligiendo Daño Físico y Daño Eléctrico.",
      tags: ["Físico", "Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Golpe de Relámpago - Electrificado",
      description: "Cuando (Resolución) está por encima o igual al 75%, mantén [Icono Ataque] para activar: Consume 75% de (Resolución) para lanzar ataques consecutivos en frente, infligiendo Daño Eléctrico. Cuando el Movimiento Final golpea a un enemigo, activa el (Asistencia Rápida) del miembro del escuadrón posicionado antes de Seth. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Maniobra de Evasión",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión deslizante. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Asalto de Trueno",
      description: "Presiona [Icono Ataque] durante una (Evasión) para activar: Carga adelante con un ataque de escudo, infligiendo Daño Físico. El Daño recibido durante el movimiento se reduce en un 40%.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Retirada para Avanzar",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Desata un rápido corte descendente en enemigos en frente, infligiendo Daño Eléctrico. Después del movimiento, mantén [Icono Especial EX] para encadenar en (Técnica Especial EX: Embestida de Escudo de Trueno - Alto Voltaje), permitiendo carga más rápida. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Soporte Armado",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Desata un rápido corte descendente en enemigos en frente, infligiendo Daño Eléctrico. Después del movimiento, mantén [Icono Especial EX] para encadenar en (Técnica Especial EX: Embestida de Escudo de Trueno - Alto Voltaje), permitiendo carga más rápida. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Escudo de Trueno",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Al ganar (Resolución), este efecto destaca en bloquear (Parry) ataques enemigos y reduce el consumo de Puntos de Asistencia cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Sentencia de Seguridad Pública",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Lanza una estocada hacia adelante, seguida de dos cortes horizontales, infligiendo Daño Eléctrico. Cuando esto golpea a un enemigo, activa el (Asistencia Rápida) del miembro del escuadrón posicionado antes de Seth. Después de activar la habilidad, mantén [Icono Especial EX] para transicionar a (Técnica Especial EX: Embestida de Escudo de Trueno - Alto Voltaje) y cargar más rápido. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Embestida de Escudo de Trueno",
      description: "Presiona [Icono Especial] para activar: Lanza dos ataques de escudo hacia adelante, infligiendo Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Embestida de Escudo de Trueno - Alto Voltaje",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Desata un ataque de escudo hacia adelante, luego carga, infligiendo masivo Daño Eléctrico. Mantén [Icono Especial EX] para cargar durante el movimiento, y Seth se lanzará hacia adelante, desatando una serie de potentes cortes, infligiendo masivo Daño Eléctrico. Activar el movimiento acumula 75% de (Resolución). El nivel de Anti-Interrupción aumenta mientras carga esta habilidad, y el Daño recibido se reduce en un 40%. Seth es invulnerable durante los cortes consecutivos.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Juicio Final",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Lanza una serie de golpes poderosos en frente, infligiendo masivo Daño Eléctrico. Activar el movimiento acumula 75% de (Resolución). Después del movimiento, mantén [Icono Especial EX] para encadenar en (Técnica Especial EX: Embestida de Escudo de Trueno - Alto Voltaje), permitiendo carga más rápida. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: La Justicia Prevalece",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Lanza una serie de ataques ascendentes en frente, seguida de un Movimiento Final, infligiendo masivo Daño Eléctrico. Activar el movimiento acumula 75% de (Resolución), y otorga 3 Puntos de Asistencia adicionales. Después del movimiento, mantén [Icono Especial EX] para encadenar en (Técnica Especial EX: Embestida de Escudo de Trueno - Alto Voltaje), permitiendo carga más rápida. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Protector",
      description: "Cuando Seth activa (Técnica Especial EX: Embestida de Escudo de Trueno - Alto Voltaje), gana un (Escudo de Resolución Firme) igual al {VALOR_1} de su ATK inicial, hasta un máximo de 3000 puntos, y dura 10s. Este efecto puede activarse una vez cada 10s. Cuando (Ataque Básico: Golpe de Relámpago - Electrificado) o Movimiento Final de (Ataque en Cadena) activa el (Asistencia Rápida) o (Ataque en Cadena) de otro miembro del escuadrón, ese miembro del escuadrón que entra al campo gana un (Escudo de Resolución Firme) igual al {VALOR_1} del ATK inicial de Seth, hasta un máximo de 3000 puntos, y dura 10s. Este efecto puede activarse una vez cada 10s. Tener un (Escudo de Resolución Firme) aumenta la Maestría de Anomalía en un {VALOR_2}.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Espíritu Elevado",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Cuando el (Ataque en Cadena: Juicio Final) de Seth o Movimiento Final durante (Ataque Básico: Golpe de Relámpago - Electrificado) golpea a un enemigo, la RES de Acumulación de Anomalía de Todos los Atributos del objetivo se reduce en un 20%, durando 20s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Heroísmo",
      description: "El valor del escudo proporcionado por (Escudo de Resolución Firme) y su límite máximo aumenta en un 30%. Cuando (Escudo de Resolución Firme) termina, el aumento de Maestría de Anomalía proporcionado por (Pasiva Central: Protector) dura 10s adicionales.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Imprudencia de la Juventud",
      description: "Al entrar en batalla, Seth gana inmediatamente 75% de (Resolución). Golpear a un enemigo con (Ataque Básico: Golpe de Relámpago - Electrificado) aumenta la Acumulación de Anomalía Eléctrica del movimiento en un 35%.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Reflejos Lentos",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Aspiración Central",
      description: "El Aturdimiento causado por (Asistencia Defensiva: Escudo de Trueno) aumenta en un 25%.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Admiración Distante",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Idealista",
      description: "Cuando Seth aterriza un Movimiento Final en un enemigo con (Ataque Básico: Golpe de Relámpago - Electrificado), inflige daño adicional igual al 500% de su ATK base. El ataque garantiza activar un golpe crítico, y el Daño Crítico aumenta en un 60%.",
      tags: ["Mindscape 6"]
    }
  ]
};
