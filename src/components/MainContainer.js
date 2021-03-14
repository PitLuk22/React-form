import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const MainContainer = ({ children, ...props }) => {
	const styles = useStyles();
	return (
		<div className="app">
			<Container className={styles.root} maxWidth='md' {...props}>{children}</Container>
		</div>
	);
}

export default MainContainer;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: theme.palette.background.paper
	}
}))