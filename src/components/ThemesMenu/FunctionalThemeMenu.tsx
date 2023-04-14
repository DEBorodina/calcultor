import React from 'react';

import { theme, themes } from '@/constants/themes';
import { useTypedDispatch, useTypedSelector } from '@/hooks/';
import { changeTheme } from '@/store/actions/themeActionCreators';

import FunctionalDropDown from '../DropDown/FunctionalDropDown';
import { Option } from '../DropDown/types';

const ThemesMenu: React.FC = () => {
  const currentTheme: theme = useTypedSelector((state) => state.theme.theme);

  const themesNames: Option[] = Object.keys(themes).map((theme) => ({
    option: theme,
    isActive: theme === currentTheme,
  }));

  const dispatch = useTypedDispatch();

  const handleSetTheme = (option: string) => {
    dispatch(changeTheme(option as theme));
  };

  return (
    <FunctionalDropDown
      options={themesNames}
      label={'Choose theme'}
      handleChooseOption={handleSetTheme}
    ></FunctionalDropDown>
  );
};

export default ThemesMenu;
