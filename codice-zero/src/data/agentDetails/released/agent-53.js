export default {
    baseStats: {
        hp: { min: 683, max: 8497 },
        atk: { min: 124, max: 859 },
        def: { min: 36, max: 445 },
        impact: 95,
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "90",
        anomalyMastery: "89",
        penRatio: "0%",
        energyRegen: "1.2"
    },
    coreStats: {
        statName: "crit rate",
        valuePerNode: 4.8
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
                            ["50%"],
                            ["58%"],
                            ["67%"],
                            ["75%"],
                            ["83%"],
                            ["92%"],
                            ["100%"]
                        ],
    skills: [
                        { type: "Ataque Básico", name: "Ataque Básico: Ataque de Luz Estelar", description: "Pulsar [Icono Ataque] para activar: Realiza hasta cuatro ataques hacia adelante, infligiendo Daño Físico; El cuarto golpe del (Ataque Básico) al golpear a un enemigo, recupera su propia Vida; Al activar el cuarto golpe del (Ataque Básico), antes de aterrizar pulsar [Icono Especial] permite activar rápidamente la (Técnica Especial: Embestida de Motocicleta), y consume Vida."}, 
                        { type: "Ataque Básico", name: "Ataque Cargado: Espectáculo de Acrobacias", description: "Mantener pulsado [Icono Ataque] para activar: Gira rápidamente disparando alrededor del enemigo, infligiendo Daño Físico; Se mantiene hasta soltar [Icono Ataque]."},
                        { type: "Evasión", name: "Evasión: Deslizamiento", description: "Estando en (Estado Libre), pulsar [Icono Dodges] para activar: Una esquiva rápida de carrera; Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Evasión", name: "Evasión: Derrape", description: "En (Estado de Motocicleta) mantener pulsado [Icono Dodges] para activar: Controla la motocicleta para derrapar, en un corto periodo de tiempo puede activar (Evasión Perfecta); Durante la ejecución del movimiento, acumulará carga continuamente, al completarse la carga, conectará automáticamente con la (Técnica Especial EX: Levantamiento de Motocicleta); Posee un breve efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Evasión", name: "Ataque de Carrera: Corte inverso de Luz Estelar", description: "Pulsar [Icono Ataque] para activar: Realiza un corte rápido hacia adelante, infligiendo Daño Físico."},
                        { type: "Evasión", name: "Contraataque de Evasión: Cañón de Mano", description: "Fuera del (Estado de Motocicleta), tras activar una (Evasión Perfecta), pulsar [Icono Ataque] para activar: Dispara un cañón de mano hacia adelante, infligiendo Daño Físico; Si se ha activado una (Evasión Perfecta), tras lanzar este movimiento se puede conectar con el cuarto golpe del (Ataque Básico); Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Técnica Especial", name: "Técnica Especial: Embestida de Motocicleta", description: "Cuando su propia Vida es mayor al 33%, pulsar [Icono Especial] para activar: Invoca la motocicleta para chocar rápidamente contra el enemigo, infligiendo Daño Físico; Al activar el movimiento entra en (Estado de Motocicleta), consumiendo una cierta cantidad de Vida; Durante la ejecución del movimiento, si recibe un ataque enemigo, activará un bloqueo, y será inmune a ese ataque; Al activar el bloqueo, conectará automáticamente con la (Técnica Especial EX: Levantamiento de Motocicleta)."},
                        { type: "Técnica Especial", name: "Técnica Especial: Patear Motocicleta", description: "Se activa automáticamente al retroceder al finalizar el movimiento: Patea la motocicleta hacia el enemigo, infligiendo Daño Físico; Tras lanzar el movimiento, se puede conectar con el (Contraataque de Evasión: Cañón de Mano)."},
                        { type: "Técnica Especial", name: "Técnica Especial EX: Levantamiento de Motocicleta", description: "En la (Técnica Especial: Embestida de Motocicleta) al activar un bloqueo se activa automáticamente: Levanta la motocicleta para atacar al enemigo, infligiendo Daño Físico; Tras lanzar el movimiento, si la energía es suficiente, pulsar [Icono Especial EX] permite conectar con la (Técnica Especial EX: Golpe de Justicia)."},
                        { type: "Técnica Especial", name: "Técnica Especial EX: Aplastamiento de Motocicleta", description: "Cuando la energía es suficiente, mantener pulsado [Icono Especial EX] para activar: Usa la motocicleta para aplastar hacia abajo, infligiendo Daño Físico; Al salir del (Estado de Motocicleta) tras finalizar el movimiento, recupera su propia Vida; Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Técnica Especial", name: "Técnica Especial EX: Patada Voladora de Caballero", description: "Cuando el (Valor Térmico) es suficiente, mantener pulsado [Icono Especial EX] para activar: Salta por los aires y lanza una patada voladora hacia el objetivo, infligiendo una gran cantidad de Daño Físico; Al salir del (Estado de Motocicleta) tras finalizar el movimiento, recupera su propia Vida; Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Técnica Especial", name: "Técnica Especial EX: Golpe de Justicia", description: "Tras activar la (Técnica Especial EX: Levantamiento de Motocicleta), y si la energía es suficiente, pulsar [Icono Especial EX] para activar: Usa la motocicleta y el cañón de mano para realizar un ataque combinado, infligiendo Daño Físico; Sale del (Estado de Motocicleta) tras finalizar el movimiento; Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Asistencia", name: "Asistencia Rápida: Cañón de Mano", description: "Cuando el personaje en uso es lanzado por los aires, pulsar [Icono Assist] para activar: Dispara un cañón de mano hacia adelante, infligiendo Daño Físico; Cuando la Vida es suficiente, activar este movimiento cambiará a activar la (Técnica Especial: Embestida de Motocicleta), este efecto se activa como máximo 1 vez cada 5 segundos; Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Asistencia", name: "Asistencia Defensiva: Escudo de Vehículo", description: "Cuando el personaje en el campo está a punto de ser atacado, pulsar [Icono Assist] para activar: Realiza una parada al ataque enemigo, acumulando una gran cantidad de valor de Aturdimiento; Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Asistencia", name: "Ataque de Asistencia: Patada de Vehículo", description: "Tras activar (Asistencia Defensiva), pulsar [Icono Ataque] para activar: Lanza un ataque de patada a vehículo sobre el objetivo, infligiendo una gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Técnica Definitiva", name: "Ataque en Cadena: Cuchilla Rápida", description: "Al activar un (Ataque en Cadena), seleccionar al personaje correspondiente para activar: Realiza un ataque de múltiples golpes hacia adelante, infligiendo una gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Técnica Definitiva", name: "Técnica Definitiva: Cañón Térmico de Luz Estelar", description: "Cuando el nivel de decibelios llega a (Máximo), pulsar [Icono Definitiva] para activar: Al activar el movimiento entra en (Estado de Motocicleta), lanza una carga de motocicleta hacia adelante, y tras finalizar la carga desata un rayo láser, infligiendo una gran cantidad de Daño Físico; Posee efecto de invencibilidad durante la ejecución del movimiento."},
                        { type: "Pasiva Central", name: "Pasiva Central: Determinación de Caballero", description: "Starlight - Billy aumentará adicionalmente su Fuerza Pura según su Vida Máxima, cada 1 punto de Vida Máxima aumentará 0.1 puntos de Fuerza Pura; El daño causado por los movimientos de Starlight - Billy que infligen Daño Físico es todo daño de Fuerza Pura, ignorando la defensa del enemigo, y utiliza la Fuerza Pura como multiplicador de daño del movimiento; cuando Starlight - Billy entra al campo de batalla recupera inmediatamente 60 puntos de energía de destello, en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos; Cuando la Vida es mayor al 33%, se puede pulsar [Icono Especial EX] para activar la (Técnica Especial: Embestida de Motocicleta), y cada vez que se activa este movimiento su propio Daño Crítico aumenta un {VALOR_1}, con una duración de 30 segundos; Cuando los ataques de Starlight - Billy golpean a un enemigo, obtendrá (Valor Térmico), la cantidad de recuperación varía según el movimiento, el límite máximo de (Valor Térmico) es de 120 puntos, al estar en estado de combate, recuperará (Valor Térmico) lentamente; al activar (Evasión Perfecta), activar (Asistencia Defensiva: Escudo de Vehículo) o al activar un bloqueo, recuperará (Valor Térmico) adicional. Cuando el (Valor Térmico) supera los 100 puntos, mantener pulsado [Icono Especial EX] consumirá 100 puntos de (Valor Térmico), activando con prioridad la (Técnica Especial EX: Patada Voladora de Caballero); Después de que el cuarto golpe del (Ataque Básico: Ataque de Luz Estelar) golpea a un enemigo, recupera 12% de Vida; tras activar la (Técnica Especial EX: Aplastamiento de Motocicleta), recupera 20% de Vida; tras activar la (Técnica Especial EX: Patada Voladora de Caballero), recupera 20% de Vida." },
                        { type: "Habilidad Adicional", name: "", description: "Se activa cuando existe un personaje de (Aturdimiento), (Defensa) o (Soporte) en el equipo: Cuando el cuarto golpe del (Ataque Básico: Ataque de Luz Estelar), el (Contraataque de Evasión: Cañón de Mano), el (Ataque en Cadena: Cuchilla Rápida) o la (Técnica Definitiva: Cañón Térmico de Luz Estelar) causan daño, obtiene una capa de (Mejora de Daño buff), con una duración de 20 segundos, acumulable hasta un máximo de 2 capas, cada capa de (Mejora de Daño buff) hará que el daño causado por el (Ataque en Cadena), la (Técnica Definitiva) y la (Técnica Especial EX) aumente un 20%."},
                        { type: "Mindscape 1", name: "Mindscape 1", description: ""},
                        { type: "Mindscape 2", name: "Mindscape 2", description: ""},
                        { type: "Mindscape 3", name: "Mindscape 3", description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2", tags: ["Electrico"]},
                        { type: "Mindscape 4", name: "Mindscape 4", description: ""},
                        { type: "Mindscape 5", name: "Mindscape 5", description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2", tags: ["Electrico"]},
                        { type: "Mindscape 6", name: "Mindscape 6", description: ""},

                ]
}
