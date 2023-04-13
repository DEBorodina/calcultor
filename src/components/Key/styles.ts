import styled from 'styled-components';

import { StyledButton } from '@/styles/common';

export const Key = styled(StyledButton)`
  width: 80px;
  height: 80px;
  font-size: 1.3em;
  font-weight: 100;
  display:flex;
  justify-content:center;

  @media (max-width: 1000px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 800px) {
    width: 50px;
    height: 50px;
  }
  
  @media (max-width: 320px) {
    width: 40px;
    height: 40px;
  }
}
`;
