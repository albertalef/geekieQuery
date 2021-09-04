import React from 'react';
import styled from 'styled-components';
import Text from '../../../../Components/Text';
import Title from '../../../../Components/Title';
import Solution from './Solution';

export default function SolutionCard({ data, index, example }) {
	const { content, choices, wording } = data;
	return (
		<Wrapper>
			<Header>
				<HeaderTitle>
					{example ? 'Exemplo' : 'Questão'} {index + 1}
				</HeaderTitle>
			</Header>
			<Container>
				<QuestionArea>
					<Question dangerouslySetInnerHTML={{ __html: content }} />
					<Wording dangerouslySetInnerHTML={{ __html: wording }} />
				</QuestionArea>
				<SolutionArea>
					{choices.map((choice, index) => (
						<Solution
							key={index}
							isCorrect={choice.isCorrect}
							text={choice.content}
						/>
					))}
				</SolutionArea>
			</Container>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	box-shadow: 0px 0px 40px #7090a87f;
	width: 100%;
	height: 100%;
	border-radius: 5px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex: none;
	z-index: 5;
	background-color: white;
	* {
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		-ms-user-select: none;
	}
	@media (max-height: 580px) {
		font-size: 0.8em;
	}

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		box-shadow: none;
	}
`;

const Container = styled.div`
	/* background-color: red; */
	width: 90%;
	height: 85%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		height: 100%;
		width: 100%;
	}
`;

const Header = styled.div`
	width: 100%;
	height: 10vh;
	background-color: ${({ theme }) => theme.solutionCard.header.backgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 2px solid
		${({ theme }) => theme.solutionCard.header.bottomColor};
	border-radius: 6px 6px 0 0;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		height: 10%;
		border-width: 1px;
	}
`;
const HeaderTitle = styled(Title)`
	font-family: ${({ theme }) => theme.text.fontFamily};
	font-weight: 700;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		font-size: 1.5em;
	}
`;

const QuestionArea = styled.div`
	margin-top: 2.5%;
	width: 100%;
	height: 48%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Question = styled(Text)`
	width: 100%;
	height: 80%;
	overflow: hidden;
	overflow-y: auto;
	padding: 0px 10px;
	font-size: 1em;

	p {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		img {
			width: 100%;
		}
	}
`;
const Wording = styled(Text)`
	color: #8999a2;
	width: 100%;
	height: 18%;
	font-weight: 600;
	padding-left: 10px;
	overflow: hidden;
	line-height: 19px;
	font-size: 1em;
`;
const SolutionArea = styled.div`
	width: 100%;
	height: 45%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
