// Agent 28 - Detailed Stats and Skills
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
    ["12.5%"],
    ["14.6%"],
    ["16.7%"],
    ["18.8%"],
    ["20.8%"],
    ["23%"],
    ["25%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Alambre de Navaja",
      description: "Presiona [Icono Ataque] para activar: Lanza hasta cinco ataques hacia adelante, causando Daño Físico y Daño de Fuego. Cuando el 5to golpe asesta contra un enemigo, Evelyn usará su (Garrote Lunalux) para atar el objetivo primario y entrar en (Sello Vinculante).",
      tags: ["Físico", "Fuego", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Pasiva: Atadura",
      description: "Cuando Evelyn usa sus habilidades para causar DAÑO a enemigos, acumulará (Ascuas Ardientes). Cuando Evelyn consume (Ascuas Ardientes) para activar (Garrote) o consume Decibelios para realizar una (Definitiva), gana 1 (Punto de Atadura Ardiente). Una vez que Evelyn tiene 3 (Puntos de Atadura Ardiente), su siguiente uso de (Garrote) consumirá todos los (Puntos de Atadura Ardiente) para usar una versión de menor Nivel de Anti-Interrupción de (Ataque en Cadena: Lunalux - Trampa).",
      tags: ["Pasiva"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Garrote - Primera Forma",
      description: "Cuando (Ascuas Ardientes) está al 50% o más, mantén [Icono Ataque] o [Icono Especial] para activar: Consume 50% (Ascuas Ardientes) para usar (Garrote Lunalux) para realizar un ataque de corte, causando Daño de Fuego. Durante la activación de la habilidad, el nivel de Anti-Interrupción aumenta, y el DAÑO recibido se reduce en un 40%. Después de usar esta habilidad, gana 1 (Punto de Atadura Ardiente).",
      tags: ["Fuego", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Garrote - Segunda Forma",
      description: "Cuando (Ascuas Ardientes) está al 50% o más, después de usar (Ataque Básico: Garrote - Primera Forma), continúa manteniendo [Icono Ataque] o [Icono Especial] para activar: Consume 50% (Ascuas Ardientes) para usar (Garrote Lunalux) para realizar un ataque de seguimiento, causando Daño de Fuego. Durante la activación de la habilidad, el nivel de Anti-Interrupción aumenta, y el DAÑO recibido se reduce en un 40%. Después de usar esta habilidad, gana 1 (Punto de Atadura Ardiente).",
      tags: ["Fuego", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Paso de Arco",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Emboscada Perforante",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza una patada al enemigo en frente, causando Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Inversión Estranguladora",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Usa (Garrote Lunalux) para cortar a enemigos circundantes, causando Daño de Fuego. Cuando el ataque golpea a un enemigo, Evelyn usará (Garrote Lunalux) para atar el objetivo primario y entrar en (Sello Vinculante). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Posición Bloqueada",
      description: "Antes de entrar en (Sello Vinculante), presiona [Icono Especial] o [Icono Especial EX] para activar: Usa (Garrote Lunalux) para jalar al enemigo y carga hacia adelante con una patada, causando Daño de Fuego. Cuando el ataque golpea al enemigo, Evelyn usará (Garrote Lunalux) para atar el objetivo primario y entrar en (Sello Vinculante). El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Separación Vinculante - Primera Forma",
      description: "Después de entrar en (Sello Vinculante), presiona o mantén [Icono Especial] para activar: Centrado en el objetivo afectado por (Sello Vinculante), ata a enemigos circundantes y detona una explosión, causando Daño de Fuego. (Sello Vinculante) terminará después de la detonación. Esquiva ataques enemigos al activar la habilidad, y si una (Evasión Perfecta) se activa, gana un 25% de (Ascuas Ardientes) adicional. Después de atar a enemigos circundantes, presiona [Icono Dodges] para cancelar la detonación y seguir inmediatamente con el 3er golpe del (Ataque Básico). El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Separación Vinculante - Forma Final",
      description: "Después de entrar en (Sello Vinculante) y con suficiente Energía, presiona o mantén [Icono Especial EX] para activar: Centrado en el objetivo afectado por (Sello Vinculante), ata a enemigos circundantes y detona una explosión, causando masivo Daño de Fuego. (Sello Vinculante) terminará después de la detonación. Esquiva ataques enemigos al activar la habilidad, y si una (Evasión Perfecta) se activa, gana un 25% de (Ascuas Ardientes) adicional. Después de jalar a enemigos circundantes, presiona [Icono Dodges] para cancelar la detonación y seguir inmediatamente con el 3er golpe del (Ataque Básico). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Hoja Feroz",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Usa (Garrote Lunalux) para cortar a enemigos circundantes, causando Daño de Fuego. Cuando el ataque golpea a un enemigo, Evelyn usará (Garrote Lunalux) para atar el objetivo primario y entrar en (Sello Vinculante). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Protección Silenciosa",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea el ataque enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Interrupción del Curso",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Evelyn corta con (Garrote Lunalux), luego activa una explosión adelante, causando Daño de Fuego. Cuando el ataque golpea a un enemigo, Evelyn usará (Garrote Lunalux) para atar el objetivo primario y entrar en (Sello Vinculante). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Lunalux - Trampa",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Evelyn corta en frente con múltiples (Garrotes Lunalux) y detona una explosión, causando masivo Daño de Fuego a enemigos en el área. Cuando el ataque golpea un enemigo, Evelyn usa (Garrote Lunalux) para atar el objetivo primario y entra en (Sello Vinculante). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Garrote Lunalux - Timbre",
      description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Evelyn corta en frente con múltiples (Garrotes Lunalux) y detona una explosión, causando masivo Daño de Fuego a enemigos en el área. Al activar esta habilidad, Evelyn se quita su chaqueta y entra en el estado (Danza del Fuego Despertado), que dura toda la batalla. Mientras está en el estado (Danza del Fuego Despertado), cuando Evelyn consume (Puntos de Atadura Ardiente) para activar (Ataque en Cadena: Lunalux - Trampa), retendrá 1 punto de (Punto de Atadura Ardiente). Cuando el ataque golpea un enemigo, Evelyn usa (Garrote Lunalux) para atar el objetivo primario, entrando en (Sello Vinculante). El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, gana 1 (Punto de Atadura Ardiente).",
      tags: ["Fuego", "Técnica Definitiva"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Garrote Lunalux - Sombra",
      description: "Mientras está bajo el estado (Danza del Fuego Despertado), y cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Evelyn corta en frente con múltiples (Garrotes Lunalux) y detona una explosión, causando masivo Daño de Fuego a enemigos en el área. Cuando el ataque golpea un enemigo, Evelyn usa (Garrote Lunalux) para atar el objetivo primario y entra en (Sello Vinculante). El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, gana 1 (Punto de Atadura Ardiente).",
      tags: ["Fuego", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Enredo",
      description: "Al entrar en (Sello Vinculante), la Probabilidad de CRIT de Evelyn aumenta en un {VALOR_1}. Después de dejar (Sello Vinculante), retiene el buff por 10s. Si Evelyn cambia a otro personaje mientras está en (Sello Vinculante), automáticamente seguirá con (Técnica Especial: Separación Vinculante - Primera Forma).",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Punto de Emboscada",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Aturdimiento) o (Soporte): El DAÑO de (Ataque en Cadena) y (Definitiva) de Evelyn aumenta en un 30%. Cuando la Probabilidad de CRIT de Evelyn está al 80% o más, el multiplicador de DAÑO para su (Ataque en Cadena: Lunalux - Trampa), (Definitiva: Garrote Lunalux - Timbre) y (Definitiva: Garrote Lunalux - Sombra) aumenta al 125% del valor original.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Tejido de Sueños",
      description: "Al entrar en el campo de batalla, Evelyn gana inmediatamente 1,500 Decibelios. Enemigos afectados por (Sello Vinculante) serán (Atados). Cuando Evelyn ataca enemigos (Atados), ignora 12% de su DEF. Cuando Evelyn usa (Técnica Especial: Separación Vinculante - Primera Forma) o (Técnica Especial EX: Separación Vinculante - Forma Final), el efecto (Atado) se propaga a todos los enemigos golpeados por la habilidad. Este efecto (Atado) propagado dura por 10s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Danza de Fuego",
      description: "El ATK de Evelyn aumenta en un 15%. Cuando Evelyn usa (Ataque Básico: Garrote - Primera Forma) o (Ataque Básico: Garrote - Segunda Forma), las (Ascuas Ardientes) consumidas serán devueltas. Este efecto puede activarse una vez cada 25s. Cuando Evelyn consume (Punto de Atadura Ardiente) para activar (Ataque en Cadena: Lunalux - Trampa), el nivel de Interrupción de la habilidad aumenta.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Metamorfosis",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Melodía del Destino",
      description: "Al activar un (Ataque en Cadena) o (Definitiva), Evelyn gana inmediatamente un escudo igual al 10% de su HP Máx. Mientras este escudo existe, el Daño CRIT de Evelyn aumenta en un 40%.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Hilos Carmesí como el Amanecer",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Vínculo de Luz y Sombra",
      description: "Al lanzar un (Ataque en Cadena) o (Definitiva), Evelyn gana (Filo de Cuerda de Sombra) por 20s. Durante (Filo de Cuerda de Sombra), cuando Evelyn golpea su objetivo primario con un (Ataque Básico), (Ataque de Carrera), (Técnica Especial) o (Técnica Especial EX), ejecuta adicionalmente un ataque de seguimiento de (Garrote Lunalux), causando Daño de Fuego igual al 375% de su ATK a enemigos en el área. Este DAÑO es considerado DAÑO de (Ataque en Cadena) y puede activarse hasta 16 veces. Ganar otro (Filo de Cuerda de Sombra) refrescará el conteo de activación.",
      tags: ["Mindscape 6"]
    }
  ]
};
