import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { theme, themes } from '@/constants/themes';
import { changeTheme } from '@/store/actions/themeActionCreators';
import { ChangeThemeAction } from '@/store/actions/types';
import { GlobalStore } from '@/store/types';

import DropDown from '../DropDown';
import { Option } from '../DropDown/types';

const ThemesMenu: React.FC = () => {
  const currentTheme: theme = useSelector<GlobalStore, theme>(
    (state: GlobalStore) => state.theme.theme
  );

  const themesNames: Option[] = Object.keys(themes).map((theme) => ({
    option: theme,
    isActive: theme === currentTheme,
  }));

  const dispatch = useDispatch<Dispatch<ChangeThemeAction>>();

  const handleSetTheme = (theme: theme) => {
    dispatch(changeTheme(theme));
  };

  return (
    <DropDown
      options={themesNames}
      label={'Choose theme'}
      handleChooseOption={handleSetTheme}
    ></DropDown>
  );
};

export default ThemesMenu;
