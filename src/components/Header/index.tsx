import React from 'react';
import { Container, StyledHeader, Title } from './styles';
import NavBar from '../NavBar';

const Header = () => {
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
