import styled from 'styled-components';

export const StepsWrapper = styled.div`
	height: 100%;
	width: 500px;
	background-color: ${({ theme }) => theme.primaryColor};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StepsContainer = styled.div`
	width: 350px;
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
`;

export const Step = styled.div`
	/* background-color: #ffffff68; */

	display: flex;
	align-items: center;

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
