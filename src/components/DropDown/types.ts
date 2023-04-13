export interface Option {
  option: string;
  isActive: boolean;
}

export interface DropDownProps {
  options: Option[];
  label: string;
  handleChooseOption: (option: string) => void;
}

export interface DropDownButtonProps {
  isOpen: boolean;
}

export interface DropDownState {
  isOpen: boolean;
}
