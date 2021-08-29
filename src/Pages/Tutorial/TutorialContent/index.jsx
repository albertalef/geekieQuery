import React from 'react';
import styled from 'styled-components';
import { ContentTemplate } from '../../../Layout';
import Welcome from './Welcome';
import InputLink from './InputLink';
import HowUse from './HowUse';

export default function TutorialContent() {
	return (
		<ContentTemplate>
			<ContentWrapper>
				<Welcome />
				<InputLink />
				<HowUse />
			</ContentWrapper>
		</ContentTemplate>
	);
}

export const ContentWrapper = styled.div`
	/* background-color: #ff000014; */
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
