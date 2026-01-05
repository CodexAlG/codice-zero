"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { agents } from "@/data/agents";
import { Download, RotateCcw, Plus, Trash2, Columns, Rows } from "lucide-react";

// Updated Tiers T0-T5
const TIERS = ["S", "A", "B", "C"];

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

    // Selection State for Click-to-Move
    const [selectedAgent, setSelectedAgent] = useState(null); // { id: number, source: 'pool' | 'cell' }
    const [tierListTitle, setTierListTitle] = useState("Mi Tier List");

    // Pool logic: Agents not in placements are in the pool
    const isInPool = (agentId) => !placements.find(p => p.agentId === agentId);

    const captureRef = useRef(null);
    const exportRef = useRef(null); // Ref for the hidden desktop view

    // --- Actions ---

    const handleDownload = async () => {
        try {
            const { toPng } = await import('html-to-image');
            // Capture the HIDDEN EXPORT view instead of the visible one
            if (exportRef.current) {
                const dataUrl = await toPng(exportRef.current, {
                    backgroundColor: "#020617",
                    pixelRatio: 2,
                    skipFonts: true,
                    width: 1280, // Force width just in case
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
            const filename = tierListTitle.trim() ? `${tierListTitle.trim()}.png` : 'tierlist-codicezero.png';
            link.download = filename;
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
        setSelectedAgent(null);
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

    const getFontSize = (text) => {
        const len = text.length;
        if (len <= 2) return "text-5xl md:text-6xl";
        if (len <= 8) return "text-3xl md:text-4xl";
        if (len <= 16) return "text-xl md:text-2xl";
        if (len <= 35) return "text-sm md:text-base";
        return "text-[10px] md:text-xs"; // Very long text
    };

    const getRows = (text) => {
        const len = text.length;
        if (len <= 8) return 1;
        if (len <= 16) return 2;
        if (len <= 35) return 3;
        return 5;
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

    // --- Interaction Logic (Click / Touch) ---
    const handleAgentClick = (e, agentId, source) => {
        e.stopPropagation(); // Prevent cell click
        if (selectedAgent?.id === agentId) {
            setSelectedAgent(null); // Deselect
        } else {
            setSelectedAgent({ id: agentId, source });
        }
    };

    const handleCellClick = (tierId, roleId) => {
        if (!selectedAgent) return;

        // Move to Cell
        setPlacements(prev => {
            // Remove from old position if exists
            const filtered = prev.filter(p => p.agentId !== selectedAgent.id);
            return [...filtered, { agentId: selectedAgent.id, tierId, roleId }];
        });
        setSelectedAgent(null);
    };

    const handlePoolClick = () => {
        if (!selectedAgent) return;

        // Remove from placements (Back to Pool)
        setPlacements(prev => prev.filter(p => p.agentId !== selectedAgent.id));
        setSelectedAgent(null);
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

    // Dynamic Grid Style for Columns
    const gridColsStyle = {
        gridTemplateColumns: `minmax(120px, 140px) repeat(${tierCols.length}, minmax(140px, 1fr))`,
    };


    return (
        <div className="w-full max-w-7xl mx-auto pb-20">

            {/* Title Input */}
            <div className="mb-6">
                <input
                    type="text"
                    value={tierListTitle}
                    onChange={(e) => setTierListTitle(e.target.value)}
                    className="w-full bg-transparent text-center text-4xl md:text-5xl font-black italic text-white uppercase placeholder-white/20 focus:outline-none border-b-2 border-transparent focus:border-yellow-500 transition-all font-display"
                    placeholder="Escribe un título..."
                />
            </div>

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

            {/* Capture Area (VISIBLE RESPONSIVE VERSION) */}
            <div className="overflow-x-auto">
                <div ref={captureRef} className="w-full border border-white/10 rounded-lg overflow-hidden bg-[#0a0a0a] inline-block">

                    {/* Header (Roles) - Hidden on Mobile */}
                    <div className="hidden md:grid" style={gridColsStyle}>
                        <div className="bg-gray-900/80 p-4 border-b border-r border-white/10 flex items-center justify-center">
                            <span className="font-bold text-gray-500 text-xs uppercase">Rango</span>
                        </div>
                        {tierCols.map(col => (
                            <div key={col.id} className="bg-gray-900/80 border-b border-white/10 border-l border-white/5 text-center flex items-center justify-center relative group p-2">
                                <input
                                    value={col.label}
                                    onChange={(e) => updateColLabel(col.id, e.target.value)}
                                    className="bg-transparent font-black italic text-yellow-500 text-xl drop-shadow-sm tracking-wider text-center w-full focus:outline-none uppercase placeholder-white/20"
                                />
                                <button
                                    onClick={() => removeCol(col.id)}
                                    className="absolute top-1 right-1 text-red-500 hover:text-red-400 hover:scale-110 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] rounded-full w-6 h-6 flex items-center justify-center transition-all z-10"
                                >
                                    <Trash2 size={16} strokeWidth={2.5} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Rows */}
                    {tierRows.map((tier) => (
                        <div key={tier.id} className="flex flex-col md:grid" style={gridColsStyle}>

                            {/* Row Label */}
                            <div
                                className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-black/20 relative overflow-hidden group p-4 md:p-1 min-h-[140px]"
                                style={{ backgroundColor: tier.color }}
                            >
                                <textarea
                                    value={tier.label}
                                    onChange={(e) => updateRowLabel(tier.id, e.target.value)}
                                    className={`bg-transparent text-black font-black font-display italic text-center w-full focus:outline-none uppercase placeholder-black/30 resize-none overflow-hidden leading-tight break-words whitespace-pre-wrap ${getFontSize(tier.label)}`}
                                    style={{ fieldSizing: "content" }} // Modern CSS for auto-height
                                    rows={getRows(tier.label)}
                                />

                                <div className="absolute top-1 right-1 flex md:flex-col gap-2 md:gap-1 items-center bg-white/20 md:bg-transparent rounded px-1 md:px-0">
                                    <button
                                        onClick={() => removeRow(tier.id)}
                                        className="text-red-600 hover:text-red-500 hover:scale-110 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] w-6 h-6 flex items-center justify-center transition-all"
                                    >
                                        <Trash2 size={16} strokeWidth={2.5} />
                                    </button>
                                    <input
                                        type="color"
                                        value={tier.color}
                                        onChange={(e) => updateRowColor(tier.id, e.target.value)}
                                        className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer rounded overflow-hidden border-0 p-0"
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
                                        onClick={() => handleCellClick(tier.id, col.id)}
                                        onDragOver={onDragOver}
                                        onDrop={(e) => onDropCell(e, tier.id, col.id)}
                                        className={`bg-gray-900/30 p-2 flex flex-col md:flex-row flex-wrap gap-2 content-center md:justify-center border-l-0 md:border-l border-white/5 border-b transition-colors ${selectedAgent ? 'hover:bg-yellow-500/10 cursor-pointer' : 'hover:bg-white/5'}`}
                                    >
                                        {/* Mobile Role Label */}
                                        <span className="md:hidden text-yellow-500/80 font-bold text-xs uppercase tracking-wider text-center border-b border-white/5 pb-1 mb-2 w-full">
                                            {col.label}
                                        </span>

                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {itemsInCell.map(agent => (
                                                <div
                                                    key={agent.id}
                                                    draggable
                                                    onDragStart={(e) => onDragStart(e, agent.id, { type: 'cell', tierId: tier.id, roleId: col.id })}
                                                    onClick={(e) => handleAgentClick(e, agent.id, 'cell')}
                                                    className={`relative group w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-lg overflow-hidden border transition-all shadow-lg cursor-grab active:cursor-grabbing hover:scale-110 z-10 
                                                        ${selectedAgent?.id === agent.id
                                                            ? 'border-yellow-400 ring-2 ring-yellow-400 ring-offset-2 ring-offset-black scale-110'
                                                            : 'border-white/10 hover:border-yellow-500/50'}`}
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
                                                <div className="w-full h-8 md:h-full flex items-center justify-center pointer-events-none opacity-5">
                                                    <span className="text-xs font-mono uppercase text-white">Drop</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                </div>
            </div>

            {/* HIDDEN DESKTOP EXPORT VIEW (FIXED WIDTH, ALWAYS GRID) */}
            <div style={{ position: 'absolute', top: '-10000px', left: '-10000px', width: '1280px' }}>
                <div ref={exportRef} className="w-[1280px] border border-white/10 rounded-lg overflow-hidden bg-[#0a0a0a]">

                    {/* NEW: Export Title */}
                    <div className="bg-[#0f172a] p-6 border-b border-white/10 flex items-center justify-center">
                        <h1 className="text-5xl font-black italic text-white uppercase font-display tracking-wider drop-shadow-lg">
                            {tierListTitle || "My Tier List"}
                        </h1>
                    </div>

                    {/* PC Header (Always Visible) */}
                    <div className="grid" style={gridColsStyle}>
                        <div className="bg-gray-900/80 p-4 border-b border-r border-white/10 flex items-center justify-center">
                            <span className="font-bold text-gray-500 text-xs uppercase">Rango</span>
                        </div>
                        {tierCols.map(col => (
                            <div key={col.id} className="bg-gray-900/80 border-b border-white/10 border-l border-white/5 text-center flex items-center justify-center p-2">
                                <span className="font-black italic text-yellow-500 text-xl drop-shadow-sm tracking-wider uppercase">{col.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* PC Rows (Always Grid) */}
                    {tierRows.map((tier) => (
                        <div key={tier.id} className="grid" style={gridColsStyle}>
                            <div
                                className="flex flex-col items-center justify-center border-r border-black/20 p-1 min-h-[140px]"
                                style={{ backgroundColor: tier.color }}
                            >
                                <span className={`text-black font-black font-display italic uppercase text-center whitespace-pre-wrap leading-tight ${getFontSize(tier.label)}`}>
                                    {tier.label}
                                </span>
                            </div>

                            {tierCols.map(col => {
                                const cellPlacements = placements.filter(p => p.tierId === tier.id && p.roleId === col.id);
                                const itemsInCell = cellPlacements.map(p => agents.find(a => a.id === p.agentId)).filter(Boolean);

                                return (
                                    <div
                                        key={`${tier.id}-${col.id}`}
                                        className="bg-gray-900/30 p-2 flex flex-wrap gap-2 content-center justify-center border-l border-white/5 border-b"
                                    >
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {itemsInCell.map(agent => (
                                                <div
                                                    key={agent.id}
                                                    className="relative w-20 h-20 bg-gray-800 rounded-lg overflow-hidden border border-white/10 shadow-lg"
                                                >
                                                    <Image
                                                        src={agent.image || agent.icon}
                                                        alt={agent.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                            {itemsInCell.length === 0 && (
                                                <div className="w-full h-full flex items-center justify-center opacity-5">
                                                    <span className="text-xs font-mono uppercase text-white">Drop</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                    {/* Watermark / Logo could go here if requested */}
                </div>
            </div>


            {/* Pool Area */}
            <div
                className={`mt-12 bg-gray-900/80 p-6 rounded-xl border transition-colors min-h-[150px] ${selectedAgent ? 'border-yellow-500/30 bg-yellow-900/5 cursor-pointer' : 'border-white/10'}`}
                onDragOver={onDragOver}
                onDrop={onDropPool}
                onClick={handlePoolClick} // Click to return to pool
            >
                <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-sm text-center">
                    {selectedAgent ? "Toca aquí para devolver al banco" : "Banco de Agentes (Arrastra o Toca para mover)"}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {agents.filter(a => isInPool(a.id)).map((agent) => (
                        <div
                            key={agent.id}
                            draggable
                            onDragStart={(e) => onDragStart(e, agent.id, { type: 'pool' })}
                            onClick={(e) => handleAgentClick(e, agent.id, 'pool')}
                            className={`relative w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-lg overflow-hidden border transition-all shadow-lg cursor-grab hover:scale-105 active:scale-95
                                ${selectedAgent?.id === agent.id
                                    ? 'border-yellow-400 ring-2 ring-yellow-400 ring-offset-2 ring-offset-black scale-110'
                                    : 'border-white/10 hover:border-yellow-500/50'}`}
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

                        {/* Fixed: Image container scaling */}
                        <div className="flex-1 overflow-hidden bg-[#020617] rounded-lg border border-white/5 mb-6 flex items-center justify-center p-4">
                            <img
                                src={previewImage}
                                alt="Tier List Preview"
                                className="max-w-full max-h-[60vh] object-contain rounded shadow-lg"
                            />
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
