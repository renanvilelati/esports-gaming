import styled from 'styled-components';

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
    clip-path: polygon(
      20% 0%,
      80% 0%,
      100% 20%,
      100% 80%,
      80% 100%,
      20% 100%,
      0% 80%,
      0% 20%
    );
  }

  .avatar img {
    width: 39px;
    height: 39px;
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
