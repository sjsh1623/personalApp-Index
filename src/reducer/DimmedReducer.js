import React, {useReducer, createContext} from "react";

const initialState = {
    display: 'block'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_WOW':
            return {
                ...state,
                display: 'block'
            }
        case 'SET_WOW2':
            return {
                ...state,
                display: 'none'
            }
        default:
            throw new Error("Doesn't have action type");
    }
}

export const DimmedContext = createContext(null);

export const DimmedProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {display} = state;
    return (
        <DimmedContext.Provider value={{dispatch, display}}>
            {children}
        </DimmedContext.Provider>
    )
}
