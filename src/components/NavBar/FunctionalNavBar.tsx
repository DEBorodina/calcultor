import React from 'react';

import { ROUTE_NAMES } from '@/constants/routesNames';

import FunctionalNavBarItem from '../NavBarItem/FunctionalNavBarItem';
import { Menu } from './styles';

const NavBar: React.FC = () => (
  <Menu>
    <FunctionalNavBarItem to={ROUTE_NAMES.FUNCTIONAL_CALCULATOR}>
      Home(FC)
    </FunctionalNavBarItem>
    <FunctionalNavBarItem to={ROUTE_NAMES.CLASS_CALCULATOR}>
      Home(CC)
    </FunctionalNavBarItem>
    <FunctionalNavBarItem to={ROUTE_NAMES.FUNCTIONAL_SETTINGS}>
      Settings(FC)
    </FunctionalNavBarItem>
    <FunctionalNavBarItem to={ROUTE_NAMES.CLASS_SETTINGS}>
      Settings(CC)
    </FunctionalNavBarItem>
  </Menu>
);

export default NavBar;
