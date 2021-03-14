import React, { useState } from 'react';
import { Theme } from './Theme';
import Main from './Main';

const App = () => {

	const [theme, setTheme] = useState(false)

	return (
		<Theme currentTheme={theme}>
			<Main setTheme={setTheme} theme={theme} />
		</Theme>
	);
}

export default App;


