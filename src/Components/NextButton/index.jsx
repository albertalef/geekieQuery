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
`;

export default NextButton;
