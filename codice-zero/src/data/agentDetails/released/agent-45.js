// Agent 45 - Detailed Stats and Skills
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
      max: 445
    },
    impact: "95",
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "90",
    anomalyMastery: "83",
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
      name: "Datos Dimensionales Superiores: Elytron Miásmico",
      icon: "Item_Higher_Dimensional_Data_Miasmic_Elytron.webp",
    }
  },
  coreSkillScaling: [
    [
      "150",
      "18%",
      "18%"
    ],
    [
      "175",
      "21%",
      "21%"
    ],
    [
      "200",
      "24%",
      "24%"
    ],
    [
      "225",
      "27%",
      "27%"
    ],
    [
      "250",
      "30%",
      "30%"
    ],
    [
      "275",
      "33%",
      "33%"
    ],
    [
      "300",
      "36%",
      "36%"
    ]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Cumbres Imponentes",
      description: "Presiona [Icono Ataque] para activar: Lanza hasta cuatro ataques hacia adelante, causando Daño Fuego. El Nivel de Interrupción aumenta durante esta habilidad.",
      tags: [
        "Fuego",
        "Ataque Básico"
      ]
    },
    {
      type: "Ataque Básico",
      name: "Cumbre Majestuosa",
      description: "Presiona [Icono Especial] para activar: Lanza hasta cuatro ataques hacia adelante, causando Daño Fuego. El Nivel de Anti-Interrupción aumenta durante esta habilidad.",
      tags: [
        "Fuego",
        "Ataque Básico"
      ]
    },
    {
      type: "Ataque Básico",
      name: "Inmolación",
      description: "Mientras no esté en el estado (Semblante de Ira) y con al menos 120 (Fuegos Iracundos), mantén [Icono Ataque] para activar: Causa Daño Fuego a los enemigos cercanos, luego entra en el estado (Semblante de Ira).",
      tags: [
        "Fuego",
        "Ataque Básico"
      ]
    },
    {
      type: "Ataque Básico",
      name: "Inflamar",
      description: "Mientras no esté en combate y con más del 50% de Hp y menos de 120 (Fuegos Iracundos), mantén [Icono Ataque] para activar: Banyue consume Hp para recuperar (Fuegos Iracundos). Al alcanzar 120 (Fuegos Iracundos), Banyue entra inmediatamente en el estado (Semblante de Ira). Al entrar al campo de batalla, obtiene una oportunidad para usar esta habilidad. En el modo Zona de Investigación, este efecto puede activarse una vez cada 180s. El consumo de Hp reducirá como máximo los Hp de Banyue al 50% de los Hp Máx.",
      tags: [
        "Fuego",
        "Ataque Básico"
      ]
    },
    {
      type: "Ataque Básico",
      name: "Montaña Derrumbada",
      description: "Cuando Banyue está en el estado (Semblante de Ira), mantén [Icono Ataque] para consumir 120 (Fuegos Iracundos) y activar: Banyue arroja una montaña masiva al enemigo, causando masivo Daño Fuego. Después de usar este movimiento, Banyue sale del estado (Semblante de Ira). El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Ataque Básico"
      ]
    },
    {
      type: "Ataque Básico",
      name: "Picos Aplastantes",
      description: "Mientras Banyue está en el estado (Semblante de Ira) y después de realizar dos (Tecnicas Especiales EX) diferentes a través de ramas de Ataque Básico o comandos de entrada rápida, mantén [Icono Ataque] para activar: Banyue lanza sus cuentas hacia adelante para aprisionar a los enemigos, causando masivo Daño Fuego. Banyue sigue automáticamente con (Ataque Basico: Montaña Derrumbada). El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Ataque Básico"
      ]
    },
    {
      type: "Evasión",
      name: "Montaña Inmovil",
      description: "Mientras ataca, presiona [Icono Dodges] sin mover la palanca/joystick para activar: Banyue entra en una postura defensiva. Si es atacado durante este tiempo, hace parry al ataque del enemigo y acumula Aturdimiento. Si es atacado en el momento exacto en que se activa la habilidad, ocurre un Bloqueo Perfecto. El personaje es invulnerable durante un parry exitoso.",
      tags: [
        "Evasión"
      ]
    },
    {
      type: "Evasión",
      name: "Superar Cumbres",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Evasión"
      ]
    },
    {
      type: "Evasión",
      name: "Grito de Batalla",
      description: "Rota la palanca/joystick en medio círculo y presiona [Icono Dodges] para activar: Evade hacia atrás y provoca a los enemigos. Después de cualquier (Tecnica Especial EX), sigue con (Evasion: Grito de Batalla) y ejecuta rápidamente las entradas requeridas durante (Evasion: Grito de Batalla) para luego seguir con la (Tecnica Especial EX) correspondiente. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Evasión"
      ]
    },
    {
      type: "Evasión",
      name: "Evasión: Arenas Dispersas",
      description: "Durante una evasión, presiona [Icono Ataque], o durante (Evasion: Grito de Batalla), mantén [Icono Ataque] para activar: Lanza cuentas hacia adelante, causando Daño Fuego. Después de usar esta habilidad, se puede seguir con el 2do golpe de (Ataque Basico: Cumbres Imponentes) o el 2do golpe de (Ataque Basico: Cumbre Majestuosa).",
      tags: [
        "Fuego",
        "Evasión"
      ]
    },
    {
      type: "Evasión",
      name: "Evasión: Estallido de Piedra",
      description: "Después de que una (Evasion Perfecta) se active a través de (Evasion: Superar Cumbres), presiona [Icono Ataque], o después de que una (Evasion Perfecta) se active a través de (Evasion: Grito de Batalla), mantén [Icono Ataque] para activar: Lanza un ataque hacia adelante que causa Daño Fuego. Después de usar esta habilidad, se puede encadenar en el 3er golpe de (Ataque Basico: Cumbres Imponentes) o el 3er golpe de (Ataque Basico: Cumbre Majestuosa). El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Evasión"
      ]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Batolito",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Ejecuta una serie de ataques contra los enemigos en frente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Asistencia"
      ]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Bastion de Hierro",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Asistencia"
      ]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Ascenso Elevado",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Se lanza rápidamente hacia adelante y ataca, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Asistencia"
      ]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Perforar Cielos",
      description: "Después de hacer parry exitosamente a un ataque enemigo con (Evasion: Montaña Inmovil), presiona [Icono Ataque] para activar: Se lanza rápidamente hacia adelante y ataca, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Asistencia"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Temblor de Montaña",
      description: "Con suficiente Adrenalina, puede activarse de una de dos formas: Después del 1er o 2do golpe de (Ataque Basico: Cumbre Majestuosa), presiona [Icono Ataque] para activar. Durante una (Tecnica Especial EX), (Ataque Basico: Inmolacion), (Ataque en Cadena), (Tecnica Definitiva), (Ataque de Asistencia), (Contraataque de Evasion) o (Asistencia Rapida), ingresa rápidamente [Icono Especial EX] [Icono Especial EX] [Icono Ataque] en secuencia para activar: Banyue lanza una montaña, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Sacudidor de Tierra",
      description: "Con suficiente Adrenalina, puede activarse de una de tres formas: Después del 3er o 4to golpe de (Ataque Basico: Cumbres Imponentes), presiona [Icono Especial EX] para activar. Después de un (Ataque de Asistencia), (Contraataque de Evasion) o (Asistencia Rapida), mantén [Icono Especial EX] para activar. Durante una (Tecnica Especial EX), (Ataque Basico: Inmolacion), (Ataque en Cadena), (Tecnica Definitiva), (Ataque de Asistencia), (Contraataque de Evasion) o (Asistencia Rapida), ingresa rápidamente [Icono Ataque] [Icono Especial EX] [Icono Ataque] en secuencia para activar: Banyue golpea el suelo repetidamente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Rugido de Leon",
      description: "Con suficiente Adrenalina, puede activarse de una de dos formas: Después del 1er o 2do golpe de (Ataque Basico: Cumbres Imponentes), presiona [Icono Especial EX] para activar. Durante una (Tecnica Especial EX), (Ataque Basico: Inmolacion), (Ataque en Cadena), (Tecnica Definitiva), (Ataque de Asistencia), (Contraataque de Evasion) o (Asistencia Rapida), ingresa rápidamente [Icono Ataque] [Icono Ataque] [Icono Especial EX] en secuencia para activar: Banyue envía una onda sónica hacia adelante, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Propio Camino",
      description: "Con suficiente Adrenalina, puede activarse de una de tres formas: Después del 3er o 4to golpe de (Ataque Basico: Cumbre Majestuosa), presiona [Icono Ataque] para activar. Después de un (Ataque de Asistencia), (Contraataque de Evasion) o (Asistencia Rapida), mantén [Icono Ataque] para activar. Durante una (Tecnica Especial EX), (Ataque Basico: Inmolacion), (Ataque en Cadena), (Tecnica Definitiva), (Ataque de Asistencia), (Contraataque de Evasion) o (Asistencia Rapida), ingresa rápidamente [Icono Especial EX] [Icono Ataque] [Icono Especial EX] en secuencia para activar: Banyue arroja sus cuentas, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Rugido de Leon - Ira",
      description: "Con suficiente Adrenalina al usar (Tecnica Especial EX: Propio Camino), ingresa rápidamente [Icono Ataque] [Icono Ataque] [Icono Especial EX] en secuencia para activar: Banyue libera una poderosa onda sónica en frente, causando Daño Fuego.",
      tags: [
        "Fuego",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Temblor de Montaña - Ira",
      description: "Con suficiente Adrenalina al usar (Tecnica Especial EX: Sacudidor de Tierra), ingresa rápidamente [Icono Especial EX] [Icono Especial EX] [Icono Ataque] en secuencia para activar: Banyue arroja una montaña aún más grande, causando Daño Fuego.",
      tags: [
        "Fuego",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Cancelar",
      description: "Cuando Banyue activa una (Tecnica Especial EX) ALT a través de comandos de entrada rápida, la (Tecnica Especial EX) activándose actualmente puede ser interrumpida. Cada (Tecnica Especial EX) tiene su propia ventana de Interrupción Perfecta. Interrumpir una (Tecnica Especial EX) después de su ventana de Interrupción Perfecta no afectará el efecto de la (Tecnica Especial EX) interrumpida. Interrumpir una (Tecnica Especial EX) durante la ventana de Interrupción Perfecta es igual a activar una Cancelación Perfecta. Mientras está en el estado (Semblante de Ira) y con (Poder de la Montaña), la Cancelación Perfecta es más fácil de activar.",
      tags: [
        "Fuego",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Ira Ardiente",
      description: "Al activar (Ataque en Cadena), selecciona el personaje correspondiente para activar: Lanza un ataque de gran área en frente, causando masivo Daño Fuego. Si Banyue tiene más de 120 (Fuegos Iracundos), entra automáticamente en el estado (Semblante de Ira) después del ataque. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Ataque en Cadena"
      ]
    },
    {
      type: "Técnica Definitiva",
      name: "El Mundo Tiembla",
      description: "Cuando el nivel de Decibelios llega a (Máximo), presiona [Icono Definitiva] para activar: Lanza un ataque de gran área en frente, causando masivo Daño Fuego. Si Banyue tiene más de 120 (Fuegos Iracundos), entra automáticamente en el estado (Semblante de Ira) después del ataque. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Fuego",
        "Técnica Definitiva"
      ]
    },
    {
      type: "Pasiva Central",
      name: "Uno con las Montañas",
      description: "Banyue gana Fuerza Pura extra basada en sus Hp Max, con cada 1 punto de Hp Max aumentando su Fuerza Pura en 0.1. Todo el Daño Fuego que Banyue causa es Daño Puro, ignorando la DEF enemiga y usando su estadística de Fuerza Pura como el Multiplicador de Daño. Cuando Banyue entra al campo de batalla, recupera inmediatamente 60 de Adrenalina. En modo Zona de Investigación, este efecto puede activarse una vez cada 180s. Banyue puede recuperar (Fuegos Iracundos) a través de los siguientes métodos: Recupera 0.5 (Fuegos Iracundos) por cada punto de Adrenalina consumido; Recupera 4 (Fuegos Iracundos) al activar (Asistencia Defensiva); Recupera 4 (Fuegos Iracundos) al hacer parry a un enemigo con (Evasion: Montaña Inmovil), y recupera 6 (Fuegos Iracundos) al activar un Bloqueo Perfecto, hasta una vez cada 1s; Recupera 4 (Fuegos Iracundos) al activar una (Evasion Perfecta), hasta una vez cada 1s. <br/><br/>Banyue puede tener hasta 150 (Fuegos Iracundos). Cuando posee al menos 120 (Fuegos Iracundos), Banyue puede entrar en el estado (Semblante de Ira) usando (Ataque Basico: Inmolacion). Mientras está en el estado (Semblante de Ira), Banyue ya no puede ganar (Fuegos Iracundos). Después de que Banyue usa (Ataque Basico: Montaña Derrumbada), sale del estado (Semblante de Ira). Al entrar en el estado (Semblante de Ira), Banyue gana 4 de (Poder de la Montaña). Si Banyue tiene (Poder de la Montaña), lanzar una (Tecnica Especial EX) ya no consume Adrenalina, en su lugar consume 1 (Poder de la Montaña) y restaura 10 de Adrenalina. Al salir del estado (Semblante de Ira), remueve todo el (Poder de la Montaña). Cuando posee (Poder de la Montaña) en el estado (Semblante de Ira), mantén [Icono Especial] para lanzar cuatro (Tecnicas Especiales EX) diferentes y (Ataque Basico: Montaña Derrumbada) en una secuencia fija. Cuando Banyue usa una (Tecnica Especial EX) o (Ataque de Asistencia), aumenta su Fuerza Pura en {VALOR_1}, Daño Fuego en {VALOR_2}, y Daño CRIT en {VALOR_3} por 30s. Activaciones repetidas reinician la duración.",
      tags: [
        "Pasiva Central"
      ]
    },
    {
      type: "Habilidad Adicional",
      name: "Cenit de la Montaña",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Soporte) o (Aturdidor): Mientras está en el estado (Semblante de Ira), cuando Banyue consume (Poder de la Montaña) para lanzar una (Tecnica Especial EX) a través de una rama de Ataque Básico o comandos de entrada rápida, gana una carga de (Vidyaraja). Cada carga de (Vidyaraja) aumenta su Daño Fuego en un 5%, acumulándose hasta 3 veces y durando 8s. Activaciones repetidas reinician la duración.",
      tags: [
        "Habilidad Adicional"
      ]
    },
    {
      type: "Mindscape 1",
      name: "La Codicia Arde como Fuego",
      description: "Cuando Banyue golpea a un enemigo con (Tecnica Especial EX: Propio Camino) o (Tecnica Especial EX: Sacudidor de Tierra), inflige el estado Temblor. En este estado, la RES a Fuego de los enemigos se reduce en un 10%, durando 30s. Cuando (Tecnica Especial EX: Rugido de Leon), (Tecnica Especial EX: Rugido de Leon - Ira), (Tecnica Especial EX: Temblor de Montaña), (Tecnica Especial EX: Temblor de Montaña - Ira), (Ataque Basico: Montaña Derrumbada) y (Ataque Basico: Picos Aplastantes) golpean a un enemigo en el estado Temblor, el Daño Puro infligido aumenta un 10%. Cuando (Ataque Basico: Picos Aplastantes) golpea a un enemigo Aturdido, la duración actual de Aturdimiento se extiende por 2s. Este efecto solo puede activarse una vez por Aturdimiento y no se acumula con efectos similares.",
      tags: [
        "Mindscape 1"
      ]
    },
    {
      type: "Mindscape 2",
      name: "La Ira Corta como una Espada",
      description: "El bono de Daño CRIT de la (Pasiva Central) aumenta en un 15% adicional, y el bono de Daño Fuego aumenta en un 15% adicional. Mientras está en el estado (Semblante de Ira), Banyue restaura 5 de Adrenalina adicional al consumir (Poder de la Montaña) para lanzar una (Tecnica Especial EX).",
      tags: [
        "Mindscape 2"
      ]
    },
    {
      type: "Mindscape 3",
      name: "La Ignorancia Ata como Cadenas",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: [
        "Mindscape 3"
      ]
    },
    {
      type: "Mindscape 4",
      name: "Unidad de Purga - Tipo Cero",
      description: "El daño de (Tecnica Especial EX: Rugido de Leon - Ira), (Tecnica Especial EX: Temblor de Montaña - Ira), (Ataque Basico: Montaña Derrumbada) y (Ataque Basico: Picos Aplastantes) aumenta un 30%.",
      tags: [
        "Mindscape 4"
      ]
    },
    {
      type: "Mindscape 5",
      name: "Estudiante",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: [
        "Mindscape 5"
      ]
    },
    {
      type: "Mindscape 6",
      name: "Vidyaraja Descendido",
      description: "En cualquier momento, cuando Banyue usa una (Tecnica Especial EX), también gana (Vidyaraja). El bono de Daño Fuego de (Vidyaraja) aumenta en un 8% adicional, y su duración se extiende a 30s. Al activar (Ataque Basico: Picos Aplastantes), Banyue inflige Daño Fuego igual al 600% de su Fuerza Pura a los enemigos cercanos. Usar (Evasion: Grito de Batalla) inmediatamente después de una (Tecnica Especial EX) también otorga (Vidyaraja).",
      tags: [
        "Mindscape 6"
      ]
    }
  ]
};
