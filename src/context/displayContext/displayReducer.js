import {
    BUTTON_CLICK,
    CLEAR_DISPLAY,
    BACKSPACE_DISPLAY,
    REPLACE_OPERATOR,
    SET_DOT_DECIMAL,
    EVALUATE
} from "types";

export default (state, action) => {
    switch (action.type) {
        case BUTTON_CLICK:
            return {
                ...state,
                displayValue: state.displayValue + action.payload
            }
        case EVALUATE:
            return {
                ...state,
                displayValue: action.payload
            }
        case BACKSPACE_DISPLAY:
            return {
                ...state,
                displayValue: action.payload
            }
        case CLEAR_DISPLAY:
            return {
                ...state,
                displayValue: ''
            }
        case REPLACE_OPERATOR:
            return {
                ...state,
                displayValue: action.payload
            }
        case SET_DOT_DECIMAL:
            return {
                ...state,
                dotDecimal: action.payload
            }
        default:
            return state
    }
}