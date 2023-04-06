import {
  ADD_TO_CLASS_HISTORY,
  ADD_TO_FUNC_HISTORY,
  CLEAR_HISTORY,
} from '@/constants/actions';
import { HistoryActionTypes } from '../actions/types';
import { HistoryState } from './types';

const initialState: HistoryState = {
  funcHistory: [],
  classHistory: [],
};

export const historyReducer = (
  state: HistoryState = initialState,
  action: HistoryActionTypes
): HistoryState => {
  switch (action.type) {
    case ADD_TO_FUNC_HISTORY:
      return { ...state, funcHistory: [...state.funcHistory, action.payload] };

    case ADD_TO_CLASS_HISTORY:
      return {
        ...state,
        classHistory: [...state.classHistory, action.payload],
      };

    case CLEAR_HISTORY:
      return { funcHistory: [], classHistory: [] };
    default:
      return state;
  }
};
