import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTE_NAMES } from '@/constants/routesNames';
import ClassCalculatorPage from '@/pages/ClassCalculatorPage';
import FunctionalCalculatorPage from '@/pages/FunctionalCalculatorPage';
import SettingsPage from '@/pages/SettingsPage';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_NAMES.FUCTIONAL_CALCULATOR}
        element={<FunctionalCalculatorPage />}
      />
      <Route
        path={ROUTE_NAMES.CLASS_CALCULATOR}
        element={<ClassCalculatorPage />}
      />
      <Route path={ROUTE_NAMES.SETTINGS} element={<SettingsPage />} />
      <Route
        path="*"
        element={
          <Navigate to={ROUTE_NAMES.FUCTIONAL_CALCULATOR} replace={true} />
        }
      />
    </Routes>
  );
};
