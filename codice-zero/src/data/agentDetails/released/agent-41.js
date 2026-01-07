// Agent 41 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 621,
      max: 7724
    },
    atk: {
      min: 109,
      max: 755
    },
    def: {
      min: 36,
      max: 443
    },
    impact: "95",
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "87",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
    sheerForce: {
      min: 94,
      max: 999
    }
  },
  coreStats: {
    statName: "atk%",
    valuePerNode: 4
  },
  materials: {
    weeklyBoss: {
      name: "Pico de miasma carmesí",
      icon: "Item_Crimson_Miasma_Spike.webp",
    },
    eliteBoss: {
      name: "Datos de dimensiones superiores: Acero onírico corrupto",
      icon: "Item_Higher_Dimensional_Data_Corrupted_Dreamsteel.webp",
    }
  },
  coreSkillScaling: [
    ["25%", "10%"],
    ["29.2%", "11.7%"],
    ["33.3%", "13.3%"],
    ["37.5%", "15%"],
    ["41.7%", "16.7%"],
    ["45.8%", "18.3%"],
    ["50%", "20%"]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Corte de Viento Abrasador",
      description: "Presiona [Icono Ataque] para activar: Realiza hasta tres cortes hacia adelante, causando Daño Fisico. Durante cada corte, presionar [Icono Especial] activa (Viento Quemante), haciendo que el ataque inflija Daño Fuego aumentado.",
      tags: ["Fuego", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Viento Abrasador - Corte Brumoso",
      description: "Mientras está en el estado (Filo Fundido), presiona [Icono Ataque] para activar: Desata hasta cuatro cortes hacia adelante, causando Daño Fuego. Si los Hp de Manato están por encima del 30% cuando la habilidad es activada, se consumirá un 3.5% de sus Hp Máx.",
      tags: ["Fuego", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Hoja Radiante",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Evasión: Hoja Radiante - Zanshin",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Realiza un golpe de hombro hacia adelante, causando Daño Fisico.",
      tags: ["Físico", "Evasión", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Hoja Radiante - Barrido de Batalla",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Realiza un corte seguido de un puñetazo a los enemigos en frente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Retorno a las Cenizas",
      description: "Presiona [Icono Especial] para activar: Corta hacia adelante a los enemigos, causando Daño Fuego. Si es golpeado por un enemigo durante la habilidad, restaura el 20% de los Hp faltantes al desatar el corte. Los efectos de curación de (Tecnica Especial: Retorno a las Cenizas) y (Tecnica Especial: Retorno a las Cenizas - Sacrificio) tienen un tiempo de espera compartido y pueden activarse una vez cada 20s. Si es golpeado por un enemigo durante la habilidad, el corte es mejorado. El Daño recibido se reduce en un 40% mientras usa esta habilidad. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Retorno a las Cenizas - Sacrificio",
      description: "Mantén [Icono Especial] para activar: Entra en un estado de carga, consumiendo hasta un 10% de los Hp Máx y ganando 100 (Corazon Ardiente). El consumo de Hp reducirá como máximo los Hp de Manato al 30% de los Hp Máx. Suelta el botón para activar (Tecnica Especial: Retorno a las Cenizas). Si es golpeado durante la habilidad, el corte cura un 20% de los Hp faltantes. Los efectos de curación de (Tecnica Especial: Retorno a las Cenizas) y (Tecnica Especial: Retorno a las Cenizas - Sacrificio) tienen un tiempo de espera compartido y pueden activarse una vez cada 20s. Si es golpeado por un enemigo durante la habilidad o si carga por una duración determinada, el corte es mejorado. El Daño recibido se reduce en un 40% mientras usa esta habilidad. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Retorno a las Cenizas - Caida",
      description: "Mientras está en el estado (Filo Fundido) y con suficiente Adrenalina, presiona [Icono Especial EX] para activar: Salta y desata un corte descendente sobre los enemigos en frente, causando masivo Daño Fuego. Al activar la habilidad, restaura el 33% de los Hp Máx. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Sombra Solitaria - Reagrupar",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta y golpea a los enemigos en frente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia Rápida", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Sombra Solitaria - Postura de Montaña",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, infligiendo masivo Aturdimiento y causando Daño Fuego. Gana 75 (Corazon Ardiente) al activar esta habilidad. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia Defensiva", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Sombra Solitaria - Colmillo Rompedor",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Desata múltiples cortes a los enemigos en frente, causando Daño Fuego. Presionar repetidamente permite hasta 7 cortes consecutivos extra. Mientras encadena cortes, si los Hp de Manato están por encima del 30%, se consume un 2% de los Hp Máx. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque de Asistencia", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Poderoso Filo Fundido",
      description: "Manato gana Fuerza Pura extra basada en sus Hp Máx, con cada 1 punto de Hp Máx aumentando su Fuerza Pura en 0.1. Todo el Daño Fuego de Manato se inflige como Daño Puro, ignorando la DEF enemiga y usando su estadística de Fuerza Pura como el Multiplicador de Daño. Cuando Manato usa (Tecnica Especial: Retorno a las Cenizas - Sacrificio) o una (Asistencia Defensiva), él acumula (Corazon Ardiente), hasta un máximo de 100 puntos. A los 75 (Corazon Ardiente), Manato entra en el estado (Filo Fundido). Mientras está en el estado (Filo Fundido), Manato consume 3.3 (Corazon Ardiente) por segundo. Cuando (Corazon Ardiente) se agota completamente, él sale de (Filo Fundido). Mientras está en el estado (Filo Fundido), los (Ataques Basicos) de Manato son mejorados, y puede usar (Tecnica Especial EX: Retorno a las Cenizas - Caida). Al consumir Hp durante (Ataque Basico: Viento Abrasador - Corte Brumoso) o durante los cortes consecutivos de un (Ataque de Asistencia), el Daño CRIT de ese ataque aumenta en un {VALOR_1}, y la Tasa de Generación de Adrenalina aumenta en un 100%. Mientras está en el estado (Filo Fundido), la Probabilidad de CRIT de Manato aumenta en un {VALOR_2}, y su Daño Fuego aumenta en un 20%.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Corazon Reavivado",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Soporte) o (Aturdidor): Cuando Manato usa su Definitiva, gana 8 acumulaciones de (Llama Remanente), y cuando usa un (Ataque en Cadena), gana 4 acumulaciones de (Llama Remanente), durando 60s, acumulándose hasta 20 veces. Activaciones repetidas reinician la duración. Mientras lanza (Ataque Basico: Viento Abrasador - Corte Brumoso) o durante los cortes consecutivos de un (Ataque de Asistencia), si sus Hp están por debajo del 100% de los Hp Máx, una acumulación de (Llama Remanente) es consumida para restaurar el 2% de sus Hp Máx.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Erupcion Abrasadora",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Arroja su espada hacia adelante, luego carga contra el enemigo para activar una explosión, causando masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Tecnica Definitiva: Musou Aratama",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Salta en el aire y entrega un corte descendente a los enemigos en frente, seguido de una explosión, causando masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "Reglas de Supervivencia del Vagabundo",
      description: "Siempre que Manato pierde Hp, la cantidad de Hp perdidos es contada. Cada 1% de sus Hp Máx contados aumenta el Daño Fuego de (Ataques de Asistencia) y (Ataques Basicos) en un 0.4%, hasta un máximo de 20%.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Dia y Noche, Cocina y Amor",
      description: "Mientras está en el estado (Filo Fundido), Manato ignora el 8% de la (RES a Fuego) del objetivo. Después de ser golpeado por un enemigo mientras usa (Tecnica Especial: Retorno a las Cenizas) o (Tecnica Especial: Retorno a las Cenizas - Sacrificio), presiona [Icono Ataque] para activar un (Ataque de Asistencia).",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Entrar al Reino de las Leyendas Urbanas",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Juramento de la Infancia",
      description: "Hp Máx aumenta un 8%. Durante (Tecnica Especial: Retorno a las Cenizas) y (Tecnica Especial: Retorno a las Cenizas - Sacrificio), cuando Manato recibe DAÑO fatal, permanece en batalla, con sus Hp no bajando de 1. Este efecto puede activarse una vez cada 10s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Sombra Solitaria Regresa a la Manada",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Mas Alla de los Sueños del Pasado",
      description: "Cuando (Tecnica Especial: Retorno a las Cenizas) golpea a un enemigo Aturdido, Manato gana 75 (Corazon Ardiente) y 4 acumulaciones de (Llama Remanente), y presionar [Icono Ataque] lanzará un (Ataque de Asistencia). Este efecto de (Llama Remanente) puede activarse una vez cada 20s. Cuando su (Ataque de Asistencia) golpea a un enemigo, el Daño Fuego de Manato aumenta en un 3% por 8s, acumulándose hasta 5 veces. Activaciones repetidas reinician la duración.",
      tags: ["Mindscape 6"]
    }
  ]
};
