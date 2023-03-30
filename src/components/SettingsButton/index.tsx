import { StyledSettingsButton } from './styles';
import React from 'react';

export interface SettingsButtonProps {
  children: string | React.ReactNode;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({
  children,
  ...props
}) => {
  return <StyledSettingsButton {...props}>{children}</StyledSettingsButton>;
};

export default SettingsButton;