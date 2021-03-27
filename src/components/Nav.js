import React from 'react';
import { useHistory } from 'react-router-dom';
// mui
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Context
import { useData } from '../DataContext';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	stepLabel: {
		'& span': {
			fontSize: '1.3rem',
		},
	},
	button: {
		backgroundColor: theme.palette.primary.main,
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	actionsContainer: {
		marginBottom: theme.spacing(2),
	},
	resetContainer: {
		padding: theme.spacing(3),
	},
}));

function getStepContent(step) {
	switch (step) {
		case 0:
			return `Welcome to our exepctional React Form. Please fill some information about you so we can make friends with each other. `;
		case 1:
			return 'Also you can provide your contacts for feedback. We cannot guarantee that we will call you back someday, nevertheless, it is possible.';
		case 2:
			return `Awesome, we already know each other as the closest relatives, isn't it?`;
		case 3:
			return 'Here is all the information that you have provided to us. Rest assured, it is completely confidential';
		default:
			return 'Unknown Step ;('
	}
}

export default function Nav({ steps }) {
	const history = useHistory();
	const styles = useStyles();
	const isHorizontal = useMediaQuery('(max-width:760px)');
	const isMobile = useMediaQuery('(max-width: 500px)');

	const { data: { step }, setStep, delValues } = useData();

	const handleReset = () => {
		delValues()
		setStep(0);
		history.push('/')
	};

	return (
		<div className={styles.root}>

			{isHorizontal && step === steps.length
				? null
				: isHorizontal
					? <Stepper activeStep={step} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{isMobile ? '' : label}</StepLabel>
							</Step>
						))}
					</Stepper>
					: <Stepper activeStep={step} orientation="vertical">
						{steps.map((label, index) => (
							<Step key={label}>
								<StepLabel className={styles.stepLabel} >{label}</StepLabel>
								<StepContent>
									<Typography >{getStepContent(index)}</Typography>
								</StepContent>
							</Step>
						))}
					</Stepper>
			}

			{step === steps.length && (
				<ResetButton styles={styles} handleReset={handleReset} />
			)}
		</div>
	)
}

const ResetButton = ({ styles, handleReset }) => {
	return (
		<Paper square elevation={0} className={styles.resetContainer}>
			<Typography>Congratulations! <br /> All steps were completed - you&apos;re finished</Typography>
			<Button onClick={handleReset} className={styles.button}>Reset</Button>
		</Paper>
	)
}