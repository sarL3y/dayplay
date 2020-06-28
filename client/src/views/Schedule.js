import React from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import Calendar from '../components/calendar/Calendar';
import SurfaceContainer from '../components/containers/SurfaceContainer';
import GenerateList from '../components/buttons/GenerateList';
import Line from '../components/Line';

import { workingSchedule } from '../data/data';

const Schedule = ({ children }) => {

    return (
        <Container>
            <ColumnContainer>
                <CenteredRow>
                    <ColumnContainer>
                    <h2>Schedule View</h2>
                    <Line />
                    <p>Set the working days:</p>
                    <SurfaceContainer>
                        <Calendar schedule={workingSchedule} />
                    </SurfaceContainer>
                    <CenteredRow>
                        <GenerateList>Generate Working List</GenerateList>
                    </CenteredRow>
                    </ColumnContainer>
                </CenteredRow>
            </ColumnContainer>
        </Container>    
    );
}

export default Schedule;