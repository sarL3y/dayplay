import React from 'react';

const ScheduleList = () => {
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
        !isLoading && response.data ? 
            <div>Working</div> :
            null
    )
}

export default ScheduleList;