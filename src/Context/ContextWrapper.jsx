import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { MenuStatusProvider } from '../Hooks/useMenu';
import { ValuesProvider } from '../Hooks/useValues';
import { RouteContext } from './RouteContext';

export default function ContextWrapper({ theme, routes, children }) {
	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<MenuStatusProvider>
					<RouteContext.Provider value={routes}>
						<ValuesProvider>{children}</ValuesProvider>
					</RouteContext.Provider>
				</MenuStatusProvider>
			</ThemeProvider>
		</Fragment>
	);
}
