// Agent 49 - Sunna
export default {
    baseStats: {
        hp: {
            min: 681, // Placeholder
            max: 8477 // Placeholder
        },
        atk: {
            min: 108, // Placeholder
            max: 750 // Placeholder
        },
        def: {
            min: 48, // Placeholder
            max: 600 // Placeholder
        },
        impact: 83, // Placeholder
        crit: "5%",
        critDmg: "50%",
        anomalyRate: "96", // Placeholder
        anomalyMastery: "95", // Placeholder
        penRatio: "0%",
        energyRegen: "1.2",
    },
    coreStats: {
        statName: "atq%", // Inferido
        valuePerNode: 0, // Placeholder
    },
    coreSkillScaling: [
        ["30%", "400"],
        ["30%", "500"],
        ["30%", "600"],
        ["30%", "700"],
        ["30%", "800"],
        ["30%", "900"],
        ["30%", "1000"],
    ],
    skills: [
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Martillazo a la Cara",
            description: "Presiona [Icono Ataque] para activar: Desata hasta 4 ataques hacia adelante, infligiendo Daño Físico.",
            tags: ["Físico", "Ataque Básico"]
        },
        {
            type: "Ataque Básico",
            name: "Ataque Básico: Arañazo de Pata",
            description: "Cuando Sunna está fuera del campo en combate y no hay enemigos con la marca (Hipnotizado) en el campo, Kitty consumirá 1 (Punto de Ataque) de Sunna y lanzará automáticamente un ataque, infligiendo Daño Físico. Cuando cualquier miembro del escuadrón activa o extiende cualquier (Velo Etereo), Sunna gana 3 (Puntos de Ataque).",
            tags: ["Físico", "Ataque Básico", "Fuera del Campo"]
        },
        {
            type: "Evasión",
            name: "Evasión: Volar",
            description: "Presiona [Icono Dodges] para activar: Una evasión rápida de dash. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Evasión"]
        },
        {
            type: "Evasión",
            name: "Ataque de Carrera: Corte Ascendente",
            description: "Presiona [Icono Ataque] durante una evasión para activar: Lanza a los enemigos en frente por los aires, infligiendo Daño Físico.",
            tags: ["Físico", "Evasión"]
        },
        {
            type: "Evasión",
            name: "Contraataque de Evasión: Triple Gancho",
            description: "Presiona [Icono Ataque] durante una (Evasión Perfecta) para activar: Martillea continuamente a los enemigos en frente, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Evasión"]
        },
        {
            type: "Técnica Especial",
            name: "Ataque Especial: Pistola de Aire",
            description: "Presiona [Icono Especial] para activar: Dispara un gatito usando una pistola de aire para atacar a los enemigos adelante, infligiendo Daño Físico. Después de activar la habilidad, si no hay gatos en el campo, invoca un gatito.",
            tags: ["Físico", "Técnica Especial"]
        },
        {
            type: "Técnica Especial EX",
            name: "Ataque Especial EX: Golpe de Gato",
            description: "Con suficiente Energía, presiona [Icono Especial EX] para activar: Lanza un gato para golpear al objetivo e infligir Daño Físico. Después de activar esta habilidad, si no hay gatos en el campo, invoca un gato. Al activar esta habilidad, aplica el efecto (Fiebre) a todos los Agentes en el escuadrón durante 40s. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Especial EX"]
        },
        {
            type: "Técnica Especial EX",
            name: "Ataque Especial EX: Ataque de Enlace de Cámara",
            description: "Después de entrar en (Fiebre), presiona [Icono Especial EX] para activar: Golpea a los enemigos objetivo junto con Kitty, infligiendo Daño Físico. Después de usar esta habilidad, si no hay gato en el campo, invoca a Kitty. Cuando se activa el ataque pesado, abre (Velo Etereo: Ídolo). Mientras (Velo Etereo: Ídolo) está activo, incrementa el ATK de todos los miembros del escuadrón en 50 puntos adicionales durante 30s. Antes de que Sunna reabra (Velo Etereo: Ídolo), el (Velo Etereo: Ídolo) existente se cerrará. Cuando el ataque pesado de la habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad. Cada vez que se entra en (Fiebre), (Ataque Especial EX: Golpe Combinado Fotográfico) solo puede activarse una vez.",
            tags: ["Físico", "Técnica Especial EX", "Velo Etereo"]
        },
        {
            type: "Técnica Definitiva",
            name: "Ataque en Cadena: Embestida Gatuna",
            description: "Cuando se activa un (Ataque en Cadena), selecciona al personaje para activar: Carga hacia adelante en un gato, embistiendo a los enemigos adelante y causando Daño Físico masivo. Se activa una (Asistencia Rápida) cuando el ataque pesado de la habilidad golpea a un enemigo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Ataque en Cadena"]
        },
        {
            type: "Técnica Definitiva",
            name: "Definitiva: Golpea al Topo",
            description: "Cuando la Calificación de Decibelios está al Máximo, presiona [Icono Definitiva] para activar: Juega a golpea al topo con el gato mientras ataca a los enemigos, causando Daño Físico masivo. Cuando se activa un ataque pesado, se habilita (Velo Etereo: Ídolo). Cuando un ataque pesado de habilidad golpea a un enemigo, activa (Asistencia Rápida). El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Técnica Definitiva"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Rápida: Triple Gancho",
            description: "Cuando el personaje activo es lanzado, presiona [Icono Assist] para activar: Golpea a los enemigos en frente con golpes de martillo consecutivos, infligiendo Daño Físico. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Asistencia"]
        },
        {
            type: "Asistencia",
            name: "Asistencia Defensiva: Bloqueo",
            description: "Cuando el personaje en el campo está a punto de ser atacado, presiona [Icono Assist] para activar: Parry al ataque del enemigo, causando Aturdimiento masivo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Asistencia", "Aturdimiento"]
        },
        {
            type: "Asistencia",
            name: "Seguimiento de Asistencia: Martillo",
            description: "Presiona [Icono Ataque] después de una Asistencia Defensiva para activar: Desata golpes de martillo consecutivos hacia adelante, infligiendo Daño Físico masivo. El personaje es invulnerable mientras usa esta habilidad.",
            tags: ["Físico", "Asistencia"]
        },
        {
            type: "Pasiva Central",
            name: "Pasiva Central: Sunna",
            description: "Los personajes en el estado (Fiebre) ganan ATK aumentado igual al {VALOR_1} del ATK inicial de Sunna, hasta un máximo de {VALOR_2}. (Ataque Básico: Arañazo de Pata), (Ataque Especial EX: Golpe de Gato), (Ataque Especial EX: Ataque de Enlace de Cámara), (Ataque en Cadena: Embestida Gatuna) y (Definitiva: Golpea al Topo) aplican la marca (Hipnotizado) a los objetivos al golpear, durando 12 segundos. Mientras Sunna está en el campo, la duración de la marca (Hipnotizado) se refresca continuamente; los enemigos normales con la marca (Hipnotizado) tienen aggro reducido hacia Sunna. Cuando personajes de (Ataque) o (Anomalía) en el escuadrón atacan continuamente y aciertan un ataque pesado en enemigos con la marca (Hipnotizado), activan y detonan la marca (Hipnotizado). Cuando un personaje de (Ataque) la detona, infligen Daño de Atributo igual al (210%) del ATK a los enemigos en rango. Cuando un personaje de (Anomalía) la detona, infligen Daño de Atributo igual al (210%) del ATK a los enemigos en rango. Este DAÑO está garantizado de ser CRÍTICO y el Daño CRIT aumenta en un (100%). Cuando múltiples enemigos con la marca (Hipnotizado) están en el campo, solo la marca (Hipnotizado) del objetivo principal de ataque será activada, y otras marcas (Hipnotizado) serán eliminadas. Cuando un enemigo está Aturdido, la marca (Hipnotizado) se activa más rápidamente.",
            tags: ["Pasiva Central", "Físico"]
        },
        {
            type: "Habilidad Adicional",
            name: "Habilidad Adicional: Sunna",
            description: "Cuando otro personaje en tu escuadrón es un Personaje de (Ataque) o (Anomalía): \nCuando un personaje dentro de (Velo Etereo: Ídolo) golpea a un enemigo con un ataque, el Multiplicador de Daño de Aturdimiento del objetivo aumenta en un 30% por 40s. \nCuando otro personaje en tu escuadrón es un Personaje de (Ataque), mientras (Velo Etereo: Ídolo) está activo, el Daño CRIT de todos los miembros del escuadrón aumenta en un 15%. \nCuando otro personaje en tu escuadrón es un Personaje de (Anomalía), mientras (Velo Etereo: Ídolo) está activo, la Maestría de Anomalía de todos los miembros del escuadrón aumenta en 30.",
            tags: ["Habilidad Adicional"]
        },
        {
            type: "Mindscape 1",
            name: "1. Síndrome de Corrupcion de Soledad",
            description: "(Hipnotizado) Cuando una explosión de marca golpea a un enemigo, reduce la DEF del objetivo en un 5% durante 15 segundos. Puede acumularse hasta 3 veces. La duración de cada acumulación se calcula por separado.",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 2",
            name: "2. Los Gatos se Dejan Llevar",
            description: "Mientras Sunna está dentro de cualquier (Velo Etereo), gana 1 (Punto de Ataque) cada 10s; cuando la marca (Hipnotizado) es activada, su DAÑO ignora el 15% de la RES de Atributo del objetivo.",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 3",
            name: "3. Transformación de Manzana",
            description: "Nivel de Ataque Básico, Evasión, Asistencia, Ataque Especial y Ataque en Cadena +2",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 4",
            name: "4. Escuadrón de Investigación de Delirios",
            description: "Cuando Sunna entra al campo de batalla, restaura 20 de Energía. Este efecto puede activarse una vez cada 180 segundos en Zona de Investigación; cuando activa (Ataque Especial EX: Ataque de Enlace de Cámara), restaura 2.5% de HP para todos los miembros del escuadrón.",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 5",
            name: "5. Expreso Galáctico",
            description: "Nivel de Ataque Básico, Evasión, Asistencia, Ataque Especial y Ataque en Cadena +2",
            tags: ["Mindscape"]
        },
        {
            type: "Mindscape 6",
            name: "6. Big Bang del Hueco",
            description: "Cuando Sunna activa su (Ataque Especial EX), entra en el estado (Big Bang) por 8 segundos; \nDurante el estado (Big Bang), los ataques de Sunna son CRÍTICOS garantizados, y su Daño CRIT aumenta en un 0.02% de su ATK inicial, hasta un aumento máximo del 60%; \nDurante el estado (Big Bang), Sunna puede activar marcas (Hipnotizado), infligiendo DAÑO igual al 210% de su ATK a enemigos en rango; si Sunna tiene (Puntos de Ataque) al activar marcas (Hipnotizado), inmediatamente consume los (Puntos de Ataque) y aplica marcas (Hipnotizado) a los enemigos de nuevo; \nDurante el estado (Big Bang), el DAÑO infligido por todo el escuadrón al activar marcas (Hipnotizado) aumenta en un 20%.",
            tags: ["Mindscape"]
        }
    ]
};
