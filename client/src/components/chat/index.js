import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Chat = ({ chat }) => {
  const { username, message } = chat;

  return (
    <article className={styles.chat}>
      <p>{message}</p>
      <small className={styles.username}>{username}</small>
    </article>
  );
};

Chat.propTypes = {
  chat: PropTypes.shape({
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default Chat;
