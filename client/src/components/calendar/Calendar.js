import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

import useFetchGraphQL from '../../hooks/useFetchGraphQL';

const Calendar = styled.div`
    display: flex;
    position: relative;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0.25rem 0 0.25rem;
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.font};
`;

const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 6rem;
    height: 6rem;
    padding: 0.5rem;
    margin: 0.25rem;
    background-color: ${props => props.available ? props.theme.button : props.theme.offColor};
    color: ${props => props.theme.font};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.available ? props.theme.hoverButton : props.theme.hoverOffColor};
    }
`;

const MemberLabelContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    left: -25%;
    top: 16%;
    z-index: 0;
    width: 200px;
    background-color: ${props => props.theme.menu};
    border-radius: 0.5rem 0 0 0.5rem;
    border: 1px solid rgba(0,0,0,0.125);
`;

const MemberLabel = styled.div`
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
`;


const CalendarWrapper = ({ children, member, schedule }) => {
    const { theme } = useContext(ThemeContext);
    const [days, setDays] = useState(member ? member.days : schedule ? schedule.days : null);

    const teamClickHandler = (e, day, key, id) => {
        e.preventDefault();
        const dayToChange = day;
        dayToChange.available = !dayToChange.available;

        const stringId = JSON.stringify(id);
        const stringDay = JSON.stringify(dayToChange.day);
        
        fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              query: `mutation {
                        updateTeamMember(input: {id: ${stringId}}, day: {day: ${stringDay}}) {
                            firstName
                            days {
                                day
                                available
                            }
                        }
                    }`})
        })
            .then(res => {
                setDays(prevDays => (
                    prevDays.map(day => {
                        if (day === dayToChange) return {...day, dayToChange }
                        return day;
                    })
                ));
            })
            .catch(err => {
                console.log(err);
            });
    };

    const scheduleClickHandler = (e, day, key, id) => {
        e.preventDefault();
        const dayToChange = day;
        dayToChange.available = !dayToChange.available;

        const stringId = JSON.stringify(id);
        const stringDay = JSON.stringify(dayToChange.day);
        
        fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              query: `mutation {
                        updateSchedule(input: {id: ${stringId}}, day: {day: ${stringDay}}) {
                            days {
                                day
                                available
                            }
                        }
                    }`})
        })
            .then(res => {
                setDays(prevDays => (
                    prevDays.map(day => {
                        if (day === dayToChange) return {...day, dayToChange }
                        return day;
                    })
                ));
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Calendar theme={theme}>
            {member && 
                <MemberLabelContainer theme={theme}>
                    <MemberLabel>
                        <span>{member.firstName} {member.lastName}</span>
                        <span>{member.position}</span>
                    </MemberLabel>
                </MemberLabelContainer>
            }

            {member &&
                member.days.map((day, key) => (
                    <Day onClick={e => teamClickHandler(e, day, key, member.id)} 
                        available={day.available} 
                        theme={theme} 
                        key={key}
                    >
                        {day.day}
                    </Day>
                ))
            }

            {schedule && 
                <MemberLabelContainer theme={theme}>
                    <MemberLabel>
                        <span>Week of:</span>
                        <span>{schedule.week}</span>
                    </MemberLabel>
                </MemberLabelContainer>
            }   
            
            {schedule &&
                schedule.days.map((day, key) => (
                    <Day onClick={e => scheduleClickHandler(e, day, key, schedule.id)} 
                        available={day.available} 
                        theme={theme} 
                        key={key}
                    >
                        {day.day}
                    </Day>
                ))
            }
        </Calendar>
    );
};

export default CalendarWrapper;