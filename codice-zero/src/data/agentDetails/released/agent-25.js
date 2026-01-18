// Agent 25 - Harumasa - Detailed Stats and Skills
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
    statName: "Prob. Critica",
    valuePerNode: 4.8
  },
  materials: {
    weeklyBoss: {
      name: "Refinamiento del Sicofante",
      icon: "Item_Sycophant's_Refinement.webp",
    },
    eliteBoss: {
      name: "Datos de Dimensiones Superiores: Dragón Atronador",
      icon: "Item_Higher_Dimensional_Data_Thunderous_Dragon.webp",
    }
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
  potentialSkillScaling: [
    ["4%", "5%"],
    ["6%", "7.5%"],
    ["8%", "10%"],
    ["10%", "12.5%"],
    ["12%", "15%"]
  ],
  potential: {
    name: "Despertar Potencial: Concentración",
    description: "Al activar (Técnica Especial Potenciada), (Ataque en Cadena) o (Definitiva), el ATQ aumenta en un {VALOR_1}; (Ataque de Carrera: Hiten no Tsuru) ignora un {VALOR_2} de la RES a Daño Eléctrico del objetivo, durante 12s. Los activadores repetidos reinician la duración. La duración de (Filo Reluciente) de la (Pasiva Central) se extiende a 10s."
  },
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
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida. El personaje es invulnerable mientras usa esta habilidad.",
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
      name: "Ataque de Velocidad: Hiten no Tsuru",
      description: "Cuando hay enemigos con marca de (Marcado-X) en el campo, Harumasa entrará en estado (Despertar), cambiando (Ataque de Carrera: Hiten no Tsuru) por (Ataque de Velocidad: Hiten no Tsuru). En estado (Despertar), presiona [Icono Ataque] durante una evasión para activar: Arremete rápidamente hacia el enemigo más cercano con marca (Marcado-X) y realiza un corte físico, causando Daño Eléctrico. Cuando el corte golpea al objetivo, consume 2 acumulaciones de (Prisión Electro); si tiene menos de 2 acumulaciones de (Prisión Electro), se elimina la marca (Marcado-X) del enemigo. Antes de eliminar (Marcado-X), presiona repetidamente [Icono Ataque] para usar continuamente (Ataque de Velocidad: Hiten no Tsuru); cuando no hay enemigos (Marcado-X) en el campo, sale del estado (Despertar). En estado (Despertar), después de activar (Contraataque de Evasión), presiona [Icono Ataque] para activar directamente (Ataque de Velocidad: Hiten no Tsuru). El 1er y 2do ataque de (Ataque de Velocidad: Hiten no Tsuru) causa daño adicional de (Prisión Electro) considerado Daño de Atributo Eléctrico. Mientras está en el primer ataque de este modo, el daño recibido se reduce en un 40%.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Territorio",
      description: "Presiona [Icono Especial] para activar: Lanza una flecha hacia adelante, causando Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Territorio Mejorado",
      description: "Con suficiente Energía, presiona [Icono Especial] para activar: Lanza flechas mejoradas hacia adelante, causando masivo Daño Eléctrico. Cuando una flecha mejorada golpea a un enemigo o al suelo, puede generar (Prisión Electro). 1º. Una flecha mejorada que golpea enemigo puede hacer que el objetivo sea marcado con (Marcado-X); luego una siguiente flecha mejorada golpeando el objetivo, genera (Prisión Electro en el objetivo); si el objetivo tiene menos de un cierto número de (Prisión Electro), el número de activaciones se reducirá. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Territorio Mejorado - Cielos",
      description: "Después de (Técnica Especial EX: Territorio Mejorado), en el 4to o 5to ataque después de (Ataque de Carrera), (Ataque de Velocidad), (Hiten no Tsuru), (Contraataque Especial), (Ataque de Velocidad: Boost), (Evasión Rápida: Boost) y después de presionar [Icono Especial] se puede activar: Dispara continuamente flechas mejoradas hacia adelante, causando masivo Daño Eléctrico. La primera flecha mejorada que golpea enemigo o suelo puede generar (Prisión Electro). Después de una flecha mejorada golpear al objetivo, genera (Prisión Electro) en el objetivo; si el objetivo tiene un cierto número de (Prisión Electro) asignadas cerca del límite, se reducirá el número de activaciones. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Convergencia",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Lanza ataques perforantes a enemigos en una gran área hacia adelante, y dispara flechas mejoradas, causando masivo Daño Eléctrico. Cuando la flecha golpea el suelo, puede generar (Prisión Electro). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Zanshin",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Lanza ataques perforantes a enemigos en una gran área hacia adelante, causando masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Zanshin - Rama",
      description: "Con (Filo Reluciente Afilado), (Zanshin) se activa automáticamente después de ejecutarse: Lanza ataques de penetración de gran área a enemigos en frente, causando masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Amanecer",
      description: "La Prob. Crítica de (Ataque de Carrera: Hiten no Tsuru), (Evasión) y (Ataque de Velocidad) aumenta en un {VALOR_1}, y cuando el (Ataque de Carrera: Hiten no Tsuru - Corte) de Harumasa activa un golpe crítico contra un enemigo y activa (Ultima Técnica), obtiene 1/6 acumulaciones de (Filo Reluciente), hasta un máximo de 3/6 acumulaciones por uso de la habilidad y acumulándose hasta 6 veces, durando 6s; los triggers repetidos reinician la duración. Cada acumulación de (Filo Reluciente) aumenta el Daño Crítico de (Ataque de Carrera: Hiten no Tsuru - Corte) en un {VALOR_2}.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Overclock",
      description: "Cuando hay personajes de rol (Aturdidor) o de otra Facción en el equipo y se activa: Cuando los ataques de Harumasa golpean enemigos en estado de Aturdimiento o bajo estado de Anomalía de Atributo, el DAÑO propio aumenta en un 40%. Cuando las flechas de Harumasa lanzan y golpean enemigos en estado de Aturdimiento o bajo estado de Anomalía de Atributo, aplica 2 acumulaciones de (Prisión Electro).",
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
