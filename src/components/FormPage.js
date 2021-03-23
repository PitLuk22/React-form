import React from 'react';
// Components
import MainContainer from './MainContainer';
import Nav from './Nav';
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';
import Step3 from '../Steps/Step3';
import Step4 from '../Steps/Step4';
import Step5 from '../Steps/Step5';
// Router
import { Route } from 'react-router-dom'
// mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';


const FormPage = ({ theme, setTheme }) => {

	const styles = useStyles()

	const handleChange = () => {
		setTheme(!theme)
	};

	return (
		<MainContainer>
			<Grid component='main' container className={styles.main}>
				<Grid item xs={6} component='aside' className={styles.left}>
					<Box m={4}>
						<Typography component='h2' variant='h4' align='center' className={styles.title}>Gorgeous Form</Typography>
					</Box>
					<Nav />
				</Grid>
				<Grid item container xs={6} component='section' className={styles.right} direction="column" justify="flex-start" alignItems="center">
					<FormControlLabel
						className={styles.switch}
						control={<StyledSwitch checked={theme} onChange={handleChange} name="mode" />}
					/>
					<Route exact path='/' component={Step1} />
					<Route path='/step2' component={Step2} />
					<Route path='/step3' component={Step3} />
					<Route path='/step4' component={Step4} />
					<Route path='/step5' component={Step5} />
				</Grid>
			</Grid>
		</MainContainer>
	)
}

export default FormPage;

const StyledSwitch = withStyles((theme) => ({
	switchBase: {
		color: theme.palette.primary.main,
		'&$checked': {
			color: theme.palette.primary.main,
		},
		'&$checked + $track': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	checked: {},
	track: {},
}))(Switch);

const useStyles = makeStyles((theme) => ({
	main: {
		height: '90%',
		borderRadius: theme.typography.round(15),
		boxShadow: theme.shadows[20],
	},
	title: {
		fontFamily: theme.typography.titleFontFamily,
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
		position: 'relative',
		backgroundColor: theme.palette.background[700],
		padding: theme.spacing(3),
		height: '100%',
		borderTopRightRadius: theme.typography.round(15),
		borderBottomRightRadius: theme.typography.round(15),
	},
	switch: {
		position: 'absolute',
		top: '10px',
		right: '0px',
	}

}))