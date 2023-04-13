import React from 'react';

import { ROUTE_NAMES } from '@/constants/routesNames';

import NavBarItem from '../NavBarItem';
import { Menu } from './styles';

const NavBar: React.FC = () => {
  return (
    <Menu>
      <NavBarItem to={ROUTE_NAMES.FUCTIONAL_CALCULATOR}>Home(FC)</NavBarItem>
      <NavBarItem to={ROUTE_NAMES.CLASS_CALCULATOR}>Home(CC)</NavBarItem>
      <NavBarItem to={ROUTE_NAMES.SETTINGS}>Settings(FC)</NavBarItem>
      <NavBarItem to={'/'}>Settings(CC)</NavBarItem>
    </Menu>
  );
};

export default NavBar;
