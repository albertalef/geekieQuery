import { createContext, useContext, useState } from 'react';
import React from 'react';

const MenuContext = createContext();

export function MenuStatusProvider({ children }) {
	const [menuStatus, setMenuStatus] = useState(false);
	function toggleMenu() {
		setMenuStatus(!menuStatus);
	}
	return (
		<MenuContext.Provider value={{ menuStatus, setMenuStatus, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	);
}
export default function useMenu() {
	const { menuStatus, setMenuStatus, toggleMenu } = useContext(MenuContext);
	return { menuStatus, setMenuStatus, toggleMenu };
}
