import React, { memo } from 'react';
import PropTypes from 'prop-types';

import LandingLayout from './LandingLayout';
import ViewLayout from './ViewLayout';
import ThemeButton from '../buttons/ThemeButton';

const PageLayoutWrapper = ({ children, isLanding }) => {
    
    return (
        isLanding ? (
            <LandingLayout>
                { children }
                <ThemeButton />
            </LandingLayout>
        ) : (
            <ViewLayout>
                { children }
                <ThemeButton />
            </ViewLayout>
        )
    );
};

export default memo(PageLayoutWrapper);

PageLayoutWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    isLanding: PropTypes.bool.isRequired
};