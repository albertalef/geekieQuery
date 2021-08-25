import styled from 'styled-components';

export const List = styled.div`
	width: 100%;
	height: 70%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;
export const Link = styled.a`
	text-decoration: none;
	display: flex;
	justify-content: start;
	flex-direction: row;
	cursor: pointer;
	text-align: center;
	align-items: center;
	color: #2696e8;
	p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		/* identical to box height, or 150% */

		letter-spacing: 0.02em;
	}
	i {
		margin-left: 10px;
	}
`;
