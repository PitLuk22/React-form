import React, { forwardRef } from 'react'
import TextField from '@material-ui/core/TextField';

const Input = forwardRef((props, ref) => {
	return <TextField inputRef={ref} variant="outlined" fullWidth margin='normal' {...props} />
})

export default Input

