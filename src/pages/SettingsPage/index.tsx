import Header from '@/components/Header';
import { Container } from './styles';
import React from 'react';
import { Page } from '@/styles/common';
import ClearHistoryButton from '@/components/ClearHistoryButton';
import ThemesMenu from '@/components/ThemesMenu';

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
