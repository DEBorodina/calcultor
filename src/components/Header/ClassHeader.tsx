import { Component } from 'react';

import ClassNavBar from '../NavBar/ClassNavBar';
import { Container, StyledHeader, Title } from './styles';

export default class ClassHeader extends Component {
  render() {
    return (
      <StyledHeader>
        <Container>
          <Title>Calculator App</Title>
          <ClassNavBar />
        </Container>
      </StyledHeader>
    );
  }
}
