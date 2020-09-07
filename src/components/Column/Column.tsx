import React, { useCallback } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { ItemTypes } from "../../assets/data";
import { moveItems } from "../../config/redux/actions";
import { IColumnProps, IDragItem, IItem } from "./Column.types";
import { renderItem } from "../../actions/renderItem";
import { onItemDrop } from "../../actions/onItemDrop";

const Column: React.FC<IColumnProps> = ({ colId }) => {
  const data = useSelector((state: RootStateOrAny) => state.reducer);
  const dispatch = useDispatch();

  const findItem = useCallback(
    (id: number, colId: number) => {
      const item = data[colId].greens.filter((c: IItem) => c.idx === id)[0];
      return {
        item,
        index: data[colId].greens.indexOf(item),
      };
    },
    [dispatch, data]
  );
  const moveItem = useCallback(
    (itemId: number, atIndex: number, colId: number) => {
      const { item, index } = findItem(itemId, colId);
      dispatch(moveItems(atIndex, colId, item, index));
    },
    [dispatch, data]
  );

  const [, drop] = useDrop({
    accept: [ItemTypes.ITEM, ItemTypes.ITEM_ADD],
    drop(item: IDragItem) {
      onItemDrop(item, dispatch, data, colId, findItem);
      return undefined;
    },
  });
  const items = data[colId].greens;
  return <Col ref={drop}>{items && items.map((item: IItem) => renderItem(item, moveItem, findItem, colId))}</Col>;
};
const Col = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  width: 175px;
  height: 600px;
  cursor: move;
  background-color: red;
  overflow-y: auto;
`;
export default Column;
