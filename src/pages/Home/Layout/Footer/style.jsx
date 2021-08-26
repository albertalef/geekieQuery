import styled from 'styled-components';
const StepWidth = '500px';
export const FooterWrapper = styled.div`
	position: absolute;
	bottom: 10px;
	width: 100vw;
	height: 60px;
	/* 	background-color: #00ff2a4e; */
	z-index: 10;
	display: flex;
	justify-content: center;
`;
export const StepSide = styled.div`
	width: 500px;
	height: 100%;
	/* 	background-color: blue; */
`;
export const ContentSide = styled.div`
	width: calc(100% - ${StepWidth});
	height: 100%;
	/* 	background-color: red; */
	display: flex;
	justify-content: center;
`;
