import React, { useState, useEffect, createContext } from 'react';

const fontColors = {
    dark: {
        dark: '#22252A'
    },
    light: {
        light: '#FFFFFF'
    }
};

const containerColors = {
    dark: {
        background: '#121212',
        menu: '#2D2D2D',
        surface: '#252525'
    },
    light: {
        background: '#F8F9FA',
        surface: '#FFFFFF',
        menu: '#FFFFFF'
    }
};

const buttonColors = {
    darkGreen: '#28a745',
    hoverGreen: '#218838'

};

const themes = {
    dark: {
        background: containerColors.dark.background,
        surface: containerColors.dark.surface,
        menu: containerColors.dark.menu,
        font: fontColors.light.light,
        button: buttonColors.darkGreen,
        hoverButton: buttonColors.hoverGreen
    },
    light: {
        background: containerColors.light.background,
        surface: containerColors.light.surface,
        menu: containerColors.light.menu,
        font: fontColors.dark.dark,
        button: buttonColors.darkGreen,
        hoverButton: buttonColors.hoverGreen
    }
};

const initialThemeState = {
    dark: true,
    theme: themes.light,
    toggleTheme: () => {}
};

const ThemeContext = createContext(initialThemeState);

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const localStorageIsDark = localStorage.getItem('dark') === 'true';
        setIsDark(localStorageIsDark);
    }, [isDark]);

    const toggleTheme = () => {
        const localStorageIsDark = !isDark;
        localStorage.setItem('dark', JSON.stringify(localStorageIsDark));
        setIsDark(localStorageIsDark);
        console.log('Toggling theme!');
    };

    const theme = isDark ? themes.dark : themes.light;

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };