import * as React from "react";
import { useData } from '../DataContext';
// framer-motion
import { motion } from "framer-motion";
// mui
import Typography from "@material-ui/core/Typography";

const Step5 = () => {
	const { data: { isSuccess } } = useData();
	const message = isSuccess
		? 'Everything worked out! Thanks for using my humble form!'
		: 'Something went wrong! Please, try again later or click on the RESET button in the left side menu.';

	return (
		<>
			<div className="example-container" style={{ width: '250px', margin: 'auto 0' }}>
				<div className="box">
					<svg className="progress-icon" viewBox="0 0 50 50">
						<ViewPath
							color={isSuccess ? 'rgb(3, 209, 0)' : 'rgb(211, 9, 225)'}
							shape='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
							style={{ translateX: 5, translateY: 5 }} />

						{isSuccess
							? <ViewPath color='rgb(3, 209, 0)' shape="M14,26 L 22,33 L 35,16" />
							: <>
								<ViewPath color='rgb(211, 9, 225)' shape="M17,17 L33,33" />
								<ViewPath color='rgb(211, 9, 225)' shape="M33,17 L17,33" />
							</>
						}
					</svg>
				</div>
			</div>
			<Typography
				component={motion.h3}
				variant='h6'
				align='center'
				initial={{ y: -300, opacity: 0 }}
				animate={{ y: -50, opacity: 1, transition: { delay: 1 } }}>
				{message}
			</Typography>
		</>
	);
};

export default Step5;

const ViewPath = ({ color, shape, ...props }) => {
	return (
		<motion.path
			fill="none"
			strokeWidth="3"
			stroke={color}
			d={shape}
			strokeDasharray="0 1"
			initial={{ pathLength: 0, pathOffset: 1 }}
			animate={{ pathLength: 1, pathOffset: 0 }}
			transition={{ duration: 1 }}
			{...props}
		/>
	)
}