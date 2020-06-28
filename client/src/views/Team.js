import React from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import Calendar from '../components/calendar/Calendar';

import { teamMembers } from '../data/data';

const Team = (props) => {

    return (
        <Container>
            <ColumnContainer>
                <CenteredRow>
                    <ColumnContainer>
                        <h2>Team View</h2>
                        {teamMembers.map((member, key) => (
                            <Calendar member={member} key={key} />
                        ))}
                    </ColumnContainer>
                </CenteredRow>
            </ColumnContainer>
        </Container>    
    );
};

export default Team;