export enum Actions {
  ADD_COLUMN = "ADD_COLUMN",
  ADD_ITEM = "ADD_ITEM",
  MOVE_COLUMN = "MOVE_COLUMN",
  MOVE_ITEM = "MOVE_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}
interface IGreens {
  idx: number;
  title: string;
}

export interface ICol {
  left: number;
  top: number;
  title: string;
  greens: IGreens[];
}
export interface IItem {
  idx: number;
  title: string;
}

export interface IColumnAction {
  type: Actions.MOVE_COLUMN | Actions.ADD_COLUMN;
  payload: {
    id: number;
    obj?: ICol;
    left?: number;
  };
}

export interface IItemAction {
  type: Actions.MOVE_ITEM | Actions.ADD_ITEM | Actions.REMOVE_ITEM;
  payload: {
    id?: number;
    obj?: IItem;
    atIndex?: number;
    index?: number;
    item?: any;
  };
}
export type ActionTypes = IColumnAction | IItemAction;
