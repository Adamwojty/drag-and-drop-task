import { IDragItem } from "../components/Column/Column.types";
import { removeItem, addItem } from "../config/redux/actions";

export const moveItemToCol = (id: number, item: IDragItem, length: number, dispatch: any, itemIndex: number) => {
  const obj = {
    idx: item.id,
    title: item.title,
    id: length,
  };

  dispatch(removeItem(item.columnId, itemIndex));
  return dispatch(addItem(id, obj));
};
