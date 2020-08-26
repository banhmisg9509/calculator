import React, { useContext } from "react";
import cx from "classnames";
import styles from "./Button.module.css";
import { DisplayContext } from "context";

function Button({ text }) {
    const {
        buttonClick,
        buttonOpClick,
        buttonDotClick,
        buttonClearClick,
        buttonBackSpaceClick,
        buttonEqualClick
    } = useContext(DisplayContext);
    const handleClick = (text) => {
        if (text === "C") {
            buttonClearClick();
        } else if (text === "←") {
            buttonBackSpaceClick();
        } else if (/[-*+/]/.test(text)) {
            buttonOpClick(text);
        } else if (text === ".") {
            buttonDotClick(text);
        } else if (text === '=') {
            buttonEqualClick();
        } else {
            buttonClick(text);
        }
    };
    return (
        <div
            className={
                text === "="
                    ? cx(styles.container, styles.equal)
                    : styles.container
            }
            onClick={() => handleClick(text)}
        >
            {text}
        </div>
    );
}

export default Button;
