import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const ViewNav = (props) => {

    return (
        <Nav>
            <div>Nav Logo</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/schedule">Schedule</Link>
                <Link to="/team">Team</Link>
                <Link to="/individual">Individual</Link>
            </div>
        </Nav>
    );
};

export default ViewNav;