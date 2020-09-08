import React, { useState } from "react";
import PropTypes from "prop-types";
import { RiSendPlane2Line } from "react-icons/ri";

import axios from "../../services";
import styles from "./styles.module.css";

const ChatInput = ({ username }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { username, message };
    await axios.post("/message", payload);
    setMessage("");
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          autoFocus
          required
          type="text"
          placeholder="Type your message"
          value={message}
          className={styles.input}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          <RiSendPlane2Line />
        </button>
      </form>
    </div>
  );
};

ChatInput.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ChatInput;
