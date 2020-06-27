import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Routes from './routes';

import './App.css';

const history = createBrowserHistory();

const App = () => {
	console.log('Welcome to my app!');

	return (
		<Router history={history}>
			<Routes />
		</Router>
	);
};

export default App;
