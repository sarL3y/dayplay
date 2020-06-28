import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

import LandingHeader from '../headers/LandingHeader';
import LandingFooter from '../footers/LandingFooter';

const LandingLayout = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.font};
`;

const Wrapper = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <LandingLayout theme={theme}>
            <LandingHeader />
                { children }
            <LandingFooter />
        </LandingLayout>
    );
};

export default Wrapper;