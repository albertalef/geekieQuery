import styled from 'styled-components';
import React from 'react';
import Title from '../../../../../Components/Utils/Title';
import Text from '../../../../../Components/Utils/Text';

export default function Welcome() {
	return (
		<WelcomeWrapper>
			<Title>Bem-vindo!</Title>
			<Text>
				Bem-vindo ao Geekie Query. <br /> Este site foi feito apenas por estudo,
				então nada aqui é monetário!
			</Text>
		</WelcomeWrapper>
	);
}

export const WelcomeWrapper = styled.div`
	/* background-color: #ff990013; */
	width: 100%;
	height: 25%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
