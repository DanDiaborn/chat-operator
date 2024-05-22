

const Chat = (props) => {

  const chooseChat = () => {
    props.setNewChat(props.user);
  }

  return <li className="chats-list__item" onClick={chooseChat}>
    <div className="chats-list__user">{props.user}</div>
    <div className="chats-list__last-message">{props.lastMessage}</div>
  </li>
}

export default Chat;