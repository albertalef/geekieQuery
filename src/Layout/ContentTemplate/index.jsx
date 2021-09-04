import React from 'react';
import styled from 'styled-components';

export default function ContentTemplate({ children }) {
	return (
		<ContentWrapper>
			<Container>{children}</Container>
		</ContentWrapper>
	);
}

const ContentWrapper = styled.div`
	width: calc(100vw - ${({ theme }) => theme.variables.stepSide.width});
	background-color: ${({ theme }) => theme.secondaryColor};
	overflow: hidden;
	display: flex;
	justify-content: center;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		width: 100vw;
		height: 100%;
	}
`;

const Container = styled.div`
	margin-top: ${({ theme }) => theme.variables.header.height};
	height: calc(
		100% - ${({ theme }) => theme.variables.header.height} -
			${({ theme }) => theme.variables.footer.height} -
			${({ theme }) => theme.variables.footer.bottom}
	);
	box-sizing: border-box;
	width: ${({ theme }) => theme.variables.context.width};
	max-width: ${({ theme }) => theme.variables.context.maxWidth};

	/* ------------------!!Media-Mobile!!--------------------- */
	${({ theme }) => theme.variables.mobile.media} {
		height: calc(
			100% - ${({ theme }) => theme.variables.mobile.header.height} -
				${({ theme }) => theme.variables.mobile.footer.height} -
				${({ theme }) => theme.variables.mobile.footer.bottom}
		);
		margin-top: ${({ theme }) => theme.variables.mobile.header.height};
	}
`;
