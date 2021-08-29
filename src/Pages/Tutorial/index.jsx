import React, { Fragment } from 'react';
import TutorialContent from './TutorialContent';
import TutorialFooter from './TutorialFooter';
import TutorialHeader from './TutorialHeader';
import TutorialSteps from './TutorialSteps';

export default function Tutorial({ routeId }) {
	return (
		<Fragment>
			<TutorialHeader routeId={routeId} />
			<TutorialSteps routeId={routeId} />
			<TutorialContent routeId={routeId} />
			<TutorialFooter routeId={routeId} />
		</Fragment>
	);
}
