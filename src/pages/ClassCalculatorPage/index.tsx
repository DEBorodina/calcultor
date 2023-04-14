import { Component } from 'react';

import ClassCalculator from '@/components/Calculator/ClassCalculator';
import ClassHeader from '@/components/Header/ClassHeader';
import ClassHistory from '@/components/History/ClassHistory';
import { CalculatorPageContainer, Page } from '@/styles/common';

export default class ClassCalculatorPage extends Component {
  constructor() {
    super({});
  }

  render() {
    return (
      <Page>
        <CalculatorPageContainer>
          <ClassHeader />
          <ClassCalculator />
          <ClassHistory />
        </CalculatorPageContainer>
      </Page>
    );
  }
}
