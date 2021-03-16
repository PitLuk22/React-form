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
// Context
import { useData } from './DataContext';


const schema = yup.object().shape({
	email: yup
		.string()
		.email('Email is not valid')
		.required('Email is a required field'),
	phone: yup
		.number()
		.required('Second name is a required field'),
})

const Step2 = () => {
	const { data: { step }, setStep } = useData();

	const { register, handleSubmit, errors } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});

	const onSubmit = (data) => {
		console.log(data);
		setStep(step + 1);
	}

	return (
		<>
			<Typography variant='h4' align='center' display='block' gutterBottom={true}>Contacts</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					ref={register}
					id='email'
					type='email'
					name='email'
					label='Email'
					required
					error={!!errors.email}
					helperText={errors?.email?.message} />
				<Input
					ref={register}
					id='phone'
					type='tel'
					name='phone'
					label='Phone'
					error={!!errors.phone}
					helperText={errors?.phone?.message} />
				<FormButton>Next step</FormButton>
			</Form>
		</>
	)
}

export default Step2;