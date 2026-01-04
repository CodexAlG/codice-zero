// Agent 21 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 766,
      max: 9526
    },
    atk: {
      min: 101,
      max: 711
    },
    def: {
      min: 61,
      max: 753
    },
    impact: 105,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "87",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "impact",
    valuePerNode: 6
  },
  coreSkillScaling: [
    ["300%", "200", "40", "20.0%", "100.0%"],
    ["500%", "400", "135", "20.0%", "100.0%"],
    ["700%", "700", "240", "20.0%", "100.0%"],
    ["900%", "900", "400", "20.0%", "100.0%"],
    ["1100%", "1100", "650", "20.0%", "100.0%"],
    ["1300%", "1300", "900", "20.0%", "100.0%"],
    ["1400%", "1400", "100", "20.0%", "100.0%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Tajo Devastador",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 6 cortes hacia adelante, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Callejón sin Salida",
      description: "Cuando hay suficientes Puntos de Asistencia, mantén presionado [Icono Ataque] para activar: Consume 1 Punto de Asistencia para lanzar el escudo y atacar a los enemigos cercanos en todas direcciones, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: A la Deriva",
      description: "Presiona [Icono Dodges] para activar: Un esquive rápido. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Carga de Cerdo",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Golpea hacia adelante con el escudo, infligiendo Daño Físico. Durante la activación de la habilidad, el Daño recibido se reduce en un 40%, y cuando es atacada por un enemigo, Caesar bloquea con el escudo y es retrocedida. Después de eso, presiona [Icono Especial] o [Icono Especial EX] para activar (Represalia) y activar (Técnica Especial: Embestida Rugiente) o (Técnica Especial EX: Golpe de Escudo Abrumador).",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Ojo por Ojo",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Apuñala a los enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Cambio de Carril",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Embiste a los enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Escudo Égida",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Esta habilidad destaca en bloquear (Parry) ataques enemigos y reduce el consumo de Puntos de Asistencia cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Espada de Ayuda",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Lanza el escudo hacia adelante, desatando un poderoso ataque giratorio sobre los enemigos en frente, seguido de un corte que inflige Daño Físico. Después de activar la habilidad, presiona [Icono Especial] o [Icono Especial EX] para activar una (Represalia), activando (Técnica Especial: Embestida Rugiente) o (Técnica Especial EX: Golpe de Escudo Abrumador). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Golpe de Escudo de Choque",
      description: "Presiona [Icono Especial] para activar: Golpea hacia adelante con el escudo, infligiendo Daño Físico. Si Caesar es golpeada por un enemigo al comienzo de la activación de la habilidad, activará un (Bloqueo Perfecto), negando el daño una vez y siguiendo automáticamente con una (Técnica Especial: Embestida Rugiente). Después de usar la habilidad, Caesar entra en una postura de guardia, reduciendo el daño entrante en un 40%. Cuando es atacada por un enemigo, Caesar bloquea con el escudo y es ligeramente retrocedida. Presiona [Icono Especial] o [Icono Especial EX] para activar (Represalia), activando (Técnica Especial: Embestida Rugiente) o (Técnica Especial EX: Golpe de Escudo Abrumador). Cuando se activa (Represalia), Caesar es invulnerable durante el uso de la habilidad.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Embestida Rugiente",
      description: "Después de activar (Técnica Especial: Golpe de Escudo de Choque), presiona [Icono Especial] para activar: Embiste hacia adelante, infligiendo Daño Físico. Si no se activa (Bloqueo Perfecto) o (Represalia), el nivel de Anti-Interrupción aumenta durante el uso de esta habilidad. El personaje es invulnerable mientras usa esta habilidad cuando se activa (Bloqueo Perfecto) o (Represalia).",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Contraataque de Bloqueo",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Golpea hacia adelante con el escudo, seguido de una poderosa embestida, infligiendo daño masivo de Daño Físico. Si Caesar es golpeada por un enemigo al comienzo de la activación de la habilidad o se activa una (Interrupción) con el golpe de escudo, activará (Bloqueo Perfecto), negando el daño entrante una vez y contraatacando con un ataque de escudo. Después de activar (Bloqueo Perfecto), presiona [Icono Especial EX] para activar (Técnica Especial EX: Golpe de Escudo Abrumador) sin consumir energía. Después de usar la habilidad, Caesar entra en una postura de guardia, reduciendo el daño entrante en un 40%. Cuando es atacada por un enemigo, Caesar bloquea el ataque y es retrocedida. Presiona [Icono Especial] o [Icono Especial EX] para activar (Represalia) y activar (Técnica Especial: Embestida Rugiente) o (Técnica Especial EX: Golpe de Escudo Abrumador). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Golpe de Escudo Abrumador",
      description: "Después de activar (Técnica Especial EX: Contraataque de Bloqueo), con suficiente energía, presiona [Icono Especial EX] para activar: Golpea hacia adelante con el escudo, infligiendo daño masivo de Daño Físico. Si Caesar es golpeada por un enemigo al comienzo de la activación de la habilidad o se activa una (Interrupción) con el golpe de escudo, activará (Bloqueo Perfecto), negando el daño entrante una vez y recuperando la Energía usada para activar la habilidad. Cuando la habilidad se activa a través de (Bloqueo Perfecto) o (Represalia), no puede activar (Bloqueo Perfecto) nuevamente. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial",
      name: "Cambio de Postura",
      description: "Cuando Caesar activa un (Bloqueo Perfecto), (Represalia), o (Asistencia Defensiva), su Impacto aumenta en un {VALOR_4} por 3s.",
      tags: ["Técnica Especial"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Golpe de Furia en la Carretera",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un poderoso golpe descendente a los enemigos en frente, infligiendo daño masivo de Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Aplastamiento Salvaje",
      description: "Cuando el Nivel de Decibelios está al [Máximo], presiona [Icono Definitiva] para activar: Lanza el escudo hacia adelante, desatando un poderoso ataque giratorio sobre los enemigos en frente, seguido de un golpe descendente, infligiendo daño masivo de Daño Físico. Al golpear enemigos con escudo, el Aturdimiento infligido aumenta en un {VALOR_5}. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Barrera de Resiliencia",
      description: "Cuando Caesar activa (Técnica Especial EX: Contraataque de Bloqueo), (Ataque en Cadena), (Definitiva), o desencadena (Técnica Especial EX: Golpe de Escudo Abrumador) a través de (Represalia), ella otorga un escudo (Égida Radiante) a todos los miembros del escuadrón igual al {VALOR_1} de su Impacto base + {VALOR_2}. El escudo dura 60s. Cualquier instancia singular de Daño no excederá el valor del escudo. Mientras (Égida Radiante) está activa, el nivel de anti-interrupción del portador del escudo aumenta. Mientras (Égida Radiante) está activa, el ATK del portador del escudo aumenta en {VALOR_3}. Después de que (Égida Radiante) expira, este buff permanece por 5s adicionales.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Espíritu de Batalla",
      description: "Cuando otro personaje en tu escuadrón puede activar (Asistencia Defensiva) o comparte la misma Facción: Cuando Caesar activa (Bloqueo Perfecto), (Represalia), (Asistencia Defensiva), o (Ataque Básico: Callejón sin Salida), aplica un efecto de Debuff a los enemigos dentro de un radio de 7m, aumentando el daño que reciben en un 25% por 30s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Avance de Lanza",
      description: "Cuando Caesar entra al campo como personaje activo, instantáneamente otorga escudo (Égida Radiante) a todos los miembros del escuadrón. Este efecto puede activarse una vez cada 300s. Mientras (Égida Radiante) está activa, los enemigos dentro de un radio de 5m del portador del escudo sufren una reducción del 15% de RES a Todo-Atributo.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Legado de las Tierras Lejanas",
      description: "Mientras (Égida Radiante) de (Pasiva Principal: Barrera de Resiliencia) está activa, la Tasa de Recuperación de Energía de Caesar aumenta en un 10%, y el aumento de ATK del portador del escudo se incrementa al 150% de su valor original.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Confianza Absoluta",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Aries el Ariete",
      description: "Cuando Caesar usa un (Ataque en Cadena) o (Definitiva), gana 3 Puntos de Asistencia adicionales. Si su Energía está por debajo de 20, puede activar (Técnica Especial EX: Golpe de Escudo Abrumador) con 1 Punto de Asistencia en su lugar. Esta sustitución puede activarse una vez cada 5s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Conquista Romántica",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Voluntad del Señor Supremo",
      description: "(Técnica Especial EX: Golpe de Escudo Abrumador) y (Ataque de Asistencia: Espada de Ayuda) garantizan un golpe crítico. El daño de golpe crítico aumenta en un 50% e inflige un 50% adicional de DAÑO al objetivo principal. Cuando Caesar usa (Técnica Especial EX: Golpe de Escudo Abrumador) o (Ataque de Asistencia: Espada de Ayuda), su Tasa Crítica aumenta en un 30% y su Daño Crítico aumenta en un 60% por 15s.",
      tags: ["Mindscape 6"]
    }
  ]
};
