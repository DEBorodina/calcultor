import React from 'react';
import DropDown from '../DropDown';
import { Option } from '../DropDown/types';
import { theme, themes } from '@/constants/themes';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '@/store/actions/themeActionCreators';
import { GlobalStore } from '@/store/types';

const ThemesMenu: React.FC = () => {
  const currentTheme: theme = useSelector(
    (state: GlobalStore) => state.theme.theme
  );

  const themesNames: Option[] = Object.keys(themes).map((theme) => ({
    option: theme,
    isActive: theme === currentTheme,
  }));

  const dispatch = useDispatch();

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
