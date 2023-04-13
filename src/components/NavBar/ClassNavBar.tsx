import { Component } from 'react';

import { ROUTE_NAMES } from '@/constants/routesNames';

import ClassNavBarItem from '../NavBarItem/ClassNavBarItem';
import { Menu } from './styles';

export default class ClassNavBar extends Component {
  render() {
    return (
      <Menu>
        <ClassNavBarItem to={ROUTE_NAMES.FUNCTIONAL_CALCULATOR}>
          Home(FC)
        </ClassNavBarItem>
        <ClassNavBarItem to={ROUTE_NAMES.CLASS_CALCULATOR}>
          Home(CC)
        </ClassNavBarItem>
        <ClassNavBarItem to={ROUTE_NAMES.FUNCTIONAL_SETTINGS}>
          Settings(FC)
        </ClassNavBarItem>
        <ClassNavBarItem to={ROUTE_NAMES.CLASS_SETTINGS}>
          Settings(CC)
        </ClassNavBarItem>
      </Menu>
    );
  }
}
