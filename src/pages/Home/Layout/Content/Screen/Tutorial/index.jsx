import React from 'react';
import InputLink from './components/InputLink';
import TutorialSteps from './components/TutorialSteps';
import Welcome from './components/Welcome.jsx';
import { TutorialWrapper, Container } from './style.jsx';

export default function Tutorial() {
	return (
		<TutorialWrapper>
			<Container>
				<Welcome />
				<InputLink />
				<TutorialSteps />
			</Container>
		</TutorialWrapper>
	);
}
