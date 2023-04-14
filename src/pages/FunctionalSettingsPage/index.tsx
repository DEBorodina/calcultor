import React from 'react';

import FunctionalClearHistoryButton from '@/components/ClearHistoryButton/FunctionalClearHistoryButton';
import FunctionalHeader from '@/components/Header/FunctionalHeader';
import FunctionalThemesMenu from '@/components/ThemesMenu/FunctionalThemeMenu';
import { Page, SettingsPageContainer } from '@/styles/common';

const FunctionalSettingsPage: React.FC = () => (
  <Page>
    <FunctionalHeader />
    <SettingsPageContainer>
      <h1>Settings</h1>
      <FunctionalThemesMenu />
      <FunctionalClearHistoryButton />
    </SettingsPageContainer>
  </Page>
);

export default FunctionalSettingsPage;
