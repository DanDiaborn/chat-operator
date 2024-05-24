import { useEffect, useState } from "react"
import Chats from "./modules/chats/Chats"
import ActiveChat from "./modules/activeChat/ActiveChat"
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
    // setsocket(io("https://okuoku.ru:6001/chat", {
    setsocket(io("https://okuoku.ru", {
      transports: ["websocket", "polling"],
      withCredentials: true
    }));

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
