import styled from 'styled-components';

export const StyledTopGames = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  display: flex;
  position: relative;
  height: 350px;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  h2 {
    font-size: 1.250rem;
    top: -70px;
    left: 70px;
    position: absolute;
    color: ${({ theme }) => theme.colors.body};
    font-weight: 600;
  }

  .background img {
    border-radius: 2rem;
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
`;
