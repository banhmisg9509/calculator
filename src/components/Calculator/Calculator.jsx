import React from "react";
import styles from "./Calculator.module.css";

function Calculator({ children }) {
    return <div className={styles.container}>{children}</div>;
}

export default Calculator;
