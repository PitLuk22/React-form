import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh'
	}
}))
const MainContainer = ({ children, ...props }) => {
	const styles = useStyles();
	return (
		<div className="app">
			<Container className={styles.root} maxWidth='md' {...props}>{children}</Container>
		</div>
	);
}

export default MainContainer;