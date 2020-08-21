import React from "react";
import styles from "./Display.module.css";

function Display({ value }) {
    return (
        <div className={styles.container}>
           {value}
        </div>
    );
}

Display.propTypes = {};

export default Display;
