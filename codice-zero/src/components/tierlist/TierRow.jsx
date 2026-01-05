"use client";

import Image from "next/image";
import { Reorder } from "framer-motion";

export default function TierRow({
    label,
    color,
    items,
    id,
    isEditable = false,
    onLabelChange,
    isDragEnabled = false,
    onRemove,
    // Added for native DnD support
    draggableItem = false,
    onDragStart
}) {

    return (
        <div className="flex w-full min-h-[100px] mb-1 bg-[#09090b]/50 border-b border-white/5">
            {/* Tier Label */}
            <div
                className="w-24 md:w-32 flex-shrink-0 flex flex-col items-center justify-center p-2 text-center relative overflow-hidden group border-r border-black/20"
                style={{ backgroundColor: color }}
            >
                {isEditable ? (
                    <input
                        value={label}
                        onChange={(e) => onLabelChange && onLabelChange(id, e.target.value)}
                        className="bg-transparent text-black font-black text-2xl md:text-3xl text-center w-full focus:outline-none uppercase font-display italic placeholder-black/50"
                    />
                ) : (
                    <span className="text-black font-black text-2xl md:text-3xl uppercase font-display italic drop-shadow-sm select-none">
                        {label}
                    </span>
                )}

                {/* Delete Row Button (Community Mode) */}
                {isEditable && onRemove && (
                    <button
                        onClick={() => onRemove(id)}
                        className="absolute top-1 right-1 text-black/40 hover:text-black hover:bg-black/10 rounded-full w-5 h-5 flex items-center justify-center transition-all font-bold text-xs"
                        title="Eliminar Fila"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Tier Content */}
            <div className="flex-1 p-2 flex flex-wrap gap-2 items-center content-start min-h-[100px]">

                {/* Placeholder if empty */}
                {items.length === 0 && (
                    <div className="w-full h-full min-h-[80px] flex items-center justify-center opacity-10 pointer-events-none select-none">
                        <span className="text-4xl font-black italic text-gray-500">
                            DRAG HERE
                        </span>
                    </div>
                )}

                {/* Native Drag and Drop Mode (Community) */}
                {draggableItem ? (
                    items.map((item) => (
                        <div
                            key={item.id}
                            draggable
                            onDragStart={(e) => onDragStart && onDragStart(e, item, id)}
                            className="relative group w-16 h-16 md:w-20 md:h-20 bg-[#18181b] rounded-lg overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-colors shadow-lg cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 z-10"
                        >
                            <Image
                                src={item.image || item.icon}
                                alt={item.name}
                                fill
                                className="object-cover pointer-events-none"
                            />
                            {/* Tooltip */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-[10px] text-center py-0.5 truncate px-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {item.name}
                            </div>
                        </div>
                    ))
                ) : (
                    // Static Mode (Developer or fallback)
                    items.map((item) => (
                        <div key={item.id} className="relative group w-16 h-16 md:w-20 md:h-20 bg-[#18181b] rounded-lg overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-colors shadow-lg">
                            <Image
                                src={item.image || item.icon}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-[10px] text-center py-0.5 truncate px-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.name}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
