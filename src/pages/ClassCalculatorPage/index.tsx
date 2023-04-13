import { Component } from 'react';

import ClassCalculator from '@/components/Calculator/ClassCalculator';
import Header from '@/components/Header';
import FunctionalHistory from '@/components/History/ClassHistory';
import { Page, PageContainer } from '@/styles/common';

export default class ClassCalculatorPage extends Component {
  render() {
    return (
      <Page>
        <PageContainer>
          <Header />
          <ClassCalculator />
          <FunctionalHistory />
        </PageContainer>
      </Page>
    );
  }
}
