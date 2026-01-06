// Agent 25 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 595,
      max: 7405
    },
    atk: {
      min: 132,
      max: 915
    },
    def: {
      min: 48,
      max: 600
    },
    impact: 90,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "80",
    anomalyMastery: "95",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  coreSkillScaling: [
    ["10.6%", "6%"],
    ["13%", "7%"],
    ["15.4%", "8%"],
    ["17.8%", "9%"],
    ["20.2%", "10%"],
    ["22.6%", "11%"],
    ["25%", "12%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Perforanubes",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 5 ataques perforantes hacia adelante, causando Daño Físico y Daño Eléctrico. Cuando el 5to golpe del (Ataque Básico) golpea a un enemigo, genera 2 (Cargas Electro). Después de activar un (Ataque en Cadena), la próxima vez que Harumasa active el 5to golpe de (Ataque Básico: Perforanubes) y golpee a un enemigo, generará 6 (Cargas Electro).",
      tags: ["Físico", "Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Perforanubes - Deriva",
      description: "Durante (Ataque Básico: Perforanubes), mueve el joystick y presiona [Icono Ataque] para activar: Dispara un ataque perforante a distancia y se reposiciona hacia la dirección correspondiente, causando Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Pluma Descendente",
      description: "Después del 5to golpe de (Ataque Básico: Perforanubes), un (Técnica Especial), un (Técnica Especial EX), o un (Ataque en Cadena), mantén [Icono Ataque] para activar: Dispara inmediatamente (Pluma Descendente) a enemigos en frente, causando Daño Eléctrico. Mantén [Icono Ataque] para apuntar a un objetivo y suelta [Icono Ataque] para activar: Después de tensar la cuerda y apuntar, dispara (Pluma Descendente) al objetivo, causando Daño Eléctrico.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Ha-Oto no Ya",
      description: "Cuando el 5to golpe de (Ataque Básico: Perforanubes)/(Técnica Especial EX)/(Ataque en Cadena) golpea a un enemigo o al suelo, puede generar 2/6/6 (Cargas Electro). Si no hay (Cargas Electro) en el campo cuando cualquier miembro del escuadrón aplica una Anomalía de Atributo a un enemigo, genera 6 (Cargas Electro). Este efecto puede activarse una vez cada 12s. Puede haber hasta 6 (Cargas Electro) presentes a la vez. Si hay (Cargas Electro) presentes cuando Harumasa dispara y golpea enemigos con (Pluma Descendente), las (Cargas Electro) se activarán y dispararán (Ha-Oto no Ya) a los enemigos golpeados por (Pluma Descendente), causando Daño Eléctrico. (Ha-Oto no Ya) aplicará (Prisión Electro) a los enemigos golpeados, acumulándose hasta 8 veces y durando 10s, las activaciones repetidas reinician la duración. Mientras un objetivo tenga al menos 2 acumulaciones de (Prisión Electro), estará (Marcado-X).",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Destello Rápido",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Hiten no Tsuru",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza múltiples ataques perforantes hacia adelante, causando Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Filo Oculto",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Perfora a enemigos en frente, causando Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Hiten no Tsuru - Corte",
      description: "Mientras hay enemigos (Marcado-X) en el campo, Harumasa entrará en el estado (Despertar), cambiando (Ataque de Carrera: Hiten no Tsuru) por (Ataque de Carrera: Hiten no Tsuru - Corte). Mientras está en el estado (Despertar), presiona [Icono Ataque] durante una evasión para activar: Arremete hacia el enemigo (Marcado-X) más cercano y ejecuta un corte poderoso, causando Daño Eléctrico. Cuando el corte golpea al objetivo, consume 2 acumulaciones de (Prisión Electro). Con menos de 2 acumulaciones de (Prisión Electro), (Marcado-X) será eliminado del enemigo. Antes de que (Marcado-X) sea eliminado, presiona repetidamente [Icono Ataque] para usar repetidamente (Ataque de Carrera: Hiten no Tsuru - Corte). Mientras no existan enemigos (Marcado-X) en el campo, Harumasa sale del estado (Despertar). Mientras está en el estado (Despertar), presiona [Icono Ataque] después de (Ataque Básico: Pluma Descendente) para seguir rápidamente con (Ataque de Carrera: Hiten no Tsuru - Corte). Durante la activación de la habilidad, el nivel de Anti-Interrupción aumenta, y el DAÑO recibido se reduce en un 40%.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Sin Lugar Donde Esconderse",
      description: "Presiona [Icono Especial] para activar: Lanza una flecha hacia adelante, causando Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Sin Lugar Donde Correr",
      description: "Con suficiente Energía, presiona [Icono Especial] para activar: Lanza dagas y una flecha mejorada hacia adelante, causando masivo Daño Eléctrico. Cuando la flecha mejorada golpea a un enemigo o al suelo, genera 6 (Cargas Electro). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Kai - Hanare",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata un ataque perforante en una gran área adelante y luego dispara una flecha mejorada, causando masivo Daño Eléctrico. Cuando la flecha golpea el suelo, genera 6 (Cargas Electro). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Zanshin",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata un ataque perforante a enemigos en una gran área adelante, causando masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Amanecer",
      description: "La Prob. Crítica de (Ataque de Carrera: Hiten no Tsuru - Corte) aumenta en un {VALOR_1}, y cuando el (Ataque de Carrera: Hiten no Tsuru - Corte) de Harumasa activa un golpe crítico contra un enemigo, gana 1 acumulación de (Filo Reluciente), hasta un máximo de 3 acumulaciones por uso de la habilidad y acumulándose hasta 6 veces, durando 5s, los disparos repetidos reinician la duración. Cada acumulación de (Filo Reluciente) aumenta el Daño Crítico de (Ataque de Carrera: Hiten no Tsuru - Corte) en un {VALOR_2}.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Overclock",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Aturdimiento) o (Anomalía): Cuando los ataques de Harumasa golpean enemigos Aturdidos o enemigos bajo Anomalía de Atributo, su DAÑO aumenta en un 40%. Cuando el (Pluma Descendente) de Harumasa golpea enemigos Aturdidos o enemios bajo Anomalía de Atributo, aplicará 2 acumulaciones de (Prisión Electro) al objetivo.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Arco Preparado",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Desata un ataque perforante a enemigos en frente, causando Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Yugamae",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parrea el ataque enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Yugamae - Corte",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Desata una serie de cortes a enemigos en frente, causando Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Espíritu Elevado",
      description: "El límite máximo de acumulaciones de (Prisión Electro) de (Ataque Básico: Ha-Oto no Ya) aumenta a 14 acumulaciones. Cuando se activa una (Carga Electro), se dispararán 2 (Ha-Oto no Ya) consecutivos al objetivo.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Languidez",
      description: "Al usar un (Ataque en Cadena) o (Definitiva), Harumasa gana 7 acumulaciones de (Electro Blitz), hasta un máximo de 7. Mientras posee (Electro Blitz), el DAÑO de (Ataque de Carrera: Hiten no Tsuru - Corte) aumenta en un 50%. Consume 1 acumulación de (Electro Blitz) una vez que (Ataque de Carrera: Hiten no Tsuru - Corte) termina.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Mentiras Blancas",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Ocasionalmente Motivado",
      description: "(Prisión Electro) ahora dura 20s. Cuando (Ataque de Carrera: Hiten no Tsuru - Corte) golpea enemigos, Harumasa gana 30 Decibelios una vez por uso de esta habilidad. Al activar la (Definitiva), aplica el máximo de acumulaciones de (Prisión Electro) a todos los enemigos en el campo.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Nadie Sabe",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Entendimiento Tácito",
      description: "Después de que (Ha-Oto no Ya) golpea enemigos Aturdidos o enemigos bajo Anomalías de Atributo, Harumasa ignorará 15% de la Res Eléctrica del objetivo por 12s. Cada 12 veces que un enemigo es golpeado por (Ha-Oto no Ya), activa una explosión electromagnética extra, causando 1,500% del ATK de Harumasa al objetivo como Daño Eléctrico.",
      tags: ["Mindscape 6"]
    }
  ]
};
