import React from 'react';
import { ContentTemplate } from '../../../Layout';
import Welcome from './Welcome';
import InputLink from './InputLink';
import HowUse from './HowUse';

export default function TutorialContent() {
	return (
		<ContentTemplate>
			<Welcome />
			<InputLink />
			<HowUse />
		</ContentTemplate>
	);
}
