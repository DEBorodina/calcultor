import {
  AddToClassHistoryAction,
  AddToFunctionalHistoryAction,
  ClearAllHistoryAction,
  HistoryActionTypes,
} from './types';

export const clearAllHistory = (): ClearAllHistoryAction => {
  return {
    type: HistoryActionTypes.CLEAR_HISTORY,
  };
};

export const addToFunctionalHistory = (
  payload: string
): AddToFunctionalHistoryAction => {
  return {
    type: HistoryActionTypes.ADD_TO_FUNC_HISTORY,
    payload,
  };
};

export const addToClassHistory = (payload: string): AddToClassHistoryAction => {
  return {
    type: HistoryActionTypes.ADD_TO_CLASS_HISTORY,
    payload,
  };
};
