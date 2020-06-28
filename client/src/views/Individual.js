import React, { useState } from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import Calendar from '../components/calendar/Calendar';
import SurfaceContainer from '../components/containers/SurfaceContainer';
import Line from '../components/Line';

import { teamMembers } from '../data/data';

const Individual = ({ children }) => {
    const [member] = useState(teamMembers[1]);

    return (
        <Container>
            <ColumnContainer>
                <CenteredRow>
                    <ColumnContainer>
                        <h2>Individual View</h2>
                        <Line />
                        <p>Team members can set their own availability:</p>
                        <SurfaceContainer>
                            <Calendar member={member} />
                        </SurfaceContainer>
                    </ColumnContainer>
                </CenteredRow>
            </ColumnContainer>
        </Container>    
    );
}

export default Individual;