import React from "react";
import styled from "styled-components";
import { useDrag, DragSourceMonitor, useDrop } from "react-dnd";
import { ItemTypes } from "../../assets/data";
import { IDraggableItemProps, IDragItem } from "./Item.types";
import Item from "./Item";

const DraggableItem: React.FC<IDraggableItemProps> = ({ id, title, columnId, moveItem, findItem }) => {
  const originalIndex = findItem(id, columnId).index;

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ITEM, id, originalIndex, columnId, title },
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveItem(droppedId, originalIndex, columnId);
      }
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    canDrop: () => false,
    hover(item: IDragItem) {
      const { index: overIndex } = findItem(id, columnId);
      if (item.id !== id && columnId === item.columnId) {
        moveItem(item.id, overIndex, columnId);
      }
    },
  });

  return (
    <Wrapper isDragging={isDragging} ref={(node) => drag(drop(node))}>
      <Item title={title} />
    </Wrapper>
  );
};
const Wrapper = styled.div<{ isDragging: boolean }>`
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  height: ${({ isDragging }) => (isDragging ? 0 : "")};
`;
export default DraggableItem;
