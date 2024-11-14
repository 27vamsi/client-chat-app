import React, { useState, useEffect, useContext } from "react";
import { Web3Context } from "../contexts/Web3Context";

const ChatBox = () => {
  const { account, chatContract } = useContext(Web3Context);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      const messages = await chatContract.methods.getMessages(account).call();
      setMessages(messages);
    };

    if (chatContract) {
      loadMessages();
    }
  }, [chatContract, account]);

  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>
          <strong>{msg.sender === account ? "Me" : msg.sender}:</strong> {msg.content}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
