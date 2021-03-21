import React from 'react';
// Components
import Form from './Form';
import FileInput from './FileInput';
import FormButton from './FormButton';
import FormTitle from './FormTitle';
// Form validation
import { useForm } from "react-hook-form";
//mui
import { makeStyles } from '@material-ui/core/styles';
// Context
import { useData } from './DataContext';

const Step2 = () => {
	const styles = useStyles();
	const { data: { step }, setStep } = useData();

	const { control, handleSubmit } = useForm();

	// Submit From
	const onSubmit = (data) => {
		console.log(data);
		setStep(step + 1);
	}

	return (
		<>
			<FormTitle>Additional files</FormTitle>
			<Form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
				<FileInput control={control} name='file'></FileInput>
				<FormButton>Next step</FormButton>
			</Form>
		</>
	)
}

export default Step2;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	}
}))