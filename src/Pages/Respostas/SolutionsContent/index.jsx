import React from 'react';
import { ContentTemplate } from '../../../Layout';
import styled from 'styled-components';
import SolutionCard from './SolutionCard';
import { useValues } from '../../../Hooks/useValues';
import useQuestion from './useQuestion';

export default function SolutionsContent() {
	const { response } = useValues();

	const {
		question,
		functions: { previousQuestion, nextQuestion },
		booleans: { hasPreviousQuestion, hasNextQuestion },
	} = useQuestion(response);

	return (
		<ContentTemplate>
			<Wrapper>
				<Previous onClick={previousQuestion} active={hasPreviousQuestion()}>
					<i className="fas fa-chevron-left"></i>
				</Previous>
				<SolutionCard
					data={response.questions[question]}
					example={response.example}
					index={question}
				/>
				<Next onClick={nextQuestion} active={hasNextQuestion()}>
					<i className="fas fa-chevron-right"></i>
				</Next>
			</Wrapper>
		</ContentTemplate>
	);
}
const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
`;
const Previous = styled.button`
	display: ${({ active }) => (active ? 'initial' : 'none')};
	background-color: transparent;
	position: absolute;
	top: 0;
	width: 120px;
	height: 100%;
	border: 0;

	transition: 0.3s all;
	opacity: 0.3;
	i {
		color: ${({ theme }) => theme.title.color};
		font-size: 30px;
		transition: 0.3s;
	}
	:hover {
		cursor: pointer;
		opacity: 1;
		i {
			transform: scale(1.28);
			opacity: 0.67;
		}
	}

	left: -100px;
	background-image: linear-gradient(to right, rgba(51, 85, 170, 0), #75b4e01f);

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		width: 100px;
		height: 45px;
		position: fixed;
		left: unset;
		top: unset;
		right: unset;
		left: 0;
		bottom: ${({ theme }) => theme.variables.mobile.footer.bottom};
		opacity: 0.5;
		background-image: unset;
		padding: 0;
		:hover {
			cursor: unset;
			opacity: 0.5;
			i {
				transform: unset;
				opacity: unset;
			}
		}
	}
`;
const Next = styled(Previous)`
	left: unset;
	padding-right: unset;

	right: -100px;
	background-image: linear-gradient(to left, rgba(51, 85, 170, 0), #75b4e01f);

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		width: 100px;
		height: 45px;
		position: fixed;
		left: unset;
		top: unset;
		right: 0;
		background-image: unset;
	}
`;
