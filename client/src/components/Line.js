import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../context/ThemeContext';

const Line = styled.div`
    height: 0px;
    width: 250px;
    margin-left: 0.25rem;
    margin-bottom: 1rem;
    border-top: 1px solid ${props => props.theme.offColor};
`;

const LineWrapper = (props) => {
    const { theme } = useContext(ThemeContext);

    return <Line theme={theme} />
}

export default LineWrapper;