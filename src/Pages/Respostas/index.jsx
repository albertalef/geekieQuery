import React from 'react';
import { StepsTemplate, FooterTemplate } from '../../Layout';
import SolutionsContent from './SolutionsContent';
import styled from 'styled-components';

export default function Respostas({ routeId }) {
	return (
		<Wrapper>
			<StepsTemplate routeId={routeId} />
			<SolutionsContent routeId={routeId} />
			<FooterTemplate routeId={routeId} />
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
