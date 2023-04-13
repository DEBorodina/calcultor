import React, { useEffect, useRef, useState } from 'react';

import {
  Container,
  DropDownButton,
  Item,
  Label,
  Menu,
  Options,
} from './styles';
import { DropDownProps, Option } from './types';

const DropDown: React.FC<DropDownProps> = ({
  options,
  label,
  handleChooseOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menu = useRef<HTMLDivElement>(null);

  const handleToggle = (): void => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleClickOutside = ({ target }: MouseEvent): void => {
    if (menu.current && !menu.current.contains(target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menu]);

  const onChooseOption =
    (option: string): (() => void) =>
    () => {
      setIsOpen(false);
      handleChooseOption(option);
    };

  const { option: currentOption }: Option = options.find(
    ({ isActive }) => isActive
  )!;

  return (
    <Container>
      <Label>{label}</Label>
      <Menu ref={menu} data-cy="drop-down-menu">
        <DropDownButton
          onClick={handleToggle}
          isOpen={isOpen}
          data-cy="drop-down-button"
        >
          {currentOption}
        </DropDownButton>
        {isOpen && (
          <Options>
            {options.map(
              ({ option, isActive }) =>
                !isActive && (
                  <Item
                    key={option}
                    onClick={onChooseOption(option)}
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
};

export default DropDown;
