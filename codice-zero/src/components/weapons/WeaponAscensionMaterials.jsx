"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WeaponAscensionMaterials({ level, weaponRole, themeColor = "#fbbf24" }) {
    // 1. Definir la lógica de materiales acumulativos (Igual que Agentes)
    const getMaterials = (lvl) => {
        let denny = 0;
        let basic = 0;
        let advanced = 0;
        let expert = 0;

        if (lvl >= 10) {
            basic = 4;
            denny = 12000;
        }
        if (lvl >= 20) {
            advanced = 12;
            denny = 28000; // 24k + 56k
        }
        if (lvl >= 30) {
            advanced = 32; // 12 + 20
            denny = 60000; // 80k + 120k
        }
        if (lvl >= 40) {
            expert = 10;
            denny = 100000; // 200k + 200k
        }
        if (lvl >= 50) {
            expert = 30; // 10 + 20
            denny = 200000; // 400k + 400k
        }

        return { denny, basic, advanced, expert };
    };

    const materials = getMaterials(level);

    // Si no hay materiales que mostrar (nivel < 10), no renderizar nada
    if (materials.denny === 0) return null;

    // 2. Mapeo de Roles (Español Folder -> Inglés Suffix)
    // Carpetas en /CodiceZero/Materiales/Armas/:
    // Anomalia, Atacante, Aturdidor, Defensivo, Ruptura, Soporte
    const roleMap = {
        "Atacante": { folder: "Atacante", suffix: "Attack" },
        "Defensivo": { folder: "Defensivo", suffix: "Defense" }, // Verify "Defense" vs "Defensive" if needed, usually Defense
        "Aturdidor": { folder: "Aturdidor", suffix: "Stun" },
        "Anomalia": { folder: "Anomalia", suffix: "Anomaly" },
        "Soporte": { folder: "Soporte", suffix: "Support" },
        "Ruptura": { folder: "Ruptura", suffix: "Rupture" },
        // Fallbacks for potential variations or if weapon.rol differs
        "Ataque": { folder: "Atacante", suffix: "Attack" },
        "Defensa": { folder: "Defensivo", suffix: "Defense" }
    };

    const roleData = roleMap[weaponRole];

    if (!roleData) {
        console.warn(`WeaponAscensionMaterials: Rol no reconocido '${weaponRole}'`);
        return null;
    }

    const { folder, suffix } = roleData;
    const basePath = `/CodiceZero/Materiales/Armas/${folder}/`;
    const dennyPath = "/CodiceZero/Materiales/Varios/Item_Denny.webp";

    // Nombres de archivos
    const iconBasic = `Item_${suffix}_Component.webp`;
    const iconAdvanced = `Item_Reinforced_${suffix}_Component.webp`;
    const iconExpert = `Item_Specialized_${suffix}_Component.webp`;

    // Helper para renderizar un item
    const MaterialItem = ({ icon, value, label, color, type }) => {
        const router = useRouter();

        if (value <= 0) return null;

        // Codificar parámetros para la URL
        const encodedName = encodeURIComponent(label);
        const encodedIcon = encodeURIComponent(icon);
        const detailUrl = `/materiales/detail?name=${encodedName}&icon=${encodedIcon}&type=${type}`;

        return (
            <div
                onClick={() => router.push(detailUrl)}
                className="flex flex-col items-center gap-1 cursor-pointer group/item"
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
                        alt={label}
                        width={48}
                        height={48}
                        className="object-contain z-10"
                        unoptimized
                    />
                </div>
                <span className="text-sm font-bold font-mono bg-black/40 px-2 py-0.5 rounded text-white border border-white/5">
                    {value.toLocaleString()}
                </span>
            </div>
        );
    };

    return (
        <div className="w-full animate-fadeIn mt-6 border-t border-white/10 pt-6">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">Materiales de Ascensión</h3>
            <div className="flex flex-wrap items-end justify-start gap-4">
                {/* Denny siempre primero */}
                <MaterialItem icon={dennyPath} value={materials.denny} label="Denny" color="#00BFFF" type="currency" />

                {/* Basic Component */}
                <MaterialItem icon={`${basePath}${iconBasic}`} value={materials.basic} label={`Componente ${suffix} Básico`} color={themeColor} type="ascension" />

                {/* Advanced Component */}
                <MaterialItem icon={`${basePath}${iconAdvanced}`} value={materials.advanced} label={`Componente ${suffix} Reforzado`} color={themeColor} type="ascension" />

                {/* Expert Component */}
                <MaterialItem icon={`${basePath}${iconExpert}`} value={materials.expert} label={`Componente ${suffix} Especializado`} color={themeColor} type="ascension" />
            </div>
        </div>
    );
}
