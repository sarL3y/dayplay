import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const Footer = styled.footer`
    width: 100vw;
    height: 300px;
    max-height: 200px;
    background-color: ${props => props.theme.menu};
    color: ${props => props.theme.font};
`;

const FooterWrapper = (props) => {
    const { theme } = useContext(ThemeContext);

    return <Footer theme={theme} />
}

export default FooterWrapper;