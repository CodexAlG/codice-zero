// Agent 9 - Detailed Stats and Skills
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
    impact: 118,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "94",
    anomalyMastery: "93",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "impact",
    valuePerNode: 6
  },
  coreSkillScaling: [
    ["2%"], ["2.4%"], ["2.7%"], ["3%"], ["3.4%"], ["3.7%"], ["4%"] // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Penúltimo",
      description: "Presiona [Icono Ataque] para activar: Lanza hasta cuatro golpes hacia adelante, infligiendo Daño Físico y Daño Eléctrico. Durante el 3er golpe, mantén presionado [Icono Ataque] para continuar el ataque, consumiendo continuamente el Voltaje de un enemigo. Activar una (Evasión Perfecta) durante una (Evasión) durante este período no interrumpirá el contador de ataques básicos de Qingyi. Durante el 3er golpe, deja de presionar [Icono Ataque] para interrumpir el ataque continuo, transicionando automáticamente al 4to golpe que cuenta como un ataque de última hora. El 4to golpe será mejorado y el Daño recibido se reduce activando la última hora y el 4to golpe.",
      tags: ["Físico", "Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Flores Encantadas",
      description: "Mantén [Icono Ataque] para activar: Lanza un ataque veloz corriendo hacia adelante, infligiendo Daño Eléctrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Conexión Flash",
      description: "Cuando Qingyi inflige Daño Eléctrico con una habilidad, ella acumula (Voltaje de Conexión Flash). Cuando el (Voltaje de Conexión Flash) alcanza el 25%, entrará en el estado de (Conexión Flash Connect). Para cada 1% de (Voltaje de Conexión Flash) consumido, el Aturdimiento infligido aumentará en 1%/0.5%. (Ataque Básico: Flores Encantadas) en sí mismo no acumula (Voltaje de Conexión Flash).",
      tags: ["Pasiva"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Flores de Luna Encantadas",
      description: "Durante el estado de (Conexión Flash), mantén [Icono Ataque] para activar: Lanza cinco golpes consecutivos corriendo hacia adelante, luego ejecuta un Movimiento Final que inflige masivo Daño Eléctrico. Suelta [Icono Ataque] justo antes de que el personaje sea atacado para activar (Evasión Perfecta). El nivel de Anti-Interrupción aumenta durante el ataque de carrera. El Daño recibido se reduce en un 40% durante el ataque de carrera. Qingyi es invulnerable durante el Movimiento Final. (Ataque Básico: Flores de Luna Encantadas) consumirá todo el (Voltaje de Conexión Flash) y saldrá del estado de (Conexión Flash).",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Canción del Cisne",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión deslizante. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Brecha",
      description: "Presiona [Icono Ataque] durante una (Evasión) para activar: Cambia hacia adelante y luego lanza un ataque ascendente, infligiendo Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Sentimientos Persistentes",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Salta al aire y luego realiza un ataque descendente, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Evasión"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Viento a Través de los Pinos",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Salta al aire y luego realiza un ataque descendente, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Embellecimiento Elegante",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. Esta habilidad destaca en bloquear (Parry) ataques enemigos y reduce el consumo de Puntos de Asistencia cuando el personaje está bajo ataques intensos. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Canción del Río Claro",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Corre hacia adelante con un ataque e inyecta energía eléctrica en el suelo, luego golpea hacia atrás para activar una explosión, infligiendo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Golpe de Escudo de Gloria Solar",
      description: "Presiona [Icono Especial] para activar: Balancea rápidamente hacia arriba, seguido de un golpe hacia abajo, infligiendo Daño Físico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Begonia de Luz de Luna",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Balancea rápidamente hacia arriba y salta al aire girando alrededor de sí mismo, luego termina con un poderoso golpe descendente, infligiendo masivo Daño Eléctrico. Mantén [Icono Especial EX] para consumir energía adicional para aumentar el número de golpes de los ataques giratorios. El personaje es invulnerable mientras usa esta habilidad. Después de ejecutar este movimiento, puedes seguir inmediatamente el 3er golpe o un (Ataque Básico).",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Serenata Tranquila",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Lanza una serie de golpes poderosos sobre una gran área en frente, infligiendo masivo Daño Eléctrico. Cuando este ataque golpea a un enemigo, el Daño de Qingyi aumenta en un 3% por cada acumulación de (Subyugación) en (Pasiva Principal: Estaciones Eternas). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Ocho Sonidos de Ganzhou",
      description: "Cuando el Nivel de Decibelios está al [Máximo], presiona [Icono Definitiva] para activar: Lanza una serie de golpes poderosos sobre una gran área en frente, seguido de un Movimiento Final, infligiendo masivo Daño Eléctrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Estaciones Eternas",
      description: "Cuando Qingyi aterriza un Movimiento Final en un enemigo con su (Ataque Básico: Flores de Luna Encantadas), aplica 3 acumulaciones de (Subyugación) al objetivo del enemigo. Cada acumulación de (Subyugación) aumenta el Daño de Aturdimiento del objetivo en un {VALOR_1}. Esta acumulación se aplica durante (Ataque Básico: Flores de Luna Encantadas), el Movimiento Final no aplicará ninguna acumulación de (Subyugación). Si se activa (Evasión Perfecta) al usar el Movimiento Final, directamente aplica 10.0 acumulaciones de (Subyugación) al objetivo. Al aplicar (Subyugación) a enemigos normales y de élite, el objetivo recibe el doble de las acumulaciones. Cuando el objetivo recibe Aturdimiento, las acumulaciones correspondientes de (Subyugación) se restablecen.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Tres Versos de Despedida en Yang Pass",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Ataque) o comparte la misma Facción: Los (Ataques Básicos) de Qingyi infligen un 20% más de Aturdimiento. Si el Impacto de Qingyi es mayor a 120, cada punto excedente aumenta su ATK en 6, hasta un máximo de 600.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Desglose de Aislamiento",
      description: "Cuando Qingyi entra en combate, el (Voltaje de Conexión Flash) se restaura instantáneamente a su máximo, y la tasa de acumulación aumenta en un 30%. Cuando usa su (Ataque Básico: Flores de Luna Encantadas), si el (Voltaje de Conexión Flash) está en su máximo, el ataque reducirá la DEF del enemigo que golpea en un 15%, y la Tasa Crítica de Qingyi contra ese enemigo aumentará en un 20% por 15s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Esfuerzo Mínimo, Impacto Máximo",
      description: "El multiplicador de Daño de Aturdimiento proporcionado por cada acumulación de (Subyugación) en (Pasiva Principal: Estaciones Eternas) aumenta al 135% de su valor original. Cuando el ataque de Qingyi golpea a un enemigo y las acumulaciones de (Subyugación) que aplica alcanzan su máximo de acumulaciones, su Aturdimiento infligido al objetivo aumenta en un 15%.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Bebe Agua Caliente",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Barrera de Arco Estable",
      description: "Al entrar o salir del estado de (Conexión Flash), gana un escudo igual al 10% del HP Máx de Qingyi. Si un escudo anterior aún está activo cuando el efecto del escudo se actualiza, Qingyi genera 5 de Energía. Este efecto de generación de Energía puede activarse una vez cada 10s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Espíritu Juvenil",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Ocho Meridianos",
      description: "El Nivel de Interrupción de (Ataque Básico: Flores de Luna Encantadas) aumenta enormemente, y la Tasa Crítica aumenta en un 20% adicional. Cuando golpea a un enemigo con su (Ataque Básico: Flores de Luna Encantadas), la RES de Daño de Atributo del objetivo se reduce en un 20% por 15s.",
      tags: ["Mindscape 6"]
    }
  ]
};
