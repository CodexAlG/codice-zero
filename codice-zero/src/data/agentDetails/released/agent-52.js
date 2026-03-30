export default {
    baseStats: {
        hp: {
            min: 626,
            max: 7788
        },
        atk: {
            min: 126,
            max: 797
        },
        def: {
            min: 49,
            max: 612
        },
        impact: 86,
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "112",
        anomalyMastery: "114",
        penRatio: "0%",
        energyRegen: "1.2",
    },
    coreStats: {
        statName: "Tasa de Anomalía",
        valuePerNode: 12,
    },
    materials: {
        weeklyBoss: {
            name: "",
            icon: "",
        },
        eliteBoss: {
            name: "",
            icon: ""
        }
    },
    coreSkillScaling: [
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""]
    ],
    skills: [
        { type: "Ataque Básico", name: "Ataque Básico: Sesgo", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cinco ataques consecutivos hacia adelante, infligiendo Daño Hielo; tras aterrizar el quinto ataque, pulsar [Icono Especial] permite conectar con la (Técnica Especial EX: Estilo de Ejecución - Veredicto); el cuarto ataque arroja la capa y luego entra en estado de (Perdón de Grilletes).", tags: ["Hielo"] },
        { type: "Ataque Básico", name: "Ataque Cargado: Cuchilla Giratoria", description: "Mantener pulsado [Icono Ataque] para activar: Promeia salta hacia arriba lanzando un ataque, y arroja su capa junto al enemigo entrando en estado de (Perdón de Grilletes), infligiendo Daño Hielo.", tags: ["Hielo"] },
        { type: "Ataque Básico", name: "Perdón de Grilletes", description: "Promeia arrojará su capa al ejecutar ciertos movimientos, cortando continuamente a los enemigos, infligiendo Daño Hielo; mientras la capa está arrojada, Promeia puede caminar lentamente; durante este periodo pulsar [Icono Ataque] permite conectar directamente con el quinto golpe del (Ataque Básico: Sesgo); durante este periodo si recibe un ataque puede activar automáticamente una (Evasión Perfecta), el efecto de evasión se activa como máximo una vez cada 20 segundos.", tags: ["Hielo"] },
        { type: "Evasión", name: "Evasión: Paso de Nieve", description: "Pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Evasión", name: "Ataque de Carrera: Saqueo de Vida", description: "Al evadir, pulsar [Icono Ataque] para activar: Realiza un ataque rápido hacia adelante, infligiendo Daño Hielo.", tags: ["Hielo"] },
        { type: "Evasión", name: "Contraataque de Evasión: Salto de Murciélago", description: "Tras activar (Evasión Perfecta), pulsar [Icono Ataque] para activar: Realiza ataques continuos contra el objetivo, infligiendo Daño Hielo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Asistencia", name: "Asistencia Rápida: Ataque Plegado", description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Lanza ataques continuos contra el objetivo, infligiendo Daño Hielo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Asistencia", name: "Asistencia Defensiva: Prohibición", description: "Cuando el personaje en el campo está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Asistencia", name: "Ataque de Asistencia: Intercepción", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza ataques continuos contra el objetivo, infligiendo Daño Hielo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Técnica Especial", name: "Técnica Especial: Estilo de Ejecución - Destello Helado", description: "Pulsar [Icono Especial] para activar: Lanza un ataque de dardos, infligiendo Daño Hielo.", tags: ["Hielo"] },
        { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Sendero de Escarcha Degollador", description: "Cuando la energía es suficiente, pulsar [Icono Especial] para activar: Lanza un ataque de dardos y arroja la capa junto al enemigo entrando en estado de (Perdón de Grilletes), infligiendo Daño Hielo; si recibe un ataque enemigo poco después de iniciar el movimiento, conectará automáticamente con la (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta); al activar el movimiento, Promeia obtiene el efecto (Regla de Hierro); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo", description: "Al poseer el efecto (Regla de Hierro), en estado de (Perdón de Grilletes) pulsar [Icono Ataque] o pulsar [Icono Dodges] para activar: Salta hacia el enemigo, recuperando la capa mientras realiza un ataque descendente, infligiendo Daño Hielo; tras aterrizar, si posee (Castigo de Escarcha), pulsar o mantener pulsado [Icono Especial] permite conectar con la (Técnica Especial EX: Estilo de Ejecución - Veredicto); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada", description: "Tras activar (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta), pulsar [Icono Ataque] o [Icono Dodges] para activar: Lanza rápidamente múltiples ataques, luego salta hacia el enemigo recuperando la capa mientras realiza un ataque descendente más potente, infligiendo Daño Hielo; tras aterrizar, si posee (Castigo de Escarcha), pulsar o mantener pulsado [Icono Especial] permite conectar con la (Técnica Especial EX: Estilo de Ejecución - Veredicto); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Técnica Especial", name: "Técnica Especial EX: Estilo de Ejecución - Veredicto", description: "Tras el último golpe del (Ataque Básico: Sesgo), de la (Técnica Especial EX: Estilo de Ejecución - Escarcha Cayendo) o de la (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada), si el (Castigo de Escarcha) es suficiente, pulsar o mantener pulsado [Icono Especial] para activar: Realiza una rápida esquiva hacia atrás al mismo tiempo que asesta un golpe final más poderoso, infligiendo Daño Hielo; posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Técnica Definitiva", name: "Ataque en Cadena: Liquidación Invertida", description: "Al activar una (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Lanza dardos, colgando boca abajo sobre el enemigo realizando múltiples ataques, seguido de un golpe final, infligiendo una gran cantidad de Daño Hielo; tras lanzar el movimiento, se puede conectar directamente con el cuarto golpe del (Ataque Básico: Sesgo); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Técnica Definitiva", name: "Técnica Definitiva: Castigo Perforahuesos", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Realiza múltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Hielo; cuando el golpe pesado golpea a un enemigo en estado de Anomalía de Atributo Hielo, estado de Anomalía de Atributo Etéreo, estado de Anomalía de Atributo Eléctrico, estado de Anomalía de Atributo Fuego, estado de Anomalía de Atributo Físico o estado de Anomalía de Atributo Viento, activa 1 vez el efecto (Abloom), calculando de forma fija una vez el 410% del multiplicador de daño de Anomalía de Atributo correspondiente; tras lanzar el movimiento, se puede conectar directamente con el cuarto golpe del (Ataque Básico: Sesgo); posee efecto de invencibilidad durante la ejecución del movimiento.", tags: ["Hielo"] },
        { type: "Pasiva Central", name: "Pasiva Central: Fuego Robado", description: "Si la Tasa de Anomalía inicial de Promeia es mayor a 120 puntos, cada 1 punto que exceda la Tasa de Anomalía inicial aumentará la Maestría de Anomalía en 1.8 puntos; al golpear a los enemigos con diferentes ataques, Promeia recupera una cierta cantidad de (Erosión de Frío), cuando un personaje del equipo activa el efecto (Congelación), el efecto (Desorden), el efecto (Turbulencia), o se activa la (Técnica Especial EX: Estilo de Ejecución - Sombra Oculta), recupera adicionalmente 7.5/7.5/7.5/15 puntos de (Erosión de Frío), pudiendo acumular hasta un máximo de 100 puntos de (Erosión de Frío); cuando el efecto (Abloom) activado por un compañero de equipo golpea a un enemigo, Promeia recupera adicionalmente 15 puntos de (Erosión de Frío), se activa como máximo una vez cada 0.1 segundos; si la (Erosión de Frío) es mayor o igual a 50 puntos, consumirá 50 puntos de (Erosión de Frío), convirtiéndolos en 1 punto de (Castigo de Escarcha), pudiendo obtener hasta un máximo de 2 puntos de (Castigo de Escarcha); al hacer que el golpe final de la (Técnica Especial EX: Estilo de Ejecución - Veredicto) o el golpe final del (Ataque en Cadena: Liquidación Invertida) activado mientras posee (Castigo de Escarcha) golpee a un enemigo en estado de Anomalía de Atributo Hielo, estado de Anomalía de Atributo Etéreo, estado de Anomalía de Atributo Eléctrico, estado de Anomalía de Atributo Fuego, estado de Anomalía de Atributo Físico o estado de Anomalía de Atributo Viento, consume 1 punto de (Castigo de Escarcha) para activar 1 vez el efecto (Abloom), calculando de forma fija el 400% del daño de Anomalía de Atributo correspondiente; cuando el efecto (Abloom) activado por Promeia golpea a un enemigo, recupera adicionalmente 100 puntos de decibelios, se activa como máximo una vez cada 1 segundo; cuando el efecto (Abloom) activado por un compañero de equipo golpea a un enemigo, Promeia recupera adicionalmente 150 puntos de decibelios, se activa como máximo una vez cada 0.1 segundos; al activar la (Técnica Definitiva: Castigo Perforahuesos), Promeia obtiene el siguiente efecto: Tras activar (Técnica Especial EX: Estilo de Ejecución - Veredicto), (Ataque en Cadena: Liquidación Invertida) o (Técnica Definitiva: Castigo Perforahuesos), pulsar o mantener pulsado [Icono Especial] permite conectar directamente con la (Técnica Especial EX: Estilo de Ejecución - Escarcha Pesada); Este efecto se puede activar una vez tras lanzar la (Técnica Definitiva: Castigo Perforahuesos).", tags: ["Hielo"] },
        { type: "Habilidad Adicional", name: "Habilidad Adicional: Beber Hielo", description: "Se activa cuando existe otro personaje de (Anomalía) o personaje de (Soporte) en el equipo: Al activar la (Técnica Especial EX), la Eficiencia de Acumulación de Atributo Hielo de Promeia aumenta en un 30%, con una duración de 30 segundos, al activarse de nuevo se reinicia la duración; cuando la (Técnica Especial EX) de Promeia golpea a un enemigo, el enemigo obtiene el estado de (Presunción de Culpabilidad), cuando todo el equipo inflige daño de Anomalía de Atributo a un enemigo en estado de (Presunción de Culpabilidad) ignora una cierta cantidad de defensa, al causar el efecto de (Abloom) ignora adicionalmente una cierta cantidad de defensa; por cada punto de la Tasa de Anomalía inicial de Promeia que supere los 100 puntos, hará que el daño de Anomalía de Atributo ignore un 0.1% de defensa, y el efecto de (Abloom) ignore adicionalmente un 0.4% de defensa, el estado de (Presunción de Culpabilidad) dura 30 segundos, al activarse de nuevo se reinicia la duración.", tags: ["Hielo"] }
    ]
}