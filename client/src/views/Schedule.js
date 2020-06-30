import React from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import Calendar from '../components/calendar/Calendar';
import SurfaceContainer from '../components/containers/SurfaceContainer';
import GenerateList from '../components/buttons/GenerateList';
import Line from '../components/Line';

import useFetchGraphQL from '../hooks/useFetchGraphQL';

const Schedule = ({ children }) => {
    const { response, error, isLoading } = useFetchGraphQL(`
        query {
            getAllSchedules {
                id
                week
                days {
                    day
                    available
                }
            }
        }`);
    
    return (
        !isLoading && response?.data?.getAllSchedules ? (
            <Container>
                <ColumnContainer>
                    <CenteredRow>
                        <ColumnContainer>
                        <h2>Schedule View</h2>
                        <Line />
                        <p>Set the working days:</p>
                        <SurfaceContainer>
                            {response.data.getAllSchedules.map((schedule, key) => (
                                <Calendar schedule={schedule} key={key} />
                            ))}
                        </SurfaceContainer>
                        <CenteredRow>
                            <GenerateList>Generate Working List</GenerateList>
                        </CenteredRow>
                        </ColumnContainer>
                    </CenteredRow>
                </ColumnContainer>
            </Container>    
        ) : (
            null
        )
    );
};

export default Schedule;