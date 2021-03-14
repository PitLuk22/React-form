// import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan';
// // import blue from '@material-ui/core/colors/blue';

export const Theme = ({ children, currentTheme }) => {
	return <ThemeProvider theme={currentTheme ? themeDark : themeLight}>{children}</ThemeProvider>
}

export const themeDark = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#1de9b6',
		},
		secondary: {
			main: '#1de9b6',
		},
		background: {
			paper: '#222222',
		}
	},
})
export const themeLight = createMuiTheme({
	palette: {
		type: 'light',
		primary: cyan
	}
})

