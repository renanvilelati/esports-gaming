import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';

export const StyledUpcomingTournaments = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  max-height: 475px;
  overflow-y: auto;
  overflow: hidden;
  padding: 1.5rem;
  border-radius: 1.5rem;

  .logo {
    display: flex;
  }

  &::-webkit-scrollbar {
    height: 5px;
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
  }

  .header h4 {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${({ theme }) => theme.colors.body};
  }

  .btn-wrapper {
    text-align: center;
    padding-top: 1rem;
  }

  .see-more-btn {
    background: transparent;
    color: ${({ theme }) => theme.colors.body2};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};

    }
  }

  @media ${breakpoints.sm} {
    .header {
      padding: 0 1rem;
    }
  }
`;

export const StyledTournamentList = styled.div``;

export const StyledTournamentItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:nth-of-type(1) {
    padding-top: 1.5rem;
    background-color: red !important;
  }

  .tournament-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h4 {
      font-size: 0.875rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.body};
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .prizes-teams {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .prize {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        color: ${({ theme }) => theme.colors.warning};
      }

      span {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.body};
      }
    }

    .teams {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
      span {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.body};
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.colors.placeholder};
    }

    span {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }

  .tournament-logo {
    max-width: 50px;
  }

  .game-logo {
    height: 17px;
    object-fit: cover;
  }

  @media ${breakpoints.sm} {
    padding: 1rem;
  }
`;
