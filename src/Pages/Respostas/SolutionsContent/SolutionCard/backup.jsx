import React from 'react';
import styled from 'styled-components';
import Text from '../../../../Components/Text';
import Title from '../../../../Components/Title';
import Solution from './Solution';

export default function SolutionCard({ data, index }) {
	const { content, choices, wording } = data;
	return (
		<Wrapper>
			<Header>
				<HeaderTitle>Questão {index + 1}</HeaderTitle>
			</Header>
			<Container>
				<QuestionArea>
					<QuestionContentContainer>
						<Content dangerouslySetInnerHTML={{ __html: content }}></Content>
					</QuestionContentContainer>
					<Wording dangerouslySetInnerHTML={{ __html: wording }}></Wording>
				</QuestionArea>
				<SolutionContainer>
					{choices.map((choice, index) => (
						<Solution
							key={index}
							isCorrect={choice.isCorrect}
							text={choice.content}
						/>
					))}
				</SolutionContainer>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	background-color: #ffffff;
	box-shadow: 0px 0px 40px rgba(15, 48, 71, 0.24);
	border-radius: 11px;
	height: 100%;
	width: 100%;
	margin-bottom: 50px;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
`;
const Header = styled.div`
	width: 100%;
	height: 10%;
	background-color: #39a2ecb0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const HeaderTitle = styled(Title)`
	font-family: ${({ theme }) => theme.title.fontFamily};
`;
const Container = styled.div`
	background-color: #ff00002b;
	width: 80%;
	height: 100%;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: space-between;
`;
const QuestionArea = styled.div`
	background-color: red;
	height: 45%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const QuestionContentContainer = styled.div`
	margin-top: 2%;

	/* background-color: #96000052; */

	height: 80%;
	display: flex;
	align-items: center;
`;
const Content = styled(Text)`
	max-height: 85%;
	font-size: 18px;
	overflow-y: hidden;
	img {
		padding-right: 20px;
		width: 90%;
		height: auto;
	}
`;
const Wording = styled(Text)`
	font-size: 16px;
	color: #5f6b72;
	font-weight: 700;
	/* background-color: #ff88005c; */
`;
const SolutionContainer = styled.div`
	background-color: #00ff2a;
	height: 30vh;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
