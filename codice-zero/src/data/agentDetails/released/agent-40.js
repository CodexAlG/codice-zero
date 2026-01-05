// Agent 40 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 626,
      max: 7788
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
    anomalyRate: "92",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  coreSkillScaling: [
    ["12.5%", "42.5%", "130", "340"],
    ["14.6%", "49.6%", "155", "400"],
    ["16.7%", "56.7%", "180", "460"],
    ["18.8%", "63.7%", "205", "520"],
    ["20.8%", "70.8%", "230", "580"],
    ["22.9%", "77.9%", "255", "640"],
    ["25%", "85%", "280", "700"]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Lanzallamas de Alta Presion",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 5 ataques en frente, seguidos de un poderoso golpe de hoja de fuego, causando Daño Fisico y Daño Fuego.",
      tags: ["Fuego", "Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Llamas Parpadeantes",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Evasión: Comando de Prisa",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Realiza un ataque rápido hacia adelante, causando Daño Fisico.",
      tags: ["Físico", "Evasión", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Oportunidad de Contraataque",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Lanza una serie de ataques contra los enemigos en frente, causando Daño Fisico y Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Físico", "Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Camara Abrasadora",
      description: "Presiona [Icono Especial] para activar: Empuja hacia adelante y realiza un ataque de cola, causando Daño Fuego. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Destello Corrosivo",
      description: "Se activa automáticamente durante ataques aliados: Desata 4 ataques de láser de Réplica, causando Daño Fuego. Se activa una vez cada 5s. Al activar esta habilidad, restaura 20 (Calor Embotellado). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Cuida Tus Pasos",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Realiza un ataque de láser de barrido hacia adelante, causando Daño Fuego. Después de usar esta habilidad, sigue inmediatamente con la poderosa hoja de fuego del (Ataque Basico). Al activar esta habilidad, restaura 20 (Calor Embotellado). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Vortice Carmesi",
      description: "Cuando está fuera del campo con 60 o más de Energía, se activa automáticamente durante ataques aliados: Realiza un ataque de láser de barrido en un área alrededor, causando Daño Fuego. Al activar esta habilidad, restaura 20 (Calor Embotellado). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Carga de Calor",
      description: "Cuando el (Calor Embotellado) es mayor o igual a 100, mantén [Icono Especial] para activar: Consume 100 (Calor Embotellado) para disparar continuamente un láser hacia adelante, causando Daño Fuego. Cuando el disparo comienza, activa una (Asistencia Rapida). Después de disparar continuamente por un periodo, la potencia de fuego aumenta, potenciando grandemente el Nivel de Interrupción de la habilidad. Si es atacado mientras dispara, hará parry a los ataques enemigos e incrementará inmediatamente la potencia de fuego. Cuando se alcanza la duración máxima de disparo, activa automáticamente (Tecnica Especial EX: Erupcion Ardiente). Durante la fase de baja potencia de fuego, el Nivel de Anti-Interrupción aumenta y el Daño recibido se reduce un 40%, mientras que el personaje es invulnerable durante la fase de alta potencia de fuego.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Erupcion Ardiente",
      description: "Se activa automáticamente después de que (Tecnica Especial EX: Carga de Calor) alcanza el tiempo máximo de disparo: Realiza un ataque giratorio hacia adelante, luego dispara un láser hacia adelante causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Corte Abrasador",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Desata una serie de ataques contra los enemigos en frente, causando Daño Fisico y Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Físico", "Asistencia Rápida", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Sable Pistola Abrasador",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia Defensiva", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Perforacion Hirviente",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Desata múltiples ataques contra los enemigos en frente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque de Asistencia", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Domando Viento y Fuego",
      description: "La Probabilidad de CRIT de Orphie & Magus aumenta en un {VALOR_1}, y el Daño de Réplica aumenta en un {VALOR_2}. Orphie & Magus ganan inicialmente 100 (Calor Embotellado), hasta un máximo de 125. Cuando Orphie & Magus están fuera del campo, si (Tecnica Especial: Destello Corrosivo) está disponible y la Energía es mayor o igual a 60, consume 30 de Energía para activar automáticamente (Tecnica Especial EX: Vortice Carmesi) en su lugar. Cuando el láser de (Tecnica Especial EX: Carga de Calor) golpea enemigos, todos los miembros del escuadrón ganan (En la Mira) por 12s. Activaciones repetidas reinician la duración. (En la Mira) aumenta el ATK del Agente en {VALOR_3}. Cuando la Regeneración de Energía inicial de Orphie & Magus es mayor o igual a 1.6, por cada 0.1 de Regeneración de Energía inicial por encima de este umbral, el ATK aumenta en 20 adicionales. El aumento total de ATK tanto inicial como adicional no puede exceder {VALOR_4}. Cuando un Agente con (En la Mira) activa una Réplica, su duración de (En la Mira) se extiende por 4s, hasta una extensión máxima de 20s. El ataque de hoja de fuego de (Ataque Basico: Lanzallamas de Alta Presion), (Tecnica Especial EX: Cuida Tus Pasos), (Tecnica Especial EX: Vortice Carmesi), (Tecnica Especial EX: Carga de Calor), (Tecnica Especial EX: Erupcion Ardiente), (Ataque en Cadena: Cañon Sobrecalentado) y (Definitiva: Danza con Fuego) cuentan todos como Daño de Réplica, y usar estas habilidades cuenta como activar una Réplica.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Forjado en Llamas",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Aturdidor) o (Soporte): El Daño de Réplica infligido por Agentes con (En la Mira) ignora un 25% de la DEF.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Cañon Sobrecalentado",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Realiza un ataque giratorio hacia adelante, luego dispara un láser hacia adelante, causando Daño Fuego. Al activar esta habilidad, restaura 20 puntos de (Calor Embotellado). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Danza con Fuego",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Realiza un ataque giratorio hacia adelante, luego dispara un láser hacia adelante, causando Daño Fuego. Al saltar en el aire, se activará una (Asistencia Rapida). Si la (Asistencia Rapida) es activada, Orphie & Magus extenderán la duración de disparo del láser. Al activar esta habilidad, recupera 20 (Calor Embotellado). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "Lujosa Casa de Gatos",
      description: "(Tecnica Especial: Destello Corrosivo), (Tecnica Especial EX: Vortice Carmesi), (Tecnica Especial EX: Carga de Calor) y (Tecnica Especial EX: Erupcion Ardiente) de Orphie & Magus ignoran el 15% de la RES a Fuego del objetivo, y los Agentes con (En la Mira) infligen un 20% más de DAÑO.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Lista de Comida Extraña",
      description: "Cuando Orphie & Magus lanzan una Réplica, restauran 65 Decibelios. Este efecto puede activarse una vez cada 4s. Después de que Orphie & Magus usan su (Definitiva), su ATK aumenta un 20% por hasta 45s.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "\"Manual de Tacticas\"",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Pistolera Rosa",
      description: "La duración inicial de (En la Mira) aumenta a 16s, y el Daño de (Tecnica Especial EX: Carga de Calor) y (Definitiva: Danza con Fuego) de Orphie & Magus aumenta un 40%.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Peaje de Transbordador",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Semilla Magica",
      description: "Con suficiente Energía, después del ataque de hoja de fuego de (Ataque Basico: Lanzallamas de Alta Presion), presiona [Icono Especial EX] para seguir inmediatamente con (Tecnica Especial EX: Vortice Carmesi). Cuando se activa el ataque de hoja de fuego de (Ataque Basico: Lanzallamas de Alta Presion), recupera 10 (Calor Embotellado), y el Nivel de Interrupción durante la fase de baja potencia de fuego de (Tecnica Especial EX: Carga de Calor) también aumentará. Cuando el láser de (Tecnica Especial EX: Carga de Calor) o (Definitiva) golpea enemigos, causa Daño Fuego adicional igual al 250% del ATK de Orphie & Magus. Este efecto puede activarse una vez cada 0.5s y se cuenta como Daño de (Tecnica Especial EX) y Réplica.",
      tags: ["Mindscape 6"]
    }
  ]
};
