import { CHANGE_THEME } from '@/constants/actions';
import { theme } from '@/constants/themes';
import { ChangeThemeAction } from './types';

export const changeTheme = (theme: theme): ChangeThemeAction => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};
