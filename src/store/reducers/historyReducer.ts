import { HistoryActions, HistoryActionTypes } from '../actions/types';
import { HistoryState } from './types';

const initialState: HistoryState = {
  funcHistory: [],
  classHistory: [],
};

export const historyReducer = (
  state: HistoryState = initialState,
  action: HistoryActions
): HistoryState => {
  switch (action.type) {
    case HistoryActionTypes.ADD_TO_FUNC_HISTORY:
      return { ...state, funcHistory: [...state.funcHistory, action.payload] };

    case HistoryActionTypes.ADD_TO_CLASS_HISTORY:
      return {
        ...state,
        classHistory: [...state.classHistory, action.payload],
      };

    case HistoryActionTypes.CLEAR_HISTORY:
      return { funcHistory: [], classHistory: [] };

    default:
      return state;
  }
};
