import React from 'react';
// Dropzone
import Dropzone from 'react-dropzone';
// React-hook-form
import { Controller } from "react-hook-form";
// mui
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const FileInput = ({ control, name }) => {
	const styles = useStyles();

	const addDots = (fileName) => {
		const length = fileName.length;
		if (length > 25) {
			const type = fileName.split('.').slice(-1, length - 1)
			return fileName.slice(0, 24) + '... .' + type
		}
		return fileName
	}
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={[]}
			render={({ onChange, onBlur, value }) =>
				<Dropzone onDrop={onChange} >
					{({ getRootProps, getInputProps }) =>
						<>
							<Paper {...getRootProps()} variant='outlined' className={styles.root}>
								<CloudUploadIcon className={styles.icon} />
								<input {...getInputProps()} name={name} onBlur={onBlur} />
								<p className={styles.title}>Drag 'n' drop area</p>
							</Paper>
							<List className={styles.list}>
								{value.map((file, index) =>
									<ListItem key={index}>
										<ListItemAvatar>
											<Avatar>
												<DescriptionIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary={addDots(file.name)} secondary={`${file.size / 1000} KB`} />
									</ListItem>
								)}
							</List>
						</>
					}
				</Dropzone>
			}
		/>
	)
}

export default FileInput

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