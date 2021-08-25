import React from 'react';
import { HomeWrapper } from './style';
import Header from './Layout/Header';
import Steps from './Layout/Steps';
import Content from './Layout/Content';
import { ThemeProvider } from 'styled-components';
import lightTheme from './Themes/lightTheme';

export default function Home() {
	return (
		<ThemeProvider theme={lightTheme}>
			<HomeWrapper>
				<Header />
				<Steps />
				<Content />
			</HomeWrapper>
		</ThemeProvider>
	);
}
