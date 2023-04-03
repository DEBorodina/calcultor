import FunctionalCalculator from '@/components/Calculator/FunctionalCalculator';
import Header from '@/components/Header';
import { Container } from './style';
import FunctionalHistory from '@/components/History/FunctionalHistory';
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
