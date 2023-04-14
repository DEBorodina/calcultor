import { theme } from '@/constants/themes';

import { ThemeActions, ThemeActionTypes } from './types';

export const changeTheme = (theme: theme): ThemeActions => {
  return {
    type: ThemeActionTypes.CHANGE_THEME,
    payload: theme,
  };
};
