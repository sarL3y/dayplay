import React from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import Calendar from '../components/calendar/Calendar';
import SurfaceContainer from '../components/containers/SurfaceContainer';
import Line from '../components/Line';

import useFetchGraphQL from '../hooks/useFetchGraphQL';

const Individual = ({ children }) => {
    const { response, error, isLoading } = useFetchGraphQL(`
        query {
            getAllTeamMembers {
                id
                firstName
                lastName
                position
                days {
                    day
                    available
                }
            }
        }`);

    return (
        !isLoading && response?.data?.getAllTeamMembers[1] ? (
            <Container>
                <ColumnContainer>
                    <CenteredRow>
                        <ColumnContainer>
                            <h2>Individual View</h2>
                            <Line />
                            <p>Team members can set their availability from their own account:</p>
                            <SurfaceContainer>
                                <Calendar member={response?.data?.getAllTeamMembers[1]} />
                            </SurfaceContainer>
                        </ColumnContainer>
                    </CenteredRow>
                </ColumnContainer>
            </Container>    
        ) : (
            null
        )
    );
};

export default Individual;