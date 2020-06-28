import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const Container = styled.div`
    width: 100%;
    padding: 1.25rem;
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.font};
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: 0.25rem;
`;

const SurfaceContainerWrapper = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            { children }
        </Container>
    );
};

export default SurfaceContainerWrapper;