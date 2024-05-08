import styled from 'styled-components';

export const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 2rem;
  padding-top: 1rem;

  display: grid;
  gap: 1rem;
  grid-template-columns: 954px 302px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'slide upcoming-tournaments'
    'top-games general-chat';

  .slide {
    grid-area: slide;
  }

  .top-games {
    grid-area: top-games;
  }

  .upcoming-tournaments {
    grid-area: upcoming-tournaments;
  }

  .general-chat {
    grid-area: general-chat;
  }
`;
