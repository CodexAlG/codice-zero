// Agent 30 - Detailed Stats and Skills
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
    statName: "crit rate",
    valuePerNode: 4.8
  },
  coreSkillScaling: [
    ["12.5%", "15%"],
    ["14.5%", "17.5%"],
    ["16.5%", "20%"],
    ["18.8%", "22.5%"],
    ["20.8%", "25%"],
    ["23%", "27.5%"],
    ["25%", "30%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Choque Penetrante",
      description: "Presiona [Icono Ataque] para activar: Realiza hasta cinco cortes hacia adelante, causando Daño Electrico. En el 3er golpe del (Ataque Basico), los enemigos son atraídos continuamente. Después de que el 4to ataque golpea al enemigo, presiona repetidamente o mantén [Icono Ataque] para atravesar rápidamente a los enemigos en frente hasta 5 veces.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Destello",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Torrente",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Realiza un corte horizontal hacia adelante, luego sigue con un ataque de estocada, causando Daño Electrico.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Contador de Destello Terrestre",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Realiza cortes consecutivos a los enemigos en frente, causando Daño Electrico. Al golpear, gana el estado (Sobrecarga de Voltaje) por 15s. Activaciones repetidas refrescan la duración. Mientras está en el estado (Sobrecarga de Voltaje), el rendimiento de evasión mejora. Adicionalmente, al usar (Ataque Basico)/(Ataque de Carrera)/(Contraataque de Evasion), si el objetivo enemigo tiene (Trueno Blanco), presionar [Icono Especial] cancelará inmediatamente la habilidad actual y lanzará (Tecnica Especial: Destello Azur). Mientras está en este estado, si el enemigo no tiene (Trueno Blanco), presiona [Icono Especial] para lanzar directamente (Tecnica Especial EX: Rayo Hendidor). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Trueno Celestial",
      description: "Presiona [Icono Especial] para activar: Se lanza diagonalmente hacia adelante, luego desata un corte en cruz, causando Daño Electrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Destello Azur",
      description: "Cuando los ataques de Soldier 0 - Anby golpean a un enemigo, aplican la marca (Estrella Plateada) y cargan al objetivo. Por cada tercio de carga, el enemigo recibe 1 acumulación de (Trueno Blanco), acumulándose hasta 3 veces. Cuando el enemigo tiene (Trueno Blanco), presiona [Icono Especial] para activar: Se lanza rápidamente hacia adelante, atravesando enemigos y causando múltiples golpes de Daño Electrico. Cuando la habilidad golpea a un enemigo, consumirá 1 acumulación de (Trueno Blanco) para activar un (Reverberación) que causa 1 instancia extra de Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Golpe de Trueno",
      description: "Cuando el daño adicional de (Trueno Blanco) se activa 3 veces en el mismo enemigo: Un rayo caerá en la ubicación del enemigo, causando Daño Electrico a los enemigos en el área. Este DAÑO es considerado DAÑO de (Reverberación).",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Destello Azur - Limite",
      description: "Cuando el DAÑO de (Tecnica Especial: Golpe de Trueno) es activado: Si (Tecnica Especial EX: Rayo Hendidor) o (Tecnica Especial: Destello Azur) está siendo usada actualmente, entonces (Tecnica Especial: Destello Azur - Limite) se activará automáticamente cuando la habilidad actual termine, desatando una ráfaga de cortes que causan múltiples instancias de Daño Electrico. Esta habilidad cuenta como una (Reverberación). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Rayo Hendidor",
      description: "Con suficiente Energía, mantén [Icono Especial EX] para activar: Combina sus espadas gemelas y las lanza hacia adelante para un corte de alta velocidad, causando masivo Daño Electrico. Cuando la habilidad golpea a un enemigo, cargará completamente (Estrella Plateada). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Destello Nuboso",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta repetidamente a los enemigos en frente, causando Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Oleada de Contraataque",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Golpe Conductor",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Se lanza hacia adelante y desata una serie de cortes a los enemigos adelante, causando Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Golpe de Trueno Saltarín",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Salta hacia adelante, luego se lanza hacia abajo rápidamente y realiza un corte en cruz, causando masivo Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Golpe del Vacío",
      description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Realiza una poderosa serie de cortes en un área grande en frente, seguida de un golpe de rayo, causando masivo Daño Electrico. Cuando la habilidad golpea a un enemigo, cargará completamente (Estrella Plateada). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Brecha de Voltaje",
      description: "Soldier 0 - Anby causa un {VALOR_1} más de DAÑO a enemigos marcados con (Estrella Plateada). Cuando un enemigo está afligido con (Estrella Plateada), recibe DAÑO CRIT adicional de (Reverberaciones), igual al {VALOR_2} del Daño CRIT de Soldier 0 - Anby. Cuando está marcado con una (Estrella Plateada), el DAÑO de las (Reverberaciones) de aliados acumula carga de (Estrella Plateada) en el enemigo. Este efecto puede activarse una vez cada 5s. El bono de DAÑO CRIT de (Reverberación) de (Estrella Plateada) aumenta adicionalmente en un 5% del Daño CRIT de Soldier 0 - Anby. Cuando un enemigo afligido con (Trueno Blanco) es derrotado, automáticamente desata (Tecnica Especial: Golpe de Trueno) en el objetivo enemigo más cercano.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Oleada de Voltaje",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Aturdidor) o (Soporte): La Probabilidad de CRIT de Soldier 0 - Anby aumenta en un 10%. Cuando el personaje activo actual es Soldier 0 - Anby, las (Reverberaciones) de todos los miembros del escuadrón causan un 25% más de DAÑO a enemigos marcados con (Estrella Plateada). El (Ataque en Cadena) y la (Definitiva) de Soldier 0 - Anby son tratados como DAÑO de (Reverberación).",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Carga Estática",
      description: "Cuando Soldier 0 - Anby usa una (Tecnica Especial EX) para golpear a un enemigo, activa el DAÑO adicional de (Trueno Blanco) 3 veces. Este efecto no consume ninguna acumulación de (Trueno Blanco).",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Protocolo a Prueba de Fallos",
      description: "La Probabilidad de CRIT de Soldier 0 - Anby aumenta en un 12%. Cuando usa su (Definitiva), gana 6 acumulaciones de (Grito del Trueno) (máximo 6 acumulaciones). Con (Grito del Trueno), al usar (Tecnica Especial: Destello Azur) para golpear a un enemigo con (Trueno Blanco), consumirá 1 acumulación de (Grito del Trueno) en su lugar. Solo 1 acumulación de (Grito del Trueno) será consumida cuando un solo uso de una habilidad golpea múltiples enemigos, y consumir (Grito del Trueno) aún activará el DAÑO adicional de (Trueno Blanco). Después de activar el potencial, cada 3 acumulaciones de (Grito del Trueno) consumidas, la siguiente (Tecnica Especial: Destello Azur - Limite) se activará más rápido.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Gloria Pasada",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Reverberación Plateada",
      description: "Al golpear a un enemigo marcado con (Estrella Plateada), Soldier 0 - Anby ignora el 12% de la RES Electrica del objetivo.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Corte del Director",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Protagonista Precuela",
      description: "Al activar 6 instancias del DAÑO adicional de (Trueno Blanco), un vórtice electromagnético será generado, causando 1,000% del ATK de Soldier 0 - Anby como Daño Electrico contra el objetivo y los enemigos circundantes. Este DAÑO es considerado DAÑO de (Reverberación).",
      tags: ["Mindscape 6"]
    }
  ]

};
