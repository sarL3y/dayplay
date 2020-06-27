import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

import ViewNav from './ViewNav';

const Header = styled.header`
    width: 100vw;
    height: 100px;
    max-height: 200px;
    background-color: ${props => props.theme.menu};
    color: ${props => props.theme.font};
`;

const HeaderWrapper = (props) => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <Header theme={theme}>
            <ViewNav />
        </Header>
    )
};

export default HeaderWrapper;