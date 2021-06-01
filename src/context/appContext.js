import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './appReducer'
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext()

const initialState = {
    budget: 2000,
    expenses: [
        { id: uuidv4(), name: "shopping", cost: 40 },
        { id: uuidv4(), name: "holiday", cost: 400 },
    ]
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{
            ...state,
            budget: state.budget,
            expenses: state.expenses,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppProvider