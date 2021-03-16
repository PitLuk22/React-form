import React, { useState } from 'react'
import MainContainer from './MainContainer';
import Nav from './Nav';
import { Route } from 'react-router-dom'
import { Grid, Typography, Switch, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Step1 from './Step1';
import Step2 from './Step2';

const Step3 = () => <div>Step 3</div>
const Step4 = () => <div>Step 4</div>




const Main = ({ theme, setTheme }) => {

	const styles = useStyles()

	const handleChange = () => {
		setTheme(!theme)
	};

	return (
		<MainContainer>
			<Grid component='main' container className={styles.main}>
				<Grid item xs={6} component='aside' className={styles.left}>
					<Typography variant='h4' align='center' className={styles.title}>Gorgeous Form</Typography>
					<Nav />
					<FormControlLabel
						label={theme ? 'Dark mode' : 'Light mode'}
						control={<StyledSwitch checked={theme} onChange={handleChange} name="mode" />}
					/>
				</Grid>
				<Grid item container xs={6} component='section' className={styles.right} direction="column" justify="center" alignItems="center">
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

const StyledSwitch = withStyles((theme) => ({
	switchBase: {
		color: theme.palette.primary.main,
	},
}))(Switch);

const useStyles = makeStyles((theme) => ({
	main: {
		height: '90%',
		borderRadius: theme.typography.round(15),
		boxShadow: theme.shadows[20],
	},
	title: {
		padding: theme.spacing(3, 0),
		color: theme.palette.text.primary
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
		backgroundColor: theme.palette.background[700],
		padding: theme.spacing(3),
		height: '100%',
		borderTopRightRadius: theme.typography.round(15),
		borderBottomRightRadius: theme.typography.round(15),
	},

}))