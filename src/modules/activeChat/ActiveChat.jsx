import Message from "./components/Message";
import ChatHeader from "./components/ChatHeader";
import { useState } from "react";


const ActiveChat = (props) => {

  const [newMessageText, setNewMessageText] = useState('');

  const handleChange = (e) => {
    setNewMessageText(e.target.value);
  }

  const sendMessage = () => {
    props.socket.emit('sendMessage', props.activeChat, newMessageText, 'Operator', 'Operator');
  }

  return <div className="operator-chat__active-chat-wrapper active-chat">
    <div className="active-chat__wrapper">
      <ChatHeader />
      <div className="active-chat__current-user">{props.activeChat}</div>
      <ul className="active-chat__list">
        {props.activeChatMessages.map((el, key) => <Message key={key} author={el.author} text={el.text} type={el.type} />)}
      </ul>
      <div className="active-chat__form">
        <input type="text" value={newMessageText} onChange={(e) => handleChange(e,)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>

  </div>
}

export default ActiveChat;