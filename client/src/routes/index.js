import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../views/Home';
import Team from '../views/Team';
import Individual from '../views/Individual';

const routes = [
    { path: "/", Component: Home, isLanding: true },
    { path: "/team", Component: Team, isLanding: false },
    { path: "/individual", Component: Individual, isLanding: false },
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