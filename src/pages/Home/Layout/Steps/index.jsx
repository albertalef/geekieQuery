import { StepsWrapper, StepsContainer, Step } from './style.jsx';
import React /* , { useState } */ from 'react';
import StepIcon from './elements/StepIcon.jsx';

export default function Steps() {
	/* const [currentStep, setStep] = useState(0); */

	return (
		<StepsWrapper>
			<StepsContainer>
				<Step>
					<StepIcon
						active
						primary={({ theme }) => theme.primaryColor}
						secondary={({ theme }) => theme.secondaryColor}
					/>
					<p>Tutorial</p>
				</Step>
				<Step>
					<StepIcon
						active
						primary={({ theme }) => theme.primaryColor}
						secondary={({ theme }) => theme.secondaryColor}
					/>
					<p>Codigo Fonte</p>
				</Step>
				<Step>
					<StepIcon
						active
						primary={({ theme }) => theme.primaryColor}
						secondary={({ theme }) => theme.secondaryColor}
					/>
					<p>Respostas</p>
				</Step>
			</StepsContainer>
		</StepsWrapper>
	);
}
