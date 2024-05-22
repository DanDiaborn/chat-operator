

const Message = (props) => {

  const messageTypeClass = (props.type === 'Operator')
    ? 'chat-list__message chat-list__operator'
    : 'chat-list__message chat-list__user';

  return <li className={messageTypeClass}>
    <div className="chat-list__message-text">{props.text}</div>
    <div className="chat-list__time">12:34</div>
  </li>
}

export default Message;