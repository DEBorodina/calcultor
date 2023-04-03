import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTE_NAMES } from '@/constants/routesNames';
import FunctionalCalculatorPage from '@/pages/FunctionalCalculatorPage';
import SettingsPage from '@/pages/SettingsPage';
import ClassCalculatorPage from '@/pages/ClassCalculatorPage';
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
