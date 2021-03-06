import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const MainContainer = ({ children, ...props }) => {
	const styles = useStyles();
	return <Container className={styles.root} maxWidth='lg' {...props}>{children}</Container>
}

export default MainContainer;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: theme.palette.background[900],
		[theme.breakpoints.between('xs', 'sm')]: {
			alignItems: 'flex-start',
		}
	}
}))