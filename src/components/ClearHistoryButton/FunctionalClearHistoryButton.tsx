import React from 'react';

import { useTypedDispatch } from '@/hooks/';
import { clearAllHistory } from '@/store/actions/historyActionCreators';
import { SettingsButton } from '@/styles/common';

const ClearHistoryButton: React.FC = () => {
  const dispatch = useTypedDispatch();

  const handleClick = (): void => {
    dispatch(clearAllHistory());
  };

  return (
    <SettingsButton onClick={handleClick}>Clear all history</SettingsButton>
  );
};

export default ClearHistoryButton;
