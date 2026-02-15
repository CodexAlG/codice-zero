export default {
    baseStats: {
        hp: {
            min: 673,
            max: 8373
        },
        atk: {
            min: 107,
            max: 746
        },
        def: {
            min: 50,
            max: 622
        },
        impact: 120,
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "90",
        anomalyMastery: "93",
        penRatio: "0%",
        energyRegen: "1.2",
    },
    coreStats: {
        statName: "Tasa de Anomalía",
        valuePerNode: 12,
    },
    coreSkillScaling: [
        ["50", "25%", "15%", "9%"],
        ["58", "29%", "17.5%", "10%"],
        ["66", "33%", "20%", "11%"],
        ["74", "37%", "22.5%", "12%"],
        ["82", "41%", "25%", "13%"],
        ["90", "45%", "27.5%", "14%"],
        ["100", "50%", "30%", "15%"],
    ],
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico",
            description: "Presiona [Icono Ataque]: Realiza hasta tres golpes consecutivos hacia adelanta, infligiendo Daño Etéreo",
            tags: ["Etereo", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Cargado",
            description: "Mantener presionado [Icono Ataque] para cargar; al soltar el botòn en el momento adecuado, se puede lanzar un Ataque Cargado Preciso, el cual aumenta el valor de Aturdimiento infligido por este movimiento en un 20%; Nangong Yu puede lanzar hasta tres etapas de Ataque Cargado, la segunda y tercera etapa requieren consumir 50 puntos de (valor de Baile) cada una; al conectar despuès de (Contraataque de Evasiòn), (Ataque de Asistencia), (Asistencia Ràpida) y (Técnica Especial EX), se puede completar el Ataque Cargado Preciso màs facilmente; durante la carga de la primera etapa, el nivel de resistencia a la interrupiòn aumenta y el daño recibido se reduce en un 60%; durante la segunda y tercera etapa del Ataque Cargado, se posee efecto de invencibilidad; la fase de embestida de la primera etapa del Ataque Cargado puede bloquear ataques enemigos, si el bloqueo es exitoso, este Ataque Cargado tambièn se considerarà como un Ataque Cargado Preciso; todos los Ataques Cargados poseen efecto de invencibilidad durante su ejecuciòn.",
            tags: ["Etereo", "Ataque Básico"]
        },
        {
            type: "Evasión",
            name: "Evasión",
            description: "Pulsar [Icono Dodges]: Realiza una evasiòn ràpida; posee efecto de invencibilidad durante la ejecuciòn del movimiento",
            tags: ["Etereo", "Evasión"]
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera",
            description: "Al evadir, pulsar [Icono Ataque]: Realiza un ataque ràpido hacia adelante, infligiendo Daño Etéreo",
            tags: ["Etereo", "Evasión"]
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión",
            description: "Tras activar una (Evasiòn Perfecta), pulsar [Icono Ataque]: Salta hacia adelante y realiza un ataque de barrido al aterrizar, infligiendo Daño Etéreo; possee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Evasión"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial",
            description: "Pulsar [Icono Especial]: Blandir el martillo para lanzar un ataque, infligiendo Daño Etéreo.",
            tags: ["Etereo", "Técnica Especial"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial EX",
            description: "Cuando la energìa es suficiente, pulsar [Icono Especial EX]: Blandir el martillo para lanzar un ataque, infligiendo una gran cantidad de Daño Etéreo; este movimiento no interrumpirà el conteo de combo del (Ataque Basico: Ataque Cargado); posee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Técnica Especial"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida",
            description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist]: Salta hacia adelante y realiza ataques consecutivos al objetivo, infligiendo Daño Etéreo; posee efecto de invenciblidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva",
            description: "Cuando el personaje en el campo està a punto de ser atacado, pulsar [Icono Assist]: Realiza un parry al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; posee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Ataque de Asistencia",
            description: "Tras activar (Asistencia Definitiva), pulsar [Icono Ataque]: Realiza ataques continuos contra el objetivo, infligiendo una gran cantidad de Daño Etéreo; posee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Asistencia"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Central",
            description: "La Maestrìa de Anomalìa de Nangong Yu aumenta en {VALOR_1} puntos; cuando la Tasa de Anomalìa de Nangong Yu es superior a 100 puntos, cada 1 punto que exceda la Tasa de Anomalìa inicial aumentarà su propio impacto en 0.8; cuando un enemigo se encuentra en estado de Aturdimiento, cada vez que entra en un estado de Anomalìa, recibe un ataque de (Abloom) o un ataque de (Desorden), acumularà 1 capa de (Marca); un mismo enemigo puede ser acumulado hasta un màximo de 5 capas de (Marcas) se acumulan hasta el nùmero màximo de capas o cuando un enemigo que posee (Marcas) se recupera del estado de Aturdimiento, todas las (Marcas) seràn eliminadas; cuando las (Marcas) son eliminadas, se activarà un efecto especial de (Desorden) llamado (Desorden de Polaridad), infligiendo al enemigo un {VALOR_2} del daño del efecto de (Desorden) original, por cada 1 capa de (Marca) que tenga el enemigo, el daño de este (Desorden de Polaridad) infligirà un 10% adicional del daño del efecto de (Desorden) original, el (Desorden de Polaridad) no eliminarà el efecto de Anomalìa de Atributo en el que se encuentra el objetivo; durante un mismo periodo de Aturdimiento, si las (Marcas) ya han sido elimindas, el enemigo no podrà volver a recibir (Marcas), cuando el (Ataque Basico: Ataque Cargado) o la (Técnica Especial EX) de Nangong Yu golpean a un enemigo, aumentan su propia Eficiencia de Acumulaciòn de Anomalìa en un {VALOR_3}, la Eficiencia de Aturdimiento en un {VALOR_4}, y aumentan el daño infligido por todo el equipo en un 30%, con una duraciòn de 20 segundos, al activarse de nuevo se reinicia la duraciòn. Cuando el (Ataque Basico: Ataque Cargado) de Nangong Yu golpea a un enemigo, el enemigo obtiene el efecto (Mareo), los enemigos bajo este efecto ven aumentada su duraciòn de Aturdimiento en 3 segundos tras entrar en estado de Aturdimiento, el efecto (Mareo) se activa como màximo una vez por objetivo antes de recuperarse del estado de Aturdimiento, el efecto de aumento de duraciòn de Aturdimiento no se puede acumular con efectos del mismo tipo, cuando termina el Aturdmiento del enemigo con efecto (Mareo), el efecto (Mareo) tèrmina; cuando cualquier personaje del equipo hace que un enemigo entre en estado de Aturdimiento, el multiplicador de daño de Aturdmiento del enemigo aumenta un 30%; al estar en estado de combate, Nangong Yu recupera 4 puntos de (Valor de Baile) por segundo, cuando cualquier personaje del equipo hace que un enemigo entre en estado de Anomalìa, recuperarà adicionalmente 20 puntos de (Valor de Baile) para Nangong Yu, este efecto se activa como màximo una vez cada 8 segundos, Nangong Yu puede poseer un màximo de 100 puntos de (Valor de Baile)",
            tags: ["Etereo", "Pasiva Central"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional",
            description: "Se activa cuando existe un personaje de (Anomalìa) o un personaje de la misma facciòn que ella en el equipo: La Eficiencia de Acumulaciòn de Anomalìa causada por el ataque de cualquier personaje del equipo al golpear un enemigo en estado de Aturdimiento aumenta en un 20%, la Eficiencia de Acumulaciòn de Anomalìa de Aturdimiento aumenta adicionalmente en un 40%, cuando el Agente en uso golpea con un ataque pesado de (Tecnica en Cadena) a un enemigo que se encuentra bajo un estado de Anomalìa de Atributyo, activarà el efecto especial de (Desorden) llamado (Desorden de Polaridad), infligiendo al objetivo un 40% del daño del efecto de (Desorden) original, el (Desorden de Polaridad) no eliminarpa el estado de Anomalìa de Atributo en el que se encuentra el objetivo, el enemigo puede activar este efecto como màximo una vez durante el perido de Aturdmiento.",
            tags: ["Etereo", "Habilidad Adicional"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena",
            description: "Al activar una (Ataque en Cadena), seleccionar al personaje correspondiente para lanzar: Realiz mùltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Etéreo; posee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etéreo", "Técnica Definitiva"]
        },
        {
            type: "Técnica Definitiva",
            name: "Definitiva",
            description: "Cuando el nivel de decibelios llega a (Màximo), pulsar [Icono Definitiva]: Realiza mùltiples ataques hacia adelante, infligiendo una gran cantidad de Daño Etéreo; al lanzar el movimiento, Nangong Yu despliega el (Velo Etereo: Repeticiòn Delirante), durante la duraciòn del (Velo Etereo: Repeticiòn Delirante), el Ataque de todos los personajes del equipo aumenta adicionalmente en 50 puntos, con una duraciòn de 30 segundos; si Nangong Yu vuelve a desplegar el (Velo Etereo: Repeticiòn Delirante), se cerrarà el (Velo Etereo: Repeticiòn Delirante) existente; posee efecto de invencibilidad durante la ejecuciòn del movimiento.",
            tags: ["Etereo", "Técnica Definitiva"]
        },
        {
            type: "Mindscape 1",
            name: "Mindscape 1",
            description: "Cuando (Técnica Especial EX) o (Ataque Basico: Ataque Cargado) golpean a un enemigo, reducen la Resistencia a Todos los Atributos del enemigo en un 15%, con una duraciòn de 40 segundos, al activarse de nuevo se reinicia la duraciòn, al entrar al campo de batalla, el (Valor de Baile) de Nangong Yu se recupera hasta el valor màximo, en el Cavidad Cero este efecto se activa como màximo una vez cada 180 segundos.",
            tags: ["Etereo", "Mindscape 1"]
        },
        {
            type: "Mindscape 2",
            name: "Mindscape 2",
            description: "Cada capa de (Marca) hace que el daño adicional infligido por el (Desorden de Polaridad) aumente hasta un 15% del efecto de (Desorden) original; el aumento del multiplicador de daño de vulnerabilidad por aturdimiento proporcionado por la (Pasiva) aumenta adicionalmente en un 20%",
            tags: ["Etereo", "Mindscape 2"]
        },
        {
            type: "Mindscape 3",
            name: "Mindscape 3",
            description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2",
            tags: ["Etereo", "Mindscape 3"]
        },
        {
            type: "Mindscape 4",
            name: "Mindscape 4",
            description: "La Maestrìa de Anomalìa aumenta en 40; al activar un Ataque Cargado Preciso, la Eficiencia de Acumulaciòn de Anomalìa del (Ataque Basico: Ataque Cargado) aumenta en un 35%.",
            tags: ["Etereo", "Mindscape 4"]
        },
        {
            type: "Mindscape 5",
            name: "Mindscape 5",
            description: "(Ataque Básico), (Evasión), (Asistencia), (Técnica Especial) y (Ataque en Cadena) Lv. +2",
            tags: ["Etereo", "Mindscape 5"]
        },
        {
            type: "Mindscape 6",
            name: "Mindscape 6",
            description: "Cuando el enemigo no se encuentra en estado de Aturdmiento, al entrar en un estado de Anomalìa o ser golpeado por un ataque pesado de (Técnica Especial EX), acumularà 1 capa de (Marca: Modificada), al ser golpeado por un ataque pesado de (Técnica Definitiva) acumularà 2 capas de (Marca: Modificada); (Marca: Modificada) se puede acumular hasta un màximo de 5 capas, cuando las capas de (Marca: Modificada) acumuladas en el enemigo alcanzan el limite superior, se activara una vez el (Desorden de Polaridad) y se eliminaràn todas las (Marca: Modificada), infligiendo al objetivo un 40% del dañño del efecto de (Desorden) original, por cada 1 capa de (Marca: Modificada) que tenga el enemigo, el multiplicador de daño de este (Desorden de Polaridad) aumentarà adicionalmente en un 8%, el (Desorden de Polaridad) no eliminarà el estado de Anomalìa de Atributo en el que se encuentra el objetivo; para un mismo enemigo, despuès de activar (Desorden de Polaridad) a travès de (Marca: Modificada), no se podràn volver a acumular (Marca: Modificada) hasta que se recupere del estado de Aturdmiento; (Marca: Modificada) y (Marca) no se pueden superponer entre si.",
            tags: ["Etereo", "Mindscape 6"]
        },
    ],
}