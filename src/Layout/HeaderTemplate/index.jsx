import React, { useContext } from 'react';
import styled from 'styled-components';
import { RouteContext } from '../../Context/RouteContext';
import ContentSide from './ContentSide/ContentSide';
import StepSide from './StepSide/StepSide';

export default function HeaderTemplate({ routeId }) {
	const routes = useContext(RouteContext);
	return (
		<HeaderWrapper>
			<StepSide />
			<ContentSide routeId={routeId} routes={routes} />
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
