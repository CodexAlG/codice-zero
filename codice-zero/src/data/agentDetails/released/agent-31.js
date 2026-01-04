// Agent 31 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 650,
      max: 7923
    },
    atk: {
      min: 138,
      max: 750
    },
    def: {
      min: 55,
      max: 600
    },
    impact: 113,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "96",
    anomalyMastery: "95",
    penRatio: "0%",
    energyRegen: "1.2",
  },
  coreStats: {
    statName: "impact",
    valuePerNode: 6
  },
  coreSkillScaling: [
    ["20%"],
    ["22.5%"],
    ["25%"],
    ["27.5%"],
    ["30%"],
    ["32.5%"],
    ["35%"],
  ],

  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Disparo de Cañón Frío",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 4 disparos hacia adelante. Los primeros 3 disparos causan Daño Fisico, el 4to disparo causa Daño Electrico.",
      tags: ["Eléctrico", "Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Disparo Silenciado",
      description: "Mantén [Icono Ataque] para activar: Trigger entra en la (Postura de Francotirador) y dispara hacia adelante continuamente, causando Daño Electrico. Mientras dispara continuamente, cuando es atacada por un enemigo, Trigger evadirá automáticamente. Este efecto puede activarse una vez cada 1s. Mientras dispara continuamente, puedes arrastrar el stick/joystick para ajustar su posición a la izquierda/derecha. Evadiendo automáticamente ataques o ajustando la posición, cuando está a punto de ser golpeada, activará una (Evasion Perfecta), seguida de un contraataque cargado automático. Después de soltar [Icono Ataque], Trigger retrocederá, preparará su arma y desatará un (Movimiento Final), luego saldrá de la (Postura de Francotirador). El personaje es invulnerable durante el contraataque cargado y el (Movimiento Final). Cuando el disparo continuo o el contraataque cargado golpea a un enemigo, Trigger gana 25 (Purga), hasta un máximo de 100 (Purga). Cuando el (Movimiento Final) golpea a un enemigo, activa la (Asistencia Rapida) del personaje anterior en el escuadrón. La (Asistencia Rapida) solo puede ser activada por este método una vez cada 25s.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Disparo Armonizador",
      description: "Cuando Trigger tiene (Purga), usar otro personaje activo en el escuadrón para golpear a un enemigo con un (Ataque Basico), (Contraataque de Evasion), (Tecnica Especial), (Evasión) o (Asistencia Rapida) para activar: Mientras entra en combate, rápidamente dispara dos tiros al enemigo, causando Daño Electrico. Al activar esta habilidad, consume 3 (Purga). El personaje es invulnerable mientras usa esta habilidad. (Ataque Basico: Disparo Armonizador) es un ataque de (replica). El escuadrón puede activar (Ataque Basico: Disparo Armonizador) una vez cada 3s. La misma habilidad puede activar (Ataque Basico: Disparo Armonizador - Tartarus) hasta 2 veces en 2s para todo el escuadrón. Durante (Ataque Basico: Disparo Armonizador), (Ataque Basico: Disparo Armonizador - Tartarus) se activará inmediatamente en su lugar si se activa.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Disparo Armonizador - Tartarus",
      description: "Cuando Trigger tiene (Purga), usar otro personaje activo en el escuadrón para golpear a un enemigo con un (Tecnica Especial EX), (Ataque de Asistencia) o (Definitiva) para activar: Mientras entra en combate, rápidamente dispara tres tiros al enemigo, seguido de un (Movimiento Final), causando Daño Electrico. Al activar esta habilidad, consume 5 (Purga). El personaje es invulnerable mientras usa esta habilidad. (Ataque Basico: Disparo Armonizador - Tartarus) es un ataque de (replica). La misma habilidad puede activar (Ataque Basico: Disparo Armonizador - Tartarus) hasta 2 veces en 2s para todo el escuadrón. Durante (Ataque Basico: Disparo Armonizador), (Ataque Basico: Disparo Armonizador - Tartarus) se activará inmediatamente en su lugar si se activa.",
      tags: ["Eléctrico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: Ocultamiento Fantasma",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Evasión"]
    },
    {
      type: "Evasión",
      name: "Ataque de Carrera: Espectro Vengativo",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Levanta rápidamente el arma y dispara, causando Daño Fisico.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Alma Condenada",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Gira y dispara un tiro rápido a los enemigos en frente, causando Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Destello Espectral",
      description: "Presiona [Icono Especial] para activar: Se lanza hacia adelante con un corte, causando Daño Electrico. El nivel de Anti-Interrupción aumenta mientras usa esta habilidad.",
      tags: ["Eléctrico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Entierro Relampago",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Se lanza hacia adelante con un corte, luego salta y dispara un poderoso tiro al suelo, causando masivo Daño Electrico. El personaje es invulnerable mientras usa esta habilidad. Cuando esta habilidad golpea a un enemigo, activa la (Asistencia Rapida) del personaje anterior en el escuadrón. Cuando esta habilidad golpea a un enemigo, Trigger entra en (Soporte Coordinado). Mientras está en este estado, cuando otro personaje activo en el escuadrón golpea a un enemigo con cualquier ataque, activa un (Ataque Basico: Disparo Armonizador) sin consumir (Purga) y sin restricciones de enfriamiento. Este estado dura 8s y el efecto puede activarse hasta 4 veces. Entrar repetidamente en (Soporte Coordinado) extiende la duración y otorga activaciones adicionales, durando un máximo de 20s y activándose hasta un máximo de 10 veces.",
      tags: ["Eléctrico", "Técnica Especial EX"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Fuego de Cobertura de Cañón Frío",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Gira y dispara un tiro rápido a los enemigos en frente, causando Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Asistencia Rápida", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Demora de la Muerte",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Asistencia Defensiva", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Asistencia: Trueno Perforante",
      description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Desata una serie de cortes a los enemigos en frente, seguido de un poderoso disparo cargado al aterrizar, causando Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque de Asistencia", "Asistencia"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Guia Estigio",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata disparos poderosos continuos hacia adelante, causando masivo Daño Electrico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Eléctrico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Requiem del Inframundo",
      description: "Cuando el Nivel de Decibelios está al (Maximo), presiona [Icono Definitiva] para activar: Entrega un poderoso disparo a los enemigos en un área grande adelante, causando masivo Daño Electrico. El personaje es invulnerable mientras usa esta habilidad. Cuando esta habilidad golpea a un enemigo, activa la (Asistencia Rapida) del personaje anterior en el escuadrón. Cuando la habilidad golpea a un enemigo, Trigger entra en (Soporte Coordinado). Mientras está en este estado, cuando otro personaje activo en el escuadrón golpea a un enemigo con cualquier ataque, activa un (Ataque Basico: Disparo Armonizador) sin consumir (Purga) y sin restricciones de enfriamiento. Este estado dura 12s y el efecto puede activarse hasta 6 veces. Entrar repetidamente en (Soporte Coordinado) extiende la duración y otorga activaciones adicionales, durando un máximo de 20s y activándose hasta un máximo de 10 veces.",
      tags: ["Eléctrico", "Técnica Definitiva"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Principal: Mirada Escudriñadora del Alma",
      description: "Cuando el (replica) de Trigger golpea a un enemigo, el Multiplicador de Daño de Aturdimiento del objetivo aumenta en un {VALOR_1} por 5s. Este aumento del Multiplicador de Daño de Aturdimiento se aplicará incluso si el objetivo no está Aturdido.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Mirada de la Linterna Plateada",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Ataque) o comparte el mismo atributo: Cuando la Probabilidad de CRIT de Trigger excede el 40%, cada 1% de Probabilidad de CRIT por encima de este umbral aumenta el Aturdimiento infligido por sus (replica) en un 1.5%, hasta un aumento máximo del 75%.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Mindscape 1",
      name: "Sentidos Agudizados",
      description: "El Multiplicador de Daño de Aturdimiento aplicado a través de (Pasiva Principal: Mirada Escudriñadora del Alma) aumenta en un 20% adicional. Cuando se activa (Ataque Basico: Disparo Armonizador), el tiempo de espera se reduce a 2s. La (Purga) ganada al golpear a un enemigo con el disparo continuo o el contraataque cargado en (Postura de Francotirador) aumenta en un 25%. El máximo de (Purga) aumenta a 125.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Vision Eterea",
      description: "Al usar un (replica), Trigger gana 1 acumulación de (Mirada del Cazador). Cuando ejecuta un (Movimiento Final) en (Postura de Francotirador), Trigger gana 2 acumulaciones de (Mirada del Cazador). Cada acumulación de (Mirada del Cazador) aumenta el Daño CRIT de todos los miembros del escuadrón en un 6%, acumulándose hasta 4 veces, durando 10s. Activaciones repetidas reinician la duración.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Regreso al Hogar",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Ocultamiento",
      description: "Cuando Trigger entra o extiende (Soporte Coordinado), mientras el estado está activo, la próxima vez que otros miembros del escuadrón activen (Ataque Basico: Disparo Armonizador) o (Ataque Basico: Disparo Armonizador - Tartarus), activará (Desconexion) al golpear a un enemigo, causando DAÑO adicional equivalente al 200% del ATQ de Trigger e infligiendo Aturdimiento equivalente al 120% del Impacto de Trigger. Esta habilidad tiene un Nivel de Interrupción relativamente alto.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "En el Blanco",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Mas Alla del Rio de los Muertos",
      description: "Al entrar al campo de batalla, Trigger gana 5 (Rondas Rompe-Armadura). Por cada 25 (Purga) consumida, Trigger gana 1 (Ronda Rompe-Armadura) adicional, hasta un máximo de 5 rondas. Mientras posee (Rondas Rompe-Armadura), cuando Trigger golpea a un objetivo en (Postura de Francotirador), 1 (Ronda Rompe-Armadura) es consumida para causar Daño Electrico adicional equivalente al 1,200% del ATQ de Trigger. El DAÑO de (Ronda Rompe-Armadura) aumenta adicionalmente en un 50%. Este efecto puede activarse una vez cada 0.2s.",
      tags: ["Mindscape 6"]
    }
  ]
};
