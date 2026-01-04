
export default {
  baseStats: {
    hp: {
      min: 626,
      max: 7788
    },
    atk: {
      min: 127,
      max: 880
    },
    def: {
      min: 49,
      max: 606
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
    ["20%", "0.1%"], // CERo
    ["25%", "0.11%"], // A
    ["28%", "0.12%"], // B
    ["31%", "0.13%"], // C
    ["34%", "0.14%"], // D
    ["37%", "0.15%"], // E
    ["40%", "0.16%"] // F
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Cuchillas Danzantes",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 6 ataques hacia delante, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Pasión",
      description: "Cuando Jane activa una (Evasión Perfecta), (Asistencia Defensiva), o realiza un movimiento que inflige Daño al enemigo, ella acumula (Corriente de Pasión). Al alcanzar el máximo de (Corriente de Pasión), Jane entra en el estado de (Pasión). Mientras está en el estado de (Pasión), la Tasa de Acumulación de Anomalía Física de Jane aumenta en un 25%. Adicionalmente, si la Maestría de Anomalía de Jane excede 120, cada punto extra aumenta su ATK en 2, hasta un máximo de 600. En el estado de (Pasión), Jane inflige daño letal al consumir (Corriente de Pasión). Activar una (Evasión Perfecta) o (Asistencia Defensiva) regenera (Corriente de Pasión). Jane sale del estado de (Pasión) cuando toda su (Corriente de Pasión) se consume.",
      tags: ["Pasiva"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Salto Salchow",
      description: "Entrar en el estado de (Pasión) otorga a Jane un uso de (Ataque Básico: Salto Salchow). Cuando esté disponible, mantén [Icono Ataque] para activar: Lanza rápidos ataques consecutivos hacia delante, seguido de un Movimiento Final, infligiendo Daño Físico. Mantén el botón durante los ataques consecutivos para extender la duración de la habilidad. Suelta [Icono Ataque] para activar el Movimiento Final antes. El nivel de Anti-Interrupción aumenta durante los ataques consecutivos, y Jane recibe un 40% menos de Daño. Jane es invulnerable durante el Movimiento Final. Usar y dañar a un enemigo con (Ataque Básico: Salto Salchow) mientras está en el estado de (Pasión) genera (Corriente de Pasión).",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Fantasma",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida y deslizante. El personaje es invulnerable mientras usa esta habilidad. Jane tiene una evasión extra. Antes de entrar en el estado de (Pasión), alterna entre las dos (evasiones). Después de entrar en el estado de (Pasión), Jane puede pasar a través de enemigos al evadir hacia delante.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Salto de Borde",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Si después de la primera evasión, lanza un tajo ascendente hacia delante, infligiendo Daño Físico. Si después de la segunda evasión, realiza cortes consecutivos en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Estocada Fantasma",
      description: "Mientras está en el estado de (Pasión), presiona [Icono Ataque] durante una evasión para activar: Lanza tres rápidos cortes en carrera hacia delante, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Sombra Veloz",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Si tras la primera evasión, desata múltiples cortes a los enemigos en frente, seguido de una estocada descendente, infligiendo Daño Físico. Si tras la segunda evasión, salta y entrega tres ataques consecutivos a los enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Danza de Sombra Veloz",
      description: "Mientras está en el estado de (Pasión), presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Corta enemigos en frente rápidamente múltiples veces, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Espina Oscura",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Desata múltiples cortes a los enemigos en frente, seguido de una estocada descendente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Salto Lutz",
      description: "Mientras está en el estado de (Pasión), cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta enemigos en frente rápidamente múltiples veces, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Última Defensa",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Barrido Vendaval",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Salta y corta velozmente al enemigo, luego ejecuta un corte amplio de barrido a través de una gran área en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Barrido Aéreo",
      description: "Presiona [Icono Especial] para activar: Salta al aire para lanzar patadas consecutivas hacia delante, luego barre a través, infligiendo Daño Físico. El nivel de Anti-Interrupción aumenta durante el uso de esta habilidad.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Barrido Aéreo - Limpieza",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Salta al aire para lanzar múltiples patadas consecutivas hacia delante, luego barre a través, infligiendo masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Flores del Pecado",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Teje entre y corta a los enemigos en una gran área en frente, infligiendo masivo Daño Físico. Jane entra directamente en el estado de (Pasión) al activar la habilidad, y gana el máximo de (Corriente de Pasión). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Telón Final",
      description: "Cuando el Nivel de Decibelios está al [Máximo], presiona [Icono Definitiva] para activar: Teje entre y corta a los enemigos con un poderoso ataque en una gran área en frente, seguido de un Movimiento Final, infligiendo masivo Daño Físico. Jane entra directamente en el estado de (Pasión) al activar la habilidad, y gana el máximo de (Corriente de Pasión). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Perspicacia",
      description: "Cuando los ataques de Jane golpean a un enemigo, hace que entren en el estado de (Roído), durando 10s. Si cualquier miembro del escuadrón activa (Asalto) en un enemigo en el estado de (Roído) y causa el efecto de (Retroceso), la duración del efecto de (Retroceso) se extiende por 5s. El Daño de (Asalto) tiene una probabilidad de activar un golpe crítico contra enemigos en el estado de (Roído), con una Probabilidad de Crit base del {VALOR_1} y Daño Crítico del 50%. Cada punto de la Maestría de Anomalía de Jane aumenta adicionalmente esta Probabilidad de Crit en un {VALOR_2}.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Punto Doloroso",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Anomalía) o comparte la misma Facción: La Tasa de Acumulación de Anomalía Física de Jane aumenta en un 20%. Cuando el enemigo ya sufre de una Anomalía de Atributo, la Acumulación de Anomalía Física de Jane hacia el objetivo aumenta en un 15% adicional.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Consejero Criminal",
      description: "El máximo de usos de (Ataque Básico: Salto Salchow) aumenta en uno. Mientras está en el estado de (Pasión), la Tasa de Acumulación de Anomalía Física de Jane aumenta en un 15% extra y cada punto de la Maestría de Anomalía de Jane aumenta su DMG en un 0.1%, hasta un aumento máximo del 30%.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Adaptarse al Entorno",
      description: "Cuando el ataque de Jane golpea a un enemigo en el estado de (Roído), o cuando cualquier miembro del escuadrón activa (Asalto) en un enemigo en el estado de (Roído), ignoran el 15% de la DEF del enemigo. Además, cuando el Daño de (Asalto) activa un golpe crítico, el Daño Crítico infligido aumenta en un 50% adicional.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Anonimato",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Adaptarse y Prosperar",
      description: "Cuando cualquier miembro del escuadrón activa los efectos de (Asalto) o (Desorden), aumenta el Daño de Anomalía de Atributo de todos los miembros del escuadrón en un 18%, durando 15s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Acumulador Compulsivo",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Técnica \"Sospechosa\"",
      description: "Mientras está en el estado de (Pasión), la Probabilidad de Crit de Jane aumenta en un 20%, y el Daño Crítico en un 40%. Después de que cualquier miembro del escuadrón inflige (Asalto), Jane entra instantáneamente en el estado de (Pasión) y gana el máximo de (Corriente de Pasión). Cuando esa instancia de (Asalto) activa un golpe crítico, Jane realiza un ataque adicional al objetivo, infligiendo Daño Físico igual al 1,600% de su Maestría de Anomalía.",
      tags: ["Mindscape 6"]
    }
  ]
};
