import {createContext, useReducer} from "react";

const initialState = {
    status : true
};

const Context = createContext({});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HIDE_BOTTOM_TAB' :
            return {
                ...state,
                status: false
            }
        case 'SHOW_BOTTOM_TAB' :
            return {
                ...state,
                status: true
            }

        default:
            return state;
    }
}

const BottomTabProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export {Context, BottomTabProvider};
