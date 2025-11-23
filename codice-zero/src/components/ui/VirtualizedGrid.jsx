import { FixedSizeGrid as Grid } from 'react-window';
import { useMemo } from 'react';

export default function VirtualizedGrid({
  data,
  itemWidth,
  itemHeight,
  columns,
  gap = 16,
  renderItem,
  className = "",
  height = 600,
  ...props
}) {
  // Calculate dimensions
  const totalItems = data.length;
  const totalRows = Math.ceil(totalItems / columns);
  
  // Calculate container dimensions
  const containerWidth = useMemo(() => {
    return columns * (itemWidth + gap) - gap;
  }, [columns, itemWidth, gap]);

  // Memoize the row renderer to prevent unnecessary re-renders
  const Cell = useMemo(({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columns + columnIndex;
    
    if (index >= totalItems) {
      return null;
    }

    return (
      <div style={style}>
        <div style={{ 
          width: itemWidth, 
          height: itemHeight,
          marginRight: columnIndex < columns - 1 ? gap / 2 : 0,
          marginLeft: columnIndex > 0 ? gap / 2 : 0,
          marginBottom: rowIndex < totalRows - 1 ? gap / 2 : 0,
          marginTop: rowIndex > 0 ? gap / 2 : 0,
        }}>
          {renderItem(data[index], index)}
        </div>
      </div>
    );
  }, [data, columns, itemWidth, itemHeight, gap, renderItem, totalItems, totalRows]);

  return (
    <div className={className} style={{ width: '100%', height }}>
      <Grid
        columnCount={columns}
        columnWidth={itemWidth + gap}
        height={height}
        rowCount={totalRows}
        rowHeight={itemHeight + gap}
        width={containerWidth}
        {...props}
      >
        {Cell}
      </Grid>
    </div>
  );
}