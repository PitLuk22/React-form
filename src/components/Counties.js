import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: 'transparent',
		cursor: 'pointer',
	},
	item: {
		borderRadius: '10px',
		padding: '3px 10px 1px 10px'
	}
}));

const countryCode = [
	{
		country: 'Russian Federation',
		label: 'RU',
	},
	{
		country: 'USA',
		label: 'US',
	},
	{
		country: 'Germany',
		label: 'DE',
	},
	{
		country: 'Belarus',
		label: 'BY',
	},
	{
		country: 'United Kingdom',
		label: 'GB',
	},
];


export default function SimpleListMenu({ setCountryCode }) {
	const styles = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleClickListItem = (event) => {
		console.log(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (index, label) => {
		setSelectedIndex(index);
		setAnchorEl(null);
		setCountryCode(label)
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={styles.root}>
			<List aria-label="Country code">
				<ListItem button className={styles.item} onClick={handleClickListItem}>
					<ListItemText primary={countryCode[selectedIndex].label} />
				</ListItem>
			</List>
			<Menu
				id="lock-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>

				{countryCode.map(({ country, label }, index) => {
					return (
						<MenuItem
							key={country}
							selected={index === selectedIndex}
							onClick={() => handleMenuItemClick(index, label)}>
							{country}
						</MenuItem>
					)
				})}
			</Menu>
		</div>
	);
}