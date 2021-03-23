import React from 'react';
import { Link } from 'react-router-dom';
//mui
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export const FormButton = ({ children }) => {
	const styles = useStyles();
	return (
		<Button type='submit' variant='contained' color='primary' fullWidth className={styles.root}>{children}</Button>
	)
}
export const LinkButton = ({ children, ...props }) => {
	const styles = useStyles();
	return (
		<Button {...props} component={Link} variant='contained' fullWidth className={styles.root}>{children}</Button>
	)
}


const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
	}
}))
