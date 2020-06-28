import React from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import LandingViewSelectButton from '../components/buttons/LandingViewSelect';

const views = [
    {
        title: 'Schedule',
        link: '/schedule'
    }, 
    {
        title: 'Team',
        link: '/team', 
    },
    {
        title: 'Individual',
        link: '/individual'
    }
];

const Landing = (props) => {

    return (
        <Container>
            <ColumnContainer>
                <CenteredRow>
                    <h2>Select a View</h2>
                </CenteredRow>
                <CenteredRow>
                {views.map((view, key) => (
                    <LandingViewSelectButton view={view} key={key} />
                ))}
                </CenteredRow>
                <CenteredRow>
                    
                </CenteredRow>
            </ColumnContainer>
        </Container>
    );
};

export default Landing;