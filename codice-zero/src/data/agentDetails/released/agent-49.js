// Agent 49 - Sunna - Detailed Stats and Skills
export default {
    baseStats: {
        hp: {
            min: 681,
            max: 8477
        },
        atk: {
            min: 108,
            max: 750
        },
        def: {
            min: 48,
            max: 600
        },
        impact: 83,
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "96",
        anomalyMastery: "95",
        penRatio: "0%",
        energyRegen: "1.2",
    },
    coreStats: {
        statName: "atq%",
        valuePerNode: 0,
    },
    coreSkillScaling: [
        ["180%", "240%", "40%"],
        ["210%", "280%", "50%"],
        ["240%", "320%", "60%"],
        ["270%", "360%", "70%"],
        ["300%", "400%", "80%"],
        ["330%", "440%", "90%"],
        ["360%", "480%", "100%"],
    ],
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Martillo Meteoro Fantasmal",
            description: "Presiona [Icono Ataque] para activar: Desata hasta 4 ataques al frente, infligiendo Daño Físico.",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Gatita Mala al Acecho",
            description: "Cuando Sunna está fuera del campo en combate y no hay enemigos con la marca (Mirada de Gato) en el campo, Bubble Pop consumirá 1 (Pulidor de Uñas) y lanzará automáticamente un ataque, infligiendo Daño Físico. Cuando cualquier miembro del escuadrón activa o extiende cualquier (Velo Etereo), Sunna gana 2 (Pulidores de Uñas).",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Evasión",
            name: "Evasión: No Me Puedes Tocar",
            description: "Presiona [Icono Dodges] para activar: Una evasión rápida. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Evasión"]
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera: Martillo Celestial",
            description: "Presiona [Icono Ataque] durante una esquiva para activar: Lanza enemigos al frente hacia el aire, infligiendo Daño Físico.",
            tags: ["Físico", "Ataque de Embestida"]
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión: Delusión Triplex",
            description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Martilla continuamente a los enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Contador de Evasión"]
        },
        {
            type: "Técnica Especial",
            name: "Técnica Especial: Lanzador Estelar",
            description: "Presiona [Icono Especial] para activar: Dispara Bubble Pop desde el Air Gun para atacar enemigos adelante, infligiendo Daño Físico. Después de activar esta habilidad, (Bubble Pop se une) al combate.",
            tags: ["Físico", "Técnica Especial"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Bombardeo Bubblegum",
            description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un gato usando el arma para el objetivo e inflige Daño Físico. Después de activar esta habilidad, (Bubble Pop se une) al combate. Cuando se activa la habilidad, aplica el efecto (Acorde de Ángel) a todos los Agentes en el escuadrón por 35s. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Especial EX"]
        },
        {
            type: "Técnica Especial EX",
            name: "Técnica Especial EX: Técnica de Cámara Especial",
            description: "Después de entrar en (Acorde de Ángel), presiona [Icono Especial EX] para activar, o durante (Fiebre), mantén presionado [Icono Especial] para el (Quick Assist): Lanza un Ataque Coordinado con Bubble Pop contra enemigos objetivo, infligiendo Daño Físico. Después de usar esta habilidad, (Bubble Pop se une) al combate. Antes de que se active la habilidad, abre (Velo Etereo: Encore Fantasía). Mientras (Velo Etereo: Encore Fantasía) está activo, incrementa el ATK de todos los miembros del escuadrón en 50 puntos adicionales durante 35s. Antes de que Sunna reabra (Velo Etereo: Encore Fantasía), el (Velo Etereo: Encore Fantasía) existente se cerrará. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad. Cada vez que (Acorde de Ángel) es activado, (Técnica Especial EX: Técnica de Cámara Especial) solo puede activarse una vez.",
            tags: ["Físico", "Técnica Especial EX", "Velo Etereo"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena: No Te Metas con el Gato",
            description: "Cuando un (Ataque en Cadena) es activado, selecciona el personaje para activar: Monta a Bubble Pop hacia adelante, embistiendo enemigos adelante e infligiendo masivo Daño Físico. Un (Quick Assist) es activado cuando el ataque pesado de la habilidad golpea a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Ataque en Cadena"]
        },
        {
            type: "Técnica Definitiva",
            name: "Definitiva: ¡Aplástalo Todo!",
            description: "Cuando el Nivel de Decibelios está al (Máximo), presiona [Icono Definitiva] para activar: Desata ataques consecutivos de martillo, luego dispara Bubble Pop que explota, infligiendo masivo Daño Físico a enemigos en rango. Cuando un ataque pesado es activado, (Velo Etereo: Encore Fantasía) es activado; gana 3 (Garras Afiladas). Cuando un ataque pesado golpea a un enemigo, activa (Quick Assist). El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Definitiva"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida: Bombardeo de Golpes Salvajes",
            description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea a los enemigos en frente con golpes de martillo consecutivos, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva: Pánico Escénico",
            description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parry al ataque del enemigo, causando Aturdimiento masivo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Asistencia", "Aturdimiento"]
        },
        {
            type: "Asistencia",
            name: "Seguimiento de Asistencia: Taladros Rebotantes",
            description: "Presiona [Icono Ataque] después de una Asistencia Defensiva para activar: Monta el martillo neumático y salta continuamente, infligiendo Daño Físico masivo a enemigos en frente. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Asistencia"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Central: La Ternura es Justicia",
            description: "Los personajes en el estado (Acorde de Ángel) ven incrementado su ATK en una cantidad igual al 14% del ATK inicial de Sunna, hasta un máximo de 490. (Ataque Básico), (Técnica Especial Potenciada), (Técnica Especial EX), (Ataque en Cadena), (Definitiva) al golpear a un enemigo, aplican (Mirada de Gato) al objetivo durante 12s. Mientras Sunna está en el campo, la duración de (Mirada de Gato) se refresca continuamente; los enemigos normales con (Mirada de Gato) tienen un deseo de ataque reducido hacia Sunna. Cuando personajes de (Ataque) o (Anomalía) en el equipo atacan continuamente a un enemigo con (Mirada de Gato), se activa y elimina (Mirada de Gato): Cuando es activado por un personaje de (Ataque), inflige un {VALOR_1} del ATK como Daño de Atributo del Agente a los enemigos en el rango. Cuando es activado por un personaje de (Anomalía), inflige un {VALOR_2} del ATK como Daño de Atributo del Agente a los enemigos en el rango; este daño es Crítico garantizado, y el Daño Crítico aumenta en un {VALOR_3}. El daño causado por (Mirada de Gato) se considera daño causado por el (Agente Activador). Cuando hay múltiples monstruos con (Mirada de Gato) en el campo, solo se activará la (Mirada de Gato) del objetivo principal, y al activarse recuperará todas las (Mirada de Gato) del campo. Cuando un enemigo está en estado de Aturdimiento, (Mirada de Gato) se activará más rápidamente.",
            tags: ["Pasiva Central"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional: Contrapunto del Ensueño",
            description: "Se activa cuando hay un personaje de (Ataque) o de la misma Facción en el equipo:\nCuando un personaje dentro del (Velo Etereo: Repetición Delirante) golpea a un enemigo, el Multiplicador de Daño de Aturdimiento del objetivo aumenta en un 30% durante 35s.\nAl entrar en combate, o cuando cualquier personaje del equipo abre o extiende cualquier (Velo Etereo), el efecto de aumento de ATK de (Acorde de Ángel) aumenta adicionalmente en un 8%, y el límite superior aumenta adicionalmente en 280 puntos, durante 35s. Se puede acumular hasta 2 veces, y la duración de cada acumulación se calcula de forma independiente.",
            tags: ["Habilidad Adicional"]
        },
        {
            type: "Mindscape 1",
            name: "1. 'Síndrome de Corrupción de Soledad'",
            description: "Cuando Sunna entra al campo de batalla, restaura 20 de Energía. En modo Zona de Investigación, este efecto puede activarse una vez cada 180 segundos. Cuando (Mirada de Gato) activa y sus enemigos, reduce el DEF del objetivo en un 6%, durando 30 segundos, acumulando hasta 3 veces. La duración de cada acumulación se calcula separadamente.",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 2",
            name: "2. 'Gatos Siguen la Corriente'",
            description: "Mientras Sunna está dentro de cualquier (Velo Etereo), gana 1 acumulación de (Pulidor de Uñas) cada 10s; el tratamiento de daño del Multiplicador de DAÑO aumenta cuando (Mirada de Gato) es activada. Cuando es activado por un personaje de (Ataque): el Multiplicador de DAÑO aumenta en un 200%. Cuando es activado por un personaje de (Anomalía): el Multiplicador de DAÑO aumenta en un 300%.",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 3",
            name: "3. 'Transformación de Manzana'",
            description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 4",
            name: "4. 'Escuadrón de Investigación de Delirios'",
            description: "Cuando Sunna lanza su (Definitiva), todos los miembros del escuadrón obtienen 15% de DAÑO aumentado por 60s.",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 5",
            name: "5. 'Expreso Galáctico'",
            description: "Nivel de Ataque Básico, Evasión, Asistencia, Técnica Especial y Ataque en Cadena +2",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 6",
            name: "6. 'Big Bang del Hueco'",
            description: "Cuando Sunna activa su (Técnica Especial EX), entra en el estado (Encerrada) por 8 segundos. Durante (Encerrada), los ataques de Sunna son CRÍTICOS garantizados, y su Daño CRIT aumenta en un 0.03% de su ATK inicial, hasta un aumento máximo del 105%. Durante (Encerrada), el Nivel de Anti-Interrupción de Sunna aumenta y el DAÑO tomado es reducido en un 40%. Durante (Encerrada), Sunna puede activar (Mirada de Gato), calculando DAÑO según (Ataque) del Multiplicador de DAÑO de (Mirada de Gato) y una vez que se activa (Mirada de Gato), inmediatamente consume los (Pulidores de Uñas) y aplica (Mirada de Gato) al enemigo nuevamente; Durante (Encerrada), el DAÑO infligido por todo el escuadrón al activar (Mirada de Gato) aumenta en un 50%.",
            tags: ["Mindscape"]
        }
    ]
};
