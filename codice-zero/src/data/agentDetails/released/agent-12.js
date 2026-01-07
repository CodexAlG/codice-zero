// Agent 12 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 655,
      max: 8145
    },
    atk: {
      min: 93,
      max: 649
    },
    def: {
      min: 50,
      max: 622
    },
    impact: 88,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "90",
    anomalyMastery: "93",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "energia",
    valuePerNode: 0.12
  },
  materials: {
    weeklyBoss: {
      name: "Ferocious Grip",
      icon: "Item_Ferocious_Grip.webp",
    },
    eliteBoss: {
      name: "Higher Dimensional Data: Murderous Obituary",
      icon: "Item_Higher_Dimensional_Data_Murderous_Obituary.webp",
    }
  },
  coreSkillScaling: [
    ["20%"],
    ["25%"],
    ["30%"],
    ["34%"],
    ["36%"],
    ["38%"],
    ["40%"], // Placeholders for user to fill
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Combo Astuto",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 3 golpes, infligiendo Daño Físico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Hago Lo Que Quiero",
      description: "Después de usar una (Técnica Especial), (Técnica Especial EX), (Ataque en Cadena), o (Definitiva), Nicole puede recargar, y su (Ataque Básico) y (Ataque de Carrera) son mejorados, aumentando el poder de sus balas.",
      tags: ["Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasión: Demonio de la Velocidad",
      description: "Presiona [Icono Dodges] para activar: Una rápida evasión de carrera. El personaje es invulnerable mientras usa esta habilidad. Mueve el stick/joystick para evadir, luego sostén [Icono Dodges] para recargar mientras evades, mejorando (Ataques Básicos) y (Ataques de Carrera) hasta 8 veces.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Caja Sorpresa",
      description: "Cuando mueves el stick/joystick durante una evasión, presiona [Icono Ataque]: Corre en la dirección objetivo y golpea enemigos cercanos, infligiendo Daño Físico. Cuando no mueves el stick/joystick durante una evasión, presiona [Icono Ataque]: Salta hacia atrás y lanza un golpe a distancia contra enemigos en frente, infligiendo Daño Físico. Recarga automáticamente después del ataque para mejorar su (Ataque Básico) y (Ataque de Carrera), hasta 8 veces.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Bombardeo Desviado",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Evade hacia atrás y envía un golpe a distancia a enemigos en frente, infligiendo Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad. Recarga automáticamente después del ataque para mejorar (Ataque Básico) y (Ataque de Carrera) hasta 8 veces.",
      tags: ["Etéreo", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Bala Azucarada",
      description: "Presiona [Icono Especial] para activar: Desata un golpe a distancia contra enemigos en frente, infligiendo Daño Etéreo. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad. Recarga automáticamente después del ataque para mejorar (Ataque Básico) y (Ataque de Carrera) hasta 8 veces.",
      tags: ["Etéreo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Técnica Especial EX: Bala Azucarada Rellena",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Un poderoso golpe a distancia, generando un (Campo de Energía) que atrae a los enemigos hacia su centro para infligir Daño Etéreo. Mantén [Icono Especial EX] presionado para cargar este ataque, durante el cual se genera un pequeño (Campo de Energía) en la boca del cañón mientras se consume Energía, infligiendo Daño bonus a enemigos cercanos. El personaje es invulnerable mientras usa esta habilidad. Una (Asistencia Rápida) se activa cuando esta habilidad golpea a un enemigo. Recarga automáticamente después del ataque para mejorar (Ataque Básico) y (Ataque de Carrera) hasta 8 veces.",
      tags: ["Etéreo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Paliza Etérea",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un poderoso golpe a distancia a enemigos en una pequeña área, generando un (Campo de Energía) que atrae a los enemigos hacia su centro para infligir Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad. Una (Asistencia Rápida) se activa cuando esta habilidad golpea a un enemigo. Recarga automáticamente después del ataque para mejorar (Ataque Básico) y (Ataque de Carrera) hasta 8 veces.",
      tags: ["Etéreo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Granada Etérea",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata un poderoso golpe a distancia a enemigos en una pequeña área, generando un (Campo de Energía) que atrae a los enemigos hacia su centro para infligir Daño Etéreo. Cuando usa esta habilidad, otros miembros del escuadrón recuperan 10 de Energía. El siguiente personaje en cambiar gana 20 de Energía adicional. El personaje es invulnerable mientras usa esta habilidad. Una (Asistencia Rápida) se activa cuando esta habilidad golpea a un enemigo. Recarga automáticamente después del ataque para mejorar (Ataque Básico) y (Ataque de Carrera) hasta 8 veces.",
      tags: ["Etéreo", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Maletín Mecánico",
      description: "Después de golpear a un enemigo con una (Técnica Especial), (Técnica Especial EX), (Ataque en Cadena), o (Definitiva), Nicole puede recargar, mejorando su (Ataque Básico) y (Ataque de Carrera). Cuando sus balas mejoradas o (Campo de Energía) golpea a un enemigo, la DEF del objetivo se reduce en {VALOR_1} por 3.5s.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Liebre de Muchas Madrigueras",
      description: "Cuando otro personaje en tu escuadrón comparte el mismo Atributo o Facción: Cuando la (Pasiva Central: Maletín Mecánico) de Nicole aplica un debuff a un enemigo, todas las unidades infligen 25% más Daño Etéreo al objetivo por 3.5s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Bombardeo de Emergencia",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Evade hacia atrás y envía un golpe a distancia a enemigos en frente, infligiendo Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad. Recarga automáticamente después del ataque para mejorar (Ataque Básico) y (Ataque de Carrera) hasta 8 veces.",
      tags: ["Etéreo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: ¡La Liebre Contraataca!",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Ventana de Oportunidad",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Carga hacia adelante y bombardea enemigos, infligiendo Daño Etéreo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Bomba Sobrecargada",
      description: "El Daño y la Acumulación de Anomalía infligida por la (Técnica Especial EX) de Nicole aumenta en un 16%. Por cada 0.1s adicional de carga cuando Nicole activa su (Técnica Especial EX), la duración del (Campo de Energía) creado en la ubicación objetivo aumenta en 0.15s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Dispositivo de Carga",
      description: "Nicole recupera 5 de Energía cuando el debuff de (Pasiva Central: Maletín Mecánico) es activado. Este efecto puede activarse una vez cada 15s.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Astucia de Liebre",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Expansión de Campo",
      description: "Cuando Nicole usa su (Técnica Especial EX), (Ataque en Cadena), o (Definitiva), el diámetro del (Campo de Energía) generado en la ubicación objetivo aumenta en 3m.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Estrella de la Industria",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Campo de Energía Corruptor",
      description: "Cuando los (Campos de Energía) de Nicole infligen Daño a un enemigo, la Tasa Crítica de todas las unidades contra ese enemigo aumenta en un 1.5%, acumulándose hasta 10 veces, y durando 12s. La duración de cada acumulación se calcula por separado.",
      tags: ["Mindscape 6"]
    }
  ]
};
