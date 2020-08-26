import React from "react";
import styles from "./App.module.css";
import { Button, Calculator, Display, Keyboard } from "./components";
import { DisplayState } from "./context";

function App() {
    const buttons = [
        { text: "7" },
        { text: "8" },
        { text: "9" },
        { text: "/" },
        { text: "4" },
        { text: "5" },
        { text: "6" },
        { text: "*" },
        { text: "1" },
        { text: "2" },
        { text: "3" },
        { text: "-" },
        { text: "0" },
        { text: "." },
        { text: "←" },
        { text: "+" },
        { text: "C" },
        { text: "=" },
        { text: "(" },
        { text: ")" },
    ];

    return (
        <DisplayState>
            <div className={styles.container}>
                <Calculator>
                    <Display />
                    <Keyboard>
                        {buttons.map(({ text }, id) => (
                            <Button text={text} key={id} />
                        ))}
                    </Keyboard>
                </Calculator>
            </div>
        </DisplayState>
    );
}

export default App;
