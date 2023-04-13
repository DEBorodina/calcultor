import FunctionalCalculator from '@/components/Calculator/FunctionalCalculator';
import FunctionalHeader from '@/components/Header/FunctionalHeader';
import FunctionalHistory from '@/components/History/FunctionalHistory';
import { Page, PageContainer } from '@/styles/common';

const FunctionalCalculatorPage: React.FC = () => {
  return (
    <Page>
      <PageContainer>
        <FunctionalHeader />
        <FunctionalCalculator />
        <FunctionalHistory />
      </PageContainer>
    </Page>
  );
};

export default FunctionalCalculatorPage;
