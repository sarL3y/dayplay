import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.surface};
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const CenterAlignedDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const UnorderedList = styled.ul`
    display: flex;
    
`;

const ListItem = styled.li`
    margin: 1rem;
`;

const ViewNav = (props) => {

    return (
        <NavContainer>
            <Nav>
                <CenterAlignedDiv>
                    <Link to="/"><h1>DayPlay</h1></Link>
                </CenterAlignedDiv>
                <CenterAlignedDiv>
                    <UnorderedList>
                        <ListItem>
                            <Link to="/">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/schedule">Schedule</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/team">Team</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/individual">Individual</Link>
                        </ListItem>
                    </UnorderedList>
                </CenterAlignedDiv>
            </Nav>
        </NavContainer>
    );
};

export default ViewNav;