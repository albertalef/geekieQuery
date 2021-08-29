import React, { Fragment } from 'react';
import { StepsTemplate, FooterTemplate } from '../../Layout';
import SolutionsContent from './SolutionsContent';

export default function Respostas({ routeId }) {
	return (
		<Fragment>
			<StepsTemplate routeId={routeId} />
			<SolutionsContent routeId={routeId} />
			<FooterTemplate routeId={routeId} />
		</Fragment>
	);
}
