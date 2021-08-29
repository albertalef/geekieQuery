import React, { useRef, useState } from 'react';
import usePopup from '../../../../Hooks/usePopup';
import Popup from '../../../../Components/Popup';
import CopyButton from './CopyButton';
import {
	InputLinkWrapper,
	Label,
	TextField,
	TextFieldContainer,
} from './style';
import { useValues } from '../../../../Hooks/useValues';

export default function InputLink() {
	const [focused, setFocused] = useState(false);
	const [popup, showPopup] = usePopup(2);
	const inputRef = useRef(null);
	const { link } = useValues();
	const { linkValue, setLinkValue } = link;

	function inputHandleOnFocus(e) {
		setFocused(true);
	}
	function inputHandleOnBlur(e) {
		setFocused(false);
	}
	function copyHandle(e) {
		showPopup();
		setLinkValue('');
	}

	return (
		<InputLinkWrapper>
			<TextFieldContainer
				focused={focused}
				onMouseDown={(e) => {
					e.preventDefault();
					inputRef.current.focus();
				}}
			>
				<TextField
					type="text"
					ref={inputRef}
					onFocus={inputHandleOnFocus}
					onBlur={inputHandleOnBlur}
					onChange={(e) => {
						setLinkValue(e.target.value);
					}}
					focused={focused}
					value={linkValue}
				/>
				<Label focused={focused}>view-source:</Label>

				<CopyButton text={linkValue} focused={focused} onCopy={copyHandle} />
			</TextFieldContainer>

			<Popup popup={popup} text={'Link Copiado!'} />
		</InputLinkWrapper>
	);
}
