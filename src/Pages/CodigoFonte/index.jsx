import React from 'react';
import { HeaderTemplate, StepsTemplate } from '../../Layout';
import CodigoContent from './CodigoContent';
import CodigoFooter from './CodigoFooter';
import styled from 'styled-components';

export default function CodigoFonte({ routeId }) {
	return (
		<Wrapper>
			<HeaderTemplate routeId={routeId} />
			<StepsTemplate routeId={routeId} />
			<CodigoContent routeId={routeId} />
			<CodigoFooter routeId={routeId} />
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
