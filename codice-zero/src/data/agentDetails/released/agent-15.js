// Agent 15 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 645,
      max: 8025
    },
    atk: {
      min: 96,
      max: 665
    },
    def: {
      min: 48,
      max: 597
    },
    impact: 86,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "93",
    anomalyMastery: "96",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "energy",
    valuePerNode: 0.12
  },
  materials: {
    weeklyBoss: {
      name: "Zapatos de Baile Finales",
      icon: "Item_Finale_Dance_Shoes.webp",
    },
    eliteBoss: {
      name: "Datos de Dimensiones Superiores: Obituario Asesino",
      icon: "Item_Higher_Dimensional_Data_Murderous_Obituary.webp",
    }
  },
  coreSkillScaling: [
    ["10%"],
    ["12%"],
    ["14%"],
    ["16%"],
    ["18%"],
    ["19%"],
    ["20%"], // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Haciendo Pasteles de Arroz",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 3 ataques, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Haciendo Pasteles de Arroz (Bandera Escarchada)",
      description: "Cuando (Bandera Escarchada) está activa, presiona [Icono Ataque] para activar: Desata hasta 3 ataques más rápidos en frente, infligiendo Daño Hielo.",
      tags: ["Hielo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Tomar un Bocado",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: 50/50",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta enemigos en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: 50/50 (Bandera Escarchada)",
      description: "Cuando (Bandera Escarchada) está activa, presiona [Icono Ataque] durante una Evasión para activar: Corta enemigos en frente, infligiendo Daño Hielo.",
      tags: ["Hielo", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: ¡Lejos de mi Merienda!",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Corta enemigos en frente, infligiendo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Bento Enfriador",
      description: "Presiona [Icono Especial] para activar: Soukaku libera una corriente de viento frente a ella y desata su movimiento final, infligiendo Daño Hielo. Durante la activación de la habilidad, el nivel de Anti-Interrupción aumenta, y el Daño recibido se reduce en un 40%. Mantener [Icono Especial] mientras usa esta habilidad permite una transición rápida a (Ondear la Bandera).",
      tags: ["Hielo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Ahuyentando Mosquitos",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Libera corrientes de viento de rango extendido frente a ella, infligiendo masivo Daño Hielo. Esta habilidad puede activarse consecutivamente presionando repetidamente. Cada uso consume una cantidad específica de Energía. Cuando la Energía de Soukaku se agota, o dejas de presionar el botón, desata un poderoso movimiento final que inflige masivo Daño Hielo. Durante la activación de la habilidad, el nivel de Anti-Interrupción aumenta, y el Daño recibido se reduce en un 40%. Mantener [Icono Especial] mientras usa esta habilidad permite una transición rápida a (Ondear la Bandera).",
      tags: ["Hielo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: ¡Reunión!",
      description: "Mantén [Icono Especial] para activar: Soukaku clava su arma en el suelo, la transforma en una bandera, y lanza (Ondear la Bandera), infligiendo Daño Hielo. Golpear a un enemigo con (Ondear la Bandera) activa una (Asistencia Rápida). Presionar [Icono Ataque] o [Icono Especial] después de (Ondear la Bandera) activa un Técnica Especial mientras retrae la bandera, infligiendo Daño Hielo. Si Soukaku posee 3 acumulaciones de (Vórtice) al usar (Ondear la Bandera), consume las 3 acumulaciones y entra en el estado (Bandera Escarchada). En el estado (Bandera Escarchada), puede desatar un (Ataque Básico) mejorado o un (Ataque de Carrera) mejorado, infligiendo masivo Daño Hielo. Este efecto puede durar hasta 45s o acumularse hasta 6 veces. El arma de Soukaku gana (Vórtices) en las siguientes circunstancias:\nGana 1 acumulación de (Vórtice) al lanzar una (Técnica Especial EX),\nGana 1 acumulación de (Vórtice) al lanzar un (Ataque en Cadena),\nGana 3 acumulaciones de (Vórtice) al lanzar una (Definitiva).\nSoukaku puede acumular un máximo de 3 acumulaciones de (Vórtice).",
      tags: ["Hielo", "Técnica Especial"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Corte de Pudín",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Soukaku desata rápidamente una serie de golpes a enemigos en frente de ella y sigue con (Ondear la Bandera), infligiendo masivo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Corte de Pudín Jumbo",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Soukaku desata rápidamente una serie extendida de golpes a enemigos en frente de ella y sigue con (Ondear la Bandera), infligiendo masivo Daño Hielo. Al activar esta habilidad, Soukaku entra en el estado (Máscara), aumentando su Tasa Crítica en un 15% por 15s. Al activar esta habilidad, otros miembros del escuadrón recuperan 10 de Energía. El siguiente personaje en cambiar gana 20 de Energía adicional. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Bandera de Hoja",
      description: "Cuando Soukaku lanza (Ondear la Bandera), su ATK aumenta en un {VALOR_1} de su ATK inicial, hasta 500, por 22s. Cuando consume (Vórtice) durante (Ondear la Bandera), el aumento de ATK se duplica, hasta un máximo de 1,000. Este buff puede pasarse a personajes que cambian vía (Asistencias Rápidas) o (Ataques en Cadena) activados por (Ondear la Bandera), y refresca la duración del buff.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Menú de Grupo",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Cuando Soukaku consume (Vórtice) para activar (Ondear la Bandera), el Daño Hielo de todos los miembros del escuadrón aumenta en un 20% por 22s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Un Juego para Dos",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta enemigos en frente, infligiendo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Tácticas de Guardia",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Esta habilidad sobresale en bloquear ataques enemigos y reduce el consumo de (Puntos de Asistencia) cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Golpe de Barrido",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Carga y golpea enemigos en frente, infligiendo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad. Mantener [Icono Ataque] mientras usa esta habilidad permite una transición rápida a (Ondear la Bandera).",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Corriente Edificante",
      description: "Cuando Soukaku activa (Pasiva Central: Bandera de Hoja) o (Habilidad Adicional: Menú de Grupo), la duración del buff aumenta en 8s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Módulo de Carga Experimental",
      description: "Cuando el (Ataque Básico), (Ataque de Carrera), (Contraataque de Evasión), o (Asistencia Rápida) de Soukaku golpea a un enemigo, hay un 15% de probabilidad de que gane 1 acumulación de (Vórtice), activándose hasta una vez por segundo. Cuando (Vórtice) alcanza el máximo de acumulaciones, cualquier acumulación adicional otorga a Soukaku 1.2 de Energía en su lugar.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Subsidio de Comida por Asistencia",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Hipotermia",
      description: "Si un enemigo es golpeado por (Ondear la Bandera), la RES Hielo del objetivo se reduce en un 10% por 8s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Meriendas Nocturnas",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Viento del Norte",
      description: "Mientras está en el estado (Bandera Escarchada), el número de (Ataques Básicos) mejorados y (Ataques de Carrera) mejorados usables aumenta a 12, y también infligen un 45% más de Daño.",
      tags: ["Mindscape 6"]
    }
  ]
};
