import React from 'react';

import NavBar from '../NavBar';
import { Container, StyledHeader, Title } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Title>Calculator App</Title>
        <NavBar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
