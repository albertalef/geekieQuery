import React from 'react';
import styled from 'styled-components';

export default function ContentSide({ routeId, routes }) {
	return (
		<Wrapper>
			<Container>
				<Step>
					Parte {routeId + 1} de {routes.length}
				</Step>
			</Container>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: calc(100% - ${({ theme }) => theme.variables.stepSide.width});
	height: 100%;
	display: flex;
	justify-content: center;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		display: none;
	}
`;
const Step = styled.h1`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;
	letter-spacing: 0.02em;
	color: ${({ theme }) => theme.text.color};
	opacity: 0.6;
	padding-left: 2%;
`;
const Container = styled.div`
	/* background-color: green; */
	width: ${({ theme }) => theme.variables.context.width};
	max-width: ${({ theme }) => theme.variables.context.maxWidth};
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
