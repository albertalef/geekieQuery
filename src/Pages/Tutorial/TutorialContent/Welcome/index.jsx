import styled from 'styled-components';
import React from 'react';
import Title from '../../../../Components/Title';
import Text from '../../../../Components/Text';

export default function Welcome() {
	return (
		<WelcomeWrapper>
			<Title>Bem-vindo!</Title>
			<Text>
				Bem-vindo ao Geekie Query. <br /> Tenha todas as respostas em apenas 3
				passos!
			</Text>
		</WelcomeWrapper>
	);
}

export const WelcomeWrapper = styled.div`
	/* 	background-color: #ff990013; */
	width: 100%;
	height: 20%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		margin-top: 25px;
		height: 22%;
		min-height: 110px;
		p {
			line-height: 20px;
		}
	}
`;
