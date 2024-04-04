import { useEffect } from 'react';
import { MainIndex } from './components';
import { ThemeBlackState, ThemeWhiteState, useToggleTheme } from './hooks/useToggleTheme';

function App() {

	const [theme, setTheme] = useToggleTheme();

	useEffect(() => {
		if (localStorage.getItem('Theme') != "") {
			setTheme(localStorage.getItem('Theme') == 'white' ? ThemeWhiteState : ThemeBlackState)
		} else {
			setTheme(ThemeWhiteState)
		}

	}, [])

	return (
		<div>
			<MainIndex/>
		</div>
	);
}

export default App;
