import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

import CenteredRow from '../containers/CenteredRow';

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 150px;
    background-color: ${props => props.theme.menu};
    color: ${props => props.theme.font};
`;

const HeaderWrapper = (props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Header theme={theme}>
            <Link to="/">
                <h1>DayPlay</h1>
            </Link>
        </Header>
    );
};

export default HeaderWrapper;