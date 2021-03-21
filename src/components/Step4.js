import React from 'react';
import { useHistory, Link } from 'react-router-dom';
// Components
import Form from './Form';
import { FormButton, LinkButton } from './FormButton';
import FormTitle from './FormTitle';
// Form validation
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// mui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
// Context
import { useData } from './DataContext';

const Step1 = () => {
	const history = useHistory();
	const styles = useStyles();
	const { data: { personalData, step }, setValues, setStep } = useData();

	const { handleSubmit } = useForm({
		defaultValues: {
			firstName: personalData.firstName,
			secondName: personalData.secondName,
			age: personalData.age,
			email: personalData.email,
			hasPhone: personalData.hasPhone,
			phone: personalData.phone,
		},
	});

	const onSubmit = (data) => {
		console.log(data);
	}

	return (
		<>
			<FormTitle>Introduce</FormTitle>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<List className={styles.list}>
					{personalData.files.map((file, index) =>
						<ListItem key={index}>
							<ListItemAvatar>
								<Avatar>
									<DescriptionIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={file.name} secondary={`${file.size / 1000} KB`} />
						</ListItem>
					)}
				</List>
				<LinkButton to='/'>Back to start</LinkButton>
				<FormButton>Send to server</FormButton>
			</Form>
		</>
	)
}

export default Step1;


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '150px',
		border: '1px dashed rgba(0,0,0, .5)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(3),
		cursor: 'pointer'
	},
	title: {
		fontSize: '20px',
		color: 'grey'
	},
	icon: {
		marginBottom: theme.spacing(2),
		fontSize: '50px',
		color: 'grey'
	},
	list: {
		maxHeight: '230px',
		marginTop: theme.spacing(2),
		overflowY: 'scroll'
	}
}))