import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Landing from '../views/Landing';
import Team from '../views/Team';
import Individual from '../views/Individual';
import Schedule from '../views/Schedule';

const routes = [
    { path: "/", Component: Landing, isLanding: true },
    { path: "/team", Component: Team, isLanding: false },
    { path: "/individual", Component: Individual, isLanding: false },
    { path: "/schedule", Component: Schedule, isLanding: false },
];

const Routes = () => {
    return (
        <Switch>
            {routes.map(({ path, Component, isLanding }) => (
                <Route key={path} exact path={path} component={Component} isLanding={isLanding} />
            ))}
        </Switch>
    );
};

export default Routes;