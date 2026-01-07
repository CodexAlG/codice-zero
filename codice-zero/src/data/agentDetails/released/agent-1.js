// Agent 1 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 617,
      max: 7673
    },
    atk: {
      min: 135,
      max: 938
    },
    def: {
      min: 49,
      max: 606
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
  materials: {
    weeklyBoss: {
      name: "Ferocious Grip",
      icon: "Item_Ferocious_Grip.gif",
    },
    eliteBoss: {
      name: "Higher Dimensional Data: Murderous Obituary",
      icon: "Item_Higher_Dimensional_Data_Murderous_Obituary.webp",
    }
  },
  coreSkillScaling: [
    ["50%"],
    ["58.3%"],
    ["66.6%"],
    ["75%"],
    ["83.3%"],
    ["91.6%"],
    ["100%"]
  ],
  potentialSkillScaling: [
    ["1.6%", "3.3%"],
    ["2.4%", "5%"],
    ["3.2%", "6.7%"],
    ["4.0%", "8.3%"],
    ["4.8%", "10%"]
  ],
  potential: {
    name: "Potencial Despierto: Zona de Permafrost",
    description: "La (Habilidad Adicional: Tormenta Creciente) de Ellen aumenta el Daño Crítico en un {VALOR_1} por acumulación. A las 10 acumulaciones, el ataque ignora el {VALOR_2} de la Res Hielo del objetivo."
  },
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Recorte de Dientes de Sierra",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 3 ataques, infligiendo Daño Físico. Presiona repetidamente o mantén presionado [Icono Ataque] durante el 3er ataque para extender la duración de la habilidad.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Recorte de Congelación Relámpago",
      description: "Mientras (Congelación Relámpago) está activa, presiona [Icono Ataque] para activar: Lanza hasta 3 ataques a enemigos en frente, infligiendo Daño Hielo. Cada ataque consume 1 (Carga de Congelación Relámpago). Presiona repetidamente o mantén presionado [Icono Ataque] durante el 3er ataque para extender la duración de la habilidad.",
      tags: ["Hielo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Ola de Hoja Glacial",
      description: "Después del 3er golpe de (Ataque Básico: Recorte de Congelación Relámpago), si el golpe de tijera cargada de (Ataque de Carrera: Emboscada Ártica), (Contraataque de Evasión: Arrecife) y (Asistencia Rápida: Centinela Tiburón), si Ellen tiene (Cargas de Congelación Relámpago), presionar [Icono Ataque] lanzará (Ataque Básico: Ola de Hoja Glacial), infligiendo Daño Hielo. Esta habilidad consume 2 puntos de (Carga de Congelación Relámpago). Después de usar esta, puede ser seguida directamente por el 3er golpe de un (Ataque Básico). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Hoja Helada",
      description: "Después del 3er golpe de (Ataque Básico: Recorte de Congelación Relámpago), (Técnica Especial EX: Tiburonami), (Contraataque de Evasión: Arrecife), y (Seguimiento de Asistencia: Crucero Tiburón), lanza automáticamente (Ataque Básico: Hoja Helada), infligiendo múltiples instancias de Daño Hielo a todos los enemigos en una gran área adelante. Inflige instancias adicionales de Daño Hielo contra enemigos Medianos y Grandes. Después de la habilidad, Ellen gana el efecto (Carga Rápida). (Ataque Básico: Hoja Helada) no afecta la rama o forma de la habilidad original. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Vórtice",
      description: "Presiona [Icono Dodges] para activar: Un esquive rápido. El personaje es invulnerable mientras usa esta habilidad. Cuando se activa una (Evasión Perfecta), Ellen gana el efecto (Carga Rápida), reduciendo el tiempo de carga del (Ataque de Carrera: Emboscada Ártica), durando hasta 5 segundos o hasta que se active.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Evasión: Caza Errante",
      description: "Mantén presionado o presiona dos veces [Icono Dodges] para activar: Entra en el estado (Deambular), permitiendo movimiento de carrera. En el estado (Deambular), usa el stick/joystick para controlar la dirección de Ellen, y suelta para detenerse. Ellen es invulnerable por un breve tiempo después de la activación.",
      tags: ["Evasión", "Deambular"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Emboscada Ártica",
      description: "Mientras estás en el estado (Deambular), presiona [Icono Ataque] para activar: Lanza un ataque giratorio a enemigos antes de abrir sus tijeras para un golpe de Tijera Veloz, infligiendo Daño Hielo. Gana 1 punto de (Carga de Congelación Relámpago) cuando el golpe de Tijera Veloz golpea. \nMientras estás en el estado (Deambular), mantén [Icono Ataque] para activar: Realiza un ataque giratorio contra el enemigo, luego separa las tijeras para desatar un golpe de Tijera Cargado, infligiendo Daño Hielo masivo. Gana 3 puntos de (Carga de Congelación Relámpago) cuando el golpe de Tijera Cargado golpea. Si el enemigo es Congelado, siempre activa (Rompehielo). El nivel de Anti-Interrupción aumenta mientras se carga la habilidad, y el daño recibido se reduce en un 40%. Al recibir Daño de enemigos mientras la habilidad se está cargando, esa instancia de Daño se anula, y la carga se completa instantáneamente. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Ataque de Carrera"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Ola Monstruosa",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza un ataque de corte deslizante a enemigos en frente, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque de Carrera"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Chasquido Frío",
      description: "Mientras (Congelación Relámpago) está activa, presiona [Icono Ataque] durante una evasión para activar: Lanza un ataque de corte deslizante a enemigos en frente, infligiendo Daño Hielo. Consume 1 (Carga de Congelación Relámpago).",
      tags: ["Hielo", "Ataque de Carrera"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Arrecife",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Se mueve rápidamente a través de enemigos con las tijeras abiertas para un golpe cortante, infligiendo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Contraataque de Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Derrape",
      description: "Presiona [Icono Especial] para activar: Usa un ataque rápido de barrido de cola en frente, infligiendo Daño Hielo. El nivel de Anti-Interrupción aumenta mientras se usa esta habilidad.",
      tags: ["Hielo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial EX: Golpe de Cola",
      description: "Con suficiente energía, presiona [Icono Especial EX] para activar: Realiza un poderoso ataque de látigo con la cola que inflige Daño Hielo masivo. Gana 1 (Carga de Congelación Relámpago) al golpear a un enemigo. El personaje es invulnerable mientras usa esta habilidad. Después de ejecutar el movimiento, puedes seguir inmediatamente con el 3er golpe de un (Ataque Básico).",
      tags: ["Hielo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial EX: Tiburonami",
      description: "Con suficiente Energía y después de ejecutar (Técnica Especial EX: Golpe de Cola), presiona [Icono Especial EX] para activar: Realiza una poderosa serie de cortes hacia adelante que infligen Daño Hielo masivo. Gana 1 (Carga de Congelación Relámpago) al golpear a un enemigo. El personaje es invulnerable mientras usa esta habilidad. Después de ejecutar el movimiento, puedes seguir inmediatamente con el 3er golpe de un (Ataque Básico).",
      tags: ["Hielo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Técnica en Cadena: Avalancha",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Cae desde arriba y desata una tormenta de hielo, infligiendo Daño Hielo masivo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Invierno Eterno",
      description: "Cuando el Índice de Decibelios está al Máximo, presiona [Icono Definitiva] para activar: Cae desde arriba y desata una tormenta de hielo antes de un poderoso golpe de tijera, infligiendo Daño Hielo masivo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Dientes Afilados",
      description: "Cuando Ellen lanza un golpe de Tijera Cargado durante (Ataque de Carrera: Emboscada Ártica), o consume (Carga de Congelación Relámpago) para activar (Ataque Básico: Recorte de Congelación Relámpago), el Daño Crítico de la habilidad aumenta en un {VALOR_1}. El efecto anterior también se aplica a (Ataques en Cadena), (Definitivas), (Ataque Básico: Hoja Helada), y (Ataque Básico: Ola de Hoja Glacial).",
      tags: ["Pasiva Central", "Crit DMG"]
    },
    {
      type: "Pasiva Central",
      name: "Habilidad Adicional: Tormenta Creciente",
      description: "Cuando otro personaje en tu escuadrón es un personaje de Aturdimiento o comparte el mismo Atributo o Facción:\nCuando Ellen inflige Daño Hielo, el Daño Hielo subsiguiente aumenta en un 3% por 10s. Este efecto puede acumularse hasta 10 veces, y activaciones repetidas reinician la duración.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Centinela Tiburón",
      description: "Cuando el personaje activo es lanzado por los aires, presiona [Icono Assist] para activar: Se mueve rápidamente a través del enemigo con tijeras abiertas para un golpe de corte, infligiendo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad. Cuando el personaje en el campo es lanzado, arrastra el stick/joystick y presiona [Icono Assist] para activar: Entra en el estado (Deambular), habilitando movimiento de carrera. Mientras estás en el estado (Deambular), usa el stick/joystick para cambiar direcciones y suelta para detenerse. El personaje es invulnerable brevemente al activar la habilidad. Al activar una (Asistencia Rápida), Ellen gana el efecto (Carga Rápida), acortando el tiempo de carga de (Ataque de Carrera: Emboscada Ártica), durando hasta 5s o hasta que se active una vez.",
      tags: ["Hielo", "Asistencia Rápida"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Impacto de Frente de Ola",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Realiza un bloqueo al ataque del enemigo, infligiendo Aturdimiento masivo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia Defensiva"]
    },
    {
      type: "Asistencia",
      name: "Seguimiento de Asistencia: Crucero Tiburón",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Carga y corta a enemigos en frente, infligiendo Daño Hielo. Presiona repetidamente o mantén presionado [Icono Ataque] durante el ataque para extender la duración de la habilidad. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Seguimiento de Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Augurio Glacial",
      description: "Al golpear a un enemigo con un golpe de Tijera Veloz durante (Ataque de Carrera: Emboscada Ártica), las (Cargas de Congelación Relámpago) obtenidas aumentan a 3. Al golpear a un enemigo con un golpe de Tijera Cargado durante (Ataque de Carrera: Emboscada Ártica), las (Cargas de Congelación Relámpago) obtenidas aumentan a 6. Por cada (Carga de Congelación Relámpago) consumida, la Probabilidad de Crítico de Ellen aumenta en un 2% por 15s, acumulándose hasta 6 veces. La duración de cada acumulación se calcula por separado."
    },
    {
      type: "Mindscape 2",
      name: "Depredador del Océano Ártico",
      description: "El 3er golpe de (Ataque Básico: Recorte de Congelación Relámpago) puede ser seguido directamente por (Técnica Especial EX: Tiburonami). Por cada punto de (Carga de Congelación Relámpago) al usar una (Técnica Especial EX), el Daño Crítico del ataque actual aumenta en un 20%, hasta un máximo de 60%."
    },
    {
      type: "Mindscape 3",
      name: "Intolerante a las Horas Extra",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2"
    },
    {
      type: "Mindscape 4",
      name: "Escarcha Eterna",
      description: "Siempre que un miembro del escuadrón (Congela) o Aturde a un enemigo, Ellen gana 6 (Cargas de Congelación Relámpago) y el efecto (Carga Rápida). También recupera 4 de Energía. El efecto de recuperación de Energía puede activarse una vez cada 10s."
    },
    {
      type: "Mindscape 5",
      name: "Sueño Adecuado",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2"
    },
    {
      type: "Mindscape 6",
      name: "El Festín Comienza",
      description: "Cuando Ellen usa una (Técnica Especial EX), (Ataque en Cadena), o gana (Carga Rápida), su Ratio de PEN aumenta en un 20% por 6s. También gana 1 acumulación de (El Festín Comienza), hasta un máximo de 3 acumulaciones. Con 3 acumulaciones de (El Festín Comienza), usar un golpe de Tijera Cargado durante (Ataque de Carrera: Emboscada Ártica) consume todas las acumulaciones, aumentando el Daño del ataque actual en un 250%."
    }
  ]
};
