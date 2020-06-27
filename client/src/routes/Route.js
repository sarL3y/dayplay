import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import PageLayoutWrapper from "../components/layout/PageLayoutWrapper";

const RouteWrapper = ({ component: Component, isLanding, ...rest }) => {

    return (
        <PageLayoutWrapper isLanding={isLanding}>
            <Route component={Component} {...rest} />
        </PageLayoutWrapper>
    );
}

export default RouteWrapper;

RouteWrapper.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};
