import { ADD_TO_FUNC_HISTORY, CLEAR_HISTORY } from '@/constants/actions';
import { Action, AnyAction } from 'redux';

export const clearAllHistory = (): Action => {
  return {
    type: CLEAR_HISTORY,
  };
};

export const addToFunctionalHistory = (payload: string): AnyAction => {
  return {
    type: ADD_TO_FUNC_HISTORY,
    payload,
  };
};
