import React, { useState } from 'react';
import {
  HistoryList,
  HistoryListItem,
  HistoryWithScroll,
  ShowButton,
  Text,
} from './styles';
import { useSelector } from 'react-redux';
import { GlobalStore } from '@/store/reducers';

const FunctionalHistory: React.FC = () => {
  const history: string[] = useSelector(
    (state: GlobalStore) => state.history.funcHistory
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <HistoryWithScroll>
      <ShowButton onClick={handleIsOpen}>History</ShowButton>
      {isOpen &&
        (history.length > 0 ? (
          <HistoryList>
            {history.map((item, index) => (
              <HistoryListItem key={index}>{item}</HistoryListItem>
            ))}
          </HistoryList>
        ) : (
          <Text>No history yet</Text>
        ))}
    </HistoryWithScroll>
  );
};

export default FunctionalHistory;
