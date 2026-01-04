// Agent 36 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 663,
      max: 8250
    },
    atk: {
      min: 110,
      max: 765
    },
    def: {
      min: 48,
      max: 597
    },
    impact: 118,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "93",
    anomalyMastery: "96",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  coreSkillScaling: [
    ["10%", "10%", "20%", "25"],
    ["11.7%", "11.7%", "23.3%", "29.2"],
    ["13.3%", "13.3%", "26.7%", "33.3"],
    ["15%", "15%", "30%", "37.5"],
    ["16.7%", "16.7%", "33.3%", "41.7"],
    ["18.3%", "18.3%", "36.7%", "45.8"],
    ["20%", "20%", "40%", "50"]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Siete Formas de Tigre - Garra Llameante",
      description: "Presiona [Icono Ataque] para activar: Corta hacia adelante hasta cuatro veces, causando Daño Fisico y Daño Fuego. Durante el 3er golpe, presiona repetidamente [Icono Ataque] para mantener el combo y seguir golpeando al enemigo. Durante el 3er golpe, mantén o pausa antes de presionar [Icono Ataque] para encadenar en el 4to golpe. Durante el 3er golpe, el Nivel de Anti-Interrupción aumenta, y el Daño recibido se reduce en un 40%.",
      tags: ["Físico", "Fuego", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Hu Wei",
      description: "Durante el combate, Hu Wei atacará automáticamente a los enemigos, causando Daño Fuego. Al golpear a un enemigo, gana 20 puntos de (Poder), activándose hasta una vez por uso de una habilidad. El máximo de (Poder) es 200.",
      tags: ["Fuego", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Siete Formas de Tigre - Viento de Tigre",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Evasión: Siete Formas de Tigre - Carga de Tigre",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Realiza un corte rápido hacia adelante, causando Daño Fisico.",
      tags: ["Físico", "Evasión", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Evasión: Siete Formas de Tigre - Juego del Rey de la Montaña",
      description: "Después de usar (Evasión: Siete Formas de Tigre - Carga de Tigre), mantén [Icono Ataque] para activar: Entra en un estado de giro de alta velocidad. Mientras está en este estado, usa la palanca/joystick para moverte y causar Daño Fisico al contacto con enemigos. Después de que Ju Fufu gana (Impulso) de otras habilidades, estará rodeada de llamas en el estado de giro de alta velocidad. Al contacto con enemigos, 1 punto de (Impulso) es consumido, cambiando el DAÑO a Daño Fuego y otorgando 25 puntos de (Poder). El máximo de (Impulso) es 15. Al consumir (Impulso) para causar Daño Fuego, si el (Poder) está por encima de 100 puntos, 100 puntos de (Poder) serán consumidos automáticamente para activar (Ataque en Cadena: Caldero de Tigre Supresor). Soltar [Icono Ataque] hará que Ju Fufu salga del estado de giro y lance a Hu Wei para atacar a los enemigos, causando Daño Fuego. Al cambiar a otro personaje, Ju Fufu permanecerá en el estado de giro e intentará chocar con el enemigo más cercano. Mientras Ju Fufu es el personaje activo actual, el Daño recibido durante la habilidad se reduce en un 40%, y el Nivel de Anti-Interrupción aumenta. Si no es el personaje activo, se vuelve Invulnerable.",
      tags: ["Físico", "Fuego", "Evasión", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Siete Formas de Tigre - Montaña Reavivada",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Realiza múltiples cortes a los enemigos en frente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Siete Formas de Tigre - Tigre Descendiendo la Montaña",
      description: "Presiona [Icono Especial] para activar: Realiza un corte giratorio hacia adelante, seguido de un corte descendente, causando Daño Fuego. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Siete Formas de Tigre Alt - Tigre Salvaje Descendiendo la Montaña",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Gira a Hu Wei hacia adelante para un golpe poderoso, causando masivo Daño Fuego. Al activarse, gana 3 puntos de (Impulso) y 80 puntos de (Poder). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Pisotón Decisivo",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta a los enemigos en frente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia Rápida", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Tigre Agazapado Firme",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia Defensiva", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Fauces Ardientes Ferales",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Corta hacia adelante a los enemigos, luego usa a Hu Wei para seguir con un ataque descendente, causando Daño Fuego. Gana 1 punto de (Impulso) al activarse como máximo una vez cada 10s. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque de Asistencia", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Poder Feraz",
      description: "Cuando Ju Fufu aún no ha usado a Hu Wei, atacará automáticamente a los enemigos y ganará (Poder) al golpearlos. Cuando Hu Wei golpea a un enemigo y tiene al menos 100 de (Poder), y Ju Fufu no es el personaje activo actual, Ju Fufu lanzará (Ataque en Cadena: Caldero de Tigre Supresor) centrado alrededor del enemigo objetivo. Al activarse, todos los miembros del escuadrón ganan el efecto (Rugido de Tigre): Daño CRIT aumenta un {VALOR_1}, y cuando el ATK inicial de Ju Fufu es mayor o igual a 2,800, cada 100 de ATK adicional aumenta el Daño CRIT en un 5%, hasta un aumento máximo adicional del 30%. Mientras está en el estado (Rugido de Tigre), el Daño de (Ataque en Cadena)/(Definitiva) del personaje aumenta un {VALOR_2}/{VALOR_3}. El estado (Rugido de Tigre) dura 30s. Activaciones repetidas reinician la duración. Mientras Ju Fufu está en el estado (Rugido de Tigre), el Impacto aumenta en {VALOR_4}.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Aura de Autoridad",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Ataque) o (Ruptura): Los Decibelios máximos para todos los personajes en el escuadrón aumentan en 1,000. Cuando un personaje de (Ataque) o (Ruptura) usa una (Definitiva), ese personaje gana 300 Decibelios.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Colapso de Caldero de Tigre",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Gira a Hu Wei para entregar un golpe poderoso a los enemigos en un área pequeña adelante, causando masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Caldero de Tigre Supresor",
      description: "Con al menos 100 puntos de (Poder), después de activar un (Ataque en Cadena), activa automáticamente: Consume 100 de (Poder) para abrir a Hu Wei y disparar llamas y palomitas a los enemigos, golpeándolos en un área pequeña adelante, causando masivo Daño Fuego. Si (Impulso) está disponible, y mientras no sea el personaje activo, el estado de giro de alta velocidad se activará después de que la habilidad termine. Esto es un (replica). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Siete Formas de Tigre - Explosion de Tigre Furioso",
      description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Realiza dos ataques descendentes con Hu Wei, causando masivo Daño Fuego. Al activarse, gana 6 puntos de (Impulso) y 100 puntos de (Poder). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "Pequeño Tigre Super Aterrador",
      description: "Al entrar en combate, la Probabilidad de CRIT de Ju Fufu aumenta un 12%, y gana inmediatamente 100 de (Poder). Cuando el (Ataque en Cadena) de Ju Fufu golpea a un enemigo, cuando el objetivo está Aturdido, el Multiplicador de Daño de Aturdimiento del objetivo aumenta un 35%, durando 30s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Guerrero Qingming Todopoderoso",
      description: "Mientras está en el estado (Rugido de Tigre), el Daño CRIT del personaje aumenta un 22% adicional. Siempre que cualquier personaje active una (Definitiva), Ju Fufu gana 3 puntos de (Impulso).",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Joven Heroe Justo",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Mistico Tigre Asesino de Monstruos",
      description: "Mientras Ju Fufu está en el estado (Rugido de Tigre), su Daño CRIT aumenta un 35%.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Mayor Todopoderoso Inigualable",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Rugido de Mi Tigre Interior",
      description: "El Daño de (Ataque en Cadena) de Ju Fufu aumenta un 30%. Al consumir (Impulso) y golpear a un enemigo en el estado de giro de alta velocidad, dispara 3 palomitas, cada una causando 160% del ATK de Fufu como DAÑO. Este DAÑO es tratado como DAÑO de (Ataque en Cadena).",
      tags: ["Mindscape 6"]
    }
  ]
};
