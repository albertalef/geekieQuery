import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useValues } from '../../../../Hooks/useValues';

export default function CodeInput() {
	const [focused, setFocused] = useState(false);
	const inputRef = useRef(null);
	function inputHandleOnFocus(e) {
		setFocused(true);
	}
	function inputHandleOnBlur(e) {
		setFocused(false);
	}

	const { sourceCode } = useValues();
	const { sourceCodeValue, setSourceCodeValue } = sourceCode;
	return (
		<TextFieldContainer
			focused={focused}
			onClick={(e) => {
				e.preventDefault();
				inputRef.current.focus();
			}}
		>
			<TextArea
				onChange={(e) => {
					setSourceCodeValue(e.target.value);
				}}
				ref={inputRef}
				onFocus={inputHandleOnFocus}
				onBlur={inputHandleOnBlur}
				value={sourceCodeValue}
				name="code"
			></TextArea>
		</TextFieldContainer>
	);
}

export const TextFieldContainer = styled.div`
	width: 100%;
	height: 65%;
	margin-top: 50px;

	background-color: #fff;

	position: relative;

	border-radius: 4px;
	box-sizing: border-box;

	display: flex;
	justify-content: center;
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

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		margin: 13% 0px;
	}
`;
const TextArea = styled.textarea`
	color: #5b758a;
	height: 100%;
	width: 96%;
	resize: none;
	border: 0;
	margin: 0;
	padding: 0;
	font-family: Montserrat;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 23px;
	letter-spacing: 0px;
	text-align: left;
	caret-color: #5b758a96;
	:focus {
		outline: none;
	}
	::-webkit-scrollbar {
		display: none;
	}
`;
