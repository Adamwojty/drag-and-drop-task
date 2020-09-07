import React, { useCallback } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { ItemTypes } from "../../assets/data";
import DraggableItem from "../Item/DraggableItem";
import { addItem, moveItems, removeItem } from "../../config/redux/actions";
import { IColumnProps, IDragItem, IItem } from "./Column.types";

const Column: React.FC<IColumnProps> = ({ id }) => {
  const data = useSelector((state: RootStateOrAny) => state.reducer[id]?.greens);
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: [ItemTypes.ITEM, ItemTypes.ITEM_ADD],
    drop(item: IDragItem) {
      if (item.type === ItemTypes.ITEM_ADD) {
        const obj = {
          idx: data.length,
          title: `item-${id}-${data.length}`,
        };
        return dispatch(addItem(id, obj));
      } else if (item.columnId !== id) {
        const obj = {
          idx: data.length,
          title: item.title,
        };
        dispatch(removeItem(item.columnId, item.id));
        dispatch(addItem(id, obj));
      }

      return undefined;
    },
  });
  const findItem = useCallback(
    (id: number) => {
      const item = data.filter((c: IItem) => c.idx === id)[0];
      return {
        item,
        index: data.indexOf(item),
      };
    },
    [data]
  );
  const moveItem = useCallback(
    (itemId: number, atIndex: number) => {
      const { item, index } = findItem(itemId);
      dispatch(moveItems(atIndex, id, item, index));
    },
    [data]
  );

  const renderItem = (item: IItem) => {
    return (
      <DraggableItem
        key={item.idx}
        id={item.idx}
        title={item.title}
        moveItem={moveItem}
        findItem={findItem}
        columnId={id}
      />
    );
  };
  return <Col ref={drop}>{data && data.map((item: IItem) => renderItem(item))}</Col>;
};
const Col = styled.div`
  box-sizing: border-box;
  font-weight: 800;
  border: 3px solid black;
  padding: 5px 0;
  width: 200px;
  height: 550px;
  cursor: move;
  background-color: red;
`;
export default Column;
