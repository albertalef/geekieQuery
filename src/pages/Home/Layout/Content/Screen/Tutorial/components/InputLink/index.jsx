import React, { useRef, useState } from 'react';
import usePopup from '../../../../../../Components/Hooks/usePopup';
import Popup from '../../../../../../Components/Utils/Popup/index.jsx';
import CopyButton from './elements/CopyButton';
import {
	InputLinkWrapper,
	Label,
	TextField,
	TextFieldContainer,
} from './style';

export default function InputLink() {
	const [focused, setFocused] = useState(false);
	const [link, setLink] = useState('');
	const [popup, showPopup] = usePopup(2);
	const inputRef = useRef(null);

	function inputHandleOnFocus(e) {
		setFocused(true);
	}
	function inputHandleOnBlur(e) {
		setFocused(false);
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
						setLink(e.target.value);
					}}
					focused={focused}
					value={link}
				/>
				<Label focused={focused}>view-source:</Label>

				<CopyButton text={link} focused={focused} showPopup={showPopup} />
			</TextFieldContainer>

			<Popup popup={popup} text={'Link Copiado!'} />
		</InputLinkWrapper>
	);
}
