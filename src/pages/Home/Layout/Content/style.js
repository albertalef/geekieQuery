import styled from 'styled-components';
const headerHeight = '80px';
export const ContentWrapper = styled.div`
	width: calc(100vw - 500px);
	background-color: ${({ theme }) => theme.secondaryColor};
	overflow-x: hidden;
	overflow-y: auto;
`;
export const Container = styled.div`
	margin-top: ${headerHeight};
	height: calc(100% - ${headerHeight});
	width: 100%;
`;
