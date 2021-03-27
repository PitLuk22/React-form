import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
	<Router>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</Router>
	,
	document.getElementById('root')
);
