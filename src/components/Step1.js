import React from 'react';
// Components
import Form from './Form';
import Input from './Input';
import FormButton from './FormButton';
// Form validation
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// mui
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
// Context
import { useData } from './DataContext';

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/g, 'First name should not contain numbers')
		.required('First name is a required field'),
	secondName: yup
		.string()
		.matches(/^([^0-9]*)$/g, 'Second name should not contain numbers')
		.required('Second name is a required field'),
	age: yup
		.number()
		.typeError("That doesn't look like your age")
		.positive('Age must be a positive number')
		.required('Age is a required field')
		.integer('Age must be an integer')
		.min(18, 'Sorry, but you are too young')
		.max(110, 'Age must be less than or equal 110'),
})

const Step1 = () => {
	const styles = useStyles();
	const { data: { step }, setStep } = useData();

	const { register, handleSubmit, errors } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});

	const onSubmit = (data, e) => {
		console.log(data);
		setStep(step + 1);
	}

	return (
		<>
			<Box m={4}>
				<Typography component='h2' variant='h4' align='center' className={styles.title}>
					Introduction
				</Typography>
			</Box>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					ref={register}
					id='firstName'
					type='text'
					name='firstName'
					label='First Name'
					error={!!errors.firstName}
					helperText={errors?.firstName?.message} />
				<Input
					ref={register}
					id='secondName'
					type='text'
					name='secondName'
					label='Second Name'
					error={!!errors.secondName}
					helperText={errors?.secondName?.message} />
				<Input
					ref={register}
					id='age'
					type='number'
					name='age'
					label='How old are you?'
					InputProps={{
						endAdornment: <InputAdornment position="end">Full years</InputAdornment>,
					}}
					error={!!errors.age}
					helperText={errors?.age?.message} />
				<FormButton>Next step</FormButton>
			</Form>
		</>
	)
}

export default Step1;

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: theme.typography.titleFontFamily,
	}
}))
