import { CHANGE_THEME } from '@/constants/actions';

import { ThemeActionTypes } from '../actions/types';
import { ThemeState } from '../types';

const initialState: ThemeState = {
  theme: 'light',
};

export const themeReducer = (
  state: ThemeState = initialState,
  action: ThemeActionTypes
): ThemeState => {
  switch (action.type) {
    case CHANGE_THEME:
      return { theme: action.payload };
    default:
      return state;
  }
};
