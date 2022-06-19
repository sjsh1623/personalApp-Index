import {createContext, useReducer} from "react";
import {DIM_SCREEN} from "@context/action"

const initialState = {
    dimmedScreen: {
        display: false
    }
};

const Context = createContext({});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DIM_SCREEN' :
            return {
                ...state,
                dimmedScreen: {
                    ...state.dimmedScreen
                }
            }
        default:
            return state;
    }
}

const DimmedProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export {Context, DimmedProvider};
