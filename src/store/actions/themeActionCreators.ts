import { CHANGE_THEME } from '@/constants/actions';
import { theme } from '@/constants/themes';
import { AnyAction } from 'redux';

export const changeTheme = (theme: theme): AnyAction => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};
