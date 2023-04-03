import { Component } from 'react';
import ClassCalculator from '@/components/Calculator/ClassCalculator';
import Header from '@/components/Header';
import { Container } from '../FunctionalCalculatorPage/style';
import FunctionalHistory from '@/components/History/ClassHistory';
import { Page } from '@/styles/common';

export default class ClassCalculatorPage extends Component {
  render() {
    return (
      <Page>
        <Container>
          <Header />
          <ClassCalculator />
          <FunctionalHistory />
        </Container>
      </Page>
    );
  }
}
