import React from "react";
import { IItem } from "../components/Column/Column.types";
import DraggableItem from "../components/Item/DraggableItem";

export const renderItem = (
  item: IItem,
  moveItem: (id: number, to: number, colId: number) => void,
  findItem: (id: number, colId: number) => { index: number },
  id: number
) => {
  return (
    <DraggableItem
      key={item.idx}
      id={item.idx}
      title={item?.title}
      moveItem={moveItem}
      findItem={findItem}
      columnId={id}
    />
  );
};
