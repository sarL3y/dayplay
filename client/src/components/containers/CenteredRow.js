import React from 'react';
import styled from 'styled-components';

// import { ThemeContext } from '../../context/ThemeContext';

const CenteredRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0px;
`;

const Wrapper = ({ children }) => {
    // const { theme } = useContext(ThemeContext);

    return (
        <CenteredRow>
            { children }
        </CenteredRow>
    );
};

export default Wrapper;