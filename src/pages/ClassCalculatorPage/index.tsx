import { Component } from 'react';

import ClassCalculator from '@/components/Calculator/ClassCalculator';
import ClassHeader from '@/components/Header/ClassHeader';
import FunctionalHistory from '@/components/History/ClassHistory';
import { Page, PageContainer } from '@/styles/common';

export default class ClassCalculatorPage extends Component {
  render() {
    return (
      <Page>
        <PageContainer>
          <ClassHeader />
          <ClassCalculator />
          <FunctionalHistory />
        </PageContainer>
      </Page>
    );
  }
}
