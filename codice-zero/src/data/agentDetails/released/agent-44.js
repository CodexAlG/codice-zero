// Agent 44 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 663,
      max: 8250
    },
    atk: {
      min: 109,
      max: 758
    },
    def: {
      min: 49,
      max: 612
    },
    impact: "110",
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
  materials: {
    weeklyBoss: {
      name: "Exuvia del Refinamiento",
      icon: "Item_Exuvia_of_Refinement.webp",
    },
    eliteBoss: {
      name: "Datos de dimensiones superiores: Fantasma sigiloso",
      icon: "Item_Higher_Dimensional_Data_Stealth_Phantom.webp",
    }
  },
  coreSkillScaling: [
    [
      "1.4",
      "15%"
    ],
    [
      "1.5",
      "17.5%"
    ],
    [
      "1.6",
      "20%"
    ],
    [
      "1.7",
      "22.5%"
    ],
    [
      "1.8",
      "25%"
    ],
    [
      "1.9",
      "27.5%"
    ],
    [
      "2",
      "30%"
    ]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Encantada de Servirle",
      description: "Presiona [Icono Ataque] para activar: Desata hasta cuatro ataques, causando Daño Físico.",
      tags: [
        "Físico",
        "Ataque Básico"
      ]
    },
    {
      type: "Ataque Básico",
      name: "Piedra, Papel, Tijeras",
      description: "Después de (Tecnica Especial EX: Piedra) o (Tecnica Especial EX: Tijeras), presiona [Icono Ataque] para activar: Realiza hasta dos ataques, causando Daño Físico. Durante la activación de la habilidad, el nivel de Anti-Interrupción aumenta, y el daño recibido se reduce en un 40%.",
      tags: [
        "Físico",
        "Ataque Básico"
      ]
    },
    {
      type: "Evasión",
      name: "Linea Ocupada",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Evasión"
      ]
    },
    {
      type: "Evasión",
      name: "Evasión: Llamada Repentina",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza un ataque de embestida a los enemigos en frente, causando Daño Físico.",
      tags: [
        "Físico",
        "Evasión"
      ]
    },
    {
      type: "Evasión",
      name: "Evasión: Numero No Disponible",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Lanza ataques consecutivos contra los enemigos en frente, causando Daño Físico. Después de usar esta habilidad, puede seguir inmediatamente con el 4to golpe de (Ataque Basico: Encantada de Servirle). El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Físico",
        "Evasión"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "¡Pierdase!",
      description: "Con (Queja del Cliente), mantén [Icono Ataque] para activar: Entrega un ataque de saludo marcial hacia adelante. Al activarse, consume (Queja del Cliente) y causa Daño Físico. Al activarse, se activa la (Asistencia Rapida) del personaje anterior. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Físico",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial",
      name: "Gesto de Bienvenida",
      description: "Presiona [Icono Especial] para activar: Lanza anillos duales para cortar a los enemigos, causando Daño Físico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: [
        "Físico",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Piedra",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un ataque de puño, causando Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Físico",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "Tijeras",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un ataque de tijeras, causando Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Físico",
        "Técnica Especial"
      ]
    },
    {
      type: "Técnica Especial EX",
      name: "¡Papel!",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un ataque de papel, causando Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Físico",
        "Técnica Especial"
      ]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Llamada Directa",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Lanza ataques consecutivos contra los enemigos en frente, causando Daño Físico. Después de usar esta habilidad, puede seguir inmediatamente con el 4to golpe de (Ataque Basico: Encantada de Servirle). El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Asistencia"
      ]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Rechazar Llamada",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. Esta habilidad sobresale al hacer parry a ataques enemigos y reduce el consumo de (Puntos de Asistencia) cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Asistencia"
      ]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Llamadas Consecutivas",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Realiza una carrera rápida seguida de un ataque de corte, causando Daño Físico. Después de usar esta habilidad, puede seguir inmediatamente con el 4to golpe de (Ataque Basico: Encantada de Servirle). El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Físico",
        "Asistencia"
      ]
    },
    {
      type: "Pasiva Central",
      name: "Linea Directa de Servicio Cinco Estrellas",
      description: "Al entrar al campo de batalla, Dialyn comienza con 60 (Reseñas Positivas). Si su Probabilidad de CRIT inicial supera el 50%, su Impacto aumenta en {VALOR_1} por cada 1% adicional, hasta un aumento máximo de 100. Después de usar (Tecnica Especial EX: Piedra), la siguiente (Tecnica Especial EX) se convierte en (Tecnica Especial EX: Tijeras) por 8s. Después de usar (Tecnica Especial EX: Tijeras), la siguiente (Tecnica Especial EX) se convierte en (Tecnica Especial EX: ¡Papel!) por 8s. Cuando (Tecnica Especial EX: ¡Papel!) golpea a un enemigo, aplica el efecto (Queja Maliciosa). Mientras está bajo (Queja Maliciosa), si el enemigo es Aturdido, la duración del Aturdimiento se extiende por 2s, y el Multiplicador de Daño de Aturdimiento aumenta en un {VALOR_2}. Antes de recuperarse del Aturdimiento, (Queja Maliciosa) puede activarse en el mismo objetivo solo una vez. El bono de duración de Aturdimiento no se acumula con efectos similares. Cuando un enemigo con (Queja Maliciosa) se recupera de ser Aturdido, el efecto termina. <br/><br/>Mientras está en combate, Dialyn gana 0.6 (Reseñas Positivas) por segundo. Cuando un ataque pesado de (Tecnica Especial EX: Piedra), (Tecnica Especial EX: Tijeras) o (Tecnica Especial EX: ¡Papel!) golpea enemigos, ella gana 7.5 (Reseñas Positivas). Cada uso de una habilidad puede otorgar este bono solo una vez, hasta un máximo de 120. Con al menos 90 (Reseñas Positivas), cuando Dialyn activa la ventana de (Ataque en Cadena) usando (Ataque en Cadena: Felpudo de Bienvenida), (Tecnica Especial EX: ¡Pierdase!) o (Asistencia Rapida: Llamada Directa), el siguiente personaje en entrar tendrá su (Ataque en Cadena) mejorado a una (Definitiva). Cuando un aliado lanza una (Definitiva) de esta manera, Dialyn consume 60 (Reseñas Positivas). Con al menos 90 (Reseñas Positivas), cuando Dialyn golpea a un enemigo con (Tecnica Especial EX: ¡Pierdase!) y no activa una ventana de (Ataque en Cadena), ella consume 90 (Reseñas Positivas) para activar forzosamente una ventana de (Ataque en Cadena). El siguiente personaje en entrar tendrá su (Ataque en Cadena) mejorado a una (Definitiva). Cada vez que (Reseñas Positivas) alcanza 90 o una (Definitiva) es activada, Dialyn obtiene 1 (Queja del Cliente). Un máximo de 1 (Queja del Cliente) puede mantenerse a la vez.",
      tags: [
        "Pasiva Central"
      ]
    },
    {
      type: "Habilidad Adicional",
      name: "Linea Externa",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Ataque) o (Ruptura): El Daño CRIT de la (Tecnica Especial EX) de Dialyn aumenta en un 50%. Cuando una (Tecnica Especial EX) o (Definitiva) es activada, todos los miembros del escuadrón ganan el efecto (Abrumadoramente Positivo). Mientras (Abrumadoramente Positivo) está activo, el Daño infligido aumenta en un 40% por 15s. Cuando Dialyn usa una (Tecnica Especial EX) o (Definitiva) mientras (Abrumadoramente Positivo) está activo, si la duración restante de (Abrumadoramente Positivo) es menor a 35s, su duración se extiende por 10s. Cuando un ataque pesado de (Tecnica Especial EX: Piedra), (Tecnica Especial EX: Tijeras) o (Tecnica Especial EX: ¡Papel!) golpea, se inflige daño adicional basado en la Especialidad del miembro anterior del escuadrón: Si el miembro del escuadrón es un Agente de (Ataque), (Tecnica Especial EX: Piedra), (Tecnica Especial EX: Tijeras) y (Tecnica Especial EX: ¡Papel!) causan daño adicional igual al 320% del ATK de ese Agente de (Ataque). Si el miembro del escuadrón es un Agente de (Ruptura), (Tecnica Especial EX: Piedra), (Tecnica Especial EX: Tijeras) y (Tecnica Especial EX: ¡Papel!) causan daño adicional igual al 400% de la Fuerza Pura de ese Agente de (Ruptura).",
      tags: [
        "Habilidad Adicional"
      ]
    },
    {
      type: "Técnica Definitiva",
      name: "Felpudo de Bienvenida",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Lanza patadas consecutivas contra los enemigos en frente, causando masivo Daño Físico. Después de usar esta habilidad, puede seguir inmediatamente con el 4to golpe de (Ataque Basico: Encantada de Servirle). El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Físico",
        "Ataque en Cadena"
      ]
    },
    {
      type: "Técnica Definitiva",
      name: "Servicio Detenido por Numero Marcado",
      description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Corre hacia adelante y realiza un ataque de golpe de dedo, causando masivo Daño Físico. Después de usar esta habilidad, puede seguir inmediatamente con el 4to golpe de (Ataque Basico: Encantada de Servirle). El personaje es invulnerable mientras usa esta habilidad.",
      tags: [
        "Físico",
        "Técnica Definitiva"
      ]
    },
    {
      type: "Mindscape 1",
      name: "Hospitalidad Ilimitada",
      description: "La cantidad de (Reseñas Positivas) acumuladas cada segundo y ganadas cuando (Tecnica Especial EX: Piedra), (Tecnica Especial EX: Tijeras) o (Tecnica Especial EX: ¡Papel!) golpea a un enemigo aumenta en un 16%. Mientras el efecto (Abrumadoramente Positivo) está activo, los personajes ignoran un 15% de la RES a Todo-Atributo enemiga.",
      tags: [
        "Mindscape 1"
      ]
    },
    {
      type: "Mindscape 2",
      name: "Linea Directa 24/7",
      description: "Los enemigos afectados por (Queja Maliciosa) ganan un Multiplicador de Daño de Aturdimiento adicional del 20% cuando son Aturdidos, y todas las unidades infligen un 15% de Daño aumentado a objetivos afectados por (Queja Maliciosa).",
      tags: [
        "Mindscape 2"
      ]
    },
    {
      type: "Mindscape 3",
      name: "Llamada desde el Hueco",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: [
        "Mindscape 3"
      ]
    },
    {
      type: "Mindscape 4",
      name: "El Pasado Nunca se Desvanece",
      description: "Al entrar en combate, Dialyn recupera 20 de Energía. Este efecto puede activarse una vez cada 180s en Modo Zona de Investigación. Mientras el efecto (Abrumadoramente Positivo) está activo, el ATK de Dialyn aumenta en 500.",
      tags: [
        "Mindscape 4"
      ]
    },
    {
      type: "Mindscape 5",
      name: "Mentiras",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: [
        "Mindscape 5"
      ]
    },
    {
      type: "Mindscape 6",
      name: "Verdad",
      description: "Cuando un aliado entra al campo con una (Definitiva) a través del efecto de la (Pasiva Principal), ese aliado gana el efecto (Resplandor). Con este efecto, asestar un ataque hace que Dialyn inflija una instancia adicional de Daño Físico igual al 480% del ATK de Dialyn. Este daño es tratado como daño de (Tecnica Especial EX), y puede activarse una vez cada segundo, hasta 12 veces. Ganar (Resplandor) nuevamente refresca su conteo de activaciones. Solo un aliado puede tener (Resplandor) a la vez.",
      tags: [
        "Mindscape 6"
      ]
    }
  ]
};
