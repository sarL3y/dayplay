import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

import { ReactComponent as EditIcon } from '../../svg/pencil.svg';
import { ReactComponent as GroupIcon } from '../../svg/group.svg';
import { ReactComponent as UserIcon } from '../../svg/user.svg';

const Icon = styled.div`
    width: 50px;
    height: 50px;
    fill: ${props => props.theme.button};
    margin-bottom: 1rem;
`;

const LandingLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 12rem;
    padding: 0.5rem;
    margin: 0.5rem;
    font-weight: bold;
    ${props => props.isdark ? `background: ${props.theme.backgroundGradient};` : `background-color: ${props.theme.surface}`};
    color: ${props => props.theme.font};
    border: 2px solid ${props => props.theme.menu};
    border-radius: 0.5rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    &:hover ${Icon} {
        fill: ${props => props.theme.hoverButton};
    }
`;

const LandingViewSelect = ({ children, view }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <LandingLink
            to={view.link}
            theme={theme} 
        >
                {view.icon === 'edit' && <Icon theme={theme}><EditIcon /></Icon>}
                {view.icon === 'group' && <Icon theme={theme}><GroupIcon /></Icon>}
                {view.icon === 'user' && <Icon theme={theme}><UserIcon /></Icon>}
            <span>{ view.title }</span>
        </LandingLink>
    );
};

export default LandingViewSelect;