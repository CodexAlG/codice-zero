import Image from 'next/image';
import Link from 'next/link';

export default function AscensionMaterials({ level, agentRole, themeColor }) {
    // 1. Definir la lógica de materiales acumulativos
    const getMaterials = (lvl) => {
        let denny = 0;
        let basic = 0;
        let advanced = 0;
        let expert = 0;

        if (lvl >= 10) {
            basic = 4;
            denny = 24000;
        }
        if (lvl >= 20) {
            advanced = 12;
            denny = 80000; // 24k + 56k
        }
        if (lvl >= 30) {
            advanced = 32; // 12 + 20
            denny = 200000; // 80k + 120k
        }
        if (lvl >= 40) {
            expert = 10;
            denny = 400000; // 200k + 200k
        }
        if (lvl >= 50) {
            expert = 30; // 10 + 20
            denny = 800000; // 400k + 400k
        }

        return { denny, basic, advanced, expert };
    };

    const materials = getMaterials(level);

    // Si no hay materiales que mostrar (nivel < 10), no renderizar nada
    if (materials.denny === 0) return null;

    // 2. Mapeo de Iconos por Rol
    // Estructura: [Basic, Advanced, Expert]
    const roleIcons = {
        "Ataque": [
            "Item_Basic_Attack_Certification_Seal.webp",
            "Item_Advanced_Attack_Certification_Seal.webp",
            "Item_Pioneer's_Certification_Seal.webp"
        ],
        "Defensa": [
            "Item_Basic_Defense_Certification_Seal.webp",
            "Item_Advanced_Defense_Certification_Seal.webp",
            "Item_Defender_Certification_Seal.webp"
        ],
        "Ruptura": [
            "Item_Basic_Rupture_Certification_Seal.webp",
            "Item_Advanced_Rupture_Certification_Seal.webp",
            "Item_Arbiter_Certification_Seal.webp"
        ],
        "Aturdidor": [
            "Item_Basic_Stun_Certification_Seal.webp",
            "Item_Advanced_Stun_Certification_Seal.webp",
            "Item_Buster_Certification_Seal.webp"
        ],
        "Anomalia": [
            "Item_Basic_Anomaly_Certification_Seal.webp",
            "Item_Advanced_Anomaly_Certification_Seal.webp",
            "Item_Controller_Certification_Seal.webp"
        ],
        "Soporte": [
            "Item_Basic_Support_Certification_Seal.webp",
            "Item_Advanced_Support_Certification_Seal.webp",
            "Item_Ruler_Certification_Seal.webp"
        ]
    };

    // Mapeo de carpetas por rol (algunos nombres de carpeta difieren del rol exacto en español a veces, pero aquí parecen coincidir o ser mapeables)
    // Basado en find_by_name:
    // Anomalia -> Anomalia
    // Ataque -> Atacantes
    // Aturdidor -> Aturdidor
    // Defensa -> Defensa
    // Ruptura -> Ruptura
    // Soporte -> Soporte
    const roleFolders = {
        "Ataque": "Atacantes",
        "Defensa": "Defensa",
        "Ruptura": "Ruptura",
        "Aturdidor": "Aturdidor",
        "Anomalia": "Anomalia",
        "Soporte": "Soporte"
    };

    const folder = roleFolders[agentRole];
    const icons = roleIcons[agentRole];

    if (!folder || !icons) return null;

    const basePath = `/CodiceZero/Materiales/Agentes/${folder}/`;
    const dennyPath = "/CodiceZero/Materiales/Varios/Item_Denny.webp";

    // Helper para renderizar un item
    const MaterialItem = ({ icon, value, label, color }) => {
        if (value <= 0) return null;

        // Codificar parámetros para la URL
        const encodedName = encodeURIComponent(label);
        const encodedIcon = encodeURIComponent(icon);
        const detailUrl = `/materiales/detail?name=${encodedName}&icon=${encodedIcon}`;

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
                <span className="text-sm font-bold font-mono bg-black/40 px-2 py-0.5 rounded text-white border border-white/5">
                    {value.toLocaleString()}
                </span>
            </Link>
        );
    };

    return (
        <div className="w-full mb-6 animate-fadeIn">
            <div className="flex flex-wrap items-end gap-4 p-4 bg-black/20 rounded-xl border border-white/5">
                {/* Denny siempre primero */}
                <MaterialItem icon={dennyPath} value={materials.denny} label="Denny" color="#00BFFF" /> {/* Azul cyan para Denny */}

                {/* Basic Seal */}
                <MaterialItem icon={`${basePath}${icons[0]}`} value={materials.basic} label="Basic Seal" color={themeColor} />

                {/* Advanced Seal */}
                <MaterialItem icon={`${basePath}${icons[1]}`} value={materials.advanced} label="Advanced Seal" color={themeColor} />

                {/* Expert Seal */}
                <MaterialItem icon={`${basePath}${icons[2]}`} value={materials.expert} label="Expert Seal" color={themeColor} />
            </div>
        </div>
    );
}
