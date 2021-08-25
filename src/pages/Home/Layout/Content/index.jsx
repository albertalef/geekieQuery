import React from 'react';
import { ContentWrapper, Container } from './style';
import Tutorial from './Screen/Tutorial';
export default function Content() {
	return (
		<ContentWrapper>
			<Container>
				<Tutorial></Tutorial>
			</Container>
		</ContentWrapper>
	);
}
