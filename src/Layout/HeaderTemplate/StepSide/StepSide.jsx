import React from 'react';
import styled from 'styled-components';

export default function StepSide() {
	return (
		<Wrapper>
			<MobileContainer />
		</Wrapper>
	);
}

const Wrapper = styled.div`
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
