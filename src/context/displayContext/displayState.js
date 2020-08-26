import React, { useReducer } from 'react';
import DisplayContext from './displayContext';
import DisplayReducer from './displayReducer';
import {
    BUTTON_CLICK,
    CLEAR_DISPLAY,
    BACKSPACE_DISPLAY,
    REPLACE_OPERATOR,
    SET_DOT_DECIMAL,
    EVALUATE
} from "../../types";
import { evaluate } from 'mathjs'

const DisplayState = ({ children }) => {

    const initialState = {
        displayValue: '',
        dotDecimal: true,
    }

    const [state, dispatch] = useReducer(DisplayReducer, initialState);

    const buttonClearClick = () => {
        dispatch({ type: CLEAR_DISPLAY });
        dispatch({ type: SET_DOT_DECIMAL, payload: true })
    }

    const buttonBackSpaceClick = () => {
        const { displayValue } = state;
        if (!displayValue.length) return
        const lastChar = displayValue[displayValue.length - 1];
        const newDisplayValue = displayValue.substring(0, displayValue.length - 1);
        dispatch({ type: BACKSPACE_DISPLAY, payload: newDisplayValue })

        if (lastChar === '.') {
            dispatch({ type: SET_DOT_DECIMAL, payload: true })
        }
    }

    const buttonOpClick = (text) => {
        const { displayValue } = state;
        const lastChar = displayValue[displayValue.length - 1];
        if (/[-*+/]/.test(lastChar)) {
            const newDisplayValue = displayValue.substring(0, displayValue.length - 1) + text;
            dispatch({ type: REPLACE_OPERATOR, payload: newDisplayValue })
            return;
        }
        dispatch({ type: BUTTON_CLICK, payload: text });
        dispatch({ type: SET_DOT_DECIMAL, payload: true })
    }

    const buttonDotClick = (text) => {
        const { displayValue, dotDecimal } = state;
        const lastChar = displayValue[displayValue.length - 1];
        if (/[0-9]/.test(lastChar) && dotDecimal) {
            dispatch({ type: BUTTON_CLICK, payload: text });
            dispatch({ type: SET_DOT_DECIMAL, payload: false })
        }
    }

    const buttonEqualClick = () => {
        const { displayValue } = state;
        const result = evaluate(displayValue);
        dispatch({ type: EVALUATE, payload: result });
    }

    const buttonClick = (text) => {
        dispatch({ type: BUTTON_CLICK, payload: text });
    }

    return (
        <DisplayContext.Provider
            value={{
                displayValue: state.displayValue,
                buttonClick,
                buttonOpClick,
                buttonDotClick,
                buttonClearClick,
                buttonBackSpaceClick,
                buttonEqualClick
            }}
        >
            {children}
        </DisplayContext.Provider>
    )

}

export default DisplayState;
