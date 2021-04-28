import React, { useState } from 'react';

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
    const [message, setMessage] = useState('A message!');

    return (
        <StateContext.Provider
            value={{
                message,
                setMessage
            }}
        >
            {children}
        </StateContext.Provider>
    );
};