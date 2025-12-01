// Agent 42 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 681,
      max: 8477
    },
    atk: {
      min: 109,
      max: 758
    },
    def: {
      min: 48,
      max: 594
    },
    impact: "83",
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "96",
    anomalyMastery: "95",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "energia",
    valuePerNode: 0.12
  },
  coreSkillScaling: [
    ["10%", "11.7%", "13.3%", "15%", "16.7%", "18.3%", "20%"]
  ],
  skills: {
    basic: {
      name: "Ataque Basico: Combo Orbital",
      type: "Ataque Básico",
      description: "Presiona [Icono Ataque] para activar: Realiza hasta cinco golpes hacia adelante, causando Daño Etereo. El quinto ataque es un (Capricho), conjurando una figura Etérea que inflige Daño Etereo a enemigos en un área circular adelante. Cuando está en combate y no en el estado (Sueño), Lucia gana 40 (Puntos de Sueño) al usar este (Capricho)."
    },
    dodge: {
      name: "Evasion: Silueta Desvanecida",
      type: "Evasión",
      description: "Presiona [Icono Evasión] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      subSkills: [
        {
          name: "Ataque de Carrera: Refraccion",
          type: "Ataque de Carrera",
          description: "Presiona [Icono Ataque] durante una evasión para activar: Entrega un golpe rápido hacia adelante, causando Daño Etereo."
        },
        {
          name: "Contraataque de Evasion: Eco de Polvo Estelar",
          type: "Contraataque de Evasión",
          description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Este Contraataque de Evasión es un (Capricho). Cuando se activa, invoca una figura Etérea que entrega un ataque descendente en un área circular adelante, causando Daño Etereo. Si no está en el estado (Sueño), Lucia gana 20 (Puntos de Sueño) al usar este (Capricho). Este efecto puede activarse una vez cada 5s. El personaje es invulnerable mientras usa esta habilidad."
        }
      ]
    },
    assist: {
      name: "Asistencia Rapida: Niebla Aplastante",
      type: "Asistencia Rápida",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Asistencia] para activar: Esta Asistencia Rápida es un (Capricho). Cuando se activa, invoca una figura Etérea que entrega un ataque descendente en un área circular adelante, causando Daño Etereo. Si no está en el estado (Sueño), Lucia gana 20 (Puntos de Sueño) al usar este (Capricho). Este efecto puede activarse una vez cada 5s. El personaje es invulnerable mientras usa esta habilidad.",
      subSkills: [
        {
          name: "Asistencia Defensiva: Voz de Sueños Ilusorios",
          type: "Asistencia Defensiva",
          description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Asistencia] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad."
        },
        {
          name: "Ataque de Asistencia: Armonia de Sueños Pintados",
          type: "Ataque de Asistencia",
          description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Este Ataque de Asistencia es una (Armonia). Cuando se activa, invoca una figura Etérea que entrega un ataque descendente en un área circular adelante, causando Daño Etereo. Si no está en el estado (Sueño), Lucia gana 40 (Puntos de Sueño) al usar esta (Armonia). El personaje es invulnerable mientras usa esta habilidad."
        }
      ]
    },
    special: {
      name: "Tecnica Especial: Sinfonia de la Segadora - Tormenta",
      type: "Técnica Especial",
      description: "Presiona [Icono Especial] para activar: Esta Técnica Especial es un (Capricho). Cuando se activa, recrea una figura Etérea que corta hacia adelante en línea, causando Daño Etereo. Cuando está en combate y no en el estado (Sueño), Lucia gana 20 (Puntos de Sueño) al usar este (Capricho). Este efecto puede activarse una vez cada 5s.",
      subSkills: [
        {
          name: "Tecnica Especial EX: Sinfonia de la Segadora - Amanecer",
          type: "Técnica Especial EX",
          description: "Con suficiente Energía, presiona [Icono Especial] para activar: Esta Técnica Especial EX es una (Armonia). Cuando se activa, invoca una figura Etérea que entrega un corte poderoso hacia adelante en línea, causando Daño Etereo. Cuando Lucia usa cualquier (Armonia), todos los miembros del escuadrón ganan el estado (Rompeoscuridad). Mientras está en el estado (Rompeoscuridad), la Fuerza Pura aumenta en 12. Cada 200 puntos de los PV Máximos iniciales de Lucia otorgan 7.4 de Fuerza Pura adicional. El estado (Rompeoscuridad) puede aumentar la Fuerza Pura hasta un máximo de 900.0, durando 20s y activaciones repetidas reinician la duración. Cuando los PV Máximos iniciales de Lucia alcanzan 24,000, el efecto de bono anterior alcanza su valor máximo. Cuando cualquier (Armonia) causa DAÑO, Lucia aumenta el DAÑO del ataque final en un 70.0% adicional de sus PV Máximos. Si activa esta Técnica Especial EX mientras está en el estado (Sueño) y bajo el efecto de (Velo Etereo: Manantial), la duración de (Velo Etereo: Manantial) se extiende por 16s. Después de activar su Técnica Especial EX, Lucia puede seguir inmediatamente con el 5to golpe de su (Ataque Basico). Si no está en el estado (Sueño), Lucia gana 60 (Puntos de Sueño) al usar esta (Armonia). El personaje es invulnerable mientras usa esta habilidad."
        }
      ]
    },
    chain: {
      name: "Ataque en Cadena: Etapa de Brillantez",
      type: "Ataque en Cadena",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Este Ataque en Cadena es una (Armonia). Cuando se activa, invoca una figura Etérea que atrae enemigos en un área circular adelante y causa Daño Etereo. Si no está en el estado (Sueño), Lucia gana 40 (Puntos de Sueño) al usar esta (Armonia). El personaje es invulnerable mientras usa esta habilidad.",
      subSkills: [
        {
          name: "Definitiva: ¡Carga, Gran Armadura!",
          type: "Definitiva",
          description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Esta Definitiva es una (Armonia). Cuando se activa, Lucia invoca una figura Etérea y la monta hacia adelante en una carga. Mantener un botón direccional le permite dirigir y extender la carga, hasta 3s. Durante la carga, el Nivel de Anti-Interrupción aumenta, el DAÑO recibido se reduce en un 40%, y cuando Lucia recibe DAÑO fatal, permanece en batalla con los PV no bajando de 1. Cuando la carga termina, Lucia desata un golpe poderoso en un área grande a su alrededor, causando Daño Etereo. Una (Asistencia Rapida) es activada cuando esta habilidad golpea a un enemigo, y después de que la habilidad es usada, deja atrás una (Convergencia de Luz Estelar). (Convergencia de Luz Estelar) dura 8s. Mientras está dentro de (Convergencia de Luz Estelar), el personaje activo actual gana regeneración de PV igual al 1.6% de los PV Máximos de Lucia por segundo. Este efecto termina 4s después de dejar la (Convergencia de Luz Estelar) o inmediatamente al cambiar. Después de la activación, si Lucia está en el estado (Sueño) y (Velo Etereo: Manantial) está activo, la duración de (Velo Etereo: Manantial) se extiende por 32s. Si no está en el estado (Sueño), Lucia gana 100 (Puntos de Sueño) al usar esta (Armonia). Si está en el estado (Sueño) al activar esta (Armonia), ganará 100 (Puntos de Sueño) y re-entrará al estado (Sueño) la próxima vez que salga de él. Este efecto no puede acumularse. El personaje es invulnerable mientras realiza el golpe poderoso."
        }
      ]
    },
    core: {
      name: "Pasiva Principal: Nocturno Perdido",
      type: "Habilidad Principal",
      description: "Al entrar al campo de batalla, Lucia gana inmediatamente 60 (Puntos de Sueño). Si sus (Puntos de Sueño) alcanzan 100 al activar un (Capricho) o (Armonia), ella entra en el estado (Sueño). Al entrar en el estado (Sueño), activa una (Asistencia Rapida) y simultáneamente activa (Velo Etereo: Manantial). Mientras (Velo Etereo: Manantial) está activo, los PV Máximos de todos los miembros del escuadrón aumentan un 5%, durando 40s. Activaciones repetidas extienden la duración, hasta un máximo de 300s. Mientras Lucia está en el estado (Sueño), usar cualquier (Capricho) consume 25 (Puntos de Sueño) y lo mejora a (Armonia). Siempre que el ataque de otro personaje activo golpea a un enemigo, Lucia consume 25 (Puntos de Sueño) para desatar una (Replica). Esta (Replica) es una (Armonia). Después de que Lucia activa una mejora de habilidad o (Replica), (Replica) no puede ser activada por 8s. Cuando Lucia activa una mejora de habilidad o una (Replica), todos los miembros del escuadrón ganan el estado (Cancion de Cuna del Soñador). Mientras está en el estado (Cancion de Cuna del Soñador), el DAÑO infligido aumenta un 20% por 12s. Activaciones repetidas reinician la duración. Si Lucia se queda sin (Puntos de Sueño) o deja el (Velo Etereo), sale del estado (Sueño).",
      subSkills: [
        {
          name: "Habilidad Adicional: Balada de la Larga Noche",
          type: "Habilidad Adicional",
          description: "Cuando otro personaje en tu escuadrón es un personaje de (Ruptura) o (Aturdidor): Al aplicar (Rompeoscuridad), aplica adicionalmente un efecto de aumento de Daño CRIT del {VALOR_1}."
        }
      ]
    },
    mindscape: {
      1: {
        name: "Amigo Secreto",
        description: "Cuando (Cancion de Cuna del Soñador) causa daño adicional, ignora el 18% de la RES a Todo-Atributo enemiga y tiene una Tasa de Generación de Decibelios aumentada en un 5%. Cada vez que Lucia realiza una mejora de habilidad, gana 1 acumulación de (Eco), acumulándose hasta 4 veces. Cuando (Cancion de Cuna del Soñador) termina, si Lucia tiene alguna acumulación de (Eco), 1 acumulación es consumida para reaplicar (Cancion de Cuna del Soñador) a todos los miembros del escuadrón."
      },
      2: {
        name: "Gran Mago",
        description: "Mientras Lucia está dentro de (Velo Etereo: Manantial), (Armonia) causa 15% más de DAÑO. Los Agentes en el estado (Rompeoscuridad) ganan un aumento de Daño Puro adicional del 15% mientras están en (Velo Etereo: Manantial)."
      },
      3: {
        name: "El Mejor Compañero",
        description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2"
      },
      4: {
        name: "Horas Nocturnas",
        description: "Cuando (Velo Etereo) es activado o extendido en el campo, Lucia otorga a todos los miembros del escuadrón 100 Decibelios. Este efecto puede activarse una vez cada 15s."
      },
      5: {
        name: "Observador de Sueños",
        description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2"
      },
      6: {
        name: "El Viaje Sin Fin",
        description: "Cuando Lucia está dentro de cualquier (Velo Etereo), su ATK aumenta un 2% de sus PV Máximos iniciales, y (Armonia) siempre activa un CRIT con Daño CRIT de (Armonia) aumentado en un 30%."
      }
    }
  }
};
