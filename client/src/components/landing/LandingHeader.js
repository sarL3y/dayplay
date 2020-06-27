import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const Header = styled.header`
    width: 100vw;
    height: 300px;
    max-height: 200px;
    background-color: ${props => props.theme.menu};
    color: ${props => props.theme.font};
`;

const HeaderWrapper = (props) => {
    const { theme } = useContext(ThemeContext);

    return <Header theme={theme} />
}

export default HeaderWrapper;