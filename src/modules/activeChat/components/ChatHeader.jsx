import avatar from '../../../images/avatar.jpg';

const chatHeader = (props) => {
  return <div className="active-chat__header chat-header">
    <div className="chat-header__wrapper">
      <img src={avatar} alt="" className="chat-header__user-avatar" />
      <div className="chat-header__user-name">{props.activeChatName}</div>
    </div>
  </div>
}

export default chatHeader;