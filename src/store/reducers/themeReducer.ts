import { CHANGE_THEME } from '@/constants/actions';
import { theme } from '@/constants/themes';
import { AnyAction } from 'redux';

export interface ThemeState {
  theme: theme;
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeReducer = (
  state: ThemeState = initialState,
  action: AnyAction
): ThemeState => {
  switch (action.type) {
    case CHANGE_THEME:
      return { theme: action.payload };
    default:
      return state;
  }
};
