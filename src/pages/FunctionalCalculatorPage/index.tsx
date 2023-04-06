import FunctionalCalculator from '@/components/Calculator/FunctionalCalculator';
import Header from '@/components/Header';
import FunctionalHistory from '@/components/History/FunctionalHistory';
import { Page, PageContainer } from '@/styles/common';

const FunctionalCalculatorPage: React.FC = () => {
  return (
    <Page>
      <PageContainer>
        <Header />
        <FunctionalCalculator />
        <FunctionalHistory />
      </PageContainer>
    </Page>
  );
};

export default FunctionalCalculatorPage;
