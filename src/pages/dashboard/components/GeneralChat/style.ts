import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';

export const StyledGeneralChat = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem;
  max-height: 385px;
  border-radius: 1.5rem;

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
    padding-bottom: 1rem;
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
    padding: 2rem 1rem;

    .header {
      padding: 0 1rem;
    }

    .see-more-btn {
      font-size: 0.875rem;
    }
  }
`;

export const StyledChatList = styled.div``;

export const StyledChatItem = styled.div`
  background: ${({ theme }) => theme.colors.chatCardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
  position: relative;

  &:hover {
    transform: translateX(12px);
  }

  &:hover::before {
    content: '';
    inset: 0;
    background: linear-gradient(45deg, #3e234738, transparent);
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 0.5rem;
  }

  &:hover::after {
    content: 'Open';
    right: 2rem;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.success};
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .avatar {
    overflow: hidden;
    position: relative;
    padding-right: 4px;

    &::after {
      content: '';
      position: absolute;
      left: 47%;
      top: 48%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-image: url('/contorno.svg');
      background-repeat: no-repeat;
      z-index: 10;
    }
  }

  .avatar img {
    width: 40px;
    height: 40px;
    padding: 3px 2px 2px 2px;
    object-fit: contain;
  }

  .content {
  }

  .status {
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.success};
    border-radius: 50%;
    align-self: flex-end;
  }

  .name {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.875rem;
    font-weight: 600;
  }
  .message {
    color: ${({ theme }) => theme.colors.body2};
    font-size: 0.75rem;
  }

  .date {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.placeholder};
    align-self: flex-end;
  }
`;
