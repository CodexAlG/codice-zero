// Agent 24 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 677,
      max: 8253
    },
    atk: {
      min: 109,
      max: 797
    },
    def: {
      min: 49,
      max: 612
    },
    impact: 119,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "91",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "impact",
    valuePerNode: 6
  },
  coreSkillScaling: [
    ["1%", "10%"],
    ["1.17%", "11.7%"],
    ["1.33%", "13.3%"],
    ["1.5%", "15%"],
    ["1.67%", "16.7%"],
    ["1.83%", "18.3%"],
    ["2%", "20%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Puño de Trueno Forma-L",
      description: "Presiona o mantén [Icono Ataque] para activar: Ejecuta hasta cinco golpes hacia adelante, causando Daño Físico y Daño Fuego. Durante el 3er golpe de (Ataque Básico), mueve el joystick y presiona repetidamente o mantén [Icono Ataque] para desatar una serie de ataques cuerpo a cuerpo de seguimiento. Suelta el joystick para seguir con el 4to golpe de (Ataque Básico). Mientras ejecutas el golpe ligero inicial en el 5to golpe de (Ataque Básico), mueve el joystick y presiona repetidamente o mantén [Icono Ataque] para seguir alternando entre el golpe ligero y el 4to golpe de (Ataque Básico). Suelta el joystick para seguir con el combo de jab subsiguiente. Continúa presionando repetidamente o manteniendo [Icono Ataque] para extender la duración del combo de jab. Cuando dejes de presionar o mantener [Icono Ataque], o cuando el combo alcance su duración máxima, lanza un Movimiento Final hacia adelante. Lighter es invulnerable durante el Movimiento Final. Durante el 5to golpe de (Ataque Básico), Lighter recibe 40% menos de DAÑO. Mientras está en el estado (Estallido de Moral), el nivel de Anti-Interrupción aumenta durante el 5to golpe de (Ataque Básico), y el efecto de reducción de DAÑO aumenta al 80%.",
      tags: ["Físico", "Fuego", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Deslizamiento Sombrío",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad. Presiona [Icono Dodges] mientras el personaje está atacando para activar: Ejecuta una evasión rápida de deslizamiento en la dirección del joystick. Esta habilidad no interrumpirá el conteo de combo para (Ataques Básicos). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Golpe de Carga",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Golpea rápidamente a enemigos en frente, causando Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Destello Abrasador",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Golpea a enemigos en frente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad. Después de usar la habilidad, presiona o mantén [Icono Ataque] para seguir inmediatamente con el 5to golpe de (Ataque Básico).",
      tags: ["Fuego", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Gancho del Amanecer Forma-V",
      description: "Presiona [Icono Especial] para activar: Golpea a enemigos en frente con un gancho, causando Daño Fuego. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad. Presiona [Icono Especial] durante una evasión de deslizamiento para activar: Golpea hacia adelante con una serie de puñetazos, causando Daño Fuego. Esta habilidad no interrumpirá el conteo de combo para (Ataques Básicos). El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Gancho del Amanecer Forma-V - Distancia Completa",
      description: "Con suficiente Energía, presiona [Icono Especial EX ] para activar: Golpea a enemigos en frente con un gancho potente, saltando en el aire y causando masivo Daño Fuego. Durante el movimiento, presiona [Icono Especial EX] de nuevo para gastar Energía adicional y realizar un ataque de seguimiento potente, causando masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad. Después de usar el movimiento, presiona o mantén [Icono Ataque] para transicionar al 4to golpe de (Ataque Básico). Durante la evasión de deslizamiento, con suficiente Energía, presiona [Icono Especial EX] para activar: Ejecuta un combo de puñetazos potente hacia adelante, causando masivo Daño Fuego. Usar esta habilidad no romperá el conteo de combo para (Ataques Básicos). El personaje es invulnerable mientras usa esta habilidad. Después del ataque, presiona o mantén [Icono Ataque] para transicionar inmediatamente al 5to golpe de (Ataque Básico).",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Sol Abrasador Forma-V",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata un golpe poderoso a enemigos en frente en una pequeña área, causando masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Infierno Coronado Forma-W",
      description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Desata un golpe poderoso en una gran área alrededor, causando masivo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Acelerante",
      description: "Lighter gana automáticamente (Moral) con el tiempo, a una tasa de 2.9 puntos por segundo. Por cada punto de Energía consumido por cualquier miembro del escuadrón, Lighter recupera 0.26 (Moral) adicional, hasta un máximo de 100. Cuando (Moral) alcanza 80, la próxima vez que Lighter entra en batalla inmediatamente lanza una (Asistencia Rápida). Una vez que (Moral) es 80 o mayor, ejecutar el 5to golpe de (Ataque Básico) pone a Lighter en el estado (Estallido de Moral), mejorando el poder del golpe ligero inicial, combo de jab, y el Movimiento Final del 5to golpe de su (Ataque Básico). Cuando una habilidad golpea a un enemigo con su poder aumentado, consumirá continuamente (Moral). Con cada 10 puntos de (Moral) consumidos, el Impacto de Lighter aumenta en un {VALOR_1}, hasta un aumento máximo de {VALOR_2}, y durando 6s. En el estado (Estallido de Moral), Lighter ya no ganará automáticamente (Moral) con el tiempo. Si su (Moral) se agota durante un golpe ligero inicial o combo de jab, automáticamente seguirá con un Movimiento Final más poderoso. En el estado (Estallido de Moral), cuando golpes ligeros iniciales o combos de jab golpean enemigos, la Res Hielo y Res Fuego del objetivo se reducen en un 15%, durando 30s. En el estado (Estallido de Moral), cuando el Movimiento Final golpea a un enemigo, aplica el efecto (Colapso) en el objetivo, extendiendo su duración de (Aturdimiento) en 3s. El efecto (Colapso) puede activarse solo una vez en el mismo objetivo antes de que se recupere del (Aturdimiento). Cuando el Movimiento Final del 5to golpe de (Ataque Básico) golpea a un enemigo, cuando cambia fuera del campo, o cuando su (Moral) se agota, Lighter saldrá del estado (Estallido de Moral), manteniendo cualquier (Moral) no gastada.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Espíritu de Lucha",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Ataque) o comparte la misma Facción: Mientras está bajo el estado (Estallido de Moral), cuando el 5to golpe del (Ataque Básico) de Lighter golpea a un enemigo, todos los miembros del escuadrón ganan una acumulación de (Júbilo), acumulándose hasta 20 veces y durando 30s. Las activaciones repetidas reinician la duración. Por cada acumulación de (Júbilo), el Daño Hielo y Daño Fuego de un Agente aumentan en 1.25%. Al obtener (Júbilo), si el Impacto de Lighter excede 170, cada 10 puntos adicionales de Impacto aumentarán el efecto de mejora proporcionado por cada acumulación de (Júbilo) en un 0.25% extra. Cuando cualquier miembro del escuadrón lanza un (Ataque en Cadena), refrescará la duración del (Júbilo) de todos los miembros del escuadrón. (Júbilo) puede aumentar el Daño Hielo y Daño Fuego de los Agentes en un máximo de 75%.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Destello Abrasador - Guardia",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea enemigos en frente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad. Después de usar la habilidad, presiona o mantén [Icono Ataque] para seguir inmediatamente con el 5to golpe de (Ataque Básico).",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Ruptura Veloz",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parrea el ataque enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Golpe de Carga - Estocada",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Golpea enemigos en frente, causando Daño Fuego. El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, presiona o mantén [Icono Ataque] para seguir inmediatamente con el 5to golpe de (Ataque Básico).",
      tags: ["Fuego", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "El Campeón",
      description: "Entre los debuffs impuestos por (Pasiva Principal: Acelerante), el efecto (Colapso) aumenta la duración de (Aturdimiento) en 5s, mientras reduce aún más la Res Hielo y Res Fuego en un 10%. El Movimiento Final más poderoso que sigue cuando la (Moral) de Lighter es completamente agotada durante un golpe ligero inicial o combo de jab causa 30% de DAÑO aumentado.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Bufanda Roja",
      description: "Al aplicar (Colapso) vía (Pasiva Principal: Acelerante) a enemigos, el Multiplicador de DAÑO de Aturdimiento del objetivo aumenta en un 25%. El aumento al Daño Hielo y Daño Fuego proporcionado por (Júbilo) de (Habilidad Adicional: Espíritu de Lucha) aumenta al 120% del original.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Líder Mercenario",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Gafas de Sol",
      description: "Cuando Lighter está fuera del campo, la Regen. de Energía para el personaje en el campo aumenta en un 10%. Al entrar en el estado (Estallido de Moral), Lighter restaura 4 de Energía para personajes fuera del campo. Este efecto puede activarse una vez cada 18s.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Tomador de Decisiones",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Sobreviviente",
      description: "La eficiencia de recuperación de (Moral) de Lighter aumenta al 200% de su valor original. Cuando Lighter asesta un golpe pesado en enemigos durante un (Ataque Básico), (Contraataque de Evasión), (Ataque Especial), (Ataque Especial EX), (Asistencia Rápida), (Ataque de Asistencia), (Ataque en Cadena), o (Definitiva), activará el efecto (Impacto Abrasador), causando 250% del ATK como Daño Fuego. Este efecto puede activarse una vez cada 8s en cada enemigo. Si el Impacto de Lighter excede 170 puntos, cada punto adicional aumentará aún más el multiplicador de (Impacto Abrasador) en un 5%, hasta un aumento máximo del 500%. El Movimiento Final más poderoso que sigue cuando la (Moral) de Lighter es completamente agotada durante un golpe ligero o combo de jab activará una activación adicional de (Impacto Abrasador) al golpear un enemigo, ignorando el enfriamiento del efecto.",
      tags: ["Mindscape 6"]
    }
  ]
};
