import FunctionalCalculator from '@/components/FunctionalCalculator';
import Header from '@/components/Header';
import { Container } from './style';
import FunctionalHistory from '@/components/FunctionalHistory';

const FunctionalCalculatorPage = () => {
  return (
    <Container>
      <Header />
      <FunctionalCalculator />
      <FunctionalHistory />
    </Container>
  );
};

export default FunctionalCalculatorPage;
