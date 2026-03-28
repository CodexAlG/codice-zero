export default {
    baseStats: {
        hp: { min: 683, max: 8497 },
        atk: { min: 124, max: 784 },
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
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""]
    ],
    skills: [
        { type: "Pasiva Central", name: "Pasica Central: Determinación de Caballero", description: "Starlight Billy aumentará adicionalmente su Fuerza Pura según su Vida Máxima, cada 1 punto de Vida Máxima aumentará 12 puntos de Fuerza Pura. El daño causado por los movimientos de Starlight Billy que infligen (Daño Físico) es todo daño de Fuerza Pura, ignorando la defensa del enemigo, y utiliza la Fuerza Pura como multiplicador de daño del movimiento; cuando Starlight Billy entra al campo de batalla recupera inmediatamente 120 de energía de destello, en el modo de exploración este efecto se activa como máximo una vez cada 180 segundos. Cuando Starlight Billy recibe daño letal, es inmune a ese daño y obtiene un escudo equivalente al 10% de su Vida Máxima, con una duración de 30 segundos, el daño recibido en un solo golpe no excederá el valor del escudo. Mientras Starlight Billy se encuentra en (Estado de Motocicleta) consumirá Vida continuamente, su Daño Crítico aumenta un 100%, el daño recibido se reduce un 40%, y su nivel de resistencia a la interrupción aumenta. En (Estado de Motocicleta), cuando la Vida de Starlight Billy cae por debajo del 1% de su Vida Máxima, Starlight Billy entrará en (Estado Libre). En (Estado de Motocicleta), cuando los movimientos causan daño recuperará (Valor Térmico), el límite máximo de (Valor Térmico) es de 100 puntos; cuando el (Valor Térmico) está lleno, la siguiente (Técnica Especial EX) se actualiza a (Técnica Especial EX: Patada Voladora de Caballero), al activar la (Técnica Especial EX: Patada Voladora de Caballero), consume todo el (Valor Térmico). Mientras Starlight Billy se encuentra en (Forma Libre), cuando algunos de sus movimientos causan daño recuperará su propia Vida, cuando la Vida actual de Starlight Billy no sea inferior al 10%, puede activar la (Técnica Especial: Subir al Vehículo) para entrar en (Forma de Motocicleta). Al activar la (Técnica Especial EX: Aplastamiento de Motocicleta) o al activar la (Técnica Especial: Cambiar a Forma Libre) / (Técnica Especial: Cambiar a Forma de Motocicleta) y desencadenar una (Evasión Perfecta), recuperará su propia Vida. Al activar el (Ataque Normal: Embestida de Motocicleta), (Ataque Normal: Derrape de Motocicleta) y (Contraataque de Evasión: Levantamiento de Motocicleta) obtendrá un escudo equivalente al 10% de su Vida Máxima, se puede activar 2 veces cada 4 segundos, el escudo es acumulable, dura 3 segundos, al activarse de nuevo se reinicia la duración.", tags: ["Físico"] },
        { type: "Habilidad Adicional", name: "Habilidad Adicional:", description: "Se activa cuando existe un personaje de (Aturdimiento), de (Defensa) o de (Soporte) en el equipo: Tras activar el (Ataque Normal: Cuarta Etapa), (Contraataque de Evasión: Cañón de Mano), (Ataque en Cadena: ) y (Técnica Definitiva: ) puede obtener una capa de (Mejora de Daño buff), con una duración de 20 segundos, acumulable hasta un máximo de 2 capas, cada capa de (Mejora de Daño buff) hará que el daño causado por la (Ataque en Cadena), (Técnica Definitiva), (Técnica Especial EX: Patada Voladora de Caballero), (Técnica Especial EX: Aplastamiento de Motocicleta) y el (Contraataque de Evasión: Levantamiento de Motocicleta) aumente un 20%.", tags: ["Físico"] }
    ]
}
