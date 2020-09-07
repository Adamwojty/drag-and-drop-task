import React from "react";
import styled from "styled-components";
import { useDrag, DragSourceMonitor } from "react-dnd";
interface IDragItem {
  color: string;
  itemType: string;
  id: number;
  left?: number;
  top?: number;
}
const DragItem: React.FC<IDragItem> = ({ color, itemType, id, left, top }) => {
  const [, drag] = useDrag({
    item: { type: itemType, id, left, top },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return <Drag ref={drag} color={color} />;
};
const Drag = styled.div<{ color: string }>`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  background-color: ${({ color }) => color};
`;
export default DragItem;
