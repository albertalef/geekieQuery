import styled from 'styled-components';

import React from 'react';
import Text from '../../../../Components/Text';

export default function Solution({ isCorrect, text }) {
	return (
		<Wrapper isCorrect={isCorrect}>
			{isCorrect ? (
				<CheckIcon>
					<i className="fas fa-check-circle"></i>
				</CheckIcon>
			) : (
				<WhrongIcon>
					<i className="fas fa-times-circle"></i>
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
		isCorrect ? '#3c9de724' : '#cacaca11'};
	margin: 2px;
	overflow: hidden;
	display: flex;
	align-items: center;
	border: 2px solid #3c9de711;
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
	:first-letter {
		text-transform: uppercase;
	}
	*:first-letter {
		text-transform: uppercase;
	}
`;

const CheckIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	i {
		font-size: 22px;
		padding: 0 11px;
		color: #3c9de7ab;
	}
`;
const WhrongIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	i {
		font-size: 22px;
		padding: 0 11px;
		color: #5a5a5a58;
	}
`;
