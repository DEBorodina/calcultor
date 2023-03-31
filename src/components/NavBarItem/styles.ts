import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuListItem = styled.li`
  text-align: center;
`;

interface NavBarLinkProps {
  active: string;
}

export const NavBarLink = styled(Link)<NavBarLinkProps>`
  opacity: ${({ active }) => (active == 'true' ? 1 : 0.6)};
  color: #ffffff;
  font-size: 16px;
`;
