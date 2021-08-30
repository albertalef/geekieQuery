import styled from 'styled-components';

export const List = styled.ul`
	width: 100%;
	height: 70%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media (max-width: 1220px) {
		overflow-y: scroll;
	}
	p {
		margin-bottom: 20px;
		strong {
			font-weight: 600;
		}
	}

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		padding: 10px 0;
		p {
			padding: 0 10px;
		}
		border-top: 1px solid ${({ theme }) => theme.mobile.header.bottomColor};
		border-bottom: 1px solid ${({ theme }) => theme.mobile.header.bottomColor};
	}
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
