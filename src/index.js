import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
	<>
		<CssBaseline>
			<Router>
				<App />
			</Router>
		</CssBaseline>
	</>,
	document.getElementById('root')
);
