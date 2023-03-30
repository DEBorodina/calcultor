import Header from '@/components/Header';
import { Container } from './styles';
import React, { useContext } from 'react';
import SettingsButton from '@/components/SettingsButton';
import DropDown, { Option } from '@/components/DropDown';
import { themes } from '@/constants/themes';
import {
  ThemeContext,
  ThemeContextInterface,
} from '@/components/GlobalThemeProvider';
import { Page } from '@/styles/common';

const SettingsPage: React.FC = () => {
  const { theme: currentTheme, handleSetTheme }: ThemeContextInterface =
    useContext(ThemeContext)!;

  const themesNames: Option[] = Object.keys(themes).map((theme) => ({
    option: theme,
    isActive: theme === currentTheme,
  }));

  return (
    <Page>
      <Header />
      <Container>
        <h1>Settings</h1>
        <DropDown
          options={themesNames}
          label={'Choose theme'}
          handleChooseOption={handleSetTheme}
        ></DropDown>
        <SettingsButton>Clear all history</SettingsButton>
      </Container>
    </Page>
  );
};

export default SettingsPage;
