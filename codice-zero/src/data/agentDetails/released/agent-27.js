// Agent 28 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 692,
      max: 8609
    },
    atk: {
      min: 103,
      max: 715
    },
    def: {
      min: 48,
      max: 600
    },
    impact: 83,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "93",
    anomalyMastery: "92",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "energia",
    valuePerNode: 0.12
  },
  materials: {
    weeklyBoss: {
      name: "Zapatos de Baile Finales",
      icon: "Item_Finale_Dance_Shoes.webp",
    },
    eliteBoss: {
      name: "Datos de Dimensiones Superiores: Dragón Atronador",
      icon: "Item_Higher_Dimensional_Data_Thunderous_Dragon.webp",
    }
  },
  coreSkillScaling: [
    ["20%", "25.0%", "2950.0", "22%"],
    ["20%", "25.0%", "2950.0", "24%"],
    ["20%", "25.0%", "2950.0", "26%"],
    ["20%", "25.0%", "2950.0", "28%"],
    ["20%", "25.0%", "2950.0", "30%"],
    ["20%", "25.0%", "2950.0", "32%"],
    ["20%", "25.0%", "2950.0", "35%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Capricho",
      description: "Presiona [Icono Ataque] para activar: Realiza hasta tres ataques hacia adelante, causando Daño Etéreo. Durante el 3er golpe, mantén [Icono Ataque] para cargar, atrayendo enemigos y expandiendo el rango de ataque para un ataque más fuerte. Después de usar otras habilidades, mantén [Icono Ataque] para iniciar el 3er golpe directamente.",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Interludio",
      description: "Mientras está en el estado (Cadencia Idílica), presiona [Icono Ataque] para activar: Libera (Trémolo) hacia adelante para atacar, causando Daño Etéreo. Una (Asistencia Rápida) se activará cuando esta habilidad golpee a un enemigo.",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Coro",
      description: "Mientras está en el estado (Cadencia Idílica), presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Lanza múltiples ataques de (Trémolo) a enemigos en frente, causando masivo Daño Etéreo. Una (Asistencia Rápida) se activará cuando esta habilidad golpee a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Final",
      description: "Mientras está en el estado (Cadencia Idílica), mantén [Icono Ataque] para activar: Libera (Trémolo) hacia adelante para atacar, causando Daño Etéreo y saliendo del estado (Cadencia Idílica). Al activar la habilidad, otorga un buffo de la Pasiva Central: Andante Agraciado. Con suficiente Energía, consume Energía para seguir con 1 (Trémolo) y 3 (Cúmulos Tonales). Este ataque de (Trémolo) lanzado es considerado una (Técnica Especial EX).",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Mini Vals",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Melodía de Eclipse Lunar",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Ataca hacia adelante, causando Daño Etéreo. Al activarse, arrastrar el stick/joystick permite movimiento en la dirección correspondiente.",
      tags: ["Etéreo", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Vals del Paraguas",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Ataca a enemigos en frente, causando Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Campanillas y Juramentos",
      description: "Presiona [Icono Especial] para activar: Se mueve rápidamente, luego libera (Trémolo), causando Daño Etéreo, y entra en el estado (Cadencia Idílica). Durante la activación, arrastrar el stick/joystick permite movimiento en la dirección mantenida. Mantén [Icono Especial] para cargar durante la activación, atrayendo enemigos, y sigue con 1 a 4 (Trémolos) dependiendo de la duración de la carga. Una (Asistencia Rápida) se activará cuando esta habilidad golpee a un enemigo. El personaje es invulnerable mientras se mueve rápidamente.",
      tags: ["Etéreo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Cadencia Idílica",
      description: "Después de entrar en el estado (Cadencia Idílica), Astra Yao aumenta el DAÑO de todos los miembros del escuadrón en un {VALOR_1} y el Daño CRIT en un {VALOR_2}. Mientras está en el estado (Cadencia Idílica), Astra Yao no puede moverse, pero presionando [Icono Dodges] activará (Ataque Básico: Interludio), y presionando [Icono Dodges] activará una evasión. Después de activar una (Evasión Perfecta), presiona [Icono Ataque] para activar (Ataque Básico: Coro). Mientras está en este estado, el nivel de Anti-Interrupción de Astra Yao aumenta, y el DAÑO que recibe se reduce en un 40%. Después de cambiar a otro personaje, Astra Yao permanecerá en el campo y se volverá Invulnerable. Al cambiar de nuevo a ella, automáticamente seguirá con (Técnica Especial: Campanillas y Juramentos). Durante este estado, mantén [Icono Ataque] para activar (Ataque Básico: Final), saliendo del estado (Cadencia Idílica), o mantén [Icono Dodges] para salir del estado (Cadencia Idílica) directamente.",
      tags: ["Etéreo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Acorde",
      description: "Astra Yao tendrá 1 (Acorde) por cada 25 de Energía. Mientras está en el estado (Cadencia Idílica), cuando Astra Yao tiene (Acordes), una (Asistencia Rápida) puede activarse en las siguientes situaciones:  • Cuando el ataque del personaje activo golpea a un enemigo, una vez por 3s.  • Cuando el ataque pesado del personaje activo golpea a un enemigo, una vez por 1s.  Cuando otros miembros del escuadrón cambian a través de (Asistencia Rápida), (Ataque en Cadena), (Asistencia Defensiva), o (Asistencia Evasiva), Astra Yao consumirá 25 de Energía y lanzará 1 (Trémolo) para atacar. Este ataque de (Trémolo) lanzado es considerado un (Técnica Especial EX). Después de activar una (Asistencia Rápida), presiona rápidamente [Icono Assist] para cambiar de personaje y activar una (Asistencia Precisa), causando que Astra Yao siga con hasta 3 (Cúmulos Tonales) para atacar. Cuando otros miembros del escuadrón cambian a través de un (Ataque en Cadena), (Asistencia Defensiva), o (Asistencia Evasiva), activará automáticamente una (Asistencia Precisa).",
      tags: ["Técnica Especial"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Un Cielo Luminoso",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Ataca a enemigos en frente, causando Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Evasiva: Dos Corazones",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Esquiva el ataque enemigo y activa (Visión Vital). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Tres Vidas de Destino",
      description: "Presiona [Icono Ataque] después de una (Asistencia Evasiva) para activar: Libera un haz de energía hacia adelante, causando Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Asistencia"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Concierto Embriagador",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Usa una canción para canalizar energía en una explosión, causando masivo Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad. Una (Asistencia Rápida) se activa cuando esta habilidad golpea a un enemigo. Después de la habilidad, Astra Yao entra en el estado (Cadencia Idílica).",
      tags: ["Etéreo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Sonata Fantasía",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Usa una canción para canalizar energía en una explosión, causando masivo Daño Etéreo, y restaurando {VALOR_3} de PS a todos los miembros del escuadrón. El personaje es invulnerable mientras usa esta habilidad. Una (Asistencia Rápida) se activa cuando esta habilidad golpea a un enemigo. Después de la habilidad, Astra Yao entra en el estado (Cadencia Idílica). Después de la habilidad, las siguientes dos (Asistencias Rápidas) serán reemplazadas por (Ataques en Cadena). Antes de que todas las cargas de reemplazo se usen, una (Asistencia Rápida) se activa siempre que cualquier miembro del escuadrón golpea a un enemigo con un (Ataque en Cadena) o (Definitiva).",
      tags: ["Etéreo", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Andante Agraciado",
      description: "Durante el estado de (Cadencia Idílica), cuando otros miembros del escuadrón cambian a través de una (Asistencia Rápida), (Ataque en Cadena), (Asistencia Defensiva), o (Asistencia Evasiva), y cuando Astra Yao gasta Energía para liberar (Trémolo) para atacar, tanto Astra Yao como el ATK del personajeentrante aumentan. El aumento es igual al {VALOR_4} del ATK inicial de Astra Yao, hasta un máximo de 1,200. El efecto dura por 20s y puede extenderse hasta 30s con activaciones repetidas.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Frenesí a la Luz de la Luna",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Ataque), (Anomalía), o (Soporte): Cuando se consume Energía para activar una (Asistencia Precisa) o (Ataque Básico: Final), Astra Yao seguirá adicionalmente con 1 (Trémolo) y 3 (Cúmulos Tonales).",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Temperamento Igual de 12 Tonos",
      description: "Cuando el ataque de Astra Yao golpea a un enemigo, la RES a Todo Tipo del objetivo se reduce en 6%, acumulándose hasta 3 veces y durando 30s. Activaciones repetidas reinician la duración. Al entrar en el campo de batalla, Astra Yao gana inmediatamente 1,000 Decibelios. Cuando activa su (Definitiva), todos los miembros del escuadrón ganan 1 acumulación de (Canción de Protección) por 60s. Al ser atacado por un enemigo, consume (Canción de Protección), otorgando Invulnerabilidad por 1s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Arte de la Avaricia",
      description: "El buff de ATK de la Pasiva Central: Andante Agraciado aumenta adicionalmente en un 19%, con un máximo aumentado de 400. Mientras está en el estado (Cadencia Idílica), cuando otros miembros del escuadrón cambian a través de una (Asistencia Rápida), (Ataque en Cadena), (Asistencia Defensiva), o (Asistencia Evasiva), Astra Yao seguirá adicionalmente con 1 (Trémolo) y 3 (Cúmulos Tonales) para atacar. Este efecto puede activarse una vez cada 3s.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Notación de Pentagrama Entrelazado",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Cabello en tu Nuca",
      description: "Después de activar un (Ataque en Cadena) o (Definitiva), dentro de 15s, Astra Yao puede activar una (Asistencia Rápida) incluso si no tiene (Acordes). Cuando el ataque golpea a un enemigo, el intervalo para activar una (Asistencia Rápida) se reduce a 1s. Mientras está en el estado (Cadencia Idílica), cuando otros miembros del escuadrón entran al campo vía una (Asistencia Rápida), recibirán diferentes buffs basados en su especialidad, y este efecto puede activarse una vez cada 3s para todo el escuadrón: (Ataque): El siguiente ataque pesado de (Asistencia Rápida) en un enemigo causará DAÑO extra igual al 300% del ATK de Astra Yao; (Anomalía): La siguiente (Asistencia Rápida) tendrá 50% de Tasa de Buildup de Anomalía aumentada; (Aturdimiento): La siguiente (Asistencia Rápida) infligirá 50% de Aturdimiento aumentado.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Proxy y Cuerda de Seda",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Somos el Mundo",
      description: "Mientras está en el estado (Cadencia Idílica), el multiplicador de DAÑO para (Trémolo) y (Cúmulos Tonales) lanzados o seguidos aumentará al 200% del original, y la Probabilidad de CRIT aumenta en un 80%. Cuando se activa una (Asistencia Precisa), Astra Yao seguirá automáticamente con el 3er golpe cargado de (Ataque Básico: Capricho), con una Probabilidad de CRIT aumentada en un 80%. Este efecto puede activarse una vez cada 10s.",
      tags: ["Mindscape 6"]
    }
  ]
};
