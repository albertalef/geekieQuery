import { useState } from 'react';

export default function usePopup(timeInSeconds) {
	const timeInMs = timeInSeconds * 1000;
	const [popup, setPopup] = useState(false);
	function showPopup(e) {
		if (!popup) {
			setPopup(true);
			setTimeout(() => {
				setPopup(false);
			}, timeInMs);
		}
	}
	return [popup, showPopup];
}
