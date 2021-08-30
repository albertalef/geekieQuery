import React, { useContext } from 'react';
import { FooterTemplate } from '../../../Layout';
import { Link } from 'react-router-dom';
import { RouteContext } from '../../../Context/RouteContext';
import SkipButton from '../../../Components/SkipButton';
import NextButton from '../../../Components/NextButton';

export default function TutorialFooter({ routeId }) {
	const routes = useContext(RouteContext);
	const lastPage = routes[routes.length - 1].path;
	const nextPage = routes[routeId + 1].path;
	return (
		<FooterTemplate>
			<Link to={lastPage}>
				<SkipButton>Pular</SkipButton>
			</Link>
			<Link to={nextPage}>
				<NextButton>
					<p>Proximo Passo</p>
				</NextButton>
			</Link>
		</FooterTemplate>
	);
}
