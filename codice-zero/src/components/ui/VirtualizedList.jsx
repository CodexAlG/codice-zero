import { FixedSizeList as List } from 'react-window';
import { memo } from 'react';

const VirtualizedList = memo(({ 
  data, 
  height = 600,
  itemHeight = 373,
  renderItem,
  className = "",
  ...props
}) => {
  const Row = memo(({ index, style }) => (
    <div style={style}>
      {renderItem(data[index], index)}
    </div>
  ));

  return (
    <List
      height={height}
      itemCount={data.length}
      itemSize={itemHeight}
      width="100%"
      className={className}
      {...props}
    >
      {Row}
    </List>
  );
});

VirtualizedList.displayName = 'VirtualizedList';

export default VirtualizedList;