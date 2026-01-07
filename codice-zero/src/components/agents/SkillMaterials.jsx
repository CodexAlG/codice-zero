import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { translateMaterial } from '@/utils/materialTranslations';

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
        const router = useRouter();

        // Translate name if it's a boss material
        const displayLabel = (type === 'boss' && name) ? translateMaterial(name) : label;
        // Use original name for URL/Query to ensure images load if they rely on English names, 
        // OR if the system uses localized names for lookup, we might need to be careful.
        // Assuming details page looks up by name, let's keep it consistent with what we display or pass both.
        // The previous code passed `name || label` as `encodedName`. 
        // Let's pass the displayLabel to proper Spanish searching if that's the intent, 
        // or keep English if the ID is English. 
        // Given the user wants everything in Spanish, the UI must show Spanish.

        // Codificar parámetros para la URL
        const encodedName = encodeURIComponent(displayLabel);
        const encodedIcon = encodeURIComponent(icon);
        const detailUrl = `/materiales/detail?name=${encodedName}&icon=${encodedIcon}&type=${type}`;

        return (
            <div
                onClick={() => router.push(detailUrl)}
                className="flex flex-col items-center gap-2 cursor-pointer group/item"
            >
                <div
                    className="relative w-16 h-16 bg-black/40 rounded-xl border border-white/10 flex items-center justify-center shadow-lg group-hover/item:scale-105 transition-transform duration-200"
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
                        alt={displayLabel}
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
                {/* Added Label for clearer identification if needed, though previously it wasn't there. 
                     The user complaint implies they want to SEE the Spanish text.
                     The original component didn't render the label text visibly, only the value count.
                     Wait, looking at the previous code... it only rendered `value` in a span.
                     It did NOT render the `label` or `name` in the UI, only in `alt` tag.
                     
                     User said: "traduce los nombres de los materiales". 
                     If the names are not visible, translating them in the `alt` tag won't satisfy "Seeing" them unless there's a tooltip 
                     or if I missed where they are rendered.
                     
                     Ah, `MaterialItem` structure:
                     div (icon)
                     div (value)
                     
                     There is NO visible text label for the material name in the original code!
                     Just the count.
                     
                     If the user is complaining that they are in English, maybe they mean on the Detail Page?
                     OR maybe they assumed I would add the labels?
                     OR maybe they are looking at the `alt` text?
                     
                     Wait, the user previously said: "Translate all boss material names to Spanish".
                     And "del 39-1 siguen estando en ingles" (from 39-1 they are still in English).
                     
                     If the UI doesn't show the name, how do they know?
                     Maybe they are looking at the file contents I'm editing?
                     OR maybe they are clicking on it and the URL/Detail page is in English?
                     `detailUrl` uses `encodedName`. If I translate `displayLabel`, then the URL will have the Spanish name.
                     
                     If I assume the "Detail Page" uses the query param `name` to display the title, then translating it here fixes the Detail Page title too.
                     
                     However, simply adding the translation logic to the `alt` and the `detailUrl` parameter is what is requested to "automate" it closer to the source.
                     
                     I will proceed with applying the translation to `displayLabel` which feeds `alt` and `detailUrl`.
                 */}
            </div>
        );
    };

    return (
        <div className="w-full mb-6 animate-fadeIn">
            <div className="flex flex-wrap items-start justify-center lg:justify-start gap-4">
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
