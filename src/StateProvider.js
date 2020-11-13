import React, { createContext, useContext, useReducer } from 'react';

// Prepare the dataLayer
export const StateContext = createContext();

// wrap our app and provide the Data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information for the data layer 
export const useStateValue = () => useContext(StateContext);