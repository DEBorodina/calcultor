import FunctionalCalculator from '@/components/FunctionalCalculator';
import Header from '@/components/Header';
import { Container } from './style';
import FunctionalHistory from '@/components/FunctionalHistory';
import { Page } from '@/styles/common';

const FunctionalCalculatorPage = () => {
  return (
    <Page>
      <Container>
        <Header />
        <FunctionalCalculator />
        <FunctionalHistory />
      </Container>
    </Page>
  );
};

export default FunctionalCalculatorPage;
