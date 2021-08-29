import React from 'react';
import styled from 'styled-components';

export default function StepIcon({ primary, secondary, active }) {
	return (
		<StepIconWrapper secondary={secondary}>
			<InsideBorder primary={primary}>
				<Dot secondary={secondary} active={active} />
			</InsideBorder>
		</StepIconWrapper>
	);
}

const StepIconWrapper = styled.span`
	width: 30px;
	height: 30px;

	background-color: ${({ secondary }) => {
		return secondary ? secondary : '#fff';
	}};

	border-radius: 15%;

	display: flex;
	justify-content: center;
	align-items: center;
`;
const InsideBorder = styled.div`
	width: 75%;
	height: 75%;

	background-color: ${({ primary }) => {
		return primary ? primary : '#35a0ee';
	}};

	border-radius: 7%;

	display: flex;
	justify-content: center;
	align-items: center;
`;
const Dot = styled.span`
	width: 55%;
	height: 55%;

	background-color: ${({ secondary }) => {
		return secondary ? secondary : '#fff';
	}};
	display: ${({ active }) => (active ? 'initial' : 'none')};
	border-radius: 15%;
`;
