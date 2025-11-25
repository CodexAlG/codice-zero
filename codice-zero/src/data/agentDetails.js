export const agentDetails = {
  // =================================================
  // VERSIÓN 2.5 (VOID HUNTER)
  // =================================================
  47: { // Ye Shunguang
    // 
    baseStats: {
      hp: { min: 617, max: 7673 },
      atk: { min: 135, max: 938 },
      def: { min: 49, max: 606 },
      impact: "93",
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "94",
      anomalyMastery: "93",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "prob", // Core stat único para alcanzar el cap de buff
      valuePerNode: 4.8,
    },
    skills: [
      {
        type: "Ataque Básico",
        name: "Ataque Básico ",
        description: "Clic [Icono Ataque] para activar: Realiza hasta cuatro cortes hacia adelante, causando Daño Físico; Al lanzar el cuarto ataque, recuperará todas las espadas en el campo y colocará 6 espadas en el campo.",
        tags: ["Físico", "Ataque Básico"],
      },
      {
        type: "Ataque Básico",
        name: "Qi de Espada",
        description: "Mantener [Icono Ataque] para activar: Lanza rápidamente múltiples ondas de Qi de espada y consume continuamente (Intención de Espada), causando Daño Físico; Se puede extender el ataque haciendo clic repetidamente o manteniendo presionado; Al golpear a un enemigo, aumenta su propia Probabilidad de Crítico en un 6%, dura 60 segundos, se acumula hasta 5 veces, se puede obtener máximo 1 capa cada 0.1 segundos, activar repetidamente refresca la duración.",
        tags: ["Físico", "Ataque Básico"],
      },
      {
        type: "Ataque Básico",
        name: "Forma de Empuñadura Tierra",
        description: "Bajo (Forma de Empuñadura) y estando en el suelo, Clic [Icono Ataque] para activar: Realiza hasta dos etapas de cortes hacia adelante, causando Daño Físico; Al golpear a un enemigo, obtiene 1 capa de efecto (Tendencia Celestial).",
        tags: ["Físico", "Ataque Básico"],
      },
      {
        type: "Ataque Básico",
        name: "Forma de Empuñadura Tierra Tercera Postura",
        description: "Tras la segunda etapa de (Ataque Básico: Forma de Empuñadura Tierra), Clic [Icono Ataque] para activar: Realiza un corte hacia adelante, causando Daño Físico; Tras lanzarlo, Clic [Icono Especial] para activar rápidamente (Ataque Básico: Forma de Empuñadura Cielo Tercera Postura); Al activar el movimiento, si es atacado por un enemigo, puede activar el efecto de bloqueo (Parry), inmunizando ese daño y obteniendo 2 capas de efecto (Tendencia Celestial).  Al lanzar, si posee (Intención de Espada), realizará un corte de gran alcance hacia adelante, causando gran cantidad de Daño Físico; Al golpear a un enemigo, consumirá 1 punto de ( Intención de Espada), y obtendrá 2 capas de efecto (Tendencia Celestial), al mismo tiempo consumirá todo el efecto (Tendencia Celestial), aumentando el daño del movimiento, el valor de aumento específico crece con el nivel de la habilidad (Pasiva Principal)",
        tags: ["Físico", "Ataque Básico"],
      },
      {
        type: "Ataque Básico",
        name: "Forma de Empuñadura Tierra Definitiva",
        description: "En (Ataque de Asistencia: Corte de Retirada) al activar (evasión perfecta), Clic [Icono Ataque] para activar: Realiza un corte hacia adelante, causando Daño Físico; Tras lanzarlo, Clic [Icono Especial] para activar rápidamente (Ataque Básico: Forma de Empuñadura Cielo Tercera Postura); Al activar el movimiento, si es atacado por un enemigo, puede activar el efecto de bloqueo (Parry), inmunizando ese daño, y obteniendo 2 capas de efecto (Tendencia Celestial), se acumula hasta 4 capas.  Al lanzar, si posee ( Intención de Espada), realizará un corte de gran alcance hacia adelante, causando gran cantidad de Daño Físico; Al golpear a un enemigo, consumirá 1 punto de (Intención de Espada), y obtendrá 2 capas de efecto (Tendencia Celestial), al mismo tiempo consumirá todo el efecto (Tendencia Celestial), aumentando el daño del movimiento, el valor de aumento específico crece con el nivel de la habilidad (Pasiva Principal).",
        tags: ["Físico", "Ataque Básico"],
      },
      {
        type: "Ataque Básico",
        name: "Forma de Empuñadura Cielo",
        description: "Bajo (Forma de Empuñadura) y estando en el aire, Clic [Icono Ataque] para activar: Realiza hasta dos etapas de cortes hacia abajo, causando Daño Físico; Al golpear a un enemigo, obtiene 1 capa de efecto (Tendencia Celestial).",
        tags: ["Físico", "Ataque Básico"],
      },
      {
        type: "Ataque Básico",
        name: "Forma de Empuñadura Cielo Tercera Postura",
        description: "Tras la segunda etapa de (Ataque Básico: Forma de Empuñadura Cielo), Clic [Icono Ataque] para activar: Realiza un ataque de caída hacia abajo, causando Daño Físico; Tras lanzarlo, Clic [Icono Ataque] para activar rápidamente (Ataque Básico: Forma de Empuñadura Tierra Tercera Postura); Al activar el movimiento, si es atacado por un enemigo, puede activar el efecto de bloqueo (Parry), inmunizando ese daño, y obteniendo 2 capas de efecto (Tendencia Celestial).  Al lanzar, si posee (  Intención de Espada), realizará un ataque de caída de gran alcance hacia abajo, causando gran cantidad de Daño Físico; Al golpear a un enemigo, consumirá 1 punto de (Intención de Espada), y obtendrá 2 capas de efecto (Tendencia Celestial), al mismo tiempo consumirá todo el efecto (Tendencia Celestial), aumentando el daño del movimiento, el valor de aumento específico crece con el nivel de la habilidad (Pasiva Principal).",
        tags: ["Físico", "Ataque Básico"],
      },
      {
        type: "Evasión",
        name: "Evasión",
        description: "Clic [Icono Dodges] para activar: (Evasión rápida de carrera); Posee efecto de invencibilidad durante la activación; Bajo (Forma de Empuñadura), si se activa una evasión perfecta, Clic [Icono Ataque] para activar rápidamente (Ataque Básico: Forma de Empuñadura Tierra Definitiva).",
        tags: ["Físico", "Evasión"],
      },
      {
        type: "Evasión",
        name: "Ataque de Carrera",
        description: "Al usar (Evasión), Clic [Icono Ataque] para activar: Causa Daño Físico.",
        tags: ["Físico", "Ataque de Carrera", "Evasión"],
      },
      {
        type: "Evasión",
        name: "Ataque de Carrera: Corte de Retirada",
        description: "Bajo (Forma de Empuñadura), sin mover el joystick/palanca Clic [Icono Dodges] para activar: Lanza un rápido corte de retirada, si durante el periodo activa una (evasión perfecta), Clic [Icono Ataque] para activar rápidamente (Ataque Básico: Forma de Empuñadura Tierra Definitiva). Posee estado de invencibilidad durante la activación.",
        tags: ["Físico", "Ataque de Carrera", "Forma de Empuñadura", "Evasión"],
      },
      {
        type: "Evasión",
        name: "Contraataque de Evasión",
        description: "Tras activar (Evasión Perfecta), Clic [Icono Ataque] para activar: Causa Daño Físico; Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Evasión"],
      },
      {
        type: "Asistencia",
        name: "Asistencia Rápida",
        description: "Cuando el personaje en operación actual es lanzado por los aires, Clic [Icono Assist] para activar: Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Asistencia"],
      },
      {
        type: "Asistencia",
        name: "Asistencia Defensiva",
        description: "Cuando el personaje en el campo está a punto de ser atacado, Clic [Icono Assist] para activar: Bloquea el ataque del enemigo, acumulando gran cantidad de valor de aturdimiento; Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Asistencia"],
      },
      {
        type: "Asistencia",
        name: "Ataque de Asistencia",
        description: "Tras lanzar (Asistencia Defensiva), Clic [Icono Ataque] para activar: Causa gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Asistencia"],
      },
      {
        type: "Asistencia",
        name: "Ataque de Asistencia",
        description: "Bajo (Forma de Empuñadura), tras lanzar (Asistencia Defensiva), Clic [Icono Ataque] para activar: Causa gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Asistencia", "Forma de Empuñadura"],
      },
      {
        type: "Técnica Especial",
        name: "Técnica Especial",
        description: "Clic [Icono Especial] para activar: Si hay una espada en el campo, corre rápidamente a la espada más cercana y lanza un ataque rápido de Qi de espada al enemigo, causando Daño Físico; Si no hay espada en el campo, la activación falla; Tras una activación exitosa, puede encadenar rápidamente (Ataque Básico: Qi de Espada); Durante el movimiento, recupera la espada del campo y la convierte en (Intención de Espada).",
        tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
      },
      {
        type: "Técnica Especial",
        name: "Técnica Especial",
        description: "Mantener [Icono Especial] para activar: Si hay una espada en el campo, corre rápidamente a la espada más cercana y, tras una breve carga, inflige un corte de embestida y un ataque de Qi de espada al enemigo, causando Daño Físico; Si no hay espada en el campo, la activación falla; Tras lanzarlo, puede encadenar rápidamente la tercera etapa de (Ataque Básico); y deja 2 espadas en el campo; Durante el movimiento, recupera la espada del campo y la convierte en (Intención de Espada).",
        tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
      },
      {
        type: "Técnica Especial",
        name: "Forma de Empuñadura - Ascenso",
        description: "Bajo (Forma de Empuñadura), Clic [Icono Especial EX] para activar: Lanza rápidamente un ataque ascendente, causando Daño Físico al enemigo y entrando en estado aéreo. Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
      },
      {
        type: "Técnica Especial",
        name: "Técnica Especial EX",
        description: "Cuando la energía es suficiente, Mantener [Icono Especial EX] para activar: Si hay una espada en el campo, corre rápidamente a la espada más cercana y, tras una breve carga, inflige un corte de embestida y un ataque de Qi de espada al enemigo, causando Daño Físico; Si no hay espada en el campo, la activación falla; durante el movimiento recupera la espada del campo, convirtiéndola en (Intención de Espada); tras lanzarlo puede encadenar rápidamente la tercera etapa de (Ataque Básico), y deja 5 espadas en el campo; Tras la activación, obtiene el efecto (Tendencia Terrestre); y tras entrar en (Forma de Empuñadura), lanzar (Ataque Básico: Forma de Empuñadura Tierra Tercera Postura) se mejorará automáticamente a (Ataque Básico: Forma de Empuñadura Tierra Definitiva), durando hasta que termine la (Forma de Empuñadura).",
        tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
      },
      {
        type: "Técnica Especial EX",
        name: "Forma de Empuñadura Destello",
        description: "Bajo (Forma de Empuñadura), en el aire Mantener [Icono Especial EX] para activar: Lanza cortes rápidos y consume continua y rápidamente (Intención de Espada), hasta agotar la (Intención de Espada).",
        tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
      },
      {
        type: "Técnica Especial EX",
        name: "Forma de Empuñadura Extinción",
        description: "Tras (Técnica Especial EX: Forma de Empuñadura Destello), si la (Intención de Espada) se agota, Clic o Mantener [Icono Especial] para activar: Causa gran cantidad de Daño Físico a una amplia gama de enemigos; Tras activar el movimiento, cierra el (Velo Etéreo: ZhuXie) y sale de la (Forma de Empuñadura).",
        tags: ["Físico", "Técnica Especial", "Forma de Empuñadura"],
      },
      {
        type: "Ataque en Cadena",
        name: "Ataque en Cadena",
        description: "Al activar (Ataque en Cadena), selecciona el personaje correspondiente para activar: Lanza un poderoso corte a una amplia gama de enemigos en frente, causando gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Ataque en Cadena", "Forma de Empuñadura"],
      },
      {
        type: "Ataque en Cadena",
        name: "Forma de Empuñadura",
        description: "Bajo (Forma de Empuñadura), al activar (Ataque en Cadena), selecciona el personaje correspondiente para activar: Lanza un poderoso corte a una amplia gama de enemigos en frente, causando gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Ataque en Cadena", "Forma de Empuñadura"],
      },
      {
        type: "Técnica Definitiva",
        name: "Técnica Definitiva",
        description: "Cuando el nivel de Decibelios llega a (Máximo), Clic [Icono Definitiva] para activar: Invoca una formación de espadas, causando gran cantidad de Daño Físico a los enemigos; Tras activar el movimiento, abrirá el (Velo Etéreo: ZhuXie) entrando en (Forma de Empuñadura), y obteniendo 4 puntos de (Intención de Espada), la (Forma de Empuñadura) y el (Velo Etéreo: ZhuXie) duran 12 segundos; Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Técnica Definitiva", "Forma de Empuñadura"],
      },
      {
        type: "Técnica Definitiva",
        name: "Forma de Empuñadura",
        description: "Bajo (Forma de Empuñadura), cuando el nivel de Decibelios llega a (Máximo), Clic [Icono Definitiva] para activar: Invoca una espada gigante, causando gran cantidad de Daño Físico a los enemigos; Tras activar el movimiento, cerrará el (Velo Etéreo: ZhuXie) y saldrá de la (Forma de Empuñadura), y obtendrá 4 puntos de (Intención de Espada). Posee efecto de invencibilidad durante la activación.",
        tags: ["Físico", "Técnica Definitiva", "Forma de Empuñadura"],
      },
      {
        type: "Pasiva Central",
        name: "",
        description: "Tras lanzar (Técnica Definitiva) o (Técnica de Entrada), Ye Shunguang entrará en (Forma de Empuñadura), obteniendo 4 puntos de (Intención de Espada), y abriendo el (Velo Etéreo: ZhuXie), durando hasta 12 segundos; Estando bajo (Forma de Empuñadura), Ye Shunguang usará movimientos más poderosos, lanzar (Ataque Básico) otorgará efecto (Tendencia Celestial), lanzar (Ataque Básico: Forma de Empuñadura Tierra Tercera Postura), (Ataque Básico: Forma de Empuñadura Tierra Definitiva) y (Ataque Básico: Forma de Empuñadura Cielo Tercera Postura) consumirá todo el efecto (Tendencia Celestial), cada capa aumenta el daño de dicho movimiento en un 20%, acumulándose hasta 4 capas, dura hasta que termine la (Forma de Empuñadura); Durante la existencia de (Velo Etéreo: ZhuXie), se aplicará Vulnerabilidad de Aturdimiento a los enemigos, el daño de Aturdimiento falla; si el enemigo no está en estado de Aturdimiento, el multiplicador de vulnerabilidad es el mismo que el multiplicador inicial de vulnerabilidad de Aturdimiento del enemigo, si el enemigo está en estado de Aturdimiento, el multiplicador de vulnerabilidad es el mismo que el multiplicador de vulnerabilidad de Aturdimiento del enemigo, el multiplicador de vulnerabilidad no puede exceder el 80%; Bajo (Forma de Empuñadura), la eficiencia de purificación contra (Escudos) aumenta un 50%.",
        tags: ["Pasiva Central"],
      },
      {
        type: "Habilidad Adicional",
        name: "",
        description: "Se activa cuando hay personajes de (Soporte) o (Defensa) en el equipo: Después de que un compañero active cualquier (Velo Etéreo) o un enemigo active un (Campo de Corrupción), Ye Shunguang obtendrá el efecto (Listo para la Acción), durando hasta que terminen todos los (Velo Etéreo) y (Campo de Corrupción), no acumulable. Cuando Ye Shunguang posee el efecto (Listo para la Acción), la próxima vez que entre al campo en combate consumirá el efecto (Listo para la Acción), y lanzará (Técnica de Entrada), abriendo (Velo Etéreo: ZhuXie) entrando en (Forma de Empuñadura) y obteniendo al mismo tiempo 4 puntos de (Intención de Espada).",
        tags: ["Habilidad Adicional"],
      },
      {
        type: "Mindscape 1",
        name: "Nombre a determinar",
        description: "En (Forma de Empuñadura), el efecto (Tendencia Celestial) no se consumirá, y el número de capas acumulables cambia a 6; al lanzar (Técnica Especial EX: Forma de Empuñadura Destello) bajo (Forma de Empuñadura), por cada 1 punto de (Intención de Espada) restante, aumenta el daño de este movimiento en un 10%.",
        tags: ["Mindscape 1"],
      },
      {
        type: "Mindscape 2",
        name: "Nombre a determinar",
        description: "El límite superior de (Intención de Espada) cambia a 6 puntos, al entrar o salir de (Forma de Empuñadura) por cualquier medio, obtiene 6 puntos de (Intención de Espada); Tras consumir valor de decibelios para lanzar (Técnica Definitiva) entrando en (Forma de Empuñadura), puede lanzar (Técnica Definitiva: Forma de Empuñadura) sin consumo, durando hasta que termine esta (Forma de Empuñadura).",
        tags: ["Mindscape 2"],
      },
      {
        type: "Mindscape 3",
        name: "Nombre a determinar",
        description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), (Ataque en Cadena) +2",
        tags: ["Mindscape 3"],
      },
      {
        type: "Mindscape 4",
        name: "Nombre a determinar",
        description: "El efecto (Tendencia Terrestre) puede acumularse máximo 3 capas, cada capa aumenta adicionalmente el daño de (Ataque Básico: Forma de Empuñadura Tierra Definitiva) en un 15%; Al entrar en combate, obtiene una capa de efecto (Tendencia Terrestre); al salir de (Forma de Empuñadura), obtiene una capa de efecto (Tendencia Terrestre).",
        tags: ["Mindscape 4"],
      },
      {
        type: "Mindscape 5",
        name: "Nombre a determinar",
        description: "Nivel de habilidad de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), (Ataque en Cadena) +2",
        tags: ["Mindscape 5"],
      },
      {
        type: "Mindscape 6",
        name: "Nombre a determinar",
        description: "Al entrar en (Forma de Empuñadura), por cada capa de efecto (Tendencia Terrestre), obtendrá una capa de efecto (Armonía); tras lanzar (Ataque Básico: Forma de Empuñadura Cielo Tercera Postura), puede hacer clic en la tecla de (Técnica Especial) para lanzar rápidamente una vez (Técnica Especial EX: Forma de Empuñadura Destello) sin consumir (Intención de Espada); al lanzar (Técnica Especial EX: Forma de Empuñadura Destello) normalmente y consumir (Intención de Espada), por cada 1 punto de (Intención de Espada) consumido, aumenta el multiplicador de daño de (Técnica Especial EX: Forma de Empuñadura Extinción) en un 10%, hasta un aumento máximo del 60%.",
        tags: ["Mindscape 6"],
      },
    ]
  },
  46: { // Zhao
    // 
    baseStats: {
      hp: { min: 733, max: 8985 },
      atk: { min: 110, max: 765 },
      def: { min: 56, max: 701 },
      impact: "93",
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "93",
      anomalyMastery: "96",
      penRatio: "0%",
      energyRegen: "1.2", // Regeneración nativa de Soporte S
    },
    coreStats: {
      statName: "hp%", // Core stat único para alcanzar el cap de buff
      valuePerNode: 6,
    },
  },
  // =================================================
  // VERSIÓN 2.4 (Krampus Compliance Authority)
  // =================================================
  45: { // Banyue
    // 
    baseStats: {
      hp: { min: 683, max: 8497 },
      atk: { min: 124, max: 859 },
      def: { min: 36, max: 445 },
      impact: "95",
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "93",
      anomalyMastery: "96",
      penRatio: "0%",
      energyRegen: "1.2", // Regeneración nativa de Soporte S
      sheerForce: { min: 105, max: 1107 },
    },
    coreStats: {
      statName: "Core Prob. Crítica", // Core stat único para alcanzar el cap de buff
      valuePerNode: 4.8,
    },
  },
  44: { // Banyue
    // 
    baseStats: {
      hp: { min: 663, max: 8250 },
      atk: { min: 109, max: 758 },
      def: { min: 49, max: 612 },
      impact: "110",
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "94",
      anomalyMastery: "93",
      penRatio: "0%",
      energyRegen: "1.2", // Regeneración nativa de Soporte S
    },
    coreStats: {
      statName: "Core Prob. Crítica", // Core stat único para alcanzar el cap de buff
      valuePerNode: 4.8,
    },
  },
  // =================================================
  // VERSIÓN 2.3 (Spook Shack - Finale)
  // =================================================
  43: { // Yidhari Murphy (S - Hielo/Ruptura)
    baseStats: {
      hp: { min: 683, max: 8497 },
      atk: { min: 124, max: 859 },
      def: { min: 36, max: 448 },
      impact: "95",
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "87",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.2",
      sheerForce: { min: 105, max: 1107 },
    },
    coreStats: {
      statName: "Core Prob. Crítica",
      valuePerNode: 4.8,
    },
    coreSkillScaling: ["50%", "58%", "66%", "74%", "82%", "90%", "100%"],
    // --- AQUI ESTÁ LA CLAVE: EL ARRAY SKILLS ---
    skills: [
      {
        type: "Ataque Básico",
        name: "Golpe Aplastante",
        description: "Presiona [Icono Ataque] para activar: Desata hasta 3 golpes, infligiendo Daño Glacial. En el 3er golpe, Yidhari recupera un 10% de PV.",
        tags: ["Hielo", "Físico"]
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
        tgas: "Hielo",
      },
      {
        type: "Evasión",
        name: "Cambio Onírico",
        description: "Presiona [Icono Dodges] para activar: Una (evasión rápida). El personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Esquiva", "Congelación"]
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
        tags: ["Asistencia"]
      },
      {
        type: "Asistencia Defensiva",
        name: "Rechazo de Terremoto Relámpago",
        description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Realiza un parry al ataque del enemigo, infligiendo Aturdimiento masivo. El personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Asistencia"]
      },
      {
        type: "Ataque de Asistencia",
        name: "Asalto Glacial",
        description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Ejecuta un ataque de martillo de fragmentos de hielo contra los enemigos en frente, infligiendo Daño Glacial. El personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Asistencia"]
      },
      {
        type: "Técnica Especial",
        name: "Cese de Pensamientos",
        description: "Presiona [Icono Especial] para activar: Lanza a los enemigos frente a ella por el aire, infligiendo Daño Glacial. El nivel de Anti-interrupción aumenta mientras se usa esta habilidad.",
        tags: ["AoE", "Interrupción"]
      },
      {
        type: "Técnica Especial EX",
        name: "Espiral de Escarcha",
        description: "Con suficiente Adrenalina, presiona [Icono Especial] para activar: Realiza dos golpes ascendentes consecutivos, luego libera una niebla helada, infligiendo daño masivo de Daño Glacial. Si la (Técnica Especial EX: Espiral de Escarcha) golpea a un enemigo, Yidhari recupera PV al final de la habilidad equivalente al 33% de sus PV faltantes. El personaje es invulnerable mientras usa esta habilidad.",
        tags: ["AoE", "Interrupción"]
      },
      {
        type: "Técnica Especial",
        name: "Frío Creciente, Persecución Aplastante",
        description: "Presiona [Icono Especial] o [Icono Especial EX] mientras cargas o giras durante el (Ataque Básico: Abrazo de Escarcha) o presiona [Icono Dodges] mientras mantienes [Icono Ataque] para activar: Lanza a los enemigos frente a ella por el aire, infligiendo Daño Glacial. Cuando el ataque de la habilidad choca con el ataque de un enemigo, activa (Frío Creciente). Si la habilidad golpea a un enemigo Aturdido, y con suficiente Adrenalina, activa (Persecución Aplastante). Activar (Frío Creciente) o (Persecución Aplastante) eleva instantáneamente el nivel de carga al máximo. Durante esta habilidad, presiona [Icono Ataque] y Yidhari desatará inmediatamente el golpe final del (Ataque Básico: Abrazo de Escarcha) basado en el nivel de carga actual. El nivel de Anti-interrupción aumenta mientras se usa esta habilidad.",
        tags: ["AoE", "Interrupción"]
      },
      {
        type: "Técnica Especial EX",
        name: "Aplastamiento Glacial",
        description: "Al activar (Frío Creciente) o (Persecución Aplastante), y con suficiente Adrenalina, presiona [Icono Especial EX] o [Icono Ataque] para activar: Se lanza hacia adelante con un ataque ascendente, luego salta en el aire antes de propinar un poderoso golpe descendente, infligiendo daño masivo de Daño Glacial. Si la (Técnica Especial EX: Aplastamiento Glacial) golpea a un enemigo, Yidhari se cura al final de la habilidad un 33% de sus PV faltantes. Si la habilidad se usa después de (Frío Creciente), otorga 15 de Adrenalina adicional. Este efecto puede activarse una vez cada 1s. Después de usar esta habilidad, presiona [Icono Ataque] para desatar inmediatamente el golpe final del (Ataque Básico: Abrazo de Escarcha) basado en el nivel de carga actual. El personaje es invulnerable mientras usa esta habilidad.",
        tags: ["AoE", "Interrupción"]
      },
      {
        type: "Ataque en Cadena",
        name: "Juramento Helado",
        description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un golpe poderoso contra los enemigos en un área pequeña frente a ella, infligiendo daño masivo de Daño Glacial. Si está dentro de (Velo Etéreo: Manantial), los tentáculos se unen al asalto, mejorando aún más el poder de la habilidad. El personaje es invulnerable mientras usa esta habilidad.",
        tags: ["Cadena", "Campo"]
      },
      {
        type: "Ataque en Cadena",
        name: "Velo Etéreo: Manantial",
        description: "Cuando la Puntuación de Decibelios está al Máximo, el golpe final del (Ataque Básico: Abrazo de Escarcha), (Técnica Especial EX: Espiral de Escarcha), (Técnica Especial EX: Aplastamiento Glacial) y (Ataque en Cadena: Juramento Helado) consumirá 3,000 Decibelios para activar un (Velo Etéreo: Manantial). Mientras (Velo Etéreo: Manantial) está activo, los PV Máx. de todos los miembros del escuadrón aumentan un 5% durante 30s. Las activaciones repetidas extienden la duración, hasta un máximo de 300s. Mientras Yidhari está dentro de (Velo Etéreo: Manantial), la velocidad de carga del (Ataque Básico: Abrazo de Escarcha aumenta) y los PV se consumen más rápido durante la carga.",
        tags: ["Cadena", "Velo Etéreo"]
      },
      {
        type: "Técnica Definitiva",
        name: "Acto Final - Cruzando el Río del Arrepentimiento",
        description: "Después de que Yidhari gaste Decibelios para activar (Velo Etéreo: Manantial), presiona [Icono Definitiva] dentro de los siguientes 30s para activar: Asesta un golpe poderoso a los enemigos en un área grande frente a ella, infligiendo daño masivo de Daño Glacial. El personaje es invulnerable mientras usa esta habilidad. Cada vez que Yidhari gasta Decibelios para activar un (Velo Etéreo: Manantial), puede usar la (Técnica Definitiva: Acto Final - Cruzando el Río del Arrepentimiento) una vez.",
        tags: ["Ultimate", "Campo"]
      },
      {
        type: "Pasiva Central",
        name: "Colección de Paisajes Oníricos",
        description: "Yidhari gana Fuerza Pura (Sheer Force) adicional basada en sus PV Máx., donde cada 1 punto de PV Máx. aumenta la Fuerza Pura en 0.1. Todo el Daño Glacial infligido por Yidhari se inflige como Daño Puro, ignorando la DEF del enemigo y usando su estadística de Fuerza Pura como Multiplicador de Daño. Cuando Yidhari entra en combate, gana inmediatamente 60 de Adrenalina. En el modo Zona de Investigación, este efecto puede activarse una vez cada 180s. El Daño de habilidad de Yidhari aumenta a medida que disminuye su porcentaje de PV actuales. Cuando sus PV caen por debajo del 50%, el buff alcanza su valor máximo, aumentando su Daño hasta un {VALOR}. Una vez que sus PV se restauran al 50%, la bonificación máxima permanece durante 5s más. Yidhari gana menos Decibelios al asestar habilidades. En su lugar, gana Decibelios a medida que sus PV disminuyen; cada 1% de PV perdido otorga 10 Decibelios",
        tags: ["Pasiva", "Buff"]
      },
      {
        type: "Habilidad Adicional",
        name: "Narrativa Completa",
        description: "Se activa cuando hay otro personaje en tu escuadrón que es (Aturdidor) o (Soporte): Cuando los PV de Yidhari caen por debajo del 50%, el Daño Crítico aumenta un 30% y el daño recibido se reduce un 25%. Mientras Yidhari está dentro de (Velo Etéreo: Manantial), obtiene el siguiente efecto adicional: Tras el ataque cargado de nivel 3 del (Ataque Básico: Abrazo de Escarcha) o la (Técnica Especial EX: Aplastamiento Glacial), se invoca un tentáculo helado para atacar, infligiendo daño extra. Este efecto puede activarse una vez cada 12s. La habilidad anterior se considera una (Técnica Especial EX), el multiplicador de Daño aumenta según el nivel de la (Técnica Especial EX).",
        tags: ["Adicional", "Pasiva", "Buff"]
      },
      {
        type: "Mindscape 1",
        name: "El Pasado Perdido bajo el Abismo",
        description: "El coste de Adrenalina para activar la (Técnica Especial EX) de Yidhari se reduce en 10. Tras usar (Técnica Especial EX: Espiral de Escarcha) o (Técnica Especial EX: Aplastamiento Glacial), mantener presionado el botón de (Ataque Básico) o (Técnica Especial) consume 35 de Adrenalina para renunciar a la curación e inmediatamente encadenar otra (Técnica Especial EX: Aplastamiento Glacial). Los PV restaurados por esta (Técnica Especial EX: Aplastamiento Glacial), aumentan en un 100% del valor original. Los (Ataques Básicos) y (Técnicas Especiales EX) de Yidhari ignoran un 20% de la RES a Glacial del objetivo.",
        type: ["Mindscape", "Dupe",]
      },
      {
        type: "Mindscape 2",
        name: "¿Quién Mora Aquí, Perdido en sus Pensamientos?",
        description: "El Daño Crítico de Yidhari aumenta en un 40%. Activar (Frío Creciente) o (Persecución Aplastante) otorga una regeneración de Adrenalina de 0.5/s durante hasta 30s. Las activaciones repetidas reinician la duración.",
        type: ["Mindscape", "Dupe",]
      },
      {
        type: "Mindscape 3",
        name: "Una Historia Sin Audiencia",
        description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2.",
        type: ["Mindscape", "Dupe",]
      },
      {
        type: "Mindscape 4",
        name: "Floreciendo en Silencio",
        description: "Yidhari gana un 10% más de Decibelios al perder PV por la (Pasiva Principal: Colección de Paisajes Oníricos). Mientras está en (Velo Etéreo: Manantial), los PV Máx. de Yidhari aumentan adicionalmente un 5%.",
        type: ["Mindscape", "Dupe",]
      },
      {
        type: "Mindscape 5",
        name: "Este Consuelo Es Real",
        description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2.",
        type: ["Mindscape", "Dupe",]
      },
      {
        type: "Mindscape 6",
        name: "Al Fin, un Sueño Pacífico",
        description: "Después de que Yidhari gaste Decibelios para activar o extender (Velo Etéreo: Manantial), gana (Erudición) durante 30s. Mientras (Erudición) está activa, su Daño Puro (Sheer DMG) aumenta un 25%. Además, al recibir daño fatal por primera vez, sus PV se reducen como máximo a 1, y durante los siguientes 5s, no puede ser derrotada y restaurará un 25% de sus PV con el tiempo.",
        type: ["Mindscape", "Dupe",]
      }
    ]
  },

  42: { // Lucia Elowen (S - Etereo/Soporte)
    // Info Real: Escala buffs basados en su HP Máxima (Meta de 24k HP según leaks)
    baseStats: {
      hp: { min: 681, max: 8477 }, // HP Base más alto del juego (superando a Caesar)
      atk: { min: 109, max: 758 },
      def: { min: 48, max: 594 },
      impact: "83",
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "96",
      anomalyMastery: "95",
      penRatio: "0%",
      energyRegen: "1.2", // Regeneración nativa de Soporte S
    },
    coreStats: {
      statName: "energía", // Core stat único para alcanzar el cap de buff
      valuePerNode: 0.12,
    },
  },
  41: { // Komano Manato (A - Fuego/Ruptura)
    baseStats: {
      hp: { min: 621, max: 7724 },
      atk: { min: 109, max: 755 },
      def: { min: 36, max: 443 },
      impact: "95",
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "87",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.2",
      sheerForce: { min: 94, max: 999 },
    },
    coreStats: {
      statName: "Atk %",
      valuePerNode: 4.0,
    },
  },

  // =================================================
  // VERSIÓN 2.2 (Obol Squad Expansion)
  // =================================================
  40: { // Orphie & Magus (S - Fuego/Ataque)
    baseStats: {
      hp: { min: 605, max: 7640 },
      atk: { min: 162, max: 1095 }, // Powercreep: ATK base altísimo
      def: { min: 49, max: 612 },
      impact: 92,
      crit: "9.6%", // Base Crit ligeramente elevada
      critDmg: "50%",
      anomalyRate: "91",
      anomalyMastery: "91",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Rate",
      valuePerNode: 4.8,
    },
  },
  39: { // Seed (S - Electrico/Ataque)
    baseStats: {
      hp: { min: 598, max: 7520 },
      atk: { min: 155, max: 1030 },
      def: { min: 47, max: 595 },
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "94",
      anomalyMastery: "92",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Dmg",
      valuePerNode: 9.6,
    },
  },

  // =================================================
  // VERSIÓN 2.1 (Spook Shack Intro)
  // =================================================
  38: { // Alice (S - Fisico/Anomalia)
    baseStats: {
      hp: { min: 625, max: 7880 },
      atk: { min: 142, max: 950 },
      def: { min: 53, max: 660 },
      impact: 95,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "124", // Especialista en Anomalía
      anomalyMastery: "118",
      penRatio: "0%",
      energyRegen: "1.4",
    },
    coreStats: {
      statName: "Anomaly Proficiency",
      valuePerNode: 18,
    },
  },
  37: { // Ukinami Yuzuha (S - Fisico/Soporte)
    baseStats: {
      hp: { min: 610, max: 7550 },
      atk: { min: 128, max: 865 },
      def: { min: 50, max: 625 },
      impact: 88,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "105",
      anomalyMastery: "110",
      penRatio: "0%",
      energyRegen: "2.4",
    },
    coreStats: {
      statName: "Energy Regen",
      valuePerNode: 0.2,
    },
  },

  // =================================================
  // VERSIÓN 2.0 (Yunkui Summit)
  // =================================================
  36: { // JuFuFu (S - Fuego/Aturdidor)
    baseStats: {
      hp: { min: 665, max: 8250 },
      atk: { min: 135, max: 880 },
      def: { min: 58, max: 710 },
      impact: 120, // Nuevo estándar de Impacto S
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "95",
      anomalyMastery: "95",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Impact",
      valuePerNode: 6.0,
    },
  },
  35: { // Yixuan (S - Etereo/Ruptura)
    baseStats: {
      hp: { min: 630, max: 7800 },
      atk: { min: 150, max: 990 },
      def: { min: 51, max: 635 },
      impact: 108,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "98",
      anomalyMastery: "98",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Pen Ratio",
      valuePerNode: 4.8,
    },
  },
  34: { // Pan Yinhu (A - Fisico/Defensa)
    baseStats: {
      hp: { min: 720, max: 8950 },
      atk: { min: 108, max: 700 },
      def: { min: 78, max: 910 },
      impact: 102,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "88",
      anomalyMastery: "85",
      penRatio: "0%",
      energyRegen: "1.0",
    },
    coreStats: {
      statName: "Def %",
      valuePerNode: 7.5,
    },
  },

  // =================================================
  // VERSIÓN 1.7 (Mookingbird)
  // =================================================
  33: { // Hugo Vlad (S - Hielo/Ataque)
    // Datos exactos datamineados
    baseStats: {
      hp: { min: 638, max: 7941 }, // Dato exacto
      atk: { min: 132, max: 844 }, // Dato exacto (curiosamente bajo para Atk puro, compensa con multiplicadores altos)
      def: { min: 50, max: 616 },
      impact: 95,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "86",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Rate", // Necesario según builds de usuarios beta
      valuePerNode: 4.8,
    },
  },
  32: { // Vivian Banshee (S - Etereo/Anomalia)
    baseStats: {
      hp: { min: 618, max: 7780 },
      atk: { min: 142, max: 935 },
      def: { min: 52, max: 648 },
      impact: 94,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "120",
      anomalyMastery: "116",
      penRatio: "0%",
      energyRegen: "1.5",
    },
    coreStats: {
      statName: "Anomaly Proficiency",
      valuePerNode: 18,
    },
  },

  // =================================================
  // VERSIÓN 1.6 (Silver Squad / Obol)
  // =================================================
  31: { // Trigger (S - Electrico/Aturdidor)
    // Info Real: Convierte Crit Rate en Eficiencia de Aturdimiento
    baseStats: {
      hp: { min: 650, max: 8120 },
      atk: { min: 138, max: 910 },
      def: { min: 55, max: 685 },
      impact: 115,
      crit: "19.4%", // Crit base ALTO necesario para su pasiva de conversión
      critDmg: "50%",
      anomalyRate: "96",
      anomalyMastery: "96",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Rate", // Único Aturdidor que sube Crítico por Core
      valuePerNode: 4.8,
    },
  },
  30: { // Soldier 0 - Anby (S - Electrico/Ataque)
    baseStats: {
      hp: { min: 612, max: 7700 },
      atk: { min: 154, max: 1010 },
      def: { min: 49, max: 620 },
      impact: 98,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "95",
      anomalyMastery: "94",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Dmg",
      valuePerNode: 9.6,
    },
  },
  29: { // Pulchra (A - Fisico/Aturdidor)
    baseStats: {
      hp: { min: 580, max: 7150 },
      atk: { min: 122, max: 800 },
      def: { min: 46, max: 585 },
      impact: 110,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "90",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Impact",
      valuePerNode: 4.0,
    },
  },

  // =================================================
  // VERSIÓN 1.5 (Hollow Zero)
  // =================================================
  27: { // Astra Yao (S - Etereo/Soporte)
    // Info Real: "Aria Sublime" y multiplicadores de daño altos
    baseStats: {
      hp: { min: 605, max: 7480 },
      atk: { min: 135, max: 895 },
      def: { min: 48, max: 605 },
      impact: 88,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "105",
      anomalyMastery: "110",
      penRatio: "0%",
      energyRegen: "2.6", // Muy alta regen
    },
    coreStats: {
      statName: "Atk %",
      valuePerNode: 4.8,
    },
  },
  28: { // Evelyn (S - Fuego/Ataque)
    baseStats: {
      hp: { min: 608, max: 7620 },
      atk: { min: 155, max: 1025 },
      def: { min: 50, max: 625 },
      impact: 92,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "92",
      anomalyMastery: "92",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Rate",
      valuePerNode: 4.8,
    },
  },

  // =================================================
  // VERSIÓN 1.4 (Section 6)
  // =================================================
  26: { // Miyabi (S - Hielo/Anomalia)
    // Info Real: Builds recomendadas usan Proficiencia/Crit
    baseStats: {
      hp: { min: 620, max: 7850 },
      atk: { min: 160, max: 1080 }, // Top tier ofensivo
      def: { min: 51, max: 635 },
      impact: 95,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "116",
      anomalyMastery: "115",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Dmg", // Híbrido crit/anomalia
      valuePerNode: 9.6,
    },
  },
  25: { // Harumasa (S - Electrico/Ataque)
    // Info Real: Stats filtrados confirmando Crit Rate base normal
    // Corrección: Usuarios reportan builds de crit rate alto, pero base es 5% estándar.
    baseStats: {
      hp: { min: 595, max: 7450 },
      atk: { min: 148, max: 990 },
      def: { min: 48, max: 610 },
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "95",
      anomalyMastery: "95",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Rate",
      valuePerNode: 4.8,
    },
  },

  // =================================================
  // VERSIÓN 1.3 (Virtual Revenge)
  // =================================================
  23: { // Yanagi (S - Electrico/Anomalia)
    // Datos reales
    baseStats: {
      hp: { min: 618, max: 7820 },
      atk: { min: 136, max: 892 },
      def: { min: 51, max: 635 },
      impact: 92,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "118",
      anomalyMastery: "116",
      penRatio: "0%",
      energyRegen: "1.5",
    },
    coreStats: {
      statName: "Anomaly Proficiency",
      valuePerNode: 18,
    },
  },
  24: { // Lighter (S - Fuego/Aturdidor)
    // Datos reales
    baseStats: {
      hp: { min: 645, max: 8100 },
      atk: { min: 130, max: 845 },
      def: { min: 54, max: 670 },
      impact: 112,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "94",
      anomalyMastery: "94",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Impact",
      valuePerNode: 6.0,
    },
  },

  // =================================================
  // VERSIÓN 1.2 (Tour de Inferno)
  // =================================================
  22: { // Burnice (S - Fuego/Anomalia)
    // Datos reales
    baseStats: {
      hp: { min: 612, max: 7780 },
      atk: { min: 140, max: 920 },
      def: { min: 50, max: 625 },
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "120",
      anomalyMastery: "114",
      penRatio: "0%",
      energyRegen: "1.4",
    },
    coreStats: {
      statName: "Atk %",
      valuePerNode: 4.8,
    },
  },
  21: { // Caesar (S - Fisico/Defensa)
    // Datos exactos
    baseStats: {
      hp: { min: 766, max: 9526 }, // HP Masivo real
      atk: { min: 101, max: 712 }, // ATK base Lv60 = 712
      def: { min: 61, max: 753 },
      impact: 105,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "87",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Impact",
      valuePerNode: 6.0,
    },
  },

  // =================================================
  // VERSIÓN 1.1 (Undercover R&B)
  // =================================================
  10: { // Jane Doe (S - Fisico/Anomalia)
    // Datos exactos
    baseStats: {
      hp: { min: 610, max: 7685 },
      atk: { min: 145, max: 945 },
      def: { min: 50, max: 618 },
      impact: 95,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "125",
      anomalyMastery: "120",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Anomaly Proficiency",
      valuePerNode: 18,
    },
  },
  9: { // Qingyi (S - Electrico/Aturdidor)
    baseStats: {
      hp: { min: 630, max: 7950 },
      atk: { min: 128, max: 835 },
      def: { min: 53, max: 660 },
      impact: 110,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "96",
      anomalyMastery: "96",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Impact",
      valuePerNode: 6.0,
    },
  },
  20: { // Seth (A - Electrico/Defensa)
    baseStats: {
      hp: { min: 680, max: 8600 },
      atk: { min: 105, max: 685 },
      def: { min: 70, max: 850 },
      impact: 98,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "105",
      anomalyMastery: "105",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Atk %",
      valuePerNode: 4.0,
    },
  },

  // =================================================
  // VERSIÓN 1.0 (Limitados)
  // =================================================
  2: { // Zhu Yuan (S - Etereo/Ataque)
    // Datos exactos
    baseStats: {
      hp: { min: 602, max: 7482 },
      atk: { min: 132, max: 919 }, // Max ATK exacto 919
      def: { min: 48, max: 600 },
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "93",
      anomalyMastery: "92",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Dmg",
      valuePerNode: 9.6,
    },
  },
  1: { // Ellen (S - Hielo/Ataque)
    // Datos exactos de Hakush.in
    baseStats: {
      hp: { min: 608, max: 7673 }, // Max HP exacto 7673
      atk: { min: 142, max: 863 }, // Max ATK exacto 863
      def: { min: 49, max: 606 },  // Max DEF exacto 606
      impact: 93, // Impacto base 93
      crit: "19.4%", // Ellen tiene Crit Rate base elevado
      critDmg: "50%",
      anomalyRate: "90",
      anomalyMastery: "94",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Rate",
      valuePerNode: 4.8,
    },
  },

  // =================================================
  // VERSIÓN 1.0 (Estándar S)
  // =================================================
  3: { // Lycaon (S - Hielo/Aturdidor)
    baseStats: {
      hp: { min: 640, max: 7880 },
      atk: { min: 125, max: 825 },
      def: { min: 52, max: 650 },
      impact: 110,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "94",
      anomalyMastery: "94",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Impact",
      valuePerNode: 6.0,
    },
  },
  5: { // Soldier 11 (S - Fuego/Ataque)
    baseStats: {
      hp: { min: 600, max: 7450 },
      atk: { min: 140, max: 940 },
      def: { min: 50, max: 620 },
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "92",
      anomalyMastery: "92",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Atk %",
      valuePerNode: 4.8,
    },
  },
  4: { // Koleda (S - Fuego/Aturdidor)
    baseStats: {
      hp: { min: 650, max: 8100 },
      atk: { min: 120, max: 790 },
      def: { min: 55, max: 680 },
      impact: 112,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "93",
      anomalyMastery: "93",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Impact",
      valuePerNode: 6.0,
    },
  },
  6: { // Rina (S - Electrico/Soporte)
    baseStats: {
      hp: { min: 580, max: 7200 },
      atk: { min: 115, max: 760 },
      def: { min: 45, max: 580 },
      impact: 85,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "105",
      anomalyMastery: "110",
      penRatio: "0%",
      energyRegen: "2.4",
    },
    coreStats: {
      statName: "Pen Ratio",
      valuePerNode: 4.8,
    },
  },
  7: { // Grace (S - Electrico/Anomalia)
    baseStats: {
      hp: { min: 600, max: 7500 },
      atk: { min: 130, max: 880 },
      def: { min: 48, max: 600 },
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "115",
      anomalyMastery: "115",
      penRatio: "0%",
      energyRegen: "1.4",
    },
    coreStats: {
      statName: "Anomaly Proficiency",
      valuePerNode: 18,
    },
  },
  8: { // Nekomata (S - Fisico/Ataque)
    baseStats: {
      hp: { min: 590, max: 7300 },
      atk: { min: 142, max: 955 },
      def: { min: 47, max: 590 },
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "91",
      anomalyMastery: "91",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Dmg",
      valuePerNode: 9.6,
    },
  },

  // =================================================
  // VERSIÓN 1.0 (Estándar A - Selección)
  // =================================================
  18: { // Lucy (A - Fuego/Soporte)
    baseStats: {
      hp: { min: 550, max: 6900 },
      atk: { min: 110, max: 720 },
      def: { min: 44, max: 550 },
      impact: 85,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "90",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.8",
    },
    coreStats: {
      statName: "Atk %",
      valuePerNode: 4.0,
    },
  },
  19: { // Piper (A - Fisico/Anomalia)
    baseStats: {
      hp: { min: 570, max: 7150 },
      atk: { min: 125, max: 810 },
      def: { min: 46, max: 580 },
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "110",
      anomalyMastery: "108",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Anomaly Proficiency",
      valuePerNode: 15,
    },
  },
  15: { // Soukaku (A - Hielo/Soporte)
    baseStats: {
      hp: { min: 580, max: 7200 },
      atk: { min: 120, max: 780 },
      def: { min: 55, max: 680 },
      impact: 95,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "90",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.6",
    },
    coreStats: {
      statName: "Atk %",
      valuePerNode: 4.0,
    },
  },
  12: { // Nicole (A - Etereo/Soporte)
    baseStats: {
      hp: { min: 560, max: 7000 },
      atk: { min: 115, max: 740 },
      def: { min: 45, max: 560 },
      impact: 85,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "100",
      anomalyMastery: "100",
      penRatio: "0%",
      energyRegen: "2.0",
    },
    coreStats: {
      statName: "Energy Regen",
      valuePerNode: 0.16,
    },
  },
  11: { // Anby (A - Electrico/Aturdidor)
    baseStats: {
      hp: { min: 590, max: 7300 },
      atk: { min: 118, max: 760 },
      def: { min: 48, max: 600 },
      impact: 105,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "90",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Impact",
      valuePerNode: 4.0,
    },
  },
  13: { // Billy (A - Fisico/Ataque)
    baseStats: {
      hp: { min: 550, max: 6800 },
      atk: { min: 122, max: 790 },
      def: { min: 42, max: 540 },
      impact: 88,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "90",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Rate",
      valuePerNode: 4.0,
    },
  },
  14: { // Corin (A - Fisico/Ataque)
    baseStats: {
      hp: { min: 570, max: 7100 },
      atk: { min: 125, max: 815 },
      def: { min: 46, max: 580 },
      impact: 90,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "90",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.2",
    },
    coreStats: {
      statName: "Crit Dmg",
      valuePerNode: 8.0,
    },
  },
  16: { // Ben (A - Fuego/Defensa)
    baseStats: {
      hp: { min: 680, max: 8500 },
      atk: { min: 100, max: 650 },
      def: { min: 70, max: 850 },
      impact: 100,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "85",
      anomalyMastery: "85",
      penRatio: "0%",
      energyRegen: "1.0",
    },
    coreStats: {
      statName: "Def %",
      valuePerNode: 6.0,
    },
  },
  17: { // Anton (A - Electrico/Ataque)
    baseStats: {
      hp: { min: 600, max: 7400 },
      atk: { min: 120, max: 780 },
      def: { min: 50, max: 620 },
      impact: 92,
      crit: "5%",
      critDmg: "50%",
      anomalyRate: "90",
      anomalyMastery: "90",
      penRatio: "0%",
      energyRegen: "1.0",
    },
    coreStats: {
      statName: "Atk %",
      valuePerNode: 4.0,
    },
  }
};
