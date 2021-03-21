import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const FormTitle = ({ children }) => {
	const styles = useStyles();
	return (
		<Box m={4}>
			<Typography component='h2' variant='h4' align='center' className={styles.title}>
				{children}
			</Typography>
		</Box>
	)
}

export default FormTitle


const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: theme.typography.titleFontFamily,
	}
}))
