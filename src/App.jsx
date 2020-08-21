import React, { useState } from "react";
import styles from "./App.module.css";
import { Calculator, Display, Keyboard, Button } from "./components";

function App() {
    const [value, setValue] = useState("");

    const handleClick = (text) => {
        setValue(value + text);
    };

    const buttons = [
        { text: "7" },
        { text: "8" },
        { text: "9" },
        { text: "/" },
        { text: "4" },
        { text: "5" },
        { text: "6" },
        { text: "X" },
        { text: "1" },
        { text: "2" },
        { text: "3" },
        { text: "-" },
        { text: "0" },
        { text: "." },
        { text: "+" },
        {
            text: "=",
            cssStyle: {
                backgroundColor: "#F89734",
                borderBottom: "5px solid #DE8339",
            },
        },
        {
            text: "C",
            overrideHandleClick: () => {
                setValue("");
            },
        },
    ];

    return (
        <div className={styles.container}>
            <Calculator>
                <Display value={value} />
                <Keyboard>
                    {buttons.map(
                        ({ text, cssStyle, overrideHandleClick }, id) => (
                            <Button
                                text={text}
                                cssStyle={cssStyle}
                                key={id}
                                handleClick={
                                    overrideHandleClick
                                        ? overrideHandleClick
                                        : handleClick
                                }
                            />
                        )
                    )}
                </Keyboard>
            </Calculator>
        </div>
    );
}

export default App;
