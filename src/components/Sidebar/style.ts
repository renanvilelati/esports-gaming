import styled from 'styled-components';

interface iStyledAsideProps {
  sidebarIsOpen: boolean;
}

export const StyledSidebar = styled.aside<iStyledAsideProps>`
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 2;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  &::affter {
    content: '';
    position: absolute;
    top: 20px;
    right: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  .show {
    transform: translateY(0);
  }

  .logo {
    text-align: center;
    position: relative;
  }

  .logo img {
    cursor: pointer;
    margin-top: 2rem;
    width: 72px;
  }

  nav {
    padding-top: 2rem;
    width: 100%;
    height: 100%;

    ul {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;
    }

    li {
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: left;
      width: 100%;
      cursor: pointer;
      transition: all 0.4s;
      position: relative;

      &:hover::after {
        content: '\\25C6';
        position: absolute;
        top: 50%;
        left: 50px;
        transform: translateY(-50%);
        color: ${({ theme }) => theme.colors.placeholder};
      }

      &.active::after {
        content: '\\25C6';
        position: absolute;
        top: 50%;
        left: 50px;
        transform: translateY(-50%);
        color: ${({ theme }) => theme.colors.primary};
      }

      a {
        display: flex;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.body};
        align-items: center;
        gap: 1rem;
        color: ${({ theme }) => theme.colors.white};
        padding-left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? 5 : 2.2)}rem;
      }

      &:last-of-type {
        margin-top: auto;
        margin-bottom: 10rem;
      }
    }
  }
`;
