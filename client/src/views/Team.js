import React from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import Calendar from '../components/calendar/Calendar';
import SurfaceContainer from '../components/containers/SurfaceContainer';
import Line from '../components/Line';

import { teamMembers } from '../data/data';

const Team = (props) => {

    return (
        <Container>
            <ColumnContainer>
                <CenteredRow>
                    <ColumnContainer>
                        <h2>Team View</h2>
                        <Line />
                        <p>Your team's availability:</p>
                        <SurfaceContainer>
                        {teamMembers.map((member, key) => (
                            <Calendar member={member} key={key} />
                        ))}
                        </SurfaceContainer>
                    </ColumnContainer>
                </CenteredRow>
            </ColumnContainer>
        </Container>    
    );
};

export default Team;