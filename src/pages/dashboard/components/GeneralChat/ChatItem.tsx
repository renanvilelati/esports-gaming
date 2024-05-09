import { dateFormatTimeAgo } from '../../../../utils/DateFormat';
import { StyledChatItem } from './style';
import { iChatList } from './types/ChatListType';


interface iChatItemProps {
  chatItem: iChatList;
}

const ChatItem = ({ chatItem }: iChatItemProps) => {
  const { name, message, avatar, date } = chatItem;

  return (
    <StyledChatItem>

      <div className="status"><span></span></div>

      <div className="user-info">
        <div className="avatar">

          <img src={avatar} alt="User image" />
        </div>
        <div className="content">
          <span className='name'>{name}</span>
          <p className='message'>{message}</p>
        </div>
      </div>

      <div className="date">{dateFormatTimeAgo(date)}</div>

    </StyledChatItem>
  )
};

export default ChatItem;
