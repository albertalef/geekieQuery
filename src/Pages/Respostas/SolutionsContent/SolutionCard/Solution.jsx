import styled from 'styled-components';

import React from 'react';
import Text from '../../../../Components/Text';

export default function Solution({ isCorrect, text }) {
	return (
		<Wrapper isCorrect={isCorrect}>
			{isCorrect ? (
				<CheckIcon>
					<i class="fas fa-check-circle"></i>
				</CheckIcon>
			) : (
				<WhrongIcon>
					<i class="fas fa-times-circle"></i>
				</WhrongIcon>
			)}

			<SolutionText dangerouslySetInnerHTML={{ __html: text }} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 20%;
	width: 100%;
	background-color: ${({ isCorrect }) =>
		isCorrect ? '#71d87139' : '#e7555513'};
	margin: 2px;
	overflow: hidden;
	display: flex;
	align-items: center;
	border: 2px solid rgba(60, 157, 231, 0.068);
	border-radius: 5px;
	justify-content: flex-start;
	:hover {
		transform: scale(1.005);
	}
`;

const SolutionText = styled(Text)`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const CheckIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	i {
		font-size: 22px;
		padding: 0 11px;
		color: #71d871;
	}
`;
const WhrongIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	i {
		font-size: 22px;
		padding: 0 11px;
		color: #e75555;
	}
`;
