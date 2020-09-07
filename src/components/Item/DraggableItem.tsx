import React from "react";
import styled from "styled-components";
import { useDrag, DragSourceMonitor, useDrop } from "react-dnd";
import { ItemTypes } from "../../assets/data";
import { IDraggableItemProps } from "./Item.types";
import Item from "./Item";

const DraggableItem: React.FC<IDraggableItemProps> = ({ id, title, columnId, moveItem, findItem }) => {
  const originalIndex = findItem(id).index;
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ITEM, id, originalIndex, columnId, title },
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();

      if (!didDrop) {
        moveItem(droppedId, originalIndex);
      }
    },

    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    canDrop: () => false,
    hover({ id: draggedId }: any) {
      const { index: overIndex } = findItem(id);
      if (draggedId !== id) {
        moveItem(draggedId, overIndex);
      }
    },
  });

  return (
    <Wrapper isDragging={isDragging} ref={(node) => drag(drop(node))}>
      <Item title={title} id={id} />
    </Wrapper>
  );
};
const Wrapper = styled.div<{ isDragging: boolean }>`
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  height: ${({ isDragging }) => (isDragging ? 0 : "")};
`;
export default DraggableItem;
