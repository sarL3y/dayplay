import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

import SurfaceContainer from '../containers/SurfaceContainer';

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
    top: 15%;
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
    console.log(member);
    const [days, setDays] = useState(member ? member.days : schedule ? schedule : null);

    const clickHandler = (e, day, key) => {
        e.preventDefault();
        console.log('Clicked: ', day);

        const dayToChange = day;
        console.log('DayToChange: ', dayToChange);
        dayToChange.available = !dayToChange.available;

        setDays(prevDays => (
            prevDays.map(obj => {
                if (obj === dayToChange) return {...obj, dayToChange }
                return obj;
            })
        ));
    };

    return (
        <Calendar theme={theme}>
            {member && 
                <MemberLabelContainer theme={theme}>
                    <MemberLabel>
                        <span>{member.name}</span>
                        <span>{member.position}</span>
                    </MemberLabel>
                </MemberLabelContainer>
            }
            {member &&
                member.days.map((day, key) => (
                    <Day onClick={e => clickHandler(e, day, key)} 
                        available={day.available} 
                        theme={theme} 
                        key={key}
                    >
                        {day.day}
                    </Day>
                ))
            }   
            
            {schedule &&
                schedule.map((day, key) => (
                    <Day onClick={e => clickHandler(e, day, key)} 
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