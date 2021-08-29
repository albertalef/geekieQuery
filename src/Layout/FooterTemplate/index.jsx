import React from 'react';
import styled from 'styled-components';

export default function FooterTemplate({ children }) {
	return (
		<FooterWrapper>
			<StepSide />
			<ContentSide>
				<Container>{children}</Container>
			</ContentSide>
		</FooterWrapper>
	);
}

const FooterWrapper = styled.div`
	position: fixed;
	bottom: 10px;
	width: 100vw;
	height: 60px;
	/* background-color: #00ff2a4e; */
	z-index: 2;
	display: flex;
`;
const StepSide = styled.div`
	width: ${({ theme }) => theme.variables.stepSide.width};
	max-width: ${({ theme }) => theme.variables.stepSide.maxWidth};
	height: 100%;
	/* background-color: blue; */
`;
const ContentSide = styled.div`
	width: calc(100% - ${({ theme }) => theme.variables.stepSide.width});
	height: 100%;
	/* background-color: red; */
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	width: ${({ theme }) => theme.variables.context.width};
	max-width: ${({ theme }) => theme.variables.context.maxWidth};
	height: 100%;
	/* background-color: blue; */
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
