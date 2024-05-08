import styled from 'styled-components';

interface iStyledContainerProps {
  sidebarIsOpen: boolean;
}
export const StyledContainer = styled.div<iStyledContainerProps>`
  height: calc(100vh - 80px);
  width: 100%;
  padding-left: 280px;

`;
