import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { GlobalStore } from '@/store/types';

import {
  HistoryList,
  HistoryListItem,
  HistoryWithScroll,
  ShowButton,
  Text,
} from './styles';

const FunctionalHistory: React.FC = () => {
  const history: string[] = useSelector<GlobalStore, string[]>(
    (state: GlobalStore) => state.history.funcHistory
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <HistoryWithScroll>
      <ShowButton onClick={handleIsOpen} data-cy="history-button">
        History
      </ShowButton>
      {isOpen &&
        (history.length > 0 ? (
          <HistoryList data-cy="history-list">
            {history.map((item, index) => (
              <HistoryListItem key={`history-list-item__${index}`}>
                {item}
              </HistoryListItem>
            ))}
          </HistoryList>
        ) : (
          <Text data-cy="no-history">No history yet</Text>
        ))}
    </HistoryWithScroll>
  );
};

export default memo(FunctionalHistory);
