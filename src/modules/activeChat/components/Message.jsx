

const Message = (props) => {
  return (props.type === 'Operator')
    ? <li className="active-chat__message active-chat__message-user">
      <div className="active-chat__message-author">{props.author}</div>
      <div className="active-chat__message-text">{props.text}</div>
    </li>
    : <li className="active-chat__message active-chat__message-operator">
      <div className="active-chat__message-author">{props.author}</div>
      <div className="active-chat__message-text">{props.text}</div>
    </li>
}

export default Message;