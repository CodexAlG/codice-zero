// Agent 33 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 638,
      max: 7940
    },
    atk: {
      min: 132,
      max: 919
    },
    def: {
      min: 50,
      max: 616
    },
    impact: 95,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "86",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  coreSkillScaling: [
    ["25", "75", "500%", "140%", "50%", "1,700%"],
    ["50", "150", "583%", "163%", "58%", "1,978%"],
    ["80", "240", "667%", "187%", "67%", "2,272%"],
    ["120", "360", "750%", "210%", "75%", "2,550%"],
    ["180", "540", "833%", "233%", "83%", "2,828%"],
    ["270", "810", "917%", "257%", "92%", "3,122%"],
    ["300", "900", "1,000%", "280%", "100%", "3,400%"]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Cuarteto del Abismo Oscuro",
      description: "Presiona [Icono Ataque] para activar: Realiza hasta cuatro ataques hacia adelante, causando Daño Fisico y Daño Hielo. El cuarto ataque es un disparo. Durante este ataque, mantén [Icono Ataque] para cargar y realizar un disparo cargado. El nivel de Anti-Interrupción aumenta durante el cuarto ataque, y el Daño recibido se reduce un 40%.",
      tags: ["Físico", "Hielo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Concierto del Abismo Oscuro",
      description: "Después del 4to golpe de (Ataque Basico: Cuarteto del Abismo Oscuro), el disparo de (Contraataque de Evasion: Fantasma - Corte), o el disparo de (Asistencia Rapida: Elegia), presiona o mantén [Icono Ataque] para activar: Arroja la guadaña hacia adelante para realizar un corte, seguido de un disparo, causando Daño Hielo. Durante el disparo, mantén [Icono Ataque] para cargar y realizar un disparo cargado. Durante esta habilidad, el nivel de Anti-Interrupción aumenta, y el Daño recibido se reduce un 40%.",
      tags: ["Hielo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Fantasma",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Fantasma - Destrozar",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza un ataque de carrera a los enemigos en frente, causando Daño Fisico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Fantasma - Corte",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Realiza una serie de ataques a los enemigos en frente, causando Daño Hielo. Durante la habilidad, mantén [Icono Ataque] para lanzar un disparo. Durante el disparo, mantén [Icono Ataque] para cargar y realizar un disparo cargado. El disparo es considerado un (Ataque Basico), con su DAÑO tratado como DAÑO de (Ataque Basico). Después de que la habilidad es usada, puede ser seguida directamente con el 4to golpe de (Ataque Basico: Cuarteto del Abismo Oscuro). Durante la fase a distancia de la habilidad, el nivel de Anti-Interrupción aumenta, y el Daño recibido se reduce un 40%. Invulnerable durante los cortes y la retirada a distancia de la habilidad.",
      tags: ["Hielo", "Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Cazador de Almas - Juicio",
      description: "Presiona [Icono Especial] para activar: Gira la guadaña y luego desata un corte hacia adelante, causando Daño Hielo. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Cazador de Almas - Castigo",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Gira la guadaña para atacar y luego ejecuta un poderoso (Movimiento Final), causando masivo Daño Hielo. Esta habilidad no se cuenta como un ataque pesado. Después de que la habilidad es usada, puede ser seguida directamente con el 4to golpe de (Ataque Basico: Cuarteto del Abismo Oscuro). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Elegia",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Realiza una serie de ataques a los enemigos en frente, causando Daño Hielo. Durante la habilidad, mantén [Icono Ataque] para lanzar un disparo. Durante el disparo, mantén [Icono Ataque] para cargar y realizar un disparo cargado. El disparo es considerado un (Ataque Basico), con su DAÑO tratado como DAÑO de (Ataque Basico). Después de que la habilidad es usada, puede ser seguida directamente con el 4to golpe de (Ataque Basico: Cuarteto del Abismo Oscuro). Durante la fase a distancia de la habilidad, el nivel de Anti-Interrupción aumenta, y el Daño recibido se reduce un 40%. Invulnerable durante los cortes y la retirada a distancia de la habilidad.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: El Fin No Ha Llegado",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Reversion de As",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Corre hacia adelante y realiza dos cortes, causando Daño Hielo. Después de que la habilidad es usada, puede ser seguida directamente con el 4to golpe de (Ataque Basico: Cuarteto del Abismo Oscuro). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Veredicto Terminante",
      description: "Cuando (Ataque en Cadena: Truco del Destino) golpea a un enemigo o los ataques de Hugo Aturden a un enemigo, Hugo gana el estado (Reverberacion del Abismo Oscuro) por 6s, y activaciones repetidas reinician la duración. Durante este estado, la Probabilidad de CRIT de Hugo aumenta un 12% y el Daño CRIT aumenta un 25%. Cuando hay 1/2 personajes (Aturdidor) en tu escuadrón, el ATK de Hugo aumenta en {VALOR_1}/{VALOR_2}. Cuando el (Movimiento Final) de (Tecnica Especial EX: Cazador de Almas - Castigo) o (Definitiva: Blasfemia) golpea a un enemigo mientras está Aturdido, activa el efecto (Totalizar), aumentando el Multiplicador de DAÑO del (Movimiento Final) de la habilidad en un {VALOR_3}. Adicionalmente, el efecto (Totalizar) aumenta aún más el multiplicador de DAÑO de la habilidad basado en el tiempo de Aturdimiento restante del enemigo cuando se activa: por cada segundo restante de tiempo de Aturdimiento de la porción que es menor o igual a 5s, el multiplicador de DAÑO de la habilidad aumenta en un {VALOR_4}; por cada segundo restante de tiempo de Aturdimiento de la porción entre 5 y 15s, el multiplicador de DAÑO de la habilidad aumenta en un {VALOR_5}. El aumento total puede elevar el multiplicador de DAÑO de la habilidad por un máximo de {VALOR_6}. Después de que Hugo activa el efecto (Totalizar), el estado Aturdido del enemigo terminará inmediatamente. Basado en el tiempo de Aturdimiento restante en el momento que (Totalizar) es activado, una cierta cantidad de Aturdimiento será acumulada. Por cada segundo de tiempo de Aturdimiento restante, 5% de Aturdimiento es acumulado, hasta un máximo de Aturdimiento equivalente al 25% del Aturdimiento máximo del enemigo. Cuando (Tecnica Especial EX: Cazador de Almas - Castigo) golpea a un enemigo, si el enemigo no está Aturdido, el Aturdimiento acumulado por la habilidad aumenta un 20%.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Preludio a la Finalidad",
      description: "Cuando otro personaje en tu escuadrón es un personaje (Aturdidor) o comparte el mismo atributo: El DAÑO de (Ataque en Cadena: Truco del Destino) aumenta un 15%, con un aumento adicional del 35% contra enemigos normales. Cuando (Totalizar) es activado, el DAÑO infligido por la habilidad aumenta un 40%. (Tecnica Especial EX: Cazador de Almas - Castigo) genera 20 de Energía adicional al activar (Totalizar) en enemigos normales. El efecto de generación de Energía puede activarse una vez cada 30s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Truco del Destino",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Corre hacia adelante para realizar un corte a través de un área grande, luego lanza un disparo, causando masivo Daño Hielo. El disparo activado por esta habilidad es considerado un disparo cargado. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Blasfemia",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Arroja la guadaña en un poderoso ataque giratorio, luego lanza un (Movimiento Final), causando masivo Daño Hielo. Esta habilidad no se cuenta como un ataque pesado. Después de que la habilidad es usada, puede ser seguida directamente con el 4to golpe de (Ataque Basico: Cuarteto del Abismo Oscuro). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "Niño del Odio",
      description: "Al activar el efecto (Totalizar) en el estado (Reverberacion del Abismo Oscuro), la Probabilidad de CRIT de la habilidad aumenta en un 12% adicional, y el Daño CRIT en un 30%.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "El Niño Interior",
      description: "Cuando (Definitiva: Blasfemia) activa (Totalizar), no terminará el estado Aturdido del enemigo. Adicionalmente, cuando (Totalizar) es activado, la habilidad ignorará un 15% de la DEF del enemigo.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Fruto del Arbol Venenoso",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Teoria Dramatica",
      description: "Después de que un Disparo Cargado golpea a un enemigo, los ataques de Hugo contra ese objetivo ignorarán un 12% de la (RES a Hielo) de ese objetivo por 15s, activaciones repetidas reinician la duración.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Nirvana",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Corona de Espinas",
      description: "Todos los ataques de disparo que golpean enemigos activan el estado (Reverberacion del Abismo Oscuro), durando hasta 6s, y activaciones repetidas reinician la duración. Adicionalmente, siempre que cualquier habilidad active el efecto (Totalizar), ese DAÑO aumenta un 60% adicional. El (Movimiento Final) de (Tecnica Especial EX: Cazador de Almas - Castigo) también activa el efecto (Totalizar) al golpear a un enemigo que no está Aturdido, potenciando el multiplicador de DAÑO del (Movimiento Final) por un 1,000% fijo.",
      tags: ["Mindscape 6"]
    }
  ]
};
