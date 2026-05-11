'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useWindowVirtualizer } from '@tanstack/react-virtual';

const DEFAULT_MIN_COLUMN_WIDTH = 140;
const DEFAULT_GAP = 12;

const calculateColumns = (containerWidth, minColumnWidth, gap) => {
  if (!containerWidth) return 1;
  return Math.max(1, Math.floor((containerWidth + gap) / (minColumnWidth + gap)));
};

const calculateRowHeight = (containerWidth, columns, minColumnWidth, gap) => {
  if (!containerWidth) return 280;
  const cardWidth = Math.max(minColumnWidth, Math.floor((containerWidth - (columns - 1) * gap) / columns));
  return Math.round(cardWidth * 1.25) + 22;
};

export default function VirtualizedGrid({
  items,
  renderItem,
  minColumnWidth = DEFAULT_MIN_COLUMN_WIDTH,
  gap = DEFAULT_GAP,
  getItemKey = (item) => item.id,
  className = '',
}) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateWidth = () => {
      setContainerWidth(Math.floor(element.getBoundingClientRect().width));
    };

    updateWidth();

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(Math.floor(entry.contentRect.width));
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const columns = useMemo(
    () => calculateColumns(containerWidth, minColumnWidth, gap),
    [containerWidth, minColumnWidth, gap]
  );

  const rowHeight = useMemo(
    () => calculateRowHeight(containerWidth, columns, minColumnWidth, gap),
    [containerWidth, columns, minColumnWidth, gap]
  );

  const rowCount = useMemo(
    () => Math.ceil(items.length / columns),
    [items.length, columns]
  );

  const rowVirtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => rowHeight,
    overscan: 4,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();

  return (
    <div ref={containerRef} className={className}>
      <div style={{ height: rowVirtualizer.getTotalSize(), position: 'relative' }}>
        {virtualRows.map((virtualRow) => {
          const rowStartIndex = virtualRow.index * columns;
          const rowItems = items.slice(rowStartIndex, rowStartIndex + columns);

          return (
            <div
              key={virtualRow.key}
              style={{
                position: 'absolute',
                top: virtualRow.start,
                left: 0,
                width: '100%',
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gap: `${gap}px`,
              }}
              className="pb-3"
            >
              {rowItems.map((item, itemIndex) => (
                <div key={getItemKey(item)} className="w-full">
                  {renderItem(item, rowStartIndex + itemIndex)}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
