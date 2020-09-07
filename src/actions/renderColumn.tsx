import React from "react";
import DraggableColumn from "../components/Column/DraggableColumn";
interface IColumn {
  top: number;
  left: number;
  title: string;
}
export const renderColumn = (item: IColumn, key: number) => {
  return <DraggableColumn key={key} id={key} {...item} />;
};
