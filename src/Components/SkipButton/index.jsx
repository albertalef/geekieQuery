import styled from 'styled-components';
const SkipButton = styled.button`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-around;

	cursor: pointer;

	padding: 10.5px 39px;
	min-width: 140px;
	border: 0;

	background: #cee8fb;

	box-shadow: 0px 0px 20px rgba(53, 160, 238, 0.25);
	border-radius: 4px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 13px;
	line-height: 24px;

	text-align: center;
	letter-spacing: 0.02em;

	color: #35a0ee;

	transition: 0.3s;
	&:hover {
		background: #b4d3e9;
		color: #2181c5;
	}

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		min-width: unset;
		padding: 10px 25px;
		height: 100%;
	}
`;

export default SkipButton;
