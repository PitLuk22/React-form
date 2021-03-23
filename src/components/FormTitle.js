import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const FormTitle = ({ children, margin }) => {
	return (
		<Box m={margin}>
			<Typography component='h2' variant='h4' align='center'>
				{children}
			</Typography>
		</Box>
	)
}

export default FormTitle

