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
  color: ${(props): string => props.theme.headerTextColor};
  font-size: 0.7em;

  &:hover {
    transition: 0.2s;
    opacity: 0.8;
  }

  &:active {
    transition: 0.2s;
    opacity: 0.7;
  }
`;
