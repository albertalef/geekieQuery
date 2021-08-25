import styled from 'styled-components';

const Title = styled.h1`
	color: ${({ theme }) => theme.title.color};

	font-family: ${({ theme }) => theme.title.fontFamily};
	font-size: 28px;
	font-style: normal;
	font-weight: 800;
	line-height: 36px;
	letter-spacing: 0.02em;
	text-align: left;
`;
export default Title;
