import React from 'react';

import { clearAllHistory } from '@/store/actions/historyActionCreators';
import { SettingsButton } from '@/styles/common';
import { useTypedDispatch } from '@/utils/hooks/useTypedDispatch';

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
