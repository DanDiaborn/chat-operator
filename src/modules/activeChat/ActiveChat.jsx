import ChatHeader from "./components/ChatHeader";
import ChatBottom from "./components/ChatBottom";
import ChatList from "./components/ChatList";


const ActiveChat = (props) => {

  return <div className="operator-chat__active-chat-wrapper active-chat">
    <div className="active-chat__wrapper">
      <ChatHeader activeChatName={props.activeChat} />
      <ChatList activeChatMessages={props.activeChatMessages} />
      <ChatBottom socket={props.socket} />
    </div>

  </div>
}

export default ActiveChat;