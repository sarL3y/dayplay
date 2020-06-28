import React from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import Calendar from '../components/calendar/Calendar';

import { workingSchedule } from '../data/data';

const Schedule = ({ children }) => {

    return (
        <Container>
            <ColumnContainer>
                <CenteredRow>
                    <ColumnContainer>
                    <h2>Schedule View</h2>
                    <Calendar schedule={workingSchedule} />
                    </ColumnContainer>
                </CenteredRow>
            </ColumnContainer>
        </Container>    
    );
}

export default Schedule;