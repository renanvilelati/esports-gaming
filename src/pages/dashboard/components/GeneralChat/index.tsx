import { StyledGeneralChat } from './style';
import chatIcon from '../../../../../public/icons/chat.svg';
import ChatList from './ChatList';
import { iChatList } from './types/ChatListType';

const list: iChatList[] = [
  {
    id: '1',
    name: 'Marvin McKinney',
    message: 'We need to practice!',
    avatar: 'user-chat-1.png',
    date: '2024-05-08T14:30:00.000Z',
  },
  {
    id: '2',
    name: 'Bessie Cooper',
    message: 'Wanna 1v1?',
    avatar: 'user-chat-2.png',
    date: '2024-05-08T10:30:00.000Z',
  },
  {
    id: '3',
    name: 'Jenny Wilson',
    message: 'Did you see the new tour...',
    avatar: 'user-chat-3.png',
    date: '2024-05-08T07:30:00.000Z',
  },
];

const GeneralChat = () => {
  return (
    <StyledGeneralChat className="general-chat">
      <div className="header">
        <h4>
          <img src={chatIcon} alt="chat icon" /> General Chat
        </h4>
      </div>

      <ChatList list={list} />
      <div className="btn-wrapper">
        <button className="see-more-btn" type="button">
          See more
        </button>
      </div>
    </StyledGeneralChat>
  );
};

export default GeneralChat;
