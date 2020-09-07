import { Actions, IInitialState } from "../models";
import update from "immutability-helper";

const initialState: IInitialState = {};

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
