import { StyledButton } from '@/styles/common';
import styled from 'styled-components';

export const Key = styled(StyledButton)`
  width: 80px;
  height: 80px;
  font-size: 1.3em;
  font-weight: 100;
  display:flex;
  justify-content:center;
  @media (max-width: 920px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 280px) {
    width: 40px;
    height: 40px;
  }
}
`;
