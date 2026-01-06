// Agent 34 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 680,
      max: 8453
    },
    atk: {
      min: 95,
      max: 661
    },
    def: {
      min: 54,
      max: 712
    },
    impact: 94,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "91",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "energia",
    valuePerNode: 0.12
  },
  coreSkillScaling: [
    ["9%"],
    ["10.5%"],
    ["12%"],
    ["13.5%"],
    ["15%"],
    ["16.5%"],
    ["18%"]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Golpes Inquebrantables",
      description: "Presiona [Icono Ataque] para activar: Lanza hasta cuatro ataques cuerpo a cuerpo consecutivos, causando Daño Fisico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Ligero como una Golondrina",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Aceite Hirviendo Supremo",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Realiza un ataque cuerpo a cuerpo rápido hacia adelante, causando Daño Fisico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Moviendo Montañas y Mares",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Realiza un ataque cuerpo a cuerpo a los enemigos en frente, causando Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Golpe Sonico de Punto de Presion",
      description: "Presiona [Icono Especial] para activar: Entrega una técnica cuerpo a cuerpo hacia adelante mientras arroja petardos, causando Daño Fisico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Toque de la Muerte",
      description: "Con (Fuerza de Ruptura), presiona [Icono Especial] para activar: (Tecnica Especial: Toque de la Muerte) ataca centrado en el enemigo, causando Daño Fisico. La habilidad puede encadenarse hasta tres veces. Cada uso de (Tecnica Especial: Toque de la Muerte) consume 1 punto de (Fuerza de Ruptura). Cuando Pan Yinhu es el personaje activo, el DAÑO recibido durante la habilidad se reduce en un 40% y el Nivel de Anti-Interrupción aumenta. Si él no es el personaje activo, se vuelve Invulnerable.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Golpe de Pulso Montañoso",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: (Tecnica Especial EX: Golpe de Pulso Montañoso) desata un golpe poderoso hacia adelante, causando Daño Fisico. Gana 3 puntos de (Fuerza de Ruptura) al activarse. Al golpear a un enemigo, activa la (Asistencia Rapida) del personaje anterior en el escuadrón. Agentes que entren al campo vía esta (Asistencia Rapida) ganarán el bono de Fuerza Pura de la (Pasiva Central). Después de cambiar, Pan Yinhu permanecerá en el campo y lanzará automáticamente (Tecnica Especial: Toque de la Muerte) hasta que su (Fuerza de Ruptura) se agote, donde luego dejará el campo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Levanta tu Mirada a la Buena Fortuna",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Realiza un ataque cuerpo a cuerpo a los enemigos en frente, causando Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Presencia Intimidante",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. Esta habilidad sobresale al hacer parry a ataques enemigos y reduce el consumo de (Puntos de Asistencia) cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Montar el Impulso",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Realiza un ataque cuerpo a cuerpo a los enemigos en frente, causando Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Iluminacion del Meridiano",
      description: "Por un breve periodo cuando la (Tecnica Especial EX: Golpe de Pulso Montañoso) de Pan Yinhu golpea a un enemigo y activa (Asistencia Rapida), el siguiente Agente entrando a través de una (Asistencia Rapida) o (Ataque en Cadena) ganará el efecto (Flujo del Meridiano). Este efecto provee un aumento de Fuerza Pura igual al {VALOR_1} del ATK inicial de Pan Yinhu y dura 25s. La Fuerza Pura provista por este efecto no puede exceder 540 puntos.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Estomago de Hierro",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Ruptura) o comparte la misma Facción: Cuando Pan Yinhu golpea a un enemigo con (Tecnica Especial: Toque de la Muerte), el enemigo sufre el efecto (Qi Agotado), aumentando el DAÑO de todas las unidades contra el objetivo en un 20%. Cada golpe de (Tecnica Especial: Toque de la Muerte) inflige un efecto de (Qi Agotado) de 10s. Este efecto no se acumula, pero golpes repetidos en el mismo enemigo extenderán la duración.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Ungido con Vapor de Wok",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Salta sobre el Wok de Hierro y gira rápidamente para embestir a los enemigos, causando masivo Daño Fisico a todos los enemigos en el camino. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: ¡Un Banquete Digno de un Emperador!",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Realiza una técnica que comprime qi en arroz frito y lo catapulta a los enemigos, causando masivo Daño Fisico y curando a todos los miembros del escuadrón por 820.0 Hp, mientras también aplica una curación con el tiempo en todos los miembros del escuadrón, recuperando 1.4% Hp/s durante 8s. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "Escudo Qi",
      description: "Todas las unidades infligen un 10% de DAÑO aumentado a enemigos afectados por (Qi Agotado).",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Golpe de Punto de Presion Yunkui",
      description: "Por cada 6 puntos de (Fuerza de Ruptura) consumidos, Pan Yinhu recuperará 4 de Energía, y el efecto (Qi Agotado) aplicado cuando (Tecnica Especial: Toque de la Muerte) golpea a un enemigo tendrá su duración aumentada a 12s.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Punto de Presion No-Meridiano",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Jefe de Cocina de Primera Clase",
      description: "Cuando (Definitiva: ¡Un Banquete Digno de un Emperador!) cura a todos los miembros del escuadrón, la recuperación de Hp aumenta un 25%, y el efecto de curación con el tiempo aumenta un 25%. Al activar (Definitiva: ¡Un Banquete Digno de un Emperador!), gana el efecto (Provisiones de Respaldo). Cuando cualquier personaje en el escuadrón pierde Hp, consume el efecto (Provisiones de Respaldo) para restaurar instantáneamente el 50% de los Hp recuperados con el efecto de recuperación instantánea de (Definitiva: ¡Un Banquete Digno de un Emperador!). Este efecto no se acumula.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "\"Thiren\"",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Teoria del Meridiano",
      description: "El efecto (Flujo del Meridiano) provisto por (Pasiva Central: Iluminacion del Meridiano) aumenta en un extra 6% del ATK inicial de Pan Yinhu. La Fuerza Pura máxima provista por este efecto aumenta a 720.",
      tags: ["Mindscape 6"]
    }
  ]
};
