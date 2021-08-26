import React from 'react';
import Header from './Layout/Header';
import Steps from './Layout/Steps';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import styled, { ThemeProvider } from 'styled-components';
import lightTheme from './Themes/lightTheme';

export default function Home() {
	return (
		<ThemeProvider theme={lightTheme}>
			<HomeWrapper>
				<Header />
				<Steps />
				<Content />
				<Footer />
			</HomeWrapper>
		</ThemeProvider>
	);
}
const HomeWrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: grey;
	display: flex;
	justify-content: start;
`;
