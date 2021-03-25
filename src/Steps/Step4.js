import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// utils
import { addDots } from '../utils'; // it takes a file name and max number of letters
// Components
import Spinner from '../components/Spinner';
import { FormButton, LinkButton } from '../components/FormButton';
import Popover from '../components/Popover';
import FormTitle from '../components/FormTitle';
// mui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
// Context
import { useData } from '../DataContext';
// emailjs
import emailjs from 'emailjs-com';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.individual,
		fontSize: 18,
		fontWeight: 'bold',
		padding: theme.spacing(1.2, 2),
	},
	body: {
		fontSize: 14,
		padding: theme.spacing(1, 2),
		'&:nth-child(odd)': {
			textTransform: 'capitalize',
			'& svg': {
				display: 'flex',
			}
		}
	},
}))(TableCell);

const useStyles = makeStyles((theme) => ({
	container: {
		maxHeight: '180px',
		marginTop: theme.spacing(2),
	}
}))

const Step1 = () => {
	const history = useHistory();
	const styles = useStyles();

	let [loading, setLoading] = useState(false);
	const { data: { personalData }, setSuccess } = useData();

	const res = Object.keys(personalData).length > 0 ? personalData : JSON.parse(localStorage.getItem('data'))
	// get the next array [[field, value], [field2, value2]] without files
	const entries = Object.entries(res).filter(item => item[0] !== 'files' && item[0] !== 'hasPhone')
	// get array of files
	const files = personalData.files;

	const onSubmit = async () => {
		setLoading(true)
		// Way with FORM DATA

		// const formData = new FormData();
		// if (files.length) {
		// 	files.forEach(file => {
		// 		formData.append('file', file, file.name)
		// 	})
		// }
		// entries.forEach(entrie => {
		// 	formData.append(entrie[0], entrie[1])
		// })
		// const response = await fetch('YOUR SERVER', {
		// 	method: 'POST',
		// 	body: formData
		// })
		// console.log(Array.from(formData))

		// Way with EmailJS	
		let dataToSend = {}
		if (files?.length > 0) {
			console.log('i am in');
			const filesNames = files.map(file => file.name).join(', ')
			dataToSend = { ...personalData, files: filesNames }
		} else {
			dataToSend = { ...personalData }
		}

		const res = await emailjs.send('service_fm6xt7m', 'template_t810s0b', dataToSend, 'user_JLgwZlMBwL9JO4Gwj44lF')

		if (res.status === 200) {
			setSuccess(true)
		} else {
			setSuccess(false)
			throw new Error('Something went wrong!')
		}
		setLoading(false)
		history.push('/step5')
	}



	return (
		<>
			<FormTitle margin={2}>Confirmation</FormTitle>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell>Your personal info</StyledTableCell>
							<StyledTableCell></StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{entries.map(([field, value]) => (
							<TableRow key={field}>
								<StyledTableCell component="th" scope="row">{field}</StyledTableCell>
								<StyledTableCell align="right">{value}</StyledTableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{files?.length > 0 && <TableContainer component={Paper} className={styles.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<StyledTableCell align='left'>Files</StyledTableCell>
							<StyledTableCell></StyledTableCell>
							<StyledTableCell></StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{files.map(({ name, size, type }) => (
							<TableRow key={name}>
								<StyledTableCell align='left'>
									{type.includes('image') ? <PhotoSizeSelectActualIcon /> : <DescriptionIcon />}
								</StyledTableCell>
								<StyledTableCell component="th" scope="row">
									<Popover fileName={name}>
										{addDots(name, 16)}
									</Popover>
								</StyledTableCell>
								<StyledTableCell align="right">{`${(size / 1000).toFixed(0)} KB`}</StyledTableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>}

			<LinkButton to='/' color='secondary'>Back to the beginning</LinkButton>
			<FormButton color='primary' onClick={onSubmit}>{loading ? <Spinner /> : 'Submit'}</FormButton>
		</>
	)
}

export default Step1;