// Agent 39 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 617,
      max: 7673
    },
    atk: {
      min: 134,
      max: 929
    },
    def: {
      min: 49,
      max: 612
    },
    impact: 93,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "94",
    anomalyMastery: "93",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit dmg",
    valuePerNode: 9.6
  },
  coreSkillScaling: [
    ["100", "15%", "100", "15%", "12.5%"],
    ["225", "17.5%", "225", "17.5%", "14.5%"],
    ["350", "20%", "350", "20%", "16.5%"],
    ["475", "22.5%", "475", "22.5%", "18.5%"],
    ["500", "25%", "500", "25%", "20.5%"],
    ["725", "27.5%", "725", "27.5%", "22.5%"],
    ["1000", "30%", "1000", "30%", "25%"]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Danza de Rueda de Crisantemo",
      description: "Presiona [Icono Ataque] para activar: Realiza hasta 4 ataques hacia adelante, causando Daño Fisico en los primeros dos golpes y Daño Electrico en el tercer y cuarto golpe. Si es atacada entre la retirada del 3er golpe y antes del 4to golpe, activa una evasión automática.",
      tags: ["Eléctrico", "Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Petalos Cayendo - Masacre",
      description: "Después del 4to golpe de un (Ataque Basico), (Contraataque de Evasion), (Asistencia Rapida) o (Ataque de Asistencia), mantén o presiona [Icono Especial] para activar: Invoca el mecha para realizar un ataque de puñetazo cargado, causando masivo Daño Electrico. Cuando (Carga de Acero) llega a 120, gana una oportunidad para activar rápidamente (Ataque Basico: Petalos Cayendo - Masacre) manteniendo [Icono Especial]. Este efecto expira cuando (Carga de Acero) es menor a 120 o después de usar el método anterior para activar (Ataque Basico: Petalos Cayendo - Masacre) una vez. No acumula (Carga de Acero) al golpear. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Petalos Cayendo - Caida",
      description: "Seed tiene (Carga de Acero), la cual puede acumular al golpear enemigos con sus habilidades. (Carga de Acero) tiene un valor máximo de 150, y un valor inicial de 60. Al llegar a 120 de (Carga de Acero) y activar (Ataque Basico: Petalos Cayendo - Masacre) o (Definitiva: Jardin de Relojeria - ¡Florecer!), presiona o mantén [Icono Especial] para consumir 60 de (Carga de Acero) y desatar (Ataque Basico: Petalos Cayendo - Caida Primera Forma), luego consume automáticamente 60 de (Carga de Acero) para seguir con (Ataque Basico: Petalos Cayendo - Caida Segunda Forma). Pilota el mecha para disparar tiros de barrido y realizar un golpe de salto, causando masivo Daño Electrico. No acumula (Carga de Acero) al golpear. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Corriendo sobre Petalos",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Evasión: Danza de Rueda Magnetica",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Arroja ruedas de acero hacia adelante, causando Daño Fisico.",
      tags: ["Físico", "Evasión", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Estallido de Flores",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Desata un aluvión de láseres a los enemigos en frente, causando Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Marchito en Escarcha",
      description: "Presiona [Icono Especial] para activar: Arroja una rueda de acero que traza un camino curvo, causando Daño Electrico.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Lluvia de Petalos de Hierro",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Entra en modo de vuelo, donde Seed puede moverse en cuatro direcciones, y desata un aluvión continuo de misiles, causando masivo Daño Electrico. Mantén [Icono Especial EX] para extender la duración del aluvión mientras consume Energía continuamente. Durante el vuelo, suelta [Icono Especial EX] para activar (Tecnica Especial EX: Lluvia de Petalos de Hierro - Lejos). Al consumir 60 puntos de Energía en un vuelo, activa automáticamente (Ataque Basico: Petalos Cayendo - Masacre). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Lluvia de Petalos de Hierro - Lejos",
      description: "Durante (Tecnica Especial EX: Lluvia de Petalos de Hierro), suelta [Icono Especial EX] para activar: Desata fuego rápido de cañón, causando Daño Electrico. No acumula (Carga de Acero) al golpear. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Aluvion de Flores Lloviendo",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Desata un aluvión de láseres a los enemigos en frente, causando Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia Rápida", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Barrera Brotante",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia Defensiva", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Estallido de Nucleo Carmesi",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Desata ataques continuos de torretas flotantes a los enemigos en frente, causando Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque de Asistencia", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Protocolo de Cadena de Flores",
      description: "El compañero de equipo de (Ataque) con el ATK inicial más alto es considerado la (Vanguardia) de Seed. Cuando la (Vanguardia) desata una (Tecnica Especial EX), Seed gana el estado (Embestida), aumentando el ATK de Seed en {VALOR_1} y el Daño CRIT en un {VALOR_2}. Cuando Seed desata una (Tecnica Especial EX), la (Vanguardia) gana el estado (Golpe Directo), aumentando el ATK de la (Vanguardia) en {VALOR_3} y el Daño CRIT en un {VALOR_4}. Cuando (Golpe Directo) y (Embestida) están ambos activos, Seed y la (Vanguardia) ganan simultáneamente el estado (Asedio), aumentando el DAÑO infligido en un {VALOR_5}. Los efectos de (Embestida), (Golpe Directo) y (Asedio) pueden tener efecto cuando el personaje es el personaje activo actual. Al cambiar a inactivo, los efectos permanecen en el personaje que sale del campo por 3s después del cambio. Cuando el personaje regresa a ser el personaje activo, los efectos se reactivan. Al entrar al campo de batalla con una (Vanguardia), Seed gana inmediatamente los estados (Embestida) y (Asedio), mientras la (Vanguardia) gana inmediatamente los estados (Golpe Directo) y (Asedio). Los estados (Golpe Directo) y (Embestida) duran 40s, y activaciones repetidas refrescan la duración. Cuando la (Vanguardia) consume Energía como el personaje activo o cuando Seed consume Energía, por cada 1 punto de Energía consumido, Seed recupera 0.5 puntos de (Carga de Acero).",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Golpe Sorpresa",
      description: "Cuando otro personaje de (Ataque) está en tu escuadrón: Cuando Seed inflige DAÑO como el personaje activo, restaura 2 de Energía a la (Vanguardia). Este efecto puede activarse una vez cada 1s. El (Ataque Basico: Petalos Cayendo - Masacre), (Ataque Basico: Petalos Cayendo - Caida) y (Definitiva: Jardin de Relojeria - ¡Florecer!) de Seed infligen 30% de DAÑO aumentado e ignoran un 25% de la RES Electrica enemiga.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Tempestad de Petalos Helados",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Invoca a su mecha para protección, luego lanza disparos de cañón y un aluvión de misiles, causando masivo Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Jardin de Relojeria - ¡Florecer!",
      description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Seed pilotará el mecha personalmente, haciendo llover misiles y una lluvia de meteoros de cohetes, luego realizando un golpe de salto, causando masivo Daño Electrico. Después de usar esta habilidad, acumula 60 de (Carga de Acero). No acumula (Carga de Acero) al golpear. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "\"Periodo de Hibernacion\"",
      description: "Cuando la (Carga de Acero) de Seed alcanza 100, (Ataque Basico: Petalos Cayendo - Caida) puede ser activado, y el total de (Carga de Acero) consumido se reduce a 100. La cantidad de (Carga de Acero) requerida para ganar una oportunidad para liberar rápidamente (Ataque Basico: Petalos Cayendo - Masacre) se reduce a 100. Acumula 40/20 (Carga de Acero) adicional al entrar al campo de batalla/usar (Definitiva). Aumenta el Daño CRIT de (Ataque Basico: Petalos Cayendo - Caida) en un 30%.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "\"Tecnica de Absorcion de Luz\"",
      description: "Cuando (Asedio) está activo para un Agente, el DAÑO de ese Agente ignora un 20% de la DEF. Al activar (Tecnica Especial EX: Lluvia de Petalos de Hierro), después de consumir un total de 60 de Energía, Seed puede continuar consumiendo Energía para extender la duración de la habilidad hasta que el botón sea soltado o un total de 120 de Energía sea consumido. Por cada 5 de Energía consumida por (Tecnica Especial EX: Lluvia de Petalos de Hierro), el DAÑO del siguiente (Ataque Basico: Petalos Cayendo - Masacre) aumenta en un 5%.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "\"Una Historia de Brotes\"",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "\"Melodia Fragante\"",
      description: "Cuando el efecto de estado (Asedio) de Seed está activo, su Tasa de Generación de Decibelios aumenta en un 10%, y el DAÑO de (Definitiva) aumenta en un 20%.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "\"Hora de Florecer\"",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "\"Teoria del Corazon\"",
      description: "El Daño CRIT de Seed aumenta en un 50%. Al usar (Ataque Basico: Petalos Cayendo - Masacre), dispara 3 rayos láser adicionales, cada uno causando 165% del ATK como DAÑO. Este efecto puede activarse una vez cada 3s.",
      tags: ["Mindscape 6"]
    }
  ]
};
