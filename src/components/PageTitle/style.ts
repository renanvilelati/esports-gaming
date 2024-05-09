import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

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

  @media ${breakpoints.sm} {

    h2 {
      font-size: 1.25rem;
      padding: 1rem 0;
    }

  }
`
