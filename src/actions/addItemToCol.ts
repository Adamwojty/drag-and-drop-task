import { addItem } from "../config/redux/actions";

export const addItemToCol = (length: number, id: number, dispatch: any) => {
  const customId = Math.floor(Math.random() * 10000);
  const obj = {
    id: length,
    idx: customId,
    title: `item-${id}-${customId}`,
  };
  return dispatch(addItem(id, obj));
};
