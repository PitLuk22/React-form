import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Components
import Form from '../components/Form';
import Input from '../components/Input';
import { FormButton } from '../components/FormButton';
import Countries from '../components/Counties';
import FormTitle from '../components/FormTitle';
// Form validation
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// mui
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// Context
import { useData } from '../DataContext';
import parsePhoneNumber from 'libphonenumber-js';


const schema = yup.object().shape({
	email: yup
		.string()
		.email('Email is not valid')
		.required('Email is a required field')
})

const Step2 = () => {
	const history = useHistory();

	const [countryCode, setCountryCode] = useState('RU');
	const { data: { personalData }, setValues } = useData();

	const { register, handleSubmit, errors, watch } = useForm({
		mode: 'onBlur',
		defaultValues: {
			email: JSON.parse(localStorage.getItem('data'))?.email ? JSON.parse(localStorage.getItem('data')).email : personalData.email,
			hasPhone: JSON.parse(localStorage.getItem('data'))?.hasPhone ? Boolean(JSON.parse(localStorage.getItem('data')).hasPhone) : personalData.hasPhone,
			phone: JSON.parse(localStorage.getItem('data'))?.phone ? JSON.parse(localStorage.getItem('data')).phone : personalData.phone,
		},
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
		history.push('/step3')
		setValues(data)
	}

	return (
		<>
			<FormTitle margin={4}>Contacts</FormTitle>
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
						<Checkbox
							// these two props need for display checkbox item correctly
							defaultValue={personalData.hasPhone}
							defaultChecked={personalData.hasPhone}
							//
							inputRef={register}
							name='hasPhone'
							color='primary' />
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
				<FormButton color='primary'>Next step</FormButton>
			</Form>
		</>
	)
}

export default Step2;