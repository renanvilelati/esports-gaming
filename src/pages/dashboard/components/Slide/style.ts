import styled from 'styled-components';

interface StyledSlideProps {
  isLightTheme: boolean
}

export const StyledSlide = styled.div<StyledSlideProps>`
  position: relative;
  cursor: pointer;

  @keyframes fly {
    50% {
      transform: translateY(-6.2px)
      scale(1.01)
    }
  }

  &:hover {
    .see-more-wrapper {
      opacity: 1;
      scale: 1;
    }

    .background {
      scale: 1.02;
      opacity:  ${({isLightTheme}) => isLightTheme ? 'initial' : '0.1'} ;
    }

    .slide-image {
      scale: 1.01;
      animation: fly 5s infinite ;
    }
  }

  .background {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../../../../../public/lolg-bg.jpg);
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    opacity: ${({isLightTheme}) => isLightTheme ? 1 : 0.2} ;
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
      background: ${({isLightTheme}) => isLightTheme ? '#0005' : 'initial'} ;
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
      color: #EEE;
    }

    p {
      font-size: 0.875rem;
      width: 40%;
      color: #CCC;
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
    transition: opacity 0.5s ease-in-out;
    z-index: 10;

    button {
      color: #EEE;
      background: transparent;
    }
  }
`;
