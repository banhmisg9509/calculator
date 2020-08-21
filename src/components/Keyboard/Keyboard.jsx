import React from "react";
import styles from "./Keyboard.module.css";

function Keyboard({ children }) {
    return <div className={styles.container}>{children}</div>;
}

export default Keyboard;
