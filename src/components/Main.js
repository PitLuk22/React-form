import React, { useState } from 'react'
import MainContainer from './MainContainer';
import Nav from './Nav';
import { Route } from 'react-router-dom'
import { Grid, Typography, Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Step1 = () => <div>Step 1</div>
const Step2 = () => <div>Step 2</div>
const Step3 = () => <div>Step 3</div>
const Step4 = () => <div>Step 4</div>


const Main = ({ theme, setTheme }) => {

	const styles = useStyles()

	const [state, setState] = useState({
		checkedA: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
		setTheme(!theme)
	};

	return (
		<MainContainer>
			<Grid component='main' container className={styles.main}>
				<Grid item xs={6} component='aside' className={styles.left}>
					<Typography variant='h4' align='center' color='textPrimary'>Gorgeous Form</Typography>
					<Nav />
					<Switch
						checked={state.checkedA}
						onChange={handleChange}
						name="checkedA"
						inputProps={{ 'aria-label': 'secondary checkbox' }}
					/>
				</Grid>
				<Grid item xs={6} component='section' className={styles.right}>
					<Route exact path='/' component={Step1} />
					<Route path='/step2' component={Step2} />
					<Route path='/step3' component={Step3} />
					<Route path='/step4' component={Step4} />
				</Grid>
			</Grid>
		</MainContainer>
	)
}

export default Main

const useStyles = makeStyles((theme) => ({
	main: {
		height: '90%',
		borderRadius: theme.typography.round(15),
		boxShadow: theme.shadows[20],
	},
	left: {
		alignItems: 'center',
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(3),
		height: '100%',
		borderTopLeftRadius: theme.typography.round(15),
		borderBottomLeftRadius: theme.typography.round(15),
	},
	right: {
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
		height: '100%',
		borderTopRightRadius: theme.typography.round(15),
		borderBottomRightRadius: theme.typography.round(15),
	},

}))