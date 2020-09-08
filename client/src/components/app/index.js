import Pusher from "pusher-js";
import React, { useState, useEffect } from "react";

import Chat from "../chat";
import ChatInput from "../chat-input";
import Header from "../header";
import styles from "./styles.module.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const username = window.prompt("Username: ");
    setUsername(username || "Anonymous");

    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      encrypted: true,
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", (newMessage) => {
      setChats((chats) => [...chats, newMessage]);
    });

    return () => {
      channel.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <ChatInput username={username} />
      <main className={styles.chatList}>
        {chats.map((chat, i) => (
          <Chat key={i} chat={chat} />
        ))}
      </main>
    </>
  );
};

export default App;
