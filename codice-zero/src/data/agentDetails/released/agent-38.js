// Agent 38 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 617,
      max: 7673
    },
    atk: {
      min: 127,
      max: 880
    },
    def: {
      min: 49,
      max: 606
    },
    impact: 86,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "106",
    anomalyMastery: "118",
    penRatio: "0%",
    energyRegen: "1.4",
  },
  coreStats: {
    statName: "tasa",
    valuePerNode: 12
  },
  coreSkillScaling: [
    ["12.5%"],
    ["14.6%"],
    ["16.7%"],
    ["18.8%"],
    ["20.8%"],
    ["22.9%"],
    ["25%"]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Abertura Celestial",
      description: "Presiona [Icono Ataque] para activar: Realiza hasta 5 cortes hacia adelante, causando Daño Fisico. Cuando Alice activa (Asalto) a través de la Acumulación de Anomalía de Atributo, el 5to golpe de su siguiente (Ataque Basico) es mejorado.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Vals de Brillo Estelar",
      description: "Cuando la (Etiqueta de Hoja) de Alice alcanza 1 barra, mantén [Icono Ataque] para activar: Mantén para cargar, gastando hasta 3 barras de (Etiqueta de Hoja). Suelta [Icono Ataque] o cuando la (Etiqueta de Hoja) esté por debajo de 1 barra, Alice realiza una serie de cortes en un área centrada en el enemigo objetivo, con el número de golpes determinado por el nivel de carga, causando masivo Daño Fisico. Cuando el Movimiento Final de un (Ataque Basico: Vals de Brillo Estelar) cargado de tres etapas golpea, activa un efecto especial de (Asalto): Asalto de Polaridad. Esto causa DAÑO igual al 100.0% del (Asalto) original, ignorando la Acumulación de Anomalía, y puede interactuar con otras Anomalías de Atributo, incluyendo Físico, para activar (Desorden). (Etiqueta de Hoja) no se acumula al golpear a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Conejito Saltarin",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Ataque de Carrera",
      name: "Ataque de Carrera: Vendaval del Bailarin de la Espada",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta a los enemigos en frente, causando Daño Fisico.",
      tags: ["Físico", "Ataque de Carrera", "Evasión"]
    },
    {
      type: "Contraataque de Evasión",
      name: "Contraataque de Evasion: Ceremonia de Luz de Espada",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Corta y patea a los enemigos en frente, causando Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Contraataque de Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Amanecer Perforante",
      description: "Presiona [Icono Especial] para activar: Arroja la hoja para golpear y atravesar a los enemigos adelante, causando Daño Fisico. Al activar esta habilidad, se puede activar una (Evasion Perfecta). Después de activar una (Evasion Perfecta), presiona [Icono Ataque] para seguir con el 5to golpe de un (Ataque Basico). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Estocada Aurora - Cruz del Norte",
      description: "Con suficiente Energía, arrastra la palanca/joystick hacia adelante y presiona [Icono Especial EX] para activar: Un ataque de estocada que atraviesa a los enemigos adelante, causando masivo Daño Fisico. Activar la habilidad puede activar (Evasion Perfecta) y restaura 10 (Etiqueta de Hoja). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Estocada Aurora - Cruz del Sur",
      description: "Con suficiente Energía, y sin mover la palanca/joystick o arrastrándola hacia atrás, presiona [Icono Especial EX] para activar: Retrocede con un corte, luego empuja hacia adelante, causando masivo Daño Fisico. Activar la habilidad puede activar (Evasion Perfecta) y restaura 10 (Etiqueta de Hoja). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Asistencia Rápida",
      name: "Asistencia Rapida: Puñalada Entrelazada",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta y patea a los enemigos en frente, causando Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia Rápida", "Asistencia"]
    },
    {
      type: "Asistencia Defensiva",
      name: "Asistencia Defensiva: Guardia de Parry",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia Defensiva", "Asistencia"]
    },
    {
      type: "Ataque de Asistencia",
      name: "Ataque de Asistencia: Riposta Cruzada",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Carga hacia adelante y corta a los enemigos en frente, causando Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque de Asistencia", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Arcoiris Gemelos del Corazon de la Espada",
      description: "Después de que cualquier miembro del escuadrón inflige una Anomalia Fisica en un enemigo, Alice causa daño adicional cada 0.95s de su duración activa, igual al {VALOR_1} del Daño de Anomalía Física original. Si (Desorden) es activado mientras el enemigo está sufriendo una Anomalia Fisica, por cada 1s de duración restante de Anomalia Fisica, el multiplicador de DAÑO de (Desorden) aumenta en un 18%, hasta un máximo de 180.0%. Cuando los ataques de Alice golpean a un enemigo, ella acumula (Etiqueta de Hoja). Cuando ella activa un (Asalto) a través de la Acumulación de Anomalía, gana 10 (Etiqueta de Hoja). (Etiqueta de Hoja) tiene un máximo de 300, con cada 100 siendo 1 barra. Cuando el Movimiento Final de un (Ataque Basico: Vals de Brillo Estelar) cargado de tres etapas aterriza, activa un efecto especial de (Asalto): Asalto de Polaridad, causando 100.0% del DAÑO de (Asalto) original, ignorando el progreso de Acumulación de Anomalía. Esto puede combinarse con cualquier otra Anomalía de Atributo, incluyendo Anomalía Física, para activar (Desorden). Cuando Alice activa (Asalto) en un enemigo, su Tasa de Acumulacion de Anomalia Fisica aumenta en un 25% por 30s.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Caza Misteriosa",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Anomalia) o (Soporte): Cuando cualquier miembro del escuadrón activa (Desorden), Alice gana 30 (Etiqueta de Hoja). Si la Maestría de Anomalía de Alice excede 140, cada punto adicional le otorga 1.6 de Competencia de Anomalía. Al entrar al campo de batalla, Alice gana 300 (Etiqueta de Hoja). Este efecto puede activarse una vez cada 180s en el modo Zona de Investigación.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Ataque en Cadena",
      name: "Ataque en Cadena: Intermedio de Lluvia de Estrellas",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata poderosos cortes consecutivos a los enemigos adelante, causando masivo Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Final de Lluvia de Estrellas",
      description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Desata poderosos cortes a los enemigos en un área grande adelante, causando masivo Daño Fisico. Activar esta habilidad restaura 200 (Etiqueta de Hoja). (Etiqueta de Hoja) no se acumula al golpear a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "Puñado de Cilantro",
      description: "Cuando Alice activa un Asalto de Polaridad, gana 25 (Etiqueta de Hoja). Cuando activa (Asalto) contra un enemigo, la DEF del objetivo se reduce en un 20% por 30s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Sabio en la Punta de la Espada",
      description: "Cuando el Movimiento Final de (Definitiva: Final de Lluvia de Estrellas) golpea a un enemigo, activa Asalto de Polaridad. El DAÑO de (Asalto) de todos los miembros del escuadrón aumenta en un 15%. El DAÑO de (Desorden) contra enemigos sufriendo de Anomalia Fisica aumenta en un 15%. Al entrar al campo de batalla, Alice gana inmediatamente 1,000 Decibelios. Se activa una vez cada 180s en el modo Zona de Investigación.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Simetrismo",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Romero en Sus Labios",
      description: "Alice ignora el 10% de la Res Fisica del objetivo. (Ataque Basico: Abertura Celestial) mejorado acumula un 25% más de Acumulacion de Anomalia Fisica.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Pasion por lo Sobrenatural",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Un Corazon de Tomillo",
      description: "Cuando Alice usa un (Ataque Basico: Vals de Brillo Estelar) cargado de tercera etapa o (Definitiva: Final de Lluvia de Estrellas), entra en el (Estado de Victoria) por 30s. Durante este tiempo, siempre que cualquier miembro del escuadrón aseste un golpe en un objetivo, Alice seguirá con un ataque extra contra el objetivo, causando Daño Fisico igual al 3,300% de su Competencia de Anomalía. Este efecto puede activarse una vez cada 1s y está garantizado a ser CRIT. Este efecto puede activarse hasta 6 veces. Ganar el (Estado de Victoria) nuevamente refresca el conteo de activaciones disponible.",
      tags: ["Mindscape 6"]
    }
  ]
};
