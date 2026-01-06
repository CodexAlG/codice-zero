// Agent 35 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 673,
      max: 8373
    },
    atk: {
      min: 126,
      max: 872
    },
    def: {
      min: 35,
      max: 441
    },
    impact: 93,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "92",
    anomalyMastery: "90",
    penRatio: "0%",
    energyRegen: "1.2",
    sheerForce: {
      min: 105,
      max: 1099
    }
  },
  coreStats: {
    statName: "crit rate",
    valuePerNode: 4.8
  },
  coreSkillScaling: [
    ["30%"],
    ["35%"],
    ["40%"],
    ["45%"],
    ["50%"],
    ["55%"],
    ["60%"]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Golpe Cirro",
      description: "Presiona [Icono Ataque] para activar: Realiza hasta cinco ataques hacia adelante, causando Daño Tinta Aurica. El Nivel de Anti-Interrupción de esta habilidad aumenta durante el 3er y 4to golpe.",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Coalescencia de Nube Velo de Tinta",
      description: "Mantén [Icono Dodges] para activar: Despliega una Gran Formación Tai Chi, causando Daño Tinta Aurica. Cuando la habilidad termina, lanza automáticamente el 5to golpe de (Ataque Basico: Golpe Cirro). El Nivel de Anti-Interrupción aumenta mientras usa esta habilidad, y el Daño recibido se reduce en un 40%.",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Matriz Aurica",
      description: "Mientras posees un (Punto de Tinta Aurica): presiona [Icono Ataque] durante (Evasion: Paso de Nimbo), o mantén [Icono Dodges] para activar: Despliega una matriz, causando continuamente Daño Tinta Aurica. Cuando la habilidad termina, activa automáticamente (Ataque Basico: Erupcion Qingming). Mientras canaliza, recupera continuamente Adrenalina, recuperando 7/s, por hasta 3s. El personaje es invulnerable mientras usa esta habilidad, y entra en el estado (Vista Vital).",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Erupcion Qingming",
      description: "Se activa automáticamente cuando (Ataque Basico: Matriz Aurica) alcanza la duración máxima: Extiende sus alas para lanzar un ataque explosivo, causando masivo Daño Tinta Aurica. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Tecnica de Nube Oculta",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Mandato Espectral de la Espada",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Entrega un golpe rápido hacia adelante, causando Daño Tinta Aurica.",
      tags: ["Etéreo", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Evasion: Paso de Nimbo",
      description: "Al arrastrar la palanca/joystick, mantén [Icono Dodges] para activar: Entra en un estado de alta velocidad (Ligero como el Aire). Mientras está en el estado (Ligero como el Aire) en el Modo Zona de Investigación, recolecta automáticamente todos los puntos de recolección de recursos dentro del alcance. Mientras está en el estado (Ligero como el Aire), usa la palanca/joystick para dirigir. Suelta la palanca/joystick para parar. El personaje es invulnerable en el momento en que esta habilidad se activa.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Golpe de Destierro",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Lanza una serie de ataques a los enemigos en frente, causando Daño Tinta Aurica. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Ignicion de Sombra",
      description: "Presiona [Icono Especial] para activar: Se retira rápidamente, luego ataca hacia adelante, causando Daño Tinta Aurica. Mientras se retira, una (Evasion Perfecta) puede ser activada, pero no puede ser seguida con un (Contraataque de Evasion). El Nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Etéreo", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Manifestacion de Tinta",
      description: "Con suficiente Adrenalina, presiona o mantén [Icono Especial EX] para activar: Carga continuamente, y suelta [Icono Especial EX] para lanzar un ataque de ala ascendente, causando masivo Daño Tinta Aurica. Mientras carga, los ataques entrantes son bloqueados automáticamente y activarán el ataque de ala ascendente. Si es golpeada en el momento exacto en que comienza a cargar, activa un efecto de (Bloqueo Perfecto), negando el DAÑO e incrementando el Nivel de Interrupción de la habilidad para igualar a una (Asistencia Defensiva) Pesada, y recuperando 10 de Adrenalina. Cuando un ataque de ala ascendente golpea a un enemigo con un destello rojo o destello amarillo, un (Bloqueo Perfecto) puede ser activado, negando el golpe e incrementando el Nivel de Interrupción de la habilidad para igualar a una (Asistencia Defensiva) y recuperando 10 de Adrenalina. El efecto de (Bloqueo Perfecto) puede ocurrir como máximo una vez cada 0.5s. Si carga hasta destellar o cuando activa el efecto de (Bloqueo Perfecto), el ataque de ala ascendente puede ser seguido por un Ataque de Talismán adicional. Después de la habilidad, presiona [Icono Especial] para lanzar (Tecnica Especial EX: Bombardeo de Nube Celestial - Ruptura). Después de (Tecnica Especial EX: Bombardeo de Nube Celestial - Ruptura), y con suficiente Adrenalina, presiona [Icono Especial EX] para consumir otros 20 de Adrenalina para lanzar (Tecnica Especial EX: Erupcion Qingming - Ruptura). Después de usar (Tecnica Especial EX: Erupcion Qingming - Ruptura) y con suficientes (Puntos de Tinta Aurica), mantén [Icono Dodges] para seguir rápidamente con (Ataque Basico: Matriz Aurica). El personaje es invulnerable durante el ataque de ala ascendente, y el Nivel de Anti-Interrupción aumenta mientras carga.",
      tags: ["Etéreo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Formador de Nubes",
      description: "Con suficiente Adrenalina, mantén [Icono Ataque] para activar: Carga continuamente, canalizando energía alrededor de enemigos para causar DAÑO con el tiempo, hasta un máximo de 2s, causando masivo Daño Tinta Aurica. Una vez cargado completamente o si es interrumpido, activa automáticamente (Tecnica Especial EX: Tinta Ceniza se Convierte en Sombras). En el momento en que la habilidad es activada, una (Evasion Perfecta) puede ser activada. Después de la (Evasion Perfecta), entra en el estado (Vista Vital). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Tinta Ceniza se Convierte en Sombras",
      description: "Se activa automáticamente durante (Tecnica Especial EX: Formador de Nubes): Cuando el orbe de energía aparece y se contrae, causa Daño Tinta Aurica. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Armonia de la Aurora",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Entrega ataques rapidos hacia adelante, causando Daño Tinta Aurica. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Devocion Inmutable",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Danza del Lobo Celestial",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Entrega ataques rapidos hacia adelante, causando Daño Tinta Aurica. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Gran Maestro del Misticismo",
      description: "Yixuan gana Fuerza Pura extra basada en sus Hp Máx, con cada 1 punto de Hp Máx aumentando su Fuerza Pura en 0.1. Todo el Daño Tinta Aurica que Yixuan causa a través de sus habilidades es Daño Puro, ignorando la DEF enemiga y usando su estadística de Fuerza Pura como el Multiplicador de Daño. Cuando Yixuan acumula (Acumulacion de Anomalia de Tinta Aurica), usa un medidor de Acumulación de Anomalía independiente, y cuando activa una Anomalía, restaura 10 de Adrenalina adicional. Esto puede activarse una vez cada 10s. Al entrar en combate, Yixuan restaura inmediatamente toda la Adrenalina. En Modo Zona de Investigación, este efecto puede activarse solo una vez cada 180s. Activar una (Evasion Perfecta) otorga 5 de Adrenalina adicional y puede ocurrir como máximo una vez por segundo. Cuando consume Adrenalina, Yixuan acumula (Puntos de Tecnica), ganando 0.667 puntos por cada punto de Adrenalina consumido. Con suficientes (Puntos de Tecnica), puede activar una Definitiva adicional: (Definitiva: Supresion de Talisman Sin Fin). El máximo de (Puntos de Tecnica) es 120. El DAÑO causado por (Ataque Basico: Matriz Aurica), (Ataque Basico: Erupcion Qingming), (Tecnica Especial EX), (Ataque de Asistencia), (Ataque en Cadena), y (Definitiva) de Yixuan aumenta en un {VALOR_1}. Después de lanzar (Definitiva: Supresion de Talisman Sin Fin), Yixuan gana un (Punto de Tinta Aurica). Ella puede gastar un (Punto de Tinta Aurica) para lanzar (Ataque Basico: Matriz Aurica).",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Corriente Subyacente de Tinta Aurica",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Aturdidor), (Soporte), o (Defensa): Cuando un compañero de escuadrón usa una (Definitiva), Yixuan recupera continuamente 2 de Adrenalina por 10s. Si Yixuan es cambiada fuera por una (Asistencia Perfecta), ella automáticamente sigue con un ataque de rayo, causando DAÑO igual al 225% de su Fuerza Pura y restaurando 5 de Adrenalina adicional. (Tecnica Especial EX: Formador de Nubes) y (Tecnica Especial EX: Tinta Ceniza se Convierte en Sombras) causan un 30% de DAÑO aumentado a enemigos Aturdidos. Después de activar su (Definitiva), Yixuan entra en el estado (Meditacion), aumentando su Daño CRIT en un 40% por 15s.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Inmerso en la Tormenta de Hojas de Espada",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata un aluvion de ataques a los enemigos en frente, causando masivo Daño Tinta Aurica. Cada (Cabello de Espada) aumenta el DAÑO de esta habilidad en un 10%. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Sombra de Cielo Qingming",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Lanza un aluvión de ataques de alas, luego guía innumerables talismanes para atacar, causando masivo Daño Tinta Aurica. Al activar esta habilidad, Yixuan redistribuye equitativamente los Hp del escuadrón. Después de usar esta habilidad y con suficientes (Puntos de Tinta Aurica), mantén [Icono Dodges] para seguir rápidamente con (Ataque Basico: Matriz Aurica). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Técnica Definitiva"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Supresion de Talisman Sin Fin",
      description: "Con suficientes (Puntos de Tecnica), presiona [Icono Definitiva] para activar: Consume 120 (Puntos de Tecnica) para extender sus alas, luego guía innumerables talismanes para atacar, causando masivo Daño Tinta Aurica. Con suficientes (Puntos de Tecnica) y Decibelios, esta habilidad se activa con prioridad. Después de usar esta habilidad y con suficientes (Puntos de Tinta Aurica), mantén [Icono Dodges] para seguir rápidamente con (Ataque Basico: Matriz Aurica). Al activar esta habilidad, Yixuan redistribuye equitativamente los Hp del escuadrón. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Etéreo", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "Camino Espiritual",
      description: "Al entrar en combate, la Probabilidad de CRIT aumenta en un 10% y gana inmediatamente 120 (Puntos de Tecnica). En Modo Zona de Investigación, esto puede activarse solo una vez cada 180s. Cuando cualquier miembro del escuadrón asesta un golpe en un enemigo, Yixuan invoca automáticamente un ataque de rayo extra, causando DAÑO igual al 50% de su Fuerza Pura y restaurando 5 de Adrenalina adicional. Esto puede activarse una vez cada 6s.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Ahuyentar la Desgracia",
      description: "Cuando una (Definitiva) o (Tecnica Especial EX) causa DAÑO, ignora el 15% de la (RES Eterea) del objetivo. Activar (Definitiva: Sombra de Cielo Qingming) extiende el estado Aturdido de todos los enemigos por 3s. En una sola duración de estado Aturdido, los enemigos solo pueden tener este efecto aplicado una vez, y no se acumula con efectos similares. Adicionalmente, al usar (Definitiva: Supresion de Talisman Sin Fin), gana una acumulación del efecto (Tinta Condensada). Después de (Ataque Basico: Erupcion Qingming) o (Tecnica Especial EX: Tinta Ceniza se Convierte en Sombras), presiona el botón de (Ataque Basico), o después de (Tecnica Especial EX: Erupcion Qingming - Ruptura), presiona el botón de (Tecnica Especial) para consumir una acumulación de (Tinta Condensada) y lanzar (Tecnica Especial EX: Supresion de Talisman Sin Fin - Ruptura), causando DAÑO de hasta 1,200% de Fuerza Pura. Solo una acumulación de (Tinta Condensada) puede mantenerse a la vez.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Ciclo de Yin y Yang",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "El Unico Camino del Misticismo",
      description: "Activar una (Definitiva) otorga una acumulación de (Tranquilidad), hasta un máximo de 2 acumulaciones. Por cada acumulación de (Tranquilidad), el DAÑO de la siguiente (Tecnica Especial EX: Formador de Nubes) y (Tecnica Especial EX: Tinta Ceniza se Convierte en Sombras) aumenta en un 30%.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Vigilia de Cielo Calmado",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial), y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Rapido Pero Quieto",
      description: "Después de usar (Definitiva: Sombra de Cielo Qingming), gana una acumulación del efecto (Respiracion Regulada). Mientras está bajo este efecto, puedes ignorar el costo de (Puntos de Tecnica) para lanzar (Definitiva: Supresion de Talisman Sin Fin) una vez. El efecto (Respiracion Regulada) termina después de que (Definitiva: Supresion de Talisman Sin Fin) es usada. Este efecto solo puede ganarse una vez cada 30s. Solo una acumulación de (Respiracion Regulada) puede mantenerse. Adicionalmente, mientras está en el estado (Meditacion), el Daño Puro de Yixuan aumenta en un 20%.",
      tags: ["Mindscape 6"]
    }
  ]
};
