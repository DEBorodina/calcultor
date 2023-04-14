import React, { Component, createRef, RefObject } from 'react';

import {
  Container,
  DropDownButton,
  Item,
  Label,
  Menu,
  Options,
} from './styles';
import { DropDownProps, DropDownState, Option } from './types';

export default class ClassDropDown extends Component<
  DropDownProps,
  DropDownState
> {
  private menu: RefObject<HTMLInputElement>;

  constructor(props: DropDownProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.menu = createRef();
  }

  handleToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  handleClickOutside = ({ target }: MouseEvent) => {
    if (this.menu.current && !this.menu.current.contains(target as Node)) {
      this.setState({ isOpen: false });
    }
  };

  onChooseOption = (option: string) => () => {
    this.setState({ isOpen: false });
    this.props.handleChooseOption(option);
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { option: currentOption }: Option = this.props.options.find(
      ({ isActive }) => isActive
    )!;

    return (
      <Container>
        <Label>{this.props.label}</Label>
        <Menu ref={this.menu} data-cy="drop-down-menu">
          <DropDownButton
            onClick={this.handleToggle}
            isOpen={this.state.isOpen}
            data-cy="drop-down-button"
          >
            {currentOption}
          </DropDownButton>
          {this.state.isOpen && (
            <Options>
              {this.props.options.map(
                ({ option, isActive }) =>
                  !isActive && (
                    <Item
                      key={option}
                      onClick={this.onChooseOption(option)}
                      data-cy="drop-down-item"
                    >
                      {option}
                    </Item>
                  )
              )}
            </Options>
          )}
        </Menu>
      </Container>
    );
  }
}
