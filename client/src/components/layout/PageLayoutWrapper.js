import React, { memo } from 'react';
import PropTypes from 'prop-types';

import LandingLayout from './LandingLayout';
import ViewLayout from './ViewLayout';

const PageLayoutWrapper = ({ children, isLanding }) => {
    
    return (
        isLanding ? (
            <LandingLayout>
                { children }
            </LandingLayout>
        ) : (
            <ViewLayout>
                { children }
            </ViewLayout>
        )
    );
};

export default memo(PageLayoutWrapper);

PageLayoutWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    isLanding: PropTypes.bool.isRequired
};