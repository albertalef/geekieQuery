import styled from 'styled-components';
import React from 'react';
import Title from '../../../../Components/Title';
import Text from '../../../../Components/Text';
import { /* Link, */ List } from './style';

export default function TutorialSteps() {
	return (
		<TutorialStepsWrapper>
			<Title>Como funciona</Title>
			<List>
				<Text>
					<strong>Passo 1</strong> - Pegue o link da atividade e coloque no
					campo acima.
				</Text>
				<Text>
					<strong>Passo 2</strong> - Copie o resultado do link clicando no icone
					de copiar.
				</Text>
				<Text>
					<strong>Passo 3</strong> - Entre no link copiado, e copie todo o
					codigo do site, usando CTRL + A, e CTRL + C (Caso esteja no celular,
					copie qualquer parte do site, depois clique em Selecionar Tudo e
					Copiar!).
				</Text>
				<Text>
					<strong>Passo 4</strong> - Na aba “Codigo fonte” (Deste site), cole
					todo o código na área de texto. Pronto! Você terá as respostas
					clicando em “Coletar Respostas”.
				</Text>
			</List>

			{/* <Link href="https://www.youtube.com/watch?v=CC8pt2KcaLw" target="_blank">
				<p>Tutorial com vídeo</p>
				<i className="fas fa-long-arrow-alt-right"></i>
			</Link> */}
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
	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		flex-grow: 1;
		p {
			line-height: 20px;
		}
	}
`;
