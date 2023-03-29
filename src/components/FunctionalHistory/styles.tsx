import styled, { css } from 'styled-components';

export const ScrollWrapper = css`
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #707070;
    width: 10px;
    height: 20px;
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
  border-left: 1px solid #707070;
`;

export const HistoryWithScroll = styled(History)`
  ${ScrollWrapper}
`;

export const ShowButton = styled.button`
  margin-bottom: 30px;
  width: 120px;
  height: 30px;
  border: 1px solid #707070;
  border-radius: 10px;
  font-size: 24px;
  background-color: #ffffff;
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
  border-bottom: 1px solid #707070;
`;
