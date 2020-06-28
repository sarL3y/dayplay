import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const LandingLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 12rem;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.font};
    border: 2px solid ${props => props.theme.menu};
    border-radius: 0.5rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const LandingViewSelect = ({ children, view }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <LandingLink
            to={view.link}
            theme={theme}  
        >
            { view.title }
        </LandingLink>
    );
};

export default LandingViewSelect;