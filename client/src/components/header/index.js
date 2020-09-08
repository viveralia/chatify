import React from "react";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Chatify</h1>
      <h2 className={styles.subtitle}>Meet random people</h2>
    </header>
  );
};

export default Header;
