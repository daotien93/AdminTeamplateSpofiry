import React, { Children, createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({Children}) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
    };

    const setColor = (e) => {
        setCurrentColor(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true});

    return (
        <StateContext.Provider value={{currentColor, screenSize, currentMode, themeSettings, activeMenu, isClicked}}>
            { Children }
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);

