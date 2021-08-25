import styled from 'styled-components';
import React from 'react';

export default function ButtonGroup() {
	return (
		<ButtonGroupWrapper>
			<Skip>Pular</Skip>
			<Next>
				<p>Proximo Passo</p>
				<i class="fas fa-long-arrow-alt-right"></i>
			</Next>
		</ButtonGroupWrapper>
	);
}
export const ButtonGroupWrapper = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Next = styled.button`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-around;

	cursor: pointer;

	height: 45px;
	width: 180px;
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
const Skip = styled.button`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-around;

	cursor: pointer;

	height: 45px;
	width: 140px;
	border: 0;

	background: #35a1ee3d;

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
		background: #35a1ee6a;
		color: #2181c5;
	}
`;
