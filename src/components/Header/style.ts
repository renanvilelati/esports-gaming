import styled from 'styled-components';

interface StyledHeaderProps {
  isLightTheme: boolean
}

export const StyledHeader = styled.div<StyledHeaderProps>`
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem 216px 1rem 2rem;
  align-items: center;
  display: flex;
  justify-content: space-between;

  .input-wrapper {
    width: 300px;
    height: 40px;
    background: ${({ theme }) => theme.colors.chatCardBackground};
    border-radius: 8px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.border};

    svg {
      position: absolute;
      left: 4%;
      color: ${({ theme }) => theme.colors.placeholder};
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }

    input {
      height: 100%;
      width: 100%;
      color: ${({ theme }) => theme.colors.body2};
      background: transparent;
      border: none;
      padding: 0 2.5rem;
    }
  }

  .profile-wrapper {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    cursor: pointer;
  }

  .profile {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    .user-name {
      color: ${({ theme }) => theme.colors.body};
      font-size: 0.875rem;
    }
  }

  .diamond {
    color: ${({ theme }) => theme.colors.primary};
  }

  .arrow-down {
    color: ${({ theme }) => theme.colors.body2};
  }

  .score {
    display: flex;
    gap: 0.5rem;
  }

  .score span {
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: 0.75rem;
  }

  .theme-btn {
    width: 80px;
    height: 40px;
    display: flex;
    border-radius: 24px;
    align-items: center;
    background-color: ${({ isLightTheme }) => isLightTheme ? '#FFF' :  '#151515'};
    justify-content: space-evenly;
    cursor: pointer;
  }



  .theme-btn-active {
    background-color: #d9d9d9;
    color: ${({ theme }) => theme.colors.black};
  }
  
  .theme-icon {
    padding: 0.4rem;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    transition: background-color 0.8s;
    color: ${({ theme }) => theme.colors.placeholder};
  }  

  .notification {
    position: relative;
  }

  .notification .bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    right: 2px;
    background-color: ${({ theme }) => theme.colors.error};
  }

  .notification-icon {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
