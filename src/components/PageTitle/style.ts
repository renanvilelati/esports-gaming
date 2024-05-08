import styled from "styled-components";

export const StyledPageTitle = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 2rem;
  h2 {
    color: ${({theme}) => theme.colors.body2};
  }

  span {
    font-weight: 400;
  }
`
