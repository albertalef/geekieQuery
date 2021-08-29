import React, { Fragment } from 'react';
import { HeaderTemplate, StepsTemplate } from '../../Layout';
import CodigoContent from './CodigoContent';
import CodigoFooter from './CodigoFooter';

export default function CodigoFonte({ routeId }) {
	return (
		<Fragment>
			<HeaderTemplate routeId={routeId} />
			<StepsTemplate routeId={routeId} />
			<CodigoContent routeId={routeId} />
			<CodigoFooter routeId={routeId} />
		</Fragment>
	);
}
