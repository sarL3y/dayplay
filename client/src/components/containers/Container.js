import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const Container = styled.main`
    width: 100%;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    padding: 1rem;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.font};
`;

const ContainerWrapper = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Container theme={theme}>
            { children }
        </Container>
    );
};

export default ContainerWrapper;