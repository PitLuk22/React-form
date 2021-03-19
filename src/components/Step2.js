import React, { useState } from 'react';
// Components
import Form from './Form';
import Input from './Input';
import FormButton from './FormButton';
import Countries from './Counties';
// Form validation
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// mui
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
// Context
import { useData } from './DataContext';
import parsePhoneNumber from 'libphonenumber-js';


const schema = yup.object().shape({
	email: yup
		.string()
		.email('Email is not valid')
		.required('Email is a required field')
})

const Step2 = () => {
	const [countryCode, setCountryCode] = useState('RU');
	const { data: { step }, setStep } = useData();

	const { register, handleSubmit, errors, watch } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});

	// following for phone input checkbox (show or hide)
	const hasPhone = watch("hasPhone");

	// Normalize Phone Number
	const normalizePhoneNumber = (value) => {
		const phoneNumber = parsePhoneNumber(value, countryCode)
		if (!phoneNumber) {
			return value
		}
		return phoneNumber.formatInternational()
	}

	// Submit From
	const onSubmit = (data) => {
		console.log(data);
		setStep(step + 1);
	}

	return (
		<>
			<Box m={4}>
				<Typography component='h2' variant='h4' align='center' display='block' gutterBottom={true}>Contacts</Typography>
			</Box>
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

				<FormControlLabel
					label='Do you have a phone?'
					control={
						<Checkbox inputRef={register} name='hasPhone' color='primary' />
					} />

				{hasPhone &&
					<Input
						ref={register}
						id='phone'
						type='tel'
						name='phone'
						label='Phone'
						error={!!errors.phone}
						helperText={errors?.phone?.message}
						onChange={e => e.target.value = normalizePhoneNumber(e.target.value)}
						InputProps={{
							startAdornment: <InputAdornment position="start">
								<Countries setCountryCode={setCountryCode} />
							</InputAdornment>,
						}}
					/>
				}
				<FormButton>Next step</FormButton>
			</Form>
		</>
	)
}

export default Step2;