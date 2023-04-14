import FunctionalCalculator from '@/components/Calculator/FunctionalCalculator';
import FunctionalHeader from '@/components/Header/FunctionalHeader';
import FunctionalHistory from '@/components/History/FunctionalHistory';
import { CalculatorPageContainer, Page } from '@/styles/common';

const FunctionalCalculatorPage: React.FC = () => {
  return (
    <Page>
      <CalculatorPageContainer>
        <FunctionalHeader />
        <FunctionalCalculator />
        <FunctionalHistory />
      </CalculatorPageContainer>
    </Page>
  );
};

export default FunctionalCalculatorPage;
