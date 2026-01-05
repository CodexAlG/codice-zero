// Agent 23 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 626,
      max: 7788
    },
    atk: {
      min: 126,
      max: 872
    },
    def: {
      min: 49,
      max: 612
    },
    impact: 86,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "112",
    anomalyMastery: "114",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "tasa",
    valuePerNode: 12
  },
  coreSkillScaling: [
    ["125%", "10%", "3200.0%"],
    ["145%", "11.6%", "3200.0%"],
    ["166%", "13.3%", "3200.0%"],
    ["188%", "15%", "3200.0%"],
    ["208%", "16.6%", "3200.0%"],
    ["230%", "18.3%", "3200.0%"],
    ["250%", "20%", "3200.0%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Kagura Tsukuyomi",
      description: "Yanagi tiene dos posturas: (Jougen) y (Kagen). Presiona [Icono Ataque] para activar: Ejecuta hasta cinco cortes hacia adelante basados en la postura actual, causando Daño Físico y Daño Eléctrico. Durante el combate, Yanagi gana el beneficio de postura correspondiente basado en su postura actual: Beneficio de postura (Jougen): Daño Eléctrico aumenta en un 10%. El nivel de Anti-Interrupción aumenta durante los (Ataques Básicos). Beneficio de postura (Kagen): La Tasa de PEN aumenta en un 10%. El nivel de Anti-Interrupción aumenta durante los (Ataques Básicos). Por 8s después de cambiar posturas, Yanagi retiene el bono de la postura anterior.",
      tags: ["Físico", "Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Brisa Errante",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Vuelo Fugaz",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta a enemigos en frente, causando Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Represalia Rápida",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Corta a enemigos en frente, causando Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, puedes seguir inmediatamente con el 3er golpe del (Ataque Básico) de la postura actual.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Ruten",
      description: "Presiona [Icono Especial] para activar: Realiza un corte hacia adelante, causando Daño Eléctrico, y cambia la postura actual. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad. Si se activa después del 3er, 4to o 5to golpe del (Ataque Básico), activa (Ruten Veloz), acelerando los cortes mientras cambia su postura actual. Bloquea ataques enemigos mientras (Ruten Veloz) está activo. Al activar (Ruten Veloz), Yanagi puede seguir inmediatamente con el 3er golpe del (Ataque Básico) de la postura actual.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Gekka Ruten",
      description: "Con suficiente Energía, mantén [Icono Especial EX] para activar: Carga energía para una estocada rápida hacia adelante, seguida de un ataque descendente, causando masivo Daño Eléctrico. Al ejecutar la estocada, Yanagi cambia posturas y entra en el estado (Shinrabanshou), durando 15s. Por la duración de este estado, al seguir con un (Ataque Básico) subsiguiente desde el 5to golpe de un (Ataque Básico) u otras habilidades, el combo comenzará directamente desde el 3er golpe del (Ataque Básico). Si el ataque descendente golpea a un enemigo sufriendo una (Anomalía), activa un efecto especial de (Desorden), llamado (Desorden de Polaridad), causando daño igual al 15% del efecto de (Desorden) original más un {VALOR_3} adicional de la Maestría de Anomalía de Yanagi. (Desorden de Polaridad) no eliminará la (Anomalía) del objetivo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Armonía Celestial",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Cambia posturas y desata un corte poderoso a enemigos en frente, causando masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, puedes seguir inmediatamente con el 3er golpe del (Ataque Básico) de la postura actual.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Raiei Tenge",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Yanagi desata su potencial y entrega un corte poderoso a una gran área de enemigos en frente en un tiempo muy corto, seguido por un golpe de relámpago adicional, causando masivo Daño Eléctrico. Cuando el golpe de relámpago golpea a un enemigo afectado por una (Anomalía de Atributo), activa un efecto especial de (Desorden) llamado (Desorden de Polaridad). Esto causa DAÑO igual al 15% del efecto de (Desorden) original más un {VALOR_3} adicional de la Maestría de Anomalía de Yanagi. (Desorden de Polaridad) no eliminará la (Anomalía) del objetivo. El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, Yanagi puede seguir inmediatamente con el 3er golpe del (Ataque Básico) de la postura actual.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Eclipse Lunar",
      description: "Después de que Yanagi activa su (Técnica Especial EX), el multiplicador de DAÑO de (Desorden) aumenta en un {VALOR_1} cuando cualquier miembro del escuadrón aplica el efecto (Desorden) a un enemigo, durando 15s. Cuando su (Técnica Especial EX) golpea a un enemigo, el Daño Eléctrico de Yanagi contra el objetivo aumenta en un {VALOR_2} por 15s.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Gessou",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Anomalía) o comparte el mismo atributo: Después de cambiar posturas, cuando Yanagi golpea a un enemigo con (Ataque Básico: Kagura Tsukuyomi), la (Anomalía de Atributo Eléctrico) aumenta en un 45% por 8s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Hoja de la Elegancia",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta a enemigos en frente, causando Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, puedes seguir inmediatamente con el 3er golpe del (Ataque Básico) de la postura actual.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Inversión Radiante",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parrea el ataque enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Estocada del Sauce Llorón",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Cambia posturas, y rápidamente entrega múltiples cortes a enemigos en frente, causando Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, puedes seguir inmediatamente con el 3er golpe del (Ataque Básico) de la postura actual.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Conócete a ti mismo y al enemigo",
      description: "Cuando cualquier miembro del escuadrón inflige una (Anomalía) en un enemigo, Yanagi gana 1 acumulación de (Claridad), durando 15s, acumulándose hasta 3 veces. Las activaciones repetidas reinician la duración. Al ser golpeada por un ataque enemigo, Yanagi consume 1 acumulación de (Claridad) para ganar invulnerabilidad por 1s. Cuando Yanagi tiene 1 o más acumulaciones de (Claridad), su Maestría de Anomalía aumenta en 80.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Adaptabilidad Sobresaliente",
      description: "Durante su (Técnica Especial EX), la (Anomalía de Atributo Eléctrico) de la estocada rápida aumenta en un 20%. Mantener presionado el botón de (Técnica Especial) después de que una estocada rápida golpea a un enemigo consumirá 10 de Energía adicional para lanzar otra estocada. Si la Energía es insuficiente o se suelta el botón, el ataque automáticamente sigue con el ataque descendente. Cuando el ataque descendente golpea a un enemigo sufriendo una (Anomalía) y activa (Desorden de Polaridad), el multiplicador de DAÑO aumenta al 20% del efecto original de (Desorden). Cada estocada adicional aumenta este multiplicador en un 15%, hasta un máximo de 2 estocadas extra.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Gestión del Estilo Tsukishiro",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Gran Maestro",
      description: "Cuando Yanagi inflige Daño de Anomalía de Atributo en un enemigo, sufren el efecto (Expuesto), durando 15s. Los ataques en enemigos bajo el efecto (Expuesto) tendrán 16% de Tasa de PEN aumentada.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Otra Madre",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Sangre Inhumana",
      description: "Después de un ataque de estocada durante su (Técnica Especial EX), la duración del estado (Shinrabanshou) aumenta a 30s. Mientras el estado está activo, el DAÑO de (Técnica Especial EX) aumenta en un 20%. El número máximo de veces que el efecto de aumento de multiplicador de DAÑO adicional para (Desorden de Polaridad) en (Adaptabilidad Sobresaliente) puede ser activado aumenta a 4, y el costo de Energía para los primeros 4 ataques de estocada adicionales se reduce a la mitad.",
      tags: ["Mindscape 6"]
    }
  ]
};
