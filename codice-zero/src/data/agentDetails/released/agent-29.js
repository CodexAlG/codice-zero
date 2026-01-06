// Agent 29 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 612,
      max: 7612
    },
    atk: {
      min: 96,
      max: 665
    },
    def: {
      min: 49,
      max: 606
    },
    impact: 118,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "92",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "impact",
    valuePerNode: 6
  },
  coreSkillScaling: [
    ["15%"],
    ["17.5%"],
    ["20%"],
    ["22.5%"],
    ["25%"],
    ["27.5%"],
    ["30%"],
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Golpe Veloz",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 3 ataques hacia adelante, causando Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Golpe en Salto",
      description: "Mantén [Icono Ataque] para activar: Salta hacia adelante y desata una serie de cortes, causando Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Disparo Inverso",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Ventaja del Primer Golpe",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Se lanza hacia adelante y corta, causando Daño Físico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Retribución Implacable",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Lanza estocadas a los enemigos en frente, luego sigue con un corte veloz, causando Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Garra Desgarradora",
      description: "Presiona [Icono Especial] para activar: Realiza un ataque de perforación rápido de ida y vuelta, causando Daño Físico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Garra Desgarradora - Sombra de Pesadilla",
      description: "Mientras Pulchra está en el estado (Marcha del Cazador), y cuando otro personaje activo en el escuadrón golpea a un enemigo con un ataque pesado de una (Técnica Especial) o (Técnica Especial EX): Corre de ida y vuelta perforando enemigos centrado en el objetivo, causando Daño Físico. Después de usar esta habilidad, si otro personaje activo en el escuadrón golpea a un enemigo, Pulchra repetirá el ataque hasta 5 veces adicionales, siendo el ataque final un Movimiento Final más poderoso. El personaje es invulnerable mientras usa esta habilidad. (Técnica Especial: Garra Desgarradora - Sombra de Pesadilla) es un ataque de (Reverberación).",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Garra Desgarradora - Paso Flash",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Perfora de ida y vuelta repetidas veces, causando masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Contrato - Guardaespaldas",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Lanza estocadas a enemigos en frente, seguido de cortes rápidos, causando Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Evasiva: Contrato - Combate Externalizado",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Esquiva el ataque enemigo y activa (Visión Vital). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Precio Independiente",
      description: "Presiona [Icono Ataque] después de una (Asistencia Evasiva) para activar: Salta hacia adelante en el aire y dispara, causando Daño Físico. Al activar esta habilidad, consume 1 Punto de Asistencia para entrar en el estado (Marcha del Cazador). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Oye, No Esperabas Eso, ¿Verdad?",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata un disparo cargado hacia adelante, causando masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Oh, ¿Hora de Jugar?",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata un disparo poderoso a los enemigos en una gran área adelante, causando masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Instinto de Cazador",
      description: "Cuando Pulchra activa una (Técnica Especial EX), (Ataque de Asistencia), (Ataque en Cadena) o (Definitiva), entra en el estado (Marcha del Cazador), aumentando el Aturdimiento que causa en un {VALOR_1} por 6s. Después de cambiar a otro personaje, si Pulchra todavía está en el estado (Marcha del Cazador), el estado durará hasta que Pulchra vuelva a entrar. Mientras está en el estado (Marcha del Cazador) y como el personaje activo, cuando Pulchra asesta un ataque pesado sobre enemigos, puede activar una (Asistencia Rápida) del personaje anterior en el escuadrón.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Socio de Negocios",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Ataque) o (Anomalía) o comparte la misma Facción: Cuando Pulchra golpea enemigos con (Técnica Especial: Garra Desgarradora - Sombra de Pesadilla), (Técnica Especial EX: Garra Desgarradora - Paso Flash), (Ataque de Asistencia: Precio Independiente), (Ataque en Cadena: Oye, No Esperabas Eso, ¿Verdad?) o (Definitiva: Oh, ¿Hora de Jugar?), aplica el efecto (Trampa Vinculante) por 15s. Después de aplicar (Trampa Vinculante), el DAÑO de (Reverberación) de todas las unidades contra el objetivo aumenta en un 30%.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Interés Propio",
      description: "Al causar DAÑO a enemigos afectados por (Trampa Vinculante), aumenta su propia Probabilidad de CRIT en un 10%.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Oportunista",
      description: "Mientras está en el estado (Marcha del Cazador) de la Pasiva Central: Instinto de Cazador, el ATK de Pulchra aumenta en un 10% adicional.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Territorial",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Placer de la Caza",
      description: "Reduce el Coste de Energía de activar (Técnica Especial EX: Garra Desgarradora - Paso Flash) en 5.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Juego de Cola",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Detrás de la Máscara",
      description: "El DAÑO de (Técnica Especial: Garra Desgarradora - Sombra de Pesadilla) aumenta en un 15%, y el número de veces que el ataque repetido puede activarse aumenta en 2. El efecto (Trampa Vinculante) de la Habilidad Adicional: Socio de Negocios ahora también aplica a todos los tipos de daño, no solo DAÑO de (Reverberación).",
      tags: ["Mindscape 6"]
    }
  ]
};
