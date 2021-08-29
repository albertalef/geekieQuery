import { StepsWrapper, StepsContainer, Step } from './style.jsx';
import React, { useContext /* , { useState } */ } from 'react';
import StepIcon from './StepIcon.jsx';
import { Link } from 'react-router-dom';
import { RouteContext } from '../../Context/RouteContext/index.jsx';
export default function StepsTemplate({ routeId }) {
	const routes = useContext(RouteContext);
	return (
		<StepsWrapper>
			<StepsContainer>
				{routes.map((route, index) => {
					return (
						<Link to={route.path} key={index}>
							<Step>
								<StepIcon
									active={routeId === index ? true : false}
									primary={({ theme }) => theme.primaryColor}
									secondary={({ theme }) => theme.secondaryColor}
								/>
								<p>{route.name}</p>
							</Step>
						</Link>
					);
				})}
			</StepsContainer>
		</StepsWrapper>
	);
}
