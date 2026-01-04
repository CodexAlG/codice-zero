"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { agents } from "@/data/agents";
import { Download, RotateCcw, Plus } from "lucide-react";

// Updated Tiers T0-T5
const TIERS = ["T0", "T0.5", "T1", "T2", "T3", "T4", "T5"];

const ROLES = [
    { id: "dps", label: "DPS" },
    { id: "subdps", label: "SUB-DPS" },
    { id: "stun", label: "ATURDIDOR" },
    { id: "support", label: "SOPORTE" },
];

const DEFAULT_TIER_COLORS = [
    "#ff7f7f", // T0
    "#ffbf7f", // T0.5
    "#ffff7f", // T1
    "#7fff7f", // T2
    "#7fbfff", // T3
    "#7f7fff", // T4
    "#ff7fff", // T5
];

export default function CommunityTierList() {
    const [tierRows, setTierRows] = useState(
        TIERS.map((label, index) => ({
            id: label,
            label: label,
            color: DEFAULT_TIER_COLORS[index] || "#faceless",
        }))
    );

    // Placements: { agentId: number, tierId: string, roleId: string }
    const [placements, setPlacements] = useState([]);

    // Pool logic: Agents not in placements are in the pool
    const isInPool = (agentId) => !placements.find(p => p.agentId === agentId);

    const captureRef = useRef(null);

    // --- Handlers ---

    const handleDownload = async () => {
        try {
            const html2canvas = (await import('html2canvas')).default;
            if (captureRef.current) {
                const canvas = await html2canvas(captureRef.current, {
                    backgroundColor: "#020617",
                    scale: 2,
                    useCORS: true,
                });
                const link = document.createElement('a');
                link.download = 'mi-tierlist-codicezero.png';
                link.href = canvas.toDataURL();
                link.click();
            }
        } catch (err) {
            console.error("Error downloading:", err);
            alert(`Error al descargar: ${err.message}`);
        }
    };

    const handleReset = () => {
        setPlacements([]);
        setTierRows(TIERS.map((label, index) => ({
            id: label,
            label: label,
            color: DEFAULT_TIER_COLORS[index] || "#cccccc",
        })));
    };

    const addRow = () => {
        const newId = `tier-${Date.now()}`;
        setTierRows([...tierRows, {
            id: newId,
            label: "NEW",
            color: "#333333"
        }]);
    };

    const removeRow = (rowId) => {
        setPlacements(prev => prev.filter(p => p.tierId !== rowId));
        setTierRows(prev => prev.filter(r => r.id !== rowId));
    };

    const updateLabel = (rowId, newLabel) => {
        setTierRows(prev => prev.map(r => r.id === rowId ? { ...r, label: newLabel } : r));
    };

    // --- Drag & Drop ---

    const onDragStart = (e, agentId, source) => {
        e.dataTransfer.setData("agentId", agentId);
        e.dataTransfer.setData("source", JSON.stringify(source));
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDropCell = (e, tierId, roleId) => {
        e.preventDefault();
        const agentId = parseInt(e.dataTransfer.getData("agentId"));
        if (!agentId) return;

        setPlacements(prev => {
            const filtered = prev.filter(p => p.agentId !== agentId);
            return [...filtered, { agentId, tierId, roleId }];
        });
    };

    const onDropPool = (e) => {
        e.preventDefault();
        const agentId = parseInt(e.dataTransfer.getData("agentId"));
        if (!agentId) return;

        setPlacements(prev => prev.filter(p => p.agentId !== agentId));
    };


    return (
        <div className="w-full max-w-7xl mx-auto pb-20">

            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4 bg-gray-900/50 p-4 rounded-xl border border-white/5">
                <div className="space-x-2">
                    <button onClick={addRow} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold text-sm flex items-center gap-2 transition-colors">
                        <Plus size={16} /> Añadir Fila
                    </button>
                    <button onClick={handleReset} className="px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-200 hover:text-white rounded-lg font-bold text-sm flex items-center gap-2 transition-colors">
                        <RotateCcw size={16} /> Reset
                    </button>
                </div>

                <button onClick={handleDownload} className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-yellow-500/20 transition-all transform hover:scale-105">
                    <Download size={18} /> Descargar Imagen
                </button>
            </div>

            {/* Capture Area */}
            <div className="overflow-x-auto">
                <div ref={captureRef} className="min-w-[800px] border border-white/10 rounded-lg overflow-hidden bg-[#0a0a0a] inline-block w-full">

                    {/* Header */}
                    <div className="grid grid-cols-[100px_1fr_1fr_1fr_1fr] md:grid-cols-[120px_1fr_1fr_1fr_1fr]">
                        <div className="bg-gray-900/80 p-4 border-b border-r border-white/10 flex items-center justify-center">
                            <span className="font-bold text-gray-500 text-xs uppercase">Rango</span>
                        </div>
                        {ROLES.map(role => (
                            <div key={role.id} className="bg-gray-900/80 p-4 border-b border-white/10 border-l border-white/5 text-center flex items-center justify-center">
                                <span className="font-black italic text-yellow-500 text-lg md:text-xl drop-shadow-sm tracking-wider">
                                    {role.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Rows */}
                    {tierRows.map((tier) => (
                        <div key={tier.id} className="grid grid-cols-[100px_1fr_1fr_1fr_1fr] md:grid-cols-[120px_1fr_1fr_1fr_1fr] border-b border-white/5 last:border-0 min-h-[140px]">

                            {/* Row Label (Editable) - Smaller text */}
                            <div
                                className="flex flex-col items-center justify-center border-r border-black/20 relative overflow-hidden group p-1"
                                style={{ backgroundColor: tier.color }}
                            >
                                <input
                                    value={tier.label}
                                    onChange={(e) => updateLabel(tier.id, e.target.value)}
                                    className="bg-transparent text-black font-black text-2xl md:text-3xl font-display italic text-center w-full focus:outline-none uppercase placeholder-black/30"
                                />
                                {/* Delete Row */}
                                <button
                                    onClick={() => removeRow(tier.id)}
                                    className="absolute top-1 right-1 text-black/30 hover:text-black hover:bg-black/10 rounded-full w-5 h-5 flex items-center justify-center transition-all font-bold text-xs opacity-0 group-hover:opacity-100"
                                    title="Eliminar Fila"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Cells */}
                            {ROLES.map(role => {
                                const cellPlacements = placements.filter(p => p.tierId === tier.id && p.roleId === role.id);
                                const itemsInCell = cellPlacements.map(p => agents.find(a => a.id === p.agentId)).filter(Boolean);

                                return (
                                    <div
                                        key={`${tier.id}-${role.id}`}
                                        onDragOver={onDragOver}
                                        onDrop={(e) => onDropCell(e, tier.id, role.id)}
                                        className="bg-gray-900/30 p-2 flex flex-wrap gap-2 content-center justify-center border-l border-white/5 transition-colors hover:bg-white/5"
                                    >
                                        {itemsInCell.map(agent => (
                                            <div
                                                key={agent.id}
                                                draggable
                                                onDragStart={(e) => onDragStart(e, agent.id, { type: 'cell', tierId: tier.id, roleId: role.id })}
                                                className="relative group w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-lg overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-colors shadow-lg cursor-grab active:cursor-grabbing hover:scale-110 z-10"
                                            >
                                                <Image
                                                    src={agent.image || agent.icon}
                                                    alt={agent.name}
                                                    fill
                                                    className="object-cover pointer-events-none"
                                                />
                                            </div>
                                        ))}

                                        {itemsInCell.length === 0 && (
                                            <div className="w-full h-full flex items-center justify-center pointer-events-none opacity-5">
                                                <span className="text-xs font-mono uppercase text-white">Drop</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                </div>
            </div>

            {/* Pool Area */}
            <div
                className="mt-12 bg-gray-900/80 p-6 rounded-xl border border-white/10 min-h-[150px]"
                onDragOver={onDragOver}
                onDrop={onDropPool}
            >
                <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-sm text-center">Banco de Agentes (Arrástralos a la tabla)</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {agents.filter(a => isInPool(a.id)).map((agent) => (
                        <div
                            key={agent.id}
                            draggable
                            onDragStart={(e) => onDragStart(e, agent.id, { type: 'pool' })}
                            className="relative w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-lg overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-colors shadow-lg cursor-grab hover:scale-105 active:scale-95"
                        >
                            <Image
                                src={agent.image || agent.icon}
                                alt={agent.name}
                                fill
                                className="object-cover pointer-events-none"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
