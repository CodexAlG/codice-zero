// Agent 22 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 592,
      max: 7368
    },
    atk: {
      min: 124,
      max: 863
    },
    def: {
      min: 48,
      max: 600
    },
    impact: 83,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "118",
    anomalyMastery: "120",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "energy",
    valuePerNode: 0.12
  },
  materials: {
    weeklyBoss: {
      name: "Motor Escarlata",
      icon: "Item_Scarlet_Engine.webp",
    },
    eliteBoss: {
      name: "Datos de Dimensiones Superiores: Fantasma Sigiloso",
      icon: "Item_Higher_Dimensional_Data_Stealth_Phantom.webp",
    }
  },
  coreSkillScaling: [
    ["175%"],
    ["205%"],
    ["235%"],
    ["262%"],
    ["290%"],
    ["320%"],
    ["350%"]
  ],
  potentialSkillScaling: [
    ["1", "1%"],
    ["1.3", "1.25%"],
    ["1.6", "1.5%"],
    ["2", "1.75%"],
    ["2.5", "2%"]
  ],
  potential: {
    name: "Potencial Despierto: Fiesta del Punto de Ebullición",
    description: "Cuando la Recuperación de Energía inicial de Burnice es mayor o igual a 1.8, cada 0.1 puntos extra de Recuperación de Energía inicial aumenta la Maestría de Anomalía en {VALOR_1} y el Daño en un {VALOR_2}, hasta un aumento máximo de 25 de Maestría de Anomalía y 20% de Daño. El intervalo de (Postcombustión) de la (Pasiva Central: Cóctel Nitro-Combustible) se reduce a 1.35s."
  },
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Mezcla de Llama Directa",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 5 ataques hacia adelante, infligiendo Daño Físico y Daño Fuego.",
      tags: ["Físico", "Fuego", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Básico: Mezcla de Llama Mixta",
      description: "En el estado (Cóctel Nitro-Combustible), mantén presionado [Icono Ataque] para activar: Gira continuamente mientras rocía llamas alrededor, seguido de un Movimiento Final, luego activa una instancia extra de (Postcombustión) que no cuesta (Calor) e inflige Daño Fuego. Continuar manteniendo presionado extiende la duración de rociado de llamas.\nEl daño infligido por esta habilidad también cuenta como Daño de (Ataque de Asistencia).\nAl activarse, consume 20 de (Calor).\nEl nivel de Anti-Interrupción aumenta mientras se usa esta habilidad.\nDespués de ejecutar el Movimiento Final, presiona [Icono Especial EX] para seguir inmediatamente con la (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble).",
      tags: ["Fuego", "Ataque Básico", "Asistencia"]
    },
    {
      type: "Evasión",
      name: "Evasión: Impulso Fantasma Ardiente",
      description: "Presiona [Icono Dodges] para activar: Un esquive rápido. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque Rápido: Fermentación Peligrosa",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Realiza una embestida hacia adelante con el lanzallamas, infligiendo Daño Fuego.",
      tags: ["Fuego", "Ataque Rápido"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasión: Pasos Revoloteantes",
      description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Lanza una serie de ataques a los enemigos en frente mientras rocía llamas, infligiendo Daño Físico y Daño Fuego. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Fuego", "Contraataque de Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial: Método de Añejamiento de Calor Intenso",
      description: "Presiona [Icono Especial] para activar: Desata una ráfaga de fuego hacia adelante, infligiendo Daño Fuego; Mantén presionado [Icono Especial] para cargar, aumentando el poder del movimiento. El nivel de Anti-Interrupción aumenta mientras se usa esta habilidad.",
      tags: ["Fuego", "Técnica Especial"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial EX: Método de Agitación de Calor Intenso",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Rocía continuamente llamas con un lanzallamas de una mano, luego libera una ráfaga de fuego en línea recta hacia adelante, infligiendo Daño Fuego masivo. Continúa manteniendo presionado para consumir energía constantemente y extender la duración del rociado.\nMientras rocías continuamente, arrastra el stick/joystick para ejecutar un esquive lateral, ajustando tu posición en la dirección correspondiente.\nEl Nivel de Anti-Interrupción aumenta mientras se rocía continuamente, y el daño recibido se reduce en un 60%.\nEl personaje es invulnerable durante el esquive lateral y la ráfaga de fuego.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble",
      description: "Mientras usas (Técnica Especial EX: Método de Agitación de Calor Intenso), con suficiente Energía, presiona [Icono Especial EX] para activar: Usa ambos lanzallamas para rociar llamas continuamente, seguido de una ráfaga de fuego en una línea frontal, infligiendo Daño Fuego masivo. Continúa manteniendo presionado para consumir Energía y extender la duración del rociado.\nEl personaje es invulnerable durante el momento en que se activa el rociado y durante la activación de la ráfaga de fuego. El Nivel de Anti-Interrupción aumenta mientras se rocía, y el Daño recibido se reduce en un 60%.",
      tags: ["Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial",
      name: "Técnica Especial EX: Método de Lanzamiento de Calor Intenso",
      description: "Si Burnice tiene (Flujo de Ascuas), entrar al campo activa esta habilidad.\nDespués de que los compañeros de equipo activen (Postcombustión) 12 veces, Burnice gana 1 punto de (Flujo de Ascuas). Con (Flujo de Ascuas), la siguiente entrada de Burnice al campo consume 1 acumulación para activar automáticamente esta habilidad. Esta entrada se considera una (Asistencia Rápida). Cuando (Postcombustión) activada por (Ataque Básico: Mezcla de Llama Mixta) golpea a un enemigo, cuenta por 2 veces. Mientras posee (Flujo de Ascuas), el contador ya no aumenta. Consumir (Flujo de Ascuas) limpia el contador.\nSe desplaza rápidamente hacia adelante y pasa a través del enemigo, desatando un impacto ardiente que inflige Daño Físico y Daño Fuego.\nCuando el ataque pesado de la habilidad golpea a un objetivo sufriendo una Anomalía de Atributo de Etéreo, Eléctrico, Fuego, Físico o Hielo: inflige una instancia adicional de Daño igual al [CV=\"text-[#d946ef]\"]480%[/CV]/[CV=\"text-[#3b82f6]\"]240%[/CV]/[CV=\"text-[#ef4444]\"]600%[/CV]/[CV=\"text-[#eab308]\"]40%[/CV]/[CV=\"text-[#22d3ee]\"]60%[/CV] del Daño de la Anomalía original.\nEl aumento de Acumulación de Anomalía Fuego de la (Habilidad Adicional: Encendido de Fuego) se aplica a esta habilidad.\nEl personaje es invulnerable mientras usa esta habilidad.\nDespués de usar esta habilidad, presiona [Icono Especial EX] para seguir inmediatamente con (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble).",
      tags: ["Físico", "Fuego", "Técnica Especial EX"]
    },
    {
      type: "Técnica Definitiva",
      name: "Técnica en Cadena: Llama Alimentada por Combustible",
      description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Corre rápidamente hacia adelante mientras rocía llamas en todas direcciones, luego lanza una ráfaga de fuego en un área en forma de abanico hacia adelante, infligiendo Daño Fuego masivo. El personaje es invulnerable mientras usa esta habilidad. Después de usar la habilidad, presiona [Icono Especial EX] para seguir inmediatamente con (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble).",
      tags: ["Fuego", "Técnica en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Infierno Glorioso",
      description: "Cuando el Índice de Decibelios está al Máximo, presiona [Icono Definitiva] para activar: Corre hacia adelante rápidamente, luego salta en el aire y rocía llamas continuamente sobre una amplia área hacia adelante, infligiendo Daño Fuego masivo. Al saltar en el aire, se activará una (Asistencia Rápida). Si la (Asistencia Rápida) está activada, Burnice extenderá la duración de su rociado de llamas. Al activarse, recupera 50 de (Calor). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Fuego", "Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Cóctel Nitro-Combustible",
      description: "Cuando Burnice gasta Energía, acumula (Calor), hasta un máximo de 100. Gana 1.4 de (Calor) por cada 1 punto de Energía consumido. Al llegar a 50 de (Calor), entra en el estado (Cóctel Nitro-Combustible) hasta que se gaste todo el (Calor). Al entrar al campo de batalla, Burnice acumula instantáneamente 100 de (Calor).\nMientras está en el estado (Cóctel Nitro-Combustible), cuando Burnice golpea a un enemigo con (Ataque Básico: Mezcla de Llama Mixta), (Técnica Especial EX: Método de Agitación de Calor Intenso), (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble), (Ataque en Cadena: Llama Alimentada por Combustible), o (Definitiva: Infierno Glorioso), aplica el efecto (Chamuscado) al objetivo hasta que sale del estado (Cóctel Nitro-Combustible). Cuando otros miembros del escuadrón golpean enemigos bajo el estado (Chamuscado), activa el efecto (Postcombustión), gastando 8 de (Calor) para infligir Daño Fuego igual al {VALOR_1} del ATQ de Burnice y acumular Acumulación de Anomalía Fuego. Este efecto puede activarse una vez cada 1.5s. Por cada 10 de Maestría de Anomalía, el Daño de (Postcombustión) aumenta en un 1%, hasta un máximo de 30%. El Daño del efecto (Postcombustión) se considera Daño de (Ataque de Asistencia).",
      tags: ["Pasiva Central", "Fuego"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Encendido de Fuego",
      description: "Cuando otro personaje en tu escuadrón es un personaje de Anomalía o comparte la misma Facción:\nCuando el (Ataque Básico: Mezcla de Llama Mixta), (Técnica Especial EX: Método de Agitación de Calor Intenso) o (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble) de Burnice, golpea a un enemigo, o cuando se activa el efecto (Postcombustión), la Acumulación de Anomalía Fuego acumulada del movimiento aumenta en un 65%. Cuando cualquier miembro del escuadrón aplica el efecto (Quemadura) a un enemigo, la duración de ese efecto se extiende por 3s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rápida: Bebida Especial Energizante",
      description: "Cuando el personaje activo es lanzado por los aires, presiona [Icono Assist] para activar: Lanza una serie de ataques a los enemigos en frente y rocía llamas, infligiendo Daño Físico y Daño Fuego. El personaje es invulnerable mientras usa esta habilidad. Después de usar esta habilidad, presiona [Icono Especial EX] para seguir inmediatamente con (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble).",
      tags: ["Físico", "Fuego", "Asistencia Rápida"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Caldero Ahumado",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Realiza un bloqueo al ataque del enemigo, infligiendo Aturdimiento masivo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia Defensiva"]
    },
    {
      type: "Asistencia",
      name: "Seguimiento de Asistencia: Rocío Abrasador",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Salta en el aire y gira rápidamente hacia adelante mientras rocía llamas en todas direcciones, infligiendo Daño Fuego. El personaje es invulnerable mientras usa esta habilidad. Después de usar la habilidad, presiona [Icono Especial EX] para seguir inmediatamente con (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble).",
      tags: ["Fuego", "Seguimiento de Asistencia"]
    },
    {
      type: "Mindscape 1",
      name: "Llamas Afines",
      description: "Aumenta el límite de (Calor) de 100 a 140. Al entrar al campo de batalla, Burnice acumula 40 de (Calor) adicionales. Aumenta el Multiplicador de Daño del efecto (Postcombustión) en un 100% del ATQ de Burnice. Además, la Acumulación de Anomalía Fuego acumulada del efecto (Postcombustión) aumenta en un 25%."
    },
    {
      type: "Mindscape 2",
      name: "Extra sin Costo Adicional",
      description: "Al activar el efecto (Postcombustión), se aplica (Penetración Térmica) al enemigo, acumulándose hasta 5 veces y durando 6s. Activaciones repetidas reinician la duración. Cuando cualquier unidad aliada en el escuadrón golpea al enemigo, el Ratio de PEN del ataque aumenta en un 4% por cada acumulación de (Penetración Térmica), hasta un máximo de 20%."
    },
    {
      type: "Mindscape 3",
      name: "Optimista por Naturaleza",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2"
    },
    {
      type: "Mindscape 4",
      name: "Suministro de Combustible Definitivo",
      description: "Cuando un (Técnica Especial EX) o (Ataque de Asistencia) golpea a un enemigo, la Probabilidad de Crítico del movimiento aumenta en un 30%. La duración máxima de rociado de llamas de la (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble) aumenta en 1s."
    },
    {
      type: "Mindscape 5",
      name: "Danza de Fuego y Hielo",
      description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) +2"
    },
    {
      type: "Mindscape 6",
      name: "Invitación Ardiente",
      description: "Cuando Burnice golpea a un enemigo con (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble), activa un efecto especial de (Postcombustión) adicional, infligiendo 60% del ATQ de Burnice como Daño Fuego al objetivo. Este efecto puede activarse una vez cada 0.5s y no consume (Calor). Después de golpear a un enemigo con (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble), mientras el movimiento está activo, los efectos de (Postcombustión) especial y (Quemadura) ignorarán un 25% de la Res Fuego del objetivo. Cuando la ráfaga de fuego de la (Técnica Especial EX: Método de Agitación de Calor Intenso - Disparo Doble) golpea a un enemigo, si ese enemigo está bajo el efecto (Quemadura), activa una instancia adicional de Daño de (Quemadura) igual al 1,800% del Daño original. Este efecto puede activarse una vez cada 20s por cada objetivo."
    }
  ]
};
