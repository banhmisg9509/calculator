import React from "react";
import styles from "./Button.module.css";

function Button({ text, cssStyle, handleClick }) {

    return (
        <div
            className={styles.container}
            style={{ ...cssStyle }}
            onClick={() => handleClick(text)}
        >
            {text}
        </div>
    );
}

export default Button;
