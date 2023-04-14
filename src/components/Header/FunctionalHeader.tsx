import React from 'react';

import FunctionalNavBar from '../NavBar/FunctionalNavBar';
import { Container, StyledHeader, Title } from './styles';

const Header: React.FC = () => (
  <StyledHeader>
    <Container>
      <Title>Calculator App</Title>
      <FunctionalNavBar />
    </Container>
  </StyledHeader>
);

export default Header;
