import React from 'react';

import Container from '../components/containers/Container';
import CenteredRow from '../components/containers/CenteredRow';
import ColumnContainer from '../components/containers/ColumnContainer';
import Calendar from '../components/calendar/Calendar';
import SurfaceContainer from '../components/containers/SurfaceContainer';
import Line from '../components/Line';

import useFetchGraphQL from '../hooks/useFetchGraphQL';

const Team = (props) => {
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
        !isLoading && response?.data?.getAllTeamMembers ? (
            <Container>
                <ColumnContainer>
                    <CenteredRow>
                        <ColumnContainer>
                            <h2>Team View</h2>
                            <Line />
                            <p>Your team's availability:</p>
                            <SurfaceContainer>
                            {response.data.getAllTeamMembers.map((member, key) => (
                                <Calendar member={member} key={key} />
                            ))}
                            {error && <div>There was an error loading the data... Try refreshing the page</div>}
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

export default Team;