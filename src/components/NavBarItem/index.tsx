import { useLocation } from 'react-router-dom';

import { MenuListItem, NavBarLink } from './styles';
import { ListItemProps } from './types';

const NavBarItem: React.FC<ListItemProps> = ({ to, children }) => {
  const { pathname } = useLocation();
  return (
    <MenuListItem>
      <NavBarLink to={to} active={(pathname == to).toString()}>
        {children}
      </NavBarLink>
    </MenuListItem>
  );
};

export default NavBarItem;
