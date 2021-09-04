import React from 'react';
import TutorialContent from './TutorialContent';
import TutorialFooter from './TutorialFooter';
import TutorialHeader from './TutorialHeader';
import TutorialSteps from './TutorialSteps';
import styled from 'styled-components';

export default function Tutorial({ routeId }) {
	return (
		<Wrapper>
			<TutorialHeader routeId={routeId} />
			<TutorialSteps routeId={routeId} />
			<TutorialContent routeId={routeId} />
			<TutorialFooter routeId={routeId} />
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
		overflow: hidden;
	}
`;
