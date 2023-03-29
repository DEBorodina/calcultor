import React from 'react';
import { Menu } from './styles';
import NavBarItem from '../NavBarItem';
import { ROUTE_NAMES } from '@/constants/routesNames';

const NavBar: React.FC = () => {
  return (
    <Menu>
      <NavBarItem to={ROUTE_NAMES.FUCTIONAL_CALCULATOR}>Home(FC)</NavBarItem>
      <NavBarItem to={ROUTE_NAMES.CLASS_CALCULATOR}>Home(CC)</NavBarItem>
      <NavBarItem to={ROUTE_NAMES.SETTINGS}>Settings</NavBarItem>
    </Menu>
  );
};

export default NavBar;
