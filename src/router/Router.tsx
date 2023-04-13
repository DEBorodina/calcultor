import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTE_NAMES } from '@/constants/routesNames';
import ClassCalculatorPage from '@/pages/ClassCalculatorPage';
import ClassSettingsPage from '@/pages/ClassSettingsPage';
import FunctionalCalculatorPage from '@/pages/FunctionalCalculatorPage';
import FunctionalSettingsPage from '@/pages/FunctionalSettingsPage';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_CALCULATOR}
        element={<FunctionalCalculatorPage />}
      />
      <Route
        path={ROUTE_NAMES.CLASS_CALCULATOR}
        element={<ClassCalculatorPage />}
      />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_SETTINGS}
        element={<FunctionalSettingsPage />}
      />
      <Route
        path={ROUTE_NAMES.CLASS_SETTINGS}
        element={<ClassSettingsPage />}
      />
      <Route
        path="*"
        element={
          <Navigate to={ROUTE_NAMES.FUNCTIONAL_CALCULATOR} replace={true} />
        }
      />
    </Routes>
  );
};
