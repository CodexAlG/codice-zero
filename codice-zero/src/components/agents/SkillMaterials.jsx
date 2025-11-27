import Image from 'next/image';
import Link from 'next/link';

export default function SkillMaterials({ agentElement, themeColor, materials: bossMaterials }) {
    // 1. Cantidades Fijas
    const materials = {
        denny: 2905000,
        basic: 25,
        advanced: 75,
        specialized: 250,
        hamster: 5,
        weekly: 9,
        elite: 60
    };

    // 2. Mapeo de Iconos por Elemento
    // Estructura: [Basic, Advanced, Specialized]
    // Nombres de archivo basados en la exploración:
    // Fuego: Burn
    // Electrico: Shock
    // Hielo: Freeze (Asumido, verificaré si falla, pero es el estándar ZZZ)
    // Fisico: Physical (Asumido)
    // Etereo: Ether (Asumido)

    // Normalización del elemento para mapear a nombres de archivo
    const normalizeElement = (el) => {
        const map = {
            "Fuego": "Burn",
            "Electrico": "Shock",
            "Hielo": "Freeze",
            "Fisico": "Physical",
            "Etereo": "Ether"
        };
        return map[el] || el;
    };

    const type = normalizeElement(agentElement);

    // Carpetas coinciden con el nombre del elemento en español (Capitalizado)
    // Fuego, Electrico, Hielo, Fisico, Etereo
    const folder = agentElement;

    const basePath = `/CodiceZero/Materiales/Chips/${folder}/`;
    const dennyPath = "/CodiceZero/Materiales/Varios/Item_Denny.webp";
    const hamsterPath = "/CodiceZero/Materiales/Varios/Item_Hamster_Cage_Pass.webp";

    const chipIcons = [
        `Item_Basic_${type}_Chip.webp`,
        `Item_Advanced_${type}_Chip.webp`,
        `Item_Specialized_${type}_Chip.webp`
    ];

    // Helper para renderizar un item
    const MaterialItem = ({ icon, value, label, color, isHamster, name, type }) => {
        // Codificar parámetros para la URL
        const encodedName = encodeURIComponent(name || label);
        const encodedIcon = encodeURIComponent(icon);
        const detailUrl = `/materiales/detail?name=${encodedName}&icon=${encodedIcon}&type=${type}`;

        return (
            <Link href={detailUrl} className="flex flex-col items-center gap-2 cursor-pointer group/item">
                <div
                    className="relative w-16 h-16 bg-black/60 rounded-xl border border-white/10 flex items-center justify-center shadow-lg group-hover/item:scale-105 transition-transform duration-200"
                    style={{ borderColor: color ? `${color}60` : 'rgba(255,255,255,0.1)' }}
                >
                    {/* Glow effect */}
                    {color && (
                        <div
                            className="absolute inset-0 rounded-xl opacity-20"
                            style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}` }}
                        />
                    )}
                    <Image
                        src={icon}
                        alt={label}
                        width={48}
                        height={48}
                        className="object-contain z-10"
                    />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className={`text-sm font-bold font-mono bg-black/40 px-2 py-0.5 rounded text-white border border-white/5 ${isHamster ? 'text-yellow-400' : ''}`}>
                        {value.toLocaleString()}
                    </span>
                </div>
            </Link>
        );
    };

    return (
        <div className="w-full mb-6 animate-fadeIn">
            <div className="flex flex-wrap items-start gap-4 p-4 bg-black/20 rounded-xl border border-white/5">
                {/* Denny */}
                <MaterialItem icon={dennyPath} value={materials.denny} label="Denny" color="#00BFFF" type="currency" />

                {/* Basic Chip */}
                <MaterialItem icon={`${basePath}${chipIcons[0]}`} value={materials.basic} label="Chip Básico" color={themeColor} type="skill" />

                {/* Advanced Chip */}
                <MaterialItem icon={`${basePath}${chipIcons[1]}`} value={materials.advanced} label="Chip Avanzado" color={themeColor} type="skill" />

                {/* Specialized Chip */}
                <MaterialItem icon={`${basePath}${chipIcons[2]}`} value={materials.specialized} label="Chip Especializado" color={themeColor} type="skill" />

                {/* Hamster Cage Pass */}
                <MaterialItem icon={hamsterPath} value={materials.hamster} label="Pase de Jaula de Hámster" color="#FFD700" isHamster={true} type="hamster" />

                {/* Boss Materials (Si existen y tienen icono definido) */}
                {bossMaterials && (
                    <>
                        {/* Weekly Boss */}
                        {bossMaterials.weeklyBoss && bossMaterials.weeklyBoss.icon && (
                            <MaterialItem
                                icon={`/CodiceZero/Materiales/Enemigos/Semanales/${bossMaterials.weeklyBoss.icon}`}
                                value={materials.weekly}
                                label={bossMaterials.weeklyBoss.name}
                                name={bossMaterials.weeklyBoss.name}
                                color="#FF4500" // Orange-ish for boss
                                type="boss"
                            />
                        )}
                        {/* Elite Boss */}
                        {bossMaterials.eliteBoss && bossMaterials.eliteBoss.icon && (
                            <MaterialItem
                                icon={`/CodiceZero/Materiales/Enemigos/Elite/${bossMaterials.eliteBoss.icon}`}
                                value={materials.elite}
                                label={bossMaterials.eliteBoss.name}
                                name={bossMaterials.eliteBoss.name}
                                color="#9370DB" // Purple-ish for elite
                                type="boss"
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
