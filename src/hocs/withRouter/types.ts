import { useLocation, useNavigate } from 'react-router-dom';

export interface RouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export type WithRouterProps<T> = { router: RouterProps } & T;
