import React, { useState } from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import Calendar from '../components/calendar/Calendar';

import { teamMembers } from '../data/data';

const Individual = ({ children }) => {
    const [member, setMember] = useState(teamMembers[1]);

    return (
        <Container>
            <ColumnContainer>
                <CenteredRow>
                    <ColumnContainer>
                    <h2>Individual View</h2>
                    <Calendar member={member} />
                    </ColumnContainer>
                </CenteredRow>
            </ColumnContainer>
        </Container>    
    );
}

export default Individual;