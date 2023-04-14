import { ThemeActions, ThemeActionTypes } from '../actions/types';
import { ThemeState } from './types';

const initialState: ThemeState = {
  theme: 'light',
};

export const themeReducer = (
  state: ThemeState = initialState,
  action: ThemeActions
): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.CHANGE_THEME:
      return { theme: action.payload };

    default:
      return state;
  }
};
