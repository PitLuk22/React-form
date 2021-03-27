import React from 'react';
import { useHistory } from 'react-router-dom'
// Components
import Form from '../components/Form';
import FileInput from '../components/FileInput';
import { FormButton } from '../components/FormButton';
// Form validation
import { useForm } from "react-hook-form";
//mui
import { makeStyles } from '@material-ui/core/styles';
// Context
import { useData } from '../DataContext';

const Step2 = () => {
	const history = useHistory();
	const styles = useStyles();
	const { data: { personalData }, setValues } = useData();

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
		<Form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
			<FileInput control={control} name='files'></FileInput>
			<FormButton color='primary'>Next step</FormButton>
		</Form>
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