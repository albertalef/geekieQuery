import styled from 'styled-components';
import React from 'react';
import Title from '../../../../../../Components/Utils/Title';
import Text from '../../../../../../Components/Utils/Text';
import { Link, List } from './style';

export default function TutorialSteps() {
	return (
		<TutorialStepsWrapper>
			<Title>Como funciona</Title>
			<List>
				<Text>
					Passo 1 - Pegue o link da atividade e coloque no campo acima.
				</Text>
				<Text>
					Passo 2 - Copie o resultado do link clicando no icone de copiar.
				</Text>
				<Text>
					Passo 3 - Entre no link copiado, e copie todo o codigo do site, usando
					CTRL + A, e CTRL + C (Caso esteja no celular, copie qualquer parte do
					site, depois clique em Selecionar Tudo e Copiar!).
				</Text>
				<Text>
					Passo 4 - Na aba “Codigo fonte” (Deste site), cole todo o código na
					área de texto. Pronto! Você terá as respostas clicando em “Coletar
					Respostas”.
				</Text>
			</List>

			<Link href="https://www.youtube.com/watch?v=CC8pt2KcaLw">
				<p>Tutorial com vídeo</p>
				<i class="fas fa-long-arrow-alt-right"></i>
			</Link>
		</TutorialStepsWrapper>
	);
}

export const TutorialStepsWrapper = styled.ul`
	width: 100%;
	height: 60%;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	h1 {
		font-size: 20px;
	}
`;
