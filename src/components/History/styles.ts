import styled, { css } from 'styled-components';

import { ArrowDown } from '@/styles/common';

export const ScrollWrapper = css`
  overflow: scroll;
  position: relative;

  &::-webkit-scrollbar {
    width: 17px;
    height: 17px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props): string => props.theme.mainColor};
    border-left: 10px solid rgba(0, 0, 0, 0);
    border-top: 10px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }
`;

export const History = styled.div`
  padding-top: 20px;
  height: calc(100vh - 70px);
  width: 100%;
  grid-area: sd;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid ${(props): string => props.theme.mainColor};
  color:${(props) => props.theme.fontColor};

  @media (max-width: 700px) {
    height: fit-content;
    border-left: none;
  }
}
`;

export const HistoryWithScroll = styled(History)`
  ${ScrollWrapper}
`;

export const ShowButton = styled.button`
  margin-bottom: 30px;
  border: none;
  width: 120px;
  text-align: left;
  height: 30px;
  font-size: 24px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props): string => props.theme.backgroundColor};

  &:hover {
    cursor: pointer;
  }
  ${ArrowDown}
`;

export const HistoryList = styled.ul`
  display: grid;
  grid-auto-rows: min-content;
  width: 100%;
  height: 90%;
  padding-left: 20px;

  @media (max-width: 700px) {
    height: fit-content;
  }
`;

export const HistoryListItem = styled.li`
  height: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 16px;
  border-bottom: 1px solid ${(props): string => props.theme.mainColor};
`;

export const Text = styled.p`
  width: 115px;
  text-align: left;
  font-size: 16px;
`;
