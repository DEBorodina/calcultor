import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuListItem = styled.li`
  text-align: center;
`;

interface NavBarLinkProps {
  active: string;
}

export const NavBarLink = styled(Link)<NavBarLinkProps>`
  color: ${({ active }) => (active == 'true' ? '#ffffff' : '#b1b1b1')};
  font-size: 16px;
`;
