import React, { useContext } from 'react';
import styled from 'styled-components';
import { RouteContext } from '../../Context/RouteContext';

export default function HeaderTemplate({ routeId }) {
	const routes = useContext(RouteContext);
	return (
		<HeaderWrapper>
			<StepSide>
				<MobileContainer></MobileContainer>
			</StepSide>
			<ContentSide>
				<Container>
					<Step>
						Parte {routeId + 1} de {routes.length}
					</Step>
				</Container>
			</ContentSide>
		</HeaderWrapper>
	);
}

const HeaderWrapper = styled.div`
	width: 100%;
	height: ${({ theme }) => theme.variables.header.height};
	position: fixed;
	/* background-color: #ff000021; */
	top: 0;
	left: 0;
	font-family: ${({ theme }) => theme.title.fontFamily};
	display: flex;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		height: ${({ theme }) => theme.variables.mobile.header.height};
		background-color: red;
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

const StepSide = styled.div`
	width: ${({ theme }) => theme.variables.stepSide.width};
	max-width: ${({ theme }) => theme.variables.stepSide.maxWidth};
	height: 100%;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid ${({ theme }) => theme.mobile.header.bottomColor};
		max-width: unset;
	}
`;
const MobileContainer = styled.div`
	display: none;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		display: none;
	}
`;

const ContentSide = styled.div`
	width: calc(100% - ${({ theme }) => theme.variables.stepSide.width});
	height: 100%;
	display: flex;
	justify-content: center;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		display: none;
	}
`;
