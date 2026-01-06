// Agent 37 - Detailed Stats and Skills
export default {
  baseStats: {
    hp: {
      min: 710,
      max: 8829
    },
    atk: {
      min: 109,
      max: 758
    },
    def: {
      min: 49,
      max: 612
    },
    impact: 86,
    crit: "5%",
    critDmg: "50%",
    anomalyRate: "88",
    anomalyMastery: "93",
    penRatio: "0%",
    energyRegen: "2.4",
  },
  coreStats: {
    statName: "tasa",
    valuePerNode: 12
  },
  coreSkillScaling: [
    ["600", "0.2%", "20%", "0.2%", "20%"],
    ["700", "0.2%", "20%", "0.2%", "20%"],
    ["800", "0.2%", "20%", "0.2%", "20%"],
    ["900", "0.2%", "20%", "0.2%", "20%"],
    ["1000", "0.2%", "20%", "0.2%", "20%"],
    ["1100", "0.2%", "20%", "0.2%", "20%"],
    ["1200", "0.2%", "20%", "0.2%", "20%"]
  ],
  skills: [
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Garras de Tanuki",
      description: "Presiona [Icono Ataque] para activar: Desata hasta 5 golpes hacia adelante, causando Daño Fisico.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Capa de Tanuki",
      description: "Mantén [Icono Ataque] para activar: Entra en una postura defensiva por hasta 1.5 segundos. Si es golpeada durante este tiempo, hace parry al ataque e inflige masivo Aturdimiento contra el enemigo atacante. Hacer parry exitosamente a un ataque otorga 1 (Punto de Azucar). El personaje es invulnerable al hacer parry exitosamente.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Disparo de Caramelo Duro",
      description: "Cuando Yuzuha tiene (Puntos de Azucar), asestar un golpe con los ataques de otros personajes activos hará que Yuzuha gire continuamente su paraguas y ataque centrada alrededor del objetivo antes de lanzar un poderoso proyectil, causando Daño Fisico. Cuando este ataque asesta un ataque pesado, Yuzuha consume 1 (Punto de Azucar). (Ataque Basico: Disparo de Caramelo Duro) es considerado un (replica). (Ataque Basico: Disparo de Caramelo Duro) puede activarse una vez cada 8s. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Chispas de Estallido de Azucar",
      description: "Los enemigos bajo el efecto de (Susto Dulce) serán atacados por un (Ataque Basico: Chispas de Estallido de Azucar) una vez cada 1s. (Ataque Basico: Chispas de Estallido de Azucar) causa inicialmente Daño Fisico. (Ataque Basico: Chispas de Estallido de Azucar) no contribuye con su Acumulación de Anomalía de Atributo acumulada hacia el cálculo de Daño de Anomalía. La Tasa de Acumulación de Anomalía de (Ataque Basico: Chispas de Estallido de Azucar) aumenta un 25.0%.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Chispas de Estallido de Azucar - Max",
      description: "Los enemigos afectados por (Susto Dulce) serán atacados por un (Ataque Basico: Chispas de Estallido de Azucar - Max) al ser golpeados con un ataque pesado de (Ataque Basico: Disparo de Caramelo Duro) o (Ataque de Seguimiento: Disparo de Caramelo Duro Relleno). (Ataque Basico: Chispas de Estallido de Azucar - Max) causa inicialmente Daño Fisico. (Ataque Basico: Chispas de Estallido de Azucar - Max) no contribuye con su Acumulación de Anomalía de Atributo acumulada hacia el cálculo de Daño de Anomalía. La Tasa de Acumulación de Anomalía de (Ataque Basico: Chispas de Estallido de Azucar - Max) aumenta un 25.0%.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Ataque Básico",
      name: "Ataque Basico: Ayudante Tanuki",
      description: "Cuando Yuzuha está fuera del campo, el tanuki Kama asiste al personaje activo en atacar enemigos, causando Daño Fisico. Cuando Yuzuha realiza (Ataque Basico: Capa de Tanuki), el tanuki Kama se une a ella en atacar al enemigo, causando Daño Fisico. El tanuki Kama hereda el ATK inicial de Yuzuha.",
      tags: ["Físico", "Ataque Básico"]
    },
    {
      type: "Evasión",
      name: "Evasion: ¿Te Asuste?",
      description: "Presiona [Icono Dodges] para activar: Una evasión rápida de carrera. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Evasión: ¡No Tienes Suerte!",
      description: "Presiona [Icono Ataque] durante una evasión para activar: Golpea rápidamente a los enemigos en frente, causando Daño Fisico.",
      tags: ["Físico", "Evasión", "Evasión"]
    },
    {
      type: "Evasión",
      name: "Contraataque de Evasion: Hora de la Venganza~",
      description: "Presiona [Icono Ataque] durante una (Evasion Perfecta) para activar: Entrega un golpe rápido hacia adelante, causando Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Evasión", "Evasión"]
    },
    {
      type: "Técnica Especial",
      name: "Tecnica Especial: Bombardeo de Gomitas",
      description: "Presiona [Icono Especial] para activar: Dispara un tiro de cañón hacia adelante, causando Daño Fisico.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: Alerta de Cavidad",
      description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Arroja una bomba al enemigo, causando Daño Fisico. Al golpear a un enemigo con un ataque pesado, inflige el estado (Susto Dulce). Gana 2 (Puntos de Azucar) al activarse. Una (Asistencia Rapida) es activada cuando esta habilidad golpea a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial EX",
      name: "Tecnica Especial EX: ¡Alerta de Cavidad, Ahora Mismo!",
      description: "Después de usar (Contraataque de Evasion: Hora de la Venganza~), (Asistencia Rapida: Hora del Postre), (Ataque de Seguimiento: Tenemos Galletas), o (Ataque de Seguimiento: Disparo de Caramelo Duro Relleno), o cuando una (Evasion Perfecta) es activada, presiona [Icono Especial EX] para activar: Arroja rápidamente una bomba al enemigo, causando Daño Fisico. Al golpear a un enemigo con un ataque pesado, inflige el estado (Susto Dulce). Gana 2 (Puntos de Azucar) al activarse. Una (Asistencia Rapida) es activada cuando esta habilidad golpea a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Especial EX"]
    },
    {
      type: "Técnica Especial",
      name: "Estado: Susto Dulce",
      description: "El estado (Susto Dulce) dura 40.0s, activaciones repetidas reinician la duración. Cuando un enemigo afectado por (Susto Dulce) es golpeado primero por un personaje activo usando un ataque de su atributo, (Coincidencia de Sabor) se activa contra ese enemigo, cambiando el atributo de (Ataque Basico: Chispas de Estallido de Azucar) y (Ataque Basico: Chispas de Estallido de Azucar - Max) contra ese enemigo para coincidir con el del personaje que activó (Coincidencia de Sabor). Cuando (Susto Dulce) es activado nuevamente en un enemigo, su estado existente de (Coincidencia de Sabor) es removido. El proceso puede repetirse para cambiar el atributo de (Ataque Basico: Chispas de Estallido de Azucar) y (Ataque Basico: Chispas de Estallido de Azucar - Max) de nuevo.",
      tags: ["Físico", "Técnica Especial"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Rapida: Hora del Postre",
      description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea a los enemigos en frente, causando Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Asistencia Defensiva: Reponer Tu Diversion",
      description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Hace parry al ataque del enemigo, causando masivo Aturdimiento. Tras un parry exitoso, gana 1 (Punto de Azucar). El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Seguimiento: Tenemos Galletas",
      description: "Después de activar una (Asistencia Defensiva) o hacer parry exitosamente a un ataque enemigo con (Ataque Basico: Capa de Tanuki), presiona [Icono Ataque] para activar: Golpea a los enemigos en frente, causando Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Asistencia",
      name: "Ataque de Seguimiento: Disparo de Caramelo Duro Relleno",
      description: "Después de activar una (Asistencia Defensiva) o hacer parry exitosamente a un ataque enemigo con (Ataque Basico: Capa de Tanuki), presiona [Icono Ataque] en el momento correcto para activar: Siguiendo un ataque de paraguas giratorio continuo, dispara un poderoso proyectil que causa Daño Fisico. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Asistencia"]
    },
    {
      type: "Pasiva Central",
      name: "Pasiva Central: Maravilla Caprichosa",
      description: "Al entrar al campo de batalla, Yuzuha gana inmediatamente 3 (Puntos de Azucar). Yuzuha puede tener hasta 6 (Puntos de Azucar). Cuando (Tecnica Especial EX: Alerta de Cavidad), (Tecnica Especial EX: ¡Alerta de Cavidad, Ahora Mismo!), o (Definitiva: Rendirse o Sufrir la Travesura) de Yuzuha golpea a un enemigo, todos los miembros del escuadrón reciben el efecto (Deseo de Tanuki). (Deseo de Tanuki) otorga un aumento de ATK igual al 40% del ATK inicial de Yuzuha, hasta un aumento máximo de {VALOR_1}, y aumenta el DAÑO infligido por aquellos con el efecto en un 15%, durando 40s. Activaciones repetidas reinician la duración. Si el ATK inicial de Yuzuha alcanza 3,000, ella otorga el bono completo de ATK a todos los miembros del escuadrón.",
      tags: ["Pasiva Central"]
    },
    {
      type: "Habilidad Adicional",
      name: "Habilidad Adicional: Cuantos Mas Mejor",
      description: "Cuando otro personaje en tu escuadrón es un personaje de (Anomalia) o comparte la misma Facción: Si la Maestría de Anomalía de Yuzuha excede 100, cada punto por encima aumenta la Tasa de Acumulación de Anomalía de personajes con (Deseo de Tanuki) en un {VALOR_2}, hasta un máximo del {VALOR_3}, y todo el Daño de Anomalía de Atributo y Daño de (Desorden) en un {VALOR_4}, hasta un máximo del {VALOR_5}. Cuando la Maestría de Anomalía de Yuzuha está en 200, ella otorga el efecto de buff completo.",
      tags: ["Habilidad Adicional"]
    },
    {
      type: "Técnica Definitiva",
      name: "Ataque en Cadena: Asalto de Broma",
      description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Desata un golpe poderoso en enemigos en un área pequeña adelante, causando masivo Daño Fisico. Gana 1 (Punto de Azucar) cuando es usado. Una (Asistencia Rapida) es activada cuando esta habilidad golpea a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Ataque en Cadena"]
    },
    {
      type: "Técnica Definitiva",
      name: "Definitiva: Rendirse o Sufrir la Travesura",
      description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata un golpe poderoso en enemigos en un área grande alrededor del personaje, causando masivo Daño Fisico. Los enemigos golpeados con un ataque pesado son infligidos con el estado (Susto Dulce). Al activar esta habilidad, otros miembros del escuadrón ganan 25.0 de Energía. Al activar esta habilidad, gana 2 (Puntos de Azucar). Una (Asistencia Rapida) es activada cuando esta habilidad golpea a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
      tags: ["Físico", "Técnica Definitiva"]
    },
    {
      type: "Mindscape 1",
      name: "Constitucion Afortunada",
      description: "Yuzuha recupera 30 de Energía cuando entra al campo de batalla. En Modo Zona de Investigación, este efecto puede activarse como máximo una vez cada 180s. Los enemigos en el estado (Susto Dulce) tienen su RES a Todo-Atributo reducida en un 10%. El Daño de Anomalía de Atributo y el buff de Daño de (Desorden) de su (Habilidad Adicional) aumenta al 130% de su valor original.",
      tags: ["Mindscape 1"]
    },
    {
      type: "Mindscape 2",
      name: "Llena de Compañia Colorida",
      description: "Cuando (Tecnica Especial EX: Alerta de Cavidad), (Tecnica Especial EX: ¡Alerta de Cavidad, Ahora Mismo!), o (Definitiva: Rendirse o Sufrir la Travesura) de Yuzuha golpea a un enemigo, el DAÑO de todos los miembros del escuadrón aumenta en un 15% y la Tasa de Acumulación de Anomalía en un 15%, durando 40s y activaciones repetidas reinician la duración. Cuando un ataque pesado golpea a un enemigo que no está Aturdido, activará un (Ataque en Cadena) forzado. Los (Ataques en Cadena) activados de esta manera tienen Nivel de Interrupción reducido y los (Ataques en Cadena) forzados solo pueden ocurrir una vez cada 20s. Cuando otro personaje entra a través de un (Ataque en Cadena), Yuzuha gana 1 (Punto de Azucar). El tiempo de espera de (Ataque Basico: Disparo de Caramelo Duro) de Yuzuha se reduce en un 25%.",
      tags: ["Mindscape 2"]
    },
    {
      type: "Mindscape 3",
      name: "Cuento de Hadas de la Ciudad Encantada",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 3"]
    },
    {
      type: "Mindscape 4",
      name: "Magia Cayendo",
      description: "El DAÑO de (Ataque de Seguimiento: Disparo de Caramelo Duro Relleno) y (Ataque de Seguimiento: Tenemos Galletas) de Yuzuha aumenta en un 30%, la Tasa de Acumulación de Anomalía en un 20%, y activa una (Asistencia Rapida) cuando golpea a un enemigo.",
      tags: ["Mindscape 4"]
    },
    {
      type: "Mindscape 5",
      name: "Sueños de un Invierno Desvaneciendose",
      description: "Nivel de (Ataque Basico), (Evasion), (Asistencia), (Tecnica Especial) y (Ataque en Cadena) +2",
      tags: ["Mindscape 5"]
    },
    {
      type: "Mindscape 6",
      name: "Echar Raices",
      description: "Gana 1 (Punto de Azucar) adicional al hacer parry exitosamente a un ataque enemigo usando una (Asistencia Defensiva) o (Ataque Basico: Capa de Tanuki). Al usar (Ataque de Seguimiento: Disparo de Caramelo Duro Relleno), mantén [Icono Ataque] para cargar por hasta 0.8 segundos. Soltar [Icono Ataque] o alcanzar la carga completa dispara un proyectil extra poderoso. Por cada 0.4s cargados, Yuzuha consume 1 (Punto de Azucar) para disparar un proyectil poderoso adicional, cada uno causando 300% de su ATK como Daño Fisico. Si cualquier proyectil poderoso de (Ataque de Seguimiento: Disparo de Caramelo Duro Relleno) golpea a un enemigo, el Multiplicador de Daño de (Desorden) de todos los miembros del escuadrón aumenta en un 105% por 40s, y acumulándose hasta 3 veces, con la duración de cada acumulación calculada por separado. Además, si el proyectil poderoso golpea a un enemigo bajo (Susto Dulce), activará 1 ataque de (Ataque Basico: Chispas de Estallido de Azucar - Max). Si Yuzuha es atacada mientras carga, ella evadirá automáticamente el ataque e inmediatamente desatará el ataque con carga máxima.",
      tags: ["Mindscape 6"]
    }
  ]
};
