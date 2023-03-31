import { ArrowDown } from '@/styles/common';
import styled, { css } from 'styled-components';

export const ScrollWrapper = css`
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props): string => props.theme.mainColor};
    width: 10px;
    border-radius: 5px;
  }
`;

export const History = styled.div`
  padding: 20px 20px 20px 0;
  height: 100%;
  width: 100%;
  grid-area: sd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid ${(props): string => props.theme.mainColor};
   color:${(props) => props.theme.fontColor}
}
`;

export const HistoryWithScroll = styled(History)`
  ${ScrollWrapper}
`;

export const ShowButton = styled.button`
  margin-bottom: 30px;
  border: none;
  width: 150px;
  height: 30px;
  font-size: 24px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props): string => props.theme.backgroundColor};
  ${ArrowDown}
`;

export const HistoryList = styled.ul`
  width: 90%;
  height: 90%;
`;

export const HistoryListItem = styled.li`
  height: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props): string => props.theme.mainColor};
`;
