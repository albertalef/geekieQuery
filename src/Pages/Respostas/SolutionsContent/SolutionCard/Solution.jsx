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

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		margin: 2px 0px;
	}
`;

const SolutionText = styled(Text)`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 1em;
	:first-letter {
		text-transform: uppercase;
	}
	*:first-letter {
		text-transform: uppercase;
	}
	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		font-size: 0.9em;
	}
`;

const CheckIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	i {
		font-size: 1.4em;
		padding: 0 11px;
		color: #3c9de7ab;
	}
	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		i {
			font-size: 1.1em;
		}
	}
`;
const WhrongIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	i {
		font-size: 1.41em;
		padding: 0 11px;
		color: #5a5a5a58;
	}

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		i {
			font-size: 1.1em;
		}
	}
`;
