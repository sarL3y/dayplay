import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';
import { ReactComponent as SunIcon } from '../../svg/Sun_Icon.svg';

const Button = styled.button`
    position: absolute;
    right: 0px;
    bottom: 5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.font};
    border-radius: 1rem 0px 0px 1rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <Button
            type='button'
            theme={theme}
            onClick={toggleTheme}   
        >
            <SunIcon  fill={theme.font} style={{ width: '20px', height: '20px', margin: '0.5rem' }} />
        </Button>
    );
};

export default ThemeButton;