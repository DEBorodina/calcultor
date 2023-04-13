import React from 'react';

import ClassClearHistoryButton from '@/components/ClearHistoryButton/ClassClearHistoryButton';
import ClassHeader from '@/components/Header/ClassHeader';
import ClassThemesMenu from '@/components/ThemesMenu/ClassThemeMenu';
import { Page } from '@/styles/common';

import { Container } from './styles';

const ClassSettingsPage: React.FC = () => {
  return (
    <Page>
      <ClassHeader />
      <Container>
        <h1>Settings</h1>
        <ClassThemesMenu />
        <ClassClearHistoryButton />
      </Container>
    </Page>
  );
};

export default ClassSettingsPage;
