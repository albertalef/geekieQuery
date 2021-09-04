import styled from 'styled-components';
import React from 'react';
import Title from '../../../../Components/Title';
import Text from '../../../../Components/Text';

export default function Paragraph() {
	return (
		<WelcomeWrapper>
			<Title>Codigo Fonte</Title>
			<Text>
				Nesta etapa você deverá colar <br /> o codigo fonte da atividade no
				campo abaixo!
			</Text>
		</WelcomeWrapper>
	);
}

export const WelcomeWrapper = styled.div`
	/* background-color: #ff990013; */
	width: 100%;
	height: 20%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		margin-top: 5px;
		height: 22%;
		min-height: 110px;
		p {
			line-height: 20px;
		}
	}
`;
