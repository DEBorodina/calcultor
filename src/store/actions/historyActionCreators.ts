import {
  ADD_TO_FUNC_HISTORY,
  CLEAR_HISTORY,
  ADD_TO_CLASS_HISTORY,
} from '@/constants/actions';
import {
  AddToClassHistoryAction,
  AddToFunctionalHistoryAction,
  ClearAllHistoryAction,
} from './types';

export const clearAllHistory = (): ClearAllHistoryAction => {
  return {
    type: CLEAR_HISTORY,
  };
};

export const addToFunctionalHistory = (
  payload: string
): AddToFunctionalHistoryAction => {
  return {
    type: ADD_TO_FUNC_HISTORY,
    payload,
  };
};

export const addToClassHistory = (payload: string): AddToClassHistoryAction => {
  return {
    type: ADD_TO_CLASS_HISTORY,
    payload,
  };
};
