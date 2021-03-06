import React, { useState, useEffect } from 'react';
import { Theme } from './Theme';
import FormPage from './FormPage';
import DataProvider from '../DataContext';
import { CssBaseline, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background[900]
	}
}))

const App = ({ setTheme, theme }) => {
	const styles = useStyles();
	return (
		<Box className={styles.root}>
			<DataProvider>
				<FormPage setTheme={setTheme} theme={theme} />
			</DataProvider>
		</Box>
	);
}

const AppWithTheme = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');

	// set themeMode into localStorage
	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<Theme currentTheme={theme}>
			<CssBaseline />
			<App setTheme={setTheme} theme={theme} />
		</Theme>
	)
}

export default AppWithTheme;


