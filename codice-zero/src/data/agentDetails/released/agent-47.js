// Agent 47 - Detailed Stats and Skills
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
        impact: 83,
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
    coreSkillScaling: [
        ["15%", "10%"],
        ["17.5%", "12.5%"],
        ["20%", "15%"],
        ["22.5%", "17.5%"],
        ["25%", "20%"],
        ["27.5%", "22.5%"],
        ["30%", "25%"] // Placeholders for user to fill
    ],
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Filo Veloz",
            description: "Presiona [Icono Ataque] para activar: Lanza hasta cuatro cortes hacia adelante, infligiendo Daño Físico. Puede encadenarse en (Ataque de Carrera: Carrera Fantasma) tras el 4to golpe.",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Voluntad de Espada de Corriente de Nube",
            description: "Mantén [Icono Ataque] para activar: Lanza una ráfaga de ondas de choque de espada, infligiendo Daño Físico. Mantén presionado para extender el ataque. El nivel de Anti-Interrupción aumenta durante esta habilidad.",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Mente Iluminada - Corrientes Divididas",
            description: "Mientras está en el estado de (Mente Iluminada) y en el suelo, presiona [Icono Ataque] para activar: Realiza hasta tres cortes hacia adelante, infligiendo Daño Físico. Si es golpeado por un ataque enemigo durante el 3er golpe, activa un bloqueo, negando esa instancia de Daño. Si posee (Fuerza de Espada Qingming), el 3er golpe es reemplazado con (Ataque Básico: Mente Iluminada - Ascenso al Cielo).",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Mente Iluminada - Ascenso al Cielo",
            description: "Mientras está en el estado de (Mente Iluminada) y con (Fuerza de Espada Qingming), tras el 2do golpe de (Ataque Básico: Mente Iluminada - Corrientes Divididas), presiona [Icono Ataque] para activar: Lanza un veloz ataque ascendente, infligiendo Daño Físico y entrando en un estado aéreo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Mente Iluminada - Aniquilación de Luz Solar Máxima",
            description: "Tras activar (Ataque Básico: Mente Iluminada - Aniquilación de Luz Solar), y con (Fuerza de Espada Qingming), presiona [Icono Ataque] para activar: Lanza un amplio corte de barrido hacia adelante, infligiendo masivo Daño Físico. Al golpear, se consume 1 punto de (Fuerza de Espada Qingming). Si es golpeado por un enemigo durante la habilidad, activa un bloqueo, negando esa instancia de Daño y aumentando el Nivel de Interrupción de la habilidad. Tras usar esta habilidad y con (Fuerza de Espada Qingming), presiona [Icono Especial] para consumir 1 punto de (Fuerza de Espada Qingming) y lanzar un golpe de (Técnica Especial EX: Mente Iluminada - Luz Elevada). Esta habilidad es seguida automáticamente por (Ataque Básico: Mente Iluminada - Ascenso al Cielo), y Ye Shunguang entra en un estado aéreo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Mente Iluminada - Luz Solar",
            description: "En el estado de (Mente Iluminada), y mientras está en el aire, presiona [Icono Ataque] para activar: Lanza hasta dos cortes descendentes en frente, infligiendo Daño Físico. Ye Shunguang no saldrá del estado de (Mente Iluminada) durante esta habilidad. Presiona [Icono Especial] o [Icono Dodges] para seguir con (Ataque Básico: Mente Iluminada - Aniquilación de Luz Solar). El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Mente Iluminada - Aniquilación de Luz Solar",
            description: "Tras el 2do golpe de (Ataque Básico: Mente Iluminada - Luz Solar), presiona [Icono Ataque] para activar: Realiza un ataque de caída en frente, entrando en un estado terrestre, e infligiendo Daño Físico. Al lanzar esta habilidad con 2 o más puntos de (Fuerza de Espada Qingming), Ye Shunguang realizará en su lugar un ataque de caída descendente a través de una gran área en frente, infligiendo masivo Daño Físico. Al golpear, se consumen 2 puntos de (Fuerza de Espada Qingming), otorgando el efecto de (Culminación). Tras usar esta habilidad, si Ye Shunguang posee (Fuerza de Espada Qingming), presiona [Icono Especial] para consumir 1 punto de (Fuerza de Espada Qingming) y lanzar un golpe de (Técnica Especial EX: Mente Iluminada - Luz Elevada), que puede ser seguido rápidamente con (Ataque Básico: Mente Iluminada - Aniquilación de Luz Solar Máxima). Ye Shunguang no saldrá del estado de (Mente Iluminada) durante esta habilidad. Durante esta habilidad, si es atacado por enemigos, activa un bloqueo, negando esa instancia de Daño. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Evasión",
            name: "Evasión: Sin Dejar Rastro",
            description: "Presiona [Icono Dodges] para activar: Una rápida evasión deslizante. El personaje es invulnerable mientras usa esta habilidad. Durante el estado de (Mente Iluminada), y si se activa una (Evasión Perfecta), presiona [Icono Ataque] para activar (Ataque Básico: Mente Iluminada - Ascenso al Cielo).",
            tags: ["Evasión"]
        },
        {
            type: "Evasión",
            name: "Evasión: Nube Errante",
            description: "Mientras inclinas el stick/joystick, mantén [Icono Dodges] para activar: Entra en un estado de movimiento de alta velocidad. Conduce con el stick/joystick, y suelta el stick/joystick para detenerte.",
            tags: ["Evasión"]
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera: Carrera Fantasma",
            description: "Presiona [Icono Ataque] durante una evasión para activar: Corta enemigos en frente, infligiendo Daño Físico.",
            tags: ["Físico", "Evasión"]
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión: Golpe de Golondrina",
            description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Salta en el aire y empuja hacia adelante, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Evasión"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial: Mareas Guía",
            description: "Presiona [Icono Especial] para activar: Si una evasión está disponible, se consume 1 oportunidad de evasión, y la acción cuenta como activar una (Evasión). Si no hay evasión disponible o no se activa una (Evasión Perfecta), lanza un rápido ataque de energía de espada que inflige Daño Físico. Si se activa una (Evasión Perfecta) en este momento, lanza un ataque de espada volador, infligiendo Daño Físico, e inmediatamente sigue con el 2do golpe de (Ataque Básico: Filo Veloz). El personaje es brevemente invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Especial"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Supresión de Vendaval",
            description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un corte rápido y un ataque de espada volador al enemigo, infligiendo masivo Daño Físico. Los ataques enemigos pueden ser esquivados durante esta habilidad. Tras usar esta habilidad, gana 1 punto de (Fuerza de Espada Qingming). El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Especial EX"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial: Mente Iluminada - Salida Limpia",
            description: "Mientras está en el estado de (Mente Iluminada) y en el suelo, presiona [Icono Especial] para activar: Realiza un veloz corte de paso atrás, infligiendo Daño Físico. Si una evasión está disponible, se consume 1 oportunidad de evasión, y la acción cuenta como activar una (Evasión). Si se activa una (Evasión Perfecta) en este momento, presiona [Icono Ataque] para activar rápidamente (Ataque Básico: Mente Iluminada - Aniquilación de Luz Solar Máxima) y entrar en (Vista Vital). Después de que este (Ataque Básico: Mente Iluminada - Aniquilación de Luz Solar Máxima) se activa, puede ser seguido inmediatamente con (Ataque Básico: Mente Iluminada - Ascenso al Cielo). El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Especial"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Mente Iluminada - Luz Elevada",
            description: "En el estado de (Mente Iluminada) y con (Fuerza de Espada Qingming), mantén [Icono Especial EX] para activar: Realiza rápidos cortes consecutivos, infligiendo masivo Daño Físico mientras consume rápidamente (Fuerza de Espada Qingming) hasta que no queda nada. La habilidad termina temprano si la (Fuerza de Espada Qingming) es insuficiente o si se suelta [Icono Especial EX]. Ye Shunguang no saldrá del estado de (Mente Iluminada) durante esta habilidad. El personaje es invulnerable mientras usa esta habilidad. Efecto (Culminación): Durante esta habilidad, cada vez que se consume (Fuerza de Espada Qingming) mientras (Culminación) está activo, el costo de (Fuerza de Espada Qingming) se reemplaza consumiendo (Culminación) en su lugar. Este efecto no se acumula, y dura hasta que el actual (Mente Iluminada) termina.",
            tags: ["Físico", "Técnica Especial EX"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Mente Iluminada - Regreso al Polvo",
            description: "En el estado de (Mente Iluminada), presiona [Icono Definitiva] o mantén [Icono Especial EX] cuando toda la (Fuerza de Espada Qingming) se gasta para activar: Inflige masivo Daño Físico a enemigos en una gran área. Ye Shunguang no saldrá del estado de (Mente Iluminada) durante esta habilidad. Tras usar esta habilidad, (Velo Etereo: Veredicto) se elimina y el estado de (Mente Iluminada) termina. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Especial EX"]
        },
        {
            type: "Asistencia",
            name: "Habilidad de Entrada: Iluminando la Oscuridad",
            description: "Con 6 de (Fuerza de Espada Qingming) y mientras no está en el estado de (Mente Iluminada), mantén [Icono Ataque] para activar, o presiona [Icono Assist] mientras está en combate y cambia al campo desde fuera del campo para activar: Entra en el estado de (Mente Iluminada) y activa (Velo Etereo: Veredicto). Inflige Daño Físico a enemigos en una gran área en frente. Activar esta habilidad se considera como activar una (Asistencia Rápida). Entra en el estado aéreo tras usar esta habilidad. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida: Guardia de Soporte",
            description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Salta en el aire y empuja hacia adelante, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Ataque de Asistencia: Cese de Hostilidad",
            description: "Presiona [Icono Ataque] después de una (Asistencia Defensiva) para activar: Inflige masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva: Cuando Regrese",
            description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Bloquea (Parry) el ataque del enemigo, infligiendo masivo Aturdimiento. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida: Mente Iluminada - Soporte Táctico",
            description: "Mientras está en el estado de (Mente Iluminada), cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Lanza un corte hacia adelante, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Ataque de Asistencia: Mente Iluminada - Unificación",
            description: "Mientras está en el estado de (Mente Iluminada) y tras una (Asistencia Defensiva), presiona [Icono Ataque] para activar: Inflige masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Asistencia"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Principal: Claridad Ardiente",
            description: "Cuando no está en el estado de (Mente Iluminada) y con menos de 6 puntos de (Fuerza de Espada Qingming), ciertos ataques construyen lentamente (Fuerza de Espada Qingming). Siempre que se gana (Fuerza de Espada Qingming) por cualquier medio, cada 1 punto de (Fuerza de Espada Qingming) que excede el límite se convierte en 1 acumulación de (Portador), acumulándose hasta 3 veces. Al dejar el estado de (Mente Iluminada), todas las acumulaciones de (Portador) se consumen para otorgar el mismo número de acumulaciones de (Fuerza de Espada Qingming). Al entrar al campo de batalla, gana (Unidad), aumentando la Probabilidad de Crit en un {VALOR_1} y el Daño en un {VALOR_2}. Cuando (Definitiva: Persiguiendo Tormentas) o (Habilidad de Entrada: Iluminando la Oscuridad) se desata, Ye Shunguang entra en el estado de (Mente Iluminada) y activa (Velo Etereo: Veredicto). (Velo Etereo: Veredicto) tiene la misma duración que (Mente Iluminada). La duración dura 16s, y el temporizador se pausa mientras ella está fuera del campo. Durante el estado de (Mente Iluminada), las habilidades de Ye Shunguang se mejoran, todo el Daño Físico infligido por sus habilidades se convierte en Daño de Hoja Afilada. Mientras (Velo Etereo: Veredicto) está activo, cuando un enemigo entra en (Velo Etereo: Veredicto), gana un efecto de Vulnerabilidad de Velo basado en su multiplicador de Daño de Aturdimiento actual. Durante esto, cuando Ye Shunguang inflige Daño a enemigos con sus habilidades, el multiplicador de Daño de Aturdimiento enemigo se ignora y se reemplaza con el bonus de Vulnerabilidad de Velo. La Vulnerabilidad de Velo tiene un tope del 110%. El efecto se elimina cuando (Velo Etereo: Veredicto) termina.",
            tags: ["Pasiva Central"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional: Vuelo de Sombra",
            description: "Cuando otro personaje en tu escuadrón es un personaje de (Apoyo) o (Defensa): Cuando un compañero activa cualquier (Velo Etereo), gana 3 puntos de (Fuerza de Espada Qingming). Si ya está en el estado de (Mente Iluminada), esto se convierte en cambio en 3 acumulaciones de (Portador).",
            tags: ["Habilidad Adicional"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena: Castigar a los Malvados",
            description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un corte poderoso a enemigos en frente en una gran área, infligiendo masivo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Ataque en Cadena"]
        },
        {
            type: "Técnica Definitiva",
            name: "Definitiva: Persiguiendo Tormentas",
            description: "Cuando el Nivel de Decibelios está al [Máximo], presiona [Icono Definitiva] para activar: Invoca una formación de espadas y entra en el estado de (Mente Iluminada), activando un (Velo Etereo: Veredicto) mientras también gana 6 de (Fuerza de Espada Qingming). Esta habilidad inflige masivo Daño Físico. Al activar esta habilidad, si se consumen Decibelios, presiona [Icono Definitiva] mientras está en este estado de (Mente Iluminada) para lanzar una (Definitiva: Cielos Partidos) que no consume Decibelios. Entra en el estado aéreo tras usar esta habilidad. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Definitiva"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena: Mente Iluminada - Atraer Trueno",
            description: "Mientras está en el estado de (Mente Iluminada), y cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Desata un corte poderoso a enemigos en frente en una gran área, infligiendo masivo Daño Físico. Ye Shunguang no saldrá del estado de (Mente Iluminada) durante esta habilidad. Entra en el estado aéreo tras usar esta habilidad. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Ataque en Cadena"]
        },
        {
            type: "Técnica Definitiva",
            name: "Definitiva: Cielos Partidos",
            description: "Tras consumir Decibelios para lanzar (Definitiva: Persiguiendo Tormentas) y mientras está en el estado de (Mente Iluminada), presiona [Icono Definitiva] o mantén [Icono Especial] cuando toda la (Fuerza de Espada Qingming) se gasta para activar: Invoca una espada masiva, infligiendo masivo Daño Físico a enemigos. Ye Shunguang no saldrá del estado de (Mente Iluminada) durante esta habilidad. Tras usar esta habilidad, el estado de (Mente Iluminada) termina, y (Velo Etereo: Veredicto) se elimina. Esta habilidad no consume Decibelios. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Definitiva"]
        },
        {
            type: "Mindscape 1",
            name: "Yo Atado al Sueño",
            description: "Al entrar al campo de batalla, gana 6 de (Fuerza de Espada Qingming). Este efecto puede activarse una vez cada 180s en modo Zona de Investigación. El efecto de (Unidad) de (Pasiva Principal: Claridad Ardiente) aumenta el Daño infligido en un 10% adicional, e ignora el 20% de la DEF del objetivo.",
            tags: ["Mindscape 1"]
        },
        {
            type: "Mindscape 2",
            name: "Luz y Sombra",
            description: "El conteo máximo de acumulaciones de (Portador) aumenta a 6, y (Culminación) puede acumularse hasta 9 veces. Mientras está en el estado de (Mente Iluminada), cada punto de (Fuerza de Espada Qingming) consumido otorga 1 acumulación de (Culminación). El Daño de (Técnica Especial EX: Mente Iluminada - Luz Elevada) y (Definitiva: Cielos Partidos) ignora el 40% de la DEF del objetivo.",
            tags: ["Mindscape 2"]
        },
        {
            type: "Mindscape 3",
            name: "Espadachína",
            description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
            tags: ["Mindscape 3"]
        },
        {
            type: "Mindscape 4",
            name: "Juntos hacia el Polvo",
            description: "Al entrar al campo de batalla, gana 1,000 Decibelios. En modo Zona de Investigación, este efecto puede activarse una vez cada 180s. El bonus de Vulnerabilidad proporcionado por (Velo Etereo: Veredicto) aumenta a un máximo del 200%.",
            tags: ["Mindscape 4"]
        },
        {
            type: "Mindscape 5",
            name: "Destello Guía",
            description: "Nivel de (Ataque Básico), (Evasión), (Asistencia), (Técnica Especial), y (Ataque en Cadena) +2",
            tags: ["Mindscape 5"]
        },
        {
            type: "Mindscape 6",
            name: "Deseo de Linterna",
            description: "Al entrar al campo de batalla, gana 2 acumulaciones de (Deseo de Linterna). Al entrar en el estado de (Mente Iluminada), gana 1 acumulación de (Deseo de Linterna), acumulándose hasta 4 veces. Con 3 acumulaciones de (Deseo de Linterna), (Técnica Especial EX: Mente Iluminada - Regreso al Polvo) es reemplazada con (Definitiva: Cielos Partidos). Cuando esta (Definitiva: Cielos Partidos) se activa, consume 3 acumulaciones de (Deseo de Linterna). El último golpe de (Mente Iluminada - Regreso al Polvo) y (Definitiva: Cielos Partidos) inflige 1,500% del ATK como Daño Físico adicional.",
            tags: ["Mindscape 6"]
        }
    ]
};
