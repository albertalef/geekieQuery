import styled from 'styled-components';

export const PopupWrapper = styled.span`
	width: 300px;
	height: 50px;

	background-color: ${({ theme }) => theme.secondaryColor};

	position: fixed;
	bottom: 10px;
	z-index: 10;

	display: flex;
	justify-content: center;
	align-items: center;

	box-sizing: border-box;
	border: ${({ theme }) => theme.primaryColor} solid 2px;
	border-radius: 5px;

	transition: 0.5s;

	pointer-events: none;

	${({ popup }) => (popup ? 'right: 10px ' : 'right: -500px;')};

	p {
		font-family: Montserrat;
		content: 'oi';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 23px;
		letter-spacing: 0px;
		text-align: left;

		color: ${({ theme }) => theme.primaryColor};
	}
`;
