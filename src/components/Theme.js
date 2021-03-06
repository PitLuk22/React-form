import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/grey';

export const Theme = ({ children, currentTheme }) => {
	return <ThemeProvider theme={currentTheme === 'light' ? themeLight : themeDark}>{children}</ThemeProvider>
}

export const themeDark = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#1de9b6',
		},
		secondary: {
			main: '#FFCB8B'
		},
		text: {
			individual: 'rgba(0,0,0, .8)'
		},
		background: {
			...grey,
			main: '#2F3640'
		}

	},
	typography: {
		fontFamily: 'Sora, sans-serif'
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 760,
			lg: 960,
			xl: 1920,
		},
	},
})
export const themeLight = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: cyan[400]
		},
		secondary: {
			main: '#A771FE'
		},
		text: {
			individual: 'rgba(0,0,0, .8)'
		},
	},
	typography: {
		fontFamily: 'Sora, sans-serif'
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 760,
			lg: 960,
			xl: 1920,
		},
	},
})

