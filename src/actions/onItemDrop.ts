import { addItemToCol } from "./addItemToCol";
import { moveItemToCol } from "./moveItemToCol";
import { ItemTypes } from "../assets/data";
import { IDragItem } from "../components/Column/Column.types";

interface IData {
  [key: number]: {
    top: number;
    left: number;
    title: string;
    greens: {
      idx: number;
      title: string;
    }[];
  };
}

export const onItemDrop = (
  item: IDragItem,
  dispatch: any,
  data: IData,
  colId: number,
  findItem: (id: number, colId: number) => { index: number }
) => {
  const { columnId, id, type } = item;
  if (type === ItemTypes.ITEM_ADD) {
    return addItemToCol(data[colId].greens.length, colId, dispatch);
  } else if (columnId !== colId) {
    const { index } = findItem(id, columnId);
    return moveItemToCol(colId, item, data[colId].greens.length, dispatch, index);
  }
};
