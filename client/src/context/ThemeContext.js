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
        backgroundGradient: 'linear-gradient(235deg, rgba(30,30,30,0.75) 0%, rgba(18,18,18,1) 100%);',
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
    dark: {
        darkGreen: '#28a745',
        hoverGreen: '#218838',
        offColor: '#383838',
        hoverOffColor: '#5e5e5e'
    },
    light: {
        darkGreen: '#28a745',
        hoverGreen: '#218838', 
        offColor: '#dedede',
        hoverOffColor: '#cfcfcf'
    }
    
};

const themes = {
    dark: {
        background: containerColors.dark.background,
        surface: containerColors.dark.surface,
        menu: containerColors.dark.menu,
        font: fontColors.light.light,
        flipFont: fontColors.dark.dark,
        button: buttonColors.dark.darkGreen,
        hoverButton: buttonColors.dark.hoverGreen,
        offColor: buttonColors.dark.offColor,
        hoverOffColor: buttonColors.dark.hoverOffColor,
        backgroundGradient: containerColors.dark.backgroundGradient
    },
    light: {
        background: containerColors.light.background,
        surface: containerColors.light.surface,
        menu: containerColors.light.menu,
        font: fontColors.dark.dark,
        flipFont: fontColors.light.light,
        button: buttonColors.light.darkGreen,
        hoverButton: buttonColors.light.hoverGreen,
        offColor: buttonColors.light.offColor,
        hoverOffColor: buttonColors.light.hoverOffColor
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