// Agent 26 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 617,
      max: 7673
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
    anomalyRate: "116",
    anomalyMastery: "148",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "maestria",
    valuePerNode: 30
  },
  coreSkillScaling: [
    ["750%", "14%"],
    ["875%", "15%"],
    ["1000%", "16%"],
    ["1125%", "17%"],
    ["1250%", "18%"],
    ["1375%", "19%"],
    ["1500%", "20%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Kazahana",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 5 cortes hacia adelante, los primeros dos causan Daño Físico, y los últimos tres causan Daño Hielo. Bloquea ataques enemigos durante el 5to golpe del (Ataque Básico).",
      tags: ["Físico", "Hielo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Shimotsuki",
      description: "Con al menos 2 puntos de (Escarcha Caída), mantén [Icono Ataque] para activar: Hoshimi Miyabi envaina su espada, entra en (Postura Shimotsuki) y comienza a cargar. Cada nivel de carga consumirá 2 puntos de (Escarcha Caída), hasta un máximo de tres niveles de carga. Al soltar [Icono Ataque], o cuando (Escarcha Caída) se agote completamente, Hoshimi Miyabi desenvainará su espada y desatará un poderoso corte hacia adelante basado en el nivel de carga actual, causando masivo Daño Hielo. Luego sale de la (Postura Shimotsuki). El personaje es invulnerable durante (Postura Shimotsuki). Hoshimi Miyabi puede tener hasta 6 puntos de (Escarcha Caída). Al entrar al campo de batalla, Hoshimi Miyabi obtiene inmediatamente 3 puntos de (Escarcha Caída).",
      tags: ["Hielo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Mizutori",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad. Mientras esquivas, presiona repetidamente o mantén [Icono Dodges] para activar: Una evasión de carrera que cubre mucho terreno. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Fuyubachi",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Corta a enemigos en frente, causando Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Kan Suzume",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Corta a enemigos en frente, causando Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Miyuki",
      description: "Presiona [Icono Especial] para activar: Rápidamente desenvaina su espada y corta hacia adelante, causando Daño Hielo. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Hisetsu",
      description: "Con suficiente Energía, presiona [Icono Especial] para activar: Arremete hacia adelante, desatando poderosos cortes contra enemigos en el camino, causando masivo Daño Hielo. Al activar esta habilidad, gana 2 puntos de (Escarcha Caída). El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, con suficiente Energía, presiona [Icono Especial] de nuevo para activar: Consume Energía extra y desata un poderoso ataque de seguimiento contra enemigos en frente, causando masivo Daño Hielo. Al activar esta habilidad, gana 2 puntos de (Escarcha Caída). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Llamada de la Primavera",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata un poderoso corte a enemigos en frente en una gran área, causando masivo Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Nieve Persistente",
      description: "Cuando el Nivel de Decibelios está al [Maximo], presiona [Icono Definitiva] para activar: Desata un poderoso corte a enemigos en frente en una gran área, causando masivo Daño Hielo. Al activar esta habilidad, gana 3 puntos de (Escarcha Caída). Hoshimi Miyabi regenera 10 de Energía si esta habilidad golpea a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Frío Abrasador",
      description: "Cuando Hoshimi Miyabi causa Daño Hielo, aplica (Fuego Helado) al objetivo, durando 30s. Cuando acumula (Acumulación de Anomalía de Hielo) contra objetivos con (Fuego Helado), aumenta la Tasa de (Acumulación de Anomalía de Hielo) en un 100% de la Prob. Crítica de Hoshimi Miyabi, hasta un aumento máximo del 80%. A medida que Hoshimi Miyabi acumula (Acumulación de Anomalía de Hielo), tiene su propio medidor de Acumulación de Anomalía de Atributo independiente y activa (Congelación), (Rompehielo), y (Quemadura por Frío) que pueden reaccionar con otras Anomalías de Atributo, incluyendo (Anomalía de Atributo de Hielo), para activar (Desorden). Cuando Hoshimi Miyabi aplica (Quemadura por Frío) a enemigos con (Fuego Helado), consumirá el (Fuego Helado) para activar (Quemadura Gélida - Ruptura), causando Daño Hielo igual al {VALOR_1} del ATK de Hoshimi Miyabi y causando que el objetivo entre en el estado (Quemadura Gélida). Todas las unidades acumulan {VALOR_2} más de Acumulación de Anomalía contra enemigos bajo el estado (Quemadura Gélida), pero Hoshimi Miyabi no puede volver a aplicar (Fuego Helado) a estos enemigos. El estado (Quemadura Gélida) termina cuando (Quemadura por Frío) expira. Mientras este estado permanece activo, activar otra Anomalía de Atributo sobrescribirá (Quemadura por Frío) y eliminará (Quemadura Gélida). Al activar (Quemadura Gélida - Ruptura), Hoshimi Miyabi obtiene 1 punto de (Escarcha Caída). Este efecto puede activarse una vez cada 10s.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Disfrutar en el Frío",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Soporte) o comparte la misma Facción: El DAÑO de (Ataque Básico: Shimotsuki) aumenta en un 60%. Cuando cualquier miembro del escuadrón activa (Desorden), Hoshimi Miyabi obtiene 2 puntos de (Escarcha Caída) y (Ataque Básico: Shimotsuki) durante la siguiente (Postura Shimotsuki) ignorará 30% de la RES al Hielo del objetivo.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Pétalos Danzantes",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Corta a enemigos en frente, causando Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Pétalos a la Deriva",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parrea el ataque enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Pétalos Cayendo",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Carga y corta a enemigos en frente, causando Daño Hielo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Hielo", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Escarcha Sobre la Nieve",
      description: "Mientras está en (Postura Shimotsuki), cada 1 punto de (Escarcha Caída) consumido permitirá a (Ataque Básico: Shimotsuki) ignorar 6% de la DEF, acumulándose hasta 6 veces y durando hasta que (Postura Shimotsuki) termine. Cuando el corte para nivel de carga tres de (Ataque Básico: Shimotsuki) golpea un enemigo bajo (Quemadura Gélida), eliminará inmediatamente el estado (Quemadura Gélida) y aumentará la Tasa de Acumulación de Anomalía de todos los miembros del escuadrón en un 20% por 10s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Técnica de Respiración",
      description: "El DAÑO de (Ataque Básico: Kazahana) y (Contraataque de Evasión) aumenta en un 30%. Hoshimi Miyabi gana 1 punto de (Escarcha Caída) cuando el movimiento final del 5to golpe de (Ataque Básico: Kazahana) golpea a un enemigo. Al entrar en el campo de batalla, Hoshimi Miyabi obtiene inmediatamente 6 puntos de (Escarcha Caída) y su Probabilidad de CRIT aumenta en un 15%.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Disciplina Marcial",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Ruptura",
      description: "El DAÑO de (Quemadura Gélida - Ruptura) aumenta en un 30%. Al activar (Quemadura Gélida - Ruptura), Hoshimi Miyabi genera 250 Decibelios más.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Aniversario",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Talento Prodigioso",
      description: "Durante (Postura Shimotsuki), Hoshimi Miyabi obtiene (Polar), lo cual aumenta el DAÑO de (Ataque Básico: Shimotsuki) en un 30%. Después de obtener (Polar), Hoshimi Miyabi automáticamente desenvainará su espada y desatará poderosos cortes basados en el nivel de carga actual al consumir (Escarcha Caída). Antes de que (Escarcha Caída) se agote completamente, el desenvainado y cortes no interrumpirán la carga bajo (Postura Shimotsuki). Cada ocurrencia de (Postura Shimotsuki) puede realizar hasta 3 desenvainados y cortes.",
      tags: ["Mindscape 6"]
    }
  ]
};
