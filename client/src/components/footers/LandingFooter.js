import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const Footer = styled.footer`
    position: absolute;
    bottom: 0px;
    width: 100vw;
    height: 100px;
    max-height: 100px;
    background-color: ${props => props.theme.menu};
    color: ${props => props.theme.font};
`;

const FooterWrapper = (props) => {
    const { theme } = useContext(ThemeContext);

    return <Footer theme={theme} />
}

export default FooterWrapper;