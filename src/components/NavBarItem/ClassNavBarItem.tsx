import React, { Component } from 'react';

import withRouter, { WithRouterProps } from '@/utils/hocs/withRouter';

import { MenuListItem, NavBarLink } from './styles';
import { ListItemProps } from './types';

class ClassNavBarItemWithRouter extends Component<
  { router: WithRouterProps } & ListItemProps
> {
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
