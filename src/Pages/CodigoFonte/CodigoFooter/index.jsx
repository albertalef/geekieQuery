import React from 'react';
import { FooterTemplate } from '../../../Layout';
import SkipButton from '../../../Components/SkipButton';
import NextButton from '../../../Components/NextButton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { RouteContext } from '../../../Context/RouteContext';
import { useValues } from '../../../Hooks/useValues';

export default function CodigoFooter({ routeId }) {
	const routes = useContext(RouteContext);
	const previousPage = routes[routeId - 1].path;
	const nextPage = routes[routeId + 1].path;
	const { getResponsesHandler } = useValues();
	return (
		<FooterTemplate>
			<Link to={previousPage}>
				<Previous>
					<i class="fas fa-long-arrow-alt-left"></i>
					<p>Anterior</p>
				</Previous>
			</Link>
			<Link to={nextPage}>
				<NextUpdated
					onClick={(e) => {
						getResponsesHandler(e);
					}}
				>
					<p>Ver Respostas</p>
					<i class="fas fa-check"></i>
				</NextUpdated>
			</Link>
		</FooterTemplate>
	);
}
const NextUpdated = styled(NextButton)`
	width: 200px;
	height: 45px;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		width: initial;
		height: initial;
		min-width: unset;
		padding: 10px 27px;
		height: 100%;
		width: unset;
		i {
			display: none;
		}
	}
`;

const Previous = styled(SkipButton)`
	width: 200px;
	height: 45px;
	box-shadow: none;
	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		width: initial;
		height: initial;
		min-width: unset;
		padding: 10px 15px;
		height: 100%;
		i {
			display: none;
		}
	}
`;
