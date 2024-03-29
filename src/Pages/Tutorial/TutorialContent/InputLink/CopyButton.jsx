import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CopyButton({ text, focused, onCopy }) {
	return (
		<CopyToClipboard
			onCopy={onCopy}
			text={
				text !== '' ? 'view-source:' + text.replaceAll('view-source:', '') : ''
			}
		>
			<Button
				onClick={(e) => {
					e.stopPropagation();
					e.preventDefault();
				}}
				focused={focused}
			>
				<i className="far fa-copy"></i>
			</Button>
		</CopyToClipboard>
	);
}

const Button = styled.button`
	width: 40px;
	height: 100%;

	position: absolute;
	right: 0;
	z-index: 10;

	background-color: #fff;
	cursor: pointer;

	border: 0;
	i {
		transition: 0.5s;

		font-size: 18px;
		color: ${({ focused, theme }) =>
			focused ? `${theme.primaryColor}` : '#D5D9DC'};
	}
	&:hover {
		i {
			color: #79b4df;
		}
	}
`;
