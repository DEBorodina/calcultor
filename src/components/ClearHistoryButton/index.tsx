import React from 'react';
import SettingsButton from '../SettingsButton';
import { useDispatch } from 'react-redux';
import { clearAllHistory } from '@/store/actions/historyActionCreators';

const ClearHistoryButton: React.FC = () => {
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(clearAllHistory());
  };
  return (
    <SettingsButton onClick={handleClick}>Clear all history</SettingsButton>
  );
};

export default ClearHistoryButton;
