import React from 'react';
import { SettingsButton } from '@/styles/common';
import { useDispatch } from 'react-redux';
import { clearAllHistory } from '@/store/actions/historyActionCreators';

const ClearHistoryButton: React.FC = () => {
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(clearAllHistory());
  };
  return (
    <SettingsButton width={200} height={40} onClick={handleClick}>
      Clear all history
    </SettingsButton>
  );
};

export default ClearHistoryButton;
