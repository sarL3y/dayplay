import React from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import LandingViewSelectButton from '../components/buttons/LandingViewSelect';

const views = [
    {
        title: 'SCHEDULE',
        link: '/schedule',
        icon: 'edit'
    }, 
    {
        title: 'TEAM',
        link: '/team', 
        icon: 'group'
    },
    {
        title: 'INDIVIDUAL',
        link: '/individual',
        icon: 'user'
    }
];

const Landing = (props) => {

    return (
        <Container>
            <ColumnContainer>
                <CenteredRow>
                    <h2>Dashboard</h2>
                </CenteredRow>
                <CenteredRow>
                {views.map((view, key) => (
                    <LandingViewSelectButton view={view} key={key} />
                ))}
                </CenteredRow>
                <CenteredRow>
                    <ColumnContainer>
                        <p>1. Set the available working days</p>
                        <p>2. View your team's availability</p>
                        <p>3. Auto-generate a list of dayplayers who can work</p>
                    </ColumnContainer>
                </CenteredRow>
            </ColumnContainer>
        </Container>
    );
};

export default Landing;