import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  DropDownButton,
  Item,
  Label,
  Options,
  Menu,
} from './styles';

export interface Option {
  option: string;
  isActive: boolean;
}

export interface DropDownProps {
  options: Option[];
  label: string;
  handleChooseOption: (...args: any[]) => void;
}

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

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent): void => {
      if (menu.current && !menu.current.contains(target as Node)) {
        setIsOpen(false);
      }
    };
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
          width={200}
          height={40}
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
