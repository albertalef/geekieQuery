import styled from 'styled-components';

export const InputLinkWrapper = styled.div`
	/* background-color: #88ff0013; */
	width: 100%;
	height: 15%;

	display: flex;
	align-items: center;
	/* ------------------!!Media-Mobile!!--------------------- */
	${({ theme }) => theme.variables.mobile.media} {
		padding: 10px 0;
	}
`;
export const TextFieldContainer = styled.div`
	width: 100%;
	height: 45px;

	background-color: #fff;

	position: relative;
	padding-left: 25px;

	border-radius: 4px;
	box-sizing: border-box;

	display: flex;
	justify-content: start;
	align-items: center;

	cursor: text;

	transition: 0.2s border;
	${({ focused, theme }) =>
		focused
			? `border: 2px solid ${theme.primaryColor};`
			: 'border: 2px solid #D5D9DC;'}

	&:hover {
		border-color: ${({ theme }) => theme.primaryColor};
	}
`;

export const TextField = styled.input`
	color: #5b758a;
	width: 90%;
	height: 100%;
	border: 0;
	font-family: Montserrat;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 23px;
	letter-spacing: 0px;
	text-align: left;
	caret-color: transparent;
	transition: 0.2s cubic-bezier(0.04, 0.41, 0.48, 0.97);

	transition-property: padding-left, caret-color, margin-left, width;
	padding-left: 70px;
	margin-left: 34px;
	&:focus {
		width: 92%;
		padding-left: 0;
		margin-left: 0;
		outline: none;
		transition: 0.5s cubic-bezier(0.76, -0.35, 0.1, 0.82);
		caret-color: #59666e;
	}
`;
export const Label = styled.p`
	position: absolute;
	left: 3%;
	top: 20%;
	z-index: 10;
	font-family: Montserrat;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 23px;
	letter-spacing: 0px;
	text-align: left;
	color: #d5d9dc;
	box-sizing: content-box;
	transition: 0.2s all, color 0s,
		background-color 0.2s cubic-bezier(1, 0.99, 0.1, 0.99);

	${({ focused, theme }) =>
		focused
			? `background-color: #fff;

		padding: 0 5px;
		margin: 0;
		top: -15px;
		left: 15px;
		color: ${theme.primaryColor};
		transform: scale(0.8);
		
		`
			: ``}
`;
