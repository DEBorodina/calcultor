import React from 'react';
import DropDown, { Option } from '../DropDown';
import { theme, themes } from '@/constants/themes';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStore } from '@/store/reducers';
import { changeTheme } from '@/store/actions/themeActionCreators';

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
