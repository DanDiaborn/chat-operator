import { useEffect, useState } from "react"
import Chats from "./components/Chats"
import ActiveChat from "./components/ActiveChat"
import axios from "axios";
import { io } from "socket.io-client";

function App() {

  const [socket, setsocket] = useState('');

  const [chats, setChats] = useState([])
  const [activeChat, setActiveChat] = useState('');

  const [activeChatMessages, setActiveChatMessages] = useState([]);



  const setNewChat = (chatId) => {
    setActiveChat(chatId);
    if (socket) {
      socket.emit('joinChat', chatId);
      socket.on('messages', (messages) => {
        // console.log('new messages', messages[0].messages);
        setActiveChatMessages(messages[0].messages);
      });
    }
  }

  useEffect(() => {
    // setsocket(io('http://localhost:3000'));
    setsocket(io('https://chat-test-server.onrender.com:3002'));
    // setsocket(io('https://chat-test-server.onrender.com:3000'));
    // axios.get('https://chat-test-server.onrender.com/chats').then((response) => {
    //   console.log(response.data);
    //   setChats(response.data);
    // });

  }, [])

  useEffect(() => {
    console.log(socket);
    if (socket !== '') {
      socket.on('connect', () => {
        console.log('Connected to socket server');
      });
      socket.emit('getChats');
      socket.on('getChats', (chats) => {
        setChats(chats);
        console.log(chats);
      });
      // setNewChat('User1');
    }
  }, [socket])

  return <div className="operator-chat__wrapper">
    <Chats chats={chats} socket={socket} setNewChat={setNewChat} />
    <ActiveChat activeChatMessages={activeChatMessages} socket={socket} activeChat={activeChat} />
  </div>
}

export default App
