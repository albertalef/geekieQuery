import React from 'react';
import { PopupWrapper } from './style';

export default function Popup({ popup, text }) {
	return (
		<PopupWrapper popup={popup}>
			<p>{text}</p>
		</PopupWrapper>
	);
}
