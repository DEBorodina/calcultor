import React from 'react';

import FunctionalClearHistoryButton from '@/components/ClearHistoryButton/FunctionalClearHistoryButton';
import FunctionalHeader from '@/components/Header/FunctionalHeader';
import FunctionalThemesMenu from '@/components/ThemesMenu/FunctionalThemeMenu';
import { Page } from '@/styles/common';

import { Container } from './styles';

const FunctionalSettingsPage: React.FC = () => {
  return (
    <Page>
      <FunctionalHeader />
      <Container>
        <h1>Settings</h1>
        <FunctionalThemesMenu />
        <FunctionalClearHistoryButton />
      </Container>
    </Page>
  );
};

export default FunctionalSettingsPage;
