import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom'
import DataProvider from './components/DataContext'

ReactDOM.render(
	<Router>
		{/* <CssBaseline /> */}
		<DataProvider>
			<App />
		</DataProvider>
	</Router>,
	document.getElementById('root')
);
