'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TriangleAlert } from 'lucide-react';
import { agents } from '@/data/agents';
import { getAgentDetails } from '@/data/agentDetails/';
import { calculateStatsWithCore } from '@/utils/statCalculator';
import SkillsModule from '@/components/agents/SkillsModule';
import StatsTable from '@/components/agents/StatsTable';
import AscensionMaterials from '@/components/agents/AscensionMaterials';
import SkillMaterials from '@/components/agents/SkillMaterials';
import EquipmentModule from '@/components/agents/EquipmentModule';
//coment
export default function AgentDetailPage() {
  // 1. PRIMERO: Definir params y encontrar el agente
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const agentId = parseInt(params.id);
  const agent = agents.find(a => a.id === agentId);

  // Función helper: Obtener imagen grande del agente (para página de detalles)
  const getAgentFullImage = (agent) => {
    const imageMap = {
      47: "/CodiceZero/Agentes/YeShunguang.webp",
      46: "/CodiceZero/Agentes/Zhao.webp",
      45: "/CodiceZero/Agentes/Banyue.webp",
      44: "/CodiceZero/Agentes/Dialyn.webp",
      43: "/CodiceZero/Agentes/Yidhari.png",
      42: "/CodiceZero/Agentes/Lucia.webp",
      41: "/CodiceZero/Agentes/Manato.png",
      40: "/CodiceZero/Agentes/Orphie.webp",
      39: "/CodiceZero/Agentes/Seed.webp",
      38: "/CodiceZero/Agentes/Alice.webp",
      37: "/CodiceZero/Agentes/Yuzuha.webp",
      36: "/CodiceZero/Agentes/Jufufu.webp",
      35: "/CodiceZero/Agentes/Yixuan.webp",
      34: "/CodiceZero/Agentes/Pan.webp",
      33: "/CodiceZero/Agentes/Hugo.webp",
      32: "/CodiceZero/Agentes/Vivian.webp",
      31: "/CodiceZero/Agentes/Trigger.webp",
      30: "/CodiceZero/Agentes/Sanby.webp",
      29: "/CodiceZero/Agentes/Pulchra.webp",
      27: "/CodiceZero/Agentes/Astra.webp",
      28: "/CodiceZero/Agentes/Evelyn.webp",
      26: "/CodiceZero/Agentes/Miyabi.webp",
      25: "/CodiceZero/Agentes/Harumasa.webp",
      23: "/CodiceZero/Agentes/Yanagi.webp",
      24: "/CodiceZero/Agentes/Lighter.webp",
      22: "/CodiceZero/Agentes/Burnice.webp",
      21: "/CodiceZero/Agentes/Caesar.webp",
      10: "/CodiceZero/Agentes/Jane.webp",
      9: "/CodiceZero/Agentes/Qingyi.webp",
      20: "/CodiceZero/Agentes/Seth.webp",
      2: "/CodiceZero/Agentes/ZhuYuan.webp",
      1: "/CodiceZero/Agentes/Ellen.webp",
      3: "/CodiceZero/Agentes/Lycaon.webp",
      5: "/CodiceZero/Agentes/S11.webp",
      4: "/CodiceZero/Agentes/Koleda.webp",
      6: "/CodiceZero/Agentes/Rina.webp",
      7: "/CodiceZero/Agentes/Grace.webp",
      8: "/CodiceZero/Agentes/Nekomiya.webp",
      18: "/CodiceZero/Agentes/Lucy.webp",
      19: "/CodiceZero/Agentes/Piper.webp",
      15: "/CodiceZero/Agentes/Soukaku.webp",
      12: "/CodiceZero/Agentes/Nicole.webp",
      11: "/CodiceZero/Agentes/Anby.webp",
      13: "/CodiceZero/Agentes/Billy.webp",
      14: "/CodiceZero/Agentes/Corin.webp",
      16: "/CodiceZero/Agentes/Ben.webp",
      17: "/CodiceZero/Agentes/Anton.webp"
    };
    return imageMap[agent.id] || agent.image; // Fallback to icon if not found
  };

  // Obtener la imagen grande para este agente
  const agentFullImage = getAgentFullImage(agent);

  // 2. SEGUNDO: Hooks de estado
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || "stats"); // Pestañas: 'stats', 'skills', 'equip'
  const [level, setLevel] = useState(60); // Nivel del personaje
  const [selectedSkill, setSelectedSkill] = useState(null); // Habilidad seleccionada
  const [selectedGroup, setSelectedGroup] = useState(null); // Grupo de habilidades seleccionado
  const [details, setDetails] = useState(null); // Agent details loaded dynamically
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Load agent details dynamically
  useEffect(() => {
    async function loadDetails() {
      setIsLoading(true);
      const data = await getAgentDetails(agentId);
      setDetails(data);
      setIsLoading(false);
    }
    loadDetails();
  }, [agentId]);

  // Grupos de Habilidades Maestros
  const skillGroups = [
    { id: "basic", label: "Ataque Básico", icon: "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Basic-Attack-White-Alt-01.webp", match: ["Ataque Básico", "Ataque Normal", "Básico"] },
    { id: "Dodge", label: "Evasión", icon: "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Dodge-02.webp", match: ["Evasión", "Dash", "Contraataque"] },
    { id: "assist", label: "Asistencia", icon: "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Assist-01-675x675.webp", match: ["Asistencia"] },
    { id: "special", label: "Especial", icon: "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-01-675x675.webp", match: ["Especial"] },
    { id: "ultimate", label: "Definitiva", icon: "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-QTE-Ultimate-Colored-Inverted-01-691x675.webp", match: ["Definitiva", "Cadena"] }
  ];

  // Mapa de Iconos Inline para Texto
  const inlineIcons = {
    "Ataque": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Basic-Attack-White-Alt-01.webp",
    "Dodges": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Dodge-02.webp",
    "Especial": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-02-691x675.webp", // Blanco y Negro (Normal)
    "Especial EX": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-01-675x675.webp", // Brilloso (EX)
    "Definitiva": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-QTE-Ultimate-Colored-Inverted-01-691x675.webp",
    "Assist": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Assist-01-675x675.webp"
  };

  // Función de Procesamiento de Texto Mejorada
  const processDescription = (text) => {
    if (!text) return "";

    let processed = text;

    // PASO 1: Iconos con Estilo Inline Forzado
    processed = processed.replace(/\[Icono (.*?)\]/g, (match, iconName) => {
      // Buscar directamente en el mapa de iconos inline
      // Esto arregla el problema de Especial vs Especial EX
      const src = inlineIcons[iconName.trim()];

      if (!src) return match; // Si no existe (ej. typo), no reemplaza

      // Ajuste de tamaño (igual para todos o específico si quieres)
      const heightStyle = "1.3em";
      const verticalAlign = "-0.3em";

      return `<img src="${src}" alt="${iconName}" style="display:inline-block; height:${heightStyle}; width:auto; vertical-align:${verticalAlign}; margin:0 2px;" />`;
    });

    // PASO 2: Resaltado EXPLICITO por Paréntesis (Prioridad Alta)
    // Busca \(.*?\) y reemplaza por span sin los paréntesis.
    processed = processed.replace(/\((.*?)\)/g, (match, content) =>
      `<span class="text-white font-bold border-b border-white/20">${content}</span>`
    );

    // PASO 3: Palabras Clave (Elementos y Estados)
    const rules = [
      // Fuego
      { pattern: /(Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+Fuego|Daño\s+Fuego|Quemadura|Quemados?|Anomal[ií]a\s+Fuego|Res\s+Fuego|Resistencia\s+Fuego)/gi, color: "text-[#ef4444] font-bold" },
      // Hielo
      { pattern: /(Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+Hielo|Daño\s+Hielo|Rompehielo|Romper\s+Hielo|Congelaci[oó]n\w*|Ruptura|Anomal[ií]a\s+Hielo|Res\s+Hielo|Resistencia\s+Hielo|Hielo)/gi, color: "text-[#22d3ee] font-bold" },
      // Eléctrico
      { pattern: /(Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+El[eé]ctrica|Daño\s+El[eé]ctrico|Shock|Electrocuci[oó]n|Anomal[ií]a\s+El[eé]ctrica|Res\s+El[eé]ctrica|Resistencia\s+El[eé]ctrica)/gi, color: "text-[#3b82f6] font-bold" },
      // Físico
      { pattern: /(Asalto\s+de\s+Polaridad|Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+F[ií]sica|Daño\s+F[ií]sico|Anomal[ií]a\s+F[ií]sica|Res\s+F[ií]sica|Resistencia\s+F[ií]sica|Asalto)/gi, color: "text-[#eab308] font-bold" },
      // Etéreo
      { pattern: /(Acumulaci[oó]n\s+de\s+Anomal[ií]a\s+Et[eé]rea|Daño\s+Et[eé]reo|Corrupci[oó]n|Anomal[ií]a\s+Et[eé]rea|Res\s+Et[eé]rea|Resistencia\s+Et[eé]rea)/gi, color: "text-[#d946ef] font-bold" },
    ];

    // Aplicar reglas en orden (habilidades primero, luego elementos)
    rules.forEach(({ pattern, color }) => {
      processed = processed.replace(pattern, (match) => {
        return `<span class="${color}">${match}</span>`;
      });
    });

    return processed;
  };

  // 3. TERCERO: Validar si existe (Return temprano)
  if (!agent) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p className="text-2xl">Agente no encontrado</p>
      </div>
    );
  }

  // 4. CUARTO: Lógica que depende de 'agent' (Colores, Iconos)
  // Note: details is now loaded dynamically via useEffect


  // Helper de normalización
  const normalize = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

  // Mapa de Colores
  const elementColors = {
    "fuego": "#ef4444",    // Rojo
    "hielo": "#22d3ee",    // Cian
    "electrico": "#3b82f6", // Azul Puro
    "fisico": "#eab308",   // Amarillo Dorado
    "etereo": "#d946ef",   // Rosa/Magenta
  };
  const themeColor = elementColors[normalize(agent.element).toLowerCase()] || elementColors;

  // Mapeo de Iconos de Facción
  const factionIcons = {
    "Victoria Housekeeping": "/CodiceZero/Agentes/Faction/Faction_Victoria_Housekeeping_Co._Icon.webp",
    "Belobog Heavy Industries": "/CodiceZero/Agentes/Faction/Faction_Belobog_Heavy_Industries_Icon.webp",
    "Cunning Hares": "/CodiceZero/Agentes/Faction/Faction_Gentle_House_Icon.webp",
    "N.E.P.S.": "/CodiceZero/Agentes/Faction/Faction_Criminal_Investigation_Special_Response_Team_Icon.webp",
    "Obol Squad": "/CodiceZero/Agentes/Faction/Faction_Obol_Squad_Icon.webp",
    "Section 6": "/CodiceZero/Agentes/Faction/Faction_Hollow_Special_Operations_Section_6_Icon.webp",
    "Sons of Calydon": "/CodiceZero/Agentes/Faction/Faction_Sons_of_Calydon_Icon.webp",
    "Spook Shack": "/CodiceZero/Agentes/Faction/Faction_Spook_Shack_Icon.webp",
    "Stars of Lyra": "/CodiceZero/Agentes/Faction/Faction_Stars_of_Lyra_Icon.webp",
    "Mookingbird": "/CodiceZero/Agentes/Faction/Faction_Mockingbird_Icon.webp",
    "Yunkui Summit": "/CodiceZero/Agentes/Faction/Faction_Yunkui_Summit_Icon.webp",
    "Defense Force - Silver Squad": "/CodiceZero/Agentes/Faction/Faction_Defense_Force_-_Silver_Squad_Icon.webp",
    "Krampus Compliance Authority": "/CodiceZero/Agentes/Faction/Faction_Krampus_Compliance_Authority_Icon.png"
  };
  const factionIconPath = factionIcons[agent.faction] || ""; // Fallback vacío si no encuentra

  // Lógica de Icono Especial (Miyabi/Yixuan/Etéreo)
  let elementIconPath = "";
  if (agent.name.includes("Ye Shunguang")) {
    elementIconPath = "/CodiceZero/Agentes/Elemento/IconHonedEdge.webp";
  } else if (agent.name.includes("Miyabi")) {
    elementIconPath = "/CodiceZero/Agentes/Elemento/Icon_Frost.png";
  } else if (agent.name.includes("Yixuan")) {
    elementIconPath = "/CodiceZero/Agentes/Elemento/Icon_Auric_Ink.webp";
  } else {
    const iconMap = {
      "fuego": "Fuego.webp",
      "hielo": "Hielo.webp",
      "electrico": "Electrico.webp",
      "fisico": "Fisico.webp",
      "etereo": "Etéreo.webp"
    };
    const normalizedElement = normalize(agent.element).toLowerCase();
    elementIconPath = `/CodiceZero/Agentes/Elemento/${iconMap[normalizedElement] || "Fisico.webp"}`;
  }

  // Lógica de Cálculo usando statCalculator
  const calculateCurrentStats = () => {
    if (!details?.baseStats) return {};

    // Preparar baseStats para el calculador - CORREGIDO para pasar objetos completos
    const baseStatsForCalc = {
      hp: details.baseStats.hp, // Pasar el objeto completo {min, max}
      atk: details.baseStats.atk, // Pasar el objeto completo {min, max}
      def: details.baseStats.def, // Pasar el objeto completo {min, max}
      impact: details.baseStats.impact,
      sheerForce: details.baseStats.sheerForce || null, // Pasar el objeto completo o null
      crit: details.baseStats.crit,
      critDmg: details.baseStats.critDmg,
      anomalyRate: details.baseStats.anomalyRate,
      anomalyMastery: details.baseStats.anomalyMastery,
      penRatio: details.baseStats.penRatio,
      energyRegen: details.baseStats.energyRegen,
    };

    // Usar el calculador
    return calculateStatsWithCore(baseStatsForCalc, level, details.coreStats);
  };

  // Función de Selección Inteligente (Toggle) - Actualizada para Grupos
  const handleSelect = (item) => {
    if (selectedSkill?.name === item.name) {
      setSelectedSkill(null); // Toggle Off
    } else {
      setSelectedSkill(item); // Toggle On
    }
  };

  // Función para seleccionar grupo
  const handleSelectGroup = (group) => {
    if (selectedGroup?.id === group.id) {
      setSelectedGroup(null); // Toggle off if same group
    } else {
      setSelectedGroup(group); // Select new group
    }
  };

  // Filtrar habilidades del grupo seleccionado
  const getGroupSkills = () => {
    if (!selectedGroup || !details?.skills) return [];
    return details.skills.filter(skill =>
      selectedGroup.types.some(type => skill.type.includes(type))
    );
  };

  // Función para seleccionar nivel del core
  const handleSelectCore = (level) => {
    if (!details?.skills) return;

    // Buscar la habilidad "Pasiva Central"
    const coreSkill = details.skills.find(skill => skill.type === "Pasiva Central");
    if (!coreSkill) return;

    // Calcular el valor escalado basado en el nivel
    const baseValue = 50; // Valor base
    const increment = 8; // Incremento por nivel
    const scaledValue = baseValue + (level * increment);

    // Reemplazar {VALOR} en la descripción
    const scaledDescription = coreSkill.description.replace('{VALOR}', scaledValue);

    const coreSkillInfo = {
      type: "Pasiva Central",
      name: `Core Skill - Nivel ${level}/6`,
      description: scaledDescription
    };

    handleSelect(coreSkillInfo);
  };

  const currentStats = calculateCurrentStats();

  // Mapa de Iconos de Habilidad - Actualizado con ZZZ Icons
  const skillTypeIcons = {
    // --- ATAQUES (Usando el nuevo icono blanco/alt) ---
    "Ataque Normal": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Basic-Attack-White-Alt-01.webp",
    "Ataque Básico": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Basic-Attack-White-Alt-01.webp",
    "Ataque Normal (Carga)": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Basic-Attack-White-Alt-01.webp",

    // --- EVASIÓN (Dodge-02) ---
    "Evasión": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Dodge-02.webp",
    "Evasión / Dash": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Dodge-02.webp",
    "Ataque de Dash": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Dodge-02.webp",
    "Contraataque de Evasión": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Dodge-02.webp",
    "Evasión / Contraataque": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Dodge-02.webp",

    // --- ESPECIALES (Special-01 y 02) ---
    "Especial": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-01-675x675.webp",
    "Habilidad Especial": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-02-691x675.webp",
    "Técnica Especial": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-02-691x675.webp",
    "Habilidad Especial EX": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-01-675x675.webp",
    "Técnica Especial EX": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Special-01-675x675.webp",

    // --- ULTIMATE (QTE-Ultimate) ---
    "Definitiva": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-QTE-Ultimate-Colored-Inverted-01-691x675.webp",
    "Técnica Definitiva": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-QTE-Ultimate-Colored-Inverted-01-691x675.webp",
    "Movimiento Final": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-QTE-Ultimate-Colored-Inverted-01-691x675.webp",
    "Técnica en Cadena": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-QTE-Ultimate-Colored-Inverted-01-691x675.webp",
    "Ataque en Cadena": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-QTE-Ultimate-Colored-Inverted-01-691x675.webp",

    // --- PASIVAS (Core) ---
    "Pasiva Central": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    "Pasiva Adicional": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    "Habilidad Adicional": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    "Core": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",
    "Mejora de Core": "/CodiceZero/Habilidades/Icon_Core_Skill.webp",

    // --- ASISTENCIAS (Assist-01) ---
    "Asistencia": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Assist-01-675x675.webp",
    "Asistencia Rápida": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Assist-01-675x675.webp",
    "Asistencia Defensiva": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Assist-01-675x675.webp",
    "Seguimiento de Asistencia": "/CodiceZero/Habilidades/ZZZ-Icon-System-Skill-Assist-01-675x675.webp"
  };

  // Mapeo de iconos de habilidades (mantener para compatibilidad)
  const skillIcons = {
    "Basic": "/CodiceZero/Habilidades/Icon_Basic_Attack.webp",
    "Skill": "/CodiceZero/Habilidades/Icon_Special_Attack.webp",
    "Ultimate": "/CodiceZero/Habilidades/Icon_Ultimate_Colored.webp",
    "Assist": "/CodiceZero/Habilidades/Icon_Assist_Attack.png",
    "Chain": "/CodiceZero/Habilidades/Icon_Chain_Attack.webp",
    "Dodge": "/CodiceZero/Habilidades/Icon_Dodge.webp"
  };

  // Componente de Fila de Atributo
  const AttributeRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
      <span className="text-gray-400 text-sm font-medium">{label}</span>
      <span className="text-white text-sm font-bold font-mono">{value}</span>
    </div>
  );

  if (!details) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-orbitron mb-4">{agent.name}</h1>
          <p className="text-xl text-yellow-400">Próximamente</p>
        </div>
      </div>
    );
  }

  // Función para cambiar pestaña y actualizar URL
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams);
    params.set('tab', tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // 5. QUINTO: Return del JSX
  return (
    <div className="min-h-screen text-white flex flex-col lg:flex-row overflow-y-auto">

      {/* BOTÓN VOLVER - POSICION ABSOLUTA */}
      <Link
        href="/personajes"
        className="absolute top-4 left-4 lg:left-20 z-50 inline-flex items-center text-gray-400 hover:text-white transition-colors bg-black/40 px-4 py-2 rounded-lg border border-white/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver
      </Link>

      {/* 1. ZONA IZQUIERDA (Arte/Imagen) */}
      <div
        // Ocupa el 100% del ancho en móvil. El alto es fijo para que la imagen se vea bien.
        className="relative w-full lg:w-[45%] flex-shrink-0 h-[50vh] lg:h-screen border-b lg:border-r border-white/10 bg-transparent"
      >
        {/* Imagen de Fondo Limpia */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-gray-950 z-10"></div>
          <Image
            src={agentFullImage}
            alt={agent.name}
            fill
            className="object-contain object-top opacity-100 brightness-110"
            sizes="(max-width: 768px) 50vw, 450px"
            priority
            unoptimized
          />
        </div>

        {activeTab === 'skills' && (selectedSkill || selectedGroup) && (
          <>
            {/* Backdrop for mobile */}
            <div
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => { setSelectedSkill(null); setSelectedGroup(null); }}
            />

            <div className="fixed lg:absolute bottom-4 left-4 right-4 lg:right-auto w-auto lg:w-[95%] lg:left-4 p-6 z-50 overflow-y-auto animate-slideUp bg-gray-900 border border-white/20 lg:border-2 lg:border-white/10 rounded-3xl lg:rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] lg:shadow-2xl max-h-[60vh] lg:max-h-[60%] backdrop-blur-md">

              {/* Mobile Handle Indicator */}
              <div className="lg:hidden w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6"></div>

              {/* Si hay un grupo seleccionado, mostrar habilidades del grupo */}
              {selectedGroup ? (
                <>
                  {/* Header del Grupo */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black/50 rounded flex items-center justify-center border border-white/10">
                      <Image
                        src={selectedGroup.icon}
                        alt={selectedGroup.label}
                        width={24} height={24}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div>
                      <span className="text-xs text-yellow-400 font-mono uppercase tracking-widest">Categoría</span>
                      <h3 className="text-xl font-display text-white leading-none">{selectedGroup.label}</h3>
                    </div>
                  </div>

                  {/* Lista de habilidades del grupo */}
                  <div className="space-y-4">
                    {getGroupSkills().length > 0 ? (
                      getGroupSkills().map((skill, index) => (
                        <div key={index} className="border-b border-white/10 pb-3 last:border-b-0">
                          <h4 className="text-base font-display text-white mb-1">{skill.name}</h4>
                          <span className="text-base text-yellow-400 font-mono uppercase tracking-widest">{skill.type}</span>
                          <p className="text-base text-gray-300 leading-relaxed font-sans mt-2" dangerouslySetInnerHTML={{ __html: processDescription(skill.description) }}></p>
                        </div>
                      ))
                    ) : (
                      <p className="text-base text-gray-500">No hay habilidades de esta categoría para este personaje.</p>
                    )}
                  </div>
                </>
              ) : selectedSkill ? (
                /* Modal para habilidades (agrupadas o individuales) */
                <>
                  {/* Header del Modal */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black/50 rounded flex items-center justify-center border border-white/10">
                      {/* Icono Pequeño */}
                      <Image
                        src={skillTypeIcons[selectedSkill.type] || skillTypeIcons["Core"]}
                        alt="Icon" width={30} height={30} className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div>
                      <span className="text-xs text-yellow-400 font-mono uppercase tracking-widest">{selectedSkill.type}</span>
                      <h3 className="text-xl font-display text-white leading-none">{selectedSkill.name}</h3>
                    </div>
                  </div>

                  {/* Contenido del Modal */}
                  <div className="text-base text-white leading-relaxed font-sans">

                    {/* CASO A: Habilidad Agrupada (Array de Sub-Skills) - Ahora incluye Mindscape */}
                    {selectedSkill.subSkills ? (
                      <div className="flex flex-col gap-4">
                        {selectedSkill.subSkills.map((sub, idx) => (
                          <div key={idx} className="flex flex-col gap-1">

                            {/* Título de la variante (Condicional: Mindscape vs Otras Habilidades) */}
                            <div className="flex items-baseline justify-between">
                              <span className="text-base font-bold uppercase tracking-wider text-white">
                                {sub.name}
                              </span>
                              {/* Solo mostrar "M {idx + 1}" para Mindscape */}
                              {selectedSkill.type === "Mindscape" && (
                                <span className="text-[10px] text-white-400 font-mono uppercase bg-white/5 px-1.5 py-0.5 rounded">
                                  M {idx + 1}
                                </span>
                              )}
                            </div>

                            {/* Descripción con Resaltado (Asegura que 'Daño Glacial' se vea azul) */}
                            <p
                              className="text-gray-300 text-base leading-snug opacity-90"
                              dangerouslySetInnerHTML={{ __html: processDescription(sub.description) }}
                            />

                            {/* Línea separadora (excepto último) */}
                            {idx < selectedSkill.subSkills.length - 1 && (
                              <div className="w-full h-[1px] bg-white/5 mt-3"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* CASO B: Habilidad Simple (Core) - Texto con Procesamiento */
                      <>
                        <div dangerouslySetInnerHTML={{ __html: processDescription(selectedSkill.description) }} />

                        {/* Habilidad Adicional (si existe) */}
                        {selectedSkill.additionalSkill && (
                          <div className="mt-6 pt-4 border-t border-white/10">
                            <h4 className="text-base font-bold uppercase tracking-wider text-yellow-400 mb-2">
                              HABILIDAD ADICIONAL
                            </h4>
                            <div className="flex flex-col gap-1">
                              <span className="text-base font-semibold text-white">
                                {selectedSkill.additionalSkill.name}
                              </span>
                              <p className="text-base text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: processDescription(selectedSkill.additionalSkill.description) }} />
                            </div>
                          </div>
                        )}
                      </>
                    )}

                  </div>
                </>
              ) : null}

              {/* Botón Cerrar */}
              <button
                onClick={() => {
                  setSelectedSkill(null);
                  setSelectedGroup(null);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                ✕
              </button>
            </div>
          </>
        )}
      </div>

      {/* ZONA DERECHA (Panel HUD) */}
      <div className="flex-1 flex flex-col h-full pt-12 px-4 lg:pr-12 lg:pl-0 pb-8 relative z-20">

        {/* --- NUEVO HEADER INFO (Reubicado y Centrado) --- */}
        <div className="mb-8 w-full flex flex-col items-center text-center">
          {/* Facción */}
          <div className="flex items-center gap-2 mb-2 opacity-70">
            {factionIconPath && (
              <div className="relative w-6 h-6">
                <Image src={factionIconPath} alt={agent.faction} fill className="object-contain" />
              </div>
            )}
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-500">{agent.faction}</span>
            <div className="h-[1px] w-12 bg-yellow-500"></div>
          </div>

          {/* Nombre */}
          <h1 className="text-5xl md:text-7xl font-display font-black italic text-white drop-shadow-2xl mb-4 leading-none transform -skew-x-6">
            {agent.name}
          </h1>

          {/* Iconos (Chips) */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {/* Chip Rango */}
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded border border-white/10 backdrop-blur-sm">
              <Image src={`/CodiceZero/Rango/Icon_Item_Rank_${agent.rank}.webp`} width={20} height={20} alt="Rank" />
              <span className={`font-bold text-sm ${agent.rank === 'S' ? 'text-yellow-500' : 'text-purple-500'}`}> RANK</span>
            </div>
            {/* Chip Elemento */}
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded border border-white/10 backdrop-blur-sm">
              <Image src={elementIconPath} alt={agent.element} width={18} height={18} />
              <span className="font-bold uppercase text-sm" style={{ color: themeColor }}>{agent.element}</span>
            </div>
            {/* Chip Rol */}
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded border border-white/10 backdrop-blur-sm">
              <Image src={`/CodiceZero/Agentes/Rol/${normalize(agent.rol)}.webp`} alt={agent.rol} width={16} height={16} className="invert" />
              <span className="font-bold text-gray-300 uppercase text-sm">{agent.rol}</span>
            </div>
            {/* Chip Advertencia Beta */}
            {agent.leak && agent.leak.includes("Beta") && (
              <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded border border-red-500/50 backdrop-blur-sm">
                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-red-400 uppercase text-xs">BETA</span>
              </div>
            )}
          </div>

          {/* Advertencia de Beta Texto Completo */}
          {agent.leak && agent.leak.includes("Beta") && (
            <div className="mt-6 w-full p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3 text-yellow-500">
              <TriangleAlert className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium leading-relaxed text-left">
                Este personaje se encuentra en fase Beta. Sus estadísticas y habilidades están sujetas a cambios antes del lanzamiento oficial.
              </p>
            </div>
          )}
        </div>

        {/* PANEL GRANDE CON ESPACIO */}

        <div className="flex-1 flex flex-col justify-center px-0 lg:px-4 z-20 h-full">

          {/* Contenedor Principal - Tech HUD Style */}
          <div className="relative w-full bg-gray-950/80 border border-white/10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl group hover:border-yellow-500/50 transition-all duration-300 p-3 lg:p-4 flex flex-col gap-2 h-auto">

            {/* Header + Slider - SOLO en Stats */}
            {activeTab === 'stats' && (
              <>
                <AscensionMaterials
                  level={level}
                  agentRole={agent.rol}
                  themeColor={themeColor}
                />
                <div className="flex flex-col sm:flex-row justify-between items-center border-b border-white/10 pb-2 gap-4">
                  <h2 className="text-2xl font-display text-white-400 uppercase italic font-bold text-center sm:text-left">Atributos Base</h2>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                    <span className="text-sm font-mono text-gray-400 whitespace-nowrap">Nv.{level}/60</span>
                    <input
                      type="range"
                      min="1"
                      max="60"
                      value={level}
                      onChange={(e) => setLevel(Number(e.target.value))}
                      className="w-full sm:w-48 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Contenido Condicional - Stats o Skills */}
            {activeTab === 'stats' ? (
              /* Stats Table usando el componente StatsTable mejorado */
              <div className="text-base overflow-y-auto pr-2 scrollbar-hide">
                <StatsTable
                  currentStats={currentStats}
                  themeColor={themeColor}
                  agentRole={agent.rol}
                />
              </div>
            ) : activeTab === 'skills' ? (
              <div className="animate-fadeIn h-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 px-2 lg:px-4 py-4 lg:py-8 overflow-y-auto lg:overflow-visible">

                {/* --- MATERIALES DE HABILIDAD --- */}
                <div className="w-full lg:hidden">
                  <SkillMaterials agentElement={agent.element} themeColor={themeColor} materials={details?.materials} />
                </div>

                {/* --- COLUMNA IZQUIERDA (Contenido / Flexible) --- */}
                {/* Esta columna contiene Títulos y Botones de Habilidad, ocupando la mayor parte del espacio */}
                <div className="flex-1 flex flex-col gap-6 w-full">

                  {/* --- MATERIALES DE HABILIDAD (Desktop) --- */}
                  <div className="hidden lg:block w-full">
                    <SkillMaterials agentElement={agent.element} themeColor={themeColor} materials={details?.materials} />
                  </div>

                  {/* BLOQUE CORE (A-F) */}
                  <div className="w-full">
                    <h4 className="text-xs font-mono text-white uppercase mb-4 tracking-widest ml-1 border-l-2 border-yellow-500 pl-2">
                      Mejora de Habilidad Core
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {/* Botón Base (Icono Core) */}
                      <button
                        onClick={() => {
                          // Buscamos las pasivas
                          const passive = details?.skills?.find(s => s.type === "Pasiva Central");
                          const additional = details?.skills?.find(s => s.type.includes("Adicional"));

                          // VALOR BASE (Índice 0)
                          const val = details?.coreSkillScaling ? details.coreSkillScaling[0] : "??%";

                          // Helper para inyectar valores
                          const injectValues = (text, values) => {
                            let res = text || "";
                            if (Array.isArray(values)) {
                              values.forEach((v, i) => {
                                res = res.replace(`{VALOR_${i + 1}}`, `<span class='text-green-400 font-bold'>${v}</span>`);
                              });
                            } else {
                              res = res.replace("{VALOR}", `<span class='text-green-400 font-bold'>${values}</span>`);
                            }
                            return res;
                          };

                          handleSelect({
                            ...passive,
                            name: `${passive.name} (Nivel Base)`,
                            type: "Core",
                            description: injectValues(passive?.description, val),
                            additionalSkill: additional ? {
                              name: additional.name,
                              description: injectValues(additional.description, val)
                            } : null
                          });
                        }}
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all active:scale-95
                          ${selectedSkill?.name.includes("(Base)")
                            ? `border-[${themeColor}] bg-[${themeColor}]/20 shadow-[0_0_15px_${themeColor}40] scale-110`
                            : "border-gray-700 bg-gray-900 hover:border-gray-500"}
                        `}
                      >
                        <Image
                          src="/CodiceZero/Habilidades/Icon_Core_Skill.webp"
                          alt="Core Base" width={28} height={28} className="object-contain"
                        />
                      </button>

                      {/* Letras A-F */}
                      {/* Letras A-F */}
                      {['A', 'B', 'C', 'D', 'E', 'F'].map((letter, idx) => {
                        const reqLevel = idx === 5 ? 60 : 15 + (idx * 10);
                        const isActive = level >= reqLevel;
                        const isSelected = selectedSkill?.name?.includes(`Nodo ${letter}`);

                        return (
                          <button
                            key={letter}
                            onClick={() => {
                              const passive = details?.skills?.find(s => s.type === "Pasiva Central");
                              const additional = details?.skills?.find(s => s.type.includes("Adicional"));

                              // VALOR ESCALADO (Índice idx + 1)
                              const val = details?.coreSkillScaling ? details.coreSkillScaling[idx + 1] : "??%";

                              // Helper para inyectar valores
                              const injectValues = (text, values) => {
                                let res = text || "";
                                if (Array.isArray(values)) {
                                  values.forEach((v, i) => {
                                    res = res.replace(`{VALOR_${i + 1}}`, `<span class='text-green-400 font-bold'>${v}</span>`);
                                  });
                                } else {
                                  res = res.replace("{VALOR}", `<span class='text-green-400 font-bold'>${values}</span>`);
                                }
                                return res;
                              };

                              handleSelect({
                                ...passive,
                                name: `${passive.name} (Nodo ${letter})`,
                                type: "Core",
                                description: injectValues(passive?.description, val),
                                additionalSkill: additional ? {
                                  name: additional.name,
                                  description: injectValues(additional.description, val)
                                } : null
                              });
                            }}
                            className={`
                              w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 border-2
                              ${isSelected ? "scale-110" : "hover:scale-105"}
                            `}
                            style={{
                              borderColor: isSelected ? themeColor : (isActive ? `${themeColor}60` : '#374151'),
                              backgroundColor: isSelected ? `${themeColor}20` : 'transparent',
                              boxShadow: isSelected ? `0 0 15px ${themeColor}` : 'none'
                            }}
                          >
                            {/* Usar Imagen de Letra si existe, o Texto si no */}
                            <Image
                              src={`/CodiceZero/Habilidades/Icon_Core_Skill_${letter}.webp`}
                              alt={letter} width={48} height={48}
                              className={`object-contain ${isActive ? "opacity-100" : "opacity-30 grayscale"}`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* BLOQUE HABILIDADES DE COMBATE + MINDSCAPE */}
                  <div className="w-full">
                    <h4 className="text-xs font-mono text-white uppercase mb-4 tracking-widest ml-1 border-l-2 border-white/20 pl-2">
                      Habilidades de Combate
                    </h4>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      {/* Lista de Habilidades */}
                      <div className="flex flex-wrap gap-6 justify-start flex-1">
                        {skillGroups.map((group) => {
                          // Verificar si está seleccionado
                          const isSelected = selectedSkill?.type === group.label;

                          return (
                            <button
                              key={group.id}
                              onClick={() => {
                                // 1. Filtrar habilidades del grupo
                                const skillsInGroup = details?.skills?.filter(s =>
                                  group.match.some(m => s.type.includes(m))
                                ) || [];

                                if (skillsInGroup.length === 0) return;

                                // 2. Activar Modal con DATOS (No HTML)
                                handleSelect({
                                  type: group.label,
                                  name: group.label,
                                  // Pasamos el array de sub-habilidades en una propiedad especial
                                  subSkills: skillsInGroup,
                                  // Description se usa solo para habilidades simples (Core), aquí la dejamos vacía o nula
                                  description: null
                                });
                              }}
                              className={`
                                w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 group relative active:scale-95
                                ${isSelected
                                  ? `border-[${themeColor}] bg-[${themeColor}]/20 shadow-[0_0_20px_${themeColor}40] scale-110`
                                  : "border-gray-700 bg-gray-900 hover:border-white hover:bg-white/10"}
                              `}
                            >
                              <Image
                                src={group.icon}
                                alt={group.label}
                                width={40} height={40}
                                className={`object-contain transition-transform ${isSelected ? "scale-110" : "group-hover:scale-110"}`}
                              />
                            </button>
                          );
                        })}
                      </div>

                      {/* --- TRACKER MINDSCAPE (Diseño Neon Ring) --- */}
                      <div className="flex-none pt-2 md:pt-0">
                        <button
                          onClick={() => {
                            // Filtrar habilidades que contengan "Mindscape" en el tipo
                            const mindscapeSkills = details?.skills?.filter(skill =>
                              skill.type && skill.type.includes("Mindscape")
                            ) || [];

                            // Al hacer click, muestra los niveles de dupe/Mindscape
                            handleSelect({
                              type: "Mindscape",
                              name: "Mindscape (Cinema) Niveles de Dupe",
                              description: "Aquí va el detalle de los 6 niveles del Mindscape y sus efectos. Nivel actual: 6/6",
                              subSkills: mindscapeSkills,
                              tags: ["Dupe", "Niveles"]
                            });
                          }}
                          // Clases para el efecto de borde y fondo
                          className="w-20 h-20 relative rounded-full border-2 border-gray-700 bg-gray-900/50 flex items-center justify-center shadow-2xl hover:border-white/50 group transition-transform hover:scale-105"
                          title="Mindscape Levels"
                        >
                          {/* Anillo de Glow Dinámico */}
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{ boxShadow: `0 0 15px 5px ${themeColor}40`, borderColor: themeColor }}
                          />

                          {/* Texto "M" (Color del Elemento) */}
                          <span
                            className="text-3xl font-black font-display leading-none z-10"
                            style={{ color: themeColor }}
                          >
                            M
                          </span>

                          {/* Badge Nivel */}
                          <div className="absolute -bottom-2 bg-black/80 border border-white/20 text-[10px] px-1.5 rounded text-white font-mono z-20">
                            6/6
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ) : (
              /* Equip Content - Ahora usa EquipmentModule */
              <EquipmentModule
                equipment={details?.equipment}
                themeColor={themeColor}
              />
            )}

          </div>

          {/* Navegación Centrada */}
          <div className="mt-4 flex justify-center gap-6">
            {['stats', 'skills', 'equip'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  handleTabChange(tab);
                  if (tab !== 'skills') {
                    setSelectedSkill(null);
                    setSelectedGroup(null);
                  }
                }}
                className={`px-6 py-2 uppercase font-display tracking-widest border-b-2 transition-all ${activeTab === tab
                  ? "border-yellow-400 text-yellow-400"
                  : "border-transparent text-gray-500 hover:border-yellow-400 hover:text-yellow-400"
                  }`}
              >
                {tab === 'stats' ? "Atributos" : tab === 'skills' ? "Habilidades" : "Equipo"}
              </button>
            ))}
          </div>
        </div >

      </div >
    </div >
  );
}

