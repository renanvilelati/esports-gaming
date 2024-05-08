import styled from "styled-components";

export const StyledUpcomingTournaments = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};

  .tournament-item {

  }

  
  .tournament-item .tournament-logo {
    height: 64px;
  }
  
  .tournament-item .game-logo {
    height: 17px;
    object-fit: cover;
  }
`
