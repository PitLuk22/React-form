import React from 'react';
import { useHistory } from 'react-router-dom';
// Components
import Form from '../components/Form';
import Input from '../components/Input';
import { FormButton } from '../components/FormButton';
// Form validation
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// mui
import InputAdornment from '@material-ui/core/InputAdornment';
// Context
import { useData } from '../DataContext';

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
	const history = useHistory();
	const { data: { personalData }, setValues } = useData();

	const { register, handleSubmit, errors } = useForm({
		mode: 'onBlur',
		defaultValues: {
			firstName: JSON.parse(localStorage.getItem('data'))?.firstName ? JSON.parse(localStorage.getItem('data')).firstName : personalData.firstName,
			secondName: JSON.parse(localStorage.getItem('data'))?.secondName ? JSON.parse(localStorage.getItem('data')).secondName : personalData.secondName,
			age: JSON.parse(localStorage.getItem('data'))?.age ? JSON.parse(localStorage.getItem('data')).age : personalData.age,
		},
		resolver: yupResolver(schema)
	});

	const onSubmit = (data) => {
		history.push('/step2')
		setValues(data)
	}

	return (
		<>
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
				<FormButton color='primary'>Next step</FormButton>
			</Form>
		</>
	)
}

export default Step1;
