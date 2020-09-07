import { Actions } from "../models";
import update from "immutability-helper";

interface IInitialState {
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

const initialState: IInitialState = {
  0: { top: 0, left: 40, title: "col-0", greens: [{ idx: 0, title: "item-0-0" }] },
  1: { top: 0, left: 280, title: "col-0", greens: [{ idx: 0, title: "item-1-0" }] },
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.ADD_COLUMN: {
      return { ...state, [action.payload.id]: action.payload.obj };
    }
    case Actions.MOVE_COLUMN: {
      return update(state, {
        [action.payload.id]: {
          left: {
            $set: action.payload.left,
          },
        },
      });
    }
    case Actions.ADD_ITEM: {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          greens: [...state[action.payload.id].greens, action.payload.obj],
        },
      };
    }
    case Actions.MOVE_ITEM: {
      return update(state, {
        [action.payload.id]: {
          greens: {
            $splice: [
              [action.payload.index, 1],
              [action.payload.atIndex, 0, action.payload.item],
            ],
          },
        },
      });
    }
    case Actions.REMOVE_ITEM: {
      return update(state, {
        [action.payload.id]: {
          greens: {
            $splice: [[action.payload.index, 1]],
          },
        },
      });
    }
    default: {
      return state;
    }
  }
};
