import React from "react";
import { useDragLayer } from "react-dnd";
import styled from "styled-components";
import { ItemTypes } from "../../assets/data";
import ColumnDragPreview from "../Column/DragColumnPreview";
import DragItemPreview from "../Item/DragItemPreview";
import { getItemStyles } from "../../actions/getItemstyles";

const DragLayer: React.FC<{}> = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const renderItem = () => {
    switch (itemType) {
      case ItemTypes.COLUMN:
        return <ColumnDragPreview id={item.id} />;
      case ItemTypes.ITEM:
        return <DragItemPreview title={item.title} />;
      default:
        return null;
    }
  };
  if (!isDragging) {
    return null;
  }
  return (
    <Wrapper>
      <div style={getItemStyles(initialOffset, currentOffset)}>{renderItem()}</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export default DragLayer;
