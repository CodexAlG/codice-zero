// Agent 43 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 683,
      max: 8497
    },
    atk: {
      min: 124,
      max: 859
    },
    def: {
      min: 36,
      max: 448
    },
    impact: "95",
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "87",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
    sheerForce: {
      min: 105,
      max: 1107
    }
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  materials: {
    weeklyBoss: {
      name: "Pico de miasma carmesí",
      icon: "Item_Crimson_Miasma_Spike.webp",
    },
    eliteBoss: {
      name: "Datos de dimensiones superiores: Acero onírico corrupto",
      icon: "Item_Higher_Dimensional_Data_Corrupted_Dreamsteel.webp",
    }
  },
  coreSkillScaling: [
    "50%",
    "58%",
    "66%",
    "74%",
    "82%",
    "90%",
    "100%"
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Golpe Aplastante",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 3 golpes, infligiendo Daño Glacial. En el 3er golpe, Yidhari recupera un 10% de PV.",
      tags: [
        "Hielo",
        "Físico"
      ]
    },
    {
      type: "Ataque Básico",
      name: "Abrazo de Escarcha",
      description: "Mantén presionado [Icono Ataque] para activar: Yidhari comienza a cargar, consumiendo continuamente PV para alcanzar hasta tres niveles de carga. Cuando se suelta [Icono Ataque], Yidhari desata un poderoso ataque de martillo cargado frente a ella basado en el nivel de carga actual, infligiendo daño masivo de Daño Glacial. Cuanto más altos sean los PV de Yidhari, más rápido los consume al cargar. El consumo de PV reducirá como máximo los PV de Yidhari al 25% de los PV Máx. Con 2 niveles de carga, después de usar la habilidad, presiona [Icono Ataque] para seguir inmediatamente con el 3er golpe del (Ataque Básico: Golpe Aplastante) El Daño de un (Ataque Básico: Golpe Aplastante) activado de esta manera aumenta según el nivel de carga actual, hasta un 30%. Con 3 niveles de carga, Yidhari gana un nivel de Anti-interrupción aumentado durante la habilidad cargada. Presiona [Icono Ataque] para encadenar anticipadamente con el golpe final.",
      tags: "Hielo",
    },
    {
      type: "Ataque Básico",
      name: "Peso Aplastante de la Escarcha",
      description: "Mientras carga o gira durante el (Ataque Básico: Abrazo de Escarcha) si es golpeada por un enemigo, Yidhari puede bloquear con sus tentáculos, reduciendo el Daño recibido en un 25%. Si carga o aún no está a carga completa, Yidhari contraataca con sus tentáculos, volviendo a la postura de carga y ganando instantáneamente 1 nivel de carga, mientras también inflige Daño Glacial a los enemigos en frente. Mientras (Peso Aplastante de la Escarcha) está activo, presionar [Icono Ataque] hace que Yidhari desate inmediatamente el golpe final del (Ataque Básico: Abrazo de Escarcha) basado en su nivel de carga actual. Mientras (Peso Aplastante de la Escarcha) está activo, presionar [Icono Especial] o [Icono Especial EX] hace que Yidhari desate una (Técnica Especial: Frío Creciente) (Persecución Aplastante) que garantiza la activación de (Frío Creciente).",
      tags: "Hielo",
    },
    {
      type: "Evasión",
      name: "Cambio Onírico",
      description: "Presiona [Icono Dodges] para activar: Una (evasión rápida). El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Esquiva",
        "Congelación"
      ]
    },
    {
      type: "Ataque de Evasión",
      name: "Impacto de Flor de Escarcha",
      description: "Presiona [Icono Ataque] durante una (evasión) para activar: Golpea hacia adelante, infligiendo Daño Glacial.",
      tags: "Evasión",
    },
    {
      type: "Contraatque de Evasión",
      name: "Reverberación de Arrastre Helado",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Golpea a los enemigos en frente, infligiendo Daño Glacial. El personaje es invulnerable mientras usa esta habilidad.",
      tags: "Evasión",
    },
    {
      type: "Asistencia Rápida",
      name: "Refuerzo de Choque Helado",
      description: "Cuando el personaje activo es lanzado por los aires, presiona [Icono Assist] para activar: Golpea a los enemigos en frente, infligiendo Daño Glacial. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Asistencia"
      ]
    },
    {
      type: "Asistencia Defensiva",
      name: "Rechazo de Terremoto Relámpago",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Realiza un parry al ataque del enemigo, infligiendo Aturdimiento masivo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Asistencia"
      ]
    },
    {
      type: "Ataque de Asistencia",
      name: "Asalto Glacial",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Ejecuta un ataque de martillo de fragmentos de hielo contra los enemigos en frente, infligiendo Daño Glacial. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Asistencia"
      ]
    },
    {
      type: "Técnica Especial",
      name: "Cese de Pensamientos",
      description: "Presiona [Icono Especial] para activar: Lanza a los enemigos frente a ella por el aire, infligiendo Daño Glacial. El nivel de Anti-interrupción aumenta mientras se usa esta habilidad.",
      tags: [
        "AoE",
        "Interrupción"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Espiral de Escarcha",
      description: "Con suficiente Adrenalina, presiona [Icono Especial] para activar: Realiza dos golpes ascendentes consecutivos, luego libera una niebla helada, infligiendo daño masivo de Daño Glacial. Si la (Técnica Especial EX: Espiral de Escarcha) golpea a un enemigo, Yidhari recupera PV al final de la habilidad equivalente al 33% de sus PV faltantes. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "AoE",
        "Interrupción"
      ]
    },
    {
      type: "Técnica Especial",
      name: "Frío Creciente, Persecución Aplastante",
      description: "Presiona [Icono Especial] o [Icono Especial EX] mientras cargas o giras durante el (Ataque Básico: Abrazo de Escarcha) o presiona [Icono Dodges] mientras mantienes [Icono Ataque] para activar: Lanza a los enemigos frente a ella por el aire, infligiendo Daño Glacial. Cuando el ataque de la habilidad choca con el ataque de un enemigo, activa (Frío Creciente). Si la habilidad golpea a un enemigo Aturdido, y con suficiente Adrenalina, activa (Persecución Aplastante). Activar (Frío Creciente) o (Persecución Aplastante) eleva instantáneamente el nivel de carga al máximo. Durante esta habilidad, presiona [Icono Ataque] y Yidhari desatará inmediatamente el golpe final del (Ataque Básico: Abrazo de Escarcha) basado en el nivel de carga actual. El nivel de Anti-interrupción aumenta mientras se usa esta habilidad.",
      tags: [
        "AoE",
        "Interrupción"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Aplastamiento Glacial",
      description: "Al activar (Frío Creciente) o (Persecución Aplastante), y con suficiente Adrenalina, presiona [Icono Especial EX] o [Icono Ataque] para activar: Se lanza hacia adelante con un ataque ascendente, luego salta en el aire antes de propinar un poderoso golpe descendente, infligiendo daño masivo de Daño Glacial. Si la (Técnica Especial EX: Aplastamiento Glacial) golpea a un enemigo, Yidhari se cura al final de la habilidad un 33% de sus PV faltantes. Si la habilidad se usa después de (Frío Creciente), otorga 15 de Adrenalina adicional. Este efecto puede activarse una vez cada 1s. Después de usar esta habilidad, presiona [Icono Ataque] para desatar inmediatamente el golpe final del (Ataque Básico: Abrazo de Escarcha) basado en el nivel de carga actual. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "AoE",
        "Interrupción"
      ]
    },
    {
      type: "Ataque en Cadena",
      name: "Juramento Helado",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un golpe poderoso contra los enemigos en un área pequeña frente a ella, infligiendo daño masivo de Daño Glacial. Si está dentro de (Velo Etéreo: Manantial), los tentáculos se unen al asalto, mejorando aún más el poder de la habilidad. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Cadena",
        "Campo"
      ]
    },
    {
      type: "Ataque en Cadena",
      name: "Velo Etéreo: Manantial",
      description: "Cuando la Puntuación de Decibelios está al Máximo, el golpe final del (Ataque Básico: Abrazo de Escarcha), (Técnica Especial EX: Espiral de Escarcha), (Técnica Especial EX: Aplastamiento Glacial) y (Ataque en Cadena: Juramento Helado) consumirá 3,000 Decibelios para activar un (Velo Etéreo: Manantial). Mientras (Velo Etéreo: Manantial) está activo, los PV Máx. de todos los miembros del escuadrón aumentan un 5% durante 30s. Las activaciones repetidas extienden la duración, hasta un máximo de 300s. Mientras Yidhari está dentro de (Velo Etéreo: Manantial), la velocidad de carga del (Ataque Básico: Abrazo de Escarcha aumenta) y los PV se consumen más rápido durante la carga.",
      tags: [
        "Cadena",
        "Velo Etéreo"
      ]
    },
    {
      type: "Técnica Definitiva",
      name: "Acto Final - Cruzando el Río del Arrepentimiento",
      description: "Después de que Yidhari gaste Decibelios para activar (Velo Etéreo: Manantial), presiona [Icono Definitiva] dentro de los siguientes 30s para activar: Asesta un golpe poderoso a los enemigos en un área grande frente a ella, infligiendo daño masivo de Daño Glacial. El personaje es invulnerable mientras usa esta habilidad. Cada vez que Yidhari gasta Decibelios para activar un (Velo Etéreo: Manantial), puede usar la (Técnica Definitiva: Acto Final - Cruzando el Río del Arrepentimiento) una vez.",
      tags: [
        "Ultimate",
        "Campo"
      ]
    },
    {
      type: "Pasiva Central",
      name: "Colección de Paisajes Oníricos",
      description: "Yidhari gana Fuerza Pura (Sheer Force) adicional basada en sus PV Máx., donde cada 1 punto de PV Máx. aumenta la Fuerza Pura en 0.1. Todo el Daño Glacial infligido por Yidhari se inflige como Daño Puro, ignorando la DEF del enemigo y usando su estadística de Fuerza Pura como Multiplicador de Daño. Cuando Yidhari entra en combate, gana inmediatamente 60 de Adrenalina. En el modo Zona de Investigación, este efecto puede activarse una vez cada 180s. El Daño de habilidad de Yidhari aumenta a medida que disminuye su porcentaje de PV actuales. Cuando sus PV caen por debajo del 50%, el buff alcanza su valor máximo, aumentando su Daño hasta un {VALOR}. Una vez que sus PV se restauran al 50%, la bonificación máxima permanece durante 5s más. Yidhari gana menos Decibelios al asestar habilidades. En su lugar, gana Decibelios a medida que sus PV disminuyen; cada 1% de PV perdido otorga 10 Decibelios",
      tags: [
        "Pasiva",
        "Buff"
      ]
    },
    {
      type: "Habilidad Adicional",
      name: "Narrativa Completa",
      description: "Se activa cuando hay otro personaje en tu escuadrón que es (Aturdidor) o (Soporte): Cuando los PV de Yidhari caen por debajo del 50%, el Daño Crítico aumenta un 30% y el daño recibido se reduce un 25%. Mientras Yidhari está dentro de (Velo Etéreo: Manantial), obtiene el siguiente efecto adicional: Tras el ataque cargado de nivel 3 del (Ataque Básico: Abrazo de Escarcha) o la (Técnica Especial EX: Aplastamiento Glacial), se invoca un tentáculo helado para atacar, infligiendo daño extra. Este efecto puede activarse una vez cada 12s. La habilidad anterior se considera una (Técnica Especial EX), el multiplicador de Daño aumenta según el nivel de la (Técnica Especial EX).",
      tags: [
        "Adicional",
        "Pasiva",
        "Buff"
      ]
    },
    {
      type: [
        "Mindscape",
        "Dupe"
      ],
      name: "El Pasado Perdido bajo el Abismo",
      description: "El coste de Adrenalina para activar la (Técnica Especial EX) de Yidhari se reduce en 10. Tras usar (Técnica Especial EX: Espiral de Escarcha) o (Técnica Especial EX: Aplastamiento Glacial), mantener presionado el botón de (Ataque Básico) o (Técnica Especial) consume 35 de Adrenalina para renunciar a la curación e inmediatamente encadenar otra (Técnica Especial EX: Aplastamiento Glacial). Los PV restaurados por esta (Técnica Especial EX: Aplastamiento Glacial), aumentan en un 100% del valor original. Los (Ataques Básicos) y (Técnicas Especiales EX) de Yidhari ignoran un 20% de la RES a Glacial del objetivo.",
    },
    {
      type: [
        "Mindscape",
        "Dupe"
      ],
      name: "¿Quién Mora Aquí, Perdido en sus Pensamientos?",
      description: "El Daño Crítico de Yidhari aumenta en un 40%. Activar (Frío Creciente) o (Persecución Aplastante) otorga una regeneración de Adrenalina de 0.5/s durante hasta 30s. Las activaciones repetidas reinician la duración.",
    },
    {
      type: [
        "Mindscape",
        "Dupe"
      ],
      name: "Una Historia Sin Audiencia",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2.",
    },
    {
      type: [
        "Mindscape",
        "Dupe"
      ],
      name: "Floreciendo en Silencio",
      description: "Yidhari gana un 10% más de Decibelios al perder PV por la (Pasiva Principal: Colección de Paisajes Oníricos). Mientras está en (Velo Etéreo: Manantial), los PV Máx. de Yidhari aumentan adicionalmente un 5%.",
    },
    {
      type: [
        "Mindscape",
        "Dupe"
      ],
      name: "Este Consuelo Es Real",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2.",
    },
    {
      type: [
        "Mindscape",
        "Dupe"
      ],
      name: "Al Fin, un Sueño Pacífico",
      description: "Después de que Yidhari gaste Decibelios para activar o extender (Velo Etéreo: Manantial), gana (Erudición) durante 30s. Mientras (Erudición) está activa, su Daño Puro (Sheer DMG) aumenta un 25%. Además, al recibir daño fatal por primera vez, sus PV se reducen como máximo a 1, y durante los siguientes 5s, no puede ser derrotada y restaurará un 25% de sus PV con el tiempo.",
    }
  ]
};
