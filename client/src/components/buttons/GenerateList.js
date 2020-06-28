import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 2rem;
    background-color: ${props => props.theme.button};
    color: #FFFFFF;
    font-size: 1.25rem;
    font-weight: 400;
    border-radius: 0.25rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.16), 0 1px 2px rgba(0,0,0,0.23);

    &:hover {
        box-shadow: 0 2px 3px rgba(0,0,0,0.19), 0 2px 3px rgba(0,0,0,0.23);
        background-color: ${props => props.theme.hoverButton};
    }
`;

const GenerateList = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Button
            theme={theme}
            onClick={() => console.log('Clicked')} 
        >
            {!isLoading ? 'GENERATE LIST' : 'LOADING'}
        </Button>
    );
};

export default GenerateList;