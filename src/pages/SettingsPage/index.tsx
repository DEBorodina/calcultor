import React from 'react';

import ClearHistoryButton from '@/components/ClearHistoryButton';
import Header from '@/components/Header';
import ThemesMenu from '@/components/ThemesMenu';
import { Page } from '@/styles/common';

import { Container } from './styles';

const SettingsPage: React.FC = () => {
  return (
    <Page>
      <Header />
      <Container>
        <h1>Settings</h1>
        <ThemesMenu />
        <ClearHistoryButton />
      </Container>
    </Page>
  );
};

export default SettingsPage;
