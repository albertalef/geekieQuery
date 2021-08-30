import React from 'react';
import './reset.css';
import styled, { ThemeProvider } from 'styled-components';
import Tutorial from './Pages/Tutorial';
import lightTheme from './Theme/theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RouteContext } from './Context/RouteContext';
import CodigoFonte from './Pages/CodigoFonte';
import Respostas from './Pages/Respostas';
import { ValuesProvider } from './Hooks/useValues';
import useWindowDimensions from './Hooks/useWindowDimensions';

function App() {
	const { height } = useWindowDimensions();
	const routes = [
		{ name: 'Tutorial', path: '/', home: true },
		{ name: 'Codigo Fonte', path: '/codigofonte' },
		{ name: 'Respostas', path: '/respostas' },
	];
	return (
		<Wrapper windowHeight={height}>
			<ThemeProvider theme={lightTheme}>
				<RouteContext.Provider value={routes}>
					<ValuesProvider>
						<Router>
							<Route exact path="/">
								<Tutorial routeId={0} />
							</Route>
							<Route path="/codigofonte">
								<CodigoFonte routeId={1} />
							</Route>
							<Route path="/respostas">
								<Respostas routeId={2} />
							</Route>
						</Router>
					</ValuesProvider>
				</RouteContext.Provider>
			</ThemeProvider>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	a {
		text-decoration: none;
	}
	/* ------------------!!Media-Mobile!!--------------------- */

	@media (max-width: 1000px) {
		/* -------------------------------------- */
		display: none;
		/* -------------------------------------- */
		height: 100vh;
		height: ${({ windowHeight }) => windowHeight}px;
		min-height: 560px;
	}
`;

export default App;
