import styled from 'styled-components';

const NextButton = styled.button`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-around;

	cursor: pointer;

	width: 200px;
	height: 45px;
	border: 0;

	background: #35a0ee;
	box-shadow: 0px 0px 20px rgba(53, 160, 238, 0.25);
	border-radius: 4px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 13px;
	line-height: 24px;

	text-align: center;
	letter-spacing: 0.02em;

	color: #ffffff;

	transition: 0.3s;
	&:hover {
		background: #2387cf;
	}
	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		min-width: unset;
		padding: 10px 25px;
		height: 100%;
		width: unset;
	}
`;

export default NextButton;
