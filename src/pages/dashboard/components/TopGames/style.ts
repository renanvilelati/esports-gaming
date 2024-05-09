import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';

export const StyledTopGames = styled.div`
  display: flex;
  position: relative;
  height: 350px;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  h2 {
    font-size: 1.25rem;
    top: -70px;
    left: 70px;
    position: absolute;
    color: ${({ theme }) => theme.colors.body};
    font-weight: 600;
  }

  button.preview,
  button.next {
    position: absolute;
    background: transparent;
    padding: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.body};
    background-color: ${({ theme }) => theme.colors.chatCardBackground};
    border-radius: 50%;
    box-shadow: 0px 13px 15px 0px #0001;
    transition: transform 0.4s;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      transform: translateY(-60%);
    }
  }

  button.preview {
    left: 60px;
  }

  button.next {
    right: 60px;
  }

  .background img {
    border-radius: 2rem;
  }

  .game-list {
    display: flex;
    gap: 0.5rem;
    max-width: 100%;
    overflow-x: scroll;
  }

  .game-item {
    position: relative;
    cursor: pointer;
    padding: 2px;
    border-radius: 2rem;

    &:hover {
      background: linear-gradient(
        0deg,
        #b680ff 0%,
        rgb(125 22 255) 50%,
        rgb(16 16 16 / 0%) 100%
      );
      box-shadow: 0px 30px 20px 13px rgba(0, 0, 0, 0.2);

      .game-logo {
        bottom: 3rem;
      }
    }

    &:nth-of-type(1) {
      margin-bottom: 2.5rem;
    }

    &:nth-of-type(3) {
      margin-bottom: 2.5rem;
    }

    &:nth-of-type(5) {
      margin-bottom: 2.5rem;
    }
  }

  .game-logo {
    width: 120px;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    transition: bottom 0.4s ease-in-out;
  }

  @media ${breakpoints.sm} {
    margin-top: 3rem;
    justify-content: flex-start;
    width: 100vw;
    max-width: 335px;
    gap: 0.5rem;

    h2 {
      left: 0;
      top: 0;
    }

    .game-item:nth-of-type(1),
    .game-item:nth-of-type(3),
    .game-item:nth-of-type(5) {
      margin-bottom: 0;
    }

    button.preview {
      left: -24px;
    }

    button.next {
      right: -16px;
    }

    .background {
      img {
       height: 260px;
     }

    }

    .game-logo {
      width: 80px;
     }
  }
`;
