import styled from 'styled-components';
export const ContentWrapper = styled.div`
	width: calc(100vw - ${({ theme }) => theme.variables.stepsSide.width});
	background-color: ${({ theme }) => theme.secondaryColor};
	overflow-y: auto;
	display: flex;
	justify-content: center;
`;
export const Container = styled.div`
	margin-top: ${({ theme }) => theme.variables.header.height};
	height: calc(
		100% - ${({ theme }) => theme.variables.header.height} -
			${({ theme }) => theme.variables.footer.height}
	);
	width: ${({ theme }) => theme.variables.context.width};
	max-width: ${({ theme }) => theme.variables.context.maxWidth};
`;
