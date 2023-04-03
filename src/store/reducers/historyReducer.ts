import { ADD_TO_FUNC_HISTORY, CLEAR_HISTORY } from '@/constants/actions';
import { AnyAction } from 'redux';

export interface HistoryState {
  funcHistory: string[];
  classHistory: string[];
}

const initialState: HistoryState = {
  funcHistory: [],
  classHistory: [],
};

export const historyReducer = (
  state: HistoryState = initialState,
  action: AnyAction
): HistoryState => {
  switch (action.type) {
    case ADD_TO_FUNC_HISTORY:
      return { ...state, funcHistory: [...state.funcHistory, action.payload] };
    case CLEAR_HISTORY:
      return { funcHistory: [], classHistory: [] };
    default:
      return state;
  }
};
