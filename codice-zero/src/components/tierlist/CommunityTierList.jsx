"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { agents } from "@/data/agents";
import { Download, RotateCcw, Plus, Trash2, Columns, Rows } from "lucide-react";

// Updated Tiers T0-T5
const TIERS = ["T0", "T0.5", "T1", "T2", "T3", "T4", "T5"];

const DEFAULT_ROLES = [
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
    // Rows State
    const [tierRows, setTierRows] = useState(
        TIERS.map((label, index) => ({
            id: label,
            label: label,
            color: DEFAULT_TIER_COLORS[index] || "#faceless",
        }))
    );

    // Columns State
    const [tierCols, setTierCols] = useState(DEFAULT_ROLES);

    // Placements: { agentId: number, tierId: string, roleId: string }
    const [placements, setPlacements] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);

    // Pool logic: Agents not in placements are in the pool
    const isInPool = (agentId) => !placements.find(p => p.agentId === agentId);

    const captureRef = useRef(null);

    // --- Actions ---

    const handleDownload = async () => {
        try {
            const { toPng } = await import('html-to-image');
            if (captureRef.current) {
                const dataUrl = await toPng(captureRef.current, {
                    backgroundColor: "#020617",
                    pixelRatio: 2,
                    skipFonts: true,
                    filter: (node) => node.tagName !== 'LINK' && node.tagName !== 'STYLE',
                });
                setPreviewImage(dataUrl);
            }
        } catch (err) {
            console.error("Error downloading:", err);
            alert(`Error al descargar: ${err.message}`);
        }
    };

    const confirmDownload = () => {
        if (previewImage) {
            const link = document.createElement('a');
            link.download = 'mi-tierlist-codicezero.png';
            link.href = previewImage;
            link.click();
            setPreviewImage(null);
        }
    };

    const handleReset = () => {
        setPlacements([]);
        setTierRows(TIERS.map((label, index) => ({
            id: label,
            label: label,
            color: DEFAULT_TIER_COLORS[index] || "#cccccc",
        })));
        setTierCols(DEFAULT_ROLES);
    };

    // Row Actions
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

    const updateRowLabel = (rowId, newLabel) => {
        setTierRows(prev => prev.map(r => r.id === rowId ? { ...r, label: newLabel } : r));
    };

    // Column Actions
    const addCol = () => {
        const newId = `col-${Date.now()}`;
        setTierCols([...tierCols, {
            id: newId,
            label: "NEW"
        }]);
    };

    const removeCol = (colId) => {
        setPlacements(prev => prev.filter(p => p.roleId !== colId));
        setTierCols(prev => prev.filter(c => c.id !== colId));
    };

    const updateColLabel = (colId, newLabel) => {
        setTierCols(prev => prev.map(c => c.id === colId ? { ...c, label: newLabel } : c));
    };

    const updateRowColor = (rowId, newColor) => {
        setTierRows(prev => prev.map(r => r.id === rowId ? { ...r, color: newColor } : r));
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

    // Dynamic Grid Style
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `minmax(100px, 120px) repeat(${tierCols.length}, minmax(140px, 1fr))`,
    };


    return (
        <div className="w-full max-w-7xl mx-auto pb-20">

            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4 bg-gray-900/50 p-4 rounded-xl border border-white/5">
                {/* Left: Reset */}
                <div className="space-x-2">
                    <button onClick={handleReset} className="px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-200 hover:text-white rounded-lg font-bold text-sm flex items-center gap-2 transition-colors">
                        <RotateCcw size={16} /> Reset
                    </button>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-wrap items-center gap-2">
                    <button onClick={addRow} className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/80 hover:text-white text-blue-300 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors border border-blue-500/30">
                        <Rows size={16} /> + Fila
                    </button>
                    <button onClick={addCol} className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/80 hover:text-white text-purple-300 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors border border-purple-500/30">
                        <Columns size={16} /> + Columna
                    </button>
                    <div className="w-[1px] h-8 bg-white/10 mx-2 hidden md:block"></div>
                    <button onClick={handleDownload} className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-yellow-500/20 transition-all transform hover:scale-105">
                        <Download size={18} /> Descargar Imagen
                    </button>
                </div>
            </div>

            {/* Capture Area */}
            <div className="overflow-x-auto">
                <div ref={captureRef} className="min-w-[800px] border border-white/10 rounded-lg overflow-hidden bg-[#0a0a0a] inline-block w-full">

                    {/* Header */}
                    <div className="" style={gridStyle}>
                        <div className="bg-gray-900/80 p-4 border-b border-r border-white/10 flex items-center justify-center">
                            <span className="font-bold text-gray-500 text-xs uppercase">Rango</span>
                        </div>
                        {tierCols.map(col => (
                            <div key={col.id} className="bg-gray-900/80 border-b border-white/10 border-l border-white/5 text-center flex items-center justify-center relative group p-2">
                                {/* Editable Column Label */}
                                <input
                                    value={col.label}
                                    onChange={(e) => updateColLabel(col.id, e.target.value)}
                                    className="bg-transparent font-black italic text-yellow-500 text-lg md:text-xl drop-shadow-sm tracking-wider text-center w-full focus:outline-none uppercase placeholder-white/20"
                                />
                                {/* Delete Column Button */}
                                <button
                                    onClick={() => removeCol(col.id)}
                                    className="absolute top-1 right-1 text-red-500 hover:text-red-400 hover:scale-110 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] rounded-full w-6 h-6 flex items-center justify-center transition-all z-10"
                                    title="Eliminar Columna"
                                >
                                    <Trash2 size={16} strokeWidth={2.5} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Rows */}
                    {tierRows.map((tier) => (
                        <div key={tier.id} className="" style={gridStyle}>

                            {/* Row Label (Editable) - Smaller text */}
                            <div
                                className="flex flex-col items-center justify-center border-r border-black/20 relative overflow-hidden group p-1 min-h-[140px] border-b border-white/5"
                                style={{ backgroundColor: tier.color }}
                            >
                                <input
                                    value={tier.label}
                                    onChange={(e) => updateRowLabel(tier.id, e.target.value)}
                                    className="bg-transparent text-black font-black text-2xl md:text-3xl font-display italic text-center w-full focus:outline-none uppercase placeholder-black/30 resize-none"
                                />

                                {/* Controls Container */}
                                <div className="absolute top-1 right-1 flex flex-col gap-1 items-center">
                                    {/* Delete Row */}
                                    <button
                                        onClick={() => removeRow(tier.id)}
                                        className="text-red-600 hover:text-red-500 hover:scale-110 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] w-6 h-6 flex items-center justify-center transition-all"
                                        title="Eliminar Fila"
                                    >
                                        <Trash2 size={16} strokeWidth={2.5} />
                                    </button>

                                    {/* Color Picker */}
                                    <input
                                        type="color"
                                        value={tier.color}
                                        onChange={(e) => updateRowColor(tier.id, e.target.value)}
                                        className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer rounded overflow-hidden border-0 p-0"
                                        title="Cambiar Color"
                                    />
                                </div>
                            </div>

                            {/* Cells */}
                            {tierCols.map(col => {
                                const cellPlacements = placements.filter(p => p.tierId === tier.id && p.roleId === col.id);
                                const itemsInCell = cellPlacements.map(p => agents.find(a => a.id === p.agentId)).filter(Boolean);

                                return (
                                    <div
                                        key={`${tier.id}-${col.id}`}
                                        onDragOver={onDragOver}
                                        onDrop={(e) => onDropCell(e, tier.id, col.id)}
                                        className="bg-gray-900/30 p-2 flex flex-wrap gap-2 content-center justify-center border-l border-white/5 border-b transition-colors hover:bg-white/5"
                                    >
                                        {itemsInCell.map(agent => (
                                            <div
                                                key={agent.id}
                                                draggable
                                                onDragStart={(e) => onDragStart(e, agent.id, { type: 'cell', tierId: tier.id, roleId: col.id })}
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

            {/* Download Preview Modal */}
            {previewImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-4">Vista Previa</h3>

                        <div className="flex-1 overflow-auto bg-[#020617] rounded-lg border border-white/5 mb-6 flex items-center justify-center p-4">
                            <img src={previewImage} alt="Tier List Preview" className="max-w-full h-auto rounded shadow-lg" />
                        </div>

                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setPreviewImage(null)}
                                className="px-6 py-2 rounded-lg font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                Regresar
                            </button>
                            <button
                                onClick={confirmDownload}
                                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg font-bold shadow-lg shadow-yellow-500/20 transition-transform hover:scale-105"
                            >
                                Descargar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
