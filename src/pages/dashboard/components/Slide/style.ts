import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';

interface StyledSlideProps {
  isLightTheme: boolean;
}

export const StyledSlide = styled.div<StyledSlideProps>`
  position: relative;
  cursor: pointer;

  .bullets {
    display: flex;
    /* height: 2rem; */
    gap: 0.2rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);

    span {
      width: 0.75rem;
      height: 0.25rem;
      display: inline-block;
      border-radius: 8px;
      transition: all 0.4s;
      background-color: ${({ theme }) => theme.colors.placeholder};
    }

    span.active {
      width: 2rem;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes fly {
    50% {
      transform: translateY(-6.2px) scale(1.01);
    }
  }

  &:hover {
    .see-more-wrapper {
      opacity: 1;
      scale: 1;
    }

    .background {
      scale: 1.02;
      opacity: ${({ isLightTheme }) => (isLightTheme ? 'initial' : '0.1')};
    }

    .slide-image {
      scale: 1.01;
      animation: fly 5s infinite;
    }
  }

  .background {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/lolg-bg.jpg');
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    opacity: ${({ isLightTheme }) => (isLightTheme ? 1 : 0.2)};
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    border-radius: 1.5rem;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background: linear-gradient(
        90deg,
        rgba(14, 14, 14, 50) 0%,
        rgba(14, 14, 14, 0) 49%,
        rgba(14, 14, 14, 50) 100%
      );
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background: ${({ isLightTheme }) => (isLightTheme ? '#0005' : 'initial')};
    }
  }

  .content {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 4rem;

    .text p {
      padding-top: 1.5rem;
    }

    .players-quantity {
      justify-self: self-end;
    }
  }

  .slide-image {
    position: absolute;
    top: -104px;
    width: 570px;
    right: -16px;
    z-index: 5;
    transition: all 1s;
  }

  .text {
    h2 {
      font-size: 2rem;
      color: #eee;
    }

    p {
      font-size: 0.875rem;
      width: 40%;
      color: #ccc;
    }
  }

  .players-quantity {
    display: flex;
    gap: 0.5rem;

    .avatars {
      position: relative;
      width: 100px;
    }

    .avatars img:nth-of-type(1) {
      left: 50px;
    }

    .avatars img:nth-of-type(2) {
      left: 25px;
    }

    .avatars img:nth-of-type(3) {
      left: 0px;
    }

    .avatars img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      position: absolute;
    }

    .quantity {
      color: ${({ theme }) => theme.colors.body};
      background-color: ${({ theme }) => theme.colors.cardBackground};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 24px;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .see-more-wrapper {
    position: absolute;
    right: 50px;
    top: 24px;
    text-align: end;
    width: 10rem;
    height: 40px;
    padding: 0.5rem 2rem;
    border-radius: 16px;
    background: linear-gradient(90deg, rgba(17, 17, 17, 0.46) 0%, #3e2347 100%);
    opacity: 0;
    scale: 0;
    transition: opacity 1s ease-in-out;
    z-index: 10;

    button {
      color: #eee;
      background: transparent;
    }
  }

  @media ${breakpoints.lg} {
    .slide-image {
      top: -86px;
      width: 548px;
    }
  }

  @media ${breakpoints.md} {
    .slide-image {
      max-width: 350px;
        right: 31px;
        top: -72px;
        width: 100%;
    }
  }

  @media ${breakpoints.sm} {
    padding-left: 0;

    .content {
      padding-left: 0;
    }

    .text {
      padding: 0 1rem;

      h2 {
        font-size: 1.25rem;
      }

      p {
        width: 57%;
        font-size: 0.75rem;
      }
    }

    .quantity svg {
      display: none;
    }

    .players-quantity {
      padding-left: 1rem;
      .avatars {
        position: relative;
        width: 60px;
        display: flex;
        align-items: center;
      }

      .avatars img:nth-of-type(1) {
        left: 0px;
      }

      .avatars img:nth-of-type(2) {
        left: 20px;
      }

      .avatars img:nth-of-type(3) {
        left: 40px;
      }

      .avatars img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        position: absolute;
      }
    }

    .players-quantity svg {
      height: 1.2rem;
      width: 1.2rem;
    }

    .players-quantity .quantity {
      font-size: 0.75rem;
    }

    .slide-image {
      width: 235px;
      right: -42px;
      top: 18px;
    }

    .see-more-wrapper {
      display: none;
    }
  }
`;
