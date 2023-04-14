import { Component } from 'react';

import ClassNavBar from '../NavBar/ClassNavBar';
import { Container, StyledHeader, Title } from './styles';

export default class ClassHeader extends Component {
  constructor() {
    super({});
  }

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
