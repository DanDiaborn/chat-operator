import { useState } from "react";


const chatBottom = (props) => {

  const [newMessageText, setNewMessageText] = useState('');

  const sendMessage = () => {
    props.socket.emit('sendMessage', props.activeChat, newMessageText, 'Operator', 'Operator');
  }

  const handleChange = (e) => {
    setNewMessageText(e.target.value);
  }

  return <div className="active-chat__bottom-form bottom-form">
    <div className="bottom-form__wrapper">
      <input type="text" value={newMessageText} onChange={(e) => handleChange(e,)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  </div>
}

export default chatBottom;