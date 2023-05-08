import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ChatPage() {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:3000/api/chat");
    setChats(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id}>{chat.chatName}</div>
      ))}
    </div>
  );
}
