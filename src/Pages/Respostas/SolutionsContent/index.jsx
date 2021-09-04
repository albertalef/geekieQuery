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
				{response ? (
					<SolutionCard data={response.questions[question]} index={question} />
				) : (
					<SolutionCard
						data={{
							content: 'Aqui ficará o conteúdo da pergunta',
							wording: 'Aqui ficará a pergunta principal',
							choices: [
								{ content: 'Exemplo de resposta incorreta' },
								{ content: 'Exemplo de resposta correta', isCorrect: true },
								{ content: 'Exemplo de resposta incorreta' },
								{ content: 'Exemplo de resposta incorreta' },
								{ content: 'Exemplo de resposta incorreta' },
							],
						}}
						index={'Exemplo '}
					/>
				)}
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
`;
const Next = styled(Previous)`
	left: unset;
	padding-right: unset;

	right: -100px;
	background-image: linear-gradient(to left, rgba(51, 85, 170, 0), #75b4e01f);
`;
