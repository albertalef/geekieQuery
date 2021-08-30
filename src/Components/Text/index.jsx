import styled from 'styled-components';

const Text = styled.p`
	color: ${({ theme }) => theme.text.color};

	font-family: ${({ theme }) => theme.text.fontFamily};
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.02em;
	text-align: left;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		font-size: 1em;
		line-height: 17px;
	}
`;

export default Text;
