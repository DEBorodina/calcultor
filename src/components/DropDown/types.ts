export interface Option {
  option: string;
  isActive: boolean;
}

export interface DropDownProps {
  options: Option[];
  label: string;
  handleChooseOption: (...args: any[]) => void;
}

export interface DropDownButtonProps {
  isOpen: boolean;
}
