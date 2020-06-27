import React from 'react';
import styled from 'styled-components';

import ThemeButton from '../buttons/ThemeButton';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    color: white;
`;

const ViewNav = (props) => {

    return (
        <Nav>
            <div>Nav Logo</div>
            <div>Nav Buttons
                <ThemeButton />
            </div>
        </Nav>
    );
};

export default ViewNav;