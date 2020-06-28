import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.font};
`;

const ColumnContainerWrapper = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <ColumnContainer theme={theme}>
            { children }
        </ColumnContainer>
    );
};

export default ColumnContainerWrapper;