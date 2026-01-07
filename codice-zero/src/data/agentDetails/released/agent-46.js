// Agent 46 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 733,
      max: 8986
    },
    atk: {
      min: 110,
      max: 765
    },
    def: {
      min: 56,
      max: 701
    },
    impact: 93,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "93",
    anomalyMastery: "96",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "hp%",
    valuePerNode: 6
  },
  materials: {
    weeklyBoss: {
      name: "Sustancia Cristalina Nublada",
      icon: "Item_Clouded_Crystalline_Substance.webp",
    },
    eliteBoss: {
      name: "Datos de Dimensiones Superiores: Núcleo de Corrupción Espinoso",
      icon: "Item_Higher_Dimensional_Data_Spiked_Corruption_Core.webp",
    }
  },
  coreSkillScaling: [
    ["24.0%", "0.8%", "100", "1.7%"],
    ["24.0%", "0.9%", "250", "1.7%"],
    ["24.0%", "1.0%", "400", "1.7%"],
    ["24.0%", "1.1%", "550", "1.7%"],
    ["24.0%", "1.2%", "700", "1.7%"],
    ["24.0%", "1.3%", "850", "1.7%"],
    ["24.0%", "1.4%", "1000", "1.7%"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Juicio Glacial",
      description: "Presiona [Icono Ataque] para activar: Lanza hasta cinco cortes hacia adelante, el primero infligiendo Daño Físico, y los siguientes cuatro Daño Hielo.",
      tags: ["Físico", "Hielo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Veredicto Final",
      description: "Mantén [Icono Ataque] para activar: Después de prepararse, Zhao comienza a cargar, luego lanza un corte hacia adelante al soltar, infligiendo masivo Daño Hielo. Mientras carga, Zhao acumula hasta 5s de tiempo de carga. Cuando el Golpe Final de (Ataque Básico: Veredicto Final), (Ataque en Cadena), o (Ataque de Asistencia) golpea, el tiempo de carga almacenado se consume para infligir Daño adicional. Por cada 1 segundo de tiempo de carga, Zhao inflige {VALOR_1} del HP Máx como Daño adicional. Cuando Zhao está en cualquier (Velo Etereo), si es cambiada hacia fuera mientras carga, la carga puede continuar. Si los (Puntos de Congelacion) están al máximo cuando la habilidad se activa, todos los (Puntos de Congelacion) se consumen para activar (Velo Etereo: Manantial) y una (Asistencia Rápida). Si un compañero es cambiado a través de (Asistencia Rápida), Zhao automáticamente sigue con (Ataque Básico: Veredicto Final) y comienza a cargar. Durante la activación de la habilidad, el nivel de Anti-Interrupción aumenta, y el Daño recibido se reduce en un 40%. Mientras no sea el personaje controlado actualmente, el personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Salto de Conejo",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión deslizante. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Carrera Rebotante",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta hacia adelante, infligiendo Daño Físico y Daño Hielo.",
      tags: ["Físico", "Hielo", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Parpadeo Veloz",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Realiza un corte de caída adelante, infligiendo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Oleada de Escarcha",
      description: "Presiona [Icono Especial] para activar: Lanza un corte hacia adelante, infligiendo Daño Hielo. Al activar esta habilidad, consume 5% del HP actual para otorgar a todos los miembros del escuadrón regeneración de HP igual al {VALOR_4} del HP Máx de Zhao por segundo durante 5s. Los efectos de consumo de HP de (Técnica Especial: Oleada de Escarcha) y (Técnica Especial EX: Tundra de Flujo Helado) pueden activarse como máximo una vez cada 30s.",
      tags: ["Hielo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Tundra de Flujo Helado",
      description: "Con suficiente energía, presiona [Icono Especial EX] para activar: Lanza múltiples cortes hacia adelante, infligiendo masivo Daño Hielo. Al activar esta habilidad, consume 5% del HP actual para otorgar a todos los miembros del escuadrón regeneración de HP igual al {VALOR_4} del HP Máx de Zhao por segundo durante 5s. Los efectos de consumo de HP de (Técnica Especial: Oleada de Escarcha) y (Técnica Especial EX: Tundra de Flujo Helado) pueden activarse como máximo una vez cada 30s. Al activar esta habilidad, gana 20 (Puntos de Congelacion). Si los (Puntos de Congelacion) están al máximo, todos los (Puntos de Congelacion) se consumen para activar (Velo Etereo: Manantial). Al activar esta habilidad mientras está en cualquier (Velo Etereo), se activa una (Asistencia Rápida). Si un compañero es cambiado a través de (Asistencia Rápida), Zhao automáticamente sigue con (Ataque Básico: Veredicto Final) y comienza a cargar. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Alianza Temporal",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Lanza múltiples cortes en frente, infligiendo masivo Daño Hielo. Después de usar esta habilidad, gana 5 (Puntos de Congelacion). Si los (Puntos de Congelacion) están al máximo, todos los (Puntos de Congelacion) se consumen para activar (Velo Etereo: Manantial). Al activar esta habilidad mientras está en cualquier (Velo Etereo), se activa una (Asistencia Rápida). Si un compañero es cambiado a través de (Asistencia Rápida), Zhao automáticamente sigue con (Ataque Básico: Veredicto Final) y comienza a cargar. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Bombardeo de Conejos",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Lanza ataques consecutivos en frente, seguidos por un corte de caída, infligiendo masivo Daño Hielo. Después de usar esta habilidad, gana 20 (Puntos de Congelacion). Si los (Puntos de Congelacion) están al máximo, todos los (Puntos de Congelacion) se consumen para activar (Velo Etereo: Manantial). Al activar esta habilidad mientras está en cualquier (Velo Etereo), se activa una (Asistencia Rápida). Si un compañero es cambiado a través de (Asistencia Rápida), Zhao automáticamente sigue con (Ataque Básico: Veredicto Final) y comienza a cargar. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Colega Ideal",
      description: "Zhao gana Probabilidad de Crit bonus basada en su HP Máx inicial, ganando {VALOR_2} de Probabilidad de Crit por cada 1,000 de HP Máx inicial. Al entrar al campo de batalla, Zhao gana 100 (Puntos de Congelacion). Este efecto puede activarse una vez cada 180s en modo Zona de Investigación. La cantidad máxima de (Puntos de Congelacion) es 100. Cuando los ataques del personaje activo actual golpean a un enemigo, Zhao gana 6 (Puntos de Congelacion). Esto puede activarse una vez cada 3s. Cuando los (Puntos de Congelacion) están al máximo, cambiar a Zhao al campo mientras está en combate activará su (Habilidad de Entrada). Cuando Zhao activa su (Habilidad de Entrada), todos los (Puntos de Congelacion) se consumen para activar (Velo Etereo: Manantial). Mientras (Velo Etereo: Manantial) está activo, todos los miembros del escuadrón ganan 5% de HP Máx por 40s. Re-activar (Velo Etereo: Manantial) termina la instancia existente antes de aplicar un nuevo (Velo Etereo: Manantial). Cuando Zhao activa (Velo Etereo: Manantial), el ATK de todos los miembros del escuadrón aumenta en {VALOR_3} por 50s. Las activaciones repetidas reinician la duración.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Cristalización",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Ataque), (Anomalía), o (Apoyo): Cuando Zhao está dentro de cualquier (Velo Etereo), el Daño de todo el escuadrón aumenta en un 10%. Si el HP Máx inicial de Zhao excede 15,000, cada 400 HP Máx inicial adicional aumenta este bonus de Daño en un 1% adicional, hasta un aumento máximo total del 40%. Este bonus alcanza su máximo cuando el HP Máx inicial de Zhao alcanza 27,000.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Habilidad de Entrada: Estallido de Escarcha",
      description: "Cuando Zhao tiene el máximo de (Puntos de Congelacion), y está en combate, presiona [Icono Assist] para activar: Lanza ataques consecutivos hacia adelante, seguidos por un corte, infligiendo masivo Daño Hielo. Al activar esta habilidad, todos los (Puntos de Congelacion) se consumen para activar (Velo Etereo: Manantial). Al activar esta habilidad, se activa una (Asistencia Rápida). Si un compañero es cambiado a través de (Asistencia Rápida), Zhao automáticamente sigue con (Ataque Básico: Veredicto Final) y comienza a cargar. Activar esta habilidad se considera como activar una (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Cubrir Brechas",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Lanza un corte de caída en frente, infligiendo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Supresión de Velo Helado",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Esta habilidad sobresale en bloquear ataques enemigos y reduce el consumo de (Puntos de Asistencia) cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Reflejo de Luz Helada",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Lanza múltiples cortes en frente, infligiendo masivo Daño Hielo. Al activar esta habilidad, si los (Puntos de Congelacion) están al máximo, todos los (Puntos de Congelacion) se consumen para activar (Velo Etereo: Manantial). Al activar esta habilidad mientras está en cualquier (Velo Etereo), se activa una (Asistencia Rápida). Si un compañero es cambiado a través de (Asistencia Rápida), Zhao automáticamente sigue con (Ataque Básico: Veredicto Final) y comienza a cargar. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Veredicto Justo",
      description: "Cuando Zhao cambia de ser el personaje activo, el Daño de todos los miembros del escuadrón ignora el 15% de la RES a Todos los Atributos del objetivo por 50s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Krampus Mayor",
      description: "Cuando Zhao recupera HP, su ATK aumenta en un 20%, y el ATK de otros miembros del escuadrón aumenta en un 15% por 50s. Las activaciones repetidas reinician la duración.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Filo de Velo Helado",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Pasos Ligeros como Pluma",
      description: "Cuando Zhao activa un (Velo Etereo), gana 250 Decibelios. El Daño Crítico de su (Definitiva), (Ataque en Cadena), y (Ataque Básico: Veredicto Final) aumenta en un 40%.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Oyente Difuso",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "El No Valor Tiene Su Propio Valor",
      description: "El buff de Probabilidad de Crit de (Pasiva Central: Colega Ideal) aumenta al 125% del valor original. El Daño extra ganado al cargar durante (Ataque Básico: Veredicto Final) aumenta al 140% del valor original, y el tiempo de carga acumulado ya no se consume al atacar.",
      tags: ["Mindscape 6"]
    }
  ]
};
