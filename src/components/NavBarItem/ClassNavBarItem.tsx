import React, { Component } from 'react';

import withRouter from '@/hocs/withRouter/';

import { MenuListItem, NavBarLink } from './styles';
import { ListItemWithRouterProps } from './types';

class ClassNavBarItemWithRouter extends Component<ListItemWithRouterProps> {
  constructor(props: ListItemWithRouterProps) {
    super(props);
  }

  render() {
    return (
      <MenuListItem>
        <NavBarLink
          to={this.props.to}
          active={(
            this.props.router.location.pathname === this.props.to
          ).toString()}
        >
          {this.props.children}
        </NavBarLink>
      </MenuListItem>
    );
  }
}

export default withRouter(ClassNavBarItemWithRouter);
