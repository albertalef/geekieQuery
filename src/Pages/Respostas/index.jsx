import React from 'react';
import { StepsTemplate, HeaderTemplate } from '../../Layout';
import SolutionsContent from './SolutionsContent';
import styled from 'styled-components';

export default function Respostas({ routeId }) {
	return (
		<Wrapper>
			<HeaderTemplate routeId={routeId} />
			<StepsTemplate routeId={routeId} />
			<SolutionsContent routeId={routeId} />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		display: unset;
	}
`;
