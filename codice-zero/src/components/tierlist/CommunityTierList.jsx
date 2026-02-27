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
                    backgroundColor: "#09090b",
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

    const autoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
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
            <div className="mb-8 mt-2 relative w-full max-w-2xl mx-auto">
                <input
                    type="text"
                    value={tierListTitle}
                    onChange={(e) => setTierListTitle(e.target.value)}
                    className="w-full bg-black/40 text-center text-4xl md:text-5xl font-black italic text-white uppercase placeholder-white/20 focus:outline-none border-b-2 border-white/10 focus:border-yellow-500 transition-all font-display py-4 rounded-t-2xl backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] focus:shadow-[0_10px_40px_rgba(234,179,8,0.15)] focus:bg-white/5"
                    placeholder="Escribe un título..."
                />
            </div>

            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4 bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] select-none">
                {/* Left: Reset */}
                <div className="space-x-2">
                    <button onClick={handleReset} className="px-5 py-2.5 bg-red-600/10 hover:bg-red-600/30 text-red-400 hover:text-white rounded-xl font-bold text-sm tracking-wide uppercase flex items-center gap-2 transition-all border border-red-500/20 hover:border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                        <RotateCcw size={16} /> Reset
                    </button>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-wrap items-center gap-3">
                    <button onClick={addRow} className="px-5 py-2.5 bg-blue-600/10 hover:bg-blue-600/30 hover:text-white text-blue-400 rounded-xl font-bold text-sm flex items-center gap-2 transition-all border border-blue-500/20 hover:border-blue-500/50 uppercase tracking-wide">
                        <Rows size={18} /> <span className="hidden sm:inline"> + Fila</span>
                    </button>
                    <button onClick={addCol} className="px-5 py-2.5 bg-purple-600/10 hover:bg-purple-600/30 hover:text-white text-purple-400 rounded-xl font-bold text-sm flex items-center gap-2 transition-all border border-purple-500/20 hover:border-purple-500/50 uppercase tracking-wide">
                        <Columns size={18} /> <span className="hidden sm:inline"> + Columna</span>
                    </button>
                    <div className="w-px h-8 bg-white/10 mx-2 hidden md:block"></div>
                    <button onClick={handleDownload} className="px-8 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl font-black italic tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all transform hover:-translate-y-1">
                        <Download size={20} /> Descargar
                    </button>
                </div>
            </div>

            {/* Capture Area (VISIBLE RESPONSIVE VERSION) */}
            <div className="overflow-x-auto rounded-3xl pb-4">
                <div ref={captureRef} className="w-full border border-white/5 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md inline-block shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                    {/* Header (Roles) - Hidden on Mobile */}
                    <div className="hidden md:grid" style={gridColsStyle}>
                        <div className="bg-black/60 p-4 border-b border-r border-white/10 flex items-center justify-center backdrop-blur-md">
                            <span className="font-black text-gray-500 text-[10px] uppercase tracking-widest">Rango</span>
                        </div>
                        {tierCols.map(col => (
                            <div key={col.id} className="bg-black/60 border-b border-white/10 border-l border-white/5 text-center flex items-center justify-center relative group p-3 backdrop-blur-md">
                                <input
                                    value={col.label}
                                    onChange={(e) => updateColLabel(col.id, e.target.value)}
                                    className="bg-transparent font-display font-black italic text-gray-300 text-xl tracking-widest text-center w-full focus:outline-none uppercase placeholder-white/20 drop-shadow-md focus:text-white transition-colors"
                                />
                                <button
                                    onClick={() => removeCol(col.id)}
                                    className="absolute top-2 right-2 text-red-500/50 hover:text-red-400 hover:scale-110 hover:bg-red-500/10 drop-shadow-md rounded-full w-8 h-8 flex items-center justify-center transition-all z-10 opacity-0 group-hover:opacity-100"
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
                                    onInput={autoResize}
                                    onFocus={autoResize}
                                    className={`bg-transparent text-black font-black font-display italic text-center w-full focus:outline-none uppercase placeholder-black/30 resize-none overflow-hidden leading-tight break-words whitespace-pre-wrap outline-none border-none ${getFontSize(tier.label)}`}
                                    rows={1}
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
                                        className={`bg-[#09090b]/50 p-2 flex flex-col md:flex-row flex-wrap gap-2 content-center md:justify-center border-l-0 md:border-l border-white/5 border-b transition-colors ${selectedAgent ? 'hover:bg-yellow-500/10 cursor-pointer' : 'hover:bg-white/5'}`}
                                    >
                                        {/* Mobile Role Label */}
                                        <span className="md:hidden text-yellow-500/80 font-bold text-xs uppercase tracking-wider text-center border-b border-white/5 pb-1 mb-2 w-full">
                                            {col.label}
                                        </span>

                                        <div className="flex flex-wrap gap-3 justify-center">
                                            {itemsInCell.map(agent => (
                                                <div
                                                    key={agent.id}
                                                    draggable
                                                    onDragStart={(e) => onDragStart(e, agent.id, { type: 'cell', tierId: tier.id, roleId: col.id })}
                                                    onClick={(e) => handleAgentClick(e, agent.id, 'cell')}
                                                    className={`relative group/agent w-16 h-16 md:w-20 md:h-20 bg-black/50 rounded-xl overflow-hidden border backdrop-blur-sm transition-all duration-300 cursor-grab active:cursor-grabbing hover:-translate-y-1 z-10 will-change-transform
                                                        ${selectedAgent?.id === agent.id
                                                            ? 'border-yellow-400 ring-[3px] ring-yellow-400/50 shadow-[0_0_20px_rgba(234,179,8,0.5)] scale-110 z-20'
                                                            : 'border-white/10 hover:border-white/30 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]'}`}
                                                >
                                                    <Image
                                                        src={agent.image || agent.icon}
                                                        alt={agent.name}
                                                        fill
                                                        className="object-cover pointer-events-none group-hover/agent:scale-110 transition-transform duration-500"
                                                    />
                                                    {/* Tooltip Hover Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/agent:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                                    <div className="absolute bottom-1 left-0 right-0 text-center opacity-0 group-hover/agent:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                        <span className="text-[9px] font-black uppercase tracking-widest text-white drop-shadow-md truncate px-1 block">{agent.name}</span>
                                                    </div>
                                                </div>
                                            ))}

                                            {itemsInCell.length === 0 && (
                                                <div className="w-full h-8 md:h-full flex items-center justify-center pointer-events-none opacity-20 border-2 border-dashed border-white/5 rounded-xl m-1">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Drop</span>
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
                <div ref={exportRef} className="w-[1280px] border border-white/10 rounded-lg overflow-hidden bg-[#09090b]">

                    {/* NEW: Export Title */}
                    <div className="bg-[#18181b] p-6 border-b border-white/10 flex items-center justify-center">
                        <h1 className="text-5xl font-black italic text-white uppercase font-display tracking-wider drop-shadow-lg">
                            {tierListTitle || "My Tier List"}
                        </h1>
                    </div>

                    {/* PC Header (Always Visible) */}
                    <div className="grid" style={gridColsStyle}>
                        <div className="bg-[#18181b] p-4 border-b border-r border-white/10 flex items-center justify-center">
                            <span className="font-bold text-gray-500 text-xs uppercase">Rango</span>
                        </div>
                        {tierCols.map(col => (
                            <div key={col.id} className="bg-[#18181b] border-b border-white/10 border-l border-white/5 text-center flex items-center justify-center p-2">
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
                                        className="bg-[#09090b]/50 p-2 flex flex-wrap gap-2 content-center justify-center border-l border-white/5 border-b"
                                    >
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {itemsInCell.map(agent => (
                                                <div
                                                    key={agent.id}
                                                    className="relative w-20 h-20 bg-[#18181b] rounded-lg overflow-hidden border border-white/10 shadow-lg"
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
                className={`mt-12 bg-black/40 backdrop-blur-md p-8 rounded-3xl border transition-all duration-300 min-h-[180px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] ${selectedAgent ? 'border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.1)] cursor-pointer' : 'border-white/5'}`}
                onDragOver={onDragOver}
                onDrop={onDropPool}
                onClick={handlePoolClick} // Click to return to pool
            >
                <h3 className="text-gray-400 font-black mb-6 uppercase tracking-[0.2em] text-sm text-center">
                    {selectedAgent ? "Toca aquí para devolver al banco" : "Banco de Agentes (Arrastra o Toca para mover)"}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                    {agents.filter(a => isInPool(a.id)).map((agent) => (
                        <div
                            key={agent.id}
                            draggable
                            onDragStart={(e) => onDragStart(e, agent.id, { type: 'pool' })}
                            onClick={(e) => handleAgentClick(e, agent.id, 'pool')}
                            className={`relative group/pool w-16 h-16 md:w-20 md:h-20 bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 cursor-grab active:cursor-grabbing hover:-translate-y-2 will-change-transform
                                ${selectedAgent?.id === agent.id
                                    ? 'border-yellow-400 ring-[3px] ring-yellow-400/50 shadow-[0_0_20px_rgba(234,179,8,0.5)] scale-110 z-20'
                                    : 'border-white/10 hover:border-white/30 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]'}`}
                        >
                            <Image
                                src={agent.image || agent.icon}
                                alt={agent.name}
                                fill
                                className="object-cover pointer-events-none group-hover/pool:scale-110 transition-transform duration-500"
                            />
                            {/* Pool Tooltip */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/pool:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            <div className="absolute bottom-1 left-0 right-0 text-center opacity-0 group-hover/pool:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <span className="text-[9px] font-black uppercase tracking-widest text-white drop-shadow-md truncate px-1 block">{agent.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Download Preview Modal */}
            {previewImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all">
                    <div className="bg-[#0f0f12] border border-white/5 rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[60px] pointer-events-none"></div>

                        <h3 className="text-2xl font-display font-black italic text-white mb-6 relative z-10 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)]"></span>
                            Vista Previa
                        </h3>

                        {/* Fixed: Image container scaling */}
                        <div className="flex-1 overflow-auto bg-black/50 rounded-2xl border border-white/5 mb-8 flex items-center justify-center p-6 shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)] relative z-10 custom-scrollbar">
                            <img
                                src={previewImage}
                                alt="Tier List Preview"
                                className="max-w-full h-auto object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row justify-end gap-4 relative z-10">
                            <button
                                onClick={() => setPreviewImage(null)}
                                className="px-8 py-3 rounded-xl font-bold uppercase tracking-wide text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmDownload}
                                className="px-10 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl font-black italic text-lg tracking-widest shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <Download size={20} /> Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
