import React from 'react';
import { useHistory } from 'react-router-dom'
// Components
import Form from './Form';
import FileInput from './FileInput';
import { FormButton } from './FormButton';
import FormTitle from './FormTitle';
// Form validation
import { useForm } from "react-hook-form";
//mui
import { makeStyles } from '@material-ui/core/styles';
// Context
import { useData } from './DataContext';

const Step2 = () => {
	const history = useHistory();
	const styles = useStyles();
	const { data: { personalData, step }, setValues, setStep } = useData();

	const { control, handleSubmit } = useForm({
		defaultValues: {
			files: personalData.files
		}
	});

	// Submit From
	const onSubmit = (data) => {
		setValues(data)
		history.push('/step4')
	}

	return (
		<>
			<FormTitle>Additional files</FormTitle>
			<Form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
				<FileInput control={control} name='files'></FileInput>
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