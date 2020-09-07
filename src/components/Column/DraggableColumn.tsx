import React from "react";
import styled from "styled-components";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { ItemTypes } from "../../assets/data";
import Column from "./Column";
import { IDraggableColumnProps } from "./Column.types";

const DraggableColumn: React.FC<IDraggableColumnProps> = ({ id, title, left, top }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.COLUMN, id, left, top, title },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Wrapper ref={drag} left={left} isDragging={isDragging}>
      <Column id={id} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ left: number; isDragging: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ left }) => `${left}px`};
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  height: ${({ isDragging }) => (isDragging ? 0 : "")};
`;
export default DraggableColumn;
