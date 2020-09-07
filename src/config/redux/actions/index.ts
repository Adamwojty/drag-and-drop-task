import { Actions, ActionTypes, ICol, IItem } from "../models";

export function addColumn(id: number, obj: ICol): ActionTypes {
  return {
    type: Actions.ADD_COLUMN,
    payload: {
      id,
      obj,
    },
  };
}

export function moveColumn(id: number, left: number): ActionTypes {
  return {
    type: Actions.MOVE_COLUMN,
    payload: {
      id,
      left,
    },
  };
}
export function addItem(id: number, obj: IItem): ActionTypes {
  return {
    type: Actions.ADD_ITEM,
    payload: {
      id,
      obj,
    },
  };
}

export function moveItems(atIndex: number, id: number, item: IItem, index: number): ActionTypes {
  return {
    type: Actions.MOVE_ITEM,
    payload: {
      id,
      index,
      atIndex,
      item,
    },
  };
}
export function removeItem(id: number, index: number): ActionTypes {
  return {
    type: Actions.REMOVE_ITEM,
    payload: {
      id,
      index,
    },
  };
}
