import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const FormButton = ({ children }) => {
	const styles = useStyles();
	return (
		<Button type='submit' variant='contained' color='primary' fullWidth className={styles.root}>{children}</Button>
	)
}

export default FormButton

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2)
	}
}))
