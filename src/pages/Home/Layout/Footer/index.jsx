import React from 'react';

import TutorialButtonGroup from './Screens/Tutorial';
import { ContentSide, FooterWrapper, StepSide } from './style';

export default function Footer() {
	return (
		<FooterWrapper>
			<StepSide />
			<ContentSide>
				<TutorialButtonGroup />
			</ContentSide>
		</FooterWrapper>
	);
}
