import React, { useState, useContext } from "react";
import { Web3Context } from "../contexts/Web3Context";

const MessageForm = () => {
  const { account, chatContract } = useContext(Web3Context);
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    await chatContract.methods
      .sendMessage(recipient, message)
      .send({ from: account });
    setMessage("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default MessageForm;
