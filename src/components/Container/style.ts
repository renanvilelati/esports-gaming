import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

interface iStyledContainerProps {
  sidebarIsOpen: boolean;
}
export const StyledContainer = styled.div<iStyledContainerProps>`
  height: calc(100vh - 109px);
  width: 100%;
  padding-left: 160px;
  
  @media ${breakpoints.sm} {
    padding-left: 0;
  }
`;
