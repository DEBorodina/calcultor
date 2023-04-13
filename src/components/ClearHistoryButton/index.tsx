import React from 'react';
import { useDispatch } from 'react-redux';

import { Dispatch } from 'redux';

import { clearAllHistory } from '@/store/actions/historyActionCreators';
import { ClearAllHistoryAction } from '@/store/actions/types';
import { SettingsButton } from '@/styles/common';

const ClearHistoryButton: React.FC = () => {
  const dispatch = useDispatch<Dispatch<ClearAllHistoryAction>>();

  const handleClick = (): void => {
    dispatch(clearAllHistory());
  };

  return (
    <SettingsButton onClick={handleClick}>Clear all history</SettingsButton>
  );
};

export default ClearHistoryButton;
