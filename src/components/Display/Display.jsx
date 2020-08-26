import React, { useContext } from "react";
import styles from "./Display.module.css";
import { DisplayContext } from "context";

function Display() {
    const { displayValue } = useContext(DisplayContext);
    return <div className={styles.container}>{displayValue}</div>;
}

export default Display;
