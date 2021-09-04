import React from 'react';
import './reset.css';
import styled from 'styled-components';
import Tutorial from './Pages/Tutorial';
import lightTheme from './Theme/theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CodigoFonte from './Pages/CodigoFonte';
import Respostas from './Pages/Respostas';
import useWindowDimensions from './Hooks/useWindowDimensions';
import ContextWrapper from './Context/ContextWrapper';

function App() {
	const { height } = useWindowDimensions();
	const routes = [
		{ name: 'Tutorial', path: '/', home: true },
		{ name: 'Codigo Fonte', path: '/codigofonte' },
		{ name: 'Respostas', path: '/respostas' },
	];
	return (
		<Wrapper windowHeight={height}>
			<ContextWrapper theme={lightTheme} routes={routes}>
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
			</ContextWrapper>
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
	* {
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		-ms-user-select: none;
	}
	/* ------------------!!Media-Mobile!!--------------------- */

	@media (max-width: 1000px) {
		/* -------------------------------------- */
		/* display: none; */
		/* -------------------------------------- */
		position: relative;
		height: 100vh;
		height: ${({ windowHeight }) => windowHeight}px;
		min-height: 560px;
		overflow: hidden;
		/* 	background-color: red; */
	}
`;

export default App;
