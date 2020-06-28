import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

const Footer = styled.footer`
    background-color: ${props => props.theme.menu};
    color: ${props => props.theme.font};
`;

const FooterWrapper = (props) => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <Footer theme={theme}>
        </Footer>
    )
};

export default FooterWrapper;