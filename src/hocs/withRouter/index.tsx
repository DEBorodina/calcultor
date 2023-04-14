import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { RouterProps } from './types';

function withRouter<CProps extends { router: RouterProps }>(
  Component: React.ComponentType<CProps>
) {
  function ComponentWithRouterProp(props: Omit<CProps, 'router'>) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...(props as CProps)}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
