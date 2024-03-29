import styled from 'styled-components';

export const StepsWrapper = styled.div`
	height: 100%;
	width: ${({ theme }) => theme.variables.stepSide.width};
	max-width: ${({ theme }) => theme.variables.stepSide.maxWidth};
	background-color: ${({ theme }) => theme.primaryColor};
	display: flex;
	justify-content: center;
	align-items: center;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		transition: 0.5s;
		position: fixed;
		width: 100%;
		max-width: unset;
		height: 30vh;
		z-index: 999;
		top: ${({ active, theme }) =>
			active ? theme.variables.mobile.header.height : '-100%'};
		border-bottom: 3px solid #8ccdfc;
	}
`;

export const StepsContainer = styled.div`
	width: 60%;
	max-width: 300px;
	height: 180px;
	margin-bottom: 120px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h1 {
		color: ${({ theme }) => theme.secondaryColor};
		font-size: 18px;
		font-family: ${({ theme }) => theme.title.fontFamily};
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 0.02em;
		text-align: left;
	}
	a {
		text-decoration: none;
	}

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		max-width: unset;
		height: 80%;
		margin-bottom: 0px;
	}
`;

export const Step = styled.div`
	/* background-color: #ffffff68; */
	display: flex;
	align-items: center;

	text-decoration: none;
	:hover {
		p {
			transform: scale(1.08);
			margin-left: 18;
		}
	}
	p {
		margin-left: 14px;

		color: white;

		font-family: ${({ theme }) => theme.title.fontFamily};
		font-size: 18px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 0.02em;
		text-align: left;
	}
`;
