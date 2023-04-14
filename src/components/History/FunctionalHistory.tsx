import React, { memo, useState } from 'react';

import { useTypedSelector } from '@/hooks/';

import {
  HistoryList,
  HistoryListItem,
  HistoryWithScroll,
  ShowButton,
  Text,
} from './styles';

const FunctionalHistory: React.FC = () => {
  const history = useTypedSelector((state) => state.history.funcHistory);

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
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
