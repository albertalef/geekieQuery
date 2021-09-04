import React, { useContext } from 'react';
import { FooterTemplate } from '../../../Layout';
import { Link } from 'react-router-dom';
import { RouteContext } from '../../../Context/RouteContext';
import SkipButton from '../../../Components/SkipButton';
import NextButton from '../../../Components/NextButton';
import styled from 'styled-components';

export default function TutorialFooter({ routeId }) {
	const routes = useContext(RouteContext);
	const lastPage = routes[routes.length - 1].path;
	const nextPage = routes[routeId + 1].path;
	return (
		<FooterTemplate>
			<Link to={lastPage}>
				<SkipButtonMod>Pular</SkipButtonMod>
			</Link>
			<Link to={nextPage}>
				<NextButton>
					<p>Proximo Passo</p>
				</NextButton>
			</Link>
		</FooterTemplate>
	);
}
const SkipButtonMod = styled(SkipButton)`
	background-color: transparent;
`;
