import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	stepper: {
		backgroundColor: theme.palette.info.main
	},
	stepLabel: {
		'& span': {
			fontSize: '1.3rem',
		},
	},
	button: {
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

function getSteps() {
	return ['Introduction', 'Human basics', 'Additional files', 'Confirmation'];
}
function getLinks() {
	return ['/', '/step2', '/step3', '/step4'];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
		case 1:
			return 'An ad group contains one or more ads which target a shared set of keywords.';
		case 2:
			return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
		default:
			return 'Unknown step';
	}
}

export default function Nav() {
	const styles = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();
	const links = getLinks();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={styles.root}>
			<Stepper activeStep={activeStep} orientation="vertical" className={styles.stepper}>
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel className={styles.stepLabel} >{label}</StepLabel>
						<StepContent>
							<Typography >{getStepContent(index)}</Typography>
							<div className={styles.actionsContainer}>
								<Button
									component={Link}
									to={index === 0 ? '/' : links[index - 1]}
									disabled={activeStep === 0}
									onClick={handleBack}
									className={styles.button}>
									Previous step
								</Button>
								<Button onClick={handleNext}
									className={styles.button}>Next</Button>
								{/* <Link >Previous step</Link> */}
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} className={styles.resetContainer}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset} className={styles.button}>Reset</Button>
				</Paper>
			)}
		</div>
	);
}