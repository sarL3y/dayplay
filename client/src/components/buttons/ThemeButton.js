import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
// import { ReactComponent as SunIcon } from '../svg/Sun_Icon.svg';

const Button = styled.button`
    background-color: ${props => props.theme.button};
    color: #FFFFFF;
`;

const ThemeButton = () => {
    const { theme, isDark, toggleTheme } = useContext(ThemeContext);
    console.log(isDark);
    return (
        <Button
            type='button'
            theme={theme}
            onClick={toggleTheme}   
        >
            {isDark === true ? "Light" : "Dark"}
            {/* <SunIcon  fill={theme.color} style={{ width: '20px', height: '20px' }}/> */}
        </Button>
    );
};

export default ThemeButton;