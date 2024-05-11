import ChatItem from "./ChatItem"
import { iChatList } from "./types/ChatListType"

interface ChatListProps {
  list: iChatList[]
}

const ChatList = ({list}: ChatListProps) => {
  return (
    list.map( item => <ChatItem key={item.id} chatItem={item} />)
  )
}

export default ChatList
