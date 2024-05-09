import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const StyledDashboard = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  max-height: 1024px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 2rem;
  padding-top: 1rem;

  display: grid;
  column-gap: 2rem;
  grid-template-columns: 1115px 350px;
  grid-template-rows: 350px 136px 1fr;
  grid-template-areas:
    'slide upcoming-tournaments'
    'top-games upcoming-tournaments'
    'top-games general-chat';

  .slide {
    grid-area: slide;
  }

  .top-games {
    grid-area: top-games;
    padding: 2rem 0;
  }
  
  .upcoming-tournaments {
    padding: 2rem 0;
    grid-area: upcoming-tournaments;
  }
  
  .general-chat {
    padding: 2rem 0;
    grid-area: general-chat;
  }

  @media ${breakpoints.sm} {
    max-height: 100%;
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: 205px 1fr 500px 1fr;
    grid-template-areas:
        'slide'
        'top-games'
        'upcoming-tournaments'
        'general-chat';
  }
`;
