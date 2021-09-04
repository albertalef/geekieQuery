import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useMenu from '../../../Hooks/useMenu';

export default function StepSide() {
	const { menuStatus, toggleMenu } = useMenu();
	return (
		<Wrapper>
			<MobileContainer>
				<HomeButton as={Link} to="/">
					<i className="fas fa-home"></i>
				</HomeButton>
				<MenuButton onClick={toggleMenu} menuStatus={menuStatus}>
					<i className="fas fa-bars"></i>
				</MenuButton>
			</MobileContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: ${({ theme }) => theme.variables.stepSide.width};
	max-width: ${({ theme }) => theme.variables.stepSide.maxWidth};
	height: 100%;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid ${({ theme }) => theme.mobile.header.bottomColor};
		max-width: unset;
	}
`;
const MobileContainer = styled.div`
	display: none;

	/* ------------------!!Media-Mobile!!--------------------- */

	${({ theme }) => theme.variables.mobile.media} {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
	}
`;
const MenuButton = styled.button`
	display: flex;
	height: 100%;
	width: calc(${({ theme }) => theme.variables.mobile.header.height} + 3%);
	border: 0;
	background-color: transparent;
	justify-content: center;
	align-items: center;
	i {
		font-size: 1.9em;
		color: ${({ theme }) => theme.title.color};
		::before {
			content: ${({ menuStatus }) => (menuStatus ? "'\f00d'" : "'\f0c9'")};
		}
	}
`;
const HomeButton = styled.button`
	display: flex;
	height: 100%;
	width: calc(${({ theme }) => theme.variables.mobile.header.height} + 3%);
	border: 0;
	background-color: transparent;
	justify-content: center;
	align-items: center;
	i {
		font-size: 1.5em;
		color: ${({ theme }) => theme.title.color};
	}
`;
