import React, { useEffect } from 'react';
import './reset.css';
import styled from 'styled-components';
import Tutorial from './Pages/Tutorial';
import lightTheme from './Theme/theme';
import { Route, withRouter } from 'react-router-dom';
import CodigoFonte from './Pages/CodigoFonte';
import Respostas from './Pages/Respostas';
import useWindowDimensions from './Hooks/useWindowDimensions';
import ContextWrapper from './Context/ContextWrapper';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-206710136-1');

function App() {
	const { height } = useWindowDimensions();
	const routes = [
		{ name: 'Tutorial', path: '/', home: true },
		{ name: 'Codigo Fonte', path: '/codigofonte' },
		{ name: 'Respostas', path: '/respostas' },
	];
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	});
	return (
		<Wrapper windowHeight={height}>
			<ContextWrapper theme={lightTheme} routes={routes}>
				<Route exact path="/">
					<Tutorial routeId={0} />
				</Route>
				<Route path="/codigofonte">
					<CodigoFonte routeId={1} />
				</Route>
				<Route path="/respostas">
					<Respostas routeId={2} />
				</Route>
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

export default withRouter(App);
