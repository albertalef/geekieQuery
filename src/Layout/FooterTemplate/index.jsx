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
	bottom: ${({ theme }) => theme.variables.footer.bottom};
	width: 100vw;
	height: ${({ theme }) => theme.variables.footer.height};
	/* background-color: #00ff2a4e; */
	z-index: 2;
	display: flex;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		height: ${({ theme }) => theme.variables.mobile.footer.height};
		bottom: ${({ theme }) => theme.variables.mobile.footer.bottom};
	}
`;
const StepSide = styled.div`
	width: ${({ theme }) => theme.variables.stepSide.width};
	max-width: ${({ theme }) => theme.variables.stepSide.maxWidth};
	height: 100%;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		display: none;
	}
`;
const ContentSide = styled.div`
	width: calc(100% - ${({ theme }) => theme.variables.stepSide.width});
	height: 100%;
	/* background-color: red; */
	display: flex;
	justify-content: center;
	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		width: 100%;
	}
`;

const Container = styled.div`
	width: ${({ theme }) => theme.variables.context.width};
	max-width: ${({ theme }) => theme.variables.context.maxWidth};
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
