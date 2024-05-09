import styled from 'styled-components';

export const StyledSlide = styled.div`
  position: relative;

  .background {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../../../../../public/lolg-bg.jpg);
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    opacity: 0.2;

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
  }

  .text {
    h2 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.body};
    }

    p {
      font-size: 0.875rem;
      width: 40%;
      color: ${({ theme }) => theme.colors.body2};
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

    button {
      color: ${({ theme }) => theme.colors.body};
      background: transparent;
    }
  }
`;
