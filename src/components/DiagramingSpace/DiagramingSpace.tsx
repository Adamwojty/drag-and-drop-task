import React from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import styled from "styled-components";
import { ItemTypes } from "../../assets/data";
import { snapToGrid } from "../../actions/snapToGrid";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { addColumn, moveColumn } from "../../config/redux/actions";
import { renderColumn } from "../../actions/renderColumn";

export interface IDragColumn {
  id: number;
  type: string;
  left: number;
  top: number;
}

const DiagramingSpace: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootStateOrAny) => state.reducer);
  const [, drop] = useDrop({
    accept: [ItemTypes.COLUMN_ADD, ItemTypes.COLUMN],
    drop(item: IDragColumn, monitor: DropTargetMonitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as {
        x: number;
        y: number;
      };

      let left: number = Math.round(item.left + delta.x);
      let top: number = 0;

      const obj = {
        top,
        left,
        title: `col-${item.id}`,
        greens: [],
      };
      if (item.type === ItemTypes.COLUMN_ADD && Object.keys(data).length < 4 && left <= 650 && left >= 0) {
        [left, top] = snapToGrid(left, top);
        return dispatch(addColumn(item.id, obj));
      } else if (item.type === ItemTypes.COLUMN && left <= 625 && left >= 0) {
        dispatch(moveColumn(item.id, left));
      }
      return undefined;
    },
  });

  return (
    <Wrapper ref={drop}>{Object.keys(data).map((key) => renderColumn(data[parseInt(key)], parseInt(key)))}</Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  border: 3px solid black;
  position: relative;
  background-color: white;
  @media (max-width: 900px) {
    overflow-x: auto;
  }
`;
export default DiagramingSpace;
