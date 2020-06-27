import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

import ViewHeader from '../view/ViewHeader';
import ViewFooter from '../view/ViewFooter';

const ViewLayout = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.font};
`;

const Wrapper = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <ViewLayout theme={theme}>
            <ViewHeader />
                { children }
            <ViewFooter />
        </ViewLayout>
    );
};

export default Wrapper;