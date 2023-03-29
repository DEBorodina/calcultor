import React, { useState } from 'react';
import {
  HistoryList,
  HistoryListItem,
  HistoryWithScroll,
  ShowButton,
} from './styles';

const FunctionalHistory: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <HistoryWithScroll>
      <ShowButton onClick={handleIsOpen}>History</ShowButton>
      {isOpen && (
        <HistoryList>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
          <HistoryListItem>2+2=4</HistoryListItem>
        </HistoryList>
      )}
    </HistoryWithScroll>
  );
};

export default FunctionalHistory;
