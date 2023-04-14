import { Component } from 'react';

import ClassClearHistoryButton from '@/components/ClearHistoryButton/ClassClearHistoryButton';
import ClassHeader from '@/components/Header/ClassHeader';
import ClassThemesMenu from '@/components/ThemesMenu/ClassThemeMenu';
import { Page, SettingsPageContainer } from '@/styles/common';

class ClassSettingsPage extends Component {
  constructor() {
    super({});
  }

  render() {
    return (
      <Page>
        <ClassHeader />
        <SettingsPageContainer>
          <h1>Settings</h1>
          <ClassThemesMenu />
          <ClassClearHistoryButton />
        </SettingsPageContainer>
      </Page>
    );
  }
}

export default ClassSettingsPage;
